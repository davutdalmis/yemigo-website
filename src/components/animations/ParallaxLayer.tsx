"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: ["start end" | "start start", "end start" | "end end"];
};

export default function ParallaxLayer({
  children,
  speed = 0.3,
  className,
  offset = ["start end", "end start"],
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const y: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * 100}%`, `${-speed * 100}%`]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
