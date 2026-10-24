import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedPageHero from "@/components/AnimatedPageHero";
import CtaSection from "@/components/sections/CtaSection";
import { getGuide, guides } from "@/content/guides";

const BASE_URL = "https://www.conzultacrm.com";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `/recursos/${g.slug}` },
    openGraph: { title: g.title, description: g.description, type: "article", url: `${BASE_URL}/recursos/${g.slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.description,
    dateModified: g.updated,
    datePublished: g.updated,
    inLanguage: "es-MX",
    mainEntityOfPage: `${BASE_URL}/recursos/${g.slug}`,
    author: { "@type": "Organization", name: "ConZultaCRM" },
    publisher: { "@type": "Organization", name: "ConZultaCRM", url: BASE_URL },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const others = guides.filter((x) => x.slug !== g.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AnimatedPageHero badge="Guía" title={g.h1} description={g.description} theme="violet" />
      <article className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-400 mb-8">
            {g.readMinutes} min de lectura · Actualizado el{" "}
            {new Date(g.updated + "T12:00:00").toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          {g.sections.map((s) => (
            <section key={s.heading} className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-syne)" }}>
                {s.heading}
              </h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="text-neutral-600 leading-relaxed mb-4">{p}</p>
              ))}
              {s.bullets && (
                <ul className="list-disc pl-5 space-y-2 text-neutral-600 leading-relaxed">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-14 border-t border-neutral-100 pt-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              {g.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-neutral-900 mb-1">{f.q}</h3>
                  <p className="text-neutral-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-2xl bg-neutral-50 border border-neutral-100 p-6">
            <p className="font-semibold text-neutral-900 mb-3">Sigue leyendo</p>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/recursos/${o.slug}`} className="text-blue-600 hover:underline">{o.title}</Link>
                </li>
              ))}
              <li><Link href="/soluciones" className="text-blue-600 hover:underline">Soluciones de Zoho CRM por sector</Link></li>
            </ul>
          </section>
        </div>
      </article>
      <CtaSection />
    </>
  );
}
