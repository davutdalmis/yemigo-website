"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";

/**
 * meta.com tarzı üst menü: logo + bağlantılar solda, İletişim / Giriş Yap /
 * Ücretsiz Demo sağda.
 * - Koyu hero ([data-theme="dark"], anasayfa videosu) üstünde: tamamen şeffaf,
 *   beyaz yazı + hafif gölge (hero'daki üst karartma ile okunur kalır).
 * - Diğer her yerde: buzlu beyaz cam, koyu yazı.
 */
export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const rawPath = usePathname();
  // trailingSlash:true ile usePathname '/urunler/' döner → sondaki slash'ı at
  const pathname = (rawPath || "/").replace(/\/+$/, "") || "/";

  // Menü koyu bir hero'nun üstünde mi?
  useEffect(() => {
    const darkSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-theme="dark"]')
    );
    if (darkSections.length === 0) {
      setOverDark(false);
      return;
    }
    const compute = () => {
      const navBottom = 64; // h-16
      setOverDark(
        darkSections.some((el) => {
          const r = el.getBoundingClientRect();
          return r.top < navBottom && r.bottom > navBottom;
        })
      );
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [pathname]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Mobil menü açıkken her zaman beyaz zemin
  const transparent = overDark && !isMobileOpen;
  const leftLinks = NAV_LINKS.filter((l) => l.href !== "/iletisim");
  const shadow = transparent ? { textShadow: "0 1px 2px rgba(0,0,0,.35)" } : undefined;
  const linkCls = (active: boolean) =>
    `text-sm transition-opacity ${
      active ? "opacity-100 underline underline-offset-[6px]" : "opacity-90 hover:opacity-100 hover:underline hover:underline-offset-[6px]"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-[background-color,color,box-shadow] duration-300 ${
          transparent
            ? "bg-transparent text-white"
            : "bg-white/[0.86] text-[#1c2b33] shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-[1.8]"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center gap-10 px-4 md:px-12">
          <Link href="/" className="flex shrink-0 items-center" aria-label="YemiGO ana sayfa">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={transparent ? "/yemigo-logo-dark.svg" : "/yemigo-logo-light.svg"}
              alt="YemiGO"
              width={115}
              height={28}
              className="h-7 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" style={shadow}>
            {leftLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkCls(pathname === link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-6 md:flex">
            <Link href="/iletisim" className={linkCls(pathname === "/iletisim")} style={shadow}>
              İletişim
            </Link>
            <a
              href="https://panel.yemigo.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls(false)}
              style={shadow}
            >
              Giriş Yap
            </a>
            <Link
              href="/iletisim"
              className="rounded-full bg-indigo-600 px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Ücretsiz Demo
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="ml-auto flex h-9 w-9 items-center justify-center md:hidden"
            style={shadow}
            aria-label={isMobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobil menü */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/20" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute left-0 right-0 top-16 bg-white px-4 pb-6 pt-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block border-b border-[#f0f2f5] px-1 py-3.5 text-[17px] ${
                    pathname === link.href ? "font-semibold text-indigo-700" : "text-[#1c2b33]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://panel.yemigo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b border-[#f0f2f5] px-1 py-3.5 text-[17px] text-[#1c2b33]"
              >
                Giriş Yap
              </a>
              <Link
                href="/iletisim"
                className="mt-4 block w-full rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700"
              >
                Ücretsiz Demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
