"use client";

import {
  Monitor,
  Smartphone,
  Truck,
  LayoutDashboard,
  ShoppingBag,
} from "lucide-react";
import Container from "@/components/ui/Container";
import DeviceMockup from "@/components/products/DeviceMockup";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { type ProductDetail } from "@/lib/constants";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  Truck,
  LayoutDashboard,
  ShoppingBag,
};

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

          {/* Device mockup side */}
          <ScrollReveal direction="right" delay={0.2}>
            <DeviceMockup type={product.mockupType} color={product.color} />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
