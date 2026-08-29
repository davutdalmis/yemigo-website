---
name: Modern Operasyonel Verimlilik
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd8e5'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#f0ecf9'
  surface-container-high: '#eae6f4'
  surface-container-highest: '#e4e1ee'
  on-surface: '#1b1b24'
  on-surface-variant: '#464555'
  inverse-surface: '#302f39'
  inverse-on-surface: '#f3effc'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#fcf8ff'
  on-background: '#1b1b24'
  surface-variant: '#e4e1ee'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  heading-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  container-max: 1440px
---

## Brand & Style

Bu tasarım sistemi, yoğun restoran ortamlarında ve dinamik kurye operasyonlarında odaklanmış bir çalışma alanı yaratmak için tasarlanmıştır. Marka kişiliği güven verici, teknolojik ve operasyonel olarak çeviktir.

Görsel dil, **Minimalizm** ve **Glassmorphism** akımlarının bir sentezidir. Geniş beyaz alanlar (whitespace), kullanıcının karar verme sürecindeki bilişsel yükünü azaltırken; cam efektli kart yapısı ve yumuşak geçişli gradyanlar, arayüze derinlik ve modern bir SaaS estetiği kazandırır. Hedef kitle olan restoran yöneticileri ve sevkiyat sorumluları için netlik, hız ve hata payını en aza indiren bir görsel hiyerarşi ön plandadır.

## Colors

Renk paleti, kurumsal ciddiyeti temsil eden derin indigo ile gıda sektörünün enerjisini yansıtan sıcak turuncu arasında bir denge kurar.

- **Ana Renk (Deep Indigo):** Otoriteyi ve teknolojik altyapıyı temsil eder. Birincil butonlarda ve navigasyon elemanlarında kullanılır.
- **Vurgu Rengi (Warm Orange):** "Yeni Sipariş" veya "Kurye Atama" gibi aksiyon gerektiren, dikkat çekmesi gereken dinamik alanlarda kullanılır.
- **Nötr Griler:** Tipografi ve yardımcı arayüz elemanları için hiyerarşik bir yapı sunar.
- **Gradyanlar:** Kart arka planlarında veya veri görselleştirmelerinde birincil renkten ikincil renge doğru giden `%10` opaklıkta çok hafif geçişler tercih edilmelidir.

## Typography

Tasarım sistemi, okunabilirliği en üst düzeye çıkarmak için **Inter** yazı tipini kullanır.

- **Display Başlıklar:** Büyük ve cesur (bold) kullanılarak sayfa hiyerarşisi net bir şekilde tanımlanır. "Günlük Özet" veya "Aktif Kuryeler" gibi ana başlıklar için idealdir.
- **Gövde Metni:** Satır aralıkları (line-height), uzun süreli ekran kullanımında göz yorgunluğunu önleyecek şekilde ferah tutulmuştur.
- **Etiketler:** Form alanları ve küçük bilgilendirmeler için orta ağırlıkta (Medium) ve hafif harf boşluklu (Letter Spacing) yapılar tercih edilir.

## Layout & Spacing

Bu tasarım sistemi **12 sütunlu akışkan (fluid) bir ızgara** sistemini benimser.

- **Izgara Yapısı:** Ana içerik alanı 24px gutter (oluk) genişliği ile ayrılır. Kenar boşlukları (margins) masaüstü ekranlarda 32px olarak sabitlenmiştir.
- **Ritim:** Tüm boşluk değerleri 4px ve katları (4, 8, 12, 16, 24, 32, 48, 64) olacak şekilde kurgulanmıştır.
- **Yerleşim:** Dashboard görünümlerinde kartlar yan yana dizilirken içerik yoğunluğuna göre 3, 4 veya 6 sütun genişliğinde bloklar kullanılır. POS ekranlarında ise dokunmatik kullanımı kolaylaştırmak için daha büyük dokunma alanları ve geniş padding değerleri uygulanır.

## Elevation & Depth

Derinlik algısı, fiziksel gölgelerden ziyade katmanlılık ve şeffaflık ile sağlanır.

- **Glassmorphism:** Kartlar, `#FFFFFF` renginde ancak `%70-80` opaklıkta, `20px` ila `40px` arasında değişen arka plan bulanıklığı (backdrop-blur) ile oluşturulur.
- **Yumuşak Gölgeler:** Kartların sınırlarını belirlemek için çok düşük opaklıklı (`%4`), geniş yayılımlı (blur radius) ve ana renk tonunda hafif renklendirilmiş gölgeler kullanılır.
- **Katmanlar:** Arka plan hafif gri (`#F9FAFB`) iken, üzerinde yükselen etkileşimli kartlar beyaz ve şeffaf dokulu olarak kurgulanmıştır. Bu, "yüzey üzerinde yüzen elemanlar" hissi verir.

## Shapes

Tasarım sisteminin form dili moderndir ve güven verir. Keskin köşelerden kaçınılmıştır.

- **Kartlar ve Konteynırlar:** 1rem (16px) köşe radüsü (rounded-lg) ile standartlaştırılmıştır.
- **Butonlar:** Tam yuvarlak (pill-shaped) veya 0.5rem (8px) radüslü yapılar yerine, modern bir duruş için 12px (0.75rem) radüs kullanılır.
- **Giriş Alanları:** Form elemanları, butonlarla tutarlı olacak şekilde orta düzeyde yumuşatılmış köşelere sahiptir.

## Components

Tüm bileşenler minimalist estetiği korurken yüksek işlevsellik sunar:

- **Butonlar:** Birincil butonlar (Primary) Indigo dolgu ve beyaz metin; ikincil butonlar (Secondary) turuncu çerçeve veya metin rengi ile ayrışır.
- **Cam Kartlar (Glass Cards):** Bilgi panelleri için kullanılır. İç padding değerleri standart 24px'dir.
- **Kurye Durum Çipleri (Status Chips):** "Yolda", "Teslim Edildi" veya "Beklemede" gibi durumlar için ilgili rengin (yeşil, turuncu, mavi) çok açık tonlu arka planı ve koyu tonlu metni ile tasarlanır.
- **Giriş Alanları (Inputs):** Odaklanıldığında (focus) indigo renginde ince bir dış çerçeve (ring) ve hafif bir parlama efekti gösterir.
- **Veri Listeleri:** POS sistemine uygun olarak, yüksekliği artırılmış satırlar (min-height: 64px) ve her satır arasında sadece ayırıcı ince çizgiler kullanılır.
- **Özel Bileşenler:** Sipariş takip zaman çizelgesi, kurye harita pinleri ve mutfak yönetim paneli için canlı "Sipariş Hazırlanıyor" göstergeleri sisteme dahildir.
