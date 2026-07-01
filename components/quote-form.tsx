"use client";

import { useState } from "react";
import { brand } from "@/lib/brand";

const MODES = ["Ocean", "Air", "Truck"] as const;

const inputClass =
  "w-full px-3 py-2.5 rounded-md text-sm border outline-none focus:ring-2 bg-white";
const inputStyle = { borderColor: "#D2DCE6" };
const labelClass = "mono block text-xs tracking-widest mb-1.5";

export default function QuoteForm() {
  const [mode, setMode] = useState<(typeof MODES)[number]>("Ocean");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, mode }),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg p-10 text-center" style={{ background: brand.paper }}>
        <p className="display text-2xl font-bold mb-2" style={{ color: brand.ink }}>
          Request received ✓
        </p>
        <p className="text-sm" style={{ color: brand.slate }}>
          We&apos;ll get back to you with a quote within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg p-6 md:p-8 shadow-2xl"
      style={{ background: brand.paper }}
    >
      {/* Mode tabs */}
      <div className="flex gap-2 mb-6">
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            style={
              mode === m
                ? { background: brand.navy, color: "#fff" }
                : { background: "#E2E9F0", color: brand.slate }
            }
          >
            {m}
          </button>
        ))}
      </div>

      {/* Contact */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className={labelClass} style={{ color: brand.slate }}>
            NAME
          </label>
          <input id="name" name="name" required className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass} style={{ color: brand.slate }}>
            COMPANY
          </label>
          <input id="company" name="company" className={inputClass} style={inputStyle} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className={labelClass} style={{ color: brand.slate }}>
            EMAIL
          </label>
          <input id="email" name="email" type="email" required className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass} style={{ color: brand.slate }}>
            PHONE
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} style={inputStyle} />
        </div>
      </div>

      {/* Shipment */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="origin" className={labelClass} style={{ color: brand.slate }}>
            ORIGIN CITY / PORT
          </label>
          <input id="origin" name="origin" required className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="destination" className={labelClass} style={{ color: brand.slate }}>
            DESTINATION
          </label>
          <input id="destination" name="destination" required className={inputClass} style={inputStyle} />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="weight" className={labelClass} style={{ color: brand.slate }}>
            WEIGHT (LBS)
          </label>
          <input id="weight" name="weight" className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="pieces" className={labelClass} style={{ color: brand.slate }}>
            PIECES / PALLETS
          </label>
          <input id="pieces" name="pieces" className={inputClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="ready" className={labelClass} style={{ color: brand.slate }}>
            READY DATE
          </label>
          <input id="ready" name="ready" type="date" className={inputClass} style={inputStyle} />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="details" className={labelClass} style={{ color: brand.slate }}>
          CARGO DETAILS / NOTES
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Commodity, dimensions, hazmat, special handling..."
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 rounded-md font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
        style={{ background: brand.accent }}
      >
        {status === "sending" ? "Sending..." : "Request my quote"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-center text-red-600">
          Something went wrong — please try again or email us directly.
        </p>
      )}
    </form>
  );
}