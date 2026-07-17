"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 pb-20 pt-28 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-gray-500">
            Anus Butt — AI Engineer &amp; Founder of Omniveer
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            I build AI workers for real businesses.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            I am an AI engineer and founder of Omniveer. I build practical AI
            systems that qualify leads, automate outbound workflows, coordinate
            business operations, and keep humans in control of important actions.
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
              Available for new projects
            </span>
            <span aria-hidden="true">·</span>
            <span>Pakistan</span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-gray-400 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-dark"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
