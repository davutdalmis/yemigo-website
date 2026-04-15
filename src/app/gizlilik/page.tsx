import type { Metadata } from "next";
import ExpressPrivacyContent from "@/components/legal/ExpressPrivacyContent";

export const metadata: Metadata = {
  title: "Gizlilik Politikasi | YemiGO",
};

export default function GizlilikPage() {
  return <ExpressPrivacyContent />;
}
