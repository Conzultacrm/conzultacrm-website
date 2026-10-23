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
  // base blue/violet body + cyan crest (high contrast on navy)
  home: { backgroundColor: "#001A4D", horizonColor: "#1E3FD0", waveColor: "#6D5BFF", crestColor: "#67E8F9", brightness: 1.15, relief: 1.6, sheen: 0.9 },
  // teal body + mint crest
  servicios: { backgroundColor: "#002A2A", horizonColor: "#0B7285", waveColor: "#14B8A6", crestColor: "#A7F3D0", brightness: 1.15, relief: 1.6, sheen: 0.9, lightAngle: 70, tilt: 56 },
  // deep violet body + pink crest
  soluciones: { backgroundColor: "#12053A", horizonColor: "#5B21B6", waveColor: "#8B5CF6", crestColor: "#F5D0FE", brightness: 1.15, relief: 1.6, sheen: 0.9, lightAngle: 150, tilt: 70 },
  // magenta body + warm gold crest
  nosotros: { backgroundColor: "#1F0A2E", horizonColor: "#A21CAF", waveColor: "#E879F9", crestColor: "#FDE68A", brightness: 1.1, relief: 1.6, sheen: 0.9, lightAngle: 100, tilt: 60 },
  // calmer: slower, softer, cyan-ice crest
  contacto: { backgroundColor: "#001A4D", horizonColor: "#2F2FA8", waveColor: "#6D5BFF", crestColor: "#A5F3FC", brightness: 1.05, relief: 1.3, speed: 0.2, amplitude: 1.8, lightAngle: 130 },
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
  const [frames, setFrames] = useState(false);

  useEffect(() => {
    const timers: number[] = [];
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    const idle = (cb: () => void) => (w.requestIdleCallback ? w.requestIdleCallback(cb, { timeout: 1500 }) : window.setTimeout(cb, 200));
    // Everything beyond the first poster waits until the page has fully loaded and settled, so it never
    // competes with the initial render. On client-side navigations (page already settled) it starts right away.
    const settle = (delay: number, cb: () => void) => {
      const go = () => timers.push(window.setTimeout(() => idle(cb), performance.now() > 6000 ? 0 : delay));
      if (document.readyState === "complete") go();
      else window.addEventListener("load", go, { once: true });
    };
    settle(1500, () => setFrames(true));
    settle(4000, () => {
      if (canRunWaves()) setLive(true);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const area = "absolute inset-x-0 top-0 pointer-events-none " + (full ? "h-full" : "h-[100svh] md:h-full");
  const img = (n: number | "wide") => ({ backgroundImage: `url(/waves/poster-${variant}-${n}.webp)` });
  return (
    <>
      {/* Phones: real frames of the waves crossfading slowly (opacity + transform only, no JS, no shader).
          Frame 0 is always underneath, so there is never an empty gap. */}
      <div aria-hidden className={area + " md:hidden overflow-hidden"}>
        <div className="waves-drift absolute -inset-[10%]">
          <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat" style={img(0)} />
          {frames && [1, 2, 3].map(i => (
            <div key={i} className={`waves-f${i} absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-0`} style={img(i)} />
          ))}
        </div>
      </div>

      {/* Larger screens: the first frame of the live waves is always there (also while navigating between
          pages), and the live canvas fades in on top once the GPU is ready. */}
      <div aria-hidden className={area + " hidden md:block bg-cover bg-bottom bg-no-repeat"} style={img("wide")} />
      {live && (
        <div aria-hidden className={area + " hidden md:block"} style={{ animation: "waves-bg-in 1.5s ease-out both" }}>
          <GradientWaves
            {...VARIANTS[variant]}
            intro={false}
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
