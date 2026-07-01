"use client";

import { useState } from "react";
import { agentData, type Agent } from "../lib/agents";
import { brand } from "../lib/brand";

// Only regions that actually have agents become tabs
const REGIONS = Object.keys(agentData).filter((r) => agentData[r].length > 0);

// "Hong Kong | RS Logistics Ltd ℅ Inline Freight System Inc"
//  -> city: "Hong Kong", partner: "RS Logistics Ltd"
function parseName(raw: string) {
  const [city, rest = ""] = raw.split("|").map((s) => s.trim());
  const partner = rest.split("℅")[0].trim();
  return { city, partner };
}

function AgentCard({ agent }: { agent: Agent }) {
  const { city, partner } = parseName(agent.name);

  return (
    <div
      className="rounded-lg border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
      style={{ borderColor: brand.border }}
    >
      <h3
        className="display mb-0.5 text-xl font-bold"
        style={{ color: brand.ink }}
      >
        {city}
      </h3>
      <p
        className="mono mb-4 text-xs tracking-wide"
        style={{ color: brand.accent }}
      >
        {partner}
      </p>

      <p
        className="mb-4 text-sm leading-relaxed whitespace-pre-line"
        style={{ color: brand.slate }}
      >
        {agent.address}
      </p>

      <div className="space-y-1.5 text-sm">
        <p style={{ color: brand.slate }}>
          <span
            className="mono mr-2 text-xs tracking-widest"
            style={{ color: brand.steel }}
          >
            TEL
          </span>
          <a
            href={`tel:${agent.tel.replace(/[^+\d]/g, "")}`}
            className="hover:underline"
            style={{ color: brand.ink }}
          >
            {agent.tel}
          </a>
        </p>
        {agent.fax !== "N/A" && agent.fax !== "TBC" && (
          <p style={{ color: brand.slate }}>
            <span
              className="mono mr-2 text-xs tracking-widest"
              style={{ color: brand.steel }}
            >
              FAX
            </span>
            <span style={{ color: brand.ink }}>{agent.fax}</span>
          </p>
        )}
        <p style={{ color: brand.slate }}>
          <span
            className="mono mr-2 text-xs tracking-widest"
            style={{ color: brand.steel }}
          >
            EMAIL
          </span>
          <a
            href={`mailto:${agent.email}`}
            className="hover:underline"
            style={{ color: brand.accent }}
          >
            {agent.email}
          </a>
        </p>
      </div>
    </div>
  );
}

export default function AgentsDirectory() {
  const [region, setRegion] = useState(REGIONS[0]);
  const agents = agentData[region] ?? [];

  return (
    <section className="py-16" style={{ background: brand.paper }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Region tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {REGIONS.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
              style={
                region === r
                  ? { background: brand.navy, color: "#fff" }
                  : { background: "#E2E9F0", color: brand.slate }
              }
            >
              {r}
              <span
                className="mono ml-2 text-xs"
                style={{ color: region === r ? brand.steel : "#9AAaba" }}
              >
                {agentData[r].length}
              </span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}
