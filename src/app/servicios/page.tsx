import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedPageHero from "@/components/AnimatedPageHero";

export const metadata: Metadata = {
  title: "Servicios — ConZultaCRM",
  description:
    "Servicios de implementación, capacitación y soporte de Zoho CRM Plus para empresas en México. Descubre cómo ConZultaCRM transforma tu operación comercial.",
};

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20ConZultaCRM";

const services = [
  {
    id: "implementacion",
    icon: "⚙️",
    title: "Implementación Zoho CRM Plus",
    subtitle: "De cero a producción en 4–8 semanas",
    description:
      "Configuramos y personalizamos Zoho CRM Plus para que se adapte 100% a tus procesos de negocio, no al revés. Desde el diseño de flujos hasta la migración de datos.",
    includes: [
      "Diagnóstico y análisis de procesos actuales",
      "Diseño de arquitectura CRM personalizada",
      "Configuración de módulos y flujos de trabajo",
      "Migración de datos históricos (Excel, otro CRM)",
      "Integración con sistemas existentes (ERP, facturación)",
      "Configuración de automatizaciones y alertas",
      "Pruebas de calidad y ajustes previos al go-live",
      "Lanzamiento en producción acompañado",
    ],
    timeline: "4–8 semanas",
    color: "#2563EB",
  },
  {
    id: "capacitacion",
    icon: "🎓",
    title: "Capacitación & Adopción",
    subtitle: "Tu equipo usando el CRM desde el día uno",
    description:
      "La implementación perfecta no sirve si tu equipo no la adopta. Nuestro programa de capacitación garantiza que todos los usuarios dominen Zoho CRM desde el primer día.",
    includes: [
      "Sesiones de capacitación en vivo (online o presencial)",
      "Manuales de usuario personalizados para tu empresa",
      "Videos tutoriales grabados para referencia",
      "Capacitación diferenciada por rol (ventas, soporte, gerencia)",
      "Sesiones de práctica guiada con datos reales",
      "Evaluación de adopción post-capacitación",
      "Sesiones de refuerzo a las 4 y 8 semanas",
      "Acceso a biblioteca de recursos Zoho",
    ],
    timeline: "1–2 semanas",
    color: "#7C3AED",
  },
  {
    id: "soporte",
    icon: "🤝",
    title: "Soporte Continuo",
    subtitle: "Acompañamiento mensual garantizado",
    description:
      "No desaparecemos después de implementar. Ofrecemos planes de soporte continuo que incluyen mantenimiento, optimizaciones y acceso a las nuevas funcionalidades de Zoho.",
    includes: [
      "Soporte técnico en español (WhatsApp + email + videollamada)",
      "SLA de respuesta: menos de 2 horas hábiles",
      "Revisiones mensuales de rendimiento del CRM",
      "Actualizaciones y nuevas configuraciones incluidas",
      "Reportes mensuales de uso y adopción",
      "Alertas proactivas ante incidencias",
      "Acceso a nuevas funcionalidades de Zoho",
      "Consultas ilimitadas por WhatsApp",
    ],
    timeline: "Mensual / Anual",
    color: "#06B6D4",
  },
  {
    id: "integraciones",
    icon: "🔗",
    title: "Integraciones & Automatizaciones",
    subtitle: "Conecta Zoho con todo tu ecosistema tech",
    description:
      "Conectamos Zoho CRM Plus con tus sistemas actuales para crear un ecosistema digital unificado. Sin islas de información, sin trabajo manual duplicado.",
    includes: [
      "Integración con WhatsApp Business API",
      "Conexión con ERPs (SAP, CONTPAQi, Aspel, etc.)",
      "Automatizaciones con Zapier/Zoho Flow",
      "Integración con sistemas de facturación CFDI",
      "Conexión con redes sociales y plataformas de marketing",
      "API customizada para integraciones específicas",
      "Webhooks y automatizaciones avanzadas",
      "Sincronización de calendarios y correo",
    ],
    timeline: "1–3 semanas",
    color: "#10B981",
  },
];

function ServiciosDecorativeCard() {
  const steps = [
    { n: "01", label: "Diagnóstico", color: "#60A5FA" },
    { n: "02", label: "Implementación", color: "#A78BFA" },
    { n: "03", label: "Capacitación", color: "#34D399" },
    { n: "04", label: "Soporte continuo", color: "#F9A8D4" },
  ];
  return (
    <div className="relative w-72">
      <div
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
        style={{ animation: "float 7s ease-in-out infinite" }}
      >
        <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
          Tu ruta de implementación
        </p>
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ background: s.color + "40", border: `1.5px solid ${s.color}` }}
              >
                {s.n}
              </div>
              <div className="flex-1">
                <div className="h-px mb-1" style={{ background: s.color + "50" }} />
                <p className="text-white text-sm font-medium">{s.label}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="text-blue-300 text-xs">→</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-white/10">
          <p className="text-blue-200 text-xs text-center">
            ⏱ 4–8 semanas hasta producción
          </p>
        </div>
      </div>
      <div
        className="absolute -top-3 -right-3 bg-emerald-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
        style={{ animation: "float 5s ease-in-out infinite 0.5s" }}
      >
        Go-live garantizado
      </div>
    </div>
  );
}

export default function ServiciosPage() {
  return (
    <div className="pt-16">
      <AnimatedPageHero
        theme="teal"
        badge="Nuestros servicios"
        title={
          <>
            Todo lo que necesitas para{" "}
            <span className="gradient-text-light">aprovechar Zoho al máximo</span>
          </>
        }
        description="Desde la implementación inicial hasta el soporte continuo, te acompañamos en cada etapa de tu transformación digital con Zoho CRM Plus."
        decorative={<ServiciosDecorativeCard />}
      />

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                      style={{
                        background: `${service.color}12`,
                        border: `1.5px solid ${service.color}25`,
                      }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: service.color, fontFamily: "var(--font-syne)" }}
                      >
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  <h2
                    className="text-3xl font-bold text-neutral-900 mb-4"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm text-neutral-500">Tiempo estimado:</span>
                    <span
                      className="badge"
                      style={{
                        background: `${service.color}10`,
                        color: service.color,
                        border: `1px solid ${service.color}20`,
                      }}
                    >
                      {service.timeline}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Link href="/contacto" className="btn-primary text-sm">
                      Solicitar información
                    </Link>
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Includes list */}
                <div className={`bg-neutral-50 border border-neutral-200 rounded-2xl p-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p
                    className="text-sm font-bold text-neutral-700 mb-4 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    ¿Qué incluye?
                  </p>
                  <ul className="space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: `${service.color}15`,
                            border: `1px solid ${service.color}30`,
                          }}
                        >
                          <svg
                            className="w-3 h-3"
                            style={{ color: service.color }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-neutral-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GoTo Connect ── */}
      <section id="goto-connect" className="section-padding bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Content */}
            <div>
              <div className="mb-5">
                <Image
                  src="/logos/goto-logo.svg"
                  alt="GoTo Connect"
                  width={160}
                  height={44}
                  className="h-10 w-auto"
                />
              </div>
              <span className="badge badge-blue mb-3 inline-block">Telefonía en la nube</span>
              <h2
                className="text-3xl font-bold text-neutral-900 mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                GoTo Connect: Comunicación{" "}
                <span className="gradient-text">unificada para tu empresa</span>
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                Reemplaza tu central telefónica con una solución de telefonía en la
                nube que integra llamadas, videollamadas y mensajería en equipo.
                Se conecta de forma nativa con Zoho CRM para registrar llamadas
                automáticamente, sincronizar contactos y hacer click-to-dial desde
                el CRM.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Sistema telefónico VoIP para toda la empresa",
                  "Videollamadas y reuniones virtuales integradas",
                  "Mensajería en equipo y chat interno",
                  "Integración nativa con Zoho CRM",
                  "Grabación de llamadas y reportes de actividad",
                  "App móvil para equipos en campo",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ED6C2B]/15 border border-[#ED6C2B]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#ED6C2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Link href="/contacto" className="btn-primary text-sm">
                  Consultar solución GoTo
                </Link>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Feature card */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
              <p
                className="text-sm font-bold text-neutral-700 mb-6 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Comunicación unificada: todo en uno
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📞", title: "Telefonía VoIP", desc: "Extensiones, IVR, cola de llamadas y más sin hardware costoso" },
                  { icon: "🎥", title: "Video & Reuniones", desc: "Videollamadas HD con pantalla compartida para hasta 250 participantes" },
                  { icon: "💬", title: "Mensajería de Equipo", desc: "Chat interno, canales por área y mensajes directos" },
                  { icon: "🔗", title: "Integrado con Zoho", desc: "Registro automático de llamadas, click-to-dial y sync de contactos" },
                ].map((feat) => (
                  <div
                    key={feat.title}
                    className="p-4 rounded-xl bg-neutral-50 border border-neutral-100"
                  >
                    <div className="text-2xl mb-2">{feat.icon}</div>
                    <p className="font-bold text-neutral-900 text-sm mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                      {feat.title}
                    </p>
                    <p className="text-neutral-500 text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Peaking.ai ── */}
      <section id="peaking-ai" className="section-padding bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Decorative card */}
            <div
              className="relative rounded-2xl p-8 overflow-hidden hidden lg:block"
              style={{ background: "linear-gradient(135deg, #1A0A0A 0%, #7B1A1A 50%, #C0392B 100%)" }}
            >
              {/* Background orb */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #FF6B35, transparent 70%)" }}
              />
              <div className="relative">
                <Image
                  src="/logos/peaking-logo.png"
                  alt="Peaking.ai"
                  width={160}
                  height={44}
                  className="h-10 w-auto mb-6 brightness-0 invert"
                />
                <p
                  className="text-3xl font-bold text-white mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Miles de productos.
                  <br />
                  <span className="text-orange-300">Vendidos y cobrados.</span>
                </p>
                <p className="text-red-200 text-sm leading-relaxed mb-6">
                  El agente de ventas con IA diseñado específicamente para
                  distribuidores industriales en Latinoamérica.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cotización IA", "Quote-to-Cash", "Catálogos masivos", "LatAm"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-5">
                <Image
                  src="/logos/peaking-logo.png"
                  alt="Peaking.ai"
                  width={140}
                  height={40}
                  className="h-9 w-auto"
                />
              </div>
              <span className="badge badge-blue mb-3 inline-block">Distribuidores industriales</span>
              <h2
                className="text-3xl font-bold text-neutral-900 mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Peaking.ai — Agente de ventas{" "}
                <span className="gradient-text">con IA para distribuidores</span>
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-4">
                Peaking.ai es el agente de ventas inteligente creado para
                distribuidores industriales en Latinoamérica. Automatiza el proceso
                completo de cotización a cobranza con IA, permitiendo a tu equipo
                vender cientos de productos sin esfuerzo manual.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-6">
                Ofrecemos consultoría e implementación de Peaking.ai para empresas
                que distribuyen maquinaria, refacciones, materiales industriales y
                otros productos de catálogo extenso.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Cotización automática desde catálogos de miles de SKUs",
                  "Automatización del flujo quote-to-cash",
                  "Cobranza inteligente y seguimiento de pagos",
                  "Integración con sistemas ERP y CRM",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-600 text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#C0392B20", border: "1px solid #C0392B30" }}
                    >
                      <svg className="w-3 h-3" style={{ color: "#C0392B" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Link href="/contacto" className="btn-primary text-sm">
                  Consultar implementación
                </Link>
                <a
                  href="https://www.peaking.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  Ver Peaking.ai →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-16 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl font-bold text-neutral-900 mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¿Cuánto cuesta implementar Zoho CRM Plus?
          </h2>
          <p className="text-neutral-500 mb-6 text-lg max-w-2xl mx-auto">
            El costo depende del tamaño de tu empresa, número de usuarios y módulos
            requeridos. Hacemos diagnóstico gratuito y te presentamos una propuesta
            económica sin sorpresas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contacto" className="btn-primary">
              Obtener propuesta gratuita
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
