import { type Metadata } from "next";
import Link from "next/link";
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
import CTASection from "@/components/sections/CTASection";
import { PRODUCTS, type Product } from "@/lib/constants";
import { type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Urunler | YemiGO",
  description:
    "YemiGO urun ailesi: POS, Manager, Express, Panel ve Online Siparis. Restoran operasyonlarinizin her adimini kapsayan entegre cozumler.",
};

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Smartphone,
  Truck,
  LayoutDashboard,
  ShoppingBag,
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = iconMap[product.icon];

  return (
    <ScrollReveal delay={index * 0.1}>
      <Link href={`/urunler/${product.id}`} className="block h-full">
        <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg h-full">
          {/* Colored icon */}
          <div
            className="flex items-center justify-center w-12 h-12 rounded-2xl"
            style={{ backgroundColor: `${product.color}15` }}
          >
            {Icon && (
              <Icon
                size={24}
                style={{ color: product.color }}
                strokeWidth={1.5}
              />
            )}
          </div>

          {/* Product name */}
          <h3 className="mt-5 text-xl font-semibold text-gray-900">
            {product.name}
          </h3>

          {/* Platform badge */}
          <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
            {product.platform}
          </span>

          {/* Description */}
          <p className="mt-3 text-gray-500 leading-relaxed">
            {product.description}
          </p>

          {/* Link */}
          <div
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
            style={{ color: product.color }}
          >
            Detayli Incele
            <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <SectionHeader
            label="Urun Ailesi"
            title="Her ihtiyaciniz icin bir cozum."
            subtitle="Restoran operasyonlarinizin her adimini kapsayan entegre urun ailesi."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
