import type { Metadata } from "next";
import Link from "next/link";
import AnimatedPageHero from "@/components/AnimatedPageHero";
import CtaSection from "@/components/sections/CtaSection";
import { guides } from "@/content/guides";

export const metadata: Metadata = {
  title: "Guías de Zoho CRM para empresas en México",
  description:
    "Guías prácticas sobre Zoho CRM: costos, comparativas, migración de datos y buenas prácticas de implementación para empresas en México.",
  alternates: { canonical: "/recursos" },
};

export default function RecursosPage() {
  const [featured, ...rest] = guides;
  return (
    <>
      <AnimatedPageHero
        badge="Recursos"
        title={<>Guías para elegir e implementar <span className="gradient-text-light">Zoho CRM</span></>}
        description="Respuestas claras a las preguntas que se hace una empresa antes de adoptar un CRM."
        theme="violet"
      />
      <section className="section-padding bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured guide */}
          <Link
            href={`/recursos/${featured.slug}`}
            className="group relative block overflow-hidden rounded-3xl p-8 md:p-12 mb-6 text-white transition-transform hover:-translate-y-0.5"
            style={{ background: `linear-gradient(135deg, #0D1B3E 0%, ${featured.color} 140%)` }}
          >
            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: featured.color }} />
            <div className="relative max-w-2xl">
              <span className="inline-block text-xs font-semibold tracking-wide uppercase rounded-full bg-white/15 px-3 py-1 mb-5">
                Empieza aquí · {featured.tag}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                {featured.title}
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 text-sm font-semibold px-5 py-2.5 group-hover:gap-3 transition-all">
                Leer la guía <span aria-hidden>→</span>
              </span>
            </div>
          </Link>

          {/* Rest of the guides */}
          <div className="grid gap-4">
            {rest.map((g, i) => (
              <Link
                key={g.slug}
                href={`/recursos/${g.slug}`}
                className="group flex items-center gap-5 md:gap-8 rounded-2xl bg-white p-5 md:p-7 shadow-sm ring-1 ring-neutral-200 hover:shadow-lg hover:-translate-y-0.5 transition"
                style={{ borderLeft: `4px solid ${g.color}` }}
              >
                <span
                  className="hidden sm:flex shrink-0 w-14 h-14 items-center justify-center rounded-2xl text-xl font-bold"
                  style={{ background: `${g.color}14`, color: g.color, fontFamily: "var(--font-syne)" }}
                >
                  {String(i + 2).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: g.color }}>{g.tag}</span>
                    <span className="text-xs text-neutral-400">{g.readMinutes} min de lectura</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-neutral-900 leading-snug mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                    {g.title}
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed">{g.excerpt}</p>
                </div>
                <span
                  aria-hidden
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg transition group-hover:translate-x-1"
                  style={{ background: `${g.color}14`, color: g.color }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
