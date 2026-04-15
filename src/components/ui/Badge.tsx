import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-[#7C3AED] ${className}`}
    >
      {children}
    </span>
  );
}
