"use client";

import { useState } from "react";
import { Agent, tabs, agentData } from "@/lib/agents";

export default function AgentDirectory() {
  const [selectedTab, setSelectedTab] = useState("Asia");

  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 py-24">
      {/* Desktop Tabs */}
      <div className="mb-6 hidden flex-wrap justify-center gap-4 text-lg font-medium md:flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 transition ${
              selectedTab === tab
                ? "text-black underline"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="relative mb-6 block md:hidden">
        <select
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-300 p-3 pr-10"
        >
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>

        {/* Custom arrow */}
        <svg
          className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Agent Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {(agentData[selectedTab] || []).map((agent, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-300 p-6 shadow-sm"
          >
            <p className="font-semibold">{agent.name}</p>
            <p className="whitespace-pre-line">{agent.address}</p>
            <p>Tel: {agent.tel}</p>
            <p>Fax: {agent.fax}</p>
            <p>
              E-mail:{" "}
              <a
                href={`mailto:${agent.email}`}
                className="font-semibold underline"
              >
                {agent.email}
              </a>
            </p>
          </div>
        ))}
        {agentData[selectedTab]?.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No agents listed for {selectedTab}.
          </p>
        )}
      </div>
    </section>
  );
}
