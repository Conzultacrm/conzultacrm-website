import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — ConZultaCRM",
  description:
    "Aviso de privacidad de ConZultaCRM conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México.",
};

const sections = [
  {
    id: "responsable",
    title: "I. Identidad y domicilio del responsable",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        <strong>ConZultaCRM</strong>, en adelante "el Responsable", con domicilio en la
        Ciudad de México, México, y correo electrónico de contacto:{" "}
        <a href="mailto:info@conzultacrm.com" className="text-[#004AC6] hover:underline">
          info@conzultacrm.com
        </a>
        , es el responsable del tratamiento de sus datos personales conforme a lo
        establecido en la Ley Federal de Protección de Datos Personales en Posesión
        de los Particulares (LFPDPPP) y su Reglamento.
      </p>
    ),
  },
  {
    id: "datos",
    title: "II. Datos personales recabados",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          Para las finalidades señaladas en el presente aviso de privacidad, podemos
          recabar los siguientes datos personales:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Número de teléfono o celular</li>
          <li>Nombre de la empresa u organización</li>
          <li>Industria o sector de actividad</li>
          <li>Tamaño de la empresa (número de empleados)</li>
          <li>Información sobre necesidades tecnológicas o de negocio</li>
        </ul>
        <p>
          No recabamos datos personales sensibles en el sentido de la LFPDPPP.
        </p>
      </div>
    ),
  },
  {
    id: "finalidades",
    title: "III. Finalidades del tratamiento",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          Sus datos personales serán utilizados para las siguientes{" "}
          <strong>finalidades primarias</strong> (necesarias para la relación con
          usted):
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Atender solicitudes de información, demos o cotizaciones</li>
          <li>Brindar servicios de consultoría, implementación y soporte de CRM</li>
          <li>Gestionar la relación comercial con nuestros clientes</li>
          <li>Enviar propuestas, presupuestos y documentación contractual</li>
          <li>Dar seguimiento a proyectos activos</li>
        </ul>
        <p>
          Adicionalmente, sus datos podrán utilizarse para las siguientes{" "}
          <strong>finalidades secundarias</strong> (mercadotecnia y análisis):
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Envío de comunicaciones sobre novedades, actualizaciones de productos Zoho y mejores prácticas de CRM</li>
          <li>Invitaciones a webinars, eventos o capacitaciones</li>
          <li>Análisis estadístico sobre el uso de nuestros servicios</li>
        </ul>
        <p>
          Si no desea que sus datos sean tratados para las finalidades secundarias,
          puede manifestarlo enviando un correo a{" "}
          <a href="mailto:info@conzultacrm.com" className="text-[#004AC6] hover:underline">
            info@conzultacrm.com
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: "transferencias",
    title: "IV. Transferencias de datos personales",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          Sus datos personales podrán ser transferidos a los siguientes terceros:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>
            <strong>Zoho Corporation Pvt. Ltd.</strong> — para la gestión de
            relaciones con clientes a través de la plataforma Zoho CRM Plus, con
            base en la relación contractual y el consentimiento del titular.
          </li>
          <li>
            <strong>Proveedores de servicios de comunicación</strong> (correo
            electrónico, mensajería) — únicamente para facilitar la prestación del
            servicio contratado, bajo acuerdos de confidencialidad.
          </li>
        </ul>
        <p>
          No realizamos transferencias internacionales de datos personales fuera
          del marco legal aplicable. Todas las transferencias se realizan con el
          consentimiento del titular o con fundamento legal expreso.
        </p>
      </div>
    ),
  },
  {
    id: "arco",
    title: "V. Derechos ARCO y cómo ejercerlos",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          Usted tiene derecho a <strong>Acceder</strong> a sus datos personales en
          nuestra posesión, a <strong>Rectificarlos</strong> cuando sean inexactos o
          incompletos, a <strong>Cancelarlos</strong> cuando considere que no son
          necesarios para las finalidades descritas, y a{" "}
          <strong>Oponerse</strong> al tratamiento de los mismos para fines
          específicos.
        </p>
        <p>
          Para ejercer sus derechos ARCO, envíe una solicitud a:
        </p>
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 space-y-1">
          <p><strong>Correo electrónico:</strong>{" "}
            <a href="mailto:info@conzultacrm.com" className="text-[#004AC6] hover:underline">
              info@conzultacrm.com
            </a>
          </p>
          <p className="text-sm text-neutral-500">
            Asunto sugerido: "Ejercicio de derechos ARCO — [su nombre]"
          </p>
        </div>
        <p>
          Su solicitud deberá contener: nombre completo, descripción clara del
          derecho que desea ejercer, y documentación que acredite su identidad.
          El Responsable responderá en un plazo máximo de <strong>20 días hábiles</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "VI. Uso de cookies y tecnologías de rastreo",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Nuestro sitio web puede utilizar cookies propias y de terceros con el fin
        de mejorar la experiencia de navegación, analizar el tráfico (Google
        Analytics) y medir la efectividad de nuestras comunicaciones. Usted puede
        desactivar el uso de cookies mediante la configuración de su navegador;
        sin embargo, esto podría afectar la funcionalidad del sitio.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "VII. Modificaciones al aviso de privacidad",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Nos reservamos el derecho de efectuar modificaciones o actualizaciones al
        presente aviso de privacidad en cualquier momento. Dichas modificaciones
        estarán disponibles en esta misma página web. Le recomendamos revisarlo
        periódicamente. La fecha de última actualización se indica al final de este
        documento.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "VIII. Contacto y dudas",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          Para cualquier duda, comentario o solicitud relacionada con el presente
          aviso de privacidad, puede contactarnos a través de:
        </p>
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 space-y-2">
          <p>
            <strong>Correo:</strong>{" "}
            <a href="mailto:info@conzultacrm.com" className="text-[#004AC6] hover:underline">
              info@conzultacrm.com
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/5215584046430"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#004AC6] hover:underline"
            >
              +52 55 8404 6430
            </a>
          </p>
        </div>
        <p className="text-sm text-neutral-400">
          Última actualización: mayo 2026
        </p>
      </div>
    ),
  },
];

export default function AvisoPrivacidadPage() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <div
        className="py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #001A4D 0%, #003A8C 50%, #4C1D95 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Aviso de Privacidad
          </h1>
          <p className="text-blue-100 text-sm">
            Conforme a la Ley Federal de Protección de Datos Personales en Posesión
            de los Particulares (LFPDPPP) — México
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2
                className="text-xl font-bold text-neutral-900 mb-4 pb-3 border-b border-neutral-100"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {section.title}
              </h2>
              <div>{section.content}</div>
            </div>
          ))}
        </div>

        {/* Back to home */}
        <div className="mt-14 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-sm text-neutral-500 hover:text-[#004AC6] transition-colors">
            ← Volver al inicio
          </Link>
          <Link href="/contacto" className="btn-primary text-sm">
            ¿Dudas? Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
}
