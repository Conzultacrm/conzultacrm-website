"use client";

import { useEffect, useState } from "react";
import GradientWaves from "./GradientWaves";
import { VARIANTS, type WaveVariant } from "./wave-palettes";

export type { WaveVariant };

// The original React Bits "Gradient Waves" animation (entrance + continuous movement + cursor light),
// started as soon as the component mounts, on desktop and phones. It measures its own frame rate: if the device
// struggles it drops to a lighter quality, and if it still struggles it gives way to a static poster.
// Visitors who ask for reduced motion / Save-Data, or have no capable GPU, also get the static poster.

type Level = "pending" | "hi" | "mid" | "lo" | "poster";

// Quality steps. Moving between them changes props only: the animation is never remounted or restarted.
const STEPS = { hi: { quality: "medium", dpr: 1.25 }, mid: { quality: "medium", dpr: 0.85 }, lo: { quality: "low", dpr: 0.6 } } as const;

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

export default function WavesBackground({
  variant = "home",
  full = false,
  pinned = false,
}: {
  variant?: WaveVariant;
  full?: boolean;
  /** For tall sections (the home hero on phones): the waves stay pinned to the viewport while the section scrolls,
   *  so there is never an empty band below the first screen. Needs overflow-clip (not hidden) on the section. */
  pinned?: boolean;
}) {
  const [level, setLevel] = useState<Level>("pending");
  const [phone, setPhone] = useState(false);

  // Start the moment we mount (right after hydration): the sooner the canvas exists, the sooner the entrance begins.
  useEffect(() => {
    queueMicrotask(() => {
      setPhone(window.matchMedia("(max-width: 767px)").matches);
      setLevel(canRunWaves() ? "hi" : "poster");
    });
  }, []);

  // Frame-rate guard. Skip the start-up hitch, then sample ~2 s. Only a clearly slow device (< ~20 fps) steps down
  // to a lighter quality, in place (no restart). It re-checks after each step and never switches to the poster
  // once the animation is running.
  useEffect(() => {
    if (level !== "hi" && level !== "mid") return;
    let raf = 0;
    let stopped = false;
    const deltas: number[] = [];
    let last = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      if (stopped) return;
      if (last && now - t0 > 1500) deltas.push(now - last);
      last = now;
      if (now - t0 < 4000) raf = requestAnimationFrame(tick);
      else {
        deltas.sort((x, y) => x - y);
        const median = deltas.length ? deltas[Math.floor(deltas.length / 2)] : 0;
        if (median > 50) setLevel(level === "hi" ? "mid" : "lo");
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
    };
  }, [level]);

  const area = "absolute inset-x-0 top-0 overflow-hidden pointer-events-none " + (full ? "h-full" : "h-[100svh] md:h-full");
  const wrap = (children: React.ReactNode) =>
    pinned ? (
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="sticky top-0 h-[100svh] overflow-hidden">{children}</div>
      </div>
    ) : (
      <div aria-hidden className={area}>
        {children}
      </div>
    );
  if (level === "poster") {
    // Static fallback: the settled waves, no motion.
    return wrap(
      <>
        <div className="absolute inset-0 bg-cover bg-bottom md:hidden" style={{ backgroundImage: `url(/waves/poster-${variant}-m-0.webp)` }} />
        <div className="absolute inset-0 bg-cover bg-bottom hidden md:block" style={{ backgroundImage: `url(/waves/poster-${variant}-w-0.webp)` }} />
      </>,
    );
  }
  if (level === "pending") return null;
  return wrap(
    <GradientWaves
      {...VARIANTS[variant]}
      quality={STEPS[level].quality}
      dpr={phone ? Math.min(STEPS[level].dpr, 1) : STEPS[level].dpr}
      mouseInteraction={!phone}
      className="absolute inset-0 w-full h-full"
    />,
  );
}
