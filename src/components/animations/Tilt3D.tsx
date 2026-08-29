"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
};

export default function Tilt3D({
  children,
  className = "",
  max = 8,
  scale = 1.02,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 200, damping: 22 });
  const smy = useSpring(my, { stiffness: 200, damping: 22 });
  const rotateX = useTransform(smy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-max, max]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
