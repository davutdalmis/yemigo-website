import { type Metadata } from "next";
import { PRODUCT_DETAILS } from "@/lib/constants";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatureList from "@/components/products/ProductFeatureList";
import ProductHighlights from "@/components/products/ProductHighlights";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "YemiGO Manager | YemiGO",
  description:
    "Isletmenizi cebinizden yonetin. Anlik satis raporlari, siparis bildirimleri, kurye takibi ve sube karsilastirmalari her yerde elinizin altinda.",
};

export default function ManagerPage() {
  const product = PRODUCT_DETAILS.manager;

  return (
    <>
      <ProductHero product={product} />
      <ProductFeatureList features={product.features} color={product.color} />
      <ProductHighlights highlights={product.highlights} color={product.color} />
      <CTASection />
    </>
  );
}
