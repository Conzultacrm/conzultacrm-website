const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    duration: "Semana 1",
    description:
      "Analizamos tu operación actual: procesos de venta, puntos de dolor, sistemas existentes y objetivos de negocio. Sin costo, sin compromiso.",
    icon: "🔍",
    deliverable: "Reporte de diagnóstico + Propuesta personalizada",
  },
  {
    num: "02",
    title: "Diseño",
    duration: "Semanas 1–2",
    description:
      "Diseñamos la arquitectura de tu CRM: flujos de trabajo, automatizaciones, roles de usuario, integraciones y KPIs de medición.",
    icon: "✏️",
    deliverable: "Blueprint de implementación aprobado",
  },
  {
    num: "03",
    title: "Configuración",
    duration: "Semanas 2–6",
    description:
      "Configuramos y personalizamos Zoho CRM Plus según tu diseño. Migramos tus datos históricos y conectamos tus sistemas actuales.",
    icon: "⚙️",
    deliverable: "Ambiente de pruebas funcional",
  },
  {
    num: "04",
    title: "Capacitación",
    duration: "Semanas 6–7",
    description:
      "Entrenamos a tu equipo en sesiones prácticas, en vivo y en español. Creamos materiales de referencia para el uso diario.",
    icon: "🎓",
    deliverable: "Equipo certificado y listo para operar",
  },
  {
    num: "05",
    title: "Go-Live",
    duration: "Semana 8",
    description:
      "Lanzamos el sistema en producción con acompañamiento intensivo. Tu equipo empieza a usar Zoho CRM Plus con confianza total.",
    icon: "🚀",
    deliverable: "Sistema en producción + Soporte dedicado",
  },
  {
    num: "06",
    title: "Soporte Continuo",
    duration: "Ongoing",
    description:
      "No te dejamos solo. Ofrecemos soporte técnico, optimizaciones periódicas y acceso a nuevas funcionalidades de Zoho a medida que tu empresa crece.",
    icon: "🤝",
    deliverable: "SLA garantizado + Revisiones mensuales",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #FAF8FF 0%, #F2F2F8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Metodología</p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            De cero a producción en{" "}
            <span className="gradient-text">8 semanas</span>
          </h2>
          <p className="text-neutral-500 text-lg">
            Un proceso probado y estructurado que garantiza adopción real,
            sin proyectos interminables ni sorpresas en el presupuesto.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative bg-white border border-neutral-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-5xl font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-syne)",
                    color: idx < 3 ? "rgba(37,99,235,0.12)" : "rgba(124,58,237,0.12)",
                  }}
                >
                  {step.num}
                </span>
                <div className="text-2xl">{step.icon}</div>
              </div>

              {/* Duration badge */}
              <span className="badge badge-blue mb-3">{step.duration}</span>

              <h3
                className="text-lg font-bold text-neutral-900 mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {step.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Deliverable */}
              <div className="border-t border-neutral-100 pt-3">
                <p className="text-xs text-neutral-400 mb-0.5 uppercase font-semibold tracking-wide">
                  Entregable
                </p>
                <p className="text-sm font-medium text-neutral-700">{step.deliverable}</p>
              </div>

              {/* Arrow connector (not for last) */}
              {idx < steps.length - 1 && idx % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-3 z-10 w-6 h-6 bg-white border border-neutral-200 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="mt-12 bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p
              className="text-2xl font-bold text-neutral-900"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              4 a 8 semanas
            </p>
            <p className="text-neutral-500 text-sm">Tiempo total de implementación</p>
          </div>
          <div className="flex-1 max-w-sm">
            <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
              <div
                className="h-full rounded-full animate-gradient"
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, #2563EB, #7C3AED, #06B6D4, #2563EB)",
                  backgroundSize: "200%",
                }}
              />
            </div>
          </div>
          <div className="text-center sm:text-right">
            <p
              className="text-2xl font-bold gradient-text"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              100%
            </p>
            <p className="text-neutral-500 text-sm">Tasa de éxito en go-live</p>
          </div>
        </div>
      </div>
    </section>
  );
}
