import Link from "next/link";
import HomeHero from "@/components/home/HomeHero";
import PosScreenMock from "@/components/home/PosScreenMock";
import ExpressLiveMap from "@/components/products/ExpressLiveMap";
import { INTEGRATIONS, PLANS } from "@/lib/constants";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structured-data";
import "@/components/home/home.css";

const ico = (d: React.ReactNode) => (
  <span className="yh-ico">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {d}
    </svg>
  </span>
);

const CHIPS = [
  { href: "#pos", t: "YemiGO POS", p: "Windows · iPad", icon: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></> },
  { href: "#manager", t: "Manager", p: "iOS · Android", icon: <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /></> },
  { href: "#express", t: "Express", p: "Kurye uygulaması", icon: <><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M9 17h6l-3-7h4M6 17l3-7h3" /></> },
  { href: "#panel", t: "Panel", p: "Web", icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></> },
  { href: "#online", t: "Online Sipariş", p: "Web · QR", icon: <><path d="M6 7h12l-1 13H7L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" /></> },
];

function TileActions({ more }: { more: string }) {
  return (
    <div className="yh-actions">
      <Link className="yh-btn yh-btn-primary yh-btn-sm" href="/iletisim">
        Demo İste
      </Link>
      <Link className="yh-btn yh-btn-glass yh-btn-sm" href={more}>
        Daha fazla
      </Link>
    </div>
  );
}

function ImageTile(props: {
  id: string;
  img: string;
  alt: string;
  eyebrow: string;
  title: string;
  more: string;
}) {
  return (
    <div className="yh-tile" id={props.id}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="yh-bg" src={props.img} alt={props.alt} loading="lazy" />
      <div className="yh-txt">
        <div className="yh-eyebrow">{props.eyebrow}</div>
        <h2>{props.title}</h2>
        <TileActions more={props.more} />
      </div>
    </div>
  );
}

// Anasayfa fiyat kartı: planın öne çıkan 4 maddesi (tam liste /fiyatlandirma'da)
const PLAN_HIGHLIGHTS: Record<string, string[]> = {
  starter: ["YemiGO POS (masa, paket, gel-al)", "Online sipariş sitesi ve QR menü", "Yazarkasa ve e-Fatura / e-Arşiv", "Offline çalışma"],
  professional: ["Manager, Express ve Panel", "YemekSepeti, Uber Eats, Migros Yemek", "Stok ve reçete yönetimi", "Kurye yönetimi ve canlı takip"],
  enterprise: ["Sınırsız şube", "Üretim / imalat merkezi", "Özel entegrasyon projeleri", "Yerinde eğitim"],
};

// Yazarkasa ve e-belge entegrasyonları (logo dosyası yok, metin olarak gösterilir)
const FISCAL_INTEGRATIONS = ["Ingenico yazarkasa", "Paraşüt", "Uyumsoft"];

const WHY = [
  {
    title: "Geçişte kurulum ücretsiz",
    text: "Başka bir POS ya da adisyon sisteminden geliyorsanız kurulum ve veri aktarımı bizden.",
    link: { href: "/fiyatlandirma", label: "Detaylar →" },
    icon: <path d="M4 12l5 5L20 6" />,
  },
  {
    title: "Taahhüdünüz bitene kadar ücretsiz",
    text: "Mevcut sözleşmenizi belgeleyin, süreniz dolana kadar YemiGO'yu ücretsiz kullanın. Çifte ödeme yok.",
    link: { href: "/fiyatlandirma", label: "Koşullar →" },
    icon: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></>,
  },
  {
    title: "İnternet kesilse de kasa çalışır",
    text: "Ana kasada satış sürer, kayıtlar bağlantı gelince eşitlenir. Güncellemeler imzalı ve otomatik.",
    link: { href: "/neden-yemigo", label: "Nasıl çalışır →" },
    icon: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />,
  },
];

export default function HomePage() {
  return (
    <div className="yh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }} />

      {/* 1. Hero: tam genişlik video */}
      <HomeHero />

      <div className="yh-wrap">
        {/* 2. Kategori kartları */}
        <section className="yh-sec" id="urunler">
          <h2 className="yh-title">Restoranınız için tek ekosistem</h2>
          <div className="yh-chips">
            {CHIPS.map((c) => (
              <a key={c.href} className="yh-chip" href={c.href}>
                {ico(c.icon)}
                <span className="yh-t">{c.t}</span>
                <span className="yh-p">{c.p}</span>
              </a>
            ))}
          </div>

          {/* 3. Büyük ürün kutuları */}
          <div className="yh-grid">
            <ImageTile
              id="pos"
              img="/img/home/product-pos-hero-wpf.webp"
              alt="YemiGO POS anasayfası terminal ekranında"
              eyebrow="Restoranınızın dijital beyni"
              title="YemiGO POS"
              more="/urunler/pos"
            />
            <ImageTile
              id="manager"
              img="/img/home/product-manager-hero-app.webp"
              alt="YemiGO Manager anasayfası telefonda"
              eyebrow="İşletmeniz cebinizde"
              title="YemiGO Manager"
              more="/urunler/manager"
            />

            {/* Gerçek ürün ekranı: WPF anasayfası */}
            <div className="yh-real">
              <h2>Masadan paket servise, tek ekran.</h2>
              <p>Salon, paket platformları ve telefon siparişi aynı kasada — YemiGO POS anasayfası.</p>
              <div className="yh-actions">
                <Link className="yh-btn yh-btn-primary yh-btn-sm" href="/iletisim">
                  Canlı demo isteyin
                </Link>
              </div>
              <PosScreenMock />
            </div>

            <div className="yh-tile yh-map" id="express">
              <div className="yh-mapbox">
                <ExpressLiveMap variant="tile" />
              </div>
              <div className="yh-txt">
                <div className="yh-eyebrow">Kendi kuryeniz, kendi kontrolünüz</div>
                <h2>YemiGO Express</h2>
                <TileActions more="/urunler/express" />
              </div>
            </div>
            <ImageTile
              id="panel"
              img="/img/home/product-panel-hero-app.webp"
              alt="YemiGO Panel özet sayfası dizüstü bilgisayarda"
              eyebrow="Veriye dayalı kararlar"
              title="YemiGO Panel"
              more="/urunler/panel"
            />

            <div className="yh-tile yh-wide yh-split" id="online">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="yh-bg" src="/img/home/product-online-siparis-hero-app.webp" alt="YemiGO online sipariş sayfası telefonda" loading="lazy" />
              <div className="yh-txt">
                <div className="yh-eyebrow">Komisyonsuz, kendi markanızla</div>
                <h2>Online Sipariş ve QR Menü</h2>
                <p className="yh-sub2">
                  Kendi sipariş sitenizden ve masadaki QR menüden gelen siparişler doğrudan kasanıza düşer.
                </p>
                <TileActions more="/urunler/online-siparis" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Platformlar */}
        <section className="yh-sec">
          <h2 className="yh-title">Tüm platformlar, tek ekran.</h2>
          <p className="yh-subtitle">
            Siparişler otomatik olarak kasanıza düşer, tüm kanallar tek gün sonu raporunda birleşir.
          </p>
          <div className="yh-logos">
            {INTEGRATIONS.map((p) => (
              <div key={p.id} className="yh-logo-pill">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={p.name} loading="lazy" />
              </div>
            ))}
          </div>

          <h3 className="yh-title yh-title-sm">Yazarkasa ve e-Fatura dahil.</h3>
          <p className="yh-subtitle">
            Ödeme alınınca fiş yazarkasadan otomatik çıkar; e-Fatura ve e-Arşiv kasadan kesilir. Ek modül ücreti yok.
          </p>
          <div className="yh-logos">
            {FISCAL_INTEGRATIONS.map((name) => (
              <div key={name} className="yh-logo-pill yh-logo-text">
                {name}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 5. Neden YemiGO bandı */}
      <div className="yh-band">
        <div className="yh-wrap">
          <h2 className="yh-title">Neden YemiGO</h2>
          <div className="yh-why">
            {WHY.map((w) => (
              <div key={w.title} className="yh-card">
                <span className="yh-num">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    {w.icon}
                  </svg>
                </span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <Link href={w.link.href}>{w.link.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="yh-wrap">
        {/* 6. Fiyatlar */}
        <section className="yh-sec" id="fiyat">
          <h2 className="yh-title">Şeffaf fiyatlar</h2>
          <p className="yh-subtitle">Tek şubeden zincire. Eğitim her planda dahil, zorunlu sözleşme yok.</p>
          <div className="yh-plans">
            {PLANS.map((plan) => (
              <div key={plan.id} className={`yh-plan${plan.highlighted ? " yh-hot" : ""}`}>
                <div className="yh-name">
                  {plan.name}
                  {plan.badge && <span className="yh-tag">{plan.badge}</span>}
                </div>
                <div className="yh-price">
                  {plan.price > 0 ? (
                    <>
                      ₺{plan.price.toLocaleString("tr-TR")} <small>/ ay + KDV</small>
                    </>
                  ) : (
                    "Özel fiyat"
                  )}
                </div>
                <div className="yh-desc">{plan.description}</div>
                <ul>
                  {(PLAN_HIGHLIGHTS[plan.id] ?? plan.features.slice(0, 4)).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link className={`yh-btn ${plan.highlighted ? "yh-btn-primary" : "yh-btn-ghost"}`} href="/iletisim">
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="yh-note">
            Geçişte kurulum ücretsiz, yeni açılışlarda tek seferlik kurulum ücreti uygulanır.{" "}
            <Link href="/fiyatlandirma">Tüm planları karşılaştır</Link>
          </p>
        </section>

        {/* 7. Son CTA */}
        <div className="yh-cta" id="demo">
          <h2>
            Restoranınızı bugün
            <br />
            dijitalleştirin.
          </h2>
          <p>Kurulumu ve eğitimi biz yapıyoruz.</p>
          <div className="yh-actions">
            <Link className="yh-btn yh-btn-primary" href="/iletisim">
              Ücretsiz Demo
            </Link>
            <a className="yh-btn yh-btn-glass" href="tel:+905320563400">
              0532 056 34 00
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
