export type Guide = {
  slug: string;
  /** Short topic label and accent color for the listing */
  tag: string;
  icon: string;
  color: string;
  title: string;
  /** <title> / H1 */
  h1: string;
  description: string;
  excerpt: string;
  updated: string;
  readMinutes: number;
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
};

export const guides: Guide[] = [
  {
    slug: "cuanto-cuesta-implementar-zoho-crm-mexico",
    tag: "Costos",
    icon: "💲",
    color: "#2563EB",
    title: "Cuánto cuesta implementar Zoho CRM en México",
    h1: "Cuánto cuesta implementar Zoho CRM en México: de qué depende el presupuesto",
    description:
      "Qué entra en el costo de implementar Zoho CRM: licencias, configuración, migración de datos, integraciones y capacitación. Cómo estimarlo antes de pedir cotización.",
    excerpt: "Las partes del costo de un proyecto de Zoho CRM y las preguntas que conviene responder antes de pedir cotización.",
    updated: "2026-10-23",
    readMinutes: 6,
    sections: [
      {
        heading: "El costo tiene dos partes",
        paragraphs: [
          "Un proyecto de Zoho CRM suma la licencia que pagas a Zoho (por usuario, según el plan) y el servicio de implementación que pagas al partner. Son conceptos distintos: la licencia es recurrente y la implementación suele ser un pago de proyecto.",
          "Los precios de licencia cambian y dependen del plan, el número de usuarios y el tipo de facturación. Consúltalos siempre en la página oficial de Zoho para México o con tu partner antes de decidir. Aquí no publicamos cifras para no darte datos que caduquen.",
        ],
      },
      {
        heading: "Qué hace subir o bajar el costo de implementación",
        bullets: [
          "Número de usuarios y de áreas que usarán el sistema (solo ventas, o también servicio y marketing).",
          "Cuántos procesos hay que configurar: etapas de venta, aprobaciones, asignación de leads, automatizaciones.",
          "Migración de datos: cuántos registros hay, en qué formato están y qué tan limpios vienen.",
          "Integraciones con otros sistemas: correo, WhatsApp, facturación, ERP, sitio web.",
          "Reportes y tableros personalizados.",
          "Capacitación: sesiones en vivo, material y acompañamiento posterior.",
        ],
      },
      {
        heading: "Qué conviene tener claro antes de pedir cotización",
        paragraphs: [
          "Con estas respuestas, un partner puede darte una estimación más cercana en la primera conversación.",
        ],
        bullets: [
          "¿Cuántas personas lo usarán y con qué roles?",
          "¿Dónde viven hoy tus datos de clientes (Excel, otro CRM, correo)?",
          "¿Cuáles son los tres procesos que más quieres ordenar?",
          "¿Con qué sistemas debe conectarse desde el primer día?",
          "¿Quién será el responsable interno del proyecto?",
        ],
      },
      {
        heading: "Cómo evitar sobrecostos",
        bullets: [
          "Empieza por lo esencial y suma funciones por fases.",
          "Limpia tus datos antes de migrarlos: eliminar duplicados cuesta menos antes que después.",
          "Define quién decide cambios de alcance.",
          "Pide una propuesta con entregables claros, no solo horas.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿La licencia de Zoho CRM se paga en pesos o en dólares?",
        a: "Depende de cómo contrates y de la moneda que ofrezca Zoho en tu región. Confírmalo en la página oficial de Zoho o con tu partner al cotizar.",
      },
      {
        q: "¿Hay costos ocultos al implementar un CRM?",
        a: "Los más comunes aparecen cuando no se define el alcance: migración de datos más grande de lo esperado, integraciones que no se habían contemplado o capacitación adicional. Una propuesta con alcance y entregables por escrito los evita.",
      },
      {
        q: "¿Cuánto tarda una implementación?",
        a: "Depende del alcance. Un proyecto acotado de ventas se puede configurar más rápido que uno con varias áreas e integraciones. Te damos un plazo estimado después del diagnóstico.",
      },
    ],
  },
  {
    slug: "zoho-crm-vs-hubspot-vs-salesforce",
    tag: "Comparativa",
    icon: "⚖️",
    color: "#7C3AED",
    title: "Zoho CRM vs HubSpot vs Salesforce",
    h1: "Zoho CRM vs HubSpot vs Salesforce: cómo elegir el CRM para tu empresa",
    description:
      "Comparativa práctica para elegir entre Zoho CRM, HubSpot y Salesforce según tamaño de equipo, presupuesto, personalización e integraciones.",
    excerpt: "Criterios para elegir un CRM sin casarte con una marca: equipo, presupuesto, personalización y ecosistema.",
    updated: "2026-10-23",
    readMinutes: 6,
    sections: [
      {
        heading: "No hay un CRM mejor para todos",
        paragraphs: [
          "Los tres son plataformas serias y se usan en empresas de todos los tamaños. La diferencia está en cómo encajan con tu equipo, tu presupuesto y la forma en que vendes. Esta guía te da criterios, no un ganador universal.",
          "Somos Zoho Authorized Partner, así que tenemos una preferencia declarada. Por eso lo decimos de frente y te pedimos que valides los datos de cada proveedor en sus páginas oficiales.",
        ],
      },
      {
        heading: "Criterios para comparar",
        bullets: [
          "Costo total: licencias por usuario más implementación, integraciones y mantenimiento durante varios años.",
          "Personalización: qué tanto puedes adaptar campos, procesos y automatizaciones sin programar.",
          "Ecosistema: si necesitas ventas, soporte, marketing y análisis, revisa cuántas herramientas ofrece el mismo proveedor y cómo comparten datos.",
          "Integraciones: correo, WhatsApp, facturación y los sistemas que ya usas.",
          "Idioma y soporte: disponibilidad en español y en tu zona horaria.",
          "Curva de aprendizaje: qué tan rápido lo adopta tu equipo comercial.",
        ],
      },
      {
        heading: "Dónde suele encajar Zoho CRM",
        paragraphs: [
          "Zoho CRM destaca cuando buscas una suite amplia con aplicaciones que comparten datos (ventas, servicio, marketing, análisis) y mucha capacidad de personalización a un costo por usuario competitivo. Zoho CRM Plus reúne varias aplicaciones en una sola suscripción.",
          "Si tu equipo ya vive en otro ecosistema o tienes requisitos muy específicos, otro CRM puede encajar mejor. Una conversación de diagnóstico sirve para decidirlo con datos de tu empresa.",
        ],
      },
      {
        heading: "Cómo decidir en una semana",
        bullets: [
          "Escribe tus cinco procesos comerciales más importantes.",
          "Pide una demo de cada opción con esos mismos procesos.",
          "Calcula el costo a tres años, no solo el primer mes.",
          "Pregunta cómo se migran tus datos y quién te acompaña después.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Zoho CRM es más barato que HubSpot o Salesforce?",
        a: "Depende del plan, el número de usuarios y lo que actives. Los precios cambian, así que compara las páginas oficiales de cada proveedor y calcula el costo total a varios años.",
      },
      {
        q: "¿Puedo cambiar de CRM después?",
        a: "Sí. Los datos se pueden exportar y migrar, aunque es un proyecto con costo y tiempo. Por eso conviene elegir con calma desde el principio.",
      },
      {
        q: "¿Qué CRM conviene a una empresa pequeña?",
        a: "El que tu equipo realmente use. Empieza por lo esencial, valida que cubra tus procesos y que puedas crecer sin cambiar de plataforma.",
      },
    ],
  },
  {
    slug: "migrar-de-excel-a-zoho-crm",
    tag: "Migración",
    icon: "📥",
    color: "#0D9488",
    title: "Cómo migrar de Excel a Zoho CRM",
    h1: "Cómo migrar de Excel a Zoho CRM paso a paso",
    description:
      "Guía para pasar tus clientes y oportunidades de hojas de Excel a Zoho CRM: limpieza de datos, mapeo de campos, importación y adopción del equipo.",
    excerpt: "Pasos para migrar tus datos de Excel a Zoho CRM sin duplicados ni campos perdidos.",
    updated: "2026-10-23",
    readMinutes: 5,
    sections: [
      {
        heading: "Antes de importar: ordena tus datos",
        paragraphs: [
          "La migración sale bien o mal según la calidad de los datos de origen. Dedica tiempo a esta fase y el resto es más sencillo.",
        ],
        bullets: [
          "Reúne todas las hojas en un solo lugar y decide cuál es la fuente de verdad.",
          "Elimina duplicados: mismo cliente con distinto nombre, correo o teléfono.",
          "Unifica formatos: teléfonos con lada, fechas con el mismo formato, estados y países con el mismo nombre.",
          "Separa lo que es contacto, empresa y oportunidad: en el CRM son registros distintos.",
        ],
      },
      {
        heading: "Mapea tus columnas a campos de Zoho CRM",
        paragraphs: [
          "Cada columna de tu Excel debe corresponder a un campo del CRM. Si no existe el campo que necesitas, créalo antes de importar. Define también qué listas de opciones (origen del lead, etapa, industria) usarás para que los reportes sean consistentes.",
        ],
      },
      {
        heading: "Importa con una prueba pequeña",
        bullets: [
          "Importa primero un archivo con pocas filas y revisa que todo caiga en el campo correcto.",
          "Corrige el archivo o el mapeo y repite.",
          "Cuando la prueba salga limpia, importa el resto en lotes.",
          "Activa la detección de duplicados para no crear registros repetidos.",
        ],
      },
      {
        heading: "Después de importar: que tu equipo lo use",
        bullets: [
          "Congela las hojas de Excel con una fecha de corte para que nadie siga actualizándolas.",
          "Capacita al equipo con casos reales de su día a día.",
          "Nombra a una persona responsable de la calidad de los datos.",
          "Revisa a las dos semanas qué campos nadie llena y simplifica el formulario.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo importar mi Excel directamente a Zoho CRM?",
        a: "Sí, Zoho CRM permite importar archivos de hojas de cálculo y mapear las columnas a sus campos. Conviene limpiar los datos antes y hacer una prueba con pocas filas.",
      },
      {
        q: "¿Se pierde el historial al migrar?",
        a: "Los datos que importes se conservan. El historial de conversaciones que no esté en las hojas hay que migrarlo con otro método o dejarlo en el archivo de origen como consulta.",
      },
      {
        q: "¿Cuánto tarda la migración?",
        a: "Depende del volumen y de qué tan limpios vengan los datos. Una revisión previa de tus archivos permite estimarlo con más precisión.",
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
