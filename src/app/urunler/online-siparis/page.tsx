import { type Metadata } from "next";
import { PRODUCT_DETAILS } from "@/lib/constants";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatureList from "@/components/products/ProductFeatureList";
import ProductHighlights from "@/components/products/ProductHighlights";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Online Siparis | YemiGO",
  description:
    "Kendi markanizla online siparis sistemi. QR menuden masadan siparis, paket servis sitesi ve platform entegrasyonlari tek catida.",
};

export default function OnlineSiparisPage() {
  const product = PRODUCT_DETAILS["online-siparis"];

  return (
    <>
      <ProductHero product={product} />
      <ProductFeatureList features={product.features} color={product.color} />
      <ProductHighlights highlights={product.highlights} color={product.color} />
      <CTASection />
    </>
  );
}
