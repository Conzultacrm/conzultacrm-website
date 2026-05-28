"use client";

import Image from "next/image";

interface ZohoApp {
  name: string;
  tagline: string;
  color: string;
  logo?: string; // path under /logos/zoho/ — omit to show color dot
}

const APPS: ZohoApp[] = [
  { name: "CRM",       tagline: "Ventas",             color: "#E61E25", logo: "/logos/zoho/crm.svg"       },
  { name: "SalesIQ",   tagline: "Chat en vivo",       color: "#00BFA5", logo: "/logos/zoho/salesiq.svg"   },
  { name: "Desk",      tagline: "Soporte",             color: "#F28A30", logo: "/logos/zoho/desk.svg"      },
  { name: "Analytics", tagline: "BI & Reportes",      color: "#FF6B35", logo: "/logos/zoho/analytics.svg" },
  { name: "Social",    tagline: "Redes sociales",     color: "#7B68EE", logo: "/logos/zoho/social.svg"    },
  { name: "Projects",  tagline: "Gestión proyectos",  color: "#009DD9", logo: "/logos/zoho/projects.png"  },
  { name: "Survey",    tagline: "Encuestas",          color: "#9C27B0", logo: "/logos/zoho/survey.svg"    },
  { name: "Campaigns", tagline: "Email marketing",    color: "#E44D2E", logo: "/logos/zoho/campaigns.svg" },
  { name: "Sites",     tagline: "Sitios web",         color: "#089949", logo: "/logos/zoho/sites.svg"     },
];

function AppChip({ app }: { app: ZohoApp }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-neutral-100 shadow-sm mx-3 shrink-0 select-none">
      {app.logo ? (
        <Image
          src={app.logo}
          alt={`Zoho ${app.name}`}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      ) : (
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
          style={{ background: app.color }}
        >
          {app.name[0]}
        </span>
      )}
      <div>
        <p className="text-sm font-bold text-neutral-800 leading-none mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>
          Zoho {app.name}
        </p>
        <p className="text-xs text-neutral-400 leading-none">{app.tagline}</p>
      </div>
    </div>
  );
}

export default function ZohoAppsCarousel() {
  const tripled = [...APPS, ...APPS, ...APPS]; // triple for seamless loop on large screens

  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="section-label mb-3">Ecosistema</p>
        <h2
          className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Todas las herramientas,{" "}
          <span className="gradient-text">un solo ecosistema</span>
        </h2>
        <p className="text-neutral-500 max-w-xl mx-auto text-base">
          Implementamos y conectamos el ecosistema completo de Zoho para que
          ventas, servicio, marketing y operaciones trabajen en sincronía.
        </p>
      </div>

      {/* Marquee strip */}
      <div className="relative w-full">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F2F2F8, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F2F2F8, transparent)" }} />

        <div className="flex animate-marquee">
          {tripled.map((app, i) => (
            <AppChip key={`${app.name}-${i}`} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
