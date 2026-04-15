import { type Metadata } from "next";
import { Shield, Lightbulb, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Hakkimizda | YemiGO",
  description:
    "YemiGO, restoranlarin dijital donusumunu hizlandiran profesyonel bir yonetim platformudur. Misyonumuz, vizyonumuz ve teknolojimiz hakkinda bilgi alin.",
};

const STATS = [
  { value: "500+", label: "Restoran" },
  { value: "2000+", label: "Sube" },
  { value: "10000+", label: "Gunluk Siparis" },
  { value: "50+", label: "Sehir" },
];

const TECH_STACK = [
  "Swift / SwiftUI",
  "Kotlin / Jetpack Compose",
  "C# / WPF",
  "Next.js / React",
  "Firebase",
  "Node.js",
];

const VALUES = [
  {
    icon: Shield,
    title: "Guvenilirlik",
    description:
      "Verileriniz sifreli iletim ve otomatik yedekleme ile korunur. %99.9 uptime garantisi ile isletmeniz hic durmaz.",
  },
  {
    icon: Lightbulb,
    title: "Yenilikcilik",
    description:
      "Sektordeki en son teknolojileri takip eder, urunlerimizi surekli gelistiririz. Her ay yeni ozellikler ve iyilestirmeler yayinlariz.",
  },
  {
    icon: Heart,
    title: "Musteri Odaklilik",
    description:
      "Her karari musterilerimizin ihtiyaclarina gore aliriz. Destek ekibimiz sorulariniza hizla yanit verir, geri bildirimleriniz yol haritamizi sekillendiri.",
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
                Hakkimizda
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                Restoranlarin dijital donusumunu hizlandiriyoruz.
              </h1>
              <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
                YemiGO, restoran isletmecilerine profesyonel dijital araclar
                sunarak operasyonel verimliliklerini artirmayi ve sektorde yeni
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
              label="Amacimiz"
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
                  Restoran isletmecilerine en profesyonel dijital araclari
                  sunarak operasyonel verimliliklerini artirmak.
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
                  Turkiye&apos;nin her restoraninda YemiGO kullanilsin. Yemek
                  sektorunun dijital standartlarini belirleyelim.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="Rakamlarla YemiGO"
              title="Buyuyen ekosistemimiz."
            />
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#A855F7]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Technology */}
      <section className="py-24 bg-gray-50">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="Altyapi"
              title="Modern Teknoloji Altyapisi"
              subtitle="Guvenilir, olceklenebilir ve yuksek performansli teknolojiler kullaniyoruz."
            />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {TECH_STACK.map((tech, index) => (
              <ScrollReveal key={tech} delay={index * 0.05}>
                <span className="inline-block px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm transition-all duration-200 hover:border-purple-300 hover:text-[#A855F7]">
                  {tech}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24">
        <Container>
          <ScrollReveal>
            <SectionHeader
              label="Degerlerimiz"
              title="Bize yol gosteren ilkeler."
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
