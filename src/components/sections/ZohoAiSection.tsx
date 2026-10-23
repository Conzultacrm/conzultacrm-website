import Link from "next/link";

const cards = [
  {
    tag: "Agentes Zia",
    title: "Empleados digitales dentro de Zoho CRM",
    text: "Zoho incluye agentes listos para usar en el CRM: analizan oportunidades perdidas, prospectan y califican clientes, entrenan a tus vendedores, preparan cotizaciones y avisan antes de la fecha de cierre. Tu equipo puede revisar todo lo que hacen.",
    color: "#2563EB",
  },
  {
    tag: "Agent Studio",
    title: "Crea agentes para tu operación",
    text: "Defines el rol y las tareas de un agente con instrucciones en lenguaje natural, con opción de bajo código. Zoho habla de más de 700 acciones disponibles dentro de sus aplicaciones.",
    color: "#7C3AED",
  },
  {
    tag: "Zoho MCP",
    title: "Conecta tu asistente de IA a Zoho",
    text: "Zoho MCP permite que asistentes como Claude o ChatGPT consulten y actúen en tus aplicaciones de Zoho con los permisos de cada usuario. Zoho menciona más de 500 integraciones y acceso con OAuth.",
    color: "#0891B2",
  },
];

const faqs = [
  {
    q: "¿Qué es un agente Zia?",
    a: "Es un asistente de IA dentro de Zoho que hace tareas de un área, como prospectar, analizar oportunidades o preparar cotizaciones. Tu equipo puede ver y supervisar sus acciones.",
  },
  {
    q: "¿Necesito saber programar para crear un agente?",
    a: "Zoho lo plantea con instrucciones en lenguaje natural y una opción de bajo código. Para decidir qué conviene automatizar primero, un diagnóstico del proceso ayuda.",
  },
  {
    q: "¿Qué pasa con mis datos?",
    a: "Zoho indica que puedes mantener tus datos en sus servidores sin enviarlos a proveedores de IA en la nube, y que los agentes respetan los permisos de cada usuario.",
  },
  {
    q: "¿Funciona con ChatGPT o Claude?",
    a: "Zoho MCP está pensado para conectar asistentes externos. La página de Zoho nombra a Claude y a GPT, y su comunicado menciona también ChatGPT, Llama y DeepSeek.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Zoho no publica un precio único para estas funciones. Depende de tu plan y de lo que actives, y te lo confirmamos en la demo.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ZohoAiSection() {
  return (
    <section className="section-padding bg-neutral-50 border-t border-neutral-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="section-label mb-3">IA en Zoho</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            IA incluida en Zoho: agentes, Agent Studio y MCP
          </h2>
          <p className="text-neutral-500 text-lg">
            Zoho ya integra IA en sus aplicaciones. Esto es lo que ofrece hoy y cómo se conecta con tus procesos de ventas, servicio y análisis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {cards.map((c) => (
            <div key={c.tag} className="card flex flex-col gap-3">
              <span
                className="inline-block self-start text-xs font-bold rounded-full px-3 py-1"
                style={{ background: `${c.color}15`, color: c.color }}
              >
                {c.tag}
              </span>
              <h3 className="font-bold text-neutral-900 text-lg leading-snug" style={{ fontFamily: "var(--font-syne)" }}>
                {c.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="text-neutral-400 text-xs mb-12">
          Datos publicados por Zoho (zoho.com/mcp y la página de agentes de Zia). La disponibilidad y los límites dependen de tu plan.
        </p>

        <div className="max-w-3xl">
          <h3 className="text-xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            Preguntas frecuentes
          </h3>
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-800">
                  {f.q}
                  <span className="text-[#004AC6] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-neutral-500 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contacto" className="btn-primary">
              Agenda una demo de 30 minutos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
