"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Property Management", href: "/property-management" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white  top-0  ">
      <div className="max-w-[1600px] mx-auto px-4  pt-20 pb-10 sm:px-6 lg:px-20 h-[72px] flex items-center justify-between">

        {/* Logo */} 
        <Link href="/" className="flex items-center shrink-0">
          <Image   
            src="/logo.png"
            alt="Company Logo"
            width={150}
            height={60}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav text-gray-700 hover:text-[#1a1a2e] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block"> 
          <Link
            href="/valuation"
            className="inline-block border border-[#c0392b] text-[#c0392b] nav font-semibold px-5 py-1 rounded hover:bg-[#c0392b] hover:text-white transition-all duration-200"
          >
            Book Valuation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              menuOpen ? "-rotate-45 translate-y-[-7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="nav text-gray-700 hover:text-[#1a1a2e] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/valuation"
            onClick={() => setMenuOpen(false)}
            className="inline-block border border-[#c0392b] text-[#c0392b] text-[14px] font-semibold px-5 py-2 rounded text-center hover:bg-[#c0392b] hover:text-white transition-all duration-200"
          >
            Book Valuation
          </Link>
        </div>
      )}
    </header>
  );
}