"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import IntroSequence from "@/components/intro/IntroSequence";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import About from "@/components/about/About";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  // Check sessionStorage to skip intro on return visits
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeenIntro = sessionStorage.getItem("intro-seen");
    if (hasSeenIntro) {
      setIntroComplete(true);
    } else {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
    sessionStorage.setItem("intro-seen", "true");
  }, []);

  return (
    <main>
      <AnimatePresence>
        {showIntro && !introComplete && (
          <IntroSequence onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {introComplete && (
        <>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <ContactForm />

          {/* Footer */}
          <footer className="border-t border-gray-800 px-6 py-8">
            <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Anus Yousuf. Built with Next.js &amp; Tailwind CSS.</p>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}
