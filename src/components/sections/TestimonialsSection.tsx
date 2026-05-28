"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Carlos Ramírez",
    role: "Director Comercial",
    company: "Inmobiliaria Grupo Élite",
    quote:
      "Antes perdíamos leads porque no teníamos un sistema de seguimiento consistente. Con ConZultaCRM implementamos Zoho CRM en 6 semanas y triplicamos nuestra tasa de conversión. El equipo de ConZulta nos acompañó en cada paso.",
    rating: 5,
    sector: "Inmobiliaria",
  },
  {
    name: "Laura Mendoza",
    role: "Gerente de Operaciones",
    company: "Constructora Mendoza & Asociados",
    quote:
      "Llevábamos años con Excel para gestionar proyectos y clientes. ConZultaCRM nos migró todo a Zoho sin perder ni un dato. Ahora tenemos visibilidad total de cada proyecto y cada cliente desde el celular.",
    rating: 5,
    sector: "Construcción",
  },
  {
    name: "Roberto García",
    role: "CEO",
    company: "Maquinaria Industrial del Norte",
    quote:
      "Lo que más me sorprendió fue la velocidad de implementación. En dos meses ya teníamos todo el equipo de ventas usando el CRM con flujos automatizados. El soporte en español es una ventaja enorme.",
    rating: 5,
    sector: "Maquinaria",
  },
  {
    name: "Ana Sofía Torres",
    role: "Directora de Marketing",
    company: "Retail Tech México",
    quote:
      "Zoho Social + Zoho CRM integrados transformaron cómo manejamos nuestras campañas. Cada lead de redes sociales entra directo al CRM con su historial completo. ConZulta configuró todo en tiempo récord.",
    rating: 5,
    sector: "Retail",
  },
  {
    name: "Miguel Ángel Flores",
    role: "Director General",
    company: "Consultoría Estratégica MF",
    quote:
      "Intentamos implementar Zoho CRM solos y fue un caos. ConZultaCRM llegó, diagnosticó nuestros errores y en 4 semanas teníamos un CRM que realmente funcionaba para nuestro negocio. Vale cada peso.",
    rating: 5,
    sector: "Servicios Profesionales",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-neutral-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (idx: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive(idx);
    startAutoPlay();
  };

  const current = testimonials[active];

  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #001A4D 0%, #002966 60%, #1E0A4A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label text-blue-300 mb-3">Casos de éxito</p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Empresas que ya crecen con nosotros
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 lg:p-12 text-center transition-all duration-500">
            {/* Sector badge */}
            <span className="badge badge-white mb-5">{current.sector}</span>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              <StarRating rating={current.rating} />
            </div>

            {/* Quote */}
            <blockquote className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-1">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                }}
              >
                {current.name[0]}
              </div>
              <p
                className="text-white font-bold"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {current.name}
              </p>
              <p className="text-white/60 text-sm">{current.role}</p>
              <p className="text-blue-300 text-sm font-semibold">{current.company}</p>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial mini cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => handleDotClick(i)}
              className={`text-left p-3 rounded-xl transition-all duration-300 ${
                i === active
                  ? "bg-white/15 border border-white/30"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <p
                className={`text-xs font-bold mb-0.5 ${
                  i === active ? "text-white" : "text-white/60"
                }`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {t.name.split(" ")[0]}
              </p>
              <p className="text-white/40 text-xs truncate">{t.company.split(" ").slice(0, 2).join(" ")}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
