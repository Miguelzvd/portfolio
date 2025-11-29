"use client";

import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

const TimelineRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {children}
    </div>
  );
};

const TimelineLine = ({
  className,
  totalDuration = 3,
}: {
  className?: string;
  totalDuration?: number;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "30rem" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: totalDuration,
        ease: "linear",
      }}
      className={`w-1 bg-gradient-to-b from-primary via-primary to-transparent ${className}`}
    />
  );
};

const TimelineEvent = ({
  children,
  className,
  position = "left",
  top,
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  position?: "left" | "right";
  top?: string;
  index?: number;
} & HTMLAttributes<HTMLDivElement>) => {
  const isLeft = position === "left";
  // Cada evento aparece em cascata: 0.5s de delay base + 0.4s por índice
  const cascadeDelay = 0.5 + index * 0.4;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -50 : 50,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: cascadeDelay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`absolute ${
        isLeft ? "-left-[0.4rem]" : "-right-[0.4rem]"
      } -mt-2 ${className}`}
      style={{ top: `${top}rem` }}
    >
      {children}
    </motion.div>
  );
};

const TimelineEventContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`flex flex-row items-center justify-between gap-2 w-[25rem] ${className}`}
    >
      {children}
    </div>
  );
};

const TimelineEventYear = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={`text-sm text-center w-full ${className}`}>
      {children}
    </span>
  );
};

const TimelineEventDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={`text-sm w-[14rem] text-center ${className}`}>
      {children}
    </span>
  );
};

const TimelineEventContext = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>) => {
  return <span className={`text-sm ${className}`}>{children}</span>;
};

const TimelineEventDot = ({
  className,
  index = 0,
}: {
  className?: string;
  index?: number;
} & HTMLAttributes<HTMLDivElement>) => {
  // Bolinha aparece um pouco antes do evento: delay do evento - 0.2s
  const dotDelay = 0.5 + index * 0.4 - 0.2;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: dotDelay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{
        scale: 1.3,
        boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
      }}
      className={`w-4 h-4 rounded-full bg-secondary/90 shadow-lg shadow-secondary/50 ${className}`}
    />
  );
};

const TimelineEventLine = ({
  className,
  children,
  index = 0,
}: {
  className?: string;
  children?: React.ReactNode;
  index?: number;
} & HTMLAttributes<HTMLDivElement>) => {
  // Linha horizontal aparece junto com a bolinha
  const lineDelay = 0.5 + index * 0.4 - 0.1;

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: lineDelay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`flex-1 w-full h-[0.2rem] bg-white relative ${className}`}
      style={{ transformOrigin: "left" }}
    >
      {children}
    </motion.div>
  );
};

const Timeline = {
  Root: TimelineRoot,
  Line: TimelineLine,
  Event: TimelineEvent,
  EventContent: TimelineEventContent,
  EventYear: TimelineEventYear,
  EventDescription: TimelineEventDescription,
  EventContext: TimelineEventContext,
  EventDot: TimelineEventDot,
  EventLine: TimelineEventLine,
};

export default Timeline;
