import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedPageHero from "@/components/AnimatedPageHero";

export const metadata: Metadata = {
  title: "Nosotros — ConZultaCRM",
  description:
    "Conoce al equipo de ConZultaCRM, Zoho Authorized Partner en México. Nuestra misión: hacer que las empresas mexicanas crezcan con tecnología CRM de clase mundial.",
};

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20ConZultaCRM";

const values = [
  {
    icon: "🎯",
    title: "Enfoque en resultados",
    desc: "No implementamos software — transformamos operaciones. Cada proyecto se mide por el impacto real en el negocio.",
  },
  {
    icon: "🤝",
    title: "Relaciones a largo plazo",
    desc: "Preferimos crecer con nuestros clientes. Un cliente satisfecho nos recomienda — esa es nuestra mejor estrategia de ventas.",
  },
  {
    icon: "💡",
    title: "Innovación continua",
    desc: "Zoho lanza actualizaciones constantemente. Nuestros clientes siempre acceden a las funcionalidades más recientes.",
  },
  {
    icon: "🇲🇽",
    title: "Orgullo mexicano",
    desc: "Somos empresa 100% mexicana, operando de forma remota en todo el territorio nacional y expandiéndonos en LATAM.",
  },
];


function NosotrosDecorativeCard() {
  return (
    <div className="relative w-72">
      {/* Main card */}
      <div
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
        style={{ animation: "float 6s ease-in-out infinite" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
            🏆
          </div>
          <div>
            <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>
              Zoho Authorized Partner
            </p>
            <p className="text-blue-200 text-xs">México & LATAM</p>
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            { label: "Empresas implementadas", value: "50+", color: "#60A5FA" },
            { label: "Satisfacción del cliente", value: "97%", color: "#34D399" },
            { label: "Tiempo promedio go-live", value: "8 sem", color: "#A78BFA" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <span className="text-blue-200 text-xs">{s.label}</span>
              <span className="font-bold text-sm" style={{ color: s.color }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Floating certification badge */}
      <div
        className="absolute -bottom-4 -right-4 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
        style={{ animation: "float 8s ease-in-out infinite 1s" }}
      >
        <span className="text-lg">✅</span>
        <span className="text-xs font-bold text-neutral-800">Certificados</span>
      </div>
    </div>
  );
}

export default function NosotrosPage() {
  return (
    <div className="pt-16">
      <AnimatedPageHero
        theme="rose"
        badge="Nuestra historia"
        title={
          <>
            El equipo detrás de{" "}
            <span className="gradient-text-light">ConZultaCRM</span>
          </>
        }
        description="Somos un equipo de especialistas en Zoho CRM apasionados por ayudar a empresas mexicanas a crecer con tecnología de clase mundial."
        decorative={<NosotrosDecorativeCard />}
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Nuestra misión</p>
              <h2
                className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Comunicación en movimiento,{" "}
                <span className="gradient-text">negocios en crecimiento</span>
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                ConZultaCRM nació con una convicción clara: las empresas mexicanas
                merecen acceder a tecnología CRM de clase mundial, con implementación
                profesional, en su idioma y adaptada a su realidad de negocio.
              </p>
              <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                Como Zoho Authorized Partners, contamos con acceso oficial para
                implementar, personalizar y dar soporte al ecosistema Zoho CRM Plus
                en México y Latinoamérica.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-xl p-2 border border-neutral-200 shadow-sm">
                  <Image
                    src="/logos/zoho-partner.png"
                    alt="Zoho Authorized Partner"
                    width={140}
                    height={44}
                    className="h-9 w-auto"
                  />
                </div>
                <div>
                  <p className="font-bold text-neutral-800" style={{ fontFamily: "var(--font-syne)" }}>
                    Zoho Authorized Partner
                  </p>
                  <p className="text-sm text-neutral-500">México & LATAM</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "50+", label: "Empresas implementadas", color: "#2563EB" },
                { num: "8", label: "Semanas promedio go-live", color: "#7C3AED" },
                { num: "97%", label: "Satisfacción del cliente", color: "#06B6D4" },
                { num: "100%", label: "Operación remota México", color: "#10B981" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <p
                    className="text-4xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-syne)", color: s.color }}
                  >
                    {s.num}
                  </p>
                  <p className="text-neutral-500 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Nuestros valores</p>
            <h2
              className="text-3xl font-bold text-neutral-900"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Lo que nos define como empresa
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3
                  className="font-bold text-neutral-900 mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {v.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lo que te garantizamos */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Compromiso</p>
            <h2
              className="text-3xl font-bold text-neutral-900 mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Lo que te garantizamos
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              No somos un proveedor más. Estas son las promesas concretas con las que operamos cada proyecto.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Go-live o lo resolvemos",
                desc: "Acompañamos hasta que el sistema esté en producción. No terminamos hasta que funcione.",
              },
              {
                num: "02",
                title: "En español, de principio a fin",
                desc: "Diagnóstico, implementación, capacitación y soporte — todo en tu idioma, sin intermediarios.",
              },
              {
                num: "03",
                title: "Sin costos ocultos",
                desc: "Propuesta económica detallada antes de firmar. Lo que se cotiza es lo que se cobra.",
              },
              {
                num: "04",
                title: "Somos tu equipo, no tu proveedor",
                desc: "Post-implementación incluido. No desaparecemos después de la puesta en marcha.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-5 p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all"
                style={{ borderLeft: "4px solid transparent", backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #004AC6, #7C3AED)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }}
              >
                <span
                  className="text-5xl font-black leading-none flex-shrink-0 mt-1"
                  style={{
                    fontFamily: "var(--font-syne)",
                    background: "linear-gradient(135deg, #004AC6, #7C3AED)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <p
                    className="font-bold text-neutral-900 text-lg mb-1.5 leading-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4"
        style={{ background: "linear-gradient(135deg, #001A4D 0%, #004AC6 50%, #4C1D95 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-blue-100 mb-8">
            Agenda una llamada de diagnóstico. Sin costo, sin compromiso.
            Solo 30 minutos para entender si podemos ayudarte.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="btn-primary">
              Agendar llamada gratuita
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
