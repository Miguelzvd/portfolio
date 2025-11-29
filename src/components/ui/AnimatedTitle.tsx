"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const TitleRoot = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={twMerge("font-bold", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const TitleContent = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={twMerge("text-4xl font-bold", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const TitleMain = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={twMerge("text-6xl font-bold", className)}
      {...props}
    >
      {children}
    </motion.h1>
  );
};

const TitleSub = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={twMerge("text-4xl font-bold text-center", className)}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

const TitleUnderlineRow = ({
  color = "primary",
  className,
  ...props
}: {
  color?: "primary" | "secondary";
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={twMerge(
        "w-40 max-w-[60%] border-b-4 mt-1",
        color === "primary" ? "border-primary" : "border-secondary",
        className
      )}
      style={{ transformOrigin: "left" }}
      {...props}
    />
  );
};

const Title = {
  Root: TitleRoot,
  Content: TitleContent,
  UnderlineRow: TitleUnderlineRow,
  Main: TitleMain,
  Sub: TitleSub,
};

export default Title;
