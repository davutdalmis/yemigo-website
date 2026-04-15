"use client";

import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface ProductHighlightsProps {
  highlights: string[];
  color: string;
}

export default function ProductHighlights({
  highlights,
  color,
}: ProductHighlightsProps) {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-sm font-semibold tracking-wide uppercase text-[#A855F7]">
              Neden Tercih Edilmeli?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Temel avantajlar.
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((highlight, index) => (
              <ScrollReveal key={highlight} delay={index * 0.05}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                  <div
                    className="flex items-center justify-center w-6 h-6 rounded-full shrink-0 mt-0.5"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Check size={14} style={{ color }} strokeWidth={2.5} />
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
