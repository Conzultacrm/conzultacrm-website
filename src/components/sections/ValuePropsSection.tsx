const values = [
  {
    icon: "🎯",
    title: "Especialistas en Zoho",
    description:
      "No somos generalistas. Todo nuestro conocimiento está enfocado en el ecosistema Zoho CRM Plus para que tú obtengas el máximo valor de tu inversión.",
    color: "blue" as const,
  },
  {
    icon: "⚡",
    title: "Implementación Ágil",
    description:
      "Metodología probada que te lleva de cero a producción en semanas, no meses. Sin proyectos eternos, sin sorpresas, con resultados medibles desde el primer mes.",
    color: "violet" as const,
  },
  {
    icon: "🤝",
    title: "Acompañamiento Real",
    description:
      "No desaparecemos después de la instalación. Te acompañamos con soporte continuo en español, capacitación a tu equipo y ajustes según tus necesidades.",
    color: "cyan" as const,
  },
  {
    icon: "🇲🇽",
    title: "Hecho para México",
    description:
      "Entendemos el contexto empresarial mexicano: fiscalidad, facturación electrónica, procesos comerciales LATAM y los retos reales de las PyMEs y empresas medianas.",
    color: "blue" as const,
  },
  {
    icon: "📊",
    title: "ROI desde el Día 1",
    description:
      "Diseñamos tu implementación con KPIs claros. Automatiza tareas manuales, reduce errores y toma decisiones con datos reales — no con corazonadas.",
    color: "violet" as const,
  },
  {
    icon: "🔗",
    title: "Integración Total",
    description:
      "Conectamos Zoho CRM Plus con tu ERP, WhatsApp Business, redes sociales, facturación y cualquier sistema que ya uses en tu empresa.",
    color: "cyan" as const,
  },
];

const colorMap = {
  blue: {
    icon: "icon-box icon-box-blue",
    border: "hover:border-blue-200",
  },
  violet: {
    icon: "icon-box icon-box-violet",
    border: "hover:border-violet-200",
  },
  cyan: {
    icon: "icon-box icon-box-cyan",
    border: "hover:border-cyan-200",
  },
};

export default function ValuePropsSection() {
  return (
    <section className="section-padding mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Por qué elegirnos</p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            La diferencia entre instalar un CRM
            <br />
            <span className="gradient-text">y transformar tu negocio</span>
          </h2>
          <p className="text-neutral-500 text-lg">
            Muchas empresas instalan Zoho CRM y no lo usan. Con ConZultaCRM,
            eso no pasa — garantizamos adopción real y resultados comprobables.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className={`card ${colorMap[v.color].border}`}>
              <div className={`${colorMap[v.color].icon} mb-4 text-xl`}>
                {v.icon}
              </div>
              <h3
                className="text-lg font-bold text-neutral-900 mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {v.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
