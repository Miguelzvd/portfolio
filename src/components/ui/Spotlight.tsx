"use client";

import { useState, useEffect } from "react";

const Spotlight = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 768 : true
  );

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    const handleChange = () => setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);
    handleChange();

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (!isDesktop || !mousePosition) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 transition duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(28, 133, 229, 0.3), transparent 30%)`,
      }}
    />
  );
};

export default Spotlight;
