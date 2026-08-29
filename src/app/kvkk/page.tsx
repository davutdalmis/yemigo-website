import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | YemiGO",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında YemiGO kişisel verilerin işlenmesi, aktarılması, saklanması ve ilgili kişi hakları hakkında ayrıntılı aydınlatma metni.",
};

const LAST_UPDATED = "2 Haziran 2026";

type Item = string | { label: string; text: string };

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: Item[] }
  | { type: "table"; head: string[]; rows: string[][] };

type Section = { title: string; blocks: Block[] };

const INTRO_PARAGRAPHS = [
  "İşbu Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni (“Aydınlatma Metni”), 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK” veya “Kanun”) ve ilgili ikincil mevzuat kapsamında, veri sorumlusu sıfatıyla YemiGO (“YemiGO”, “Şirket” veya “Veri Sorumlusu”) tarafından hazırlanmıştır.",
  "Aydınlatma Metni; yemigo.com internet sitesini (“Site”) ziyaret eden, iletişim ve başvuru formlarını dolduran, e-posta yoluyla bizimle iletişime geçen ve hizmetlerimizle ilgilenen gerçek kişilerin (“İlgili Kişi”) kişisel verilerinin hangi amaçlarla, hangi hukuki sebeplere dayanılarak işlendiğini, kimlere ve hangi amaçlarla aktarılabileceğini, saklama sürelerini, veri güvenliğine ilişkin tedbirleri ve İlgili Kişi'nin Kanun kapsamındaki haklarını, Kanun'un 10. maddesinde düzenlenen aydınlatma yükümlülüğü çerçevesinde açıklamak amacıyla kamuoyunun ve İlgili Kişilerin bilgisine sunulmuştur.",
  "YemiGO, kişisel verilerin korunmasını temel bir hak olarak kabul eder ve kişisel verileri Kanun'un 4. maddesinde sayılan genel ilkelere uygun olarak işler.",
];

const SECTIONS: Section[] = [
  {
    title: "1. Tanımlar ve Kısaltmalar",
    blocks: [
      {
        type: "p",
        text: "İşbu Aydınlatma Metni'nde yer alan ve Kanun'da tanımlanan başlıca kavramlar aşağıdaki anlamları taşır:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Açık Rıza",
            text: "Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza.",
          },
          {
            label: "Anonim Hâle Getirme",
            text: "Kişisel verilerin, başka verilerle eşleştirilerek dahi hiçbir surette kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemeyecek hâle getirilmesi.",
          },
          {
            label: "İlgili Kişi",
            text: "Kişisel verisi işlenen gerçek kişi.",
          },
          {
            label: "Kişisel Veri",
            text: "Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi.",
          },
          {
            label: "Özel Nitelikli Kişisel Veri",
            text: "Irk, etnik köken, siyasi düşünce, felsefi inanç, din, mezhep veya diğer inançlar, kılık ve kıyafet, dernek, vakıf ya da sendika üyeliği, sağlık, cinsel hayat, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili veriler ile biyometrik ve genetik veriler.",
          },
          {
            label: "Kişisel Verilerin İşlenmesi",
            text: "Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, saklanması, değiştirilmesi, açıklanması, aktarılması, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlem.",
          },
          {
            label: "Veri İşleyen",
            text: "Veri sorumlusunun verdiği yetkiye dayanarak onun adına kişisel verileri işleyen gerçek veya tüzel kişi.",
          },
          {
            label: "Veri Sorumlusu",
            text: "Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek veya tüzel kişi.",
          },
          {
            label: "KVK Kurulu / Kurumu",
            text: "Kişisel Verileri Koruma Kurulu / Kişisel Verileri Koruma Kurumu.",
          },
          {
            label: "VERBİS",
            text: "Veri Sorumluları Sicil Bilgi Sistemi.",
          },
          {
            label: "Tebliğ",
            text: "Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ.",
          },
        ],
      },
    ],
  },
  {
    title: "2. Veri Sorumlusunun Kimliği",
    blocks: [
      {
        type: "p",
        text: "Kişisel verileriniz, KVKK'nın 3. maddesinde tanımlanan veri sorumlusu sıfatıyla, aşağıda kimlik ve iletişim bilgileri yer alan YemiGO tarafından işbu Aydınlatma Metni'nde açıklanan kapsam ve koşullarda işlenmektedir.",
      },
      {
        type: "ul",
        items: [
          { label: "Veri Sorumlusu", text: "YemiGO" },
          {
            label: "Ticari Unvan",
            text: "[Şirketinizin tam ticari unvanı buraya eklenecektir]",
          },
          {
            label: "Adres",
            text: "[Şirketinizin açık adresi buraya eklenecektir]",
          },
          {
            label: "MERSİS / Vergi No",
            text: "[Şirketinizin MERSİS veya vergi numarası buraya eklenecektir]",
          },
          { label: "E-posta", text: "info@yemigo.com" },
          { label: "İnternet Sitesi", text: "yemigo.com" },
        ],
      },
    ],
  },
  {
    title: "3. Kişisel Verilerin İşlenmesine İlişkin Temel İlkeler",
    blocks: [
      {
        type: "p",
        text: "YemiGO, kişisel verilerinizi Kanun'un 4. maddesinde düzenlenen aşağıdaki genel ilkelere uygun olarak işler:",
      },
      {
        type: "ul",
        items: [
          "Hukuka ve dürüstlük kurallarına uygun olma",
          "Doğru ve gerektiğinde güncel olma",
          "Belirli, açık ve meşru amaçlar için işlenme",
          "İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma",
          "İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme",
        ],
      },
    ],
  },
  {
    title: "4. İşlenen Kişisel Veriler ve Veri Kategorileri",
    blocks: [
      {
        type: "p",
        text: "Site üzerinden ve bizimle kurduğunuz iletişim kapsamında, aşağıdaki kategorilerde kişisel verileriniz işlenebilmektedir. YemiGO, Site üzerinden özel nitelikli kişisel veri toplamayı amaçlamaz; bu nedenle formlar aracılığıyla tarafımıza özel nitelikli kişisel veri iletmemenizi rica ederiz.",
      },
      {
        type: "table",
        head: ["Veri Kategorisi", "Veri Türleri"],
        rows: [
          ["Kimlik Bilgileri", "Ad, soyad"],
          ["İletişim Bilgileri", "E-posta adresi, telefon numarası"],
          [
            "Müşteri İşlem Bilgileri",
            "Başvuru/talep konusu, mesaj içeriği, işletme (restoran) adı, demo ve fiyat teklifi talepleri, talep geçmişi",
          ],
          [
            "İşlem Güvenliği ve Teknik Bilgiler",
            "IP adresi, tarayıcı ve cihaz bilgileri, işletim sistemi, site gezinme ve log kayıtları, çerez kayıtları",
          ],
          [
            "Pazarlama Bilgileri",
            "Çerez tercihleri ve (varsa) ticari elektronik ileti izinleri",
          ],
        ],
      },
    ],
  },
  {
    title: "5. Kişisel Verilerin İşlenme Amaçları",
    blocks: [
      {
        type: "p",
        text: "Kişisel verileriniz, Kanun'un 4., 5. ve 6. maddelerinde belirtilen ilke ve şartlara uygun olarak aşağıdaki amaçlarla işlenmektedir:",
      },
      {
        type: "ul",
        items: [
          "İletişim ve başvuru taleplerinizin alınması, kaydedilmesi, değerlendirilmesi ve yanıtlanması",
          "Demo, fiyat teklifi ve bilgi taleplerinin yürütülmesi ve sonuçlandırılması",
          "Ürün ve hizmetlerimiz hakkında bilgilendirme yapılması ve müşteri ilişkilerinin yönetilmesi",
          "Sözleşme öncesi görüşmelerin ve müzakere süreçlerinin yürütülmesi",
          "Sitenin çalıştırılması ile bilgi güvenliğinin, sürekliliğinin ve denetiminin sağlanması",
          "Açık rızanıza bağlı çerezler aracılığıyla Site kullanımının analiz edilmesi ve hizmet kalitesinin iyileştirilmesi",
          "Talep, şikâyet ve önerilerinizin yönetilmesi",
          "Hukuki yükümlülüklerin yerine getirilmesi ile yetkili kurum ve kuruluşlara bilgi verilmesi",
          "Hukuki uyuşmazlıkların yönetilmesi ve bir hakkın tesisi, kullanılması veya korunması",
        ],
      },
    ],
  },
  {
    title: "6. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri",
    blocks: [
      {
        type: "p",
        text: "Kişisel verileriniz, Kanun'un 5. maddesinde öngörülen aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:",
      },
      {
        type: "ul",
        items: [
          {
            label: "m.5/2(a)",
            text: "Kanunlarda açıkça öngörülmesi",
          },
          {
            label: "m.5/2(c)",
            text: "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması (teklif ve talep süreçleri)",
          },
          {
            label: "m.5/2(ç)",
            text: "Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması",
          },
          {
            label: "m.5/2(e)",
            text: "Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması",
          },
          {
            label: "m.5/2(f)",
            text: "İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması (Site güvenliği ve müşteri ilişkileri)",
          },
          {
            label: "m.5/1",
            text: "Yukarıdaki şartlardan birinin bulunmadığı hâllerde açık rızanız (zorunlu olmayan analitik ve pazarlama çerezleri bakımından)",
          },
        ],
      },
    ],
  },
  {
    title: "7. Kişisel Verilerin Toplanma Yöntemi",
    blocks: [
      {
        type: "p",
        text: "Kişisel verileriniz; internet sitemizdeki iletişim ve başvuru formları, e-posta yoluyla gerçekleştirdiğiniz yazışmalar, telefon görüşmeleri ve siteyi ziyaretiniz sırasında çerezler ile benzeri teknolojiler aracılığıyla, elektronik ortamda tamamen veya kısmen otomatik yollarla toplanmaktadır. Bu kapsamda toplanan veriler, işbu Aydınlatma Metni'nde belirtilen amaçlar ve hukuki sebepler doğrultusunda işlenmektedir.",
      },
    ],
  },
  {
    title: "8. Kişisel Verilerin Aktarılması",
    blocks: [
      {
        type: "p",
        text: "Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesiyle sınırlı olarak ve Kanun'un 8. ve 9. maddelerinde öngörülen şartlara uygun şekilde, aşağıdaki taraflara aktarılabilmektedir:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Tedarikçiler ve Hizmet Sağlayıcılar",
            text: "Bilişim altyapısı, bulut, barındırma (hosting), kimlik doğrulama, veritabanı ve e-posta hizmeti aldığımız iş ortaklarımıza (örneğin Google Firebase / Google Cloud; sunucuları yurt dışında bulunabilmektedir)",
          },
          {
            label: "Hukuken Yetkili Kamu Kurum ve Kuruluşları",
            text: "Mevzuatın öngördüğü hallerde, ilgili mevzuat hükümlerine göre bilgi ve belge almaya yetkili kamu kurum ve kuruluşları ile adli mercilere",
          },
          {
            label: "Hukuki Danışmanlar ve Denetçiler",
            text: "Hukuki süreçlerin yürütülmesi ve denetim faaliyetleri kapsamında, gizlilik yükümlülüğü altındaki danışman ve denetçilere",
          },
        ],
      },
      {
        type: "p",
        text: "Yurt dışına aktarım, Kanun'un 9. maddesi kapsamında; yeterli korumanın bulunduğu ülkelere veya yeterli korumanın bulunmaması hâlinde tarafların yeterli korumayı yazılı olarak taahhüt ettiği ve Kurul'un izninin bulunduğu hâllerde ya da açık rızanızın alınması suretiyle, gerekli teknik ve idari tedbirler sağlanarak gerçekleştirilir.",
      },
    ],
  },
  {
    title: "9. Kişisel Verilerin Saklanması ve İmhası",
    blocks: [
      {
        type: "p",
        text: "Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı ile saklama süreleri kadar muhafaza edilir. Saklama süresinin sona ermesi veya işlemeyi gerektiren sebeplerin ortadan kalkması hâlinde verileriniz, Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hâle Getirilmesi Hakkında Yönetmelik hükümleri uyarınca silinir, yok edilir veya anonim hâle getirilir. Başlıca saklama süreleri aşağıdaki gibidir:",
      },
      {
        type: "table",
        head: ["Veri / Süreç", "Saklama Süresi"],
        rows: [
          [
            "İletişim ve başvuru kayıtları",
            "Talebin sonuçlandırılmasından itibaren 3 yıl",
          ],
          [
            "Çerez ve log kayıtları",
            "İlgili mevzuat ve teknik gereklilikler doğrultusunda, çerez türüne göre belirlenen süre",
          ],
          [
            "Ticari elektronik ileti onayları (varsa)",
            "Onayın geri alınmasından itibaren 3 yıl",
          ],
          [
            "Hukuki uyuşmazlığa konu veriler",
            "İlgili dava/talep bakımından geçerli zamanaşımı süresi boyunca",
          ],
        ],
      },
    ],
  },
  {
    title: "10. Kişisel Verilerin Güvenliğine İlişkin Teknik ve İdari Tedbirler",
    blocks: [
      {
        type: "p",
        text: "YemiGO, Kanun'un 12. maddesi uyarınca kişisel verilerin hukuka aykırı olarak işlenmesini ve verilere hukuka aykırı erişilmesini önlemek ile verilerin muhafazasını sağlamak amacıyla, uygun güvenlik düzeyini temin etmeye yönelik aşağıdaki teknik ve idari tedbirleri alır:",
      },
      {
        type: "ul",
        items: [
          {
            label: "Teknik Tedbirler",
            text: "Verilerin SSL/TLS ile şifrelenerek aktarılması, güvenli bulut altyapısında saklanması, erişim ve yetkilendirme kontrolleri, güvenlik duvarı, log kayıtlarının tutulması, düzenli yedekleme, güncel yazılım ve sızma testi/zafiyet taramalarının yapılması.",
          },
          {
            label: "İdari Tedbirler",
            text: "Erişim yetkilerinin görev tanımıyla sınırlandırılması, çalışanların ve hizmet sağlayıcıların gizlilik yükümlülüğü altına alınması, kişisel veri güvenliği konusunda farkındalığın artırılması ve veri işleyenlerin Kanun'a uygunluğunun gözetilmesi.",
          },
        ],
      },
    ],
  },
  {
    title: "11. İlgili Kişinin Hakları",
    blocks: [
      {
        type: "p",
        text: "Kanun'un 11. maddesi uyarınca, veri sorumlusuna başvurarak kendinizle ilgili aşağıdaki haklara sahipsiniz:",
      },
      {
        type: "ul",
        items: [
          "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
          "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme",
          "Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
          "Kişisel verilerinizin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
          "Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme",
          "Kanun'un 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme",
          "Düzeltme, silme ve yok etme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme",
          "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
          "Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
        ],
      },
    ],
  },
  {
    title: "12. İlgili Kişinin Haklarını Kullanması ve Başvuru Yöntemi",
    blocks: [
      {
        type: "p",
        text: "Yukarıda yer alan haklarınıza ilişkin taleplerinizi, “Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ” hükümlerine uygun olarak; adınız, soyadınız, başvuru yazılı ise imzanız, varsa bildirime esas elektronik posta adresiniz ile talebinizin konusunu açıkça belirterek iletebilirsiniz. Başvurularınızı info@yemigo.com adresine “KVKK Başvurusu” konulu bir e-posta ile gönderebilirsiniz.",
      },
      {
        type: "p",
        text: "YemiGO, başvurunuzu talebin niteliğine göre en kısa sürede ve her hâlükârda en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırır. Ancak işlemin ayrıca bir maliyet gerektirmesi hâlinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret talep edilebilir. Başvurunuzun reddedilmesi, verilen yanıtın yetersiz bulunması veya süresinde yanıt verilmemesi hâlinde; yanıtı öğrendiğiniz tarihten itibaren 30 gün ve her hâlde başvuru tarihinden itibaren 60 gün içinde Kişisel Verileri Koruma Kurulu'na şikâyette bulunma hakkına sahipsiniz.",
      },
    ],
  },
  {
    title: "13. Aydınlatma Metni'nde Yapılacak Değişiklikler ve Yürürlük",
    blocks: [
      {
        type: "p",
        text: "YemiGO, işbu Aydınlatma Metni'ni mevzuattaki değişiklikler, Kurul kararları ve iş süreçlerindeki gelişmeler doğrultusunda her zaman güncelleme hakkını saklı tutar. Güncellenen metin, Site üzerinde yayımlandığı tarih itibarıyla yürürlüğe girer ve geçerli olur. En güncel metne her zaman bu sayfa üzerinden erişebilirsiniz.",
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

export default function KvkkPage() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-32 pb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          KVKK Aydınlatma Metni
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Son güncelleme: {LAST_UPDATED}
        </p>

        {INTRO_PARAGRAPHS.map((text, i) => (
          <p
            key={i}
            className="text-[15px] leading-relaxed text-gray-600 mb-4"
          >
            {text}
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
