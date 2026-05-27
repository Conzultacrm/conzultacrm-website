import { NextRequest, NextResponse } from "next/server";

const ZOHO_FORM_URL =
  "https://crm.zoho.com/crm/WebFormServeServlet?rid=0910ad374e58524cde083191bc99e258d50c9e0088335a04caf6373feba201ad5447d87375d4ec0a1c0780a0a331a6c0gida31291a1e5d5aad3fb4497520b66ab2d3bd99eb4620142528397a7324ff147bf";

// In-memory token cache (valid ~1 hour)
let tokenCache: Record<string, string> | null = null;
let cacheExpiry = 0;

async function fetchZohoTokens(): Promise<Record<string, string>> {
  if (tokenCache && Date.now() < cacheExpiry) return tokenCache;

  const res = await fetch(ZOHO_FORM_URL, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; ConZultaCRM/1.0)" },
    cache: "no-store",
  });
  const html = await res.text();

  const tokens: Record<string, string> = {};
  const nameRe = /name=["']([^"']+)["']/i;
  const valueRe = /value=["']([^"']*?)["']/i;

  for (const [tag] of html.matchAll(/<input[^>]+type=["']?hidden["']?[^>]*>/gi)) {
    const name = nameRe.exec(tag)?.[1];
    const value = valueRe.exec(tag)?.[1] ?? "";
    if (name) tokens[name] = value;
  }

  tokenCache = tokens;
  cacheExpiry = Date.now() + 3_600_000;
  return tokens;
}

export async function POST(req: NextRequest) {
  const { nombre, email, telefono, empresa, industria, tamano, crmActual, mensaje } =
    await req.json();

  const description = [
    `Industria: ${industria}`,
    `Tamaño del equipo: ${tamano}`,
    `CRM Actual: ${crmActual}`,
    "",
    mensaje,
  ].join("\n");

  try {
    const tokens = await fetchZohoTokens();

    const body = new URLSearchParams({
      ...tokens,
      "Last Name": nombre,
      Email: email,
      Phone: telefono,
      Company: empresa,
      Description: description,
    });

    const zohoRes = await fetch("https://crm.zoho.com/crm/WebFormServeServlet", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: "https://conzultacrm.com/contacto",
        Origin: "https://conzultacrm.com",
      },
      body: body.toString(),
    });

    // Zoho returns 302 redirect on success; any non-5xx is treated as success
    if (zohoRes.status < 500) {
      return NextResponse.json({ success: true });
    }
    throw new Error(`Zoho: ${zohoRes.status}`);
  } catch (err) {
    // Log for manual follow-up; still return 200 so the user experience isn't broken
    console.error("[contact] Zoho submission failed:", err, {
      nombre,
      email,
      empresa,
    });
    return NextResponse.json({ success: true });
  }
}
