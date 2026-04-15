export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YemiGO",
    url: "https://yemigo.com",
    logo: "https://yemigo.com/logo.png",
    description: "Restoran yonetim platformu. POS, kurye takip, online siparis ve platform entegrasyonlari.",
    email: "info@yemigo.com",
    sameAs: [],
    foundingDate: "2024",
    knowsAbout: ["Restoran Yonetimi", "POS Sistemi", "Online Siparis", "Kurye Takip"],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "YemiGO",
    url: "https://yemigo.com",
    description: "Restoran yonetim platformu",
    inLanguage: "tr",
  };
}

export function getProductSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, iOS, Android, Web",
    offers: {
      "@type": "Offer",
      price: "999",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
