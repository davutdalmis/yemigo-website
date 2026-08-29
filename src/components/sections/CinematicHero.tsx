"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function CinematicHero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reducedMotion) {
      v.pause();
      return;
    }
    v.play().catch(() => {
      // Autoplay blocked; poster image stays visible.
    });
  }, [reducedMotion]);

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-black text-white"
    >
      {/* Full-bleed video background with subtle parallax */}
      <motion.div
        style={{ scale: videoScale, y: videoY }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/hero-poster.webp"
          aria-label="Yemigo restoran yönetim ekosistemi tanıtım videosu"
        >
          <source src="/img/hero-loop-seamless.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic vignette — keep media visible, ensure type contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]"
      />
      {/* Bottom dark gradient — anchors headline + creates blend into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[55%] bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.7)_30%,rgba(0,0,0,0.25)_70%,transparent_100%)]"
      />
      {/* Top fade — protects navbar without washing video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-black/55 via-black/25 to-transparent"
      />

      {/* Content — bottom-anchored, Tesla-style */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 sm:pb-28 md:pb-32"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.32em] text-white/70"
        >
          <span className="h-1 w-1 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.8)]" />
          Restoran Yönetim Platformu
        </motion.div>

        {/* Headline — light weight, large, tight tracking (Tesla / Meta) */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-5xl text-[44px] font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Tüm operasyon,
          <br />
          <span className="font-light italic text-white/85">tek ekosistemde.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          POS, kurye yönetimi, online sipariş ve paket entegrasyonları —
          tek platform, gerçek zamanlı senkron.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5"
        >
          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-all hover:bg-white/90 hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.45)]"
          >
            Ücretsiz Deneyin
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/urunler"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-all hover:bg-white/[0.12] hover:border-white/40"
          >
            Ürünleri Keşfet
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.2 }}
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.32em] text-white/55"
        >
          <span>Keşfet</span>
          <ChevronDown size={14} className="text-white/55" />
        </motion.div>
      </motion.div>
    </section>
  );
}
