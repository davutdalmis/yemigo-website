import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | YemiGO",
  description: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Sayfa bulunamadı
        </h2>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#A855F7] hover:bg-[#9333EA] rounded-xl transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
