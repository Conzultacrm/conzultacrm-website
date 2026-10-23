// Design source for the wave posters in /public/waves (poster-<variant>-<m|w>-<0..3>.webp).
// The posters were rendered with React Bits "Gradient Waves" (https://reactbits.dev/backgrounds/gradient-waves)
// using these parameters; edit here, regenerate the images, then update the files in /public/waves.
export type WaveVariant = "home" | "servicios" | "soluciones" | "nosotros" | "contacto";

// One engine, one palette per page; shape parameters differ so pages don't look identical.
export const VARIANTS: Record<WaveVariant, Record<string, string | number>> = {
  // Dark bodies with a vivid, different-hue crest, so the waves never read as one flat color.
  home: { backgroundColor: "#00040F", horizonColor: "#0A1A66", waveColor: "#0F2A9E", crestColor: "#22D3EE", brightness: 1.3, relief: 2.0, sheen: 1.2 }, // dark blue + electric cyan
  servicios: { backgroundColor: "#00141A", horizonColor: "#0B3B66", waveColor: "#0E7490", crestColor: "#34D399", brightness: 1.3, relief: 2.0, sheen: 1.2, lightAngle: 70, tilt: 56 }, // deep teal + emerald
  soluciones: { backgroundColor: "#0B0630", horizonColor: "#4C1D95", waveColor: "#7C3AED", crestColor: "#34D399", brightness: 1.2, relief: 1.8, sheen: 1, lightAngle: 150, tilt: 70 }, // violet + emerald
  nosotros: { backgroundColor: "#12052E", horizonColor: "#6D28D9", waveColor: "#A21CAF", crestColor: "#22D3EE", brightness: 1.25, relief: 1.9, sheen: 1.1, lightAngle: 100, tilt: 60 }, // violet/magenta + cyan
  contacto: { backgroundColor: "#00040F", horizonColor: "#0A1A66", waveColor: "#0F2A9E", crestColor: "#22D3EE", brightness: 1.15, relief: 1.6, sheen: 1, speed: 0.2, amplitude: 1.8, lightAngle: 130 }, // calm version of Inicio
};
