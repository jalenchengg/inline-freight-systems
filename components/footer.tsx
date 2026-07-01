import Image from "next/image";
import { brand } from "@/lib/brand";
import Link from "next/link";

export default function Footer() {
  const linkClass = "hover:text-white transition-colors";

  return (
    <footer
      className="border-t py-12"
      style={{ background: brand.base, borderColor: "rgba(127,168,200,0.2)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-sm md:grid-cols-4">
        {/* Brand */}
        <div>
          <Image
            src="/ifs-logo.png"
            alt="Inline Freight Systems"
            width={112}
            height={65}
            className="mb-3 h-14 w-auto"
          />
        </div>

        {/* Company */}
        <div style={{ color: brand.slate }}>
          <div
            className="mono mb-3 text-xs tracking-widest"
            style={{ color: brand.steel }}
          >
            COMPANY
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className={linkClass}>
                About
              </Link>
            </li>
            <li>
              <Link href="/agent-directory" className={linkClass}>
                Agent directory
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div style={{ color: brand.slate }}>
          <div
            className="mono mb-3 text-xs tracking-widest"
            style={{ color: brand.steel }}
          >
            SERVICES
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/#services" className={linkClass}>
                Ocean
              </Link>
            </li>
            <li>
              <Link href="/#services" className={linkClass}>
                Air
              </Link>
            </li>
            <li>
              <Link href="/#services" className={linkClass}>
                FTL / LTL
              </Link>
            </li>
            <li>
              <Link href="/#services" className={linkClass}>
                Customs
              </Link>
            </li>
          </ul>
        </div>

        {/* Shippers */}
        <div style={{ color: brand.slate }}>
          <div
            className="mono mb-3 text-xs tracking-widest"
            style={{ color: brand.steel }}
          >
            SHIPPERS
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/quote" className={linkClass}>
                Request Link quote
              </Link>
            </li>
            <li>
              <Link
                href="https://cargosprint.com/"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                Pay invoice
              </Link>
            </li>
            <li>
              <Link href="/faq" className={linkClass}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mono mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-2 border-t px-6 pt-6 text-xs sm:flex-row"
        style={{ borderColor: "rgba(127,168,200,0.15)", color: "#3E4F61" }}
      >
        <span>© {new Date().getFullYear()} Inline Freight Systems</span>
        <span className="flex gap-4">
          <Link href="/privacy" className={linkClass}>
            Privacy
          </Link>
          <Link href="/terms" className={linkClass}>
            Terms
          </Link>
        </span>
      </div>
    </footer>
  );
}
