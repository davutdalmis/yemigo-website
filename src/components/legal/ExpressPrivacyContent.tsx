import Container from "@/components/ui/Container";

export default function ExpressPrivacyContent() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Gizlilik Politikasi
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Son guncelleme: 12 Subat 2025
        </p>

        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          YemiGO (&quot;biz&quot;, &quot;bizim&quot;) olarak, YemiGO Express
          uygulamasini kullanan kuryelerimizin gizliligini korumaya onem
          veriyoruz. Bu gizlilik politikasi, hangi bilgileri topladigimizi,
          nasil kullandigimizi ve nasil korudugumuzu aciklar.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          1. Topladigimiz Bilgiler
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Uygulamamiz asagidaki bilgileri toplar:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Kimlik Bilgileri:</strong> Ad,
            soyad ve telefon numarasi (giris ve hesap dogrulama icin)
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Konum Bilgileri:</strong> Gercek
            zamanli konum verisi (teslimat takibi ve yol tarifi icin)
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Cihaz Bilgileri:</strong> Cihaz
            modeli, isletim sistemi versiyonu ve benzersiz cihaz tanimlayicisi
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Kullanim Verileri:</strong>{" "}
            Siparis gecmisi, teslimat sureleri ve kazanc bilgileri
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          2. Bilgilerin Kullanim Amaci
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Topladigimiz bilgileri asagidaki amaclarla kullaniriz:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Kurye kimlik dogrulamasi ve hesap yonetimi
          </li>
          <li className="mb-2">Siparis atama ve teslimat takibi</li>
          <li className="mb-2">
            Gercek zamanli konum paylasimi (musteri ve restoran ile)
          </li>
          <li className="mb-2">Kazanc hesaplama ve raporlama</li>
          <li className="mb-2">Uygulama performansini iyilestirme</li>
          <li className="mb-2">
            Bildirim gonderme (yeni siparis, durum guncelleme)
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          3. Bilgi Paylasimi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kisisel bilgilerinizi ucuncu taraflarla{" "}
          <strong className="text-gray-900">satmayiz</strong>. Bilgileriniz
          yalnizca asagidaki durumlarda paylasilabilir:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Hizmet Saglayicilar:</strong>{" "}
            Firebase (Google) - kimlik dogrulama, veritabani ve bildirim
            hizmetleri icin
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Yasal Zorunluluklar:</strong>{" "}
            Yasalarin gerektirdigi durumlarda yetkili makamlarla
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">4. Veri Guvenligi</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Verilerinizi korumak icin endustri standartlarinda guvenlik onlemleri
          uygulariz:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            Tum veri aktarimlari SSL/TLS sifreleme ile korunur
          </li>
          <li className="mb-2">
            Veriler Firebase altyapisinda guvenli bir sekilde saklanir
          </li>
          <li className="mb-2">
            Erisim yetkilendirme kurallari ile sinirlandirilmistir
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">5. Konum Verileri</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Konum verileriniz yalnizca{" "}
          <strong className="text-gray-900">aktif teslimat sirasinda</strong>{" "}
          toplanir. Cevrimdisi oldugunuzda konum takibi durdurulur. Konum
          verileriniz siparis takibi ve yol tarifi amaciyla kullanilir.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          6. Veri Saklama Suresi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Kisisel verileriniz hesabiniz aktif oldugu surece saklanir.
          Hesabinizin silinmesini talep ettiginizde, verileriniz 30 gun icinde
          kalici olarak silinir.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">7. Haklariniz</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Asagidaki haklara sahipsiniz:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">Kisisel verilerinize erisim talep etme</li>
          <li className="mb-2">Verilerinizin duzeltilmesini isteme</li>
          <li className="mb-2">Verilerinizin silinmesini talep etme</li>
          <li className="mb-2">Veri islemeye itiraz etme</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          8. Ucuncu Taraf Hizmetler
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Uygulamamiz asagidaki ucuncu taraf hizmetlerini kullanir:
        </p>
        <ul className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4">
          <li className="mb-2">
            <strong className="text-gray-900">Firebase Authentication:</strong>{" "}
            Telefon numarasi ile kimlik dogrulama
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">
              Firebase Cloud Firestore:
            </strong>{" "}
            Veritabani ve veri senkronizasyonu
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">
              Firebase Cloud Messaging:
            </strong>{" "}
            Anlik bildirimler
          </li>
          <li className="mb-2">
            <strong className="text-gray-900">Apple Maps:</strong> Harita ve yol
            tarifi
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-3">
          9. Cocuklarin Gizliligi
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Uygulamamiz 18 yasindan kucuk bireylere yonelik degildir. Bilerek
          cocuklardan kisisel bilgi toplamayiz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">10. Degisiklikler</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Bu gizlilik politikasini zaman zaman guncelleyebiliriz. Onemli
          degisikliklerde uygulama icinden bildirim gondeririz.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">11. Iletisim</h2>
        <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
          Gizlilik politikamiz hakkinda sorulariniz icin bizimle iletisime
          gecebilirsiniz:
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
