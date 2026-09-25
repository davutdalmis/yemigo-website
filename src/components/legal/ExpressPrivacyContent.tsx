import Container from "@/components/ui/Container";

export default function ExpressPrivacyContent() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Gizlilik Politikası
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Son güncelleme: 12 Şubat 2025
        </p>

        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          YemiGO (&quot;biz&quot;, &quot;bizim&quot;) olarak, YemiGO Express
          uygulamasını kullanan kuryelerimizin gizliliğini korumaya önem
          veriyoruz. Bu gizlilik politikası, hangi bilgileri topladığımızı,
          nasıl kullandığımızı ve nasıl koruduğumuzu açıklar.
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
            soyad ve telefon numarası (giriş ve hesap doğrulama için)
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Konum Bilgileri:</strong> Gerçek
            zamanlı konum verisi (teslimat takibi ve yol tarifi için)
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Cihaz Bilgileri:</strong> Cihaz
            modeli, işletim sistemi versiyonu ve benzersiz cihaz tanımlayıcısı
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Kullanım Verileri:</strong>{" "}
            Sipariş geçmişi, teslimat süreleri ve kazanç bilgileri
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          2. Bilgilerin Kullanım Amacı
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Kurye kimlik doğrulaması ve hesap yönetimi
          </li>
          <li className="mb-2">Sipariş atama ve teslimat takibi</li>
          <li className="mb-2">
            Gerçek zamanlı konum paylaşımı (bağlı olduğunuz restoran ile)
          </li>
          <li className="mb-2">Kazanç hesaplama ve raporlama</li>
          <li className="mb-2">Uygulama performansını iyileştirme</li>
          <li className="mb-2">
            Bildirim gönderme (yeni sipariş, durum güncelleme)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          3. Bilgi Paylaşımı
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kişisel bilgilerinizi üçüncü taraflarla{" "}
          <strong className="text-gray-900">satmayız</strong>. Bilgileriniz
          yalnızca aşağıdaki durumlarda paylaşılabilir:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Hizmet Sağlayıcılar:</strong>{" "}
            Firebase (Google) — kimlik doğrulama, veritabanı ve bildirim
            hizmetleri için
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Yasal Zorunluluklar:</strong>{" "}
            Yasaların gerektirdiği durumlarda yetkili makamlarla
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">4. Veri Güvenliği</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Verilerinizi korumak için endüstri standartlarında güvenlik
          önlemleri uygularız:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Tüm veri aktarımları SSL/TLS şifreleme ile korunur
          </li>
          <li className="mb-2">
            Veriler Firebase altyapısında güvenli bir şekilde saklanır
          </li>
          <li className="mb-2">
            Erişim yetkilendirme kurallarıyla sınırlandırılmıştır
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">5. Konum Verileri</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Konum verileriniz yalnızca uygulamada{" "}
          <strong className="text-gray-900">&quot;görevde&quot; durumundayken</strong>{" "}
          toplanır. Görevden çıktığınızda konum takibi durdurulur. Konum
          verileriniz sipariş takibi ve yol tarifi amacıyla kullanılır.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          6. Veri Saklama Süresi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kişisel verileriniz hesabınız aktif olduğu sürece saklanır.
          Hesabınızın silinmesini talep ettiğinizde, verileriniz 30 gün içinde
          kalıcı olarak silinir.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">7. Haklarınız</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">Kişisel verilerinize erişim talep etme</li>
          <li className="mb-2">Verilerinizin düzeltilmesini isteme</li>
          <li className="mb-2">Verilerinizin silinmesini talep etme</li>
          <li className="mb-2">Veri işlemeye itiraz etme</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          8. Üçüncü Taraf Hizmetler
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Uygulamamız aşağıdaki üçüncü taraf hizmetlerini kullanır:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Firebase Authentication:</strong>{" "}
            Telefon numarası ile kimlik doğrulama
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">
              Firebase Cloud Firestore:
            </strong>{" "}
            Veritabanı ve veri senkronizasyonu
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">
              Firebase Cloud Messaging:
            </strong>{" "}
            Anlık bildirimler
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Apple Maps:</strong> Harita ve
            yol tarifi
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          9. Çocukların Gizliliği
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Uygulamamız 18 yaşından küçük bireylere yönelik değildir. Bilerek
          çocuklardan kişisel bilgi toplamayız.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">10. Değişiklikler</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli
          değişikliklerde uygulama içinden bildirim göndeririz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">11. İletişim</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Gizlilik politikamız hakkında sorularınız için bizimle iletişime
          geçebilirsiniz:
        </p>
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
