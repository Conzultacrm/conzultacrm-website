"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { VARIANTS, type WaveVariant } from "./wave-palettes";

export type { WaveVariant };

// Live WebGL is loaded lazily and only after the page has settled.
const GradientWaves = dynamic(() => import("./GradientWaves"), { ssr: false });

// Layers, from bottom to top:
//  1. Pre-rendered frames (public/waves) crossfading over a 24 s loop + slow drift: opacity/transform only, no JS,
//     moves from the first second on every device and is the fallback for everything below.
//  2. Live waves (React Bits "Gradient Waves"), fading in once the page has settled, on phones too.
//     It measures its own frame rate: if the device struggles it drops to a lighter quality, and if it
//     still struggles it removes itself and the frames above keep going.
type Level = "off" | "hi" | "lo";

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
  const [frames, setFrames] = useState(false);
  const [level, setLevel] = useState<Level>("off");
  const [phone, setPhone] = useState(false);
  const [covered, setCovered] = useState(false);

  // Stagger the heavy work behind the first paint: extra frames first, live waves later.
  useEffect(() => {
    const timers: number[] = [];
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    const idle = (cb: () => void) => (w.requestIdleCallback ? w.requestIdleCallback(cb, { timeout: 1500 }) : window.setTimeout(cb, 200));
    const isPhone = window.matchMedia("(max-width: 767px)").matches;
    const settle = (delay: number, cb: () => void) => {
      const go = () => timers.push(window.setTimeout(() => idle(cb), performance.now() > delay + 2500 ? 0 : delay));
      if (document.readyState === "complete") go();
      else window.addEventListener("load", go, { once: true });
    };
    settle(800, () => setFrames(true));
    settle(isPhone ? 12000 : 6000, () => {
      if (!canRunWaves()) return;
      setPhone(isPhone);
      setLevel(isPhone ? "lo" : "hi");
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  // Frame-rate guard: skip the start-up hitch, sample ~1.6 s; too slow -> lighter quality -> off.
  useEffect(() => {
    if (level === "off") return;
    let raf = 0;
    let stopped = false;
    const deltas: number[] = [];
    let last = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      if (stopped) return;
      if (last && now - t0 > 700) deltas.push(now - last);
      last = now;
      if (now - t0 < 2300) raf = requestAnimationFrame(tick);
      else {
        const avg = deltas.length ? deltas.reduce((a, b) => a + b, 0) / deltas.length : 0;
        if (avg > 30) setLevel(level === "hi" ? "lo" : "off");
        else setCovered(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
    };
  }, [level]);

  const frame = (i: number) =>
    ({
      "--m": `url(/waves/poster-${variant}-m-${i}.webp)`,
      "--w": `url(/waves/poster-${variant}-w-${i}.webp)`,
    }) as React.CSSProperties;

  const area = "absolute inset-x-0 top-0 overflow-hidden pointer-events-none " + (full ? "h-full" : "h-[100svh] md:h-full");
  return (
    <>
      <div aria-hidden className={area + (covered && level !== "off" ? " waves-covered" : "")}>
        <div className="waves-drift absolute -inset-[8%]">
          <div className="waves-frame absolute inset-0" style={frame(0)} />
          {frames &&
            [1, 2, 3].map(i => <div key={i} className={`waves-frame waves-f${i} absolute inset-0 opacity-0`} style={frame(i)} />)}
        </div>
      </div>
      {level !== "off" && (
        <div aria-hidden className={area} style={{ animation: "waves-bg-in 1.5s ease-out both" }}>
          <GradientWaves
            key={level}
            {...VARIANTS[variant]}
            intro={false}
            quality={level === "hi" ? "medium" : "low"}
            dpr={level === "hi" ? 1.25 : 0.75}
            mouseInteraction={!phone}
            className="absolute inset-0 w-full h-full"
          />
          <style>{`@keyframes waves-bg-in{from{opacity:0}to{opacity:1}}`}</style>
        </div>
      )}
    </>
  );
}
