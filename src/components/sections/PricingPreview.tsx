import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PricingPlans from "@/components/sections/PricingPlans";
import { PLANS } from "@/lib/constants";

function formatPrice(value: number) {
  return `₺${value.toLocaleString("tr-TR")}`;
}

/** Mobil — Apple tarzı kısa önizleme; tam plan & karşılaştırma /fiyatlandirma'da. */
function MobilePricingPreview() {
  return (
    <div className="lg:hidden">
      <div className="flex flex-col gap-3">
        {PLANS.map((plan) => {
          const isCustom = plan.price === 0;
          const highlighted = plan.highlighted;
          return (
            <Link
              key={plan.id}
              href="/fiyatlandirma"
              className={`relative flex items-center justify-between gap-4 overflow-hidden rounded-[20px] p-5 ${
                highlighted
                  ? "bg-gradient-to-br from-indigo-50 via-white to-orange-50 ring-1 ring-indigo-200"
                  : "bg-white ring-1 ring-black/[0.05]"
              }`}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-apple-text">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="shrink-0 rounded-full bg-gradient-to-r from-indigo-600 to-orange-500 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 truncate text-[13px] text-apple-text-soft">
                  {plan.description}
                </p>
              </div>

              <div className="shrink-0 text-right">
                {isCustom ? (
                  <span className="text-base font-bold text-apple-text">
                    Özel Fiyat
                  </span>
                ) : (
                  <>
                    <div className="text-xl font-bold leading-none text-apple-text">
                      {formatPrice(plan.price)}
                    </div>
                    <div className="mt-1 text-[11px] text-apple-text-soft">
                      / ay + KDV
                    </div>
                  </>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href="/fiyatlandirma"
        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-apple-text px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.5)] transition-transform active:scale-[0.98]"
      >
        Tüm planları karşılaştır
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </Link>

      <p className="mt-5 text-[13px] text-apple-text-muted">
        Ücretsiz demo · Kurulum ve eğitim dahil
      </p>
    </div>
  );
}

export default function PricingPreview() {
  return (
    <section className="relative bg-apple-bg-soft pb-20 pt-12 md:py-32">
      <Container>
        <SectionHeader
          label="Fiyatlandırma"
          title="Şeffaf, ölçeklenebilir, tahmin edilebilir."
          subtitle="Tek şubeden çok şubeli zincirlere — büyüdükçe ödeyin. Kurulum ve eğitim her planda dahil."
        />

        {/* Masaüstü — tam planlar */}
        <div className="hidden lg:block">
          <PricingPlans />

          <p className="mt-12 text-center text-sm text-apple-text-muted">
            Tüm planlarda kurulum ve eğitim dahil. Zorunlu sözleşme yok.
          </p>
        </div>

        {/* Mobil — kısa önizleme */}
        <MobilePricingPreview />
      </Container>
    </section>
  );
}
