import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-syne",   // mismo nombre → cero cambios en componentes
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.conzultacrm.com"),
  title: {
    default: "ConZultaCRM | Zoho Authorized Partner en México",
    template: "%s | ConZultaCRM",
  },
  description:
    "Implementamos Zoho CRM Plus para empresas mexicanas. Automatiza ventas, servicio al cliente y marketing con Zoho CRM Plus.",
  keywords: [
    "Zoho CRM",
    "CRM México",
    "Zoho Partner",
    "CRM Plus",
    "automatización de ventas",
    "ConZultaCRM",
    "Zoho implementación",
    "CRM LATAM",
  ],
  authors: [{ name: "ConZultaCRM" }],
  creator: "ConZultaCRM",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.conzultacrm.com",
    siteName: "ConZultaCRM",
    title: "ConZultaCRM | Zoho Authorized Partner en México",
    description:
      "Implementamos Zoho CRM Plus para empresas mexicanas. Automatiza ventas, servicio al cliente y marketing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConZultaCRM | Zoho Authorized Partner en México",
    description:
      "Implementamos Zoho CRM Plus para empresas en México y LATAM.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ConZultaCRM",
  url: "https://www.conzultacrm.com",
  logo: "https://www.conzultacrm.com/logos/logo-horizontal.png",
  description:
    "Zoho Authorized Partner en México y LATAM. Implementamos Zoho CRM Plus para empresas medianas y en expansión.",
  foundingDate: "2020",
  areaServed: ["MX", "LATAM"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-55-8404-6430",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.linkedin.com/company/conzulta-crm",
    "https://www.instagram.com/conzulta_crm/",
    "https://www.facebook.com/ConZultaOficial",
  ],
  employee: {
    "@type": "Person",
    name: "Julio César Martínez Bejarano",
    jobTitle: "CEO",
    sameAs: "https://www.linkedin.com/in/julio-cesar-martinez-bejarano-4553b548/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KQ95TZXJ');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-neutral-50">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQ95TZXJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
