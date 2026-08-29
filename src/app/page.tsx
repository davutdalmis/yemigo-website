import CinematicHero from "@/components/sections/CinematicHero";
import StickyProductShowcase from "@/components/sections/StickyProductShowcase";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import IntegrationLogos from "@/components/sections/IntegrationLogos";
import PricingPreview from "@/components/sections/PricingPreview";
import MigrationOffer from "@/components/sections/MigrationOffer";
import CTASection from "@/components/sections/CTASection";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }} />
      <CinematicHero />
      <StickyProductShowcase />
      <FeatureShowcase />
      <MigrationOffer variant="compact" />
      <IntegrationLogos />
      <PricingPreview />
      <CTASection />
    </>
  );
}
