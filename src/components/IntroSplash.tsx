"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { LOGO_M_PATH, LOGO_VIEWBOX } from "./ui/LogoMark";

// Centerline of the logo's M in writing order, used as a mask that reveals
// the filled glyph as if it were being written by hand.
const PEN_STROKES = [
  {
    d: "M36 99 L26.5 107 L23 116 L27 122.5 L31 125 L38 122 L43 110 L46 95 L51.3 72 L55.5 50 L58 37",
    duration: 0.6,
  },
  { d: "M60 36 L64 60 L68.3 90 L70.5 116", duration: 0.28 },
  { d: "M70.5 116 L83 90 L95.4 62 L108 36", duration: 0.3 },
  {
    d: "M108 36 L110 41 L107 60 L104 80 L101.7 101 L100.5 112 L99 122 L106 125.5 L116 122.5 L122 118.5 L128.5 112 L134.5 104",
    duration: 0.55,
  },
];

const WRITE_START = 0.3;
const HOLD_BEFORE_FLIGHT = 0.35;
const MASK_ID = "intro-m-mask";

const strokeDelays = PEN_STROKES.reduce<number[]>(
  (delays, _, index) => [
    ...delays,
    index === 0
      ? WRITE_START
      : delays[index - 1] + PEN_STROKES[index - 1].duration,
  ],
  []
);

type Flight = { x: number; y: number; scale: number };

const subscribe = () => () => {};
const isIntroActive = () => document.documentElement.dataset.intro === "active";

export const IntroSplash = () => {
  const shouldPlay = useSyncExternalStore(subscribe, isIntroActive, () => true);
  const [isFinished, setIsFinished] = useState(false);
  const [flight, setFlight] = useState<Flight | null>(null);
  const markRef = useRef<HTMLDivElement>(null);

  if (!shouldPlay || isFinished) return null;

  const flyToHeader = () => {
    const target = document.getElementById("brand-mark");
    const source = markRef.current;
    if (!target || !source) return finish();

    const to = target.getBoundingClientRect();
    const from = source.getBoundingClientRect();

    setFlight({
      x: to.left + to.width / 2 - (from.left + from.width / 2),
      y: to.top + to.height / 2 - (from.top + from.height / 2),
      scale: to.width / from.width,
    });
  };

  const finish = () => {
    try {
      sessionStorage.setItem("intro-played", "1");
    } catch {}
    document.documentElement.dataset.intro = "done";
    setIsFinished(true);
  };

  return (
    <div className="intro-splash fixed inset-0 z-100" aria-hidden="true">
      <motion.div
        className="absolute inset-0 bg-dark"
        animate={flight ? { opacity: 0 } : undefined}
        transition={{ delay: HOLD_BEFORE_FLIGHT + 0.15, duration: 0.6 }}
      />

      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          ref={markRef}
          className="w-40 text-white"
          animate={flight ?? undefined}
          transition={{
            delay: HOLD_BEFORE_FLIGHT,
            duration: 0.8,
            ease: [0.65, 0, 0.35, 1],
          }}
          onAnimationComplete={finish}
        >
          <svg viewBox={LOGO_VIEWBOX} className="block h-auto w-full">
            <mask id={MASK_ID}>
              {PEN_STROKES.map((stroke, index) => (
                <motion.path
                  key={stroke.d}
                  d={stroke.d}
                  fill="none"
                  stroke="white"
                  strokeWidth={20}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: {
                      delay: strokeDelays[index],
                      duration: stroke.duration,
                      ease: "easeInOut",
                    },
                    opacity: { delay: strokeDelays[index], duration: 0.01 },
                  }}
                  onAnimationComplete={
                    index === PEN_STROKES.length - 1 ? flyToHeader : undefined
                  }
                />
              ))}
            </mask>
            <path
              d={LOGO_M_PATH}
              fill="currentColor"
              mask={`url(#${MASK_ID})`}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
