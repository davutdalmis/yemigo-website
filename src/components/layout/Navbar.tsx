"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const rawPath = usePathname();
  // trailingSlash:true ile usePathname '/urunler/' döner → sondaki slash'ı
  // soyutla ki aktif-link kıyaslaması ('/urunler') tutsun (imalat paritesi).
  const pathname = (rawPath || "/").replace(/\/+$/, "") || "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect when navbar overlaps a dark cinematic section (hero) and invert chrome.
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
      const hit = darkSections.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < navBottom && r.bottom > 0;
      });
      setOverDark(hit);
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
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16">
        {/* iOS scroll-edge arka plan — kademeli blur + opaklık gradyanı.
            Koyu hero üstünde fade rengi koyuya döner; hero tepesinde (scroll
            edilmemiş) tamamen şeffaf kalır ki cinematic görsel bozulmasın. */}
        <div
          aria-hidden="true"
          className={`nav-scroll-edge transition-opacity duration-300 ${
            overDark && !isScrolled ? "opacity-0" : "opacity-100"
          }`}
          style={
            overDark
              ? ({ ["--nav-fade-rgb" as string]: "10, 9, 26" } as React.CSSProperties)
              : undefined
          }
        >
          <div className="nav-progressive-blur">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="nav-fade-overlay" />
          {/* Renkli cam tonu — koyu hero üstünde gizli (fade zaten opacity-0) */}
          {!overDark && <div className="nav-mesh-tint" />}
        </div>

        <Container>
          <div className="relative z-10 flex h-16 items-center gap-4">
            {/* Logo — SVG kelime markası (koyu hero üstünde dark varyant) */}
            <Link href="/" className="flex items-center shrink-0" aria-label="YemiGO ana sayfa">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={overDark ? "/yemigo-logo-dark.svg" : "/yemigo-logo-light.svg"}
                alt="YemiGO"
                width={115}
                height={28}
                className="h-7 w-auto"
              />
            </Link>

            {/* Orta — yüzen kapsül nav (imalat paritesi) */}
            <nav
              className={`mx-auto hidden items-center gap-0.5 rounded-full border px-1.5 py-1.5 shadow-sm backdrop-blur-md backdrop-saturate-150 md:flex ${
                overDark
                  ? "border-white/15 bg-white/10"
                  : "border-[var(--glass-border)] bg-[var(--glass-bg)]"
              }`}
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const base = isActive
                  ? "bg-[var(--primary)] text-white shadow-sm"
                  : overDark
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-apple-text-soft hover:text-apple-text hover:bg-black/[0.05]";
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${base}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Sağ CTA */}
            <div className="hidden items-center gap-4 md:flex">
              <a
                href="https://panel.yemigo.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-medium transition-colors ${
                  overDark
                    ? "text-white/80 hover:text-white"
                    : "text-apple-text-soft hover:text-apple-text"
                }`}
              >
                Giriş Yap
              </a>
              <Link
                href="/iletisim"
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  overDark
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Ücretsiz Deneyin
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`ml-auto flex h-8 w-8 items-center justify-center rounded-md transition-colors md:hidden ${
                overDark
                  ? "text-white/80 hover:text-white"
                  : "text-apple-text-soft hover:text-apple-text"
              }`}
              aria-label={isMobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute top-16 left-0 right-0 border-b border-apple-border-soft bg-white/95 backdrop-blur-xl"
            >
              <div className="space-y-1 px-6 py-4">
                {NAV_LINKS.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-indigo-50 text-indigo-700"
                            : "text-apple-text hover:bg-apple-bg-soft"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="space-y-2 pt-3 pb-1">
                  <a
                    href="https://panel.yemigo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full border border-apple-border bg-white px-6 py-3 text-center text-sm font-semibold text-apple-text transition-colors hover:bg-apple-bg-soft"
                  >
                    Giriş Yap
                  </a>
                  <Link
                    href="/iletisim"
                    className="block w-full rounded-full border border-apple-border bg-white px-6 py-3 text-center text-sm font-semibold text-apple-text transition-colors hover:bg-apple-bg-soft"
                  >
                    İletişime Geçin
                  </Link>
                  <Link
                    href="/iletisim"
                    className="block w-full rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-indigo-700"
                  >
                    Ücretsiz Deneyin
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
