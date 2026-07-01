import { brand } from "@/lib/brand";

const STEPS = [
  {
    n: "01",
    t: "Request",
    d: "Tell us the lane, freight type, and timeline. Quotes back within hours, not days.",
  },
  {
    n: "02",
    t: "Book",
    d: "We match your load with a vetted carrier from our agent network and lock the rate.",
  },
  {
    n: "03",
    t: "Track",
    d: "Milestone updates from pickup to proof of delivery, with one point of contact throughout.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mono text-xs tracking-[0.25em] mb-3" style={{ color: brand.accent }}>
          THE PROCESS
        </p>
        <h2 className="display text-3xl md:text-4xl font-bold text-white mb-10">
          Quote to delivery in three steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t pt-6" style={{ borderColor: "rgba(127,168,200,0.25)" }}>
              <span className="mono text-sm" style={{ color: brand.green }}>
                {s.n}
              </span>
              <h3 className="display text-xl font-bold text-white mt-2 mb-2">{s.t}</h3>
              <p className="text-sm leading-relaxed" style={{ color: brand.steel }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}