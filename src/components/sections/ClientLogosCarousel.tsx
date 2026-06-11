"use client";

import Image from "next/image";

interface ClientLogo {
  name: string;
  src: string;
}

const ALL_LOGOS: ClientLogo[] = [
  { name: "Century 3D",  src: "/logos/clients/CENTURY3D.png"  },
  { name: "Dormer",      src: "/logos/clients/DORMER.png"      },
  { name: "Evox",        src: "/logos/clients/EVOX.png"        },
  { name: "IPPS",        src: "/logos/clients/IPPS.png"        },
  { name: "IST",         src: "/logos/clients/IST.png"         },
  { name: "Localty",     src: "/logos/clients/LOCALTY.png"     },
  { name: "Mymme",       src: "/logos/clients/MYMME.png"       },
  { name: "Ofimla",      src: "/logos/clients/OFIMLA.png"      },
  { name: "PEO",         src: "/logos/clients/PEO.png"         },
  { name: "Premex",      src: "/logos/clients/PREMEX.png"      },
  { name: "Rakennus",    src: "/logos/clients/RAKENNUS1.png"   },
  { name: "Squenda",     src: "/logos/clients/SQUENDA.png"     },
];

// Split evenly — first strip gets extra if odd count
const mid = Math.ceil(ALL_LOGOS.length / 2);
const STRIP_1 = ALL_LOGOS.slice(0, mid);   // scrolls left  (standard)
const STRIP_2 = ALL_LOGOS.slice(mid);       // scrolls right (reverse)

const BG = "#040E23";

function LogoChip({ logo }: { logo: ClientLogo }) {
  return (
    <div className="mx-5 px-4 py-2 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
      <Image
        src={logo.src}
        alt={logo.name}
        width={160}
        height={52}
        className="h-11 w-auto object-contain select-none"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
}

function Strip({ logos, reverse }: { logos: ClientLogo[]; reverse: boolean }) {
  const tripled = [...logos, ...logos, ...logos];
  return (
    <div className="relative w-full" style={{ overflowX: "clip" }}>
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${BG}, transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${BG}, transparent)` }} />

      {/* scaleX(-1) on wrapper flips scroll direction without a separate keyframe.
          scaleX(-1) on each chip re-flips logos so they read correctly. */}
      <div style={reverse ? { transform: "scaleX(-1)" } : undefined}>
        <div className="flex py-3 animate-marquee-clients">
          {tripled.map((logo, i) => (
            <div key={`${logo.name}-${i}`} style={reverse ? { transform: "scaleX(-1)" } : undefined}>
              <LogoChip logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ClientLogosCarousel() {
  return (
    <section className="py-16" style={{ background: BG }}>
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="section-label mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
          Clientes
        </p>
        <h2
          className="text-2xl lg:text-3xl font-bold text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Empresas que ya confían en nosotros
        </h2>
      </div>

      {/* Strip 1 — left */}
      <Strip logos={STRIP_1} reverse={false} />

      {/* Gap between strips */}
      <div className="h-4" />

      {/* Strip 2 — right */}
      <Strip logos={STRIP_2} reverse={true} />
    </section>
  );
}
