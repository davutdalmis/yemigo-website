import type { Metadata } from "next";
import WebsitePrivacyContent from "@/components/legal/WebsitePrivacyContent";

export const metadata: Metadata = {
  title: "Gizlilik ve Çerez Politikası | YemiGO",
  description:
    "YemiGO internet sitesi gizlilik ve çerez politikası: topladığımız veriler, çerez kullanımı, paylaşım ve haklarınız.",
};

export default function GizlilikPage() {
  return <WebsitePrivacyContent />;
}
