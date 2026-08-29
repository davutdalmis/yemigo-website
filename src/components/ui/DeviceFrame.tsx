import Image from "next/image";

type DeviceFrameProps = {
  variant?: "desktop" | "laptop";
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  aspect?: "16/9" | "16/10" | "3/2" | "4/3" | "mbp16";
  fit?: "cover" | "contain" | "fill";
};

const ASPECT_CLASS: Record<NonNullable<DeviceFrameProps["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "16/10": "aspect-[16/10]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  // MacBook Pro 16" native ekran oranı (3456×2234 = 1728:1117 ≈ 1.547)
  mbp16: "aspect-[1728/1117]",
};

/**
 * DeviceFrame — yemigo cihaz çerçevesi.
 *
 * variant="desktop": Apple Studio Display tarzı monitör (boyun + ayak).
 * variant="laptop":  MacBook Pro 16" tarzı (notch + ince bezel + hinge wedge).
 */
export default function DeviceFrame({
  variant = "desktop",
  src,
  alt,
  priority = false,
  className = "",
  aspect = "16/9",
  fit = "cover",
}: DeviceFrameProps) {
  const aspectClass = ASPECT_CLASS[aspect];
  const objectClass =
    fit === "cover"
      ? "object-cover"
      : fit === "fill"
        ? "object-fill"
        : "object-contain";

  if (variant === "laptop") {
    return (
      <div className={`mx-auto w-full ${className}`}>
        {/* Lid / display */}
        <div className="relative rounded-[16px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 px-[8px] pt-[16px] pb-[10px] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25),_0_40px_80px_-32px_rgba(0,0,0,0.4)] ring-1 ring-black/40">
          {/* Notch — MacBook Pro 16" tarzı */}
          <div className="absolute left-1/2 top-[2px] z-10 h-[9px] w-[22%] -translate-x-1/2 rounded-b-[6px] bg-black ring-1 ring-black/60">
            <div className="absolute right-[18%] top-1/2 h-[2px] w-[2px] -translate-y-1/2 rounded-full bg-zinc-700" />
          </div>
          {/* Screen */}
          <div className={`relative overflow-hidden rounded-[4px] bg-zinc-100 ${aspectClass}`}>
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 90vw, 720px"
              className={objectClass}
            />
            {/* Subtle screen reflection (top-left) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent"
            />
          </div>
        </div>
        {/* Hinge / base wedge — biraz daha geniş, trapezoid */}
        <div
          className="relative mx-auto h-[12px] bg-gradient-to-b from-zinc-900 via-zinc-950 to-black md:h-[14px]"
          style={{
            width: "102%",
            clipPath: "polygon(1% 0, 99% 0, 100% 100%, 0 100%)",
          }}
        >
          {/* Trackpad slot hint */}
          <div className="absolute left-1/2 top-0 h-[3px] w-[20%] -translate-x-1/2 rounded-b-md bg-zinc-800" />
        </div>
        {/* Soft floor shadow */}
        <div
          aria-hidden
          className="mx-auto mt-3 h-3 w-[80%] rounded-[50%] bg-black/12 blur-2xl"
        />
      </div>
    );
  }

  // Desktop monitor (Apple Studio Display tarzı)
  return (
    <div className={`mx-auto w-full ${className}`}>
      {/* Monitor display body — ince bezel */}
      <div className="relative rounded-[12px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 px-[6px] pt-[6px] pb-[14px] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25),_0_40px_80px_-32px_rgba(0,0,0,0.4)] ring-1 ring-black/40">
        {/* Screen */}
        <div className={`relative overflow-hidden rounded-[4px] bg-zinc-100 ${aspectClass}`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 90vw, 640px"
            className={objectClass}
          />
          {/* Subtle screen reflection (top-left) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent"
          />
        </div>
        {/* Brand dot on bottom chin */}
        <div className="absolute bottom-[5px] left-1/2 h-[2px] w-[16px] -translate-x-1/2 rounded-full bg-zinc-600/60" />
      </div>
      {/* Neck — thin vertical */}
      <div className="mx-auto h-[28px] w-[14%] bg-gradient-to-b from-zinc-900 to-zinc-950 md:h-[40px]" />
      {/* Base — wider, pill-shaped bottom */}
      <div className="mx-auto h-[10px] w-[42%] rounded-b-[16px] bg-gradient-to-b from-zinc-800 to-zinc-950 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] md:h-[14px]" />
      {/* Soft floor shadow */}
      <div
        aria-hidden
        className="mx-auto mt-4 h-3 w-[72%] rounded-[50%] bg-black/12 blur-2xl"
      />
    </div>
  );
}
