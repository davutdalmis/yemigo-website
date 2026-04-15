import { type Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";
import { PLANS, type PricingPlan } from "@/lib/constants";
import { getFAQSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Fiyatlandirma | YemiGO",
  description:
    "YemiGO fiyatlandirma planlari. Isletmenize uygun plani secin, 14 gun ucretsiz deneyin.",
};

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isHighlighted = plan.highlighted;

  return (
    <div
      className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
        isHighlighted
          ? "border-2 border-[#A855F7] shadow-[0_20px_60px_rgba(168,85,247,0.15)] scale-105"
          : "border border-gray-200"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-block px-4 py-1 text-xs font-semibold text-white bg-[#A855F7] rounded-full">
          {plan.badge}
        </span>
      )}

      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
      <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

      <div className="mt-6 mb-8">
        {plan.price > 0 ? (
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-gray-900">
              {plan.price.toLocaleString("tr-TR")}
            </span>
            <span className="text-lg text-gray-400 font-medium">
              TL/{plan.period}
            </span>
          </div>
        ) : (
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-gray-900">
              Ozel Fiyat
            </span>
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              size={18}
              className={`mt-0.5 flex-shrink-0 ${
                isHighlighted ? "text-[#A855F7]" : "text-gray-400"
              }`}
              strokeWidth={2.5}
            />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={isHighlighted ? "primary" : "secondary"}
        className="w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
}

const FAQ_ITEMS = [
  {
    question: "Ucretsiz deneme suresi var mi?",
    answer:
      "Evet, tum planlarimizda 14 gun ucretsiz deneme suresi sunuyoruz. Deneme surecinde tum ozelliklere erisebilir, kredi karti bilgisi girmeden baslayabilirsiniz.",
  },
  {
    question: "Sozlesme suresi ne kadar?",
    answer:
      "Aylik veya yillik abonelik seceneklerimiz mevcuttur. Yillik abonelikte %20 indirim uygulanir. Zorunlu sozlesme suresi bulunmamaktadir.",
  },
  {
    question: "Plan degisikligi yapabilir miyim?",
    answer:
      "Evet, istediginiz zaman planinizi yukseltebilir veya dusurabilirsiniz. Yukseltme aninda gecerli olur, dusurme ise mevcut donem sonunda aktif olur.",
  },
  {
    question: "Odeme yontemleri nelerdir?",
    answer:
      "Kredi karti, banka karti ve havale/EFT ile odeme yapabilirsiniz. Kurumsal fatura duzenlenebilir.",
  },
  {
    question: "Iptal sureci nasil isliyor?",
    answer:
      "Aboneliginizi istediginiz zaman iptal edebilirsiniz. Iptal sonrasi mevcut doneminiz sonuna kadar hizmetten yararlanmaya devam edersiniz. Verileriniz 30 gun boyunca saklanir.",
  },
];

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(FAQ_ITEMS)) }} />
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <SectionHeader
            label="Fiyatlandirma"
            title="Isletmenize uygun plan secin."
            subtitle="14 gun ucretsiz deneyin, kredi karti gerekmez. Istediginiz zaman iptal edin."
          />

          {/* Pricing Cards */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="Sikca Sorulan Sorular"
              title="Merak ettikleriniz."
              subtitle="En cok sorulan sorulara hizli yanitlar."
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none text-left">
                    <span className="text-base font-semibold text-gray-900">
                      {item.question}
                    </span>
                    <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-45 transition-transform duration-200 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
