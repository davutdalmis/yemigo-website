"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Truck,
  LayoutDashboard,
  ShoppingBag,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import DeviceFrame from "@/components/ui/DeviceFrame";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { type Product } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  Truck,
  LayoutDashboard,
  ShoppingBag,
};

interface ProductSectionProps {
  product: Product;
  image: string;
  highlights: string[];
  /** true → görsel sağda, metin solda (sıralı ürünlerde değiştir). */
  reverse?: boolean;
  /** true → soft zemin (beyaz bölümlerle alternatif için). */
  soft?: boolean;
  /** Ham ekran görüntülerini cihaz çerçevesine sar (ör. WPF salon ekranı). */
  frame?: "laptop" | "desktop";
  /** Özel görsel kompozisyonu (ör. Manager çift telefon). image yerine geçer. */
  customVisual?: ReactNode;
  /** Görseli yuvarlak köşeli bir kart içinde ekranı dolduracak şekilde göster. */
  rounded?: boolean;
}

export default function ProductSection({
  product,
  image,
  highlights,
  reverse = false,
  soft = false,
  frame,
  customVisual,
  rounded = false,
}: ProductSectionProps) {
  const Icon = iconMap[product.icon];

  return (
    <section className={`py-20 md:py-28 ${soft ? "bg-apple-bg-soft" : "bg-white"}`}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Görsel */}
          <ScrollReveal
            direction={reverse ? "right" : "left"}
            className={reverse ? "lg:order-2" : "lg:order-1"}
          >
            <div className="relative mx-auto w-full max-w-xl">
              {/* Yumuşak renkli zemin halesi */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-[40px] opacity-70 blur-2xl"
                style={{
                  background: `radial-gradient(ellipse 60% 60% at 50% 60%, ${product.color}22 0%, transparent 70%)`,
                }}
              />
              {customVisual ? (
                <div className="relative flex aspect-[4/3] items-center justify-center">
                  {customVisual}
                </div>
              ) : frame ? (
                <DeviceFrame
                  variant={frame}
                  src={image}
                  alt={`${product.name} ekran görüntüsü`}
                  aspect={frame === "laptop" ? "mbp16" : "3/2"}
                  fit={frame === "laptop" ? "fill" : "cover"}
                />
              ) : rounded ? (
                /* Doğal oranında (kırpmasız), yuvarlak köşeli görsel */
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={image}
                  alt={`${product.name} ekran görüntüsü`}
                  className="block h-auto w-full rounded-[12px] ring-1 ring-black/5 shadow-[0_30px_70px_-30px_rgba(17,24,39,0.4)]"
                />
              ) : (
                <div
                  className="relative aspect-[4/3] w-full"
                  style={{
                    filter:
                      "drop-shadow(0 30px 60px rgba(17,24,39,0.16)) drop-shadow(0 8px 16px rgba(17,24,39,0.08))",
                  }}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ekran görüntüsü`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Metin */}
          <ScrollReveal
            direction={reverse ? "left" : "right"}
            delay={0.1}
            className={reverse ? "lg:order-1" : "lg:order-2"}
          >
            <div>
              {/* İkon + platform */}
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${product.color}15` }}
                >
                  {Icon && (
                    <Icon size={22} style={{ color: product.color }} strokeWidth={1.75} />
                  )}
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: `${product.color}12`,
                    color: product.color,
                  }}
                >
                  {product.platform}
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-apple-text md:text-4xl">
                {product.name}
              </h2>
              <p
                className="mt-2 text-lg font-medium md:text-xl"
                style={{ color: product.color }}
              >
                {product.tagline}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-apple-text-soft">
                {product.description}
              </p>

              {/* Öne çıkanlar */}
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2.5 text-sm text-apple-text"
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${product.color}15` }}
                    >
                      <Check size={12} style={{ color: product.color }} strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                href={`/urunler/${product.id}`}
                className="group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all"
                style={{ backgroundColor: product.color }}
              >
                Detaylı İncele
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
