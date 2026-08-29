"use client";

import Link from "next/link";
import { ArrowLeftRight, BadgeCheck, CalendarClock, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";

/**
 * "Sorunsuz Geçiş" bölümü.
 *
 * Rakip bir POS/adisyon sisteminden gelen işletmelere yönelik geçiş
 * avantajını anlatır:
 *  1. Kurulum ücreti yok — geçiş yapan işletmeler için, koşulsuz.
 *  2. Mevcut sağlayıcıdaki taahhüt süresi devam ediyorsa, belgelemek koşuluyla
 *     o süre dolana kadar Yemigo ücretsiz (çifte ödeme yok).
 *
 * Not: Bu avantajlar geçiş yapan işletmeler içindir. Yeni açılan işletme ve
 * şubelerde standart kurulum ücreti uygulanır.
 *
 * `variant="compact"` ana sayfada kısa bir bant; `variant="full"` fiyatlandırma
 * sayfasında ayrıntılı bölüm olarak kullanılır.
 */
export default function MigrationOffer({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const cards = [
    {
      icon: BadgeCheck,
      title: "Geçişte kurulum ücreti yok",
      description:
        "Başka bir POS ya da adisyon sisteminden Yemigo'ya geçerken kurulum ücreti almıyoruz. Koşulsuz, geçiş yapan her işletme için.",
    },
    {
      icon: CalendarClock,
      title: "Taahhüdünüz bitene kadar ücretsiz",
      description:
        "Mevcut sağlayıcınızla taahhüt süreniz devam mı ediyor? Sözleşmenizi belgelemeniz koşuluyla, taahhüdünüz dolana kadar Yemigo'yu ücretsiz kullanın — çifte ödeme yapmazsınız.",
    },
  ];

  return (
    <section
      className={
        variant === "compact"
          ? "relative bg-white py-24"
          : "relative bg-white py-24 md:py-28"
      }
    >
      <Container>
        {variant === "full" ? (
          <SectionHeader
            label="Sorunsuz Geçiş"
            title="Başka bir sistemden mi geliyorsunuz?"
            subtitle="Rakip bir POS ya da adisyon programından Yemigo'ya geçmek hiç olmadığı kadar kolay — ve masrafsız."
          />
        ) : (
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-apple-border-soft bg-apple-bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                <ArrowLeftRight size={13} />
                Sorunsuz Geçiş
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-apple-text md:text-4xl">
                Başka bir sistemden mi geliyorsunuz?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-apple-text-soft">
                Mevcut POS ya da adisyon sisteminizden Yemigo&apos;ya geçişte
                kurulum ücreti almıyoruz. Eski sağlayıcınızdaki taahhüdünüz devam
                ediyorsa, o süre dolana kadar Yemigo ücretsiz.
              </p>
            </div>
          </ScrollReveal>
        )}

        <div
          className={`mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 ${
            variant === "full" ? "mt-4" : "mt-12"
          }`}
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[22px] border border-apple-border-soft bg-white p-8 transition-all duration-300 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50">
                    <Icon size={24} className="text-indigo-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-apple-text">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-apple-text-soft">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-apple-border-soft bg-apple-bg-soft px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-relaxed text-apple-text-muted">
              Taahhüt süresince ücretsiz kullanım, mevcut sözleşmenizi
              belgelemeniz koşuluyla geçerlidir. Detaylar için bizimle iletişime
              geçin.
            </p>
            <Link
              href="/iletisim"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] transition-all hover:bg-indigo-700"
            >
              Geçiş için bize ulaşın
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
