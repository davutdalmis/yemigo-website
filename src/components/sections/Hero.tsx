"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-white" />

      {/* Floating purple orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#A855F7] opacity-[0.07] blur-[120px] animate-[pulse-soft_6s_ease-in-out_infinite]" />

      <Container className="relative z-10 py-32">
        <div className="flex flex-col items-center text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Badge>Restoran Yonetim Platformu</Badge>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]"
          >
            Restoraninizi
            <br />
            <span className="bg-gradient-to-r from-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">
              tek platformdan
            </span>{" "}
            yonetin.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-xl text-gray-500 max-w-2xl leading-relaxed"
          >
            Siparis yonetimi, kurye takibi, masa operasyonlari ve platform
            entegrasyonlari — hepsi tek cati altinda.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg">
              Ucretsiz Deneyin
            </Button>
            <Button variant="secondary" size="lg">
              Urunleri Inceleyin
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
