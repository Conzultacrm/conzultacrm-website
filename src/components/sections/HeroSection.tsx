"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%2C%20%C2%BFpodr%C3%ADan%20darme%20mayor%20informaci%C3%B3n%3F";

export default function HeroSection() {
  const orbRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile viewport for scaled-down aurora blobs
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // Skip parallax on touch-only devices — avoids jitter when tapping/scrolling on mobile
    if (!window.matchMedia("(hover: hover)").matches) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "100svh", /* svh = stable on mobile (no bounce when browser chrome shows/hides) */
        background: "linear-gradient(135deg, #001A4D 0%, #003A8C 40%, #004AC6 70%, #4C1D95 100%)",
      }}
    >
      {/* Animated mesh orbs */}
      <div
        ref={orbRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
      >
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-25 blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float-delayed"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Organic aurora blobs — individual CSS blur + mix-blend-mode:screen = vivid luminous colors */}
      {/* Mobile: blobs ~55% smaller + alpha reduced to avoid washed-out bloom */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob 1 — cyan top-left */}
        <div style={{
          position: "absolute", top: "-5%", left: "-5%",
          width: isMobile ? 280 : 620, height: isMobile ? 280 : 620,
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          background: isMobile ? "rgba(34,211,238,0.38)" : "rgba(34,211,238,0.88)",
          filter: isMobile ? "blur(22px)" : "blur(45px)",
          mixBlendMode: "screen",
          animation: "blob-1 14s ease-in-out infinite",
        }} />
        {/* Blob 2 — violet right */}
        <div style={{
          position: "absolute", top: "15%", right: "-8%",
          width: isMobile ? 240 : 540, height: isMobile ? 240 : 540,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          background: isMobile ? "rgba(167,139,250,0.34)" : "rgba(167,139,250,0.82)",
          filter: isMobile ? "blur(25px)" : "blur(50px)",
          mixBlendMode: "screen",
          animation: "blob-2 18s ease-in-out infinite 2s",
        }} />
        {/* Blob 3 — emerald bottom */}
        <div style={{
          position: "absolute", bottom: "-5%", left: "25%",
          width: isMobile ? 200 : 500, height: isMobile ? 200 : 500,
          borderRadius: "30% 60% 60% 40% / 70% 30% 70% 30%",
          background: isMobile ? "rgba(52,211,153,0.30)" : "rgba(52,211,153,0.78)",
          filter: isMobile ? "blur(20px)" : "blur(42px)",
          mixBlendMode: "screen",
          animation: "blob-3 12s ease-in-out infinite 4s",
        }} />
        {/* Blob 4 — pink accent bottom-left */}
        <div style={{
          position: "absolute", bottom: "10%", left: "-3%",
          width: isMobile ? 160 : 380, height: isMobile ? 160 : 380,
          borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
          background: isMobile ? "rgba(244,114,182,0.28)" : "rgba(244,114,182,0.72)",
          filter: isMobile ? "blur(18px)" : "blur(38px)",
          mixBlendMode: "screen",
          animation: "blob-1 10s ease-in-out infinite reverse 1s",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="badge badge-white">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Zoho Authorized Partner · México
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Centraliza y automatiza{" "}
              <span className="gradient-text-light gu-violet">toda tu operación</span>{" "}
              con Zoho CRM Plus
            </h1>

            <p
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.55), 0 0 40px rgba(0,0,0,0.25)" }}
            >
              Somos Zoho Authorized Partners en México. Implementamos
              el ecosistema Zoho CRM Plus para que tus equipos de ventas, servicio y
              marketing trabajen en perfecta sincronía.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-10">
              {[
                "Implementación en menos de 8 semanas",
                "Capacitación y acompañamiento incluido",
                "Integración con tus sistemas actuales",
                "Soporte continuo en español",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/85 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className="btn-primary text-base px-6 py-3">
                Solicitar Demo Gratuita
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-6 py-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative hidden lg:block">
            {/* Main card */}
            <div className="relative z-10 glass rounded-2xl p-6 max-w-md mx-auto animate-float">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-white/60 text-xs mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>
                    Panel de Ventas
                  </p>
                  <p className="text-white font-bold" style={{ fontFamily: "var(--font-syne)" }}>
                    Dashboard CRM Plus
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Leads", value: "248", change: "+32%", color: "#2563EB" },
                  { label: "Deals", value: "$1.2M", change: "+18%", color: "#7C3AED" },
                  { label: "Tickets", value: "97%", change: "CSAT", color: "#06B6D4" },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-xl p-3 text-center">
                    <p className="text-white/50 text-xs mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                      {s.label}
                    </p>
                    <p className="text-white font-bold text-lg leading-none mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                      {s.value}
                    </p>
                    <p className="text-xs font-semibold" style={{ color: s.color }}>
                      {s.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pipeline bars */}
              <div className="space-y-3 mb-4">
                <p className="text-white/50 text-xs mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  Pipeline por etapa
                </p>
                {[
                  { label: "Prospecto", pct: 80, color: "#2563EB" },
                  { label: "Propuesta", pct: 55, color: "#7C3AED" },
                  { label: "Negociación", pct: 30, color: "#06B6D4" },
                  { label: "Cierre", pct: 15, color: "#10B981" },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <span className="text-white/60 text-xs w-20 shrink-0">{bar.label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${bar.pct}%`, background: bar.color }}
                      />
                    </div>
                    <span className="text-white/50 text-xs w-8 text-right">{bar.pct}%</span>
                  </div>
                ))}
              </div>

              {/* Zoho apps chips */}
              <div className="flex flex-wrap gap-2">
                {["CRM", "Desk", "SalesIQ", "Analytics", "Projects"].map((app) => (
                  <span
                    key={app}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold text-white/80 bg-white/10"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating mini cards */}
            <div className="absolute -top-4 -right-8 z-20 glass rounded-xl p-3 animate-float-delayed">
              <p className="text-white/50 text-xs mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>
                Automatización
              </p>
              <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>
                47 flujos activos
              </p>
              <p className="text-emerald-400 text-xs font-semibold">↑ Corriendo ahora</p>
            </div>

            <div className="absolute -bottom-6 -left-6 z-20 glass rounded-xl p-3 animate-float">
              <p className="text-white/50 text-xs mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>
                Tiempo de respuesta
              </p>
              <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>
                &lt; 2 horas
              </p>
              <p className="text-cyan-400 text-xs font-semibold">Soporte 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-white text-xs" style={{ fontFamily: "var(--font-syne)" }}>
            Scroll
          </span>
          <div className="w-0.5 h-8 bg-white/30 rounded-full relative overflow-hidden">
            <div
              className="absolute top-0 w-full rounded-full bg-white"
              style={{
                height: "40%",
                animation: "scroll-cue 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-cue {
          0% { top: -40%; }
          100% { top: 140%; }
        }
      `}</style>
    </section>
  );
}
