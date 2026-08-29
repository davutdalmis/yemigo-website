"use client";

import Image from "next/image";
import {
  Monitor,
  Smartphone,
  Truck,
  LayoutDashboard,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import DeviceFrame from "@/components/ui/DeviceFrame";
import ManagerDualPhones from "@/components/products/ManagerDualPhones";
import ExpressLiveMap from "@/components/products/ExpressLiveMap";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { type ProductDetail } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  Truck,
  LayoutDashboard,
  ShoppingBag,
};

// Ürünler sayfasındaki bölümlerle aynı görseller.
const HERO_IMAGES: Record<string, string> = {
  "online-siparis": "/img/product-online-siparis-light.webp",
};

/**
 * Detay sayfası hero görseli — ürünler sayfasındaki bölümlerle birebir aynı.
 * POS → WPF salon (monitör), Manager → çift telefon, Express → canlı harita,
 * Panel → yuvarlak köşeli ekran görüntüsü, diğerleri → kompoze görsel.
 */
function HeroVisual({ product }: { product: ProductDetail }) {
  if (product.id === "pos") {
    return (
      <DeviceFrame
        variant="desktop"
        src="/img/wpf-pos-salon.webp"
        alt="YemiGO POS — Salon ekranı"
        aspect="3/2"
      />
    );
  }
  if (product.id === "manager") {
    return (
      <div className="relative mx-auto flex aspect-[4/3] w-full max-w-xl items-center justify-center">
        <ManagerDualPhones />
      </div>
    );
  }
  if (product.id === "express") {
    return (
      <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
        <ExpressLiveMap />
      </div>
    );
  }
  if (product.id === "panel") {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="/img/panel-screen.png"
        alt="YemiGO Panel ekran görüntüsü"
        className="mx-auto block h-auto w-full max-w-xl rounded-[12px] ring-1 ring-black/5 shadow-[0_30px_70px_-30px_rgba(17,24,39,0.4)]"
      />
    );
  }
  const img = HERO_IMAGES[product.id] ?? "/img/product-pos-light.webp";
  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-xl"
      style={{
        filter:
          "drop-shadow(0 30px 60px rgba(17,24,39,0.16)) drop-shadow(0 8px 16px rgba(17,24,39,0.08))",
      }}
    >
      <Image
        src={img}
        alt={`${product.name} ekran görüntüsü`}
        fill
        sizes="(max-width: 1024px) 90vw, 560px"
        className="object-contain"
      />
    </div>
  );
}

interface ProductHeroProps {
  product: ProductDetail;
}

export default function ProductHero({ product }: ProductHeroProps) {
  const Icon = iconMap[product.icon];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(135deg, ${product.color}08 0%, ${product.color}03 50%, transparent 100%)`,
        }}
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <ScrollReveal direction="left">
            <div>
              {/* Platform badge */}
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{
                  backgroundColor: `${product.color}10`,
                  color: product.color,
                }}
              >
                {Icon && <Icon size={16} />}
                {product.platform}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <p
                className="mt-2 text-xl md:text-2xl font-medium"
                style={{ color: product.color }}
              >
                {product.tagline}
              </p>

              <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
                {product.heroDescription}
              </p>
            </div>
          </ScrollReveal>

          {/* Visual side — ürünler sayfasıyla aynı */}
          <ScrollReveal direction="right" delay={0.2}>
            <HeroVisual product={product} />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
