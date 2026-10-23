"use client";

import Link from "next/link";
import WavesBackground from "@/components/backgrounds/WavesBackground";
import { VARIANTS } from "@/components/backgrounds/wave-palettes";

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%2C%20%C2%BFpodr%C3%ADan%20darme%20mayor%20informaci%C3%B3n%3F";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "100svh", /* svh = stable on mobile (no bounce when browser chrome shows/hides) */
        background: VARIANTS.home.backgroundColor as string, /* same dark base as the waves, so they roll in over it */
      }}
    >
      {/* Gradient Waves background (lazy WebGL) + legibility scrims */}
      <WavesBackground variant="home" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(90deg, rgba(0,8,32,0.5) 0%, rgba(0,8,32,0.2) 45%, rgba(0,8,32,0) 70%)" }}
      />
      {/* Mobile: protect CTAs sitting over the lower waves */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{ background: "linear-gradient(180deg, rgba(0,8,32,0) 55%, rgba(0,8,32,0.45) 100%)" }}
      />

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
              className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.4] mb-6"
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
                "Implementación ágil, sin proyectos eternos",
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
          <div className="hidden lg:flex flex-col gap-3">
            {/* Main dashboard card — solid dark navy, fully readable */}
            <div
              className="relative z-10 rounded-2xl p-6 max-w-md mx-auto w-full animate-float"
              style={{ background: "#0D1B3E", border: "1px solid rgba(99,130,220,0.3)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-blue-300 text-xs mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>
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
                  { label: "Leads", value: "248", change: "+32%", color: "#60A5FA" },
                  { label: "Deals", value: "$1.2M", change: "+18%", color: "#A78BFA" },
                  { label: "Tickets", value: "97%", change: "CSAT", color: "#34D399" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <p className="text-blue-200 text-xs mb-1" style={{ fontFamily: "var(--font-syne)" }}>
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
                <p className="text-blue-300 text-xs mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  Pipeline por etapa
                </p>
                {[
                  { label: "Prospecto", pct: 80, color: "#60A5FA" },
                  { label: "Propuesta", pct: 55, color: "#A78BFA" },
                  { label: "Negociación", pct: 30, color: "#34D399" },
                  { label: "Cierre", pct: 15, color: "#F9A8D4" },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <span className="text-blue-100 text-xs w-20 shrink-0">{bar.label}</span>
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${bar.pct}%`, background: bar.color }}
                      />
                    </div>
                    <span className="text-blue-200 text-xs w-8 text-right">{bar.pct}%</span>
                  </div>
                ))}
              </div>

              {/* Zoho apps chips */}
              <div className="flex flex-wrap gap-2">
                {["CRM", "Desk", "SalesIQ", "Analytics", "Projects"].map((app) => (
                  <span
                    key={app}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold text-white"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", fontFamily: "var(--font-syne)" }}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat chips — BELOW the card, solid colors, zero overlap */}
            <div className="flex gap-3 max-w-md mx-auto w-full">
              <div className="flex-1 rounded-xl p-3" style={{ background: "#0A2818", border: "1px solid rgba(52,211,153,0.35)" }}>
                <p className="text-emerald-300 text-xs mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>Automatización</p>
                <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>47 flujos activos</p>
                <p className="text-emerald-400 text-xs font-semibold">↑ Corriendo ahora</p>
              </div>
              <div className="flex-1 rounded-xl p-3" style={{ background: "#051828", border: "1px solid rgba(34,211,238,0.35)" }}>
                <p className="text-cyan-300 text-xs mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>Tiempo de respuesta</p>
                <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>&lt; 2 horas</p>
                <p className="text-cyan-400 text-xs font-semibold">Soporte 24/7</p>
              </div>
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
