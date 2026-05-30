"use client";

import Link from "next/link";
import Image from "next/image";

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%2C%20%C2%BFpodr%C3%ADan%20darme%20mayor%20informaci%C3%B3n%3F";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/conzulta-crm",
    hoverColor: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/conzulta_crm/",
    hoverColor: "#E4405F",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ConZultaOficial",
    hoverColor: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const links = {
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Soluciones", href: "/soluciones" },
    { label: "Contacto", href: "/contacto" },
  ],
  soluciones: [
    { label: "Zoho CRM Plus", href: "/soluciones#crm-plus" },
    { label: "Implementación", href: "/servicios#implementacion" },
    { label: "Capacitación", href: "/servicios#capacitacion" },
    { label: "Soporte", href: "/servicios#soporte" },
  ],
  sectores: [
    { label: "Inmobiliarias", href: "/soluciones#inmobiliarias" },
    { label: "Construcción", href: "/soluciones#construccion" },
    { label: "Retail & PyMEs", href: "/soluciones#retail" },
    { label: "Maquinaria", href: "/soluciones#maquinaria" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-white">
      {/* Top CTA band */}
      <div
        className="py-14 px-4"
        style={{
          background: "linear-gradient(135deg, #001A4D 0%, #004AC6 50%, #4C1D95 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label text-blue-200 mb-3">¿Listo para crecer?</p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Transforma tu empresa con Zoho CRM Plus
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Agenda una demo gratuita y descubre cómo ConZultaCRM puede automatizar
            tus ventas, servicio y marketing en un solo ecosistema.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar Demo Gratuita
            </Link>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <WhatsAppIcon className="w-4 h-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logos/logo-horizontal.png"
                alt="ConZultaCRM"
                width={260}
                height={68}
                className="h-16 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              Zoho Authorized Partners para México y Latinoamérica.
              Implementamos soluciones CRM que potencian el crecimiento de empresas
              medianas y en expansión.
            </p>

            {/* Zoho Partner badge */}
            <div className="inline-block bg-white rounded-xl p-2 mb-6">
              <Image
                src="/logos/zoho-partner.png"
                alt="Zoho Authorized Partner"
                width={190}
                height={62}
                className="h-12 w-auto"
              />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 mb-5">
              {SOCIAL.map((s) => (
                <SocialButton key={s.label} {...s} />
              ))}
            </div>

            <p className="text-neutral-500 text-xs">
              Zoho es una marca registrada de Zoho Corporation Pvt. Ltd.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {links.empresa.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-neutral-400 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-white font-bold text-sm mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Soluciones
            </h4>
            <ul className="space-y-2.5">
              {links.soluciones.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-neutral-400 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-white font-bold text-sm mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Sectores
            </h4>
            <ul className="space-y-2.5">
              {links.sectores.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-neutral-400 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4
                className="text-white font-bold text-sm mb-3 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Contacto
              </h4>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 text-sm hover:text-white transition-colors block mb-1.5"
              >
                +52 55 8404 6430
              </a>
              <a
                href="mailto:info@conzultacrm.com"
                className="text-neutral-400 text-sm hover:text-white transition-colors block"
              >
                info@conzultacrm.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-300 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} ConZultaCRM. Todos los derechos reservados.
          </p>
          <p className="text-neutral-400 text-xs text-center">
            México · Operación 100% Remota · LATAM
          </p>
          <div className="flex items-center gap-4">
            <Link href="/aviso-privacidad" className="text-neutral-400 text-xs hover:text-neutral-200 transition-colors">
              Privacidad
            </Link>
            <Link href="/contacto" className="text-neutral-400 text-xs hover:text-neutral-200 transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({
  label,
  href,
  hoverColor,
  icon,
}: {
  label: string;
  href: string;
  hoverColor: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-white hover:shadow-lg"
      style={
        {
          "--hover-color": hoverColor,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = hoverColor;
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 20px ${hoverColor}55`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
      }}
    >
      {icon}
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
