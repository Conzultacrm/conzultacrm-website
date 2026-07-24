import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — ConZultaCRM",
  description:
    "Términos y condiciones de uso del sitio web y servicios de ConZultaCRM, consultora y Zoho Authorized Partner en México.",
};

const sections = [
  {
    id: "aceptacion",
    title: "1. Aceptación de los términos",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Al acceder y utilizar el sitio web{" "}
        <strong>conzultacrm.com</strong> (en adelante, "el Sitio") usted acepta
        quedar vinculado por los presentes Términos y Condiciones de Uso (en
        adelante, "los Términos"), así como por nuestra{" "}
        <Link href="/aviso-privacidad" className="text-[#004AC6] hover:underline">
          Política de Privacidad
        </Link>
        . Si no está de acuerdo con alguno de estos términos, le pedimos
        abstenerse de utilizar el Sitio. El uso continuo del Sitio implica la
        aceptación plena de los Términos aquí descritos.
      </p>
    ),
  },
  {
    id: "descripcion",
    title: "2. Descripción del Sitio y los servicios",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          <strong>ConZultaCRM</strong> es una empresa de consultoría
          especializada en la implementación, configuración y soporte del
          ecosistema Zoho, con sede en Ciudad de México y operación remota en
          México y Latinoamérica. Somos <strong>Zoho Authorized Partner</strong>.
        </p>
        <p>El Sitio tiene como propósito:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Informar sobre nuestros servicios de consultoría e implementación de CRM</li>
          <li>Facilitar el contacto con prospectos y clientes</li>
          <li>Publicar contenido informativo sobre el ecosistema Zoho y mejores prácticas de CRM</li>
          <li>Conectar a empresas interesadas con nuestros servicios como reseller autorizado de Zoho</li>
        </ul>
        <p>
          Los servicios contratados con ConZultaCRM —incluyendo implementación,
          configuración, capacitación y soporte— se rigen por contratos o
          propuestas específicas firmadas entre las partes, los cuales
          prevalecerán en caso de conflicto con estos Términos generales.
        </p>
      </div>
    ),
  },
  {
    id: "uso-aceptable",
    title: "3. Uso aceptable del Sitio",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>El usuario se compromete a utilizar el Sitio exclusivamente para fines lícitos y de conformidad con la legislación mexicana aplicable. Queda expresamente prohibido:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Realizar cualquier actividad que pueda dañar, deshabilitar o sobrecargar los servidores del Sitio</li>
          <li>Intentar acceder sin autorización a sistemas, redes o cuentas relacionadas con ConZultaCRM</li>
          <li>Utilizar el Sitio para enviar comunicaciones no solicitadas (spam) o contenido fraudulento</li>
          <li>Reproducir, distribuir o modificar el contenido del Sitio sin autorización previa y por escrito</li>
          <li>Suplantar la identidad de ConZultaCRM o cualquiera de sus colaboradores</li>
          <li>Utilizar scrapers, robots u otras herramientas automatizadas para extraer datos del Sitio</li>
        </ul>
        <p>
          ConZultaCRM se reserva el derecho de bloquear el acceso al Sitio a
          cualquier usuario que incumpla estas disposiciones.
        </p>
      </div>
    ),
  },
  {
    id: "propiedad-intelectual",
    title: "4. Propiedad intelectual",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          Todos los contenidos del Sitio —incluyendo, sin limitación, textos,
          gráficos, logotipos, íconos, imágenes, clips de audio, descargas
          digitales y compilaciones de datos— son propiedad de{" "}
          <strong>ConZultaCRM</strong> o de sus proveedores de contenido, y
          están protegidos por las leyes mexicanas e internacionales de
          derechos de autor y propiedad intelectual.
        </p>
        <p>
          Las marcas, nombres comerciales y logotipos de <strong>Zoho</strong>{" "}
          son propiedad de Zoho Corporation Pvt. Ltd. Su presencia en el Sitio
          refleja únicamente nuestra condición de Zoho Authorized Partner y no
          implica cesión alguna de derechos sobre dichas marcas.
        </p>
        <p>
          Se permite la reproducción parcial de contenidos del Sitio con fines
          informativos o académicos, siempre que se cite expresamente a
          ConZultaCRM como fuente y no se persigan fines comerciales. Para
          cualquier otro uso, se requiere autorización previa y por escrito.
        </p>
      </div>
    ),
  },
  {
    id: "privacidad",
    title: "5. Privacidad y datos personales",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        El tratamiento de sus datos personales se rige por nuestro{" "}
        <Link href="/aviso-privacidad" className="text-[#004AC6] hover:underline">
          Aviso de Privacidad
        </Link>
        , el cual cumple con lo dispuesto en la Ley Federal de Protección de
        Datos Personales en Posesión de los Particulares (LFPDPPP) y su
        Reglamento. Al utilizar el formulario de contacto del Sitio, usted
        consiente el tratamiento de sus datos conforme a dicho aviso.
      </p>
    ),
  },
  {
    id: "limitacion-responsabilidad",
    title: "6. Limitación de responsabilidad",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          ConZultaCRM realiza sus mejores esfuerzos para mantener el Sitio
          disponible y actualizado; sin embargo, no garantiza que el Sitio esté
          libre de interrupciones, errores o virus informáticos.
        </p>
        <p>En ningún caso ConZultaCRM será responsable por:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Daños directos o indirectos derivados del uso o la imposibilidad de uso del Sitio</li>
          <li>La exactitud, integridad o vigencia de la información publicada</li>
          <li>Daños causados por virus u otros elementos nocivos presentes en el Sitio o en sitios enlazados</li>
          <li>Decisiones de negocio tomadas con base en información del Sitio sin contar con asesoría profesional</li>
        </ul>
        <p>
          Los servicios prestados a clientes bajo contrato específico se
          regirán por las garantías y limitaciones establecidas en dicho
          contrato.
        </p>
      </div>
    ),
  },
  {
    id: "terceros",
    title: "7. Servicios y sitios de terceros",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          El Sitio puede contener enlaces a sitios web de terceros, incluyendo
          el sitio oficial de Zoho, páginas de tiendas de aplicaciones y redes
          sociales. Estos enlaces se proporcionan únicamente como referencia y
          no implican que ConZultaCRM respalde o controle dichos sitios.
        </p>
        <p>
          La contratación de productos Zoho a través de nuestros enlaces de
          reseller está sujeta a los{" "}
          <a
            href="https://www.zoho.com/terms.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#004AC6] hover:underline"
          >
            Términos de Servicio de Zoho Corporation
          </a>
          . ConZultaCRM actúa como intermediario autorizado y no asume
          responsabilidad por el funcionamiento de la plataforma Zoho ni por
          sus políticas de privacidad.
        </p>
      </div>
    ),
  },
  {
    id: "modificaciones",
    title: "8. Modificaciones a los Términos",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        ConZultaCRM se reserva el derecho de modificar los presentes Términos
        en cualquier momento. Las modificaciones entrarán en vigor desde el
        momento de su publicación en el Sitio. Se recomienda revisar esta
        página periódicamente. El uso continuado del Sitio después de la
        publicación de cambios constituye la aceptación de los Términos
        modificados.
      </p>
    ),
  },
  {
    id: "ley-aplicable",
    title: "9. Ley aplicable y jurisdicción",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Los presentes Términos se rigen por las leyes vigentes en los{" "}
        <strong>Estados Unidos Mexicanos</strong>. Para la resolución de
        cualquier controversia derivada de o relacionada con el uso del Sitio,
        las partes se someten expresamente a la jurisdicción de los tribunales
        competentes de la{" "}
        <strong>Ciudad de México</strong>, renunciando a cualquier otro fuero
        que pudiera corresponderles por razón de su domicilio presente o futuro.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "10. Contacto",
    content: (
      <div className="text-neutral-600 leading-relaxed space-y-3">
        <p>
          Para cualquier pregunta, aclaración o reporte sobre estos Términos,
          puede comunicarse con nosotros:
        </p>
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 space-y-2">
          <p>
            <strong>Correo:</strong>{" "}
            <a
              href="mailto:info@conzultacrm.com"
              className="text-[#004AC6] hover:underline"
            >
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
          Última actualización: julio 2026
        </p>
      </div>
    ),
  },
];

export default function TerminosPage() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <div
        className="py-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, #001A4D 0%, #003A8C 50%, #4C1D95 100%)",
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
            Términos y Condiciones
          </h1>
          <p className="text-blue-100 text-sm">
            Condiciones de uso del sitio web y los servicios de ConZultaCRM
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
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-[#004AC6] transition-colors"
          >
            ← Volver al inicio
          </Link>
          <Link href="/aviso-privacidad" className="text-sm text-neutral-500 hover:text-[#004AC6] transition-colors">
            Aviso de Privacidad →
          </Link>
        </div>
      </div>
    </div>
  );
}
