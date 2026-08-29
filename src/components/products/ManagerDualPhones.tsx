import Image from "next/image";

/**
 * Manager çift telefon kompozisyonu — ana sayfadaki görünümün aynısı.
 * iOS önde (sola eğik), Android arkada (sağa eğik), üst üste binmiş.
 * Kendi sınırlayıcı kutusunu doldurur; sığdırmak için sabit-oranlı bir
 * kapsayıcı içinde kullanın.
 */
export default function ManagerDualPhones() {
  return (
    <div className="relative flex h-[90%] w-[82%] items-center justify-center">
      {/* Android — arkada, sağa kaymış, sağa hafif eğik */}
      <div className="absolute h-full aspect-[1021/2116] translate-x-[24%] rotate-[4deg] drop-shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
        <Image
          src="/img/manager-android.webp"
          alt="YemiGO Manager — Android"
          fill
          sizes="(max-width: 1024px) 45vw, 18vw"
          className="object-contain"
        />
      </div>
      {/* iOS — önde, sola kaymış, sola hafif eğik */}
      <div className="absolute z-10 h-full aspect-[1131/2224] -translate-x-[24%] -rotate-[4deg] drop-shadow-[0_22px_45px_rgba(15,23,42,0.22)]">
        <Image
          src="/img/manager-anasayfa.webp"
          alt="YemiGO Manager — iOS"
          fill
          sizes="(max-width: 1024px) 45vw, 18vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
