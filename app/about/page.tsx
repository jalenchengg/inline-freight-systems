import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StatsBand from "@/components/stats-band";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "About | Inline Freight Systems",
  description:
    "Inline Freight Systems is a licensed freight broker connecting shippers to a vetted global agent network across ocean, air, and ground.",
};

// ── Swap these for the client's real values ──
const VALUES = [
  {
    t: "One point of contact",
    d: "No call centers, no ticket queues. The person who quotes your freight is the person who tracks it to delivery.",
  },
  {
    t: "Vetted network",
    d: "Every carrier and overseas agent we work with is vetted for licensing, insurance, and track record before they touch a load.",
  },
  {
    t: "Transpacific depth",
    d: "Offices and partners across Asia's major ports give us real coverage where most of our customers' freight actually originates.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: brand.base }}>
      <Header />
      <main>
        {/* Intro */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-14">
          <p
            className="mono mb-4 text-xs tracking-[0.25em]"
            style={{ color: brand.accent }}
          >
            ABOUT US
          </p>
          <h1 className="display mb-5 max-w-3xl text-4xl leading-tight font-bold text-white md:text-6xl">
            The middleman that actually makes shipping simpler.
          </h1>
          <p className="max-w-2xl text-lg" style={{ color: brand.steel }}>
            {/* PLACEHOLDER — replace with the client's real story */}
            Inline Freight Systems was founded in 2009 in Los Angeles, CA to do
            one thing well: connect shippers with reliable capacity across the
            Pacific and across the country, without the runaround. Today we move
            freight by ocean, air, and ground through a vetted agent network
            spanning 20 countries.
          </p>
        </section>

        {/* Image band — reuse the ship photo from the old site */}
        <section className="relative h-72 w-full md:h-96">
          <Image
            src="/ONEbg.png"
            alt="Container ship at port"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(10,18,48,0.45)" }}
          />
        </section>

        {/* What we stand for */}
        <section className="py-20" style={{ background: brand.paper }}>
          <div className="mx-auto max-w-6xl px-6">
            <p
              className="mono mb-3 text-xs tracking-[0.25em]"
              style={{ color: brand.accent }}
            >
              HOW WE WORK
            </p>
            <h2
              className="display mb-10 text-3xl font-bold md:text-4xl"
              style={{ color: brand.ink }}
            >
              Why shippers stay with us
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {VALUES.map((v) => (
                <div
                  key={v.t}
                  className="rounded-lg border bg-white p-6"
                  style={{ borderColor: brand.border }}
                >
                  <h3
                    className="mb-2 text-lg font-semibold"
                    style={{ color: brand.ink }}
                  >
                    {v.t}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: brand.slate }}
                  >
                    {v.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StatsBand />

        {/* Credentials */}
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <p
                className="mono mb-3 text-xs tracking-[0.25em]"
                style={{ color: brand.accent }}
              >
                LICENSED &amp; BONDED
              </p>
              <h2 className="display mb-5 text-3xl font-bold text-white md:text-4xl">
                Credentials that matter in freight
              </h2>
              <p style={{ color: brand.steel }}>
                {/* PLACEHOLDER — confirm which of these apply and get real numbers */}
                Inline Freight Systems is a licensed freight broker (NVOCC / FMC
                No. 000000). Fully bonded and insured.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-lg border p-5"
                style={{ borderColor: "rgba(127,168,200,0.25)" }}
              >
                <p
                  className="mono mb-1 text-xs tracking-widest"
                  style={{ color: brand.steel }}
                >
                  NVOCC No.
                </p>
                <p className="display text-xl font-bold text-white">
                  MC-000000
                </p>
              </div>
              <div
                className="rounded-lg border p-5"
                style={{ borderColor: "rgba(127,168,200,0.25)" }}
              >
                <p
                  className="mono mb-1 text-xs tracking-widest"
                  style={{ color: brand.steel }}
                >
                  FMC No.
                </p>
                <p className="display text-xl font-bold text-white">0000000</p>
              </div>
              <div
                className="rounded-lg border p-5"
                style={{ borderColor: "rgba(127,168,200,0.25)" }}
              >
                <p
                  className="mono mb-1 text-xs tracking-widest"
                  style={{ color: brand.steel }}
                >
                  FOUNDED
                </p>
                <p className="display text-xl font-bold text-white">2018</p>
              </div>
              <div
                className="rounded-lg border p-5"
                style={{ borderColor: "rgba(127,168,200,0.25)" }}
              >
                <p
                  className="mono mb-1 text-xs tracking-widest"
                  style={{ color: brand.steel }}
                >
                  HEADQUARTERS
                </p>
                <p className="display text-xl font-bold text-white">
                  Los Angeles, CA
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24 text-center">
          <Link
            href="/quote"
            className="inline-block rounded-md px-8 py-3.5 font-semibold text-white transition-transform hover:scale-105"
            style={{ background: brand.accent }}
          >
            Work with us — request a quote
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
