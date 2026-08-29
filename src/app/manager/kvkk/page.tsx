import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni — YemiGO Manager",
};

export default function ManagerKvkkPage() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          KVKK Aydınlatma Metni
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Son güncelleme: 17 Şubat 2025
        </p>

        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu
          (&quot;KVKK&quot;) kapsamında, YemiGO (&quot;Veri Sorumlusu&quot;)
          tarafından kişisel verilerinizin işlenmesine ilişkin sizi
          bilgilendirmek amacıyla hazırlanmıştır.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          1. Veri Sorumlusu
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          <strong className="text-gray-900">YemiGO</strong>
          <br />
          E-posta: info@yemigo.com
          <br />
          Web: yemigo.com
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          2. İşlenen Kişisel Veriler
        </h2>
        <table className="w-full border-collapse text-sm my-4">
          <thead>
            <tr>
              <th className="bg-gray-50 p-3 text-left font-semibold border border-gray-200">
                Veri Kategorisi
              </th>
              <th className="bg-gray-50 p-3 text-left font-semibold border border-gray-200">
                Veri Türleri
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                Kimlik Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Ad, soyad
              </td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                İletişim Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Telefon numarası, e-posta adresi
              </td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                İşletme Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Restoran adı, şube bilgileri, adres
              </td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                Konum Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Kurye konum verileri (teslimat takibi)
              </td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                İşlem Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Sipariş geçmişi, satış verileri, ürün bilgileri
              </td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                Personel Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Çalışan isimleri, rolleri, görev bilgileri
              </td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                Teknik Bilgiler
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Cihaz bilgileri, uygulama kullanım verileri
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          3. Kişisel Verilerin İşlenme Amacı
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            İşletme hesabı oluşturma ve kimlik doğrulama
          </li>
          <li className="mb-2">
            Sipariş yönetimi ve teslimat süreçlerinin yürütülmesi
          </li>
          <li className="mb-2">Kurye takibi ve yönetimi</li>
          <li className="mb-2">Personel yönetimi ve görev atama</li>
          <li className="mb-2">Masa ve QR sipariş yönetimi</li>
          <li className="mb-2">Satış raporları ve analiz</li>
          <li className="mb-2">Uygulama içi bildirim gönderimi</li>
          <li className="mb-2">
            Uygulama performansının iyileştirilmesi
          </li>
          <li className="mb-2">
            Yasal yükümlülüklerin yerine getirilmesi
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          4. Kişisel Verilerin Aktarılması
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kişisel verileriniz, aşağıdaki taraflara aktarılabilir:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Google Firebase:</strong> Kimlik
            doğrulama, veritabanı ve bildirim altyapısı sağlayıcısı olarak (ABD
            merkezli, standart sözleşme hükümleri kapsamında)
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Yasal Makamlar:</strong>{" "}
            Mevzuatın gerektirdiği hallerde yetkili kamu kurum ve kuruluşlarına
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kişisel verileriniz, mobil uygulama üzerinden elektronik ortamda
          toplanmaktadır. Verilerin işlenmesinin hukuki sebepleri:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            KVKK m.5/2(c): Sözleşmenin kurulması ve ifası için gerekli olması
          </li>
          <li className="mb-2">
            KVKK m.5/2(f): Veri sorumlusunun meşru menfaati
          </li>
          <li className="mb-2">
            KVKK m.5/1: Açık rızanız (konum verileri için)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          6. Veri Saklama Süresi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve
          yasal yükümlülükler çerçevesinde saklanır. Hesabınızın silinmesi
          halinde verileriniz 30 gün içinde imha edilir.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">7. Hesap Silme</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Hesabınızı silmek için uygulama içinden{" "}
          <strong className="text-gray-900">
            Ayarlar &gt; Hesap Detayları &gt; Hesabımı Sil
          </strong>{" "}
          yolunu izleyebilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          8. KVKK Kapsamındaki Haklarınız
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Kişisel verilerinizin işlenip işlenmediğini öğrenme
          </li>
          <li className="mb-2">
            İşlenmişse buna ilişkin bilgi talep etme
          </li>
          <li className="mb-2">
            İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını
            öğrenme
          </li>
          <li className="mb-2">
            Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
          </li>
          <li className="mb-2">
            Eksik veya yanlış işlenmişse düzeltilmesini isteme
          </li>
          <li className="mb-2">
            KVKK&apos;nın 7. maddesindeki şartlar çerçevesinde silinmesini veya
            yok edilmesini isteme
          </li>
          <li className="mb-2">
            Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü
            kişilere bildirilmesini isteme
          </li>
          <li className="mb-2">
            İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
            edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz
            etme
          </li>
          <li className="mb-2">
            Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde
            zararın giderilmesini talep etme
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          9. Başvuru Yöntemi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle
          başvurabilirsiniz:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">E-posta:</strong> info@yemigo.com
            adresine &quot;KVKK Başvurusu&quot; konulu e-posta
            gönderebilirsiniz
          </li>
        </ul>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Başvurularınız en geç 30 gün içinde ücretsiz olarak
          sonuçlandırılacaktır.
        </p>
      </div>
    </Container>
  );
}
