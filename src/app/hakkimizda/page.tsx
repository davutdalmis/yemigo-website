import { type Metadata } from "next";
import {
  Shield,
  Lightbulb,
  Heart,
  Cloud,
  RefreshCw,
  Smartphone,
  Plug,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Hakkımızda | YemiGO",
  description:
    "YemiGO, restoranların dijital dönüşümünü hızlandıran profesyonel bir yönetim platformudur. Misyonumuz, vizyonumuz ve teknolojimiz hakkında bilgi alın.",
};

const CAPABILITIES = [
  {
    icon: Cloud,
    title: "Bulut Tabanlı",
    description:
      "Tüm verileriniz güvenli bulut altyapısında saklanır. Şubeden, ofisten ya da evden — her yerden, her cihazdan erişin.",
  },
  {
    icon: RefreshCw,
    title: "Gerçek Zamanlı",
    description:
      "Sipariş, stok ve ciro; kasa, mutfak, kurye ve yönetimde anında aynı veriyle çalışır. Gecikme ve uyumsuzluk olmaz.",
  },
  {
    icon: Smartphone,
    title: "Her Cihazda",
    description:
      "iOS, Android, Windows masaüstü ve web. Ekibiniz hangi cihazı kullanırsa kullansın, YemiGO sorunsuz çalışır.",
  },
  {
    icon: Plug,
    title: "Açık Entegrasyonlar",
    description:
      "Yemeksepeti, Getir, Migros Yemek ve daha fazlası tek ekranda birleşir. Tüm kanallarınızı tek yerden yönetin.",
  },
];

const VALUES = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    description:
      "Verileriniz şifreli iletim ve günlük otomatik yedekleme ile korunur. İnternet kesilse bile kasa çalışmaya devam eder, bağlantı gelince kendini eşitler.",
  },
  {
    icon: Lightbulb,
    title: "Yenilikçilik",
    description:
      "Sektördeki en son teknolojileri takip eder, ürünlerimizi sürekli geliştiririz. Her ay yeni özellikler ve iyileştirmeler yayınlarız.",
  },
  {
    icon: Heart,
    title: "Müşteri Odaklılık",
    description:
      "Her kararı müşterilerimizin ihtiyaçlarına göre alırız. Destek ekibimiz sorularınıza hızla yanıt verir, geri bildirimleriniz yol haritamızı şekillendirir.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block mb-4 text-sm font-semibold tracking-wide uppercase text-[#A855F7]">
                Hakkımızda
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                Restoranların dijital dönüşümünü hızlandırıyoruz.
              </h1>
              <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
                YemiGO, restoran işletmecilerine profesyonel dijital araçlar
                sunarak operasyonel verimliliklerini artırmayı ve sektörde yeni
                standartlar belirlemeyi hedefleyen bir teknoloji platformudur.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="Amacımız"
              title="Misyon ve Vizyon"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-100 mb-5">
                  <span className="text-xl font-bold text-[#A855F7]">M</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Misyon</h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  Restoran işletmecilerine en profesyonel dijital araçları
                  sunarak operasyonel verimliliklerini artırmak.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-100 mb-5">
                  <span className="text-xl font-bold text-[#A855F7]">V</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Vizyon</h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  Türkiye&apos;nin her restoranında YemiGO kullanılsın. Yemek
                  sektörünün dijital standartlarını belirleyelim.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Platform / Teknoloji */}
      <section className="py-24 bg-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="Teknoloji"
              title="Sağlam, modern bir platform."
              subtitle="Altyapımız; işletmenizin yoğun saatlerde bile kesintisiz, hızlı ve güvenli çalışması için tasarlandı."
            />
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-white border border-gray-100 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 mb-5">
                    <Icon size={24} className="text-[#A855F7]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{cap.title}</h3>
                  <p className="mt-2.5 text-sm text-gray-500 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="Değerlerimiz"
              title="Bize yol gösteren ilkeler."
            />
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white border border-gray-100 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 mx-auto mb-5">
                    <Icon
                      size={26}
                      className="text-[#A855F7]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </StaggerChildren>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
