import Header from "@/components/header";
import Footer from "@/components/footer";
import AgentsDirectory from "@/components/agents-directory";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Agent Directory | Inline Freight Systems",
  description:
    "Our global agent network across Asia, Europe, and the Americas — contact details for every office.",
};

export default function AgentDirectoryPage() {
  return (
    <div style={{ background: brand.base }}>
      <Header />
      <main>
        {/* Compact hero */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-14">
          <p className="mono text-xs tracking-[0.25em] mb-4" style={{ color: brand.accent }}>
            GLOBAL NETWORK
          </p>
          <h1 className="display text-4xl md:text-6xl font-bold text-white leading-tight mb-5 max-w-2xl">
            A directory for our agents
          </h1>
          <p className="text-lg max-w-xl" style={{ color: brand.steel }}>
            Our extensive agent network and deep expertise in Transpacific trade position us as one
            of the leading logistics providers in the industry.
          </p>
        </section>

        <AgentsDirectory />
      </main>
      <Footer />
    </div>
  );
}