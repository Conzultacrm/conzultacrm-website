import Link from "next/link";

const sectors = [
  {
    icon: "🏢",
    name: "Inmobiliarias",
    desc: "Gestiona prospectos, propiedades y cierres. Automatiza seguimiento de leads y coordina agentes en tiempo real.",
    features: ["Seguimiento de leads inmobiliarios", "Catálogo de propiedades", "Coordinación de visitas", "Comisiones automáticas"],
    color: "#2563EB",
  },
  {
    icon: "🏗️",
    name: "Construcción",
    desc: "Controla proyectos, proveedores y clientes desde un solo sistema integrado con tu operación en campo.",
    features: ["Gestión de proyectos en obra", "Control de contratistas", "Seguimiento de licitaciones", "Reportes de avance"],
    color: "#7C3AED",
  },
  {
    icon: "⚙️",
    name: "Maquinaria & Industria",
    desc: "Administra tu flota, servicio técnico y relaciones con distribuidores desde el CRM.",
    features: ["Control de flotilla", "Órdenes de servicio", "Mantenimiento preventivo", "Garantías y refacciones"],
    color: "#06B6D4",
  },
  {
    icon: "🛍️",
    name: "Retail & Comercio",
    desc: "Conecta tus canales de venta, fideliza clientes y gestiona tu fuerza de ventas con un CRM adaptado a retail.",
    features: ["Omnicanal integrado", "Programas de lealtad", "Gestión de inventario CRM", "Análisis de comportamiento"],
    color: "#10B981",
  },
  {
    icon: "🏥",
    name: "Salud & Clínicas",
    desc: "Gestiona pacientes, citas y seguimiento post-consulta. Automatiza recordatorios y mide la satisfacción del paciente.",
    features: ["Agenda y seguimiento de pacientes", "Recordatorios automáticos", "Historial de interacciones", "Métricas de satisfacción"],
    color: "#EF4444",
  },
  {
    icon: "📦",
    name: "Distribuidoras & Logística",
    desc: "Controla tu cadena de distribución, gestiona distribuidores y da seguimiento completo a pedidos y cobranza.",
    features: ["Gestión de distribuidores", "Seguimiento de pedidos", "Control de cobranza", "Integración con ERP"],
    color: "#F59E0B",
  },
];

// Additional industries shown as chips
const moreIndustries = [
  "Agencias de Marketing",
  "Servicios Financieros",
  "Despachos Jurídicos",
  "Educación & EdTech",
  "Telecomunicaciones",
  "Seguros & Fianzas",
  "Consultoras",
  "Restaurantes & Hospitality",
  "Tecnología & SaaS",
  "Agropecuario",
  "Turismo & Viajes",
  "Automotriz",
];

export default function SectorsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Sectores que atendemos</p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Soluciones CRM
            <br />
            <span className="gradient-text">diseñadas para tu industria</span>
          </h2>
          <p className="text-neutral-500 text-lg">
            No implementamos Zoho de la misma manera para todos. Cada sector tiene
            sus propios procesos — y nuestras configuraciones lo reflejan.
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="group relative overflow-hidden bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-350 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ background: sector.color }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${sector.color}12`,
                    border: `1.5px solid ${sector.color}22`,
                  }}
                >
                  {sector.icon}
                </div>

                <h3
                  className="text-lg font-bold text-neutral-900 mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {sector.name}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  {sector.desc}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {sector.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: sector.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className="text-sm font-semibold transition-colors flex items-center gap-1"
                  style={{ color: sector.color, fontFamily: "var(--font-syne)" }}
                >
                  Ver caso de uso
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* More industries */}
        <div className="mt-12 bg-neutral-50 border border-neutral-200 rounded-2xl p-7">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
            <div>
              <p
                className="text-sm font-bold text-neutral-700 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                También implementamos en
              </p>
              <p className="text-neutral-500 text-sm mt-0.5">
                Estas son solo algunas — si tienes un proceso comercial, podemos ayudarte.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {moreIndustries.map((industry) => (
              <span
                key={industry}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-600 bg-white border border-neutral-200 hover:border-blue-300 hover:text-blue-700 transition-colors"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {industry}
              </span>
            ))}
            <Link
              href="/contacto"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              + La tuya →
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-neutral-500 text-sm mb-4">
            Si tu empresa tiene un proceso de ventas o clientes que gestionar, Zoho CRM Plus puede transformarlo.
          </p>
          <Link href="/contacto" className="btn-outline">
            Habla con un especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
