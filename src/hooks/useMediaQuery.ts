import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  // Return false during SSR to match initial state
  if (!mounted) return false;

  return matches;
}

export function useBreakpoints() {
  const [breakpoints, setBreakpoints] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLarge: false,
    isXLarge: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const queries = {
      mobile: "(max-width: 767px)",
      tablet: "(min-width: 768px) and (max-width: 1023px)",
      desktop: "(min-width: 1024px)",
      large: "(min-width: 1280px)",
      xlarge: "(min-width: 1536px)",
    };

    const mediaQueries = Object.entries(queries).map(([key, query]) => {
      const media = window.matchMedia(query);
      return { key, media };
    });

    const updateBreakpoints = () => {
      setBreakpoints({
        isMobile:
          mediaQueries.find((mq) => mq.key === "mobile")?.media.matches ||
          false,
        isTablet:
          mediaQueries.find((mq) => mq.key === "tablet")?.media.matches ||
          false,
        isDesktop:
          mediaQueries.find((mq) => mq.key === "desktop")?.media.matches ||
          false,
        isLarge:
          mediaQueries.find((mq) => mq.key === "large")?.media.matches || false,
        isXLarge:
          mediaQueries.find((mq) => mq.key === "xlarge")?.media.matches ||
          false,
      });
    };

    updateBreakpoints();

    mediaQueries.forEach(({ media }) => {
      media.addEventListener("change", updateBreakpoints);
    });

    return () => {
      mediaQueries.forEach(({ media }) => {
        media.removeEventListener("change", updateBreakpoints);
      });
    };
  }, []);

  // Return default state during SSR to match initial state
  if (!mounted) {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      isLarge: false,
      isXLarge: false,
    };
  }

  return breakpoints;
}

export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}

export function useIsTablet(): boolean {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}
