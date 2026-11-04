/** Darkens a brand/accent colour so it can be used as text on white or a light tint (WCAG AA, 4.5:1). Use for text only; fills keep the original colour. */
export const readable = (color: string) => `color-mix(in srgb, ${color} 58%, #000)`;
