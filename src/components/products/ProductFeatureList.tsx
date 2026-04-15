"use client";

import * as LucideIcons from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ProductFeatureListProps {
  features: Feature[];
  color: string;
}

export default function ProductFeatureList({
  features,
  color,
}: ProductFeatureListProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeader
          label="Ozellikler"
          title="Tum ozellikler, tek platformda."
          subtitle="Isletmenizi buyutmek icin ihtiyaciniz olan her sey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = (
              LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>
            )[feature.icon];

            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-gray-200">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    {Icon && (
                      <Icon
                        size={24}
                        style={{ color }}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
