import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yemigo.com"),
  title: "YemiGO — Restoran Yönetim Platformu",
  description:
    "Restoranınızı tek platformdan yönetin. POS, kurye takip, komisyonsuz online sipariş, platform entegrasyonları ve daha fazlası.",
  keywords: [
    "restoran yönetim",
    "pos sistemi",
    "online sipariş",
    "kurye takip",
    "yemeksepeti entegrasyon",
    "getir entegrasyon",
  ],
  authors: [{ name: "YemiGO" }],
  creator: "YemiGO",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://yemigo.com",
    siteName: "YemiGO",
    title: "YemiGO — Restoran Yönetim Platformu",
    description:
      "Restoranınızı tek platformdan yönetin. POS, kurye takip, online sipariş, platform entegrasyonları ve daha fazlası.",
  },
  twitter: {
    card: "summary_large_image",
    title: "YemiGO — Restoran Yönetim Platformu",
    description:
      "Restoranınızı tek platformdan yönetin. POS, kurye takip, online sipariş ve daha fazlası.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
