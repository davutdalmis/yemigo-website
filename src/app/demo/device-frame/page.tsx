import Container from "@/components/ui/Container";
import DeviceFrame from "@/components/ui/DeviceFrame";

export const metadata = {
  title: "DeviceFrame Demo | YemiGO",
  robots: { index: false, follow: false },
};

const SCREENSHOT_SRC = "/img/wpf-pos-salon.webp";

export default function DeviceFrameDemoPage() {
  return (
    <main className="min-h-screen bg-apple-bg-soft py-24">
      <Container>
        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-apple-border-soft bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-apple-text-soft backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Önizleme
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-apple-text sm:text-5xl">
            DeviceFrame — Masaüstü Monitör
          </h1>
          <p className="mt-4 text-base text-apple-text-soft">
            WPF POS — Salon ekranı, masaüstü monitör çerçevesinde.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold text-apple-text">Masaüstü Monitör</h2>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-apple-text-muted">
              3:2
            </span>
          </div>
          <DeviceFrame
            src={SCREENSHOT_SRC}
            alt="YemiGO POS — Salon ekranı"
            aspect="3/2"
            priority
          />
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-apple-border-soft bg-white p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-apple-text-soft">
            Kullanım
          </h3>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-100">
{`import DeviceFrame from "@/components/ui/DeviceFrame";

<DeviceFrame
  src="/img/wpf-pos-salon.webp"
  alt="YemiGO POS"
  aspect="3/2"
/>`}
          </pre>
        </div>
      </Container>
    </main>
  );
}
