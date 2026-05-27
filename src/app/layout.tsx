import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const syne = Syne({
  variable: "--font-syne",
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
  metadataBase: new URL("https://conzultacrm.com"),
  title: {
    default: "ConZultaCRM — Partner Certificado Zoho CRM Plus en México",
    template: "%s | ConZultaCRM",
  },
  description:
    "Implementamos Zoho CRM Plus para empresas mexicanas. Automatiza ventas, servicio al cliente y marketing con el ecosistema Zoho certificado.",
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
    url: "https://conzultacrm.com",
    siteName: "ConZultaCRM",
    title: "ConZultaCRM — Partner Certificado Zoho CRM Plus en México",
    description:
      "Implementamos Zoho CRM Plus para empresas mexicanas. Automatiza ventas, servicio al cliente y marketing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConZultaCRM — Partner Certificado Zoho CRM Plus",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
