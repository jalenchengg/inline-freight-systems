"use client";

import { useState } from "react";
import { brand } from "@/lib/brand";

const inputClass =
  "w-full px-3 py-2.5 rounded-md text-sm border outline-none focus:ring-2 bg-white";
const inputStyle = { borderColor: "#D2DCE6" };

export default function QuoteCard() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: "Homepage inquiry",
        message: data.message,
      }),
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
      <div className="w-full max-w-md rounded-lg p-10 text-center shadow-2xl" style={{ background: brand.paper }}>
        <p className="display mb-2 text-2xl font-bold" style={{ color: brand.ink }}>
          Thanks — we got it ✓
        </p>
        <p className="text-sm" style={{ color: brand.slate }}>
          A real person will get back to you within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg p-6 shadow-2xl"
      style={{ background: brand.paper }}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="mono text-xs tracking-widest" style={{ color: brand.slate }}>
          GET IN TOUCH
        </span>
        <span className="mono text-xs" style={{ color: brand.accent }}>
          IFS-{new Date().getFullYear()}
        </span>
      </div>

      <div className="mb-3">
        <input name="name" placeholder="Your name" required className={inputClass} style={inputStyle} />
      </div>
      <div className="mb-3">
        <input name="email" type="email" placeholder="Email" required className={inputClass} style={inputStyle} />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          rows={4}
          placeholder="What do you need to ship?"
          required
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
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "error" ? (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong — please try again.
        </p>
      ) : (
        <p className="mt-3 text-center text-xs" style={{ color: "#8A98A8" }}>
          Quotes returned within 2 business hours.
        </p>
      )}
    </form>
  );
}