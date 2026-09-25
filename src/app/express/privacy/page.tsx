import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — YemiGO Express",
  description:
    "YemiGO Express kurye uygulaması gizlilik politikası: topladığımız veriler, konum (arka plan dahil) kullanımı, paylaşım ve haklarınız.",
};

export default function ExpressPrivacyPage() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Gizlilik Politikası
        </h1>
        <p className="text-sm text-gray-400 mb-2">YemiGO Express (Kurye Uygulaması)</p>
        <p className="text-sm text-gray-400 mb-12">
          Son güncelleme: 17 Haziran 2026
        </p>

        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          YemiGO (&quot;biz&quot;, &quot;bizim&quot;) olarak, YemiGO Express
          uygulamasını kullanan kuryelerin gizliliğini korumaya önem veriyoruz.
          YemiGO Express, restoran ve işletmelerin yemek teslimat kuryelerinin
          siparişlerini yönetmesi ve teslimat sırasında konumlarını işletmeyle
          paylaşması için tasarlanmış bir kurye uygulamasıdır. Bu gizlilik
          politikası, hangi bilgileri topladığımızı, nasıl kullandığımızı, kiminle
          paylaştığımızı ve nasıl koruduğumuzu açıklar.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          1. Topladığımız Bilgiler
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Uygulamamız aşağıdaki bilgileri toplar:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Kimlik Bilgileri:</strong> Ad,
            soyad ve telefon numarası (giriş, SMS ile tek kullanımlık kod (OTP)
            doğrulaması ve hesap yönetimi için)
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Konum Bilgileri:</strong> Cihazın
            gerçek zamanlı GPS konumu (enlem/boylam), hız, yön ve konum doğruluğu.
            Konum, kurye yalnızca uygulamada &quot;görevde&quot; durumunu
            başlattığında toplanır ve görev bittiğinde durdurulur.
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Sipariş Verileri:</strong> Atanan
            siparişler, teslimat adresi, sipariş durumu ve teslimat geçmişi
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Cihaz ve Teknik Bilgiler:</strong>{" "}
            Cihaz modeli, işletim sistemi sürümü, batarya seviyesi ve uygulama
            bildirimleri için cihaz kayıt jetonu (FCM token)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          2. Konum Verilerinin Kullanımı (Arka Plan Konumu Dahil)
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Konum, YemiGO Express&apos;in temel işlevidir. Konum verisini yalnızca{" "}
          <strong className="text-gray-900">
            aktif teslimat takibi amacıyla
          </strong>{" "}
          toplarız:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Konum paylaşımı yalnızca kurye uygulama içinden{" "}
            <strong className="text-gray-900">&quot;görevde&quot;</strong>{" "}
            durumunu başlattığında çalışır ve görev sona erdiğinde otomatik durur.
          </li>
          <li className="mb-2">
            Konum, bağlı olduğu restoran/işletmenin kurye takip ekranında gerçek
            zamanlı gösterilir; böylece işletme teslimatın nerede olduğunu
            görebilir.
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Arka plan konumu:</strong>{" "}
            Teslimat sırasında kurye telefonunu kapattığında veya başka bir
            uygulamaya geçtiğinde takibin kesilmemesi için, konum uygulama arka
            planda iken de toplanır. Bu süre boyunca cihazda{" "}
            <strong className="text-gray-900">
              kalıcı bir bildirim (&quot;YemiGO Express - Görevde&quot;)
            </strong>{" "}
            gösterilir ve kurye bu bildirimden &quot;Durdur&quot; diyerek
            paylaşımı istediği an sonlandırabilir.
          </li>
          <li className="mb-2">
            Konum verisi reklam amacıyla{" "}
            <strong className="text-gray-900">kullanılmaz ve satılmaz</strong>.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          3. Bilgilerin Kullanım Amacı
        </h2>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">Kurye kimlik doğrulaması ve hesap yönetimi</li>
          <li className="mb-2">Sipariş atama, kabul ve teslimat takibi</li>
          <li className="mb-2">
            Gerçek zamanlı konum paylaşımı ile teslimat süreç yönetimi
          </li>
          <li className="mb-2">
            Bildirim gönderme (yeni sipariş, durum güncellemesi)
          </li>
          <li className="mb-2">Uygulama güvenliği ve performansını iyileştirme</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">4. Bilgi Paylaşımı</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kişisel bilgilerinizi üçüncü taraflara{" "}
          <strong className="text-gray-900">satmayız</strong>. Bilgileriniz
          yalnızca aşağıdaki durumlarda paylaşılır:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Bağlı İşletme:</strong> Kuryenin
            çalıştığı restoran/işletme, atanan teslimat süresince konumu ve
            sipariş durumunu görür.
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Hizmet Sağlayıcılar:</strong>{" "}
            Firebase (Google) — kimlik doğrulama, veritabanı ve bildirim
            hizmetleri için; YemiGO sunucuları (api.yemigo.com) — konum ve sipariş
            verilerinin iletimi için.
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Yasal Zorunluluklar:</strong>{" "}
            Yasaların gerektirdiği durumlarda yetkili makamlarla.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">5. Veri Güvenliği</h2>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Tüm veri aktarımları SSL/TLS şifreleme ile korunur.
          </li>
          <li className="mb-2">
            Veriler Firebase ve YemiGO altyapısında güvenli şekilde saklanır.
          </li>
          <li className="mb-2">
            Erişim, yetkilendirme kurallarıyla ve rol bazlı erişim kontrolüyle
            sınırlandırılmıştır.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          6. Veri Saklama Süresi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kimlik ve sipariş verileriniz hesabınız aktif olduğu sürece saklanır.
          Konum verileri yalnızca operasyonel takip amacıyla geçici olarak
          tutulur. Hesabınızın silinmesini talep ettiğinizde, kişisel verileriniz
          30 gün içinde kalıcı olarak silinir.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">7. Hesap ve Veri Silme</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Hesabınızı ve verilerinizi silmek için{" "}
          <strong className="text-gray-900">info@yemigo.com</strong> adresine
          talep gönderebilir veya çalıştığınız işletme yöneticisiyle iletişime
          geçebilirsiniz. Talebiniz üzerine tüm kişisel verileriniz kalıcı olarak
          kaldırılır.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">8. Haklarınız</h2>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">Kişisel verilerinize erişim talep etme</li>
          <li className="mb-2">Verilerinizin düzeltilmesini isteme</li>
          <li className="mb-2">Verilerinizin silinmesini talep etme</li>
          <li className="mb-2">Veri işlemeye itiraz etme</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          9. Üçüncü Taraf Hizmetler
        </h2>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Firebase Authentication:</strong>{" "}
            Telefon numarası / OTP ile kimlik doğrulama
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Firebase Cloud Firestore:</strong>{" "}
            Veritabanı ve veri senkronizasyonu
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Firebase Cloud Messaging:</strong>{" "}
            Anlık bildirimler
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Google Maps:</strong> Harita
            gösterimi ve rota
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          10. Çocukların Gizliliği
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Uygulamamız 18 yaşından küçük bireylere yönelik değildir. Bilerek
          çocuklardan kişisel bilgi toplamayız.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">11. Değişiklikler</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli
          değişikliklerde uygulama içinden veya bu sayfa üzerinden bildiririz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">12. İletişim</h2>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">E-posta:</strong> info@yemigo.com
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Web:</strong> yemigo.com
          </li>
        </ul>
      </div>
    </Container>
  );
}
