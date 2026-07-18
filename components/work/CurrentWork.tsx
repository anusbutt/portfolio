"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CurrentWork() {
  return (
    <section id="work" className="relative overflow-hidden border-b border-white/[0.07] bg-surface px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 bg-accent/[0.06] blur-[100px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 / Current work"
          title="Building practical AI workers at Omniveer."
          description="Specialized systems designed around real business workflows, with people kept in the loop where judgment matters."
        />

        <motion.div
          className="mt-14 grid border-t border-white/10 pt-10 md:grid-cols-[0.72fr_1.28fr] md:gap-16 lg:mt-20 lg:pt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Founder</p>
            <h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-stone-100 sm:text-5xl">Omniveer</h3>
            <p className="mt-4 max-w-sm leading-7 text-stone-400">
              Builds, deploys, and manages specialized AI workers for real businesses.
            </p>
            <a
              href="https://www.omniveer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-stone-200 transition-colors hover:text-accent"
            >
              Visit Omniveer <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-12 border-l border-accent/60 pl-6 md:mt-0 md:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">First product</p>
            <h4 className="mt-3 text-2xl font-semibold tracking-tight text-stone-100 sm:text-3xl">Duct Lead Qualifier</h4>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-400">
              An AI worker that qualifies inbound leads, collects job information,
              supports the booking workflow, stores leads in a dashboard, and sends
              lead details to the business owner by email.
            </p>
            <a
              href="https://www.omniveer.com/duct-lead-qualifier"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex min-h-11 items-center gap-3 border-b border-accent pb-1 text-sm font-semibold text-stone-100 transition-colors hover:text-accent"
            >
              Explore the product <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

