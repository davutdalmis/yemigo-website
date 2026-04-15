import { type Metadata } from "next";
import { PRODUCT_DETAILS } from "@/lib/constants";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatureList from "@/components/products/ProductFeatureList";
import ProductHighlights from "@/components/products/ProductHighlights";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "YemiGO POS | YemiGO",
  description:
    "Kasadan mutfaga, masadan paket servise — tum siparis akisini tek ekrandan yonetin. Platform entegrasyonlari, stok takibi ve muhasebe dahil.",
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
