"use client";

import {
  Monitor,
  Smartphone,
  Truck,
  LayoutDashboard,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { PRODUCTS, type Product } from "@/lib/constants";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  Truck,
  LayoutDashboard,
  ShoppingBag,
};

function ProductCard({
  product,
  featured = false,
  index,
}: {
  product: Product;
  featured?: boolean;
  index: number;
}) {
  const Icon = iconMap[product.icon];

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className={`group relative bg-gray-50 hover:bg-gray-100/80 border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${
          featured ? "md:flex md:items-center md:gap-12 md:p-10" : ""
        }`}
      >
        {/* Icon circle */}
        <div
          className={`flex items-center justify-center rounded-2xl ${
            featured ? "w-16 h-16 md:w-20 md:h-20 shrink-0" : "w-12 h-12"
          }`}
          style={{ backgroundColor: `${product.color}15` }}
        >
          {Icon && (
            <Icon
              size={featured ? 32 : 24}
              style={{ color: product.color }}
              strokeWidth={1.5}
            />
          )}
        </div>

        <div className={featured ? "mt-4 md:mt-0" : "mt-5"}>
          {/* Product name */}
          <h3 className="text-xl font-semibold text-gray-900">
            {product.name}
          </h3>

          {/* Platform badge */}
          <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-gray-500 bg-gray-200/60 rounded-full">
            {product.platform}
          </span>

          {/* Description */}
          <p className="mt-3 text-gray-500 leading-relaxed">
            {product.description}
          </p>

          {/* Arrow link */}
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#A855F7] group-hover:gap-3 transition-all duration-300">
            Detayli Incele
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ProductsGrid() {
  const [featured, ...rest] = PRODUCTS;

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          label="Urunler"
          title="Entegre cozum ailesi."
          subtitle="Restoran operasyonlarinizin her adimini kapsayan urun ailesi."
        />

        {/* Featured product (POS) — full width */}
        <ProductCard product={featured} featured index={0} />

        {/* Remaining products — 2x2 grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
