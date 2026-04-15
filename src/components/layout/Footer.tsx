import Link from "next/link";
import Container from "@/components/ui/Container";

const PRODUCT_LINKS = [
  { href: "/urunler#pos", label: "YemiGO POS" },
  { href: "/urunler#manager", label: "YemiGO Manager" },
  { href: "/urunler#express", label: "YemiGO Express" },
  { href: "/urunler#panel", label: "YemiGO Panel" },
  { href: "/urunler#online-siparis", label: "Online Siparis" },
];

const COMPANY_LINKS = [
  { href: "/fiyatlandirma", label: "Fiyatlandirma" },
  { href: "/hakkimizda", label: "Hakkimizda" },
  { href: "/iletisim", label: "Iletisim" },
  { href: "/blog", label: "Blog" },
];

const LEGAL_LINKS = [
  { href: "/gizlilik", label: "Gizlilik Politikasi" },
  { href: "/kvkk", label: "KVKK" },
  { href: "/kullanim-sartlari", label: "Kullanim Sartlari" },
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
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
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
    <footer className="bg-gray-900">
      <Container>
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <span className="text-xl font-bold text-white">Yemi</span>
              <span className="text-xl font-bold text-purple-400">GO</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Restoran Yonetim Platformu. Siparis, mutfak, kurye, stok ve
              muhasebe — hepsi tek ekosistemde.
            </p>
          </div>

          {/* Links */}
          <FooterLinkGroup title="Urunler" links={PRODUCT_LINKS} />
          <FooterLinkGroup title="Sirket" links={COMPANY_LINKS} />
          <FooterLinkGroup title="Yasal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} YemiGO. Tum haklari saklidir.
          </p>
          <p className="text-sm text-gray-600">
            Turkiye&apos;de tasarlandi ve gelistirildi
          </p>
        </div>
      </Container>
    </footer>
  );
}
