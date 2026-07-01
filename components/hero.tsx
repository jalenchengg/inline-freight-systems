import QuoteCard from "@/components/quote-card";
import { brand } from "@/lib/brand";

function RouteLine() {
  // air starts high-left, ends low-right
  const airRoute = "M 40 90 C 200 80, 400 240, 560 250";
  // sea starts low-left, ends high-right — crosses the air lane in the middle
  const seaRoute = "M 40 250 C 200 260, 400 100, 560 90";

  return (
    <svg
      viewBox="0 0 600 320"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 84 }).map((_, i) => (
        <circle
          key={i}
          cx={(i % 12) * 52 + 20}
          cy={Math.floor(i / 12) * 48 + 16}
          r="1.5"
          fill="rgba(127,168,200,0.2)"
        />
      ))}

      {/* ── AIR LANE (high-left → low-right) ── */}
      <path
        d={airRoute}
        stroke="rgba(127,168,200,0.35)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <path
        id="airRoute"
        d={airRoute}
        stroke={brand.accent}
        strokeWidth="2"
        strokeDasharray="700"
        strokeDashoffset="700"
        style={{ animation: "draw 5s ease-out forwards" }}
      />

      {/* ── SEA LANE (low-left → high-right) ── */}
      <path
        d={seaRoute}
        stroke="rgba(127,168,200,0.35)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <path
        id="seaRoute"
        d={seaRoute}
        stroke={brand.accent}
        strokeWidth="2"
        strokeDasharray="700"
        strokeDashoffset="700"
        style={{ animation: "draw 5s ease-out forwards" }}
      />

      {/* plane (on the air lane) */}
      <g fill={brand.green}>
        <path
          d="M11 0 L3 -1.2 L-2 -6.5 L-4.2 -6.5 L-1.4 -1.2 L-7 -0.9 L-9 -3.2 L-10.8 -3.2 L-9.6 0 L-10.8 3.2 L-9 3.2 L-7 0.9 L-1.4 1.2 L-4.2 6.5 L-2 6.5 L3 1.2 Z"
          transform="scale(1.5)"
        />
        <animateMotion
          dur="5s"
          fill="freeze"
          rotate="auto"
          keyPoints="0;1"
          keyTimes="0;1"
        >
          <mpath href="#airRoute" />
        </animateMotion>
      </g>

      {/* container ship (on the sea lane) */}
      <g fill={brand.steel}>
        <g transform="scale(1.4)">
          <path d="M-11 2 L11 2 L8 7 L-8 7 Z" />
          <rect x="-11" y="-1" width="22" height="3" />
          <rect x="-9" y="-5" width="4" height="4" fill={brand.accent} />
          <rect x="-4.5" y="-5" width="4" height="4" fill={brand.green} />
          <rect x="0" y="-5" width="4" height="4" fill={brand.amber} />
          <rect x="5" y="-7" width="4" height="6" fill="#fff" />
        </g>
        <animateMotion
          dur="7s"
          fill="freeze"
          rotate="auto"
          keyPoints="0;1"
          keyTimes="0;1"
        >
          <mpath href="#seaRoute" />
        </animateMotion>
      </g>

      {/* endpoint rings */}
      <circle
        cx="560"
        cy="250"
        r="5"
        fill="none"
        stroke={brand.accent}
        strokeWidth="2"
      />
      <circle
        cx="560"
        cy="90"
        r="5"
        fill="none"
        stroke={brand.accent}
        strokeWidth="2"
      />

      {/* labels */}
      <text
        x="40"
        y="78"
        fontFamily="monospace"
        fontSize="11"
        fill={brand.steel}
      >
        LAX / AIR
      </text>
      <text
        x="40"
        y="275"
        fontFamily="monospace"
        fontSize="11"
        fill={brand.steel}
      >
        LGB / SEA
      </text>
      <text
        x="470"
        y="242"
        fontFamily="monospace"
        fontSize="11"
        fill={brand.steel}
      >
        SHA / DEST
      </text>
      <text
        x="470"
        y="82"
        fontFamily="monospace"
        fontSize="11"
        fill={brand.steel}
      >
        SHA / DEST
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-12 pb-20 lg:grid-cols-2">
      <div className="fade-up">
        <p
          className="mono mb-4 text-xs tracking-[0.25em]"
          style={{ color: brand.accent }}
        >
          OCEAN · AIR · GROUND FREIGHT
        </p>
        <h1 className="display mb-5 text-4xl leading-tight font-bold text-white md:text-6xl">
          Your Freight, moved by people who answer the phone.
        </h1>
        <p className="mb-8 max-w-md text-lg" style={{ color: brand.steel }}>
          Inline Freight Systems streamlines your supply chain with a smart
          solution designed to move your business forward.
        </p>
        <div className="mt-2 hidden h-44 md:block">
          <RouteLine />
        </div>
      </div>
      <div
        id="quote"
        className="fade-up flex justify-center lg:justify-end"
        style={{ animationDelay: ".15s" }}
      >
        <QuoteCard />
      </div>
    </section>
  );
}
