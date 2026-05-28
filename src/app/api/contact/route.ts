import { NextRequest, NextResponse } from "next/server";

// ── Zoho CRM API v2 ──────────────────────────────────────────────────────────
const ZOHO_TOKEN_URL = "https://accounts.zoho.com/oauth/v2/token";
const ZOHO_CRM_URL   = "https://www.zohoapis.com/crm/v2/Leads";

// Map form industria values → Zoho Industry picklist
const INDUSTRY_MAP: Record<string, string> = {
  "Inmobiliaria":             "Real Estate",
  "Construcción":             "Construction",
  "Manufactura / Maquinaria": "Engineering",
  "Retail / Comercio":        "Retail",
  "Servicios Profesionales":  "Consulting",
  "Tecnología":               "Technology",
  "Salud":                    "Healthcare",
  "Educación":                "Education",
  "Otro":                     "Other",
};

// Map form tamano → approximate employee count (integer for Zoho field)
const EMPLOYEES_MAP: Record<string, number> = {
  "1–10 personas":   5,
  "11–50 personas":  25,
  "51–200 personas": 100,
  "200+ personas":   300,
};

// In-process token cache (valid ~1 h per Vercel instance lifetime)
let cachedToken: string | null = null;
let tokenExpiry = 0;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiry) return cachedToken;

  const res = await fetch(ZOHO_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type:    "refresh_token",
      client_id:     process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
    }),
    cache: "no-store",
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error(`Zoho token refresh failed: ${JSON.stringify(data)}`);
  }

  cachedToken = data.access_token as string;
  tokenExpiry = Date.now() + (Number(data.expires_in) - 120) * 1000;
  return cachedToken;
}

// ── POST handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const {
    nombre,
    email,
    telefono,
    empresa,
    industria,
    tamano,
    crmActual,
    mensaje,
  } = await req.json();

  // Build the description block with all contextual fields
  const descParts = [
    tamano    ? `Tamaño del equipo: ${tamano}`   : null,
    crmActual ? `CRM Actual: ${crmActual}`        : null,
    mensaje   ? `\n${mensaje}`                    : null,
  ].filter(Boolean);

  const lead: Record<string, unknown> = {
    Last_Name:   nombre,
    Email:       email,
    Phone:       telefono,
    Company:     empresa,
    Lead_Source: "Website",
    Lead_Status: "Not Contacted",
    Tag:         [{ name: "Sitio Web" }],
  };

  if (industria && INDUSTRY_MAP[industria]) {
    lead.Industry = INDUSTRY_MAP[industria];
  }
  if (tamano && EMPLOYEES_MAP[tamano]) {
    lead.No_of_Employees = EMPLOYEES_MAP[tamano];
  }
  if (descParts.length) {
    lead.Description = descParts.join("\n");
  }

  try {
    const token = await getAccessToken();

    const zohoRes = await fetch(ZOHO_CRM_URL, {
      method: "POST",
      headers: {
        Authorization:  `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [lead] }),
    });

    const result = await zohoRes.json();
    const status = result?.data?.[0]?.status;

    if (status === "success") {
      return NextResponse.json({ success: true });
    }

    // Log rejection details (visible in Vercel logs)
    console.error("[contact] Zoho rejected lead:", JSON.stringify(result));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Zoho CRM API error:", err, { nombre, email, empresa });
    return NextResponse.json({ success: true });
  }
}
