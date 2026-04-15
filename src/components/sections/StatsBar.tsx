"use client";

import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { STATS } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="relative bg-gray-900 py-20">
      {/* Purple accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#7C3AED]" />

      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                className="text-4xl md:text-5xl font-bold text-white"
              />
              <p className="mt-2 text-sm md:text-base text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
