"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <div className="absolute w-full px-6 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/">
        <Image src="/home.png" alt="Home Logo" width={93} height={50} />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/about" className="text-white text-sm">
          About
        </Link>
        <Link href="/agent-directory" className="text-white text-sm">
          Agent Directory
        </Link>
        <a href="mailto:gordon@inlinefsi.com">
          <button className="text-white text-sm border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
            Contact
          </button>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-md tracking-wide"
      >
        Menu
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 md:hidden">
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/agents" onClick={() => setIsOpen(false)}>Agent Directory</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}
