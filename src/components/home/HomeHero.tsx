"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Tam genişlik video hero. data-theme="dark" → Navbar bu alanın üstündeyken
 * şeffaf + beyaz yazıya geçer. Üstteki karartma (::before) menü yazısını okunur tutar.
 */
export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
      setPaused(true);
    }
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <div className="yh-hero" data-theme="dark">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="yh-poster" src="/img/hero-poster.webp" alt="" />
      <video ref={videoRef} autoPlay muted loop playsInline poster="/img/hero-poster.webp">
        <source src="/img/hero-loop-seamless.mp4" type="video/mp4" />
      </video>

      <div className="yh-hero-content">
        <div className="yh-eyebrow">YemiGO Restoran Platformu</div>
        <h1>
          Restoranınızın tamamı,
          <br />
          tek platformda.
        </h1>
        <p className="yh-sub">
          Kasa, mutfak, kurye, paket platformları ve kendi sipariş kanalınız — gerçek zamanlı.
        </p>
        <div className="yh-actions">
          <Link className="yh-btn yh-btn-primary" href="/iletisim">
            Ücretsiz Demo
          </Link>
          <a className="yh-btn yh-btn-glass" href="#urunler">
            Ürünleri Keşfet
          </a>
        </div>
      </div>

      <button
        className="yh-pause"
        onClick={toggle}
        aria-label={paused ? "Videoyu oynat" : "Videoyu durdur"}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          {paused ? <path d="M8 5l11 7-11 7z" /> : <path d="M7 5h3v14H7zM14 5h3v14h-3z" />}
        </svg>
      </button>
    </div>
  );
}
