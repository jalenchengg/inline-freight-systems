"use client";

import { useState } from "react";
import { brand } from "@/lib/brand";

const inputClass =
  "w-full px-3 py-2.5 rounded-md text-sm border outline-none focus:ring-2 bg-white";
const inputStyle = { borderColor: "#D2DCE6" };
const labelClass = "mono block text-xs tracking-widest mb-1.5";

const EQUIPMENT = [
  "Dry Van",
  "Reefer",
  "Flatbed",
  "Box Truck",
  "Power Only",
  "Other",
];

export default function CarrierForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [equipment, setEquipment] = useState<string[]>([]);

  function toggleEquipment(eq: string) {
    setEquipment((prev) =>
      prev.includes(eq) ? prev.filter((e) => e !== eq) : [...prev, eq],
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      equipment,
    };

    const res = await fetch("/api/carriers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
      setEquipment([]);
    } else {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-lg p-10 text-center"
        style={{ background: brand.paper }}
      >
        <p
          className="display mb-2 text-2xl font-bold"
          style={{ color: brand.ink }}
        >
          Application received ✓
        </p>
        <p className="text-sm" style={{ color: brand.slate }}>
          Our carrier team will review your info and reach out to complete
          setup.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg p-6 shadow-2xl md:p-8"
      style={{ background: brand.paper }}
    >
      {/* Contact */}
      <p
        className="mono mb-4 text-xs tracking-[0.25em]"
        style={{ color: brand.accent }}
      >
        YOUR COMPANY
      </p>

      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className={labelClass}
            style={{ color: brand.slate }}
          >
            COMPANY NAME
          </label>
          <input
            id="company"
            name="company"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            htmlFor="contact"
            className={labelClass}
            style={{ color: brand.slate }}
          >
            CONTACT NAME
          </label>
          <input
            id="contact"
            name="contact"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className={labelClass}
            style={{ color: brand.slate }}
          >
            EMAIL
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className={labelClass}
            style={{ color: brand.slate }}
          >
            PHONE
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Operation */}
      <p
        className="mono mb-4 text-xs tracking-[0.25em]"
        style={{ color: brand.accent }}
      >
        YOUR OPERATION
      </p>

      <div className="mb-5">
        <p className={labelClass} style={{ color: brand.slate }}>
          EQUIPMENT TYPES
        </p>
        <div className="flex flex-wrap gap-2">
          {EQUIPMENT.map((eq) => {
            const active = equipment.includes(eq);
            return (
              <button
                key={eq}
                type="button"
                onClick={() => toggleEquipment(eq)}
                className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                style={
                  active
                    ? { background: brand.navy, color: "#fff" }
                    : { background: "#E2E9F0", color: brand.slate }
                }
              >
                {eq}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-8">
        <label
          htmlFor="lanes"
          className={labelClass}
          style={{ color: brand.slate }}
        >
          PREFERRED LANES / NOTES
        </label>
        <textarea
          id="lanes"
          name="lanes"
          rows={3}
          placeholder="e.g. CA to TX, Pacific Northwest regional..."
          className={inputClass}
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md py-3 font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
        style={{ background: brand.accent }}
      >
        {status === "sending" ? "Submitting..." : "Apply to our network"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong — please try again or contact us directly.
        </p>
      )}
    </form>
  );
}
