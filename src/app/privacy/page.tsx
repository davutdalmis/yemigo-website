import type { Metadata } from "next";
import ExpressPrivacyContent from "@/components/legal/ExpressPrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | YemiGO",
};

export default function PrivacyPage() {
  return <ExpressPrivacyContent />;
}
