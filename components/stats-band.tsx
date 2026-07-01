import { brand } from "@/lib/brand";

// Swap for the client's real numbers before launch
const STATS: [string, string][] = [
  ["20k+", "Satisfied customers"],
  ["50+", "Carrier partners"],
  ["98.4%", "On-time rate"],
  ["2 hrs", "Avg. quote time"],
];

export default function StatsBand() {
  return (
    <section className="py-14" style={{ background: brand.baseAlt }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map(([value, label]) => (
          <div key={label}>
            <div className="display text-3xl md:text-4xl font-bold text-white">{value}</div>
            <div className="mono text-xs tracking-widest mt-2" style={{ color: brand.steel }}>
              {label.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}