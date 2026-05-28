import Link from "next/link";
import Image from "next/image";

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%2C%20%C2%BFpodr%C3%ADan%20darme%20mayor%20informaci%C3%B3n%3F";

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
