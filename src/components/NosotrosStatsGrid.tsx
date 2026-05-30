"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 13, suffix: "+", label: "Años de experiencia en CRM", color: "#F59E0B" },
  { value: 70, suffix: "+", label: "Empresas implementadas",      color: "#2563EB" },
  { value: 100, suffix: "%", label: "Go-lives entregados a tiempo", color: "#7C3AED" },
  { value: 97, suffix: "%",  label: "Satisfacción del cliente",    color: "#06B6D4" },
  { value: 100, suffix: "%", label: "Operación remota México",     color: "#10B981" },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({
  value, suffix, label, color, active, colSpanFull,
}: {
  value: number; suffix: string; label: string; color: string;
  active: boolean; colSpanFull?: boolean;
}) {
  const count = useCounter(value, 1800, active);
  return (
    <div
      className={`bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow${
        colSpanFull ? " col-span-2" : ""
      }`}
    >
      <p
        className="text-4xl font-bold mb-2 tabular-nums"
        style={{ fontFamily: "var(--font-syne)", color }}
      >
        {count}
        <span>{suffix}</span>
      </p>
      <p className="text-neutral-500 text-sm">{label}</p>
    </div>
  );
}

export default function NosotrosStatsGrid() {
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
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4">
      {stats.map((s, i, arr) => (
        <StatCard
          key={s.label}
          {...s}
          active={active}
          colSpanFull={i === arr.length - 1 && arr.length % 2 !== 0}
        />
      ))}
    </div>
  );
}
