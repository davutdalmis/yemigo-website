import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yemigo.com"),
  title: "YemiGO - Restoran Yonetim Platformu",
  description:
    "Restoraninizi tek platformdan yonetin. POS, kurye takip, online siparis, platform entegrasyonlari ve daha fazlasi. 2000+ sube, 10.000+ gunluk siparis.",
  keywords: [
    "restoran yonetim",
    "pos sistemi",
    "online siparis",
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
    title: "YemiGO - Restoran Yonetim Platformu",
    description:
      "Restoraninizi tek platformdan yonetin. POS, kurye takip, online siparis, platform entegrasyonlari ve daha fazlasi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YemiGO - Restoran Yonetim Platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YemiGO - Restoran Yonetim Platformu",
    description:
      "Restoraninizi tek platformdan yonetin. POS, kurye takip, online siparis ve daha fazlasi.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#A855F7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
