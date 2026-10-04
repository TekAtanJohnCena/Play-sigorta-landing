import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sigorta Cüzdanı | Acente Yazılımı, Poliçe Takip Sistemi & Sigorta CRM",
  description:
    "Türkiye'nin yeni nesil sigorta acente yazılımı. Poliçe yenileme takibi, çapraz satış motoru, acente CRM, WhatsApp entegrasyonu. 14 gün ücretsiz deneyin. KVKK uyumlu, Türkiye sunucuları.",
  keywords:
    "sigorta acente yazılımı, poliçe takip sistemi, sigorta CRM, acente yönetim sistemi, poliçe yenileme takibi, çapraz satış yazılımı, sigorta otomasyonu, acente dijitalleşme, WhatsApp sigorta bildirimi, KVKK uyumlu sigorta yazılımı",
  authors: [{ name: "Sigorta Cüzdanı" }],
  creator: "Sigorta Cüzdanı",
  publisher: "Sigorta Cüzdanı",
  metadataBase: new URL("https://sigortacuzdani.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sigortacuzdani.com",
    title: "Sigorta Cüzdanı | Acente Yazılımı & Poliçe Takip Sistemi",
    description:
      "Yenileme kaçaklarını sıfıra indirin. Çapraz satış fırsatlarını otomatik tespit edin. Türkiye'nin modern sigorta acente yazılımı.",
    siteName: "Sigorta Cüzdanı",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sigorta Cüzdanı - Acente Yazılımı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigorta Cüzdanı | Acente Yazılımı & Poliçe Takip Sistemi",
    description:
      "Yenileme kaçaklarını sıfıra indirin. Çapraz satış fırsatlarını otomatik tespit edin.",
    images: ["/og-image.png"],
    creator: "@sigortacuzdani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Sigorta Cüzdanı",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "1990",
                priceCurrency: "TRY",
                priceValidUntil: "2026-12-31",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "50",
              },
              description:
                "Sigorta acenteleri için poliçe yenileme takibi, çapraz satış ve CRM yazılımı",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sigorta Cüzdanı",
              url: "https://sigortacuzdani.com",
              logo: "https://sigortacuzdani.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Satış",
                availableLanguage: "Turkish",
              },
              sameAs: [
                "https://twitter.com/sigortacuzdani",
                "https://linkedin.com/company/sigortacuzdani",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
