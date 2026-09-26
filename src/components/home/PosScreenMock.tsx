"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * YemiGO POS (WPF) anasayfası — MainWindow birebir, 1600×900 tuval,
 * kapsayıcı genişliğine ölçeklenir. Değerler WPF kaynağından:
 * LightTheme.xaml, MainWindow.xaml, TableCard.xaml, SidebarOrderCardTemplate.xaml.
 */

type Card = {
  platform: "Uber Eats" | "YemekSepeti";
  name: string;
  lines: string[];
  amount: string;
  items: number;
  meta: string;
  isNew?: boolean;
  step?: { label: string; color: string; on: number; delay?: string };
};

const PLATFORM_COLOR = { "Uber Eats": "#06C167", YemekSepeti: "#FA0050" } as const;

const CARDS: Card[] = [
  { platform: "Uber Eats", name: "Elif K.", lines: ["Bağdat Cad. No:214 D:6, Maltepe", "Online Ödeme"], amount: "₺486,00", items: 3, meta: "#UE-8841 · 20:24", isNew: true },
  { platform: "YemekSepeti", name: "Mert A.", lines: ["Cevizli Mah. Tugay Yolu 18/3", "Online Kredi/Banka Kartı"], amount: "₺712,50", items: 4, meta: "#y18t-4k2q · 20:11", step: { label: "Hazırlanıyor", color: "#FF9800", on: 2, delay: "13 dk" } },
  { platform: "YemekSepeti", name: "Zeynep T.", lines: ["Altayçeşme Mah. Çamlı Sk. 7", "Kapıda Nakit"], amount: "₺348,00", items: 2, meta: "#k77p-2m9x · 19:58", step: { label: "Yolda", color: "#4F46E5", on: 4 } },
  { platform: "Uber Eats", name: "Can Y.", lines: ["Gel Al"], amount: "₺265,00", items: 2, meta: "#UE-8827 · 19:49", step: { label: "Hazır", color: "#4CAF50", on: 3 } },
];

// Dolu masalar: [açılış saati, tutar, adisyon basıldı mı]
const TABLES: Record<string, [string, string, boolean?]> = {
  S2: ["19:42", "1240,00"],
  S4: ["20:05", "385,50"],
  S7: ["19:18", "2110,00", true],
  S11: ["20:12", "640,00"],
  S15: ["19:55", "918,00"],
};

export default function PosScreenMock() {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const canvas = canvasRef.current;
    if (!frame || !canvas) return;
    const fit = () => {
      canvas.style.transform = `scale(${frame.clientWidth / 1600})`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(frame);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="yh-shot yh-pos-frame" ref={frameRef}>
      <div
        className="yh-pos"
        ref={canvasRef}
        role="img"
        aria-label="YemiGO POS anasayfası: sipariş kartları, platform sekmeleri ve masa ızgarası"
      >
        {/* Kenar çubuğu */}
        <aside className="p-side">
          <div className="p-id">
            <div className="p-ini">BF</div>
            <div>
              <div className="p-firm">Bafetto</div>
              <div className="p-branch">Maltepe</div>
            </div>
          </div>
          <div className="p-sep" />
          {CARDS.map((c) => {
            const color = PLATFORM_COLOR[c.platform];
            return (
              <div key={c.meta} className={`p-card${c.isNew ? " new" : ""}`}>
                <div className="p-head">
                  <span className="p-dot" style={{ "--c": color } as CSSProperties} />
                  <b style={{ color }}>{c.platform}</b>
                  {c.isNew && (
                    <span className="p-pill" style={{ background: "#FFEBEE", color: "#D01E3E" }}>
                      YENİ
                    </span>
                  )}
                </div>
                <div className="p-name">{c.name}</div>
                {c.lines.map((l) => (
                  <div key={l} className="p-sub">
                    {l}
                  </div>
                ))}
                <div className="p-div" />
                <div className="p-amt">
                  <span>{c.amount}</span>
                  <small>{c.items} ürün</small>
                </div>
                <div className="p-meta">{c.meta}</div>
                {c.step && (
                  <>
                    <div className="p-steps" style={{ "--s": c.step.color } as CSSProperties}>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <i key={i} className={i < c.step!.on ? "on" : undefined} />
                      ))}
                    </div>
                    <div className="p-step">
                      <span style={{ color: c.step.color }}>{c.step.label}</span>
                      {c.step.delay && <span className="p-delay">{c.step.delay}</span>}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </aside>

        {/* Navbar: menü dairesi + ana hap + telefon dairesi */}
        <div className="p-nav">
          <div className="p-more">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="#fff">
              <rect width="8" height="8" rx="2.2" />
              <rect x="10" width="8" height="8" rx="2.2" />
              <rect y="10" width="8" height="8" rx="2.2" />
              <rect x="10" y="10" width="8" height="8" rx="2.2" />
            </svg>
          </div>
          <div className="p-pill-bar">
            <span className="p-tab act">
              SALON <em>5</em>
            </span>
            <span className="p-tab">
              TERAS <em>1</em>
            </span>
            <span className="p-vsep" />
            <span className="p-tab">
              YemekSepeti <em>2</em>
            </span>
            <span className="p-tab">
              Uber Eats <em>2</em>
            </span>
            <span className="p-tab">Migros Yemek</span>
          </div>
          <div className="p-phone">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
            </svg>
          </div>
        </div>

        {/* Masa ızgarası */}
        <div className="p-tables">
          {Array.from({ length: 21 }, (_, i) => {
            const n = `S${i + 1}`;
            const d = TABLES[n];
            return (
              <div key={n} className={`p-t${d ? (d[2] ? " rcp" : " occ") : ""}`}>
                <span className="n">{n}</span>
                {d && (
                  <>
                    <span className="tm">{d[0]}</span>
                    <span className="a">₺{d[1]}</span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Saat kutusu */}
        <div className="p-clock">
          <div className="t">20:26</div>
          <div className="d">Cum, 25 Eyl</div>
        </div>
      </div>
    </div>
  );
}
