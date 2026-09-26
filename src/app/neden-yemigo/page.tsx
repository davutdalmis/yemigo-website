import { type Metadata } from "next";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import {
  FeatureRow,
  SECTION_LABEL,
  SECTION_TITLE,
  SECTION_SUBTITLE,
} from "@/components/sections/whyYemigo";
import { FEATURES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Neden YemiGO? | YemiGO",
  description:
    "Üretimden şubeye, paket platformlarından kendi kuryenize — YemiGO restoranınızın her halkasını tek platformda, gerçek zamanlı ve güvenli yönetir. Sektörde gerçek farkımız.",
};

export default function NedenYemigoPage() {
  return (
    <>
      <section className="bg-apple-bg-soft pb-24 pt-32 md:pb-28 md:pt-40">
        <Container>
          {/* Başlık */}
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500">
              {SECTION_LABEL}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-apple-text md:text-6xl">
              {SECTION_TITLE}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-apple-text-soft">
              {SECTION_SUBTITLE}
            </p>
          </div>

          {/* Tam detay — dönüşümlü satırlar */}
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-16 md:mt-20 md:gap-24">
            {FEATURES.map((feature, i) => (
              <FeatureRow key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
