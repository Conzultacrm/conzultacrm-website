import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ConZultaCRM — Zoho Authorized Partner en México";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #001A4D 0%, #002966 55%, #1E0A4A 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Aurora blobs */}
        <div style={{ position: "absolute", top: "-120px", left: "-80px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(34,211,238,0.14)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-100px", right: "-80px", width: "460px", height: "460px", borderRadius: "50%", background: "rgba(167,139,250,0.14)", filter: "blur(80px)" }} />

        {/* Zoho Partner badge — colores oficiales Zoho */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "999px",
            padding: "10px 22px",
            marginBottom: "36px",
          }}
        >
          {/* 4 cuadros Zoho */}
          <div style={{ display: "flex", gap: "3px" }}>
            {["#E2211C", "#059033", "#1565C0", "#F5AB00"].map((color) => (
              <div key={color} style={{ width: "10px", height: "10px", borderRadius: "2px", background: color }} />
            ))}
          </div>
          <span style={{ color: "#93C5FD", fontSize: "15px", fontWeight: 700, letterSpacing: "0.08em" }}>
            ZOHO AUTHORIZED PARTNER
          </span>
        </div>

        {/* Logo wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "0px", marginBottom: "22px" }}>
          {/* Diamond icon (brand icon recreado) */}
          <div style={{ display: "flex", marginRight: "18px" }}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <path d="M26 4 L42 20 L26 36 L10 20 Z" stroke="url(#teal)" strokeWidth="3.5" fill="none" strokeLinejoin="round"/>
              <circle cx="26" cy="4" r="4" fill="#22D3EE"/>
              <circle cx="42" cy="20" r="4" fill="#0891B2"/>
              <circle cx="26" cy="36" r="4" fill="#22D3EE"/>
              <circle cx="10" cy="20" r="4" fill="#0891B2"/>
              <defs>
                <linearGradient id="teal" x1="10" y1="4" x2="42" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#22D3EE"/>
                  <stop offset="1" stopColor="#0891B2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span style={{ fontSize: "58px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
            ConZultaCRM
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "23px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.68)",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.45,
            marginBottom: "48px",
          }}
        >
          Implementamos Zoho CRM Plus para empresas en México y LATAM
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "64px" }}>
          {[
            { num: "70+", label: "Empresas" },
            { num: "100%", label: "Go-lives a tiempo" },
            { num: "3x", label: "ROI promedio" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{ fontSize: "40px", fontWeight: 800, color: "#60A5FA" }}>{s.num}</span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.42)", fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{ position: "absolute", bottom: "24px", color: "rgba(255,255,255,0.25)", fontSize: "14px", letterSpacing: "0.06em" }}>
          conzultacrm.com
        </div>
      </div>
    ),
    { ...size }
  );
}
