import { type Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import ProductSection from "@/components/products/ProductSection";
import ManagerDualPhones from "@/components/products/ManagerDualPhones";
import ExpressLiveMap from "@/components/products/ExpressLiveMap";
import { PRODUCTS, PRODUCT_DETAILS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ürünler | YemiGO",
  description:
    "YemiGO ürün ailesi: POS, Manager, Express, Panel ve Online Sipariş. Restoran operasyonlarınızın her adımını kapsayan entegre çözümler.",
};

// Her ürün için kompoze ekran görüntüsü (public/img).
const PRODUCT_IMAGES: Record<string, string> = {
  pos: "/img/wpf-pos-salon.webp",
  manager: "/img/product-manager-light.webp",
  express: "/img/product-express-light.webp",
  panel: "/img/panel-screen.png",
  "online-siparis": "/img/product-online-siparis-light.webp",
};

// Ham ekran görüntüsü olan ürünler cihaz çerçevesine sarılır.
const PRODUCT_FRAMES: Record<string, "laptop" | "desktop"> = {
  pos: "desktop",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <Container>
          <SectionHeader
            label="Ürün Ailesi"
            title="Her ihtiyacınız için bir çözüm."
            subtitle="Restoran operasyonlarınızın her adımını kapsayan entegre ürün ailesi. Her biri tek başına güçlü, birlikte kusursuz."
          />
        </Container>
      </section>

      {/* Ürün başına bölüm — sırayla yön ve zemin değişir */}
      {PRODUCTS.map((product, index) => (
        <ProductSection
          key={product.id}
          product={product}
          image={PRODUCT_IMAGES[product.id]}
          frame={PRODUCT_FRAMES[product.id]}
          customVisual={
            product.id === "manager" ? (
              <ManagerDualPhones />
            ) : product.id === "express" ? (
              <ExpressLiveMap />
            ) : undefined
          }
          rounded={product.id === "panel"}
          highlights={PRODUCT_DETAILS[product.id]?.highlights ?? []}
          reverse={index % 2 === 1}
          soft={index % 2 === 0}
        />
      ))}

      <CTASection />
    </>
  );
}
