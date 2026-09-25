import { type Metadata } from "next";
import { PRODUCT_DETAILS } from "@/lib/constants";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatureList from "@/components/products/ProductFeatureList";
import ProductHighlights from "@/components/products/ProductHighlights";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "YemiGO Express | YemiGO",
  description:
    "Kurye atama, tek tıkla yol tarifi ve canlı konum takibi. Teslimat sürecini baştan sona kendiniz yönetin.",
};

export default function ExpressPage() {
  const product = PRODUCT_DETAILS.express;

  return (
    <>
      <ProductHero product={product} />
      <ProductFeatureList features={product.features} color={product.color} />
      <ProductHighlights highlights={product.highlights} color={product.color} />
      <CTASection />
    </>
  );
}
