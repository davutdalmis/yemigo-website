import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "white";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-[#A855F7] hover:bg-[#9333EA] text-white shadow-[0_8px_30px_rgba(168,85,247,0.25)] hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)]",
  secondary:
    "bg-gray-100 hover:bg-gray-200 text-gray-900",
  white:
    "bg-white hover:bg-gray-50 text-[#7C3AED] shadow-lg",
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
