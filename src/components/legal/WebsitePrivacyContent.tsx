import Link from "next/link";
import Container from "@/components/ui/Container";

const LAST_UPDATED = "2 Haziran 2026";

type Item = string | { label: string; text: string };

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: Item[] }
  | { type: "table"; head: string[]; rows: string[][] };

type Section = { title: string; blocks: Block[] };

const INTRO_PARAGRAPHS = [
  "YemiGO (“YemiGO”, “Şirket” veya “biz”) olarak, yemigo.com internet sitesini (“Site”) ziyaret eden ve bizimle iletişime geçen kullanıcıların gizliliğine büyük önem veriyoruz. İşbu Gizlilik ve Çerez Politikası (“Politika”); Site üzerinden hangi kişisel verileri topladığımızı, bu verileri hangi amaçlarla ve hukuki sebeplerle işlediğimizi, kimlerle paylaştığımızı, çerez uygulamalarımızı, veri güvenliğine ilişkin tedbirleri, saklama sürelerini ve haklarınızı açıklamak amacıyla hazırlanmıştır.",
  "İşbu Politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat ile uyumlu olarak hazırlanmış olup, kişisel verilerinizin işlenmesine ilişkin daha ayrıntılı bilgiye KVKK Aydınlatma Metni'nden ulaşabilirsiniz.",
];

const SECTIONS: Section[] = [
  {
    title: "1. Kapsam",
    blocks: [
      {
        type: "p",
        text: "İşbu Politika, yalnızca yemigo.com internet sitesi ve bu Site üzerinden gerçekleştirilen işlemler bakımından geçerlidir. YemiGO mobil uygulamaları ve diğer hizmetleri için, ilgili uygulama ve hizmete özel gizlilik metinleri uygulanır. Politika, Site'yi ziyaret eden tüm kullanıcıları kapsar.",
      },
    ],
  },
  {
    title: "2. Tanımlar",
    blocks: [
      {
        type: "ul",
        items: [
          {
            label: "Kişisel Veri",
            text: "Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi.",
          },
          {
            label: "İlgili Kişi",
            text: "Kişisel verisi işlenen gerçek kişi (Site ziyaretçisi/kullanıcısı).",
          },
          {
            label: "Veri Sorumlusu",
            text: "Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen YemiGO.",
          },
          {
            label: "Çerez (Cookie)",
            text: "Ziyaret edilen internet siteleri tarafından tarayıcıya/cihaza kaydedilen küçük metin dosyaları.",
          },
          {
            label: "Açık Rıza",
            text: "Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza.",
          },
        ],
      },
    ],
  },
  {
    title: "3. Topladığımız Kişisel Veriler",
    blocks: [
      {
        type: "p",
        text: "Site'yi kullanımınıza ve bizimle kurduğunuz iletişime bağlı olarak aşağıdaki verileri toplarız:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Bize ilettiğiniz veriler",
            text: "İletişim/başvuru formunu doldurduğunuzda ad-soyad, e-posta adresi, telefon numarası, işletme (restoran) adı, talep konusu ve mesaj içeriği.",
          },
          {
            label: "Otomatik toplanan veriler",
            text: "Siteyi ziyaretiniz sırasında IP adresi, tarayıcı türü ve dili, cihaz ve işletim sistemi bilgileri, ziyaret tarih/saatleri, görüntülenen sayfalar ve gezinme/log kayıtları ile çerez verileri.",
          },
          {
            label: "Yerel depolama (localStorage)",
            text: "İletişim formunu gönderdiğinizde, aynı tarayıcıdan tekrar geldiğinizde talebinizi hatırlatmak amacıyla tarayıcınızın yerel depolama alanında küçük bir kayıt tutulur. Bu kayıt cihazınızda kalır ve sunucularımıza gönderilmez; tarayıcı ayarlarınızdan silebilirsiniz.",
          },
        ],
      },
      {
        type: "p",
        text: "Site, özel nitelikli kişisel veri toplamayı amaçlamaz. Lütfen formlar aracılığıyla tarafımıza bu nitelikte veri iletmeyiniz.",
      },
    ],
  },
  {
    title: "4. Kişisel Verileri İşleme Amaçlarımız",
    blocks: [
      {
        type: "p",
        text: "Topladığımız verileri aşağıdaki amaçlarla işleriz:",
      },
      {
        type: "ul",
        items: [
          "İletişim ve başvuru taleplerinizi almak, değerlendirmek ve yanıtlamak",
          "Demo, fiyat teklifi ve bilgi taleplerini yürütmek ve sonuçlandırmak",
          "Sizinle müşteri ilişkileri kapsamında iletişim kurmak ve sözleşme öncesi görüşmeleri yürütmek",
          "Sitenin çalışmasını, güvenliğini ve sürekliliğini sağlamak; kötüye kullanımı önlemek",
          "Açık rızanıza bağlı olarak Site kullanımını analiz etmek ve hizmetlerimizi geliştirmek",
          "Hukuki yükümlülüklerimizi yerine getirmek ve hukuki taleplere karşı haklarımızı korumak",
        ],
      },
    ],
  },
  {
    title: "5. İşlemenin Hukuki Sebepleri",
    blocks: [
      {
        type: "p",
        text: "Kişisel verileriniz; bir sözleşmenin kurulması veya ifası (KVKK m.5/2-c), veri sorumlusunun hukuki yükümlülüğü (m.5/2-ç), bir hakkın tesisi, kullanılması veya korunması (m.5/2-e) ve temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaat (m.5/2-f) hukuki sebeplerine dayanılarak işlenir. Zorunlu olmayan analitik ve pazarlama çerezleri ise yalnızca açık rızanıza (m.5/1) dayanılarak işlenir.",
      },
    ],
  },
  {
    title: "6. Çerezler ve Benzeri Teknolojiler",
    blocks: [
      {
        type: "p",
        text: "Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Çerezleri; Site'nin çalışmasını sağlamak, tercihlerinizi hatırlamak ve (açık rızanızla) Site kullanımını ölçmek amacıyla kullanırız.",
      },
      {
        type: "ul",
        items: [
          {
            label: "Süresine göre",
            text: "Oturum çerezleri tarayıcı kapatıldığında silinir; kalıcı çerezler ise belirli bir süre cihazınızda kalır.",
          },
          {
            label: "Kaynağına göre",
            text: "Birinci taraf çerezler doğrudan YemiGO tarafından; üçüncü taraf çerezler ise hizmet aldığımız sağlayıcılar tarafından yerleştirilir.",
          },
        ],
      },
      {
        type: "p",
        text: "Amaçlarına göre kullandığımız çerez kategorileri ve rıza durumları aşağıdaki gibidir:",
      },
      {
        type: "table",
        head: ["Çerez Türü", "Amaç", "Rıza Durumu"],
        rows: [
          [
            "Zorunlu / Teknik",
            "Site'nin temel işlevlerinin ve güvenliğinin sağlanması için kesinlikle gereklidir.",
            "Rıza gerektirmez",
          ],
          [
            "İşlevsel",
            "Tercihlerinizin (örneğin çerez tercihiniz, form durumu) hatırlanmasını sağlar.",
            "Rıza gerektirmez",
          ],
          [
            "Analitik / Performans",
            "Ziyaret istatistiklerini ölçerek Site'nin geliştirilmesine yardımcı olur.",
            "Açık rıza ile",
          ],
          [
            "Pazarlama / Hedefleme",
            "İlgi alanlarınıza yönelik içerik ve reklam sunulmasına yardımcı olur.",
            "Açık rıza ile",
          ],
        ],
      },
      {
        type: "p",
        text: "Zorunlu olmayan (analitik ve pazarlama) çerezler yalnızca açık rızanızla devreye alınır; bu çerezler varsayılan olarak kapalıdır ve rızanızı dilediğiniz zaman geri alabilirsiniz. Çerezleri tarayıcınızın ayarları üzerinden de her zaman silebilir veya engelleyebilirsiniz; ancak zorunlu çerezlerin engellenmesi, Site'nin bazı bölümlerinin düzgün çalışmamasına yol açabilir.",
      },
      {
        type: "p",
        text: "Sitemizde halihazırda öncelikli olarak Site'nin çalışması için gerekli zorunlu ve işlevsel teknolojiler kullanılmaktadır; analitik ve pazarlama amaçlı çerezler yalnızca açık rızanız alındığında etkinleştirilir.",
      },
    ],
  },
  {
    title: "7. Üçüncü Taraf Hizmet Sağlayıcılar",
    blocks: [
      {
        type: "p",
        text: "Kişisel verilerinizi üçüncü taraflara satmayız. Hizmetlerimizi sunabilmek için yalnızca aşağıdaki altyapı sağlayıcılarıyla, hizmetin gerektirdiği ölçüde ve gerekli gizlilik/güvenlik yükümlülükleri altında çalışırız:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Google Firebase / Google Cloud",
            text: "Form kayıtlarının güvenli şekilde saklanması, veritabanı, kimlik doğrulama ve e-posta bildirimi altyapısı (sunucuları yurt dışında bulunabilir).",
          },
          {
            label: "Barındırma (Hosting) Sağlayıcısı",
            text: "Site'nin yayımlanması ve kullanıcılara sunulması.",
          },
          {
            label: "Yetkili Merciler",
            text: "Mevzuatın gerektirdiği hallerde yetkili kamu kurum ve kuruluşları ile adli merciler.",
          },
        ],
      },
    ],
  },
  {
    title: "8. Kişisel Verilerin Yurt Dışına Aktarılması",
    blocks: [
      {
        type: "p",
        text: "Yukarıda belirtilen hizmet sağlayıcıların sunucuları yurt dışında bulunabildiğinden, kişisel verileriniz KVKK'nın 9. maddesi kapsamında yurt dışına aktarılabilir. Bu aktarımlar, yalnızca yeterli korumanın bulunduğu hâllerde veya gerekli güvencelerin (taahhütname/standart sözleşme hükümleri ya da açık rıza) sağlanması suretiyle ve uygun teknik/idari tedbirler alınarak gerçekleştirilir.",
      },
    ],
  },
  {
    title: "9. Veri Güvenliği",
    blocks: [
      {
        type: "p",
        text: "Verilerinizi korumak için endüstri standardında teknik ve idari tedbirler uygularız: tüm veri aktarımları SSL/TLS ile şifrelenir, veriler güvenli bulut altyapısında saklanır, erişim yetkilendirme kurallarıyla sınırlandırılır ve sistemlerimiz düzenli olarak gözden geçirilir. Buna rağmen, internet üzerinden yapılan hiçbir veri aktarımının %100 güvenli olduğunun garanti edilemeyeceğini hatırlatmak isteriz.",
      },
    ],
  },
  {
    title: "10. Veri Saklama Süreleri",
    blocks: [
      {
        type: "p",
        text: "Verileriniz, işlenme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen saklama süreleri boyunca muhafaza edilir; bu sürelerin sonunda silinir, yok edilir veya anonim hâle getirilir. İletişim/başvuru kayıtları, talebin sonuçlandırılmasının ardından makul bir süre (kural olarak 3 yıl) içinde imha edilir.",
      },
    ],
  },
  {
    title: "11. Haklarınız",
    blocks: [
      {
        type: "p",
        text: "6698 sayılı Kanun'un 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını öğrenme, aktarıldığı üçüncü kişileri bilme, eksik/yanlış işlenmişse düzeltilmesini, şartları oluştuğunda silinmesini veya yok edilmesini isteme, işlemeye itiraz etme ve zararın giderilmesini talep etme gibi haklara sahipsiniz. Haklarınızın tamamı ve başvuru usulü için KVKK Aydınlatma Metni'ni inceleyebilir; taleplerinizi info@yemigo.com adresine iletebilirsiniz.",
      },
    ],
  },
  {
    title: "12. Çocukların Gizliliği",
    blocks: [
      {
        type: "p",
        text: "Site'miz ve hizmetlerimiz 18 yaşından küçük bireylere yönelik değildir. Bilerek çocuklara ait kişisel veri toplamayız. 18 yaşından küçük bir bireye ait veri tarafımıza iletilmişse, bize bildirmeniz hâlinde gerekli işlemleri yaparız.",
      },
    ],
  },
  {
    title: "13. Diğer İnternet Sitelerine Bağlantılar",
    blocks: [
      {
        type: "p",
        text: "Site, üçüncü taraflara ait internet sitelerine bağlantılar içerebilir. Bu sitelerin içeriğinden ve gizlilik uygulamalarından YemiGO sorumlu değildir; ilgili sitelerin kendi gizlilik politikalarını incelemenizi öneririz.",
      },
    ],
  },
  {
    title: "14. Politikadaki Değişiklikler",
    blocks: [
      {
        type: "p",
        text: "İşbu Gizlilik ve Çerez Politikası, mevzuattaki değişiklikler ve iş süreçlerindeki gelişmeler doğrultusunda zaman zaman güncellenebilir. Güncel metin, Site üzerinde yayımlandığı tarih itibarıyla geçerli olur. Bu sayfayı düzenli olarak ziyaret etmenizi öneririz.",
      },
    ],
  },
  {
    title: "15. İletişim",
    blocks: [
      {
        type: "p",
        text: "Bu Politika veya kişisel verilerinizin işlenmesi hakkında sorularınız için bizimle iletişime geçebilirsiniz:",
      },
      {
        type: "ul",
        items: [
          { label: "E-posta", text: "info@yemigo.com" },
          { label: "İnternet Sitesi", text: "yemigo.com" },
        ],
      },
    ],
  },
];

function renderItem(item: Item, i: number) {
  if (typeof item === "string") {
    return (
      <li key={i} className="mb-2">
        {item}
      </li>
    );
  }
  return (
    <li key={i} className="mb-2">
      <strong className="text-gray-900">{item.label}:</strong> {item.text}
    </li>
  );
}

export default function WebsitePrivacyContent() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Gizlilik ve Çerez Politikası
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Son güncelleme: {LAST_UPDATED}
        </p>

        {INTRO_PARAGRAPHS.map((text, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-gray-600 mb-4">
            {text}
            {i === INTRO_PARAGRAPHS.length - 1 ? (
              <>
                {" "}
                <Link href="/kvkk" className="text-[#A855F7] hover:underline">
                  KVKK Aydınlatma Metni
                </Link>
                .
              </>
            ) : null}
          </p>
        ))}

        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold mt-10 mb-3">{section.title}</h2>
            {section.blocks.map((block, bi) => {
              if (block.type === "p") {
                return (
                  <p
                    key={bi}
                    className="text-[15px] leading-relaxed text-gray-600 mb-4"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul
                    key={bi}
                    className="list-disc pl-5 text-[15px] leading-relaxed text-gray-600 mb-4"
                  >
                    {block.items.map((item, i) => renderItem(item, i))}
                  </ul>
                );
              }
              return (
                <div key={bi} className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm my-4">
                    <thead>
                      <tr>
                        {block.head.map((h) => (
                          <th
                            key={h}
                            className="bg-gray-50 p-3 text-left font-semibold border border-gray-200"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className="p-3 text-gray-600 border border-gray-200 align-top"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </section>
        ))}
      </div>
    </Container>
  );
}
