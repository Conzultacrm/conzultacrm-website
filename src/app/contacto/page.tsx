import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — ConZultaCRM",
  description:
    "Contáctanos para una demo gratuita de Zoho CRM Plus. Somos ConZultaCRM, partner certificado de Zoho en México. Respuesta en menos de 2 horas hábiles.",
};

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%2C%20%C2%BFpodr%C3%ADan%20darme%20mayor%20informaci%C3%B3n%3F";

// Placeholder calendar link — replace when user provides URL
const CALENDAR_URL = "https://calendly.com/conzultacrm";

const contactOptions = [
  {
    icon: "💬",
    title: "WhatsApp directo",
    desc: "Respuesta inmediata en horario hábil. La forma más rápida de hablar con nosotros.",
    action: "Abrir WhatsApp",
    href: WA_URL,
    color: "#25D366",
    external: true,
  },
  {
    icon: "📅",
    title: "Agendar llamada",
    desc: "Reserva un espacio de 30 min con nuestro equipo para un diagnóstico personalizado.",
    action: "Ver disponibilidad",
    href: CALENDAR_URL,
    color: "#2563EB",
    external: true,
  },
  {
    icon: "✉️",
    title: "Correo electrónico",
    desc: "Escríbenos a hola@conzultacrm.com. Respuesta garantizada en menos de 24 horas.",
    action: "Enviar email",
    href: "mailto:hola@conzultacrm.com",
    color: "#7C3AED",
    external: false,
  },
];

export default function ContactoPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative py-24 lg:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #001A4D 0%, #003A8C 50%, #4C1D95 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge badge-white mb-6">Hablemos</span>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¿Listo para transformar
            <br />
            <span className="gradient-text-light">tu operación comercial?</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Agenda una demo gratuita de 30 minutos. Sin presión, sin compromiso.
            Te mostramos cómo Zoho CRM Plus puede funcionar específicamente para tu empresa.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-14 bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {contactOptions.map((opt) => (
              <a
                key={opt.title}
                href={opt.href}
                target={opt.external ? "_blank" : undefined}
                rel={opt.external ? "noopener noreferrer" : undefined}
                className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg hover:border-transparent transition-all duration-300 text-left block"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${opt.color}12`,
                    border: `1.5px solid ${opt.color}25`,
                  }}
                >
                  {opt.icon}
                </div>
                <h3
                  className="font-bold text-neutral-900 mb-1.5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {opt.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  {opt.desc}
                </p>
                <span
                  className="text-sm font-semibold flex items-center gap-1 transition-colors"
                  style={{ color: opt.color }}
                >
                  {opt.action}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main contact form section */}
      <section className="section-padding mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            {/* Left info */}
            <div className="lg:col-span-2">
              <p className="section-label mb-3">Formulario de contacto</p>
              <h2
                className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-5"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Cuéntanos sobre
                tu empresa
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Completa el formulario y un especialista de ConZultaCRM te
                contactará en menos de 2 horas hábiles para conocer tu caso
                y planificar la mejor estrategia CRM para tu empresa.
              </p>

              {/* What to expect */}
              <div className="space-y-4">
                <p
                  className="text-sm font-bold text-neutral-700 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Qué pasa después de enviar
                </p>
                {[
                  { step: "01", text: "Revisamos tu solicitud en menos de 2 horas hábiles" },
                  { step: "02", text: "Un especialista te contacta para agendar la demo" },
                  { step: "03", text: "Demo personalizada de 30 min para tu empresa" },
                  { step: "04", text: "Propuesta económica detallada sin compromiso" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                    >
                      {item.step}
                    </span>
                    <p className="text-neutral-600 text-sm leading-relaxed pt-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Sin costo", "Sin compromiso", "Respuesta rápida", "100% en español"].map((tag) => (
                  <span key={tag} className="badge badge-blue text-xs">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Zoho form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="py-12 bg-white border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                &lt;2h
              </p>
              <p className="text-neutral-500 text-sm">Tiempo de respuesta en horario hábil</p>
            </div>
            <div>
              <p className="text-2xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                México & LATAM
              </p>
              <p className="text-neutral-500 text-sm">Atención en toda la región hispanohablante</p>
            </div>
            <div>
              <p className="text-2xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                100% en español
              </p>
              <p className="text-neutral-500 text-sm">Soporte, implementación y capacitación</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
