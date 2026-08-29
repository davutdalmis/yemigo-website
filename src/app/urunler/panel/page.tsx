import { type Metadata } from "next";
import { PRODUCT_DETAILS } from "@/lib/constants";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatureList from "@/components/products/ProductFeatureList";
import ProductHighlights from "@/components/products/ProductHighlights";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "YemiGO Panel | YemiGO",
  description:
    "Detaylı raporlar, menü yönetimi, kullanıcı yetkileri ve çoklu şube kontrolü. Tarayıcınızdan işletmenizin tüm verilerine erişim.",
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
