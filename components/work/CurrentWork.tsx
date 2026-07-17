"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CurrentWork() {
  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Current Work" />

        <motion.div
          className="mt-12 rounded-xl border border-gray-800 bg-white/[0.02] p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            Founder
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            Omniveer
          </h3>

          <p className="mt-4 max-w-3xl leading-relaxed text-gray-300">
            Omniveer builds, deploys, and manages specialized AI workers for
            real businesses.
          </p>

          <p className="mt-4 max-w-3xl leading-relaxed text-gray-400">
            Its first product is the Duct Lead Qualifier — an AI worker that
            qualifies inbound leads, collects job information, supports the
            booking workflow, stores leads in a dashboard, and sends lead
            details to the business owner by email.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <a
              href="https://www.omniveer.com/duct-lead-qualifier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Duct Lead Qualifier
            </a>
            <a
              href="https://www.omniveer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
            >
              omniveer.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
