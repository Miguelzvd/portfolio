"use client";

import { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Spotlight = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, handleMouseMove]);

  if (!isDesktop || !mousePosition) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(28, 133, 229, 0.15), transparent 40%)`,
      }}
    />
  );
};

export default Spotlight;
