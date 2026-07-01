import Link from "next/link";
import { brand } from "@/lib/brand";

export default function CTASection() {
  return (
    <section className="py-24 text-center px-6">
      <h2 className="display text-3xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto">
        Ready to move something?
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/quote"
          className="px-8 py-3.5 rounded-md font-semibold text-white transition-transform hover:scale-105"
          style={{ background: brand.accent }}
        >
          Request a quote
        </Link>
        <Link
          href="/carriers"
          className="px-8 py-3.5 rounded-md font-semibold transition-colors border text-white hover:bg-white hover:text-black"
          style={{ borderColor: "rgba(127,168,200,0.4)" }}
        >
          Join our carrier network
        </Link>
      </div>
    </section>
  );
}