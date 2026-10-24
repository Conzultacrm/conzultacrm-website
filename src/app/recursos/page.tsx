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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/recursos/${g.slug}`}
              className="group block rounded-2xl border border-neutral-200 p-6 bg-white hover:border-blue-300 hover:shadow-lg transition"
            >
              <p className="text-xs font-semibold text-blue-600 mb-2">{g.readMinutes} min de lectura</p>
              <h2 className="text-xl font-bold text-neutral-900 mb-3 leading-snug" style={{ fontFamily: "var(--font-syne)" }}>
                {g.title}
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">{g.excerpt}</p>
              <span className="text-sm font-semibold text-blue-600 group-hover:underline">Leer la guía →</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
