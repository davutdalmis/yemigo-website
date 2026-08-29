import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import Container from "@/components/ui/Container";

const PRODUCT_LINKS = [
  { href: "/urunler/pos", label: "YemiGO POS" },
  { href: "/urunler/manager", label: "YemiGO Manager" },
  { href: "/urunler/express", label: "YemiGO Express" },
  { href: "/urunler/panel", label: "YemiGO Panel" },
  { href: "/urunler/online-siparis", label: "Online Sipariş" },
];

const COMPANY_LINKS = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

const LEGAL_LINKS = [
  { href: "/gizlilik", label: "Gizlilik Politikası" },
  { href: "/kvkk", label: "KVKK" },
];

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-apple-text-soft">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-apple-text-soft transition-colors duration-200 hover:text-apple-text hover:underline underline-offset-2"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-apple-bg-soft border-t border-apple-border-soft">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="mb-5 inline-flex items-center">
              <span className="text-2xl font-bold text-apple-text">Yemi</span>
              <span className="text-2xl font-bold gradient-text">GO</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-apple-text-soft">
              Restoran ekosistemini tek platformda toplayan, gerçek zamanlı
              POS + kurye + paket entegrasyonu altyapısı.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href="mailto:merhaba@yemigo.com"
                className="inline-flex items-center gap-2 text-apple-text-soft transition-colors hover:text-apple-text"
              >
                <Mail size={14} />
                merhaba@yemigo.com
              </a>
              <a
                href="tel:+905320563400"
                className="inline-flex items-center gap-2 text-apple-text-soft transition-colors hover:text-apple-text"
              >
                <Phone size={14} />
                0532 056 34 00
              </a>
              <a
                href="https://panel.yemigo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-apple-text-soft transition-colors hover:text-apple-text"
              >
                <Globe size={14} />
                panel.yemigo.com
              </a>
            </div>
          </div>

          <FooterLinkGroup title="Ürünler" links={PRODUCT_LINKS} />
          <FooterLinkGroup title="Şirket" links={COMPANY_LINKS} />
          <FooterLinkGroup title="Yasal" links={LEGAL_LINKS} />
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-apple-border-soft py-7 sm:flex-row">
          <p className="text-xs text-apple-text-muted">
            &copy; {new Date().getFullYear()} YemiGO Teknolojileri A.Ş. Tüm
            hakları saklıdır.
          </p>
          <p className="text-xs text-apple-text-muted">
            Türkiye&apos;de tasarlandı ve geliştirildi
          </p>
        </div>
      </Container>
    </footer>
  );
}
