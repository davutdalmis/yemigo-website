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
    tagline: "Merkezi sipariş yönetimi",
    platform: "Windows · iPad (masa siparişi)",
    icon: "Monitor",
    color: "#7C3AED",
    description:
      "Kasadan mutfağa, masadan paket servise — tüm sipariş akışını tek ekrandan yönetin. Platform entegrasyonları ve stok takibi dahil. Garsonlar masa siparişini iPad'deki garson terminaliyle alır.",
  },
  {
    id: "manager",
    name: "YemiGO Manager",
    tagline: "Mobil yönetim paneli",
    platform: "iOS / Android",
    icon: "Smartphone",
    color: "#A855F7",
    description:
      "İşletmenizi cebinizden yönetin. Anlık satış raporları, sipariş bildirimleri, kurye takibi ve şube karşılaştırmaları her yerde elinizin altında.",
  },
  {
    id: "express",
    name: "YemiGO Express",
    tagline: "Kurye takip uygulaması",
    platform: "iOS / Android",
    icon: "Truck",
    color: "#C084FC",
    description:
      "Kurye atama, tek tıkla yol tarifi ve canlı konum takibi. Teslimat sürecini baştan sona kendiniz yönetin.",
  },
  {
    id: "panel",
    name: "YemiGO Panel",
    tagline: "Web yönetim paneli",
    platform: "Web",
    icon: "LayoutDashboard",
    color: "#9333EA",
    description:
      "Detaylı raporlar, menü yönetimi, kullanıcı yetkileri ve çoklu şube kontrolü. Tarayıcınızdan işletmenizin tüm verilerine erişim.",
  },
  {
    id: "online-siparis",
    name: "Online Sipariş",
    tagline: "Dijital sipariş kanalları",
    platform: "Web",
    icon: "ShoppingBag",
    color: "#A855F7",
    description:
      "Kendi markanızla online sipariş sistemi. QR menüden masadan sipariş, paket servis sitesi ve platform entegrasyonları tek çatıda.",
  },
];

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: string;
  title: string;
  description: string;
  /** Kısa kategori etiketi (mobil dönüşümlü satırlar için). */
  kicker?: string;
  /** Görsel panelde gösterilen somut yetenek rozetleri. */
  points?: string[];
  /** Vurgu rengi (mobil). */
  accent?: "indigo" | "orange";
}

export const FEATURES: Feature[] = [
  {
    icon: "Factory",
    kicker: "Üretim → Şube",
    title: "Satış noktası değil, tüm zincir",
    description:
      "Reçeteden otomatik stok düşümü, merkez mutfak üretimi ve şubeye sevkiyat — hepsi aynı platformda. Çoğu POS satışta durur; YemiGO üretimden masaya tüm halkayı yönetir.",
    points: ["Reçete → stok", "Mal kabul", "Sevkiyat terminali"],
    accent: "indigo",
  },
  {
    icon: "MonitorSmartphone",
    kicker: "Platformlar",
    title: "Tüm platformlar, tek ekran, tek gün sonu",
    description:
      "YemekSepeti, Uber Eats ve Migros Yemek siparişleri otomatik POS'a düşer. Tüm kanalların cirosu tek gün sonu raporunda birleşir.",
    points: ["YemekSepeti", "Uber Eats", "Migros Yemek"],
    accent: "orange",
  },
  {
    icon: "Bike",
    kicker: "Teslimat",
    title: "Kendi kuryeniz, kendi terminaliniz",
    description:
      "Native kurye uygulamasıyla canlı konum ve tek tıkla yol tarifi; QR ile eşlenen sevkiyat terminaliyle merkezden şubeye zimmet ve teslim. Teslimatı siz yönetin, platforma bağımlı kalmayın.",
    points: ["Canlı konum", "Sevkiyat terminali", "Zimmet / teslim"],
    accent: "indigo",
  },
  {
    icon: "BadgePercent",
    kicker: "Kendi Kanalınız",
    title: "Komisyonsuz kendi sipariş kanalınız",
    description:
      "Markanızla QR menü ve online sipariş sitesi. Müşteriler siparişi siteden ya da WhatsApp'tan verir, sipariş doğrudan POS'a düşer — platform komisyonu yok.",
    points: ["QR menü", "Online sipariş", "WhatsApp ile sipariş"],
    accent: "orange",
  },
  {
    icon: "RefreshCw",
    kicker: "Altyapı",
    title: "Gerçek zamanlı, çok cihazlı, offline-dayanıklı",
    description:
      "Firebase ile masa, ödeme ve sipariş her cihazda anında senkron. Çok terminalli ödeme kilidi aynı masanın iki kasadan kapatılmasını önler; internet kesilse de ana kasada satış sürer, kayıtlar bağlantı gelince eşitlenir.",
    points: ["Anlık senkron", "Ödeme kilidi", "Offline kuyruk"],
    accent: "indigo",
  },
  {
    icon: "ShieldCheck",
    kicker: "Güvenlik",
    title: "Gelir bütünlüğü ve kurumsal güvenlik",
    description:
      "Parçalı ödeme kayması ve çift tahsilat koruması, imzalı (ED25519) otomatik güncelleme, rol bazlı erişim ve günlük yedekleme — cironuz ve verileriniz güvende.",
    points: ["Çift tahsilat koruması", "İmzalı güncelleme", "Rol bazlı erişim"],
    accent: "orange",
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
    logo: "/integrations/yemeksepeti-wordmark.svg",
    color: "#FA0050",
    description:
      "Türkiye'nin en büyük yemek sipariş platformu ile tam entegrasyon.",
  },
  {
    id: "uber-eats",
    name: "Uber Eats",
    logo: "/integrations/uber-eats.svg",
    color: "#06C167",
    description: "Uber Eats siparişleriniz anında POS ekranınıza düşer.",
  },
  {
    id: "migros-yemek",
    name: "Migros Yemek",
    logo: "/integrations/migros-yemek-wordmark.svg",
    color: "#FA8200",
    description: "Migros Yemek siparişleriniz tek ekranda toplanır.",
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
    tagline: "Restoranınızın dijital beyni.",
    heroDescription:
      "Masadan paket servise, kasadan mutfağa — tüm sipariş akışını tek ekrandan yönetin. YemekSepeti, Uber Eats ve Migros Yemek siparişleri otomatik olarak ekranınıza düşer.",
    platform: "Windows · iPad (masa siparişi)",
    icon: "Monitor",
    color: "#7C3AED",
    mockupType: "desktop",
    features: [
      {
        icon: "ShoppingCart",
        title: "Sipariş Yönetimi",
        description:
          "Masa, paket, gel-al ve platform siparişleri tek ekranda.",
      },
      {
        icon: "Grid3x3",
        title: "Masa Düzeni",
        description:
          "Görsel masa planı ile salon operasyonunu kolayca yönetin.",
      },
      {
        icon: "CreditCard",
        title: "Kasa İşlemleri",
        description:
          "Nakit, kredi kartı, yemek kartı ve çoklu ödeme yöntemleri.",
      },
      {
        icon: "Printer",
        title: "Termal Yazıcı",
        description:
          "Adisyon, mutfak, bar ve paket fişi yazdırma. ESC/POS uyumlu.",
      },
      {
        icon: "Layers",
        title: "Platform Entegrasyonu",
        description:
          "YemekSepeti, Uber Eats ve Migros Yemek siparişleri anında düşer.",
      },
      {
        icon: "BarChart3",
        title: "Günlük Rapor",
        description: "Kasa sayımı, gün sonu raporu ve satış özeti.",
      },
      {
        icon: "Tablet",
        title: "iPad Garson Terminali",
        description:
          "Garsonlar masa siparişini iPad'den alır, sipariş anında kasaya ve mutfağa düşer. Ödeme kasada alınır.",
      },
    ],
    highlights: [
      "Offline çalışma desteği",
      "Çoklu yazıcı desteği",
      "Rol bazlı erişim",
      "Otomatik güncelleme",
    ],
  },
  manager: {
    id: "manager",
    name: "YemiGO Manager",
    tagline: "İşletmeniz cebinizde.",
    heroDescription:
      "Nerede olursanız olun, restoranınızın nabzını tutun. Anlık satış verileri, kurye konumları ve sipariş bildirimleri avucunuzun içinde.",
    platform: "iOS / Android",
    icon: "Smartphone",
    color: "#A855F7",
    mockupType: "phone",
    features: [
      {
        icon: "BarChart3",
        title: "Canlı Dashboard",
        description:
          "Günlük ciro, sipariş sayısı ve ortalama tutar anlık olarak.",
      },
      {
        icon: "MapPin",
        title: "Kurye Takibi",
        description:
          "Şubenizin kuryelerini harita üzerinde canlı izleyin.",
      },
      {
        icon: "Bell",
        title: "Anlık Bildirimler",
        description:
          "Yeni sipariş, iptal ve önemli olaylarda push bildirim.",
      },
      {
        icon: "Users",
        title: "Personel Yönetimi",
        description:
          "Çalışanlarınızı ve rollerini tek listede görün.",
      },
      {
        icon: "Building2",
        title: "Çoklu Şube",
        description:
          "Tüm şubelerinizin günlük cirosunu tek uygulamada görün.",
      },
      {
        icon: "FileText",
        title: "Detaylı Raporlar",
        description:
          "Ürün bazlı satış ve trend grafikleri.",
      },
    ],
    highlights: [
      "Native iOS ve Android",
      "Telefon + SMS kodu ile giriş",
      "Platformları uzaktan aç / kapat",
      "PDF ciro raporu",
    ],
  },
  express: {
    id: "express",
    name: "YemiGO Express",
    tagline: "Teslimat sürecinin tam kontrolü.",
    heroDescription:
      "Kurye atama, yol tarifi ve canlı konum takibi. Teslimat sürecini baştan sona kendiniz yönetin.",
    platform: "iOS / Android",
    icon: "Truck",
    color: "#C084FC",
    mockupType: "phone",
    features: [
      {
        icon: "MapPin",
        title: "Canlı Konum",
        description:
          "GPS tabanlı gerçek zamanlı kurye takibi harita üzerinde.",
      },
      {
        icon: "Route",
        title: "Tek Tıkla Yol Tarifi",
        description:
          "Teslimat adresine Google veya Apple Haritalar ile anında yol tarifi.",
      },
      {
        icon: "Clock",
        title: "Sipariş Takibi",
        description:
          "Atanan siparişleri anında görün; teslim aldım / teslim ettim ile süreci yönetin.",
      },
      {
        icon: "Wallet",
        title: "Teslimat Özeti",
        description:
          "Günlük ve haftalık teslimat sayısı ve tutarları.",
      },
      {
        icon: "Star",
        title: "Bağlantı Kopsa da Çalışır",
        description:
          "Bağlantı koptuğunda siparişler görünür kalır, durum güncellemeleri bağlantı gelince gönderilir.",
      },
      {
        icon: "Bell",
        title: "Push Bildirim",
        description:
          "Yeni sipariş atandığında anında sesli ve görsel bildirim.",
      },
    ],
    highlights: [
      "Pil dostu GPS takibi",
      "Tek tıkla navigasyon",
      "Offline sipariş görüntüleme",
      "SMS kodu ile hızlı giriş",
    ],
  },
  panel: {
    id: "panel",
    name: "YemiGO Panel",
    tagline: "Veriye dayalı kararlar alın.",
    heroDescription:
      "Detaylı raporlar, menü yönetimi, QR menü, stok takibi ve çoklu şube kontrolü. Tarayıcınızdan işletmenizin tüm verilerine erişin.",
    platform: "Web",
    icon: "LayoutDashboard",
    color: "#9333EA",
    mockupType: "browser",
    features: [
      {
        icon: "BarChart3",
        title: "Gelişmiş Raporlama",
        description:
          "Satış, ürün, kategori, saat dilimi ve şube bazlı detaylı analizler.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Menü Yönetimi",
        description:
          "Ürün, kategori ve fiyat düzenlemelerini web üzerinden yapın.",
      },
      {
        icon: "QrCode",
        title: "QR Menü",
        description:
          "QR menünüzü düzenleyin, masa QR kodlarını indirip yazdırın, masadan sipariş alın.",
      },
      {
        icon: "Package",
        title: "Stok Takibi",
        description:
          "Hammadde, reçete ve stok hareketlerini yönetin. Kritik stokları ekranda görün.",
      },
      {
        icon: "Users",
        title: "Kullanıcı Yetkileri",
        description:
          "Sahip, yönetici ve personel rolleri ile erişim kontrolü.",
      },
      {
        icon: "Building2",
        title: "Şube Yönetimi",
        description:
          "Birden fazla şubeyi karşılaştırın, merkezi yapılandırma yapın.",
      },
    ],
    highlights: [
      "Her cihazdan erişim",
      "Gerçek zamanlı veri",
      "Excel dışa aktarma",
      "Özel tarih aralığı",
    ],
  },
  "online-siparis": {
    id: "online-siparis",
    name: "Online Sipariş",
    tagline: "Kendi dijital sipariş kanalınız.",
    heroDescription:
      "Kendi markanızla online sipariş sitesi ve QR masadan sipariş sistemi. Komisyonsuz, doğrudan müşteri ilişkisi.",
    platform: "Web",
    icon: "ShoppingBag",
    color: "#A855F7",
    mockupType: "browser",
    features: [
      {
        icon: "Globe",
        title: "Paket Servis Sitesi",
        description:
          "paket.yemigo.com üzerinden kendi markanızla online sipariş alın.",
      },
      {
        icon: "QrCode",
        title: "QR Masadan Sipariş",
        description:
          "menu.yemigo.com ile misafirler telefondan sipariş versin.",
      },
      {
        icon: "ShoppingCart",
        title: "Sepet Yönetimi",
        description: "Ürün seçimi, porsiyon, ekstra malzeme ve not ekleme.",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp ile Sipariş",
        description:
          "Müşteriler sepetini tek tıkla WhatsApp'tan gönderir, sipariş aynı anda sisteme kaydolur.",
      },
      {
        icon: "Palette",
        title: "Marka Özelleştirme",
        description:
          "Logo, ürün görselleri ve kategori sırası ile kendi markanızı yansıtın.",
      },
      {
        icon: "TrendingUp",
        title: "İndirim ve Kampanya",
        description:
          "Ürüne veya kategoriye yüzde ya da tutar indirimi, karşılama duyurusu.",
      },
    ],
    highlights: [
      "Sıfır komisyon",
      "Anında POS'a düşme",
      "Mobil uyumlu",
      "Üyeliksiz sipariş",
    ],
  },
};

// ─── Pricing Plans ───────────────────────────────────────────────────────────

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  priceYearly: number;
  period: string;
  /** Özellik listesinin üstünde gösterilen "üst paketin her şeyi +" notu. */
  featuresLead?: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  cta: string;
}

export const PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Başlangıç",
    description: "Tek şubeli küçük işletmeler için ideal başlangıç paketi.",
    price: 1490,
    priceYearly: 14900,
    period: "ay",
    features: [
      "1 şube · 1–3 kullanıcı",
      "YemiGO POS (masa, paket, gel-al)",
      "Masa & salon planı",
      "Çoklu ödeme yöntemleri",
      "Termal yazıcı & mutfak fişi",
      "Sınırsız yazıcı bağlantısı",
      "Offline çalışma",
      "Online sipariş sitesi",
      "QR menü (masadan sipariş)",
      "WhatsApp ile sipariş",
      "Temel raporlama",
      "E-posta destek",
    ],
    highlighted: false,
    cta: "Ücretsiz Demo",
  },
  {
    id: "professional",
    name: "Profesyonel",
    description: "Büyüyen işletmeler için tüm özellikler.",
    price: 2490,
    priceYearly: 24900,
    period: "ay",
    featuresLead: "Başlangıç'taki her şey, artı:",
    features: [
      "5 şubeye kadar · sınırsız kullanıcı",
      "Tüm YemiGO ürünleri (Manager, Express, Panel)",
      "Mutfak ekranı (KDS)",
      "Stok & reçete yönetimi",
      "Platform entegrasyonları (YemekSepeti, Uber Eats, Migros Yemek)",
      "Kurye yönetimi & canlı takip",
      "Çoklu şube karşılaştırma",
      "Gelişmiş raporlama & analiz",
      "Excel dışa aktarma",
      "Öncelikli destek",
    ],
    highlighted: true,
    badge: "En Popüler",
    cta: "Hemen Başlayın",
  },
  {
    id: "enterprise",
    name: "Kurumsal",
    description: "Sınırsız şube ve özel çözümler.",
    price: 0,
    priceYearly: 0,
    period: "ay",
    featuresLead: "Profesyonel'deki her şey, artı:",
    features: [
      "Sınırsız şube",
      "Üretim / imalat merkezi",
      "Özel entegrasyon projeleri",
      "Dedicated hesap yöneticisi",
      "Sözleşmeli hizmet seviyesi (SLA)",
      "Öncelikli telefon desteği",
      "Yerinde eğitim",
    ],
    highlighted: false,
    cta: "Bize Ulaşın",
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { href: "/urunler", label: "Ürünler" },
  { href: "/fiyatlandirma", label: "Fiyatlandırma" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];
