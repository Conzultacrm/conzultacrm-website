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
  return (
    <>
      <AnimatedPageHero
        badge="Recursos"
        title={<>Guías para elegir e implementar <span className="gradient-text-light">Zoho CRM</span></>}
        description="Respuestas claras a las preguntas que se hace una empresa antes de adoptar un CRM."
        theme="violet"
      />
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.slug} href={`/recursos/${g.slug}`} className="card group flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: `${g.color}12`, border: `1.5px solid ${g.color}25` }}
                >
                  {g.icon}
                </div>
                <span className="badge" style={{ background: `${g.color}12`, color: g.color, border: `1px solid ${g.color}25` }}>
                  {g.tag}
                </span>
              </div>
              <h2 className="text-xl font-bold text-neutral-900 leading-snug mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                {g.title}
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">{g.excerpt}</p>
              <div className="mt-auto flex items-center justify-between text-sm">
                <span className="text-neutral-400">{g.readMinutes} min de lectura</span>
                <span className="font-semibold group-hover:underline" style={{ color: g.color }}>Leer la guía →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
