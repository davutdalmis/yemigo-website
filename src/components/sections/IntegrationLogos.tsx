"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { INTEGRATIONS, type Integration } from "@/lib/constants";

function PlatformLogo({ platform }: { platform: Integration }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    // Wordmark fallback — marka adı kendi renginde, kutusuz
    return (
      <span
        className="text-2xl font-bold tracking-tight md:text-3xl"
        style={{ color: platform.color }}
        aria-label={platform.name}
      >
        {platform.name}
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={platform.logo}
      alt={platform.name}
      className="max-h-full w-auto max-w-[88%] object-contain"
      onError={() => setImgFailed(true)}
      loading="lazy"
    />
  );
}

function IntegrationTile({ platform }: { platform: Integration }) {
  return (
    <div className="group relative flex h-28 items-center justify-center overflow-hidden rounded-[24px] bg-white p-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.05] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.22)] hover:ring-black/[0.08] md:h-32">
      {/* Marka rengi yumuşak parıltı — hover'da belirir */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 50% 130%, ${platform.color}22 0%, transparent 62%)`,
        }}
      />

      {/* Logo */}
      <div className="relative flex h-12 w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.04] md:h-14">
        <PlatformLogo platform={platform} />
      </div>
    </div>
  );
}

export default function IntegrationLogos() {
  return (
    <section className="relative bg-apple-bg-soft py-28 md:py-32">
      <Container>
        <SectionHeader
          label="Entegrasyon"
          title="Tek ekran, tüm platformlar."
          subtitle="YemekSepeti, Getir Yemek, Trendyol Go, Migros Yemek ve Fuudy siparişleri otomatik olarak POS ekranınıza düşer — kanal kaybı, kaçan sipariş yok."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {INTEGRATIONS.map((platform, i) => (
            <ScrollReveal key={platform.id} delay={i * 0.06}>
              <IntegrationTile platform={platform} />
            </ScrollReveal>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-xs leading-relaxed text-apple-text-muted">
          Tüm logolar ilgili markaların tescilli ticari markalarıdır. Yemigo bu
          platformlarla entegrasyon sağlamaktadır.
        </p>
      </Container>
    </section>
  );
}
