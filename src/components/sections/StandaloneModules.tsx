import Link from "next/link";
import { QrCode, ShoppingBag, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";

/**
 * Ek Paketler — YemiGO POS (WPF kasa) tabanına ihtiyaç duymadan, tek başına
 * alınabilen web tabanlı paketler (QR menü, online sipariş).
 *
 * Not: Stok & reçete, mutfak ekranı (KDS), kurye takibi gibi modüller kasa
 * (POS) ile birlikte çalışır ve ana planlara dahildir — tek başına satılmaz.
 *
 * Her kartın CTA'sı, iletişim sayfasına seçilen paketi `paket` parametresiyle
 * taşır; böylece gelen talepte/mailde hangi paketin istendiği görünür.
 */

interface Addon {
  icon: typeof QrCode;
  name: string;
  description: string;
  /** Aylık fiyat (TL, KDV hariç). Tanımsızsa "Teklif alın" gösterilir. */
  price?: number;
}

const ADDONS: Addon[] = [
  {
    icon: QrCode,
    name: "QR Menü",
    price: 349,
    description:
      "Masaya QR'ı koyun, müşteri telefonundan menüye baksın, sipariş versin. Kasa gerekmez, baskı derdi yok.",
  },
  {
    icon: ShoppingBag,
    name: "Online Sipariş Sitesi",
    description:
      "Kendi markanızla komisyonsuz paket servis siteniz. POS olmadan da çalışır; siparişleriniz doğrudan size düşer.",
  },
];

export default function StandaloneModules() {
  return (
    <section className="relative bg-apple-bg-soft py-24 md:py-28">
      <Container>
        <SectionHeader
          label="Ek Paketler"
          title="Tek başına ek paket olarak alın."
          subtitle="Tüm platforma ihtiyacınız yok mu? QR menü ve online sipariş sitesini kasa kurulumu olmadan, tek başına ek paket olarak edinebilirsiniz."
        />

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {ADDONS.map((addon, i) => {
            const Icon = addon.icon;
            return (
              <ScrollReveal key={addon.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[22px] border border-apple-border-soft bg-white p-7 transition-all duration-300 hover:shadow-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50">
                    <Icon size={24} className="text-indigo-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-apple-text">{addon.name}</h3>
                  {addon.price ? (
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-apple-text">
                        ₺{addon.price.toLocaleString("tr-TR")}
                      </span>
                      <span className="text-xs text-apple-text-soft">
                        + KDV / ay
                      </span>
                    </div>
                  ) : (
                    <div className="mt-2 text-sm font-semibold text-apple-text-soft">
                      Size özel fiyat
                    </div>
                  )}
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-apple-text-soft">
                    {addon.description}
                  </p>
                  <Link
                    href={`/iletisim?paket=${encodeURIComponent(
                      addon.name
                    )}&donem=aylik`}
                    className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
                  >
                    {addon.price ? "Ücretsiz deneyin" : "Teklif alın"}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-apple-text-muted">
          Stok &amp; reçete, mutfak ekranı (KDS) ve kurye takibi gibi modüller
          YemiGO POS (kasa) ile birlikte çalışır ve yukarıdaki planlara dahildir.
        </p>
      </Container>
    </section>
  );
}
