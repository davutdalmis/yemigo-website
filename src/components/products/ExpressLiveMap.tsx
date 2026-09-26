"use client";

import { useEffect, useRef } from "react";
import { Bike } from "lucide-react";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  EXPRESS_LEGS,
  EXPRESS_BRANCH,
  EXPRESS_LEG_ENDS,
} from "@/lib/expressRoute";

/**
 * Express canlı kurye takibi — GERÇEK harita (MapLibre + OpenFreeMap açık altlık)
 * ve GERÇEK yol güzergahı (OSRM driving bacakları).
 *
 * Kurye SIRAYLA ilerler: şube → S1 → S2 → S3 → şube. Her an YALNIZCA o anki
 * bacağın çizgisi görünür; teslimata varınca bir sonraki bacağa geçer.
 *
 * Altlık: OpenFreeMap "positron" — API anahtarı istemez, ticari kullanıma açık.
 * (Eski CARTO altlığı 09.2026'da "API KEY REQUIRED" karosu dönmeye başladı.)
 * Harita yalnızca tarayıcıda (useEffect) kurulur.
 *
 * variant="card": ürün sayfalarındaki çerçeveli kart (bilgi kartı altta).
 * variant="tile": anasayfa kutusu — çerçevesiz, bilgi kartı üstte.
 */

type LngLat = [number, number];

const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

function segDist(a: LngLat, b: LngLat) {
  const dx = (a[0] - b[0]) * Math.cos((a[1] * Math.PI) / 180);
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

const toLngLat = (p: [number, number]): LngLat => [p[1], p[0]];

function htmlEl(html: string) {
  const d = document.createElement("div");
  d.innerHTML = html.trim();
  return d.firstElementChild as HTMLElement;
}

const branchIconHtml = `
  <div style="width:34px;height:34px;border-radius:9999px;background:#4F46E5;border:2px solid #fff;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 16px rgba(79,70,229,.45)">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l1-5h16l1 5"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/></svg>
  </div>`;

const destIconHtml = `
  <div style="width:18px;height:18px;border-radius:9999px;background:#fff;border:3px solid #64748b;box-shadow:0 2px 6px rgba(0,0,0,.2)"></div>`;

const courierIconHtml = `
  <div style="position:relative;width:32px;height:32px">
    <span class="exp-courier-ring" style="position:absolute;inset:0;border-radius:9999px;background:#F97316;opacity:.35"></span>
    <span style="position:absolute;inset:0;border-radius:9999px;background:#F97316;border:2px solid #fff;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 14px rgba(249,115,22,.5)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>
    </span>
  </div>`;

export default function ExpressLiveMap({
  variant = "card",
}: {
  variant?: "card" | "tile";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isTile = variant === "tile";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    let raf = 0;
    let map: import("maplibre-gl").Map | null = null;

    (async () => {
      const maplibregl = (await import("maplibre-gl")).default;
      if (cancelled || !el) return;

      const legs = EXPRESS_LEGS.map((leg) => leg.map(toLngLat));
      const legEnds = EXPRESS_LEG_ENDS.map(toLngLat);

      // Tüm bacakları kapsayan sınır
      const bounds = new maplibregl.LngLatBounds();
      legs.flat().forEach((c) => bounds.extend(c));

      const padding = isTile
        ? { top: 140, bottom: 200, left: 60, right: 60 }
        : { top: 56, bottom: 88, left: 44, right: 44 };

      map = new maplibregl.Map({
        container: el,
        style: STYLE_URL,
        bounds,
        fitBoundsOptions: { padding },
        interactive: false,
        attributionControl: false,
      });
      const m = map;

      m.on("load", () => {
        if (cancelled) return;
        // Önceki "light_nolabels" görünümü: yer adı / yol adı etiketlerini gizle
        for (const layer of m.getStyle().layers ?? []) {
          if (layer.type === "symbol") m.setLayoutProperty(layer.id, "visibility", "none");
        }

        // YALNIZCA o anki bacağın çizgisi — beyaz kılıf + indigo üst
        const legFeature = (i: number) => ({
          type: "Feature" as const,
          properties: {},
          geometry: { type: "LineString" as const, coordinates: legs[i] },
        });
        m.addSource("leg", { type: "geojson", data: legFeature(0) });
        const lineLayout = { "line-join": "round" as const, "line-cap": "round" as const };
        m.addLayer({
          id: "leg-casing",
          type: "line",
          source: "leg",
          layout: lineLayout,
          paint: { "line-color": "#ffffff", "line-width": 9, "line-opacity": 0.95 },
        });
        m.addLayer({
          id: "leg-line",
          type: "line",
          source: "leg",
          layout: lineLayout,
          paint: { "line-color": "#4F46E5", "line-width": 5, "line-opacity": 0.95 },
        });

        // Sabit şube + (dinamik) hedef + kurye
        new maplibregl.Marker({ element: htmlEl(branchIconHtml) })
          .setLngLat(toLngLat(EXPRESS_BRANCH))
          .addTo(m);
        const dest = new maplibregl.Marker({ element: htmlEl(destIconHtml) })
          .setLngLat(legEnds[0])
          .addTo(m);
        const courier = new maplibregl.Marker({ element: htmlEl(courierIconHtml) })
          .setLngLat(legs[0][0])
          .addTo(m);

        // Her bacağın kümülatif uzunluğu → sabit hız + bacak süresi
        const legCum = legs.map((leg) => {
          const cum = [0];
          for (let i = 1; i < leg.length; i++) cum[i] = cum[i - 1] + segDist(leg[i - 1], leg[i]);
          return cum;
        });
        const totalLen = legCum.reduce((s, c) => s + c[c.length - 1], 0) || 1;
        const LOOP_MS = 30000; // tüm turun hareket süresi
        const DWELL_MS = 900; // teslimat noktasında kısa bekleme

        let legIdx = 0;
        let legStart = 0;

        const setLeg = (i: number) => {
          (m.getSource("leg") as import("maplibre-gl").GeoJSONSource).setData(legFeature(i));
          dest.setLngLat(legEnds[i]);
          courier.setLngLat(legs[i][0]);
        };

        const tick = (now: number) => {
          if (cancelled) return;
          if (!legStart) legStart = now;

          const leg = legs[legIdx];
          const cum = legCum[legIdx];
          const total = cum[cum.length - 1] || 1;
          const duration = (total / totalLen) * LOOP_MS;
          const elapsed = now - legStart;

          if (elapsed >= duration + DWELL_MS) {
            legIdx = (legIdx + 1) % legs.length;
            legStart = now;
            setLeg(legIdx);
            raf = requestAnimationFrame(tick);
            return;
          }

          const target = Math.min(1, Math.max(0, elapsed / duration)) * total;
          let j = 0;
          while (j < cum.length - 2 && cum[j + 1] < target) j++;
          const span = cum[j + 1] - cum[j] || 1;
          const f = (target - cum[j]) / span;
          courier.setLngLat([
            leg[j][0] + (leg[j + 1][0] - leg[j][0]) * f,
            leg[j][1] + (leg[j + 1][1] - leg[j][1]) * f,
          ]);
          raf = requestAnimationFrame(tick);
        };
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          raf = requestAnimationFrame(tick);
        }
      });
    })();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      if (map) map.remove();
    };
  }, [isTile]);

  const infoCard = (
    <div
      className={`pointer-events-none absolute z-[2] flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur ${
        isTile
          ? "left-1/2 top-[62px] w-[min(340px,calc(100%-36px))] -translate-x-1/2 text-left"
          : "bottom-3 left-3 right-3"
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
        <Bike size={18} className="text-orange-600" strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-apple-text">Kurye yolda</p>
        <p className="truncate text-xs text-apple-text-soft">Sıradaki teslimata gidiyor</p>
      </div>
      <span className="ml-auto shrink-0 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white">
        Canlı
      </span>
    </div>
  );

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#f4f6fa] ${
        isTile ? "" : "rounded-[24px] shadow-[0_30px_70px_-30px_rgba(17,24,39,0.4)] ring-1 ring-black/5"
      }`}
    >
      {/* Kurye nabız animasyonu (işaretçi HTML'i için global keyframe) */}
      <style>{`@keyframes exp-ping{0%{transform:scale(1);opacity:.35}70%{transform:scale(2);opacity:0}100%{transform:scale(2);opacity:0}}.exp-courier-ring{animation:exp-ping 1.6s cubic-bezier(0,0,.2,1) infinite}`}</style>

      {/* Gerçek harita buraya */}
      {/* maplibre-gl.css kapsayıcıya position:relative verir — inline stil onu ezer */}
      <div
        ref={ref}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        aria-label="Canlı kurye takibi haritası"
      />

      {/* Canlı rozet */}
      <div className="pointer-events-none absolute left-4 top-4 z-[2] inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-apple-text shadow-sm ring-1 ring-black/5 backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        Canlı Takip
      </div>

      {/* Şube etiketi */}
      <div className="pointer-events-none absolute right-4 top-4 z-[2] inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
        Maltepe Şube
      </div>

      {infoCard}

      {/* OpenFreeMap / OSM atıf (zorunlu) */}
      <a
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute right-2 z-[2] rounded bg-white/80 px-1.5 py-0.5 text-[9px] text-apple-text-muted backdrop-blur ${
          isTile ? "bottom-2" : "bottom-[64px]"
        }`}
      >
        © OpenFreeMap · © OpenStreetMap
      </a>
    </div>
  );
}
