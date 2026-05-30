"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 13, suffix: "+", label: "Años de experiencia en CRM", color: "#F59E0B" },
  { value: 70, suffix: "+", label: "Empresas implementadas", color: "#2563EB" },
  { value: 100, suffix: "%", label: "Go-lives entregados a tiempo", color: "#7C3AED" },
  { value: 97, suffix: "%", label: "Tasa de adopción de usuarios", color: "#06B6D4" },
  { value: 3, suffix: "x", label: "ROI promedio en 12 meses", color: "#10B981" },
];

function useCounter(target: number, duration: number = 2000, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  color,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  color: string;
  active: boolean;
}) {
  const count = useCounter(value, 2000, active);

  return (
    <div className="text-center">
      <div
        className="text-5xl lg:text-6xl font-bold mb-2"
        style={{ fontFamily: "var(--font-syne)", color }}
      >
        {count}
        <span className="text-3xl lg:text-4xl">{suffix}</span>
      </div>
      <p className="text-white/70 text-sm font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #001A4D 0%, #002966 50%, #1E0A4A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label text-blue-300 mb-3">Resultados comprobados</p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Números que hablan por sí solos
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0 lg:divide-x divide-white/10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} active={active} />
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🏆",
              title: "Zoho Authorized Partner",
              desc: "Zoho Authorized Partners para México y Latinoamérica.",
            },
            {
              icon: "🇲🇽",
              title: "100% en México",
              desc: "Equipo remoto distribuido en toda la República Mexicana y LATAM.",
            },
            {
              icon: "💬",
              title: "Soporte en Español",
              desc: "Atención y capacitación siempre en tu idioma, sin barreras técnicas.",
            },
          ].map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3
                className="text-white font-bold mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {item.title}
              </h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
