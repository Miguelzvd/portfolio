"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-4 bottom-4 md:right-8 md:bottom-8 lg:right-16 lg:bottom-16 
                 bg-primary hover:bg-primary/80 text-white p-3 rounded-full shadow-lg 
                 transition-all duration-300 hover:scale-110 z-50 
                 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
      aria-label="Back to top of the page"
      title="Back to top"
      type="button"
    >
      <ArrowUp size={24} aria-hidden="true" />
      <span className="sr-only">Voltar ao topo da página</span>
    </button>
  );
};
