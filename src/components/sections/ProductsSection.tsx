import Image from "next/image";
import Link from "next/link";

const CRM_PLUS_URL =
  "https://store.zoho.com/ResellerCustomerSignUp.do?id=d71cea3d76bbe0f2db5a487a3822bf2e&locale=es";

const products = [
  {
    name: "Zoho CRM",
    tagline: "Motor de ventas",
    description:
      "Gestiona todo tu pipeline de ventas, clientes potenciales y oportunidades en un solo lugar. Con automatizaciones inteligentes, tu equipo cierra más deals en menos tiempo.",
    features: ["Pipeline visual", "Lead scoring", "Automatización de seguimiento", "Forecasting con IA"],
    color: "#E61E25",
    logoSrc: "/logos/zoho/crm.svg",
    signupUrl: "https://store.zoho.com/ResellerCustomerSignUp.do?id=52f70e0b0b745d091f379e91c99ac01f&locale=es",
  },
  {
    name: "Zoho Desk",
    tagline: "Servicio al cliente",
    description:
      "Centraliza todos los tickets de soporte provenientes de email, WhatsApp, chat y redes sociales. Ofrece respuestas rápidas y consistentes con IA integrada.",
    features: ["Multi-canal unificado", "SLA automáticos", "Base de conocimiento", "Reportes de CSAT"],
    color: "#F28A30",
    logoSrc: "/logos/zoho/desk.svg",
    signupUrl: "https://store.zoho.com/ResellerCustomerSignUp.do?id=f84b39f7823d8d462be233c19abe8c1d&locale=es",
  },
  {
    name: "Zoho Projects",
    tagline: "Gestión de proyectos",
    description:
      "Planifica y ejecuta las implementaciones de tus clientes con control total. Asigna tareas, gestiona tiempos y documenta avances en tiempo real.",
    features: ["Gantt interactivo", "Seguimiento de horas", "Portafolio de proyectos", "Integración CRM"],
    color: "#009DD9",
    logoSrc: "/logos/zoho/projects.png",
    signupUrl: "https://store.zoho.com/ResellerCustomerSignUp.do?id=bc09ec251c0fa0e40c0cdbe5eea89ab5&locale=es",
  },
  {
    name: "Zoho SalesIQ",
    tagline: "Engagement en sitio web",
    description:
      "Identifica visitantes en tu sitio web, inicia conversaciones proactivas y convierte más prospectos con chatbots inteligentes y tracking de comportamiento.",
    features: ["Chat en vivo", "Chatbots IA", "Identificación de visitantes", "Lead conversion"],
    color: "#00BFA5",
    logoSrc: "/logos/zoho/salesiq.svg",
    signupUrl: "https://store.zoho.com/ResellerCustomerSignUp.do?id=26c0ee131c0e1408e2b19537f3495f97&locale=es",
  },
  {
    name: "Zoho Analytics",
    tagline: "Business Intelligence",
    description:
      "Toma decisiones basadas en datos reales. Crea dashboards interactivos que conectan información de ventas, servicio, marketing y operaciones en una sola vista.",
    features: ["Dashboards personalizados", "IA predictiva", "Reportes automáticos", "Exportación avanzada"],
    color: "#FF6B35",
    logoSrc: "/logos/zoho/analytics.svg",
    signupUrl: "https://store.zoho.com/ResellerCustomerSignUp.do?id=28d61e8fc946e530193091771668210a&locale=es",
  },
  {
    name: "Zoho Social",
    tagline: "Marketing en redes sociales",
    description:
      "Programa, publica y analiza tu presencia en redes sociales. Conecta con tus prospectos en Instagram, Facebook y LinkedIn directamente desde el CRM.",
    features: ["Publicación programada", "Monitoreo de marca", "Análisis de engagement", "Integración CRM"],
    color: "#7B68EE",
    logoSrc: "/logos/zoho/social.svg",
    signupUrl: "https://store.zoho.com/ResellerCustomerSignUp.do?id=1a2b049920ba2e919a6fcbbb802b063f&locale=es",
  },
  {
    name: "Zoho Survey",
    tagline: "Encuestas y feedback",
    description:
      "Mide la satisfacción de clientes y empleados con encuestas profesionales. Conecta los resultados directamente al CRM para actuar sobre la retroalimentación en tiempo real.",
    features: ["Plantillas listas", "Lógica condicional", "Reportes automáticos", "Integración CRM"],
    color: "#9C27B0",
    logoSrc: "/logos/zoho/survey.svg",
    signupUrl: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d986bc5c2da4b0ab1cf949f6ff439b12&locale=es",
  },
  {
    name: "Zoho Sites",
    tagline: "Sitios web profesionales",
    description:
      "Crea y publica sitios web de alto impacto sin código. Conecta tus formularios de contacto directamente al CRM para capturar leads desde el primer clic.",
    features: ["Constructor drag & drop", "SEO integrado", "Formularios al CRM", "SSL incluido"],
    color: "#089949",
    logoSrc: "/logos/zoho/sites.svg",
    signupUrl: "https://store.zoho.com/ResellerCustomerSignUp.do?id=19382b51b6c3376241a09fe838b83399&locale=es",
  },
  {
    name: "Zoho Campaigns",
    tagline: "Email marketing",
    description:
      "Diseña y envía campañas de email personalizadas con segmentación avanzada. Mide aperturas, clics y conversiones con datos sincronizados al CRM en tiempo real.",
    features: ["Plantillas responsivas", "Segmentación avanzada", "A/B testing", "Reportes de ROI"],
    color: "#E44D2E",
    logoSrc: "/logos/zoho/campaigns.svg",
    signupUrl: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d71cea3d76bbe0f2db5a487a3822bf2e&locale=es",
  },
  {
    name: "Zoho Webinar",
    tagline: "Webinars y eventos virtuales",
    description:
      "Organiza y transmite webinars y eventos virtuales directamente desde tu plataforma Zoho. Conecta asistentes con el CRM para convertir participantes en prospectos calificados.",
    features: ["Sala virtual ilimitada", "Registro automático", "Seguimiento en CRM", "Grabaciones HD"],
    color: "#E42527",
    logoSrc: "/logos/zoho/webinar.svg",
    signupUrl: CRM_PLUS_URL,
  },
  {
    name: "Zoho Cliq",
    tagline: "Chat y colaboración interna",
    description:
      "Comunicación del equipo en tiempo real con canales, mensajes directos y bots inteligentes. Recibe notificaciones del CRM y mantén a tu equipo sincronizado sin salir de Zoho.",
    features: ["Canales temáticos", "Videollamadas HD", "Bots y automatizaciones", "Integración CRM"],
    color: "#226DB4",
    logoSrc: "/logos/zoho/cliq.svg",
    signupUrl: CRM_PLUS_URL,
  },
  {
    name: "Zoho Backstage",
    tagline: "Gestión de eventos",
    description:
      "Gestiona eventos presenciales y virtuales con control total: registro, agenda, speakers y networking. Ideal para lanzamientos, conferencias y capacitaciones corporativas.",
    features: ["Registro de asistentes", "Agenda interactiva", "App para asistentes", "Análisis de evento"],
    color: "#1E3A6E",
    logoSrc: "/logos/zoho/backstage.svg",
    signupUrl: CRM_PLUS_URL,
  },
  {
    name: "Zoho WorkDrive",
    tagline: "Gestión documental en la nube",
    description:
      "Almacenamiento y colaboración documental para equipos. Gestiona contratos, propuestas y documentos críticos con versionado, control de acceso y edición en tiempo real.",
    features: ["Almacenamiento colaborativo", "Control de versiones", "Comentarios en línea", "Integración CRM"],
    color: "#0EA5E9",
    logoSrc: "/logos/zoho/workdrive.svg",
    signupUrl: CRM_PLUS_URL,
  },
  {
    name: "Zoho PageSense",
    tagline: "Optimización de conversión",
    description:
      "Optimiza la conversión de tu sitio web con mapas de calor, grabaciones de sesiones y pruebas A/B. Entiende cómo navegan tus visitantes y toma decisiones basadas en datos reales.",
    features: ["Mapas de calor", "Grabación de sesiones", "Pruebas A/B", "Análisis de funnel"],
    color: "#089949",
    logoSrc: "/logos/zoho/pagesense.svg",
    signupUrl: CRM_PLUS_URL,
  },
  {
    name: "Zoho Marketing Automation",
    tagline: "Automatización de marketing",
    description:
      "Crea flujos de nurturing inteligentes para convertir prospectos en clientes. Automatiza emails, segmenta audiencias y mide el ROI de cada campaña con trazabilidad completa al CRM.",
    features: ["Flujos de nurturing", "Lead scoring", "Segmentación avanzada", "Reportes de ROI"],
    color: "#F59E0B",
    logoSrc: "/logos/zoho/marketingautomation.svg",
    signupUrl: CRM_PLUS_URL,
  },
];

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">El ecosistema completo</p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Zoho CRM Plus:{" "}
            <span className="gradient-text">más de 15 apps, un solo ecosistema</span>
          </h2>
          <p className="text-neutral-500 text-lg">
            No compres módulos sueltos. Con Zoho CRM Plus obtienes todo el ecosistema
            integrado desde el día uno, con un precio mensual fijo por usuario.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group card border-neutral-200 hover:border-transparent overflow-hidden flex flex-col"
              style={{ position: "relative" }}
            >
              {/* Accent top border */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: product.color }}
              />

              {/* Logo + name */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 p-2"
                  style={{ background: `${product.color}15`, border: `1px solid ${product.color}25` }}
                >
                  <Image
                    src={product.logoSrc}
                    alt={product.name}
                    width={32}
                    height={32}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div>
                  <h3
                    className="font-bold text-neutral-900 text-lg leading-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold" style={{ color: product.color }}>
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                {product.description}
              </p>

              <ul className="space-y-1.5 mb-5 flex-1">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: product.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Sign-up CTA */}
              <a
                href={product.signupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold transition-colors group/link"
                style={{ color: product.color }}
              >
                Prueba gratis
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 text-center">
            <p
              className="text-xl font-bold text-neutral-900 mb-2"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              ¿Quieres todas las apps en un solo plan?
            </p>
            <p className="text-neutral-500 mb-5">
              Zoho CRM Plus incluye más de 15 herramientas integradas — ventas, servicio,
              marketing, colaboración y automatización — a un precio fijo por usuario al mes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={CRM_PLUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Probar Zoho CRM Plus gratis
              </a>
              <Link href="/contacto" className="btn-outline text-sm">
                Solicitar diagnóstico gratuito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
