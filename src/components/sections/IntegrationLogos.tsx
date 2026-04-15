import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { INTEGRATIONS } from "@/lib/constants";

export default function IntegrationLogos() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionHeader
          label="Entegrasyon"
          title="Desteklenen platformlar."
        />

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {INTEGRATIONS.map((platform) => (
            <div key={platform.id} className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl bg-gray-50 shadow-sm border border-gray-100 flex items-center justify-center">
                <span
                  className="text-2xl font-bold"
                  style={{ color: platform.color }}
                >
                  {platform.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
