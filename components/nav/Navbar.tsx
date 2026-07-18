"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function ExternalArrow() {
  return (
    <svg
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17L17 7M9 7h8v8"
      />
    </svg>
  );
}

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
          <span className="grid h-8 w-8 place-items-center bg-stone-100 text-xs font-bold tracking-tight text-stone-950 transition-colors group-hover:bg-accent">
            AB
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
          <a
            href="https://www.omniveer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm text-xs font-medium uppercase tracking-[0.12em] text-stone-400 transition-colors hover:text-accent"
          >
            Omniveer
            <ExternalArrow />
          </a>
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
            <a
              href="https://www.omniveer.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-12 items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-accent"
            >
              Omniveer
              <ExternalArrow />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

