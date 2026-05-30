"use client";

import Image from "next/image";
import Link from "next/link";

const CRM_PLUS_URL =
  "https://store.zoho.com/ResellerCustomerSignUp.do?id=d71cea3d76bbe0f2db5a487a3822bf2e&locale=es";

interface ZohoApp {
  name: string;
  tagline: string;
  color: string;
  logo?: string;
  url: string;
}

const APPS: ZohoApp[] = [
  { name: "CRM",                  tagline: "Ventas",                    color: "#E61E25", logo: "/logos/zoho/crm.svg",                  url: "https://store.zoho.com/ResellerCustomerSignUp.do?id=52f70e0b0b745d091f379e91c99ac01f&locale=es" },
  { name: "SalesIQ",              tagline: "Chat en vivo",              color: "#00BFA5", logo: "/logos/zoho/salesiq.svg",              url: "https://store.zoho.com/ResellerCustomerSignUp.do?id=26c0ee131c0e1408e2b19537f3495f97&locale=es" },
  { name: "Desk",                 tagline: "Soporte",                   color: "#F28A30", logo: "/logos/zoho/desk.svg",                 url: "https://store.zoho.com/ResellerCustomerSignUp.do?id=f84b39f7823d8d462be233c19abe8c1d&locale=es" },
  { name: "Analytics",            tagline: "BI & Reportes",             color: "#FF6B35", logo: "/logos/zoho/analytics.svg",            url: "https://store.zoho.com/ResellerCustomerSignUp.do?id=28d61e8fc946e530193091771668210a&locale=es" },
  { name: "Social",               tagline: "Redes sociales",            color: "#7B68EE", logo: "/logos/zoho/social.svg",               url: "https://store.zoho.com/ResellerCustomerSignUp.do?id=1a2b049920ba2e919a6fcbbb802b063f&locale=es" },
  { name: "Projects",             tagline: "Gestión proyectos",         color: "#009DD9", logo: "/logos/zoho/projects.png",             url: "https://store.zoho.com/ResellerCustomerSignUp.do?id=bc09ec251c0fa0e40c0cdbe5eea89ab5&locale=es" },
  { name: "Survey",               tagline: "Encuestas",                 color: "#9C27B0", logo: "/logos/zoho/survey.svg",               url: "https://store.zoho.com/ResellerCustomerSignUp.do?id=d986bc5c2da4b0ab1cf949f6ff439b12&locale=es" },
  { name: "Campaigns",            tagline: "Email marketing",           color: "#E44D2E", logo: "/logos/zoho/campaigns.svg",            url: CRM_PLUS_URL },
  { name: "Sites",                tagline: "Sitios web",                color: "#089949", logo: "/logos/zoho/sites.svg",                url: "https://store.zoho.com/ResellerCustomerSignUp.do?id=19382b51b6c3376241a09fe838b83399&locale=es" },
  { name: "Webinar",              tagline: "Webinars y eventos",        color: "#E42527", logo: "/logos/zoho/webinar.svg",              url: CRM_PLUS_URL },
  { name: "Cliq",                 tagline: "Chat y colaboración",       color: "#226DB4", logo: "/logos/zoho/cliq.svg",                 url: CRM_PLUS_URL },
  { name: "Backstage",            tagline: "Gestión de eventos",        color: "#1E3A6E", logo: "/logos/zoho/backstage.svg",            url: CRM_PLUS_URL },
  { name: "WorkDrive",            tagline: "Gestión documental",        color: "#0EA5E9", logo: "/logos/zoho/workdrive.svg",            url: CRM_PLUS_URL },
  { name: "PageSense",            tagline: "Optimización CRO",          color: "#089949", logo: "/logos/zoho/pagesense.svg",            url: CRM_PLUS_URL },
  { name: "Marketing Automation", tagline: "Automatización marketing",  color: "#F59E0B", logo: "/logos/zoho/marketingautomation.svg",  url: CRM_PLUS_URL },
];

function AppChip({ app }: { app: ZohoApp }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-neutral-100 shadow-sm mx-3 shrink-0 select-none cursor-pointer transition-all duration-200 ease-out hover:scale-110 hover:shadow-md hover:border-neutral-200 active:scale-100"
      style={{ transformOrigin: "center" }}
    >
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
    </a>
  );
}

export default function ZohoAppsCarousel() {
  const tripled = [...APPS, ...APPS, ...APPS]; // triple for seamless loop on large screens

  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="section-label mb-3">Ecosistema</p>
            <h2
              className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Todas las herramientas,{" "}
              <span className="gradient-text">un solo ecosistema</span>
            </h2>
            <p className="text-neutral-500 max-w-xl text-base">
              Implementamos y conectamos el ecosistema completo de Zoho para que
              ventas, servicio, marketing y operaciones trabajen en sincronía.
            </p>
          </div>
          {/* Zoho Authorized Partner badge */}
          <div className="flex justify-center lg:justify-end shrink-0">
            <Link href="/nosotros" className="inline-block hover:opacity-80 transition-opacity">
              <div className="bg-white border border-neutral-200 shadow-sm rounded-xl px-4 py-3">
                <p className="text-neutral-400 text-xs mb-1.5 text-center" style={{ fontFamily: "var(--font-syne)" }}>
                  Zoho Authorized Partner
                </p>
                <Image
                  src="/logos/zoho-partner.png"
                  alt="Zoho Authorized Partner"
                  width={150}
                  height={50}
                  className="h-9 w-auto"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee strip — overflow-x hidden only so hover:scale chips aren't clipped vertically */}
      <div className="relative w-full" style={{ overflowX: "clip" }}>
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F2F2F8, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F2F2F8, transparent)" }} />

        <div className="flex animate-marquee py-3">
          {tripled.map((app, i) => (
            <AppChip key={`${app.name}-${i}`} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
