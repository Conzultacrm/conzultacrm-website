"use client";

import { useEffect } from "react";

const ZOHO_FORM_SRC =
  "https://crm.zoho.com/crm/WebFormServeServlet?rid=0910ad374e58524cde083191bc99e258d50c9e0088335a04caf6373feba201ad5447d87375d4ec0a1c0780a0a331a6c0gida31291a1e5d5aad3fb4497520b66ab2d3bd99eb4620142528397a7324ff147bf";

export default function ContactForm() {
  useEffect(() => {
    // Zoho iframe postMessage handler
    function handleMessage(evt: MessageEvent) {
      if (
        evt.origin === "https://crm.zoho.com" ||
        evt.origin === "https://crm.zohopublic.com"
      ) {
        const locObj = JSON.stringify({
          origin: window.location.origin,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        });
        (evt.source as Window).postMessage(
          "prnt_wnd_pg_lc_rc_frm_prwindow_" + locObj,
          evt.origin
        );
      }
    }
    window.addEventListener("message", handleMessage, false);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Header bar */}
      <div
        className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between"
        style={{ background: "linear-gradient(135deg, #FAF8FF, #F2F2F8)" }}
      >
        <div>
          <p
            className="font-bold text-neutral-900"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Solicita tu Demo Gratuita
          </p>
          <p className="text-neutral-500 text-sm">
            Respondemos en menos de 2 horas hábiles
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-neutral-500 font-medium">En línea</span>
        </div>
      </div>

      {/* Zoho iframe */}
      <div className="relative w-full" style={{ minHeight: "680px" }}>
        <iframe
          src={ZOHO_FORM_SRC}
          width="100%"
          height="680"
          style={{
            border: "none",
            display: "block",
          }}
          title="Formulario de contacto ConZultaCRM"
          loading="lazy"
          allow="forms"
        />
      </div>

      {/* Footer note */}
      <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50">
        <p className="text-xs text-neutral-400 text-center">
          Tus datos están seguros. Procesado por{" "}
          <span className="font-semibold text-neutral-500">Zoho CRM</span>{" "}
          — nunca compartimos tu información con terceros.
        </p>
      </div>
    </div>
  );
}
