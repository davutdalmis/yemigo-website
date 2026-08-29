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
    platform: "Windows",
    icon: "Monitor",
    color: "#7C3AED",
    description:
      "Kasadan mutfağa, masadan paket servise — tüm sipariş akışını tek ekrandan yönetin. Platform entegrasyonları, stok takibi ve muhasebe dahil.",
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
      "Akıllı kurye atama, rota optimizasyonu ve canlı konum takibi. Teslimat sürelerinizi kısaltın, müşteri memnuniyetini artırın.",
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
      "Reçeteden otomatik stok düşümü, merkez mutfak üretimi ve şubeye sevkiyat — hepsi POS'a gömülü. Çoğu POS satışta durur; YemiGO üretimden masaya tüm halkayı yönetir.",
    points: ["Reçete → stok", "Mal kabul", "Sevkiyat terminali"],
    accent: "indigo",
  },
  {
    icon: "MonitorSmartphone",
    kicker: "Platformlar",
    title: "Beş platform, tek ekran, tek mutabakat",
    description:
      "YemekSepeti, Getir, Trendyol Go, Migros ve Fuudy siparişleri otomatik POS'a düşer. Her platform için günlük ciro mutabakatı çalışır — tek kuruş kaçmaz.",
    points: ["YemekSepeti", "Getir", "Trendyol Go", "Migros", "Fuudy"],
    accent: "orange",
  },
  {
    icon: "Bike",
    kicker: "Teslimat",
    title: "Kendi kuryeniz, kendi terminaliniz",
    description:
      "Native kurye uygulaması ve QR ile eşlenen el terminali. Zimmet, teslim, canlı konum ve rota — teslimat sürecini uçtan uca siz yönetin, platforma bağımlı kalmayın.",
    points: ["Canlı konum", "QR cihaz eşleme", "Zimmet / teslim"],
    accent: "indigo",
  },
  {
    icon: "BadgePercent",
    kicker: "Kendi Kanalınız",
    title: "Komisyonsuz kendi sipariş kanalınız",
    description:
      "Markanızla QR menü ve online sipariş sitesi. Mahalle bazlı teslimat bölgeleri ve WhatsApp bildirimi ile siparişler doğrudan POS'a düşer — platform komisyonu yok.",
    points: ["QR menü", "Mahalle bölgeleri", "WhatsApp"],
    accent: "orange",
  },
  {
    icon: "RefreshCw",
    kicker: "Altyapı",
    title: "Gerçek zamanlı, çok cihazlı, offline-dayanıklı",
    description:
      "Firebase ile masa, ödeme ve sipariş her cihazda anında senkron. Çok terminalli ödeme kilidi çift kapanışı önler; internet kesilse de yerel kuyruk sayesinde satış durmaz.",
    points: ["Anlık senkron", "Ödeme kilidi", "Offline kuyruk"],
    accent: "indigo",
  },
  {
    icon: "ShieldCheck",
    kicker: "Güvenlik",
    title: "Gelir bütünlüğü ve kurumsal güvenlik",
    description:
      "Parçalı ödeme kayması ve çift tahsilat koruması, imzalı (ED25519) otomatik güncelleme, rol bazlı erişim ve KVKK uyumu — cironuz ve verileriniz güvende.",
    points: ["Mutabakat ağı", "İmzalı güncelleme", "KVKK / RBAC"],
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
    logo: "/integrations/yemeksepeti.svg",
    color: "#FA0050",
    description:
      "Türkiye'nin en büyük yemek sipariş platformu ile tam entegrasyon.",
  },
  {
    id: "getir-yemek",
    name: "Getir Yemek",
    logo: "/integrations/getir-yemek.svg",
    color: "#5D3EBC",
    description: "Getir Yemek siparişleriniz anında POS ekranına yansır.",
  },
  {
    id: "trendyol-go",
    name: "Trendyol Go",
    logo: "/integrations/trendyol-go.svg",
    color: "#F27A1A",
    description: "Trendyol Go siparişleriniz anında POS ekranınıza düşer.",
  },
  {
    id: "migros-yemek",
    name: "Migros Yemek",
    logo: "/integrations/migros-yemek.svg",
    color: "#FA8200",
    description: "Migros Yemek siparişleriniz tek ekranda toplanır.",
  },
  {
    id: "fuudy",
    name: "Fuudy",
    logo: "/integrations/fuudy.svg",
    color: "#FF6B35",
    description: "Fuudy siparişlerini otomatik olarak alın ve yönetin.",
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
      "Masadan paket servise, kasadan mutfağa — tüm sipariş akışını tek ekrandan yönetin. YemekSepeti, GetirYemek ve TrendyolGo siparişleri otomatik olarak ekranınıza düşer.",
    platform: "Windows",
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
          "Adisyon, mutfak fişi ve fatura yazdırma. ESC/POS uyumlu.",
      },
      {
        icon: "Layers",
        title: "Platform Entegrasyonu",
        description:
          "YemekSepeti, GetirYemek, TrendyolGo siparişleri anında düşer.",
      },
      {
        icon: "BarChart3",
        title: "Günlük Rapor",
        description: "Kasa kapanışı, satış özeti ve Z raporu tek tıkla.",
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
          "Harita üzerinde tüm kuryelerin canlı konumunu izleyin.",
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
          "Çalışan rolleri, vardiya planlama ve performans takibi.",
      },
      {
        icon: "Building2",
        title: "Çoklu Şube",
        description:
          "Tüm şubelerinizi tek uygulamadan karşılaştırın ve yönetin.",
      },
      {
        icon: "FileText",
        title: "Detaylı Raporlar",
        description:
          "Ürün bazlı satış, kategori analizi ve trend grafikleri.",
      },
    ],
    highlights: [
      "Native iOS ve Android",
      "Face ID / parmak izi giriş",
      "Offline rapor görüntüleme",
      "Widget desteği",
    ],
  },
  express: {
    id: "express",
    name: "YemiGO Express",
    tagline: "Teslimat sürecinin tam kontrolü.",
    heroDescription:
      "Kurye atama, rota planlama ve canlı konum takibi. Teslimat sürelerinizi kısaltın, müşteri memnuniyetini artırın.",
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
        title: "Rota Optimizasyonu",
        description:
          "En kısa ve en hızlı teslimat rotasını otomatik hesaplama.",
      },
      {
        icon: "Clock",
        title: "Sipariş Kabul",
        description:
          "Yeni siparişleri anında görme, kabul etme ve teslim sürecini başlat.",
      },
      {
        icon: "Wallet",
        title: "Kazanç Takibi",
        description:
          "Günlük, haftalık ve aylık kazanç raporları ve prim hesaplama.",
      },
      {
        icon: "Star",
        title: "Performans Skoru",
        description:
          "Teslimat süresi, müşteri puanı ve tamamlama oranı metrikleri.",
      },
      {
        icon: "Bell",
        title: "Push Bildirim",
        description:
          "Yeni sipariş geldiğinde anında sesli ve görsel bildirim.",
      },
    ],
    highlights: [
      "Pil dostu GPS takibi",
      "Tek tıkla navigasyon",
      "Offline sipariş görüntüleme",
      "Kurye chat",
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
          "Ürün, kategori, fiyat ve görsel düzenlemeleri web üzerinden yapın.",
      },
      {
        icon: "QrCode",
        title: "QR Menü",
        description:
          "Dijital menü oluşturun, QR kodları yazdırın, masadan sipariş alın.",
      },
      {
        icon: "Package",
        title: "Stok Takibi",
        description:
          "Hammadde, reçete ve stok hareketlerini yönetin. Kritik stok uyarısı.",
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
      "Excel/CSV export",
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
        title: "WhatsApp Entegrasyonu",
        description:
          "Sipariş onayları ve takip bilgileri WhatsApp üzerinden.",
      },
      {
        icon: "Palette",
        title: "Marka Özelleştirme",
        description:
          "Logo, renk ve menü düzeni ile kendi markanızı yansıtın.",
      },
      {
        icon: "TrendingUp",
        title: "Sipariş Analizi",
        description:
          "En çok satan ürünler, sipariş saatleri ve müşteri davranışları.",
      },
    ],
    highlights: [
      "Sıfır komisyon",
      "Anında POS'a düşme",
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
      "WhatsApp sipariş bildirimi",
      "Temel raporlama",
      "E-posta destek",
    ],
    highlighted: false,
    cta: "Ücretsiz Deneyin",
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
      "Platform entegrasyonları (YemekSepeti, Getir, Trendyol Go +2)",
      "Kurye yönetimi & canlı takip",
      "Çoklu şube karşılaştırma",
      "Gelişmiş raporlama & analiz",
      "Excel / CSV dışa aktarma",
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
      "Özel & B2B entegrasyonlar",
      "Dedicated hesap yöneticisi",
      "SLA garantisi",
      "7/24 telefon desteği",
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
