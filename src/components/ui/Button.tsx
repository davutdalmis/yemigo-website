import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-[#4F46E5] hover:bg-[#3525CD] text-white shadow-[0_8px_30px_rgba(79,70,229,0.28)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.45)]",
  secondary:
    "bg-gray-100 hover:bg-gray-200 text-gray-900",
  white:
    "bg-white hover:bg-gray-50 text-[#3525CD] shadow-lg",
  ghost:
    "bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white backdrop-blur-md",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
