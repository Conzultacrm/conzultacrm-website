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
    name: "Maquinaria",
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
    icon: "🏭",
    name: "PyMEs & Manufactureras",
    desc: "Escala tu operación sin contratar más personal. Automatiza desde la cotización hasta la facturación.",
    features: ["Cotizaciones automáticas", "Seguimiento post-venta", "Integración con ERP", "Dashboards ejecutivos"],
    color: "#F59E0B",
  },
  {
    icon: "🏥",
    name: "Servicios Profesionales",
    desc: "Consultoras, despachos y agencias que necesitan CRM para gestionar relaciones a largo plazo con sus clientes.",
    features: ["Gestión de cuentas clave", "Facturación por proyecto", "Portal de clientes", "Reportes de rentabilidad"],
    color: "#EF4444",
  },
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
            Soluciones CRM{" "}
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

        <div className="mt-10 text-center">
          <p className="text-neutral-500 text-sm mb-4">
            ¿No ves tu industria? Trabajamos con cualquier empresa que tenga proceso comercial.
          </p>
          <Link href="/contacto" className="btn-outline">
            Habla con un especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
