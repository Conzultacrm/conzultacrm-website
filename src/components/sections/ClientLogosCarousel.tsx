"use client";

import Image from "next/image";

interface ClientLogo {
  name: string;
  src: string;
}

const ALL_LOGOS: ClientLogo[] = [
  { name: "Century 3D",  src: "/logos/clients/CENTURY3D.svg"  },
  { name: "Dormer",      src: "/logos/clients/DORMER.svg"      },
  { name: "Evox",        src: "/logos/clients/EVOX.svg"        },
  { name: "IPPS",        src: "/logos/clients/IPPS.svg"        },
  { name: "IST",         src: "/logos/clients/IST.svg"         },
  { name: "Localty",     src: "/logos/clients/LOCALTY.svg"     },
  { name: "Mymme",       src: "/logos/clients/MYMME.svg"       },
  { name: "Ofimla",      src: "/logos/clients/OFIMLA.svg"      },
  { name: "PEO",         src: "/logos/clients/PEO.svg"         },
  { name: "Premex",      src: "/logos/clients/PREMEX.svg"      },
  { name: "Rakennus",    src: "/logos/clients/RAKENNUS1.svg"   },
  { name: "Squenda",     src: "/logos/clients/SQUENDA.svg"     },
];

// Split evenly — first strip gets extra if odd count
const mid = Math.ceil(ALL_LOGOS.length / 2);
const STRIP_1 = ALL_LOGOS.slice(0, mid);   // scrolls left  (standard)
const STRIP_2 = ALL_LOGOS.slice(mid);       // scrolls right (reverse)

const BG = "#040E23";

function LogoChip({ logo }: { logo: ClientLogo }) {
  return (
    <div className="mx-3 px-7 py-4 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 hover:border-white/20 transition-colors duration-200"
      style={{ background: "rgba(255,255,255,0.06)" }}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={130}
        height={44}
        className="h-9 w-auto object-contain select-none"
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

      <div className={`flex py-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee-clients"}`}>
        {tripled.map((logo, i) => (
          <LogoChip key={`${logo.name}-${i}`} logo={logo} />
        ))}
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
