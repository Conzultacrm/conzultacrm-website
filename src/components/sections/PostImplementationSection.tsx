import Link from "next/link";

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20quiero%20conocer%20sus%20planes%20de%20soporte%20y%20mantenimiento%20CRM";

const pillars = [
  {
    icon: "📈",
    color: "#2563EB",
    title: "Adopción real, no solo instalación",
    description:
      "Medimos la adopción por usuario después del go-live. Hacemos sesiones de seguimiento, ajustes según el feedback del equipo y coaching a líderes hasta que el CRM sea un hábito — no una obligación.",
    items: [
      "Métricas de uso por usuario y área",
      "Sesiones de refuerzo post go-live",
      "Ajustes de configuración según feedback real",
      "Coaching a líderes para impulsar el cambio",
    ],
  },
  {
    icon: "⚙️",
    color: "#7C3AED",
    title: "Optimización continua del sistema",
    description:
      "Tu CRM debe crecer con tu empresa. Cada mes revisamos el rendimiento, añadimos automatizaciones, actualizamos dashboards y conectamos nuevas herramientas de Zoho según tu evolución.",
    items: [
      "Revisiones mensuales de procesos y KPIs",
      "Nuevas automatizaciones sin costo adicional",
      "Integración de módulos Zoho adicionales",
      "Reportes actualizados según nuevas métricas",
    ],
  },
  {
    icon: "🛟",
    color: "#06B6D4",
    title: "Soporte técnico con SLA garantizado",
    description:
      "Un sistema caído o mal configurado paraliza a tu equipo. Respondemos en menos de 2 horas hábiles por WhatsApp, video o email — y resolvemos, no solo escalamos.",
    items: [
      "WhatsApp directo, respuesta < 2 horas hábiles",
      "Videollamadas de diagnóstico incluidas",
      "Alertas proactivas ante incidencias",
      "Actualizaciones de Zoho gestionadas por nosotros",
    ],
  },
];

export default function PostImplementationSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0A0A14 0%, #0D1A3A 50%, #1A0A3D 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label text-blue-300 mb-3">Soporte & Mantenimiento</p>

          {/* Stat chip */}
          <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 rounded-full px-5 py-2 mb-6">
            <span
              className="w-2 h-2 rounded-full bg-red-400 animate-pulse"
            />
            <span className="text-white/80 text-sm font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
              El 70% de los CRM fracasan después del go-live
            </span>
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Nosotros no te dejamos{" "}
            <span className="gradient-text-light">varado después</span>
          </h2>
          <p
            className="text-white/75 text-lg leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
          >
            Implementar es solo el principio. El verdadero retorno llega cuando
            tu equipo adopta el sistema, los procesos se optimizan y el CRM
            evoluciona con tu negocio. Somos tu socio permanente — no un
            proveedor con fecha de cierre.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              {/* Top color accent */}
              <div
                className="w-full h-0.5 rounded-full mb-6"
                style={{ background: `linear-gradient(to right, ${pillar.color}, transparent)` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${pillar.color}18`, border: `1.5px solid ${pillar.color}35` }}
              >
                {pillar.icon}
              </div>

              <h3
                className="text-white font-bold text-lg mb-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {pillar.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {pillar.description}
              </p>

              <ul className="space-y-2.5">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${pillar.color}20`, border: `1px solid ${pillar.color}40` }}
                    >
                      <svg className="w-2.5 h-2.5" style={{ color: pillar.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social proof + CTA row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-2xl px-8 py-7">
          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8">
            {[
              { value: "+75%", label: "de clientes llevan más de 12 meses con nosotros" },
              { value: "< 2h", label: "tiempo de respuesta en soporte técnico" },
              { value: "100%", label: "de go-lives completados en tiempo y forma" },
            ].map((stat) => (
              <div key={stat.value} className="text-center lg:text-left">
                <p
                  className="text-2xl font-bold gradient-text-light mb-0.5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs max-w-[140px]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/servicios#soporte" className="btn-primary text-sm">
              Ver planes de soporte
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
