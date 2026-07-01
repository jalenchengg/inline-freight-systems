import Header from "@/components/header";
import Footer from "@/components/footer";
import CarrierForm from "@/components/carrier-form";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Join Our Carrier Network | Inline Freight Systems",
  description:
    "Haul for Inline Freight Systems — consistent freight, fair rates, and fast payment for vetted carriers.",
};

const PERKS = [
  { t: "Consistent freight", d: "Steady lanes from repeat shippers, not one-off spot scraps." },
  { t: "Fast pay", d: "Quick pay options available — no chasing invoices for 60 days." },
  { t: "Real dispatchers", d: "A person answers. Detention, layovers, and issues get handled." },
];

export default function CarriersPage() {
  return (
    <div style={{ background: brand.base }}>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <p className="mono text-xs tracking-[0.25em] mb-4" style={{ color: brand.accent }}>
            FOR CARRIERS
          </p>
          <h1 className="display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Haul with people who respect your time.
          </h1>
          <p className="mb-10" style={{ color: brand.steel }}>
            We&apos;re always adding vetted carriers to our network. Tell us about your operation
            and our carrier team will reach out to complete setup.
          </p>

          <div className="space-y-6">
            {PERKS.map((p) => (
              <div key={p.t} className="border-t pt-4" style={{ borderColor: "rgba(127,168,200,0.25)" }}>
                <h3 className="display text-lg font-bold text-white mb-1">{p.t}</h3>
                <p className="text-sm" style={{ color: brand.steel }}>
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <CarrierForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}