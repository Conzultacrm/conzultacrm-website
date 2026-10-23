"use client";

import { useEffect, useState } from "react";
import GradientWaves from "./GradientWaves";
import { VARIANTS, type WaveVariant } from "./wave-palettes";

export type { WaveVariant };

// The original React Bits "Gradient Waves" animation (entrance + continuous movement + cursor light),
// started as soon as the component mounts, on desktop and phones. It measures its own frame rate: if the device
// struggles it drops to a lighter quality, and if it still struggles it gives way to a static poster.
// Visitors who ask for reduced motion / Save-Data, or have no capable GPU, also get the static poster.

type Level = "pending" | "hi" | "lo" | "poster";

function canRunWaves(): boolean {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
    if (nav.connection?.saveData) return false;
    if ((nav.hardwareConcurrency ?? 8) < 4 || (nav.deviceMemory ?? 8) < 3) return false;
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
  const [level, setLevel] = useState<Level>("pending");
  const [phone, setPhone] = useState(false);

  // Start the moment we mount (right after hydration): the sooner the canvas exists, the sooner the entrance begins.
  useEffect(() => {
    queueMicrotask(() => {
      setPhone(window.matchMedia("(max-width: 767px)").matches);
      setLevel(canRunWaves() ? "hi" : "poster");
    });
  }, []);

  // Frame-rate guard: skip the start-up hitch, sample ~1.6 s; too slow -> lighter quality -> static poster.
  useEffect(() => {
    if (level !== "hi" && level !== "lo") return;
    let raf = 0;
    let stopped = false;
    const deltas: number[] = [];
    let last = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      if (stopped) return;
      if (last && now - t0 > 900) deltas.push(now - last);
      last = now;
      if (now - t0 < 2700) raf = requestAnimationFrame(tick);
      else {
        const avg = deltas.length ? deltas.reduce((a, b) => a + b, 0) / deltas.length : 0;
        if (avg > 34) setLevel(level === "hi" ? "lo" : "poster");
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
    };
  }, [level]);

  const area = "absolute inset-x-0 top-0 overflow-hidden pointer-events-none " + (full ? "h-full" : "h-[100svh] md:h-full");
  if (level === "poster") {
    // Static fallback: the settled waves, no motion.
    return (
      <div aria-hidden className={area + " bg-cover bg-bottom bg-no-repeat"}>
        <div className="absolute inset-0 bg-cover bg-bottom md:hidden" style={{ backgroundImage: `url(/waves/poster-${variant}-m-0.webp)` }} />
        <div className="absolute inset-0 bg-cover bg-bottom hidden md:block" style={{ backgroundImage: `url(/waves/poster-${variant}-w-0.webp)` }} />
      </div>
    );
  }
  if (level === "pending") return null;
  return (
    <div aria-hidden className={area}>
      <GradientWaves
        key={level}
        {...VARIANTS[variant]}
        quality={level === "hi" ? "medium" : "low"}
        dpr={level === "hi" ? (phone ? 1 : 1.25) : 0.75}
        mouseInteraction={!phone}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
