import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "KVKK Aydinlatma Metni - YemiGO Manager",
};

export default function ManagerKvkkPage() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          KVKK Aydinlatma Metni
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Son guncelleme: 17 Subat 2025
        </p>

        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Bu aydinlatma metni, 6698 sayili Kisisel Verilerin Korunmasi Kanunu
          (&quot;KVKK&quot;) kapsaminda, YemiGO (&quot;Veri Sorumlusu&quot;)
          tarafindan kisisel verilerinizin islenmesine iliskin sizi
          bilgilendirmek amaciyla hazirlanmistir.
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
          2. Islenen Kisisel Veriler
        </h2>
        <table className="w-full border-collapse text-sm my-4">
          <thead>
            <tr>
              <th className="bg-gray-50 p-3 text-left font-semibold border border-gray-200">
                Veri Kategorisi
              </th>
              <th className="bg-gray-50 p-3 text-left font-semibold border border-gray-200">
                Veri Turleri
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
                Iletisim Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Telefon numarasi, e-posta adresi
              </td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                Isletme Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Restoran adi, sube bilgileri, adres
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
                Islem Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Siparis gecmisi, satis verileri, urun bilgileri
              </td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                Personel Bilgileri
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Calisan isimleri, rolleri, gorev bilgileri
              </td>
            </tr>
            <tr>
              <td className="p-3 text-gray-600 border border-gray-200">
                Teknik Bilgiler
              </td>
              <td className="p-3 text-gray-600 border border-gray-200">
                Cihaz bilgileri, uygulama kullanim verileri
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          3. Kisisel Verilerin Islenme Amaci
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kisisel verileriniz asagidaki amaclarla islenmektedir:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Isletme hesabi olusturma ve kimlik dogrulama
          </li>
          <li className="mb-2">
            Siparis yonetimi ve teslimat sureclerinin yurutulmesi
          </li>
          <li className="mb-2">Kurye takibi ve yonetimi</li>
          <li className="mb-2">Personel yonetimi ve gorev atama</li>
          <li className="mb-2">Masa ve QR siparis yonetimi</li>
          <li className="mb-2">Satis raporlari ve analiz</li>
          <li className="mb-2">Uygulama ici bildirim gonderimi</li>
          <li className="mb-2">
            Uygulama performansinin iyilestirilmesi
          </li>
          <li className="mb-2">
            Yasal yukumluluklerin yerine getirilmesi
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          4. Kisisel Verilerin Aktarilmasi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kisisel verileriniz, asagidaki taraflara aktarilabilir:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Google Firebase:</strong> Kimlik
            dogrulama, veritabani ve bildirim altyapisi saglayicisi olarak (ABD
            merkezli, standart sozlesme hukumleri kapsaminda)
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Yasal Makamlar:</strong>{" "}
            Mevzuatin gerektirdigi hallerde yetkili kamu kurum ve kuruluslarina
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          5. Kisisel Verilerin Toplanma Yontemi ve Hukuki Sebebi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kisisel verileriniz, mobil uygulama uzerinden elektronik ortamda
          toplanmaktadir. Verilerin islenmesinin hukuki sebepleri:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            KVKK m.5/2(c): Sozlesmenin kurulmasi ve ifasi icin gerekli olmasi
          </li>
          <li className="mb-2">
            KVKK m.5/2(f): Veri sorumlusunun mesru menfaati
          </li>
          <li className="mb-2">
            KVKK m.5/1: Acik rizaniz (konum verileri icin)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          6. Veri Saklama Suresi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kisisel verileriniz, isleme amacinin gerektirdigi sure boyunca ve
          yasal yukumlulukler cercevesinde saklanir. Hesabinizin silinmesi
          halinde verileriniz 30 gun icinde imha edilir.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">7. Hesap Silme</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Hesabinizi silmek icin uygulama icinden{" "}
          <strong className="text-gray-900">
            Ayarlar &gt; Hesap Detaylari &gt; Hesabimi Sil
          </strong>{" "}
          yolunu izleyebilirsiniz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          8. KVKK Kapsamindaki Haklariniz
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          KVKK&apos;nin 11. maddesi uyarinca asagidaki haklara sahipsiniz:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Kisisel verilerinizin islenip islenmedigini ogrenme
          </li>
          <li className="mb-2">
            Islenmisse buna iliskin bilgi talep etme
          </li>
          <li className="mb-2">
            Islenme amacini ve amacina uygun kullanilip kullanilmadigini
            ogrenme
          </li>
          <li className="mb-2">
            Yurt icinde veya yurt disinda aktarildigi ucuncu kisileri bilme
          </li>
          <li className="mb-2">
            Eksik veya yanlis islenmisse duzeltilmesini isteme
          </li>
          <li className="mb-2">
            KVKK&apos;nin 7. maddesindeki sartlar cercevesinde silinmesini veya
            yok edilmesini isteme
          </li>
          <li className="mb-2">
            Duzeltme, silme ve yok etme islemlerinin aktarildigi ucuncu kisilere
            bildirilmesini isteme
          </li>
          <li className="mb-2">
            Islenen verilerin munhasiran otomatik sistemler vasitasiyla analiz
            edilmesi suretiyle aleyhinize bir sonucun ortaya cikmasina itiraz
            etme
          </li>
          <li className="mb-2">
            Kanuna aykiri olarak islenmesi sebebiyle zarara ugramaniz halinde
            zararin giderilmesini talep etme
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          9. Basvuru Yontemi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Yukarida belirtilen haklarinizi kullanmak icin asagidaki yontemlerle
          basvurabilirsiniz:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">E-posta:</strong> info@yemigo.com
            adresine &quot;KVKK Basvurusu&quot; konulu e-posta gonderebilirsiniz
          </li>
        </ul>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Basvurulariniz en gec 30 gun icinde ucretsiz olarak
          sonuclandirilacaktir.
        </p>
      </div>
    </Container>
  );
}
