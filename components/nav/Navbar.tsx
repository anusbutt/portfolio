"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-dark/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="group inline-flex items-center gap-3 rounded-sm"
          aria-label="Anus Butt, back to top"
        >
          <span className="relative h-8 w-8 shrink-0 overflow-hidden border border-white/15 bg-stone-900">
            <Image
              src="/logo.png.png"
              alt=""
              fill
              priority
              sizes="32px"
              className="scale-[1.45] object-contain invert transition-transform duration-300 group-hover:scale-[1.55]"
            />
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-stone-200 sm:block">
            Anus Butt
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-xs font-medium uppercase tracking-[0.12em] text-stone-400 transition-colors hover:text-stone-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-stone-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.07] bg-dark px-5 py-5 sm:px-8 md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-white/[0.06] text-sm font-medium text-stone-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
