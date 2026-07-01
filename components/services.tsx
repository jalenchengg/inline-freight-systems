import { brand } from "@/lib/brand";

const SERVICES = [
  {
    code: "OCN",
    name: "Ocean Freight",
    desc: "FCL and LCL bookings on major trans-Pacific and trans-Atlantic lanes through vetted carrier partners.",
  },
  {
    code: "AIR",
    name: "Air Freight",
    desc: "Time-critical cargo with door-to-door coordination and customs pre-clearance.",
  },
  {
    code: "FTL",
    name: "Full Truckload",
    desc: "Dedicated dry van, reefer, and flatbed capacity across all 48 states.",
  },
  {
    code: "LTL",
    name: "Less Than Truckload",
    desc: "Consolidated shipments with transparent per-pallet pricing.",
  },
  {
    code: "CUS",
    name: "Customs Brokerage",
    desc: "Entry filing, ISF, and duty management handled by licensed brokers.",
  },
  {
    code: "WHS",
    name: "Warehousing",
    desc: "Short-term storage, cross-docking, and transloading near major ports.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20" style={{ background: brand.paper }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="mono text-xs tracking-[0.25em] mb-3" style={{ color: brand.accent }}>
          WHAT WE MOVE
        </p>
        <h2 className="display text-3xl md:text-4xl font-bold mb-10" style={{ color: brand.ink }}>
          Six ways to ship
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.code}
              className="group rounded-lg p-6 border bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: brand.border }}
            >
              <div
                className="mono text-xs mb-3 inline-block px-2 py-1 rounded text-white"
                style={{ background: brand.navy }}
              >
                {s.code}
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: brand.ink }}>
                {s.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: brand.slate }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}