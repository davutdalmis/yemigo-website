"use client";

import {
  Factory,
  MonitorSmartphone,
  Bike,
  BadgePercent,
  RefreshCw,
  ShieldCheck,
  Receipt,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { type Feature } from "@/lib/constants";

export const iconMap: Record<string, LucideIcon> = {
  Factory,
  MonitorSmartphone,
  Bike,
  BadgePercent,
  RefreshCw,
  ShieldCheck,
  Receipt,
};

export const SECTION_LABEL = "Neden YemiGO";
export const SECTION_TITLE = "Satış noktası değil, tüm zincir.";
export const SECTION_SUBTITLE =
  "Üretimden şubeye, paket platformlarından kendi kuryenize — restoranınızın her halkası tek platformda, gerçek zamanlı ve güvenli.";

export function FeatureVisual({
  feature,
  index,
  accent,
}: {
  feature: Feature;
  index: number;
  accent: "indigo" | "orange";
}) {
  const Icon = iconMap[feature.icon];
  const isOrange = accent === "orange";
  return (
    <div
      className="relative flex aspect-[5/4] flex-col justify-between overflow-hidden rounded-[32px] p-7 ring-1 ring-black/[0.05]"
      style={{
        background: isOrange
          ? "linear-gradient(150deg, rgba(249,115,22,0.12) 0%, rgba(255,247,237,0.6) 45%, #ffffff 100%)"
          : "linear-gradient(150deg, rgba(79,70,229,0.12) 0%, rgba(238,242,255,0.6) 45%, #ffffff 100%)",
      }}
    >
      {/* Soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-60 blur-2xl"
        style={{
          background: isOrange
            ? "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Ghost numeral */}
      <span
        className={`pointer-events-none absolute right-5 top-1 font-mono text-[96px] font-extralight leading-none tracking-tighter ${
          isOrange ? "text-orange-500/[0.10]" : "text-indigo-500/[0.10]"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon chip */}
      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${
          isOrange
            ? "bg-orange-600 shadow-orange-600/25"
            : "bg-indigo-600 shadow-indigo-600/25"
        }`}
      >
        {Icon && <Icon size={26} strokeWidth={1.5} />}
      </div>

      {/* Capability chips */}
      {feature.points && (
        <div className="relative flex flex-wrap gap-2">
          {feature.points.map((p) => (
            <span
              key={p}
              className="rounded-full bg-white/80 px-3 py-1 text-[12px] font-medium text-apple-text-soft ring-1 ring-black/[0.04] backdrop-blur-sm"
            >
              {p}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function FeatureRow({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const accent: "indigo" | "orange" =
    feature.accent ?? (index % 2 === 0 ? "indigo" : "orange");
  const isOrange = accent === "orange";
  const visualFirst = index % 2 === 0;

  const visual = (
    <ScrollReveal>
      <FeatureVisual feature={feature} index={index} accent={accent} />
    </ScrollReveal>
  );

  const text = (
    <ScrollReveal delay={0.08}>
      <div>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
            isOrange ? "text-orange-500" : "text-indigo-500"
          }`}
        >
          {feature.kicker}
        </span>
        <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-tight text-apple-text">
          {feature.title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.6] text-apple-text-soft">
          {feature.description}
        </p>
      </div>
    </ScrollReveal>
  );

  return (
    <div className="flex flex-col gap-6">
      {visualFirst ? (
        <>
          {visual}
          {text}
        </>
      ) : (
        <>
          {text}
          {visual}
        </>
      )}
    </div>
  );
}
