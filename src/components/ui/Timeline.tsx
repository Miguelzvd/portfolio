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
    <div className="relative">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "30rem" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: totalDuration,
          ease: "linear",
        }}
        className={`w-1 bg-gradient-to-t from-primary via-primary to-transparent rounded-lg ${className}`}
      />

      {/* Spark effect that follows the line growth */}
      <motion.div
        initial={{ top: 0, opacity: 0 }}
        whileInView={{
          top: "30rem",
          opacity: [0, 1, 1, 0],
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: totalDuration,
          ease: "linear",
          opacity: {
            times: [0, 0.05, 0.95, 1],
            duration: totalDuration,
          },
        }}
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
      >
        {/* Main electric spark beams */}
        <div className="relative w-0 h-0">
          {/* Vertical beam */}
          <motion.div
            animate={{
              scaleY: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-0.5 h-8 -translate-x-1/2 -translate-y-full bg-gradient-to-t from-primary via-white to-transparent"
            style={{ filter: "blur(1px)" }}
          />

          {/* Horizontal beam */}
          <motion.div
            animate={{
              scaleX: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.15,
            }}
            className="absolute h-0.5 w-8 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ filter: "blur(1px)" }}
          />

          {/* Diagonal beams */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [45, 45, 45],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-0.5 h-6 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-transparent via-primary to-transparent rotate-45"
            style={{ filter: "blur(0.5px)" }}
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [-45, -45, -45],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="absolute w-0.5 h-6 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-transparent via-primary to-transparent -rotate-45"
            style={{ filter: "blur(0.5px)" }}
          />
        </div>

        {/* Bright center point */}
        <div className="absolute w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,0,0.8)]
" />

        {/* Glow effect */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-md"
        />

        {/* Small energy particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: Math.cos((i * Math.PI) / 3) * (8 + Math.random() * 4),
              y: Math.sin((i * Math.PI) / 3) * (8 + Math.random() * 4),
            }}
            transition={{
              duration: 0.5 + Math.random() * 0.3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className="absolute w-0.5 h-0.5 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
          />
        ))}
      </motion.div>
    </div>
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
