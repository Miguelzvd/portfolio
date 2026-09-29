"use client";

import { useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const EASE_OUT = [0.25, 0.4, 0.25, 1] as const;
const POP_DURATION = 0.2;
const CONNECTOR_DURATION = 0.25;
export const PRIMARY_GLOW =
  "0 0 14px 2px color-mix(in oklab, var(--color-primary) 60%, transparent)";

type Side = "left" | "right";

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: (duration: number) => ({
    scaleY: 1,
    transition: { duration, ease: "linear" },
  }),
};

const sparkVariants: Variants = {
  hidden: { y: "0rem", opacity: 0 },
  visible: ({ duration, height }: { duration: number; height: string }) => ({
    y: height,
    opacity: [0, 1, 1, 0],
    transition: {
      duration,
      ease: "linear",
      opacity: { duration, times: [0, 0.05, 0.92, 1] },
    },
  }),
};

// Finishes exactly at revealAt, so the dot is fully lit when the line reaches it.
const popVariants: Variants = {
  hidden: { scale: 0, transition: { duration: 0.15 } },
  visible: (revealAt: number) => ({
    scale: 1,
    transition: {
      delay: Math.max(revealAt - POP_DURATION, 0),
      duration: POP_DURATION,
      ease: "easeOut",
    },
  }),
};

const pingVariants: Variants = {
  hidden: { scale: 1, opacity: 0, transition: { duration: 0.1 } },
  visible: (revealAt: number) => ({
    scale: [1, 2.6],
    opacity: [0.8, 0],
    transition: {
      delay: revealAt,
      duration: 1.8,
      repeat: Infinity,
      repeatDelay: 0.4,
      ease: "easeOut",
    },
  }),
};

const connectorVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: (delay: number) => ({
    scaleX: 1,
    transition: { delay, duration: CONNECTOR_DURATION, ease: EASE_OUT },
  }),
};

type CardMotion = { delay: number; offsetX: number };

const cardVariants: Variants = {
  hidden: ({ offsetX }: CardMotion) => ({ opacity: 0, x: offsetX }),
  visible: ({ delay }: CardMotion) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.45, ease: EASE_OUT },
  }),
};

const TimelineRoot = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    className={`relative flex flex-col items-center ${className}`}
  >
    {children}
  </motion.div>
);

const Spark = () => (
  <>
    <span className="absolute bottom-0 left-1/2 h-12 w-1 -translate-x-1/2 rounded-full bg-linear-to-t from-white via-primary to-transparent" />
    <motion.span
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-3 -top-3 size-6 rounded-full bg-primary/50 blur-md"
    />
    <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_3px_rgba(255,255,255,0.8)]" />
  </>
);

const TimelineLine = ({
  height,
  duration,
}: {
  height: string;
  duration: number;
}) => {
  const [isSparkActive, setIsSparkActive] = useState(true);

  return (
    <div className="relative w-1" style={{ height }}>
      <motion.div
        custom={duration}
        variants={lineVariants}
        className="absolute inset-0 origin-top rounded-full bg-linear-to-b from-primary/20 via-primary to-primary"
        style={{ boxShadow: PRIMARY_GLOW }}
      />

      {isSparkActive && (
        <motion.div
          custom={{ duration, height }}
          variants={sparkVariants}
          onAnimationComplete={() => setIsSparkActive(false)}
          className="pointer-events-none absolute left-1/2 top-0"
        >
          <Spark />
        </motion.div>
      )}
    </div>
  );
};

const TimelineDot = ({
  revealAt,
  isCurrent = false,
}: {
  revealAt: number;
  isCurrent?: boolean;
}) => (
  <motion.div
    custom={revealAt}
    variants={popVariants}
    className="relative size-4 shrink-0"
  >
    {isCurrent && (
      <motion.span
        custom={revealAt}
        variants={pingVariants}
        className="absolute inset-0 rounded-full border-2 border-secondary"
      />
    )}
    <span className="absolute inset-0 rounded-full bg-secondary shadow-lg shadow-secondary/50 transition-transform duration-200 hover:scale-125" />
  </motion.div>
);

const TimelineEvent = ({
  children,
  side,
  top,
  revealAt,
  isCurrent = false,
}: {
  children: ReactNode;
  side: Side;
  top: string;
  revealAt: number;
  isCurrent?: boolean;
}) => {
  const isRight = side === "right";

  const connector = (
    <motion.div
      custom={revealAt}
      variants={connectorVariants}
      className={`h-0.5 w-8 shrink-0 ${
        isRight
          ? "origin-left bg-linear-to-r"
          : "origin-right bg-linear-to-l"
      } from-secondary to-white/20`}
    />
  );

  const card = (
    <motion.div
      custom={{
        delay: revealAt + CONNECTOR_DURATION,
        offsetX: isRight ? -16 : 16,
      }}
      variants={cardVariants}
      className="w-64"
    >
      {children}
    </motion.div>
  );

  return (
    <div
      className={`absolute flex -translate-y-1/2 items-center ${
        isRight ? "-left-1.5" : "-right-1.5 flex-row-reverse"
      }`}
      style={{ top }}
    >
      <TimelineDot revealAt={revealAt} isCurrent={isCurrent} />
      {connector}
      {card}
    </div>
  );
};

const Timeline = {
  Root: TimelineRoot,
  Line: TimelineLine,
  Event: TimelineEvent,
  Dot: TimelineDot,
};

export default Timeline;
