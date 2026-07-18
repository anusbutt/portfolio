"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/socials";

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "GitHub") {
    return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  if (platform === "LinkedIn") {
    return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (platform === "Omniveer") {
    return (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
        />
      </svg>
    );
  }
  // X / Twitter
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="border-b border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 / About"
          title="Engineering AI systems from idea to operation."
          description="I work across the full product surface—from agent behavior and backend services to the interface where people stay in control."
        />

        <motion.div
          className="mt-14 grid gap-10 border-t border-white/[0.08] pt-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16 lg:mt-20 lg:pt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Connect</p>
            <div className="mt-5 flex flex-col items-start gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-10 items-center gap-3 text-sm text-stone-400 transition-colors hover:text-stone-100"
              >
                <span className="text-stone-600 transition-colors group-hover:text-accent"><SocialIcon platform={link.platform} /></span>
                {link.label}
              </a>
            ))}
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl leading-8 text-stone-200 sm:text-2xl sm:leading-9">
              I build end-to-end AI workers: Python and FastAPI backends, Next.js
              interfaces, APIs and databases, tool integrations, structured
              instructions, human approval steps, and reliable workflows that keep
              running after launch.
            </p>

            <p className="mt-6 text-base leading-8 text-stone-400">
              The point is not another generic chatbot. It is systems that solve
              specific business problems—qualifying leads, running outbound, and
              coordinating operations—while keeping humans in control of the
              actions that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
