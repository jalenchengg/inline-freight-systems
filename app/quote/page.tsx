import Header from "@/components/header";
import Footer from "@/components/footer";
import QuoteForm from "@/components/quote-form";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Request a Quote | Inline Freight Systems",
  description:
    "Get a freight quote for ocean, air, or truck shipments. Quotes returned within 2 business hours.",
};

export default function QuotePage() {
  return (
    <div style={{ background: brand.base }}>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-12">
        {/* Left: pitch */}
        <div className="lg:col-span-2">
          <p className="mono text-xs tracking-[0.25em] mb-4" style={{ color: brand.accent }}>
            REQUEST A QUOTE
          </p>
          <h1 className="display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Tell us the lane. We&apos;ll handle the rest.
          </h1>
          <p className="mb-8" style={{ color: brand.steel }}>
            Fill out what you know — estimates are fine. A real person reviews every request and
            responds within 2 business hours with pricing and next steps.
          </p>
          <ul className="space-y-3 text-sm" style={{ color: brand.steel }}>
            <li>✓ No account required</li>
            <li>✓ One contact from quote to delivery</li>
            <li>✓ Vetted carriers on every lane</li>
          </ul>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-3">
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}