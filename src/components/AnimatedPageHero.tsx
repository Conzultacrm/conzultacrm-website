"use client";

import { useEffect, useState } from "react";

type HeroTheme = "default" | "teal" | "violet" | "rose";

interface HeroThemeConfig {
  bg: string;
  orb1: string;
  orb2: string;
  orb3: string;
}

// Aurora blob colors per theme [top-left, bottom-right, center]
const auroraColors: Record<HeroTheme, [string, string, string]> = {
  default: ["rgba(37,99,235,0.45)",  "rgba(124,58,237,0.35)",  "rgba(6,182,212,0.28)"],
  teal:    ["rgba(16,185,129,0.45)", "rgba(6,182,212,0.38)",   "rgba(37,99,235,0.25)"],
  violet:  ["rgba(109,40,217,0.50)", "rgba(139,92,246,0.38)",  "rgba(37,99,235,0.25)"],
  rose:    ["rgba(109,40,217,0.45)", "rgba(167,139,250,0.30)", "rgba(37,99,235,0.28)"],
};

const themes: Record<HeroTheme, HeroThemeConfig> = {
  default: {
    bg: "linear-gradient(135deg, #001A4D 0%, #003A8C 50%, #4C1D95 100%)",
    orb1: "#60A5FA",
    orb2: "#A78BFA",
    orb3: "#22D3EE",
  },
  teal: {
    bg: "linear-gradient(155deg, #002A2A 0%, #004D4D 45%, #003A8C 100%)",
    orb1: "#34D399",
    orb2: "#22D3EE",
    orb3: "#60A5FA",
  },
  violet: {
    bg: "linear-gradient(140deg, #1E0A4A 0%, #4C1D95 55%, #6D28D9 100%)",
    orb1: "#A78BFA",
    orb2: "#C4B5FD",
    orb3: "#60A5FA",
  },
  rose: {
    bg: "linear-gradient(145deg, #1A0A2E 0%, #3B0764 50%, #6D28D9 80%, #1E40AF 100%)",
    orb1: "#F9A8D4",
    orb2: "#A78BFA",
    orb3: "#60A5FA",
  },
};

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
}

export default function AnimatedPageHero({
  badge,
  title,
  description,
  children,
  decorative,
  align = "center",
  theme = "default",
}: AnimatedPageHeroProps) {
  const [visible, setVisible] = useState(false);
  const t = themes[theme];

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const hasDecorative = !!decorative;

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: t.bg }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-15"
          style={{
            top: "-10%",
            left: "-8%",
            background: `radial-gradient(circle at center, ${t.orb1}, transparent 70%)`,
            animation: "float 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-10"
          style={{
            top: "20%",
            right: "-6%",
            background: `radial-gradient(circle at center, ${t.orb2}, transparent 70%)`,
            animation: "float 12s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{
            bottom: "-5%",
            left: "35%",
            background: `radial-gradient(circle at center, ${t.orb3}, transparent 70%)`,
            animation: "float 7s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${auroraColors[theme][0]}, transparent 65%)`,
            animation: "aurora-drift 20s ease-in-out infinite",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, ${auroraColors[theme][1]}, transparent 65%)`,
            animation: "aurora-drift 25s ease-in-out infinite 5s",
            filter: "blur(45px)",
          }}
        />
        <div
          className="absolute top-[40%] left-[10%] w-64 h-64 rounded-full"
          style={{
            background: `radial-gradient(circle, ${auroraColors[theme][2]}, transparent 65%)`,
            animation: "aurora-drift 18s ease-in-out infinite 10s",
            filter: "blur(35px)",
          }}
        />
      </div>

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
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={`text-blue-100 text-lg lg:text-xl max-w-2xl transition-all duration-700 delay-300 ${
              align === "center" && !hasDecorative ? "mx-auto" : ""
            } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
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
