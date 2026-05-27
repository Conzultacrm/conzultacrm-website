import type { Metadata } from "next";
import Link from "next/link";

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

export default function ServiciosPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
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
          <span className="badge badge-white mb-6">Nuestros servicios</span>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Todo lo que necesitas para{" "}
            <span className="gradient-text-light">aprovechar Zoho al máximo</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Desde la implementación inicial hasta el soporte continuo, te acompañamos
            en cada etapa de tu transformación digital con Zoho CRM Plus.
          </p>
        </div>
      </section>

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
