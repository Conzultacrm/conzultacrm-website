import { MetadataRoute } from "next";

const BASE_URL = "https://www.conzultacrm.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: "2026-10-15",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: "2026-05-29",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/soluciones`,
      lastModified: "2026-05-28",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified: "2026-06-11",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: "2026-10-15",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/recursos`,
      lastModified: "2026-10-23",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/recursos/cuanto-cuesta-implementar-zoho-crm-mexico`,
      lastModified: "2026-10-23",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/recursos/zoho-crm-vs-hubspot-vs-salesforce`,
      lastModified: "2026-10-23",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/recursos/migrar-de-excel-a-zoho-crm`,
      lastModified: "2026-10-23",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/aviso-privacidad`,
      lastModified: "2026-05-27",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terminos`,
      lastModified: "2026-07-23",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
