"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Tilt3D from "@/components/animations/Tilt3D";
import { FEATURES, type Feature } from "@/lib/constants";
import {
  iconMap,
  SECTION_LABEL,
  SECTION_TITLE,
  SECTION_SUBTITLE,
} from "@/components/sections/whyYemigo";

function FeatureCard({
  feature,
  index,
  variant = "grid",
}: {
  feature: Feature;
  index: number;
  variant?: "grid" | "horizontal";
}) {
  const Icon = iconMap[feature.icon];
  const isAccent = index % 3 === 1;
  const horizontal = variant === "horizontal";

  return (
    <Tilt3D max={4} scale={1.01}>
      <div
        className={`group relative h-full overflow-hidden rounded-[28px] bg-gradient-to-br from-white via-white to-zinc-50/70 p-10 ring-1 ring-black/[0.04] transition-all duration-700 hover:ring-black/[0.08] ${
          horizontal
            ? "shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05),_0_24px_60px_-32px_rgba(15,23,42,0.15)]"
            : "shadow-[0_2px_6px_-2px_rgba(15,23,42,0.04)]"
        } hover:shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05),_0_32px_80px_-32px_rgba(15,23,42,0.22)]`}
      >
        {/* Soft accent glow — appears on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: isAccent
              ? "radial-gradient(circle at 30% 0%, rgba(249,115,22,0.08) 0%, transparent 55%)"
              : "radial-gradient(circle at 30% 0%, rgba(79,70,229,0.08) 0%, transparent 55%)",
          }}
        />

        {/* Top row: editorial step number + section label */}
        <div className="relative flex items-baseline justify-between">
          <span className="font-mono text-[64px] font-extralight leading-none tracking-tighter text-apple-text-muted/25">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-[10px] font-medium uppercase tracking-[0.28em] ${
              isAccent ? "text-orange-500/80" : "text-indigo-500/80"
            }`}
          >
            Özellik
          </span>
        </div>

        {/* Hairline accent */}
        <div
          className={`mt-7 h-px w-12 ${
            isAccent
              ? "bg-gradient-to-r from-orange-300/70 to-transparent"
              : "bg-gradient-to-r from-indigo-300/70 to-transparent"
          }`}
        />

        {/* Title — bigger, tighter */}
        <h3 className="relative mt-6 text-[28px] font-semibold leading-[1.1] tracking-tight text-apple-text">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="relative mt-4 text-[15px] leading-[1.65] text-apple-text-soft">
          {feature.description}
        </p>

        {/* Bottom: icon chip — small, refined, anchored */}
        <div className="relative mt-10 flex items-center justify-between">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-700 ${
              isAccent
                ? "bg-orange-50 text-orange-600 ring-1 ring-orange-100 group-hover:bg-orange-600 group-hover:text-white group-hover:ring-orange-600"
                : "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-600"
            }`}
          >
            {Icon && <Icon size={20} strokeWidth={1.5} />}
          </div>
        </div>
      </div>
    </Tilt3D>
  );
}

/** Mobil — Apple tarzı minimal özet; tam detay /neden-yemigo sayfasında. */
function MinimalWhy() {
  return (
    <section className="relative bg-apple-bg-soft pb-16 pt-12 lg:hidden">
      <Container>
        <SectionHeader
          label={SECTION_LABEL}
          title={SECTION_TITLE}
          subtitle={SECTION_SUBTITLE}
          align="left"
        />

        <div className="mt-2 grid grid-cols-2 gap-3">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            const accent = feature.accent ?? (i % 2 === 0 ? "indigo" : "orange");
            const isOrange = accent === "orange";
            return (
              <ScrollReveal key={feature.title} delay={i * 0.05}>
                <div className="flex h-full flex-col gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/[0.05]">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isOrange
                        ? "bg-orange-50 text-orange-600 ring-1 ring-orange-100"
                        : "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100"
                    }`}
                  >
                    {Icon && <Icon size={18} strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-[13.5px] font-semibold leading-snug tracking-tight text-apple-text">
                    {feature.title}
                  </h3>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.12}>
          <Link
            href="/neden-yemigo"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-apple-text px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.5)] transition-transform active:scale-[0.98]"
          >
            YemiGO&apos;yu keşfedin
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/** Desktop (lg+) — Apple/Stripe stili sticky horizontal scroll. */
function HorizontalScroll() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Cards: ~440px wide, 6 cards + 5 gaps (24px) = ~2760px total.
  // Average viewport at lg+ ~1280px → need to translate roughly -55%.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative hidden bg-apple-bg-soft lg:block"
      style={{ height: "420vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Soft ambient gradient backdrop — depth setter */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(79,70,229,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(249,115,22,0.06) 0%, transparent 50%)",
          }}
        />

        {/* Top: header */}
        <div className="relative z-10 pt-24">
          <Container>
            <SectionHeader
              label={SECTION_LABEL}
              title={SECTION_TITLE}
              subtitle={SECTION_SUBTITLE}
            />
          </Container>
        </div>

        {/* Middle: horizontal scrolling cards */}
        <div className="relative z-10 flex flex-1 items-center">
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] will-change-transform"
          >
            {FEATURES.map((feature, i) => (
              <div key={feature.title} className="w-[440px] shrink-0">
                <FeatureCard feature={feature} index={i} variant="horizontal" />
              </div>
            ))}
            {/* Right gutter so last card isn't flush against edge */}
            <div className="w-[3rem] shrink-0" aria-hidden />
          </motion.div>
        </div>

        {/* Bottom: progress bar + scroll cue */}
        <div className="relative z-10 pb-10">
          <Container>
            <div className="flex items-center gap-6">
              <motion.div
                style={{ opacity: scrollCueOpacity }}
                className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.32em] text-apple-text-muted"
              >
                <ArrowDown size={12} className="animate-bounce" />
                Kaydır
              </motion.div>
              <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-apple-border-soft">
                <motion.div
                  style={{ scaleX: scrollYProgress }}
                  className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-indigo-500 to-orange-500"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default function FeatureShowcase() {
  return (
    <>
      <HorizontalScroll />
      <MinimalWhy />
    </>
  );
}
