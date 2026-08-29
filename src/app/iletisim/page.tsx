"use client";

import { useState, useEffect, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Timer, CheckCircle2, Package } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { submitContactRequest } from "@/lib/contact";

// Aynı tarayıcıdan tekrar gelindiğinde "talep gönderildi" durumunu hatırlamak için.
const STORAGE_KEY = "yemigo_contact_request";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "E-posta",
    value: "info@yemigo.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "0532 056 34 00",
  },
  {
    icon: Timer,
    label: "Yanıt Süresi",
    value: "Ortalama 24 saat içinde dönüş",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "İstanbul, Türkiye",
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pazartesi - Cuma, 09:00 - 18:00",
  },
];

const SUBJECT_OPTIONS = [
  "Genel Bilgi",
  "Demo Talebi",
  "Fiyat Teklifi",
  "Teknik Destek",
  "Diğer",
];

const inputClasses =
  "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 focus:outline-none";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  restaurant: "",
  subject: "",
  message: "",
};

function formatSubmitted(iso: string) {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  // Bu tarayıcıda kayıtlı bir talep gönderim zamanı (ISO) — varsa form yerine
  // teşekkür paneli gösterilir. localStorage'dan client'ta okunur.
  const [submittedAt, setSubmittedAt] = useState<string | null>(null);
  const [justSubmitted, setJustSubmitted] = useState(false);
  // Fiyatlandırma sayfasından "?paket=...&donem=..." ile gelinmişse, seçilen
  // paketi formda gösterir ve gönderilen mesaja ekleriz (mail'de görünür).
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSubmittedAt(saved);
    } catch {
      // localStorage erişilemezse sorun değil — form normal gösterilir.
    }
  }, []);

  // Statik export'ta useSearchParams Suspense gerektirir; URL'i client'ta
  // doğrudan window.location'dan okumak daha sade ve güvenli.
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const paket = params.get("paket");
      const donem = params.get("donem");
      if (paket) {
        setSelectedPlan(paket);
        setSelectedPeriod(
          donem === "yillik" ? "Yıllık" : donem === "aylik" ? "Aylık" : null
        );
        // Paket seçilmişse konuyu otomatik "Fiyat Teklifi" yap.
        setForm((prev) => ({
          ...prev,
          subject: prev.subject || "Fiyat Teklifi",
        }));
      }
    } catch {
      // URL okunamazsa form normal gösterilir.
    }
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      // Seçilen paketi mesajın başına ekle ki gelen mail'de hangi paketin
      // talep edildiği net görünsün.
      const planLine = selectedPlan
        ? `İlgilenilen paket: ${selectedPlan}${
            selectedPeriod ? ` (${selectedPeriod})` : ""
          }`
        : null;
      const payload = planLine
        ? { ...form, message: `${planLine}\n\n${form.message}` }
        : form;
      await submitContactRequest(payload);
      const now = new Date().toISOString();
      try {
        localStorage.setItem(STORAGE_KEY, now);
      } catch {
        // yazılamazsa da panel yine de gösterilir (oturum boyunca)
      }
      setSubmittedAt(now);
      setJustSubmitted(true);
      setStatus("idle");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("İletişim formu gönderilemedi:", err);
      setStatus("error");
    }
  }

  function handleNewRequest() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // yok say
    }
    setSubmittedAt(null);
    setJustSubmitted(false);
    setStatus("idle");
    setSelectedPlan(null);
    setSelectedPeriod(null);
  }

  return (
    <>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <SectionHeader
            label="İletişim"
            title="Bizimle iletişime geçin."
            subtitle="Sorularınız, önerileriniz veya demo talepleriniz için bize ulaşabilirsiniz."
          />

          {/* Yanıt süresi vurgusu */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Timer size={16} />
              Başvurulara ortalama 24 saat içinde dönüş yapıyoruz
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left: Form veya Teşekkür paneli */}
            <ScrollReveal direction="left">
              {submittedAt ? (
                <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 size={36} className="text-green-600" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-gray-900">
                    {justSubmitted ? "Mesajınız bize ulaştı!" : "Talebiniz bizde."}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {justSubmitted
                      ? "Teşekkürler! Başvurunuzu aldık, ekibimiz en kısa sürede inceleyecek."
                      : "Bu tarayıcıdan daha önce bir talep gönderdiniz. Ekibimiz sizinle ilgileniyor."}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                    <Timer size={16} />
                    Ortalama 24 saat içinde dönüş yapıyoruz
                  </div>
                  <p className="mt-4 text-xs text-gray-400">
                    Gönderim: {formatSubmitted(submittedAt)}
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleNewRequest}
                      className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
                    >
                      Yeni bir talep gönder
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {selectedPlan && (
                    <div className="flex items-start gap-3 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3.5">
                      <Package
                        size={18}
                        className="mt-0.5 shrink-0 text-indigo-600"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-indigo-900">
                          Seçtiğiniz paket: {selectedPlan}
                          {selectedPeriod ? ` · ${selectedPeriod}` : ""}
                        </p>
                        <p className="mt-0.5 text-xs text-indigo-700/80">
                          Talebiniz bu paketle ilgili teklif olarak iletilecek.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPlan(null);
                          setSelectedPeriod(null);
                        }}
                        className="shrink-0 text-xs font-medium text-indigo-500 transition-colors hover:text-indigo-700"
                      >
                        Kaldır
                      </button>
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Adınız ve soyadınız"
                      className={inputClasses}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ornek@email.com"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        inputMode="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="05XX XXX XX XX"
                        className={inputClasses}
                      />
                      <p className="mt-1.5 text-xs text-gray-400">
                        0 veya 5 ile başlayabilirsiniz.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="restaurant"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Restoran Adı
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      value={form.restaurant}
                      onChange={handleChange}
                      placeholder="İşletmenizin adı"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Konu
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="" disabled>
                        Konu seçin
                      </option>
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Mesajınızı yazın..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Gönderiliyor..." : "Mesaj Gönderin"}
                  </Button>

                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Bir hata oluştu, mesajınız gönderilemedi. Lütfen tekrar
                      deneyin veya info@yemigo.com adresine yazın.
                    </p>
                  )}
                </form>
              )}
            </ScrollReveal>

            {/* Right: Contact Info Cards */}
            <ScrollReveal direction="right">
              <StaggerChildren className="space-y-5">
                {CONTACT_CARDS.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.label}
                      className="bg-gray-50 rounded-xl p-6 flex items-start gap-4"
                    >
                      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-purple-100 flex-shrink-0">
                        <Icon
                          size={20}
                          className="text-[#A855F7]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {card.label}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </StaggerChildren>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
