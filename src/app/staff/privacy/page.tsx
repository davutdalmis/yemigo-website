import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — YemiGO Staff",
};

const H2 = "text-xl font-semibold mt-10 mb-3";
const P = "text-[15px] leading-relaxed text-gray-600 mb-4";
const UL = "list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4";
const LI = "mb-2";
const B = "text-gray-900";

export default function StaffPrivacyPage() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Gizlilik Politikası
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          YemiGO Staff — Son güncelleme: 25 Kasım 2026
        </p>

        <p className={P}>
          YemiGO Staff, YemiGO kullanan restoran ve işletmelerin çalışanları
          için hazırlanmış bir personel uygulamasıdır. Çalışanlar uygulamayla
          mesaiye başlar ve bitirir, mola kullanır, vardiya planını görür,
          masa siparişi alır, mutfak ekranını kullanır ve kendilerine atanan
          görevleri tamamlar. Bu gizlilik politikası, uygulamayı kullanırken
          hangi verilerin işlendiğini, bunların ne amaçla kullanıldığını ve
          nasıl korunduğunu açıklar.
        </p>

        <h2 className={H2}>1. Kimler Kullanır, Veriden Kim Sorumludur</h2>
        <p className={P}>
          Uygulama yalnızca işletme çalışanları içindir. Uygulamadan kayıt
          olunmaz; hesabınızı çalıştığınız işletme yönetim panelinden açar ve
          adınızı, rolünüzü ve şubenizi işletmeniz tanımlar.
        </p>
        <p className={P}>
          Çalışan olarak size ait veriler, işvereniniz olan işletme adına
          işlenir. Bu verilerin{" "}
          <strong className={B}>veri sorumlusu çalıştığınız işletmedir</strong>
          ; YemiGO, işletmeye yazılım hizmeti sunan{" "}
          <strong className={B}>hizmet sağlayıcı (veri işleyen)</strong>{" "}
          konumundadır.
        </p>

        <h2 className={H2}>2. İşlenen Veriler</h2>
        <ul className={UL}>
          <li className={LI}>
            <strong className={B}>Hesap ve Profil Bilgileri:</strong> Ad,
            e-posta adresi, rol (ör. garson, mutfak, bar, kurye, müdür) ve
            bağlı olduğunuz işletme ile şube. Giriş e-posta ve şifre ile
            yapılır. Bu bilgileri yöneticiniz girer ve günceller.
          </li>
          <li className={LI}>
            <strong className={B}>Mesai Kayıtları:</strong> Mesai başlangıç ve
            bitiş zamanı, mola başlangıcı, mola türü ve süreleri.
          </li>
          <li className={LI}>
            <strong className={B}>Mesai Başlangıç Konumu:</strong> Mesai
            başlatırken bir kez okunan konumunuz ve şubeye olan uzaklığınız
            (ayrıntı için 4. bölüme bakınız).
          </li>
          <li className={LI}>
            <strong className={B}>Vardiya Planları:</strong> Size ait vardiya
            planı ve işletmeniz açtıysa aynı şubedeki ekibin planı (ad, rol,
            saat).
          </li>
          <li className={LI}>
            <strong className={B}>Sipariş ve Masa Verileri:</strong>{" "}
            Girdiğiniz masa siparişleri (ürün, adet, tutar ve siparişi kimin
            girdiği).
          </li>
          <li className={LI}>
            <strong className={B}>Görevler:</strong> Size atanan görevler,
            tamamlanma zamanı, görevi kimin tamamladığı, eklediğiniz notlar ve
            fotoğraf gerektiren görevlerde çektiğiniz kanıt fotoğrafı.
          </li>
          <li className={LI}>
            <strong className={B}>Cihaz Bilgileri:</strong> Cihaz modeli,
            işletim sistemi sürümü ve uygulama sürümü gibi teknik bilgiler
            işlenebilir.
          </li>
        </ul>
        <p className={P}>
          Uygulamada reklam, analitik veya çökme raporlama aracı bulunmaz.
          Uygulama içi mesajlaşma yoktur; mikrofon, rehber, takvim, Bluetooth
          ve sağlık verilerine erişilmez.
        </p>

        <h2 className={H2}>3. Verilerin Kullanım Amacı</h2>
        <ul className={UL}>
          <li className={LI}>Kimlik doğrulama ve hesabınızın yönetimi</li>
          <li className={LI}>
            Mesai, mola ve vardiya kayıtlarının tutulması
          </li>
          <li className={LI}>
            Mesainin şubede başlatıldığının doğrulanması
          </li>
          <li className={LI}>Masa siparişlerinin alınması ve mutfağa iletilmesi</li>
          <li className={LI}>Görevlerin atanması, takibi ve tamamlanması</li>
          <li className={LI}>
            İşletme yöneticisinin ekip, vardiya ve görev yönetimi
          </li>
        </ul>
        <p className={P}>
          Verileriniz yalnızca uygulamanın işlevlerini sunmak için kullanılır;
          reklam veya pazarlama amacıyla kullanılmaz.
        </p>

        <h2 className={H2}>4. Konum Verileri</h2>
        <p className={P}>
          Konumunuz{" "}
          <strong className={B}>
            yalnızca mesai başlatma anında, bir kez
          </strong>{" "}
          okunur. Amaç, mesaiyi şubede başlattığınızı doğrulamaktır. Mesai
          kaydınıza giriş konumu ve şubeye olan uzaklık yazılır.
        </p>
        <p className={P}>
          <strong className={B}>Uygulama sizi sürekli takip etmez.</strong>{" "}
          Arka planda konum toplanmaz; konum izni yalnızca &quot;uygulamayı
          kullanırken&quot; düzeyinde istenir. Konum iznini dilediğiniz zaman
          cihaz ayarlarından kapatabilirsiniz.
        </p>

        <h2 className={H2}>5. Kamera ve Fotoğraflar</h2>
        <p className={P}>
          Kamera yalnızca fotoğraf gerektiren bir görevi tamamlarken kanıt
          fotoğrafı çekmek için kullanılır. Çektiğiniz fotoğraf sunucuya
          yüklenir ve{" "}
          <strong className={B}>
            işletmenizin yöneticisi tarafından görülebilir
          </strong>
          . Uygulama fotoğraf arşivinize kendiliğinden erişmez.
        </p>

        <h2 className={H2}>6. Bildirimler</h2>
        <p className={P}>
          Uygulama yalnızca cihazınızda oluşturulan yerel bildirimler gönderir
          (ör. molanızın bittiğini hatırlatma). Bildirim izni mola özelliğini
          kullandığınızda istenir. Kilit ekranında gösterilen mesai ve mola
          süresi bilgisi cihazınızda kalır.
        </p>

        <h2 className={H2}>7. Verilerinizi Kimler Görebilir</h2>
        <ul className={UL}>
          <li className={LI}>
            <strong className={B}>İşletme Yöneticiniz:</strong> Profil
            bilgileriniz, mesai ve mola kayıtlarınız, mesai başlangıç
            konumunuz, girdiğiniz siparişler, görevleriniz ve görev
            fotoğraflarınız.
          </li>
          <li className={LI}>
            <strong className={B}>Aynı Şubedeki Çalışma Arkadaşlarınız:</strong>{" "}
            Adınız, rolünüz, mesaide veya molada olup olmadığınız ve işletme
            açtıysa vardiya saatleriniz.
          </li>
        </ul>

        <h2 className={H2}>8. Bilgi Paylaşımı ve Üçüncü Taraf Hizmetler</h2>
        <p className={P}>
          Kişisel bilgilerinizi üçüncü taraflara{" "}
          <strong className={B}>satmayız</strong>. Uygulamada izleme
          (tracking) yapılmaz ve reklam gösterilmez. Verileriniz yalnızca
          aşağıdaki durumlarda paylaşılır:
        </p>
        <ul className={UL}>
          <li className={LI}>
            <strong className={B}>Firebase Authentication (Google):</strong>{" "}
            E-posta ve şifre ile kimlik doğrulama
          </li>
          <li className={LI}>
            <strong className={B}>Firebase Cloud Firestore (Google):</strong>{" "}
            Veritabanı ve veri senkronizasyonu
          </li>
          <li className={LI}>
            <strong className={B}>Firebase Cloud Storage (Google):</strong>{" "}
            Görev fotoğraflarının saklanması
          </li>
          <li className={LI}>
            <strong className={B}>YemiGO Sunucuları:</strong> Şifre
            değişikliği gibi hesap işlemleri
          </li>
          <li className={LI}>
            <strong className={B}>Yasal Zorunluluklar:</strong> Yasaların
            gerektirdiği durumlarda yetkili makamlarla
          </li>
        </ul>

        <h2 className={H2}>9. Veri Güvenliği</h2>
        <ul className={UL}>
          <li className={LI}>
            Tüm veri aktarımları SSL/TLS şifreleme ile korunur
          </li>
          <li className={LI}>
            Erişim, yetkilendirme kurallarıyla işletme ve şube bazında
            sınırlandırılmıştır
          </li>
          <li className={LI}>Rol bazlı erişim kontrolü uygulanır</li>
        </ul>

        <h2 className={H2}>10. Hesap Silme</h2>
        <p className={P}>
          Giriş hesabınızı uygulama içinden{" "}
          <strong className={B}>
            Profil &gt; Hesap Bilgileri &gt; Hesabımı Sil
          </strong>{" "}
          yolunu izleyerek silebilirsiniz. İşlem şifrenizle doğrulanır ve geri
          alınamaz; hesabınız silindikten sonra uygulamaya giriş yapamazsınız.
        </p>
        <p className={P}>
          Mesai, sipariş ve görev geçmişi gibi kayıtlar işletmenize aittir ve
          işletmenizin yasal ve operasyonel yükümlülükleri gereği saklanabilir.
          Bu kayıtların silinmesi veya düzeltilmesi için çalıştığınız
          işletmeye ya da info@yemigo.com adresine başvurabilirsiniz.
        </p>

        <h2 className={H2}>11. Veri Saklama Süresi</h2>
        <p className={P}>
          Hesap bilgileriniz hesabınız aktif olduğu sürece saklanır. İşletmeye
          ait mesai, sipariş ve görev kayıtları, işletmenizin belirlediği ve
          ilgili mevzuatın öngördüğü süre boyunca saklanır.
        </p>

        <h2 className={H2}>12. Haklarınız</h2>
        <p className={P}>
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki
          haklara sahipsiniz:
        </p>
        <ul className={UL}>
          <li className={LI}>Kişisel verilerinize erişim talep etme</li>
          <li className={LI}>Verilerinizin düzeltilmesini isteme</li>
          <li className={LI}>Verilerinizin silinmesini talep etme</li>
          <li className={LI}>Veri işlemeye itiraz etme</li>
        </ul>
        <p className={P}>
          Taleplerinizi çalıştığınız işletmeye veya info@yemigo.com adresine
          iletebilirsiniz. Ayrıntılı bilgi için{" "}
          <a href="/kvkk/" className="text-gray-900 underline">
            KVKK Aydınlatma Metni
          </a>
          &apos;ne bakabilirsiniz.
        </p>

        <h2 className={H2}>13. Çocukların Gizliliği</h2>
        <p className={P}>
          Uygulama yalnızca işletme çalışanları içindir; çocuklara yönelik
          değildir. Bilerek çocuklardan kişisel bilgi toplamayız.
        </p>

        <h2 className={H2}>14. Değişiklikler</h2>
        <p className={P}>
          Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Güncel metin
          her zaman bu sayfada yayınlanır.
        </p>

        <h2 className={H2}>15. İletişim</h2>
        <p className={P}>
          Gizlilik politikamız hakkında sorularınız için bizimle iletişime
          geçebilirsiniz:
        </p>
        <ul className={UL}>
          <li className={LI}>
            <strong className={B}>E-posta:</strong> info@yemigo.com
          </li>
          <li className={LI}>
            <strong className={B}>Web:</strong> yemigo.com
          </li>
        </ul>
      </div>
    </Container>
  );
}
