"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%2C%20%C2%BFpodr%C3%ADan%20darme%20mayor%20informaci%C3%B3n%3F";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        transparent
          ? "bg-transparent border-transparent"
          : "bg-white/92 backdrop-blur-2xl shadow-sm border-b border-neutral-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo + Zoho Partner co-branding lockup */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src={transparent ? "/logos/logo-blanco-clean.svg" : "/logos/logo-horizontal.png"}
              alt="ConZultaCRM"
              width={300}
              height={80}
              className="h-16 lg:h-20 w-auto"
              priority
            />
            <div
              className={`hidden sm:block h-6 w-px transition-colors duration-400 ${
                transparent ? "bg-white/25" : "bg-neutral-200"
              }`}
            />
            <div
              className={`hidden sm:block rounded-lg px-2 py-1 transition-all duration-400 ${
                transparent
                  ? "bg-white/10 backdrop-blur-sm"
                  : "bg-white border border-neutral-200 shadow-sm"
              }`}
            >
              <Image
                src="/logos/zoho-partner.png"
                alt="Zoho Authorized Partner"
                width={110}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? transparent
                        ? "text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-white/70"
                        : "text-[#004AC6] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-[#004AC6] after:to-[#7C3AED]"
                      : transparent
                      ? "text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                      : "text-neutral-600 hover:text-[#004AC6] hover:bg-neutral-100/80 rounded-lg"
                  }`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                transparent
                  ? "text-white bg-white/10 hover:bg-white/20 border border-white/20"
                  : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200"
              }`}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <Link href="/contacto" className="btn-primary text-sm py-2 px-5">
              Solicitar Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              transparent
                ? "text-white hover:bg-white/10"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-neutral-200 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? "bg-blue-50 text-[#004AC6]"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-[#004AC6]"
                  }`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 flex flex-col gap-2 border-t border-neutral-100 mt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Escríbenos por WhatsApp
              </a>
              <Link href="/contacto" className="btn-primary justify-center text-sm">
                Solicitar Demo Gratuita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
