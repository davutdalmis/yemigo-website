"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import Container from "@/components/ui/Container";
import DeviceFrame from "@/components/ui/DeviceFrame";
import ExpressLiveMap from "@/components/products/ExpressLiveMap";
import ScrollReveal from "@/components/animations/ScrollReveal";

type Product = {
  id: string;
  name: string;
  tagline: string;
  platform: string;
  image: string;
  imageAspect: "portrait" | "landscape";
  accent: "indigo" | "orange";
  href: string;
};

const PRODUCTS: Product[] = [
  {
    id: "pos",
    name: "YemiGO POS",
    tagline: "Restoranınızın dijital beyni",
    platform: "Windows",
    image: "/img/product-pos-light.webp",
    imageAspect: "landscape",
    accent: "indigo",
    href: "/urunler/pos",
  },
  {
    id: "manager",
    name: "YemiGO Manager",
    tagline: "İşletmeniz cebinizde",
    platform: "iOS / Android",
    image: "/img/manager-anasayfa.webp",
    imageAspect: "portrait",
    accent: "indigo",
    href: "/urunler/manager",
  },
  {
    id: "express",
    name: "YemiGO Express",
    tagline: "Teslimat sürecinin tam kontrolü",
    platform: "iOS / Android",
    image: "/img/product-express-light.webp",
    imageAspect: "portrait",
    accent: "orange",
    href: "/urunler/express",
  },
  {
    id: "panel",
    name: "YemiGO Panel",
    tagline: "Veriye dayalı kararlar",
    platform: "Web",
    image: "/img/panel-mbp.webp",
    imageAspect: "landscape",
    accent: "indigo",
    href: "/urunler/panel",
  },
  {
    id: "online-siparis",
    name: "Online Sipariş",
    tagline: "Kendi dijital sipariş kanalınız",
    platform: "Web",
    image: "/img/product-online-siparis-light.webp",
    imageAspect: "portrait",
    accent: "orange",
    href: "/urunler/online-siparis",
  },
];

const featured = PRODUCTS[0];
const rest = PRODUCTS.slice(1);

function FeaturedCard({ product }: { product: Product }) {
  const isPos = product.id === "pos";
  return (
    <Link
      href={product.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-white transition-all duration-500 hover:bg-white"
    >
      {/* Image area */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-white">
        {isPos ? (
          <div className="w-[78%] max-w-[720px] transition-transform duration-700 group-hover:scale-[1.02]">
            <DeviceFrame
              src="/img/wpf-pos-salon.webp"
              alt="YemiGO POS — Salon ekranı"
              aspect="3/2"
              priority
            />
          </div>
        ) : (
          <div className="relative h-[70%] w-[80%]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 90vw, 60vw"
              className="object-contain transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        )}

        {/* Subtle hover halo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              product.accent === "indigo"
                ? "radial-gradient(ellipse at 50% 100%, rgba(79,70,229,0.10) 0%, transparent 60%)"
                : "radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.10) 0%, transparent 60%)",
          }}
        />

        {/* Platform pill */}
        <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-apple-border-soft bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-apple-text-soft backdrop-blur-md">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              product.accent === "indigo"
                ? "bg-indigo-500"
                : "bg-orange-500"
            }`}
          />
          {product.platform}
        </div>

        {/* Arrow chip */}
        <div
          className={`absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
            product.accent === "indigo"
              ? "border-indigo-200 bg-white text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
              : "border-orange-200 bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
          }`}
        >
          <ArrowUpRight
            size={18}
            className="transition-transform duration-500 group-hover:rotate-45"
          />
        </div>
      </div>

      {/* Caption */}
      <div className="px-7 py-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-apple-text-muted">
          Öne çıkan
        </span>
        <h3 className="mt-1.5 text-3xl font-semibold leading-tight tracking-tight text-apple-text">
          {product.name}
        </h3>
        <p className="mt-1.5 text-base text-apple-text-soft">
          {product.tagline}
        </p>
      </div>
    </Link>
  );
}

function ManagerDualPhones() {
  return (
    <div className="relative flex h-[88%] w-[80%] items-center justify-center transition-transform duration-700 group-hover:scale-[1.03]">
      {/* Android — arkada, sağa kaymış, sağa hafif eğik */}
      <div className="absolute h-full aspect-[1021/2116] translate-x-[24%] rotate-[4deg] drop-shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
        <Image
          src="/img/manager-android.webp"
          alt="YemiGO Manager — Android"
          fill
          sizes="(max-width: 1024px) 45vw, 18vw"
          className="object-contain"
        />
      </div>
      {/* iOS — önde, sola kaymış, sola hafif eğik */}
      <div className="absolute z-10 h-full aspect-[1131/2224] -translate-x-[24%] -rotate-[4deg] drop-shadow-[0_22px_45px_rgba(15,23,42,0.22)]">
        <Image
          src="/img/manager-anasayfa.webp"
          alt="YemiGO Manager — iOS"
          fill
          sizes="(max-width: 1024px) 45vw, 18vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function CompactCard({ product, index }: { product: Product; index: number }) {
  const isManager = product.id === "manager";
  return (
    <ScrollReveal delay={index * 0.06}>
      <Link
        href={product.href}
        className="group block overflow-hidden rounded-[22px] bg-white transition-all duration-500 hover:bg-white"
      >
        {/* Image area */}
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white">
          {isManager ? (
            <ManagerDualPhones />
          ) : (
            <div
              className={`relative ${
                product.imageAspect === "portrait"
                  ? "h-[80%] aspect-[3/4]"
                  : "h-[70%] aspect-[4/3]"
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 90vw, 30vw"
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Platform pill */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-apple-border-soft bg-white/80 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-apple-text-soft backdrop-blur-md">
            <span
              className={`h-1 w-1 rounded-full ${
                product.accent === "indigo"
                  ? "bg-indigo-500"
                  : "bg-orange-500"
              }`}
            />
            {product.platform}
          </div>

          {/* Arrow chip */}
          <div
            className={`absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 ${
              product.accent === "indigo"
                ? "border-indigo-200 bg-white/90 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                : "border-orange-200 bg-white/90 text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
            }`}
          >
            <ArrowUpRight
              size={14}
              className="transition-transform duration-500 group-hover:rotate-45"
            />
          </div>
        </div>

        {/* Caption */}
        <div className="px-5 py-4">
          <h4 className="text-lg font-semibold leading-tight tracking-tight text-apple-text">
            {product.name}
          </h4>
          <p className="mt-1 text-sm text-apple-text-soft">{product.tagline}</p>
        </div>
      </Link>
    </ScrollReveal>
  );
}

/* ─── Mobile-only horizontal carousel (Apple-style scroll-snap) ─────────── */

function CarouselCard({ product }: { product: Product }) {
  const isManager = product.id === "manager";
  const isPos = product.id === "pos";
  const isExpress = product.id === "express";

  const media = isManager ? (
    <ManagerDualPhones />
  ) : isPos ? (
    <div className="w-[86%] max-w-[520px]">
      <DeviceFrame
        src="/img/wpf-pos-salon.webp"
        alt="YemiGO POS — Salon ekranı"
        aspect="3/2"
      />
    </div>
  ) : isExpress ? (
    <div className="h-[92%] w-[90%]">
      <ExpressLiveMap />
    </div>
  ) : (
    <div
      className={`relative ${
        product.imageAspect === "portrait"
          ? "h-[78%] aspect-[3/4]"
          : "h-[64%] aspect-[4/3]"
      }`}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="85vw"
        className="object-contain"
      />
    </div>
  );

  const body = (
    <>
      {/* Image / live media area */}
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-white">
        {media}

        {/* Platform pill + arrow chip — express harita kendi rozetlerini taşır */}
        {!isExpress && (
          <>
            <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-apple-border-soft bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-apple-text-soft backdrop-blur-md">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  product.accent === "indigo" ? "bg-indigo-500" : "bg-orange-500"
                }`}
              />
              {product.platform}
            </div>

            <div
              className={`absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border ${
                product.accent === "indigo"
                  ? "border-indigo-200 bg-white text-indigo-600"
                  : "border-orange-200 bg-white text-orange-600"
              }`}
            >
              <ArrowUpRight size={16} />
            </div>
          </>
        )}
      </div>

      {/* Caption */}
      <div className="px-6 pb-6 pt-5">
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-apple-text">
          {product.name}
        </h3>
        <p className="mt-1.5 text-[15px] text-apple-text-soft">
          {product.tagline}
        </p>
      </div>
    </>
  );

  // Express: harita kendi <a> atıf bağlantısını içerdiği için iç içe anchor
  // olmasın diye kartı div + tam-kart overlay Link olarak kuruyoruz.
  if (isExpress) {
    return (
      <div className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-apple-border-soft/70 bg-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.25)]">
        {body}
        <Link
          href={product.href}
          aria-label={product.name}
          className="absolute inset-0 z-20"
        />
      </div>
    );
  }

  return (
    <Link
      href={product.href}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-apple-border-soft/70 bg-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.25)]"
    >
      {body}
    </Link>
  );
}

const AUTOPLAY_MS = 3500;

function MobileEcosystemCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const activeRef = useRef(0);

  const handleScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const childCenter = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    activeRef.current = best;
    setActive(best);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(handleScroll);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({
      left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  // Bölüm ekrana girene kadar otomatik geçiş başlamasın
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Otomatik kaydırma — yalnızca görünürken ve durdurulmamışken
  useEffect(() => {
    if (!playing || !inView) return;
    const id = setInterval(() => {
      const next = (activeRef.current + 1) % PRODUCTS.length;
      scrollToIndex(next);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [playing, inView, scrollToIndex]);

  return (
    <div ref={containerRef} className="lg:hidden">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [-webkit-overflow-scrolling:touch] [overscroll-behavior-x:contain] [scroll-padding-inline:1.5rem]"
      >
        {PRODUCTS.map((product) => (
          <div key={product.id} className="w-[82%] shrink-0 snap-center">
            <CarouselCard product={product} />
          </div>
        ))}
      </div>

      {/* Apple-style control: play/pause + dot kapsülü */}
      <div className="mt-7 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Otomatik kaydırmayı durdur" : "Otomatik kaydırmayı başlat"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-apple-text shadow-[0_4px_14px_-4px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.04] transition-transform active:scale-95"
        >
          {playing ? (
            <Pause size={16} className="fill-current" />
          ) : (
            <Play size={16} className="fill-current" />
          )}
        </button>

        <div className="flex items-center gap-2.5 rounded-full bg-white px-4 py-3 shadow-[0_4px_14px_-4px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.04]">
          {PRODUCTS.map((product, i) => (
            <button
              key={product.id}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`${product.name} kartına git`}
              aria-current={active === i}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 bg-apple-text"
                  : "w-2 bg-apple-text/25 hover:bg-apple-text/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StickyProductShowcase() {
  return (
    <section className="relative bg-apple-bg-soft pb-12 pt-24 md:py-32">
      <Container>
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-apple-border-soft bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-apple-text-soft backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.5)]" />
            Ekosistem
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-apple-text sm:text-5xl md:text-6xl"
          >
            Beş ürün,
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-orange-500 bg-clip-text text-transparent">
              tek bir ekosistem.
            </span>
          </motion.h2>
        </div>

        {/* Desktop: featured (sticky) + scrolling secondary cards — unchanged */}
        <div className="hidden grid-cols-1 gap-4 lg:grid lg:grid-cols-3">
          {/* Left: featured (spans 2 cols on lg, sticky) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
              <FeaturedCard product={featured} />
            </div>
          </div>

          {/* Right: 4 compact cards stacked */}
          <div className="flex flex-col gap-4">
            {rest.map((p, i) => (
              <CompactCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </Container>

      {/* Mobile: Apple-style horizontal scroll-snap carousel */}
      <MobileEcosystemCarousel />
    </section>
  );
}
