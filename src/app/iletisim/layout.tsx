import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Iletisim | YemiGO",
  description:
    "YemiGO ile iletisime gecin. Sorulariniz, onerileriniz veya demo talepleriniz icin bize ulasin.",
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
