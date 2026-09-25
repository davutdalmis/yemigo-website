"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, BadgeCheck } from "lucide-react";
import { PLANS } from "@/lib/constants";

type Billing = "monthly" | "yearly";

const BILLING_OPTIONS: { key: Billing; label: string }[] = [
  { key: "monthly", label: "Aylık" },
  { key: "yearly", label: "Yıllık" },
];

function formatPrice(value: number) {
  return `₺${value.toLocaleString("tr-TR")}`;
}

export default function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const yearly = billing === "yearly";

  return (
    <div>
      {/* Segmented kontrol — Aylık / Yıllık */}
      <div className="mb-14 flex justify-center">
        <div className="relative inline-flex items-center gap-1 rounded-full border border-apple-border bg-white p-1 shadow-sm">
          {BILLING_OPTIONS.map((opt) => {
            const active = billing === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setBilling(opt.key)}
                className="relative z-10 rounded-full px-5 py-2 text-sm font-semibold focus-visible:outline-none"
                aria-pressed={active}
              >
                {active && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-indigo-600"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative flex items-center gap-2 transition-colors ${
                    active ? "text-white" : "text-apple-text-soft"
                  }`}
                >
                  {opt.label}
                  {opt.key === "yearly" && (
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none transition-colors ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-indigo-50 text-indigo-600"
                      }`}
                    >
                      2 AY ÜCRETSİZ
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Güven şeridi — fiyatların yanında: kurulum ücreti yok vurgusu */}
      <div className="mx-auto mb-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-apple-text-soft">
        {["Eğitim dahil", "Geçişte kurulum ücretsiz", "Zorunlu sözleşme yok", "İstediğiniz zaman iptal"].map(
          (item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <BadgeCheck size={16} className="text-indigo-600" strokeWidth={2} />
              {item}
            </span>
          )
        )}
      </div>

      {/* Plan kartları */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => {
          const isHighlighted = plan.highlighted;
          const isCustom = plan.price === 0;
          const shownPrice = yearly ? plan.priceYearly : plan.price;

          return (
            <div
              key={plan.id}
              className={`relative flex h-full flex-col overflow-hidden rounded-[22px] p-8 transition-all duration-300 ${
                isHighlighted
                  ? "bg-gradient-to-br from-indigo-50 via-white to-orange-50 ring-1 ring-indigo-200 shadow-[0_24px_60px_-28px_rgba(79,70,229,0.45)] hover:-translate-y-1.5 lg:-translate-y-2 lg:hover:-translate-y-3"
                  : "border border-apple-border-soft bg-white shadow-[0_10px_34px_-20px_rgba(17,24,39,0.18)] hover:-translate-y-1 hover:shadow-[0_26px_54px_-24px_rgba(17,24,39,0.22)]"
              }`}
            >
              {plan.badge && (
                <div className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-orange-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white shadow-sm">
                  <Sparkles size={12} />
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold text-apple-text">{plan.name}</h3>
              <p className="mt-2 text-sm text-apple-text-soft">
                {plan.description}
              </p>

              {/* Fiyat */}
              <div className="mt-8 min-h-[84px]">
                {isCustom ? (
                  <span className="text-4xl font-bold text-apple-text">
                    Özel Fiyat
                  </span>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-apple-text">
                        {formatPrice(shownPrice)}
                      </span>
                      <span className="text-sm text-apple-text-soft">
                        / {yearly ? "yıl" : "ay"}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-apple-text-soft">
                      + KDV
                      {yearly &&
                        ` · aylık ${formatPrice(
                          Math.round(plan.priceYearly / 12)
                        )}'e denk`}
                    </p>
                    <p className="mt-1 text-xs text-apple-text-muted">
                      Yeni açılışlarda tek seferlik + kurulum
                    </p>
                  </>
                )}
              </div>

              {/* Özellikler */}
              {plan.featuresLead && (
                <p className="mt-8 text-sm font-semibold text-apple-text">
                  {plan.featuresLead}
                </p>
              )}
              <ul className={`${plan.featuresLead ? "mt-4" : "mt-8"} space-y-3.5`}>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-apple-text"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        isHighlighted
                          ? "bg-indigo-100 text-indigo-600"
                          : "bg-apple-bg-soft text-apple-text-soft"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <Link
                  href={`/iletisim?paket=${encodeURIComponent(plan.name)}&donem=${
                    yearly ? "yillik" : "aylik"
                  }`}
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    isHighlighted
                      ? "bg-indigo-600 text-white shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:bg-indigo-700 hover:shadow-[0_15px_40px_-10px_rgba(79,70,229,0.6)]"
                      : "border border-apple-border bg-white text-apple-text hover:border-apple-text hover:bg-apple-bg-soft"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
