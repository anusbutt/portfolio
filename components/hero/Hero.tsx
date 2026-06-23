"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy load 3D scene to avoid SSR issues and reduce initial bundle
const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-dark" />,
});

export default function Hero() {
  const [sceneOpacity, setSceneOpacity] = useState(1);

  // Dissolve 3D scene on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      // Fade out as user scrolls past hero (0 to heroHeight)
      const opacity = Math.max(0, 1 - scrollY / heroHeight);
      setSceneOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Scene background — dissolves on scroll */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-100"
        style={{ opacity: sceneOpacity }}
      >
        <Scene3D />
      </div>

      {/* Text overlay */}
      <div className="relative z-10 px-6 text-center">
        <motion.h1
          className="text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Anus Yousuf
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-300 md:text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I Build AI Agents &amp; AI-Integrated Websites That Run Real Businesses
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-gray-400 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-dark"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex h-10 w-6 flex-col items-center justify-start rounded-full border-2 border-gray-500 p-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="h-2 w-1.5 rounded-full bg-accent"
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.p
          className="mt-2 text-xs text-gray-500"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          scroll
        </motion.p>
      </motion.div>
    </section>
  );
}
