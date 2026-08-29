# Integration Logos

Bu klasöre entegrasyon ortaklarının resmi marka SVG dosyalarını koyun.

## Beklenen dosya isimleri

- `yemeksepeti.svg`
- `getir-yemek.svg`
- `trendyol-go.svg`
- `migros-yemek.svg`
- `fuudy.svg`

## Format

- **Tercih:** SVG (vektör, ölçeklenebilir, küçük)
- **Alternatif:** PNG (transparent background, en az 256×256, retina için 512×512 daha iyi)
- PNG koyarsan dosya adını `.png` yap ve `src/lib/constants.ts` içinde `logo` alanını güncelle.

## Nereden alınır

Her platformun **resmi brand kit** sayfası ya da iş ortağı paneli en güvenli kaynak. Bunlar yoksa public vector logo siteleri (logowik.com, seeklogo.com) kullanılabilir — bu durumlarda nominative fair use ("biz bu platformla entegreyiz") kapsamında kullanım yaygın kabul görür.

- **YemekSepeti:** https://kurumsal.yemeksepeti.com/logolar/
- **Getir Yemek:** Getir partner panel veya brand request
- **Trendyol Go:** Trendyol marka kaynaklarından
- **Migros Yemek:** migroskurumsal.com → Basın Odası
- **Fuudy:** doğrudan iletişim gerekebilir

## Dosya yokken davranış

`IntegrationLogos.tsx` her logoyu yüklemeyi dener; dosya yoksa otomatik olarak **wordmark fallback** (marka adı + marka rengi pill) gösterir. Yani kodu değiştirmeden, dosyayı buraya bırakman yeterli — site canlıda da otomatik gerçek logoyu kullanır.
