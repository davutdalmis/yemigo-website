"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/animations/MagneticButton";

export default function CTASection() {
  return (
    <section className="relative bg-apple-bg-soft py-24">
      <Container>
        <div
          className="relative overflow-hidden rounded-[40px] bg-white px-8 py-24 text-center md:py-32"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(79,70,229,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(249,115,22,0.06) 0%, transparent 60%)",
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-apple-border-soft bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-apple-text-soft backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.7)]" />
            Ücretsiz demo
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-apple-text md:text-6xl">
            Restoranınızı
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-orange-500 bg-clip-text text-transparent">
              bugün dijitalleştirin.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-apple-text-soft">
            Kurulumu ve eğitimi biz yapıyoruz. Başka sistemden geçiyorsanız,
            mevcut taahhüdünüz bitene kadar ücretsiz.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton strength={0.2} href="/iletisim">
              <div className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-indigo-600 px-7 py-3 text-base font-medium text-white shadow-[0_10px_40px_-10px_rgba(79,70,229,0.5)] transition-all hover:bg-indigo-700 hover:shadow-[0_15px_50px_-10px_rgba(79,70,229,0.6)]">
                <span className="relative">Hemen Başlayın</span>
                <ArrowRight
                  size={16}
                  className="relative transition-transform group-hover:translate-x-0.5"
                />
              </div>
            </MagneticButton>

            <Link
              href="/urunler"
              className="text-base font-medium text-indigo-600 transition-colors hover:text-indigo-700"
            >
              Ürünleri inceleyin →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
