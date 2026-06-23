"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const SLIDES = [
  { text: "Still doing it manually?", color: "white" },
  { text: "There's an agent for that.", color: "accent" },
  { text: "I build them. Scroll down.", color: "white" },
];

const SLIDE_DURATION = 1.8; // seconds per slide
const AVATAR_SLIDE_INDEX = 2; // show avatar between slide 1 and 2

export default function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showAvatar, setShowAvatar] = useState(false);
  const [exiting, setExiting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Handle scroll to exit intro
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !exiting) {
        setExiting(true);
        setTimeout(onComplete, 600);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [exiting, onComplete]);

  // Auto-advance slides
  useEffect(() => {
    if (prefersReducedMotion) {
      // Skip straight to end for reduced motion
      setExiting(true);
      setTimeout(onComplete, 100);
      return;
    }

    const interval = setInterval(() => {
      setSlideIndex((prev) => {
        if (prev >= SLIDES.length - 1) {
          clearInterval(interval);
          // Auto-exit after last slide
          setTimeout(() => {
            setExiting(true);
            setTimeout(onComplete, 600);
          }, SLIDE_DURATION * 1000);
          return prev;
        }
        return prev + 1;
      });
    }, SLIDE_DURATION * 1000);

    return () => clearInterval(interval);
  }, [onComplete, prefersReducedMotion]);

  // Show avatar transition
  useEffect(() => {
    if (slideIndex === AVATAR_SLIDE_INDEX) {
      const timer = setTimeout(() => setShowAvatar(true), 200);
      return () => clearTimeout(timer);
    }
  }, [slideIndex]);

  const shouldHide = prefersReducedMotion;

  if (shouldHide) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Avatar placeholder — between 2nd and 3rd slide */}
          <AnimatePresence>
            {showAvatar && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* REPLACE WITH HEYGEN AVATAR URL */}
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-800 md:h-64 md:w-64">
                  <span className="text-5xl font-bold text-gray-600 md:text-6xl">
                    AY
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Text slam */}
          <div className="px-6 text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={slideIndex}
                className={`text-3xl font-bold md:text-5xl lg:text-6xl ${
                  SLIDES[slideIndex]?.color === "accent"
                    ? "text-accent"
                    : "text-white"
                }`}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {SLIDES[slideIndex]?.text}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
