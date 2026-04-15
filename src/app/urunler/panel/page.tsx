import { type Metadata } from "next";
import { PRODUCT_DETAILS } from "@/lib/constants";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatureList from "@/components/products/ProductFeatureList";
import ProductHighlights from "@/components/products/ProductHighlights";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "YemiGO Panel | YemiGO",
  description:
    "Detayli raporlar, menu yonetimi, kullanici yetkileri ve coklu sube kontrolu. Tarayicinizdan isletmenizin tum verilerine erisim.",
};

export default function PanelPage() {
  const product = PRODUCT_DETAILS.panel;

  return (
    <>
      <ProductHero product={product} />
      <ProductFeatureList features={product.features} color={product.color} />
      <ProductHighlights highlights={product.highlights} color={product.color} />
      <CTASection />
    </>
  );
}
