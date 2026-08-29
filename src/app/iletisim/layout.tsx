import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | YemiGO",
  description:
    "YemiGO ile iletişime geçin. Sorularınız, önerileriniz veya demo talepleriniz için bize ulaşın.",
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
