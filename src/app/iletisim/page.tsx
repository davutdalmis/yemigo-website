"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren from "@/components/animations/StaggerChildren";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "E-posta",
    value: "info@yemigo.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 (212) 000 00 00",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Istanbul, Turkiye",
  },
  {
    icon: Clock,
    label: "Calisma Saatleri",
    value: "Pazartesi - Cuma, 09:00 - 18:00",
  },
];

const SUBJECT_OPTIONS = [
  "Genel Bilgi",
  "Demo Talebi",
  "Fiyat Teklifi",
  "Teknik Destek",
  "Diger",
];

const inputClasses =
  "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 focus:outline-none";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    restaurant: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `Ad Soyad: ${form.name}%0D%0AE-posta: ${form.email}%0D%0ATelefon: ${form.phone}%0D%0ARestoran: ${form.restaurant}%0D%0AKonu: ${form.subject}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:info@yemigo.com?subject=${encodeURIComponent(form.subject || "Iletisim Formu")}&body=${body}`;
  }

  return (
    <>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <SectionHeader
            label="Iletisim"
            title="Bizimle iletisime gecin."
            subtitle="Sorulariniz, onerileriniz veya demo talepleriniz icin bize ulasabilirsiniz."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left: Contact Form */}
            <ScrollReveal direction="left">
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    placeholder="Adiniz ve soyadiniz"
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
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+90 (5XX) XXX XX XX"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="restaurant"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Restoran Adi
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    value={form.restaurant}
                    onChange={handleChange}
                    placeholder="Isletmenizin adi"
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
                      Konu secin
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
                    placeholder="Mesajinizi yazin..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Mesaj Gonderin
                </Button>
              </form>
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
