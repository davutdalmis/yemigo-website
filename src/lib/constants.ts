// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  tagline: string;
  platform: string;
  icon: string;
  color: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "pos",
    name: "YemiGO POS",
    tagline: "Merkezi siparis yonetimi",
    platform: "Windows",
    icon: "Monitor",
    color: "#7C3AED",
    description:
      "Kasadan mutfaga, masadan paket servise — tum siparis akisini tek ekrandan yonetin. Platform entegrasyonlari, stok takibi ve muhasebe dahil.",
  },
  {
    id: "manager",
    name: "YemiGO Manager",
    tagline: "Mobil yonetim paneli",
    platform: "iOS / Android",
    icon: "Smartphone",
    color: "#A855F7",
    description:
      "Isletmenizi cebinizden yonetin. Anlik satis raporlari, siparis bildirimleri, kurye takibi ve sube karsilastirmalari her yerde elinizin altinda.",
  },
  {
    id: "express",
    name: "YemiGO Express",
    tagline: "Kurye takip uygulamasi",
    platform: "iOS / Android",
    icon: "Truck",
    color: "#C084FC",
    description:
      "Akilli kurye atama, rota optimizasyonu ve canli konum takibi. Teslimat surelerinizi kisaltin, musteri memnuniyetini artirin.",
  },
  {
    id: "panel",
    name: "YemiGO Panel",
    tagline: "Web yonetim paneli",
    platform: "Web",
    icon: "LayoutDashboard",
    color: "#9333EA",
    description:
      "Detayli raporlar, menu yonetimi, kullanici yetkileri ve coklu sube kontrolu. Tarayicinizdan isletmenizin tum verilerine erisim.",
  },
  {
    id: "online-siparis",
    name: "Online Siparis",
    tagline: "Dijital siparis kanallari",
    platform: "Web",
    icon: "ShoppingBag",
    color: "#A855F7",
    description:
      "Kendi markanizla online siparis sistemi. QR menuden masadan siparis, paket servis sitesi ve platform entegrasyonlari tek catida.",
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const STATS: Stat[] = [
  { label: "Restoran", value: 500, suffix: "+" },
  { label: "Sube", value: 2000, suffix: "+" },
  { label: "Gunluk Siparis", value: 10000, suffix: "+" },
  { label: "Uptime", value: 99.9, suffix: "%" },
];

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: "Layers",
    title: "Tek Platform, Tam Kontrol",
    description:
      "POS, mutfak ekrani, kurye takibi, stok yonetimi ve muhasebe — hepsi birbiriyle entegre, tek ekosistemde.",
  },
  {
    icon: "Zap",
    title: "Anlik Senkronizasyon",
    description:
      "Siparis geldiginde kasa, mutfak ve kurye ayni anda bilgilendirilir. Gercek zamanli Firebase altyapisi ile sifir gecikme.",
  },
  {
    icon: "BarChart3",
    title: "Akilli Raporlama",
    description:
      "Gunluk, haftalik, aylik satis analizleri. Urun bazli karlilik, sube karsilastirmalari ve trend grafikleri.",
  },
  {
    icon: "Globe",
    title: "Platform Entegrasyonlari",
    description:
      "YemekSepeti, Getir Yemek, Trendyol Go ve Fuudy siparisleri otomatik olarak POS ekranina duser.",
  },
  {
    icon: "Shield",
    title: "Kurumsal Guvenlik",
    description:
      "Rol bazli erisim kontrolu, KVKK uyumu, sifreli veri iletimi ve otomatik yedekleme ile verileriniz guvenli.",
  },
  {
    icon: "Scaling",
    title: "Sinirsiz Olceklenme",
    description:
      "1 subeden 2000+ subeye. Altyapimiz buyumenize ayak uyduracak sekilde tasarlandi. Ekstra maliyet yok.",
  },
];

// ─── Integrations ────────────────────────────────────────────────────────────

export interface Integration {
  id: string;
  name: string;
  logo: string;
  color: string;
  description: string;
}

export const INTEGRATIONS: Integration[] = [
  {
    id: "yemeksepeti",
    name: "YemekSepeti",
    logo: "/integrations/yemeksepeti.svg",
    color: "#FA0050",
    description:
      "Turkiye'nin en buyuk yemek siparis platformu ile tam entegrasyon.",
  },
  {
    id: "getir-yemek",
    name: "Getir Yemek",
    logo: "/integrations/getir.svg",
    color: "#5D3EBC",
    description: "Getir Yemek siparisleriniz aninda POS ekranina yansir.",
  },
  {
    id: "trendyol-go",
    name: "Trendyol Go",
    logo: "/integrations/trendyol.svg",
    color: "#F27A1A",
    description: "Trendyol Go entegrasyonu ile siparis kaybinizi sifira indirin.",
  },
  {
    id: "fuudy",
    name: "Fuudy",
    logo: "/integrations/fuudy.svg",
    color: "#FF6B35",
    description: "Fuudy siparislerini otomatik olarak alin ve yonetin.",
  },
];

// ─── Product Details (per-product page data) ────────────────────────────────

export interface ProductDetail {
  id: string;
  name: string;
  tagline: string;
  heroDescription: string;
  platform: string;
  icon: string;
  color: string;
  mockupType: "desktop" | "phone" | "browser";
  features: { icon: string; title: string; description: string }[];
  highlights: string[];
}

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  pos: {
    id: "pos",
    name: "YemiGO POS",
    tagline: "Restoraninizin dijital beyni.",
    heroDescription:
      "Masadan paket servise, kasadan mutfaga — tum siparis akisini tek ekrandan yonetin. YemekSepeti, GetirYemek ve TrendyolGo siparisleri otomatik olarak ekraniniza duser.",
    platform: "Windows",
    icon: "Monitor",
    color: "#7C3AED",
    mockupType: "desktop",
    features: [
      {
        icon: "ShoppingCart",
        title: "Siparis Yonetimi",
        description:
          "Masa, paket, gel-al ve platform siparisleri tek ekranda.",
      },
      {
        icon: "Grid3x3",
        title: "Masa Duzeni",
        description:
          "Gorsel masa plani ile salon operasyonunu kolayca yonetin.",
      },
      {
        icon: "CreditCard",
        title: "Kasa Islemleri",
        description:
          "Nakit, kredi karti, yemek karti ve coklu odeme yontemleri.",
      },
      {
        icon: "Printer",
        title: "Termal Yazici",
        description:
          "Adisyon, mutfak fisi ve fatura yazdirma. ESC/POS uyumlu.",
      },
      {
        icon: "Layers",
        title: "Platform Entegrasyonu",
        description:
          "YemekSepeti, GetirYemek, TrendyolGo siparisleri aninda duser.",
      },
      {
        icon: "BarChart3",
        title: "Gunluk Rapor",
        description: "Kasa kapanisi, satis ozeti ve Z raporu tek tikla.",
      },
    ],
    highlights: [
      "Offline calisma destegi",
      "Coklu yazici destegi",
      "Rol bazli erisim",
      "Otomatik guncelleme",
    ],
  },
  manager: {
    id: "manager",
    name: "YemiGO Manager",
    tagline: "Isletmeniz cebinizde.",
    heroDescription:
      "Nerede olursaniz olun, restoraninizin nabzini tutun. Anlik satis verileri, kurye konumlari ve siparis bildirimleri avucunuzun icinde.",
    platform: "iOS / Android",
    icon: "Smartphone",
    color: "#A855F7",
    mockupType: "phone",
    features: [
      {
        icon: "BarChart3",
        title: "Canli Dashboard",
        description:
          "Gunluk ciro, siparis sayisi ve ortalama tutar anlik olarak.",
      },
      {
        icon: "MapPin",
        title: "Kurye Takibi",
        description:
          "Harita uzerinde tum kuryelerin canli konumunu izleyin.",
      },
      {
        icon: "Bell",
        title: "Anlik Bildirimler",
        description:
          "Yeni siparis, iptal ve onemli olaylarda push bildirim.",
      },
      {
        icon: "Users",
        title: "Personel Yonetimi",
        description:
          "Calisan rolleri, vardiya planlama ve performans takibi.",
      },
      {
        icon: "Building2",
        title: "Coklu Sube",
        description:
          "Tum subelerinizi tek uygulamadan karsilastirin ve yonetin.",
      },
      {
        icon: "FileText",
        title: "Detayli Raporlar",
        description:
          "Urun bazli satis, kategori analizi ve trend grafikleri.",
      },
    ],
    highlights: [
      "Native iOS ve Android",
      "Face ID / parmak izi giris",
      "Offline rapor goruntuleme",
      "Widget destegi",
    ],
  },
  express: {
    id: "express",
    name: "YemiGO Express",
    tagline: "Teslimat surecinin tam kontrolu.",
    heroDescription:
      "Kurye atama, rota planlama ve canli konum takibi. Teslimat surelerinizi kisaltin, musteri memnuniyetini artirin.",
    platform: "iOS / Android",
    icon: "Truck",
    color: "#C084FC",
    mockupType: "phone",
    features: [
      {
        icon: "MapPin",
        title: "Canli Konum",
        description:
          "GPS tabanli gercek zamanli kurye takibi harita uzerinde.",
      },
      {
        icon: "Route",
        title: "Rota Optimizasyonu",
        description:
          "En kisa ve en hizli teslimat rotasini otomatik hesaplama.",
      },
      {
        icon: "Clock",
        title: "Siparis Kabul",
        description:
          "Yeni siparisleri aninda gorme, kabul etme ve teslim sureci baslat.",
      },
      {
        icon: "Wallet",
        title: "Kazanc Takibi",
        description:
          "Gunluk, haftalik ve aylik kazanc raporlari ve prim hesaplama.",
      },
      {
        icon: "Star",
        title: "Performans Skoru",
        description:
          "Teslimat suresi, musteri puani ve tamamlama orani metrikleri.",
      },
      {
        icon: "Bell",
        title: "Push Bildirim",
        description:
          "Yeni siparis geldiginde aninda sesli ve gorsel bildirim.",
      },
    ],
    highlights: [
      "Pil dostu GPS takibi",
      "Tek tikla navigasyon",
      "Offline siparis goruntuleme",
      "Kurye chat",
    ],
  },
  panel: {
    id: "panel",
    name: "YemiGO Panel",
    tagline: "Veriye dayali kararlar alin.",
    heroDescription:
      "Detayli raporlar, menu yonetimi, QR menu, stok takibi ve coklu sube kontrolu. Tarayicinizdan isletmenizin tum verilerine erisin.",
    platform: "Web",
    icon: "LayoutDashboard",
    color: "#9333EA",
    mockupType: "browser",
    features: [
      {
        icon: "BarChart3",
        title: "Gelismis Raporlama",
        description:
          "Satis, urun, kategori, saat dilimi ve sube bazli detayli analizler.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Menu Yonetimi",
        description:
          "Urun, kategori, fiyat ve gorsel duzenlemeleri web uzerinden yapin.",
      },
      {
        icon: "QrCode",
        title: "QR Menu",
        description:
          "Dijital menu olusturun, QR kodlari yazdirin, masadan siparis alin.",
      },
      {
        icon: "Package",
        title: "Stok Takibi",
        description:
          "Hammadde, recete ve stok hareketlerini yonetin. Kritik stok uyarisi.",
      },
      {
        icon: "Users",
        title: "Kullanici Yetkileri",
        description:
          "Sahip, yonetici ve personel rolleri ile erisim kontrolu.",
      },
      {
        icon: "Building2",
        title: "Sube Yonetimi",
        description:
          "Birden fazla subeyi karsilastirin, merkezi yapilandirma yapin.",
      },
    ],
    highlights: [
      "Her cihazdan erisim",
      "Gercek zamanli veri",
      "Excel/CSV export",
      "Ozel tarih araligi",
    ],
  },
  "online-siparis": {
    id: "online-siparis",
    name: "Online Siparis",
    tagline: "Kendi dijital siparis kanaliniz.",
    heroDescription:
      "Kendi markanizla online siparis sitesi ve QR masadan siparis sistemi. Komisyonsuz, dogrudan musteri iliskisi.",
    platform: "Web",
    icon: "ShoppingBag",
    color: "#A855F7",
    mockupType: "browser",
    features: [
      {
        icon: "Globe",
        title: "Paket Servis Sitesi",
        description:
          "paket.yemigo.com uzerinden kendi markanizla online siparis alin.",
      },
      {
        icon: "QrCode",
        title: "QR Masadan Siparis",
        description:
          "menu.yemigo.com ile misafirler telefondan siparis versin.",
      },
      {
        icon: "ShoppingCart",
        title: "Sepet Yonetimi",
        description: "Urun secimi, porsiyon, ekstra malzeme ve not ekleme.",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp Entegrasyonu",
        description:
          "Siparis onaylari ve takip bilgileri WhatsApp uzerinden.",
      },
      {
        icon: "Palette",
        title: "Marka Ozellestirme",
        description:
          "Logo, renk ve menu duzeni ile kendi markanizi yansitin.",
      },
      {
        icon: "TrendingUp",
        title: "Siparis Analizi",
        description:
          "En cok satan urunler, siparis saatleri ve musteri davranislari.",
      },
    ],
    highlights: [
      "Sifir komisyon",
      "Aninda POS'a dusme",
      "Mobil uyumlu",
      "SEO dostu",
    ],
  },
};

// ─── Pricing Plans ───────────────────────────────────────────────────────────

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  cta: string;
}

export const PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Baslangic",
    description: "Tek subeli kucuk isletmeler icin ideal baslangic paketi.",
    price: 999,
    period: "ay",
    features: [
      "1 Sube",
      "YemiGO POS",
      "Temel raporlama",
      "Online siparis sitesi",
      "E-posta destek",
    ],
    highlighted: false,
    cta: "Ucretsiz Deneyin",
  },
  {
    id: "professional",
    name: "Profesyonel",
    description: "Buyuyen isletmeler icin tum ozellikler.",
    price: 1999,
    period: "ay",
    features: [
      "5 Subeye kadar",
      "Tum YemiGO urunleri",
      "Platform entegrasyonlari",
      "Gelismis raporlama",
      "Kurye yonetimi",
      "Oncelikli destek",
    ],
    highlighted: true,
    badge: "En Populer",
    cta: "Hemen Baslayin",
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    description: "Sinirsiz sube ve ozel cozumler.",
    price: 0,
    period: "ay",
    features: [
      "Sinirsiz sube",
      "Tum Profesyonel ozellikleri",
      "Ozel entegrasyonlar",
      "Dedicated hesap yoneticisi",
      "SLA garantisi",
      "7/24 telefon destek",
      "Yerinde egitim",
    ],
    highlighted: false,
    cta: "Bize Ulasin",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ahmet Yilmaz",
    role: "Isletme Sahibi",
    company: "Lezzet Duragi",
    quote:
      "YemiGO ile 3 subemizi tek ekrandan yonetiyoruz. Platform siparisleri aninda dususyor, hicbir siparis kacirmiyoruz.",
    avatar: "/testimonials/avatar-1.jpg",
  },
  {
    id: "2",
    name: "Elif Demir",
    role: "Operasyon Muduru",
    company: "Pizza Express",
    quote:
      "Kurye takip sistemi sayesinde teslimat surelerimiz %30 kisaldi. Musterilerimiz cok memnun.",
    avatar: "/testimonials/avatar-2.jpg",
  },
  {
    id: "3",
    name: "Mehmet Kaya",
    role: "Genel Mudur",
    company: "Burger House",
    quote:
      "20 subemizin tum verilerini anlik olarak gorebiliyoruz. Raporlama ozellikleri muhtesem.",
    avatar: "/testimonials/avatar-3.jpg",
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { href: "/urunler", label: "Urunler" },
  { href: "/fiyatlandirma", label: "Fiyatlandirma" },
  { href: "/hakkimizda", label: "Hakkimizda" },
  { href: "/iletisim", label: "Iletisim" },
];
