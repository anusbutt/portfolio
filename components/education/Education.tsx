"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const educationItems = [
  "ADC Part 1 — Aisha Bawany College / University of Karachi",
  "Agentic AI and software engineering training — GIAIC / PIAIC",
  "Focus on building production-oriented AI systems",
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Education" />

        <motion.ul
          className="mt-8 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {educationItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-gray-400"
            >
              <span
                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-600"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
