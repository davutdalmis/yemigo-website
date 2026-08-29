"use client";

import { useEffect, useRef } from "react";
import { Bike } from "lucide-react";
import "leaflet/dist/leaflet.css";
import {
  EXPRESS_LEGS,
  EXPRESS_BRANCH,
  EXPRESS_LEG_ENDS,
} from "@/lib/expressRoute";

/**
 * Express canlı kurye takibi — GERÇEK harita (Leaflet + CARTO açık altlık) ve
 * GERÇEK yol güzergahı (OSRM driving bacakları).
 *
 * Kurye SIRAYLA ilerler: şube → S1 → S2 → S3 → şube. Her an YALNIZCA o anki
 * bacağın çizgisi görünür; teslimata varınca bir sonraki bacağa geçer.
 *
 * API anahtarı gerektirmez; harita yalnızca tarayıcıda (useEffect) kurulur.
 */

function segDist(a: [number, number], b: [number, number]) {
  const dy = a[0] - b[0];
  const dx = (a[1] - b[1]) * Math.cos((a[0] * Math.PI) / 180);
  return Math.sqrt(dx * dx + dy * dy);
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

export default function ExpressLiveMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    let raf = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any = null;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !el) return;

      map = L.map(el, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        dragging: false,
        touchZoom: false,
        maxBoundsViscosity: 1.0,
      });

      // CARTO "Positron (no labels)" — açık/beyaz altlık, yer ismi yok.
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
        { subdomains: "abcd", maxZoom: 20 }
      ).addTo(map);

      const legs = EXPRESS_LEGS as [number, number][][];
      const legEnds = EXPRESS_LEG_ENDS as [number, number][];

      // Tüm bacakları kapsayan sınır → bölgeyi kilitle.
      const all: [number, number][] = legs.flat();
      const bounds = L.latLngBounds(all);
      map.fitBounds(bounds, { padding: [44, 44] });
      map.setMaxBounds(bounds.pad(0.06));
      map.setMinZoom(map.getZoom());
      map.setMaxZoom(map.getZoom());

      const mk = (pos: [number, number], html: string, size: number, z = 0) =>
        L.marker(pos, {
          icon: L.divIcon({
            html,
            className: "",
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
          }),
          zIndexOffset: z,
          interactive: false,
        }).addTo(map);

      // Sabit şube + (dinamik) hedef + kurye
      mk(EXPRESS_BRANCH as [number, number], branchIconHtml, 34);
      const dest = mk(legEnds[0], destIconHtml, 18, 500);
      const courier = mk(legs[0][0], courierIconHtml, 32, 1000);

      // YALNIZCA o anki bacağın çizgisi — beyaz kılıf + indigo üst
      const casing = L.polyline(legs[0], {
        color: "#ffffff",
        weight: 9,
        opacity: 0.95,
        lineJoin: "round",
        lineCap: "round",
      }).addTo(map);
      const line = L.polyline(legs[0], {
        color: "#4F46E5",
        weight: 5,
        opacity: 0.95,
        lineJoin: "round",
        lineCap: "round",
      }).addTo(map);

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
        casing.setLatLngs(legs[i]);
        line.setLatLngs(legs[i]);
        dest.setLatLng(legEnds[i]);
        courier.setLatLng(legs[i][0]);
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

        const p = Math.min(1, Math.max(0, elapsed / duration));
        const target = p * total;
        let j = 0;
        while (j < cum.length - 2 && cum[j + 1] < target) j++;
        const span = cum[j + 1] - cum[j] || 1;
        const f = (target - cum[j]) / span;
        const lat = leg[j][0] + (leg[j + 1][0] - leg[j][0]) * f;
        const lng = leg[j][1] + (leg[j + 1][1] - leg[j][1]) * f;
        courier.setLatLng([lat, lng]);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      setTimeout(() => {
        if (!cancelled && map) map.invalidateSize();
      }, 200);
    })();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      if (map) map.remove();
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[#f4f6fa] shadow-[0_30px_70px_-30px_rgba(17,24,39,0.4)] ring-1 ring-black/5">
      {/* Kurye nabız animasyonu (divIcon için global keyframe) */}
      <style>{`@keyframes exp-ping{0%{transform:scale(1);opacity:.35}70%{transform:scale(2);opacity:0}100%{transform:scale(2);opacity:0}}.exp-courier-ring{animation:exp-ping 1.6s cubic-bezier(0,0,.2,1) infinite}`}</style>

      {/* Gerçek harita buraya */}
      <div ref={ref} className="absolute inset-0 z-0" aria-label="Canlı kurye takibi haritası" />

      {/* Canlı rozet */}
      <div className="pointer-events-none absolute left-4 top-4 z-[1000] inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-apple-text shadow-sm ring-1 ring-black/5 backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        Canlı Takip
      </div>

      {/* Şube etiketi */}
      <div className="pointer-events-none absolute right-4 top-4 z-[1000] inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 shadow-sm ring-1 ring-black/5 backdrop-blur">
        Maltepe Şube
      </div>

      {/* Alt kurye bilgi kartı */}
      <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-[1000] flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100">
          <Bike size={18} className="text-orange-600" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-apple-text">Kurye yolda</p>
          <p className="truncate text-xs text-apple-text-soft">
            Sıradaki teslimata gidiyor
          </p>
        </div>
        <span className="ml-auto shrink-0 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white">
          Canlı
        </span>
      </div>

      {/* OSM/CARTO atıf (zorunlu) */}
      <a
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-[64px] right-2 z-[1000] rounded bg-white/80 px-1.5 py-0.5 text-[9px] text-apple-text-muted backdrop-blur"
      >
        © OpenStreetMap · CARTO
      </a>
    </div>
  );
}
