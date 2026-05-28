import type { Metadata } from "next";
import Link from "next/link";
import AnimatedPageHero from "@/components/AnimatedPageHero";

export const metadata: Metadata = {
  title: "Soluciones Zoho CRM Plus — ConZultaCRM",
  description:
    "Implementaciones de Zoho CRM Plus para inmobiliarias, construcción, maquinaria, retail y PyMEs en México. Soluciones CRM diseñadas para cada industria.",
};

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20quiero%20conocer%20la%20soluci%C3%B3n%20CRM%20para%20mi%20empresa";

const solutions = [
  {
    id: "crm-plus",
    icon: "🌐",
    sector: "Plataforma",
    title: "Zoho CRM Plus: El ecosistema completo",
    description:
      "Zoho CRM Plus no es solo un CRM — es un ecosistema de 8+ aplicaciones integradas que cubren ventas, servicio al cliente, marketing, análisis y colaboración en una sola suscripción.",
    benefits: [
      "Un solo login para todas las aplicaciones",
      "Datos unificados entre ventas y soporte",
      "Un precio fijo por usuario al mes",
      "Actualizaciones automáticas incluidas",
      "Integración nativa entre todos los módulos",
      "IA integrada (Zia) para predicciones y automatizaciones",
    ],
    color: "#2563EB",
    highlight: true,
  },
  {
    id: "inmobiliarias",
    icon: "🏢",
    sector: "Inmobiliaria",
    title: "CRM para Inmobiliarias",
    description:
      "Gestiona el ciclo completo de ventas inmobiliarias: captación de leads desde portales, seguimiento de clientes, coordinación de agentes y cierre de contratos, todo en un solo sistema.",
    benefits: [
      "Captura de leads desde Inmuebles24, Vivanuncios, tu web",
      "Catálogo de propiedades integrado en el CRM",
      "Automatización de seguimiento a prospectos",
      "Coordinación y agenda de visitas",
      "Cálculo y seguimiento de comisiones",
      "Reportes de conversión por canal y agente",
    ],
    color: "#004AC6",
    highlight: false,
  },
  {
    id: "construccion",
    icon: "🏗️",
    sector: "Construcción",
    title: "CRM para Construcción",
    description:
      "Controla proyectos, gestiona relaciones con contratistas y clientes, da seguimiento a licitaciones y visualiza el avance de obra desde un dashboard ejecutivo en tiempo real.",
    benefits: [
      "Seguimiento de licitaciones y propuestas",
      "Gestión de relaciones con contratistas",
      "Control de proyectos integrado con CRM",
      "Seguimiento de pagos y cobranza",
      "Coordinación de equipos en campo",
      "Reportes de rentabilidad por proyecto",
    ],
    color: "#7C3AED",
    highlight: false,
  },
  {
    id: "maquinaria",
    icon: "⚙️",
    sector: "Maquinaria",
    title: "CRM para Maquinaria e Industria",
    description:
      "Administra tu flota, controla el servicio técnico posventa, gestiona distribuidores y da seguimiento completo a cada máquina vendida desde la cotización hasta el mantenimiento.",
    benefits: [
      "Control de flotilla y equipos vendidos",
      "Órdenes de servicio y mantenimiento preventivo",
      "Gestión de garantías y refacciones",
      "Portal de distribuidores integrado",
      "Seguimiento de satisfacción post-venta",
      "Análisis de vida útil por equipo",
    ],
    color: "#06B6D4",
    highlight: false,
  },
  {
    id: "retail",
    icon: "🛍️",
    sector: "Retail & PyMEs",
    title: "CRM para Retail y Comercio",
    description:
      "Conecta tus canales de venta (tienda física, e-commerce, redes sociales), fideliza clientes con programas de lealtad y gestiona toda tu fuerza de ventas en tiempo real.",
    benefits: [
      "Unificación de canales online y offline",
      "Programas de lealtad y puntos",
      "Segmentación avanzada de clientes",
      "Campañas de marketing automatizadas",
      "Gestión de devoluciones y garantías",
      "Analytics de comportamiento de compra",
    ],
    color: "#10B981",
    highlight: false,
  },
];

function SolucionesDecorativeCard() {
  const sectors = [
    { icon: "🏢", label: "Inmobiliaria", color: "#60A5FA" },
    { icon: "🏗️", label: "Construcción", color: "#A78BFA" },
    { icon: "⚙️", label: "Maquinaria", color: "#22D3EE" },
    { icon: "🛍️", label: "Retail", color: "#34D399" },
    { icon: "🌐", label: "CRM Plus", color: "#F9A8D4" },
  ];
  return (
    <div className="relative w-72">
      <div
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
        style={{ animation: "float 8s ease-in-out infinite" }}
      >
        <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
          Industrias que atendemos
        </p>
        <div className="grid grid-cols-2 gap-2">
          {sectors.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 px-2.5 py-2 rounded-xl"
              style={{ background: s.color + "15", border: `1px solid ${s.color}30` }}
            >
              <span className="text-base">{s.icon}</span>
              <span className="text-white text-xs font-medium">{s.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-2.5 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <span className="text-base">➕</span>
            <span className="text-blue-200 text-xs">Tu sector</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-white/10">
          <p className="text-blue-200 text-xs text-center">
            Configuración 100% personalizada
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SolucionesPage() {
  return (
    <div className="pt-16">
      <AnimatedPageHero
        theme="violet"
        badge="Soluciones por industria"
        title={
          <>
            Zoho CRM Plus adaptado{" "}
            <span className="gradient-text-light gu-rose">a tu sector</span>
          </>
        }
        description="Cada industria tiene procesos únicos. Implementamos Zoho CRM Plus con configuraciones especializadas para que tu equipo opere con máxima eficiencia desde el primer día."
        decorative={<SolucionesDecorativeCard />}
      />

      {/* Solutions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {solutions.map((sol, idx) => (
              <div
                key={sol.id}
                id={sol.id}
                className={`grid lg:grid-cols-5 gap-10 items-start ${
                  sol.highlight
                    ? "bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 rounded-3xl p-8"
                    : ""
                }`}
              >
                {/* Description — 3 cols */}
                <div className={`lg:col-span-3 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                      style={{
                        background: `${sol.color}12`,
                        border: `1.5px solid ${sol.color}25`,
                      }}
                    >
                      {sol.icon}
                    </div>
                    <span
                      className="badge"
                      style={{
                        background: `${sol.color}12`,
                        color: sol.color,
                        border: `1px solid ${sol.color}25`,
                      }}
                    >
                      {sol.sector}
                    </span>
                  </div>

                  <h2
                    className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {sol.title}
                  </h2>
                  <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  <div className="flex gap-3">
                    <Link href="/contacto" className="btn-primary text-sm">
                      Ver caso de uso
                    </Link>
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm"
                    >
                      Consultar
                    </a>
                  </div>
                </div>

                {/* Benefits — 2 cols */}
                <div className={`lg:col-span-2 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                    <p
                      className="text-sm font-bold text-neutral-600 mb-4 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Lo que resuelve
                    </p>
                    <ul className="space-y-2.5">
                      {sol.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-neutral-600">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                            style={{
                              background: `${sol.color}12`,
                              border: `1px solid ${sol.color}25`,
                              color: sol.color,
                            }}
                          >
                            ✓
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white border-t border-neutral-100">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="badge badge-blue">Diagnóstico sin costo</span>
          </div>
          <h2
            className="text-3xl font-bold text-neutral-900 mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¿Tu industria no está en la lista?
          </h2>
          <p className="text-neutral-500 mb-8">
            Trabajamos con cualquier empresa que tenga un proceso comercial.
            Hacemos el diagnóstico y te decimos cómo Zoho CRM Plus puede
            funcionar específicamente para tu negocio.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar diagnóstico gratuito
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
