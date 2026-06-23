"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { stiffness: 150, damping: 15 };
  const smoothRingX = useSpring(dotX, springConfig);
  const smoothRingY = useSpring(dotY, springConfig);

  useEffect(() => {
    // Detect touch device
    const mql = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(mql.matches);

    const handleMqlChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };

    mql.addEventListener("change", handleMqlChange);

    if (mql.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      mql.removeEventListener("change", handleMqlChange);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dotX, dotY, ringX, ringY]);

  if (isTouchDevice) return null;

  const dotScale = isClicking ? 0.8 : isHovering ? 1.5 : 1;
  const ringScale = isClicking ? 0.8 : isHovering ? 1.5 : 1;
  const ringOpacity = isHovering ? 0.8 : 0.4;

  return (
    <>
      {/* Small orange dot — instant follow */}
      <motion.div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: dotX,
          top: dotY,
          x: "-50%",
          y: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#f97316",
          scale: dotScale,
        }}
        transition={{ scale: { duration: 0.15 } }}
      />

      {/* Larger circle outline — spring lag */}
      <motion.div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: smoothRingX,
          top: smoothRingY,
          x: "-50%",
          y: "-50%",
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid #f97316",
          opacity: ringOpacity,
          scale: ringScale,
        }}
        transition={{ scale: { duration: 0.15 }, opacity: { duration: 0.15 } }}
      />
    </>
  );
}
