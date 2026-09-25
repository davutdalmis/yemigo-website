import { type Metadata } from "next";
import Container from "@/components/ui/Container";
import PricingPlans from "@/components/sections/PricingPlans";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Fiyatlandırma | YemiGO",
  description:
    "YemiGO restoran yönetim platformu fiyatları. Tek şubeden çok şubeli zincirlere şeffaf paketler — YemekSepeti, Getir, Trendyol Go, Migros ve Fuudy entegrasyonları, kurye takibi, stok ve raporlama dahil. Eğitim ücretsiz, geçişte kurulum ücretsiz.",
};

export default function FiyatlandirmaPage() {
  return (
    <>
      <section className="bg-apple-bg-soft pb-20 pt-32 md:pb-24 md:pt-40">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500">
              Fiyatlandırma
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-apple-text md:text-6xl">
              Şeffaf, ölçeklenebilir,
              <br />
              tahmin edilebilir.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-apple-text-soft">
              Tek şubeden çok şubeli zincirlere — büyüdükçe ödeyin. Beş platform
              entegrasyonu, kurye takibi ve raporlama paketin içinde; ayrı modül
              ücreti yok.
            </p>
          </div>

          <div className="mt-16 md:mt-20">
            <PricingPlans />
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-apple-text-muted">
            Fiyatlara KDV dahil değildir. Personel eğitimi her planda ücretsizdir.
            Başka bir sistemden geçişte kurulum ve veri aktarımı ücretsizdir; yeni
            açılışlarda tek seferlik kurulum ücreti uygulanır. Mevcut sağlayıcınızla
            taahhüdünüz varsa, sözleşmenizi belgelemeniz koşuluyla taahhüdünüz
            bitene kadar YemiGO&apos;yu ücretsiz kullanırsınız.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
