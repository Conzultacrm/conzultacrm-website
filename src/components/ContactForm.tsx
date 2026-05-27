"use client";

import { useState, useId } from "react";

const INDUSTRIAS = [
  "Inmobiliaria",
  "Construcción",
  "Manufactura / Maquinaria",
  "Retail / Comercio",
  "Servicios Profesionales",
  "Tecnología",
  "Salud",
  "Educación",
  "Otro",
];

const TAMANOS = [
  "1–10 personas",
  "11–50 personas",
  "51–200 personas",
  "200+ personas",
];

const CRM_ACTUAL = [
  "Ninguno (Excel o similar)",
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Zoho CRM básico",
  "Otro sistema",
];

const WA_URL =
  "https://wa.me/5215584046430?text=Hola%2C%20acabo%20de%20enviar%20un%20formulario%20de%20contacto";

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  industria: string;
  tamano: string;
  crmActual: string;
  mensaje: string;
}

const EMPTY: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  industria: "",
  tamano: "",
  crmActual: "",
  mensaje: "",
};

type Status = "idle" | "loading" | "success" | "error";

// --- tiny reusable input primitives ---

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-sm font-semibold text-neutral-700 mb-1.5">
      {children}
    </span>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-500">{msg}</p>;
}

function Input({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}: {
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50 focus:bg-white focus:outline-none transition-all duration-200 ${
        error
          ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
          : "border-neutral-200 focus:border-[#004AC6] focus:ring-2 focus:ring-blue-100"
      }`}
    />
  );
}

function Select({
  id,
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  error?: string;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-xl border text-sm bg-neutral-50 focus:bg-white focus:outline-none transition-all duration-200 appearance-none cursor-pointer ${
        value ? "text-neutral-900" : "text-neutral-400"
      } ${
        error
          ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
          : "border-neutral-200 focus:border-[#004AC6] focus:ring-2 focus:ring-blue-100"
      }`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

// --- step header meta ---
const STEPS = [
  { num: 1, label: "Tus datos" },
  { num: 2, label: "Tu empresa" },
  { num: 3, label: "Tu necesidad" },
];

export default function ContactForm() {
  const uid = useId();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const f =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((p) => ({ ...p, [field]: e.target.value }));
      setErrors((p) => ({ ...p, [field]: "" }));
    };

  function validateStep1() {
    const e: Partial<FormState> = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre completo";
    if (!form.email.trim() || !form.email.includes("@"))
      e.email = "Email inválido";
    if (!form.telefono.trim()) e.telefono = "Ingresa tu número de teléfono";
    setErrors(e);
    return !Object.keys(e).length;
  }

  function validateStep2() {
    const e: Partial<FormState> = {};
    if (!form.empresa.trim()) e.empresa = "Ingresa el nombre de tu empresa";
    if (!form.industria) e.industria = "Selecciona tu industria";
    if (!form.tamano) e.tamano = "Selecciona el tamaño de tu equipo";
    setErrors(e);
    return !Object.keys(e).length;
  }

  function next() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((s) => Math.min(s + 1, 3));
  }

  async function submit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  // ── Success ──────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-8 py-14 text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: "linear-gradient(135deg, #D1FAE5, #A7F3D0)",
              border: "2px solid #6EE7B7",
            }}
          >
            <svg
              className="w-10 h-10 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3
            className="text-2xl font-bold text-neutral-900 mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¡Solicitud enviada!
          </h3>
          <p className="text-neutral-500 mb-1.5">
            Hola{" "}
            <strong className="text-neutral-700">
              {form.nombre.split(" ")[0]}
            </strong>
            , recibimos tu solicitud.
          </p>
          <p className="text-neutral-500 mb-8">
            Un especialista te contactará en{" "}
            <span className="font-semibold text-emerald-600">
              menos de 2 horas hábiles
            </span>
            .
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 justify-center mx-auto"
          >
            <WhatsAppIcon className="w-4 h-4" />
            También escríbenos por WhatsApp
          </a>
          <p className="mt-6 text-xs text-neutral-400">
            Recibirás una confirmación en{" "}
            <strong className="text-neutral-500">{form.email}</strong>
          </p>
        </div>
      </div>
    );
  }

  // ── Error ─────────────────────────────────────────────────────────────
  if (status === "error") {
    return (
      <div className="bg-white border border-neutral-200 rounded-2xl p-10 text-center shadow-sm">
        <div className="w-16 h-16 bg-red-50 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-8 h-8 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3
          className="text-xl font-bold text-neutral-900 mb-2"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Algo salió mal
        </h3>
        <p className="text-neutral-500 mb-6 text-sm">
          No te preocupes, escríbenos directamente por WhatsApp o correo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            onClick={() => {
              setStatus("idle");
              setStep(1);
            }}
            className="btn-outline justify-center"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  // ── Form wizard ──────────────────────────────────────────────────────
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
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

      {/* Step indicators */}
      <div className="px-6 pt-5 pb-1">
        <div className="flex items-center gap-2 mb-1">
          {STEPS.map((s, i) => (
            <div key={s.num} className="flex items-center gap-2 flex-1">
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0 ${
                    step > s.num
                      ? "text-white"
                      : step === s.num
                      ? "text-white"
                      : "bg-neutral-100 text-neutral-400"
                  }`}
                  style={
                    step >= s.num
                      ? {
                          background:
                            "linear-gradient(135deg, #004AC6, #7C3AED)",
                        }
                      : {}
                  }
                >
                  {step > s.num ? (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    s.num
                  )}
                </div>
                <span
                  className={`text-xs font-semibold transition-colors ${
                    step >= s.num ? "text-neutral-700" : "text-neutral-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex-1 h-px bg-neutral-200 mx-1">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: step > s.num ? "100%" : "0%",
                      background:
                        "linear-gradient(to right, #004AC6, #7C3AED)",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form body */}
      <div className="px-6 py-5">
        {/* ── Step 1 ── */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label>Nombre completo *</Label>
              <Input
                id={`${uid}-nombre`}
                placeholder="Ej. María González"
                value={form.nombre}
                onChange={f("nombre")}
                error={errors.nombre}
                autoComplete="name"
              />
              <FieldError msg={errors.nombre} />
            </div>
            <div>
              <Label>Correo electrónico *</Label>
              <Input
                id={`${uid}-email`}
                type="email"
                placeholder="tu@empresa.com"
                value={form.email}
                onChange={f("email")}
                error={errors.email}
                autoComplete="email"
              />
              <FieldError msg={errors.email} />
            </div>
            <div>
              <Label>Teléfono *</Label>
              <Input
                id={`${uid}-telefono`}
                type="tel"
                placeholder="+52 55 1234 5678"
                value={form.telefono}
                onChange={f("telefono")}
                error={errors.telefono}
                autoComplete="tel"
              />
              <FieldError msg={errors.telefono} />
            </div>
          </div>
        )}

        {/* ── Step 2 ── */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <Label>Nombre de tu empresa *</Label>
              <Input
                id={`${uid}-empresa`}
                placeholder="Ej. Inmobiliaria del Norte"
                value={form.empresa}
                onChange={f("empresa")}
                error={errors.empresa}
                autoComplete="organization"
              />
              <FieldError msg={errors.empresa} />
            </div>
            <div>
              <Label>Industria *</Label>
              <Select
                id={`${uid}-industria`}
                value={form.industria}
                onChange={f("industria")}
                options={INDUSTRIAS}
                placeholder="Selecciona tu industria"
                error={errors.industria}
              />
              <FieldError msg={errors.industria} />
            </div>
            <div>
              <Label>Tamaño del equipo *</Label>
              <div className="grid grid-cols-2 gap-2">
                {TAMANOS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setForm((p) => ({ ...p, tamano: t }));
                      setErrors((p) => ({ ...p, tamano: "" }));
                    }}
                    className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 text-left ${
                      form.tamano === t
                        ? "border-[#004AC6] bg-blue-50 text-[#004AC6]"
                        : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-100"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <FieldError msg={errors.tamano} />
            </div>
          </div>
        )}

        {/* ── Step 3 ── */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <Label>¿Qué CRM usan actualmente?</Label>
              <div className="grid grid-cols-2 gap-2">
                {CRM_ACTUAL.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, crmActual: c }))}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-medium transition-all duration-200 text-left ${
                      form.crmActual === c
                        ? "border-[#7C3AED] bg-violet-50 text-[#7C3AED]"
                        : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-100"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label>¿Qué necesitas mejorar? (opcional)</Label>
              <textarea
                id={`${uid}-mensaje`}
                rows={4}
                placeholder="Cuéntanos tu reto principal: qué procesos quieres automatizar, cuántos usuarios tendrás, o cualquier detalle que nos ayude a preparar una demo personalizada..."
                value={form.mensaje}
                onChange={f("mensaje")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#004AC6] focus:ring-2 focus:ring-blue-100 transition-all duration-200 resize-none"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 pt-5 border-t border-neutral-100">
          {step > 1 ? (
            <button
              onClick={() => setStep((s) => Math.max(s - 1, 1) as 1 | 2 | 3)}
              className="text-sm font-semibold text-neutral-500 hover:text-neutral-700 flex items-center gap-1.5 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver
            </button>
          ) : (
            <span />
          )}

          {step < 3 ? (
            <button
              onClick={next}
              className="btn-primary text-sm py-2.5 px-7"
            >
              Siguiente
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={status === "loading"}
              className="btn-primary text-sm py-2.5 px-7 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Solicitar demo
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Footer note */}
      <div className="px-6 py-3 border-t border-neutral-100 bg-neutral-50">
        <p className="text-xs text-neutral-400 text-center">
          Tus datos están seguros y protegidos.{" "}
          <span className="font-semibold text-neutral-500">
            Nunca compartimos tu información
          </span>{" "}
          con terceros.
        </p>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
