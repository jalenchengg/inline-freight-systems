"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute z-50 flex w-full items-center justify-between px-6">
      <Link href="/">
        <Image src="/home.png" alt="Home Logo" width={93} height={50} />
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {/* <Link href="/about" className="text-sm text-white">
          About
        </Link> */}
        <Link href="/agent-directory" className="text-sm text-white">
          Agent Directory
        </Link>
        <Link href="mailto:gordon@inlinefsi.com">
          <button className="cursor-pointer rounded-full border border-white px-4 py-1 text-sm text-white transition hover:bg-white hover:text-black">
            Contact
          </button>
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-md tracking-wide text-white md:hidden"
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 flex w-full flex-col items-center bg-black py-4 text-white md:hidden">
          {/* <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link> */}
          <Link href="/agents" onClick={() => setIsOpen(false)}>
            Agent Directory
          </Link>
          <Link
            href="mailto:gordon@inlinefsi.com"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
