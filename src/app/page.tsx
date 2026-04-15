import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ProductsGrid from "@/components/sections/ProductsGrid";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import IntegrationLogos from "@/components/sections/IntegrationLogos";
import CTASection from "@/components/sections/CTASection";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }} />
      <Hero />
      <StatsBar />
      <ProductsGrid />
      <FeatureShowcase />
      <IntegrationLogos />
      <CTASection />
    </>
  );
}
