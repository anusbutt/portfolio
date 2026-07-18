"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.07] px-5 sm:px-8 lg:px-10">
      <div className="page-grid pointer-events-none absolute inset-0 -z-20 opacity-60" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute -right-32 -top-32 -z-10 h-[34rem] w-[34rem]" aria-hidden="true" />

      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-center py-20 sm:py-24 lg:py-28">
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            AI Engineer &amp; Founder of Omniveer
          </p>

          <h1 className="text-balance mt-7 max-w-5xl text-[clamp(3.25rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-stone-100">
            I build AI workers for <span className="text-stone-500">real businesses.</span>
          </h1>

          <div className="mt-9 grid max-w-4xl gap-8 border-l border-white/10 pl-5 sm:pl-7 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
            <p className="max-w-2xl text-base leading-7 text-stone-400 sm:text-lg sm:leading-8">
              Practical AI systems that qualify leads, automate outbound workflows,
              coordinate operations, and keep humans in control of important actions.
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-stone-500">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for projects
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-6 text-sm font-semibold text-stone-950 transition-colors hover:bg-orange-500"
            >
              View selected work
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-white/15 px-6 text-sm font-semibold text-stone-200 transition-colors hover:border-white/30 hover:bg-white/[0.04]"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-4 border-t border-white/[0.08] pt-5 text-xs uppercase tracking-[0.16em] text-stone-500 sm:grid-cols-3 sm:gap-8 lg:mt-24">
          <span>Lead qualification</span>
          <span>Human-in-the-loop systems</span>
          <span>Workflow automation</span>
        </div>
      </div>
    </section>
  );
}
