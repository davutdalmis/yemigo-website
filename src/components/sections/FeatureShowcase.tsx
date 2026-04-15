"use client";

import {
  Layers,
  Zap,
  BarChart3,
  Globe,
  Shield,
  Scaling,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { FEATURES, type Feature } from "@/lib/constants";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Zap,
  BarChart3,
  Globe,
  Shield,
  Scaling,
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = iconMap[feature.icon];

  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-200">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50">
          {Icon && (
            <Icon size={24} className="text-[#A855F7]" strokeWidth={1.5} />
          )}
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-semibold text-gray-900">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-500 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </ScrollReveal>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionHeader
          label="Ozellikler"
          title="Neden YemiGO?"
          subtitle="Restoran yonetiminde ihtiyaciniz olan her sey, tek platformda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
