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
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(34,211,238,0.18)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "rgba(167,139,250,0.18)",
            filter: "blur(60px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.20)",
            borderRadius: "999px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: "18px" }}>🏆</span>
          <span style={{ color: "#93C5FD", fontSize: "16px", fontWeight: 600, letterSpacing: "0.05em" }}>
            ZOHO AUTHORIZED PARTNER
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
            maxWidth: "900px",
          }}
        >
          ConZultaCRM
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
            marginBottom: "40px",
          }}
        >
          Implementamos Zoho CRM Plus para empresas en México y LATAM
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "8px",
          }}
        >
          {[
            { num: "70+", label: "Empresas" },
            { num: "100%", label: "Go-lives a tiempo" },
            { num: "3x", label: "ROI promedio" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ fontSize: "36px", fontWeight: 800, color: "#60A5FA" }}>
                {s.num}
              </span>
              <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            color: "rgba(255,255,255,0.35)",
            fontSize: "16px",
            letterSpacing: "0.04em",
          }}
        >
          conzultacrm.com
        </div>
      </div>
    ),
    { ...size }
  );
}
