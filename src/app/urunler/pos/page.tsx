import { type Metadata } from "next";
import { PRODUCT_DETAILS } from "@/lib/constants";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatureList from "@/components/products/ProductFeatureList";
import ProductHighlights from "@/components/products/ProductHighlights";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "YemiGO POS | YemiGO",
  description:
    "Kasadan mutfağa, masadan paket servise — tüm sipariş akışını tek ekrandan yönetin. Platform entegrasyonları ve stok takibi dahil.",
};

export default function POSPage() {
  const product = PRODUCT_DETAILS.pos;

  return (
    <>
      <ProductHero product={product} />
      <ProductFeatureList features={product.features} color={product.color} />
      <ProductHighlights highlights={product.highlights} color={product.color} />
      <CTASection />
    </>
  );
}
