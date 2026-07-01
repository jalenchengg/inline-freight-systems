"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#how" },
  { label: "Agent directory", href: "/agent-directory" },
  { label: "About", href: "/about" },
  { label: "Pay invoice", href: "https://cargosprint.com/", external: true },
];

function NavItem(props: {
  link: NavLink;
  className: string;
  onClick?: () => void;
}) {
  const { link, className, onClick } = props;

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={onClick}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className} onClick={onClick}>
      {link.label}
    </Link>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3">
      <Image
        src="/ifs-logo.png"
        alt="Inline Freight Systems"
        width={88}
        height={51}
        priority
        className="h-11 w-auto"
      />
      <span
        className="display hidden leading-tight font-bold text-white sm:block"
        style={{ fontSize: 15 }}
      >
        INLINE FREIGHT
        <br />
        <span style={{ color: brand.accent }}>SYSTEMS</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-[70] transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
        style={{
          background: menuOpen
            ? brand.base
            : scrolled
              ? "rgba(10, 18, 48, 0.95)"
              : "transparent",
          backdropFilter: scrolled && !menuOpen ? "blur(8px)" : "none",
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Logo />

          <div
            className="hidden items-center gap-8 text-sm md:flex"
            style={{ color: brand.steel }}
          >
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.label}
                link={link}
                className="transition-colors hover:text-white"
              />
            ))}
          </div>

          <Link
            href="/quote"
            className="hidden rounded-md px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 md:block"
            style={{ background: brand.accent }}
          >
            Request a quote
          </Link>

          {/* Hamburger — morphs into X, sits above the overlay */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-[70] h-10 w-10 md:hidden"
          >
            <span
              className="absolute top-1/2 left-1/2 block h-0.5 w-6 bg-white transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "translate(-50%, -50%) rotate(45deg)"
                  : "translate(-50%, calc(-50% - 7px))",
              }}
            />
            <span
              className="absolute top-1/2 left-1/2 block h-0.5 w-6 bg-white transition-all duration-300"
              style={{
                transform: "translate(-50%, -50%)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute top-1/2 left-1/2 block h-0.5 w-6 bg-white transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "translate(-50%, -50%) rotate(-45deg)"
                  : "translate(-50%, calc(-50% + 7px))",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className="fixed inset-0 z-[60] flex flex-col justify-between px-6 pt-24 pb-10 transition-all duration-500 md:hidden"
        style={{
          background: brand.base,
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          clipPath: menuOpen
            ? "circle(150% at calc(100% - 44px) 36px)"
            : "circle(0% at calc(100% - 44px) 36px)",
        }}
      >
        {/* Links — staggered rise */}
        <nav className="flex flex-col">
          {NAV_LINKS.map((link, i) => (
            <div
              key={link.label}
              className="overflow-hidden border-b"
              style={{ borderColor: "rgba(127,168,200,0.15)" }}
            >
              <div
                className="flex items-baseline gap-4 py-4 transition-all duration-500"
                style={{
                  transform: menuOpen ? "translateY(0)" : "translateY(110%)",
                  opacity: menuOpen ? 1 : 0,
                  transitionDelay: menuOpen ? `${150 + i * 70}ms` : "0ms",
                }}
              >
                <span className="mono text-xs" style={{ color: brand.accent }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <NavItem
                  link={link}
                  onClick={closeMenu}
                  className="display text-3xl font-bold text-white active:text-white/70"
                />
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom: CTA + contact line */}
        <div
          className="transition-all duration-500"
          style={{
            transform: menuOpen ? "translateY(0)" : "translateY(24px)",
            opacity: menuOpen ? 1 : 0,
            transitionDelay: menuOpen
              ? `${150 + NAV_LINKS.length * 70 + 80}ms`
              : "0ms",
          }}
        >
          <Link
            href="/quote"
            onClick={closeMenu}
            className="block rounded-md px-4 py-3.5 text-center font-semibold text-white"
            style={{ background: brand.accent }}
          >
            Request a quote
          </Link>
          <p
            className="mono mt-5 text-center text-xs tracking-widest"
            style={{ color: brand.steel }}
          >
            MON–FRI · 8AM–5PM PT
          </p>
        </div>
      </div>
    </>
  );
}
