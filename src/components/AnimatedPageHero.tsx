"use client";

import { useEffect, useState } from "react";
import WavesBackground, { type WaveVariant } from "@/components/backgrounds/WavesBackground";
import { VARIANTS } from "@/components/backgrounds/wave-palettes";

const WAVE_VARIANT: Record<"default" | "teal" | "violet" | "rose", WaveVariant> = { default: "home", teal: "servicios", violet: "soluciones", rose: "nosotros" };

type HeroTheme = "default" | "teal" | "violet" | "rose";

interface AnimatedPageHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  /** Optional extra content (CTAs, badges, etc.) rendered below the description */
  children?: React.ReactNode;
  /** Right-side floating decorative card */
  decorative?: React.ReactNode;
  align?: "center" | "left";
  /** Visual theme — changes gradient and orb colors per page */
  theme?: HeroTheme;
  /** Override the wave variant (defaults to the one matching the theme) */
  waves?: WaveVariant;
}

export default function AnimatedPageHero({
  badge,
  title,
  description,
  children,
  decorative,
  align = "center",
  theme = "default",
  waves,
}: AnimatedPageHeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const hasDecorative = !!decorative;

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: VARIANTS[waves ?? WAVE_VARIANT[theme]].backgroundColor as string }}
    >
      {/* Gradient Waves background, one variant per page theme (+ legibility scrim) */}
      <WavesBackground variant={waves ?? WAVE_VARIANT[theme]} full />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,10,40,0.28) 0%, rgba(0,10,40,0.06) 60%, rgba(0,10,40,0.22) 100%)" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 41%, transparent 41%)",
          backgroundSize: "400px 400px",
        }}
      />

      {/* Content */}
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          hasDecorative ? "grid lg:grid-cols-2 gap-12 items-center" : ""
        }`}
      >
        <div className={align === "center" && !hasDecorative ? "text-center max-w-4xl mx-auto" : ""}>
          {/* Badge */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <span className="badge badge-white mb-6 inline-block">{badge}</span>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ fontFamily: "var(--font-syne)", lineHeight: 1.4 }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={`text-white/90 text-lg lg:text-xl max-w-2xl transition-all duration-700 delay-300 ${
              align === "center" && !hasDecorative ? "mx-auto" : ""
            } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          >
            {description}
          </p>

          {/* Extra content */}
          {children && (
            <div
              className={`mt-8 transition-all duration-700 delay-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {children}
            </div>
          )}
        </div>

        {/* Decorative right column */}
        {hasDecorative && (
          <div
            className={`hidden lg:flex justify-center transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {decorative}
          </div>
        )}
      </div>
    </section>
  );
}
