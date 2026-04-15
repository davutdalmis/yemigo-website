import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-purple-800 px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Restoraninizi dijitallestirin.
          </h2>
          <p className="mt-4 text-lg text-purple-200 max-w-xl mx-auto">
            14 gun ucretsiz deneme baslatin. Kredi karti gerekmez.
          </p>
          <div className="mt-10">
            <Button variant="white" size="lg">
              Hemen Baslayin
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
