import { brand } from "@/lib/brand";

const LANES = [
  "MSC· OCEAN · 14D",
  "Maersk · FTL · 2D",
  "Evergreen Marine · OCEAN · 16D",
  "Yang Ming · AIR · 18H",
  "COSCO Shipping · LTL · 3D",
  "OOCL · OCEAN · 11D",
  "ONE · AIR · 9H",
  "SMLines · OCEAN · 13D", 
  "HMM · LTL · 4D",
  "Hapag-Lloyd · AIR · 12H",
  "CMA CGM · OCEAN · 15D",
  "ZIM · LTL · 5D",
];

export default function Ticker() {
  const row = LANES.join("   •   ");
  return (
    <div
      className="overflow-hidden border-y py-2"
      style={{ borderColor: "rgba(20,160,220,0.25)", background: brand.baseAlt }}
    >
      <div
        className="whitespace-nowrap mono text-xs tracking-widest"
        style={{ color: brand.steel, animation: "tick 40s linear infinite" }}
      >
        {row}   •   {row}
      </div>
    </div>
  );
}