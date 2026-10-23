"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Phones get a pre-rendered image of the same waves (a few KB, zero GPU/JS cost).
// Larger screens load the live WebGL version after first paint; until then, and for visitors who
// ask for reduced motion, enable Save-Data or have no capable GPU, the section's CSS gradient stays.
const GradientWaves = dynamic(() => import("./GradientWaves"), { ssr: false });

export type WaveVariant = "home" | "servicios" | "soluciones" | "nosotros" | "contacto";

// One engine, one palette per page; shape parameters differ so pages don't look identical.
export const VARIANTS: Record<WaveVariant, Record<string, string | number>> = {
  home: { backgroundColor: "#001A4D", horizonColor: "#2F2FA8", waveColor: "#5B5BF0", crestColor: "#BFD4FF", brightness: 1.1 },
  servicios: { backgroundColor: "#002A2A", horizonColor: "#0B6E7E", waveColor: "#22B8CF", crestColor: "#A5F3FC", brightness: 1.1, lightAngle: 70, tilt: 56 },
  soluciones: { backgroundColor: "#12053A", horizonColor: "#4C1D95", waveColor: "#8B5CF6", crestColor: "#DDD6FE", brightness: 1.1, lightAngle: 150, tilt: 70 },
  nosotros: { backgroundColor: "#1F0A2E", horizonColor: "#86198F", waveColor: "#E879F9", crestColor: "#FBCFE8", brightness: 1.05, lightAngle: 100, tilt: 60 },
  contacto: { backgroundColor: "#001A4D", horizonColor: "#2F2FA8", waveColor: "#5B5BF0", crestColor: "#BFD4FF", brightness: 1, speed: 0.2, amplitude: 1.8, lightAngle: 130 },
};

// WebGL on a software rasterizer (no GPU) would compete with the page for the main thread.
function canRunWaves(): boolean {
  try {
    if (window.matchMedia("(max-width: 767px)").matches) return false; // phones use the poster
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
    if (nav.connection?.saveData) return false;
    if ((nav.hardwareConcurrency ?? 8) < 4 || (nav.deviceMemory ?? 8) < 4) return false;
    const probe = document.createElement("canvas");
    const gl = probe.getContext("webgl2", { failIfMajorPerformanceCaveat: true });
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|softpipe|software|basic render/i.test(renderer);
  } catch {
    return false;
  }
}

export default function WavesBackground({ variant = "home", full = false }: { variant?: WaveVariant; full?: boolean }) {
  const [live, setLive] = useState(false);

  useEffect(() => {
    const start = () => {
      if (canRunWaves()) setLive(true);
    };
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (w.requestIdleCallback) w.requestIdleCallback(start);
    else setTimeout(start, 200);
  }, []);

  // Phones: static poster of the same waves. Hero on phones is tall, so cap it to the first screen.
  const area = "absolute inset-x-0 top-0 pointer-events-none " + (full ? "h-full" : "h-[100svh] md:h-full");
  return (
    <>
      <div aria-hidden className={area + " md:hidden overflow-hidden"}>
        {/* Slow CSS drift (compositor-only transform): motion without any JS or GPU shader cost */}
        <div
          className="waves-drift absolute -inset-[10%] bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url(/waves/poster-${variant}.webp)` }}
        />
      </div>
      {live && (
        <div aria-hidden className={area + " hidden md:block"} style={{ animation: "waves-bg-in 1.2s ease-out both" }}>
          <GradientWaves
            {...VARIANTS[variant]}
            quality="medium"
            dpr={1.25}
            className="absolute inset-0 w-full h-full"
          />
          <style>{`@keyframes waves-bg-in{from{opacity:0}to{opacity:1}}`}</style>
        </div>
      )}
    </>
  );
}
