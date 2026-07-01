import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "FAQ | Inline Freight Systems",
  description:
    "Common questions about quotes, tracking, payments, and working with Inline Freight Systems.",
};

// ── Draft content — have the client review and edit every answer ──
const FAQS = [
  {
    q: "How fast will I get a quote?",
    a: "We respond to quote requests within 2 business hours during business hours (Mon–Fri, 8am–5pm PT). Complex international shipments may take a little longer if we need to confirm rates with overseas partners.",
  },
  {
    q: "What kinds of freight do you handle?",
    a: "Ocean (FCL and LCL), air freight, full truckload, less-than-truckload, customs brokerage, and short-term warehousing. If you're not sure which mode fits your shipment, send the details and we'll recommend the best option.",
  },
  {
    q: "Do you handle international shipments?",
    a: "Yes — Transpacific trade is our specialty. We have agent offices across Asia including Hong Kong, Shanghai, Shenzhen, Ningbo, Qingdao, Vietnam, Thailand, Malaysia, Indonesia, and Taiwan, plus partners in Europe.",
  },
  {
    q: "How do I track my shipment?",
    a: "Your dedicated contact provides milestone updates from pickup through proof of delivery. For ocean shipments, we'll share container tracking details so you can follow the vessel directly.",
  },
  {
    q: "How do I pay an invoice?",
    a: "We accept credit card and ACH payments through our secure payment portal, CargoSprint. Click 'Pay invoice' in the menu, or contact us if you need help with a payment.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Inline Freight Systems is a licensed freight broker (MC-000000 · USDOT 0000000), fully bonded and insured. We're happy to provide documentation on request.",
  },
  {
    q: "Do you work with new or small shippers?",
    a: "Absolutely. No minimum volume, no contracts required to get started — a single pallet gets the same attention as a full container program.",
  },
  {
    q: "I'm a carrier — how do I haul for you?",
    a: "Head to our carrier page and submit your MC and DOT numbers. Our carrier team reviews applications and reaches out to complete setup, usually within a few business days.",
  },
];

export default function FAQPage() {
  return (
    <div style={{ background: brand.base }}>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="mono text-xs tracking-[0.25em] mb-4" style={{ color: brand.accent }}>
          FAQ
        </p>
        <h1 className="display text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
          Common questions
        </h1>

        <div className="space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border px-5 py-4"
              style={{ borderColor: "rgba(127,168,200,0.25)" }}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between font-semibold text-white"
              >
                {item.q}
                <span
                  className="ml-4 transition-transform duration-200 group-open:rotate-45"
                  style={{ color: brand.accent }}
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: brand.steel }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-lg p-6 text-center" style={{ background: brand.baseAlt }}>
          <p className="text-white font-semibold mb-1">Didn&apos;t find your answer?</p>
          <p className="text-sm mb-4" style={{ color: brand.steel }}>
            Send us a message and a real person will get back to you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2.5 rounded-md text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ background: brand.accent }}
          >
            Contact us
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}