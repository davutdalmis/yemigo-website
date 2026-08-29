"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  intensity?: "soft" | "normal" | "strong";
};

export default function GradientMesh({
  className = "",
  intensity = "normal",
}: Props) {
  const opacityMap = { soft: 0.5, normal: 0.75, strong: 1 } as const;
  const opacity = opacityMap[intensity];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.55) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity,
        }}
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[55vw] h-[55vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.42) 0%, transparent 70%)",
          filter: "blur(90px)",
          opacity,
        }}
        animate={{ x: [0, -50, 40, 0], y: [0, 30, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 w-[40vw] h-[40vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.32) 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity,
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
