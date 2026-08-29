import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — YemiGo POS",
};

export default function PosPrivacyPage() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          YemiGo POS — Gizlilik Politikası
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Son güncelleme: 10 Ağustos 2026
        </p>

        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          YemiGo POS, restoran ve kafelerde garsonların masadan sipariş
          almasını sağlayan bir iPad terminal uygulamasıdır. Bu politika
          yalnızca YemiGo POS uygulaması için geçerlidir.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          1. Kişisel Hesap Açılmaz
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          YemiGo POS&apos;ta kullanıcı hesabı oluşturulmaz. Uygulama, işletme
          yöneticisinin verdiği şube kurulum kodu ile bir şubeye bağlanır. Ad,
          soyad, e-posta, telefon numarası veya parola istenmez; kişisel hesap
          kaydı tutulmaz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          2. Topladığımız Bilgiler
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          <strong className="text-gray-900">Cihaz bilgileri:</strong>
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Uygulamanın cihaz için ürettiği kimlik (cihaz kimliği)
          </li>
          <li className="mb-2">
            Kurulum sırasında girilen cihaz adı (örn. &quot;Garson iPad
            1&quot;) — bu ad, aynı masayı iki cihazın aynı anda düzenlemesini
            engelleyen kilit mesajlarında gösterilir
          </li>
        </ul>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          <strong className="text-gray-900">İşletme verileri:</strong>
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Masa numarası, sipariş edilen ürünler, adet, tutar, sipariş
            notları, kişi sayısı
          </li>
          <li className="mb-2">Siparişin hangi cihazdan ve ne zaman alındığı</li>
        </ul>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Bu veriler işletmenin kendi ticari kayıtlarıdır; uygulama son
          müşterilere ait kişisel veri (ad, telefon, adres, ödeme bilgisi)
          toplamaz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          3. Toplamadığımız Bilgiler
        </h2>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Konum verisi toplanmaz. Uygulama konum servislerini kullanmaz.
          </li>
          <li className="mb-2">
            Reklam kimliği kullanılmaz, izleme (tracking) yapılmaz.
          </li>
          <li className="mb-2">
            Kamera, mikrofon, kişiler, fotoğraflar ve takvim erişimi istenmez.
          </li>
          <li className="mb-2">Uygulama içinde reklam gösterilmez.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          4. Bilgilerin Kullanım Amacı
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Toplanan veriler yalnızca uygulamanın çalışması için kullanılır:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Siparişin ana kasaya ve mutfağa iletilmesi
          </li>
          <li className="mb-2">Masaların dolu/boş durumunun gösterilmesi</li>
          <li className="mb-2">
            Aynı masanın iki cihazda aynı anda düzenlenmesinin engellenmesi
          </li>
          <li className="mb-2">
            İşletmenin kendi satış ve sipariş kayıtlarının tutulması
          </li>
        </ul>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Veriler pazarlama, profilleme veya reklam amacıyla kullanılmaz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">5. Bilgi Paylaşımı</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Veriler satılmaz veya kiralanmaz. Yalnızca hizmetin çalışması için
          gerekli altyapı sağlayıcılarıyla işlenir:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">
              Google Firebase (Firebase Authentication ve Cloud Firestore)
            </strong>{" "}
            — verilerin saklandığı ve cihazlar arasında eşitlendiği altyapı.
            Sunucular yurt dışında bulunabilir.
          </li>
        </ul>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Yasal zorunluluk hâlinde yetkili kamu kurumlarıyla paylaşım
          yapılabilir.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">6. Veri Güvenliği</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Tüm iletişim şifreli bağlantı (HTTPS/TLS) üzerinden yapılır. Cihaz,
          şubeye yalnızca geçerli bir kurulum kodu ile bağlanabilir ve yalnızca
          bağlı olduğu şubenin verilerine erişebilir. Uygulama ödeme alma,
          hesap kapatma ve iskonto yetkisine sahip değildir; bu işlemler kasada
          yapılır.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">7. Veri Saklama</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Sipariş kayıtları işletmenin ticari kayıtları olduğu için işletmenin
          YemiGo hesabında saklanır. Cihaz kaydı, cihaz şubeden çıkarıldığında
          geçersiz hâle gelir.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          8. Cihaz Bağlantısını Kaldırma
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Uygulama içinde{" "}
          <strong className="text-gray-900">Ayarlar &gt; Kaldır</strong> ile
          cihazın şube bağlantısı kesilir. Bu işlem oturumu kapatır ve cihazda
          saklanan menü önbelleğini siler. Kişisel hesap oluşturulmadığı için
          silinecek bir kullanıcı hesabı bulunmaz.
        </p>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          İşletmenizin YemiGo hesabına ait verilerin silinmesini talep etmek
          için info@yemigo.com adresine yazabilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">9. Haklarınız</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          KVKK kapsamında; verilerinize erişme, düzeltilmesini veya silinmesini
          isteme ve işlemeye itiraz etme haklarına sahipsiniz. Talepleriniz
          için info@yemigo.com.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          10. Çocukların Gizliliği
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          YemiGo POS bir işletme (B2B) uygulamasıdır, çocuklara yönelik
          değildir ve çocuklardan bilerek veri toplamaz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">11. Değişiklikler</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Bu politika güncellenebilir. Güncellemeler bu sayfada yayımlanır ve
          &quot;son güncelleme&quot; tarihi değiştirilir.
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
