const products = [
  {
    name: "Zoho CRM",
    tagline: "Motor de ventas",
    description:
      "Gestiona todo tu pipeline de ventas, clientes potenciales y oportunidades en un solo lugar. Con automatizaciones inteligentes, tu equipo cierra más deals en menos tiempo.",
    features: ["Pipeline visual", "Lead scoring", "Automatización de seguimiento", "Forecasting con IA"],
    color: "#E61E25",
    icon: "💼",
  },
  {
    name: "Zoho Desk",
    tagline: "Servicio al cliente",
    description:
      "Centraliza todos los tickets de soporte provenientes de email, WhatsApp, chat y redes sociales. Ofrece respuestas rápidas y consistentes con IA integrada.",
    features: ["Multi-canal unificado", "SLA automáticos", "Base de conocimiento", "Reportes de CSAT"],
    color: "#F28A30",
    icon: "🎧",
  },
  {
    name: "Zoho Projects",
    tagline: "Gestión de proyectos",
    description:
      "Planifica y ejecuta las implementaciones de tus clientes con control total. Asigna tareas, gestiona tiempos y documenta avances en tiempo real.",
    features: ["Gantt interactivo", "Seguimiento de horas", "Portafolio de proyectos", "Integración CRM"],
    color: "#009DD9",
    icon: "📋",
  },
  {
    name: "Zoho SalesIQ",
    tagline: "Engagement en sitio web",
    description:
      "Identifica visitantes en tu sitio web, inicia conversaciones proactivas y convierte más prospectos con chatbots inteligentes y tracking de comportamiento.",
    features: ["Chat en vivo", "Chatbots IA", "Identificación de visitantes", "Lead conversion"],
    color: "#00BFA5",
    icon: "💬",
  },
  {
    name: "Zoho Analytics",
    tagline: "Business Intelligence",
    description:
      "Toma decisiones basadas en datos reales. Crea dashboards interactivos que conectan información de ventas, servicio, marketing y operaciones en una sola vista.",
    features: ["Dashboards personalizados", "IA predictiva", "Reportes automáticos", "Exportación avanzada"],
    color: "#FF6B35",
    icon: "📊",
  },
  {
    name: "Zoho Social",
    tagline: "Marketing en redes sociales",
    description:
      "Programa, publica y analiza tu presencia en redes sociales. Conecta con tus prospectos en Instagram, Facebook y LinkedIn directamente desde el CRM.",
    features: ["Publicación programada", "Monitoreo de marca", "Análisis de engagement", "Integración CRM"],
    color: "#7B68EE",
    icon: "📱",
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
            <span className="gradient-text">6 apps, un solo precio</span>
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
              className="group card border-neutral-200 hover:border-transparent overflow-hidden"
              style={{ position: "relative" }}
            >
              {/* Accent top border */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: product.color }}
              />

              {/* Icon + name */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${product.color}15`, border: `1px solid ${product.color}25` }}
                >
                  {product.icon}
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

              <ul className="space-y-1.5">
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
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100">
          <p
            className="text-xl font-bold text-neutral-900 mb-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¿No sabes cuál app necesitas primero?
          </p>
          <p className="text-neutral-500 mb-5">
            Hacemos un diagnóstico gratuito de tu operación y te recomendamos el
            plan de implementación más eficiente.
          </p>
          <a
            href="https://wa.me/5215584046430?text=Hola%2C%20quiero%20un%20diagn%C3%B3stico%20gratuito%20de%20mi%20operaci%C3%B3n%20con%20Zoho%20CRM%20Plus"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
