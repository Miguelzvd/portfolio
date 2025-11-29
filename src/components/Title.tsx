"use client";

import { motion } from "framer-motion";

const TitleRoot = ({
  children,
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
      className={`font-bold ${props.className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const TitleContent = ({
  children,
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
      className={`text-4xl font-bold ${props.className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const TitleMain = ({
  children,
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
      className={`text-6xl font-bold ${props.className}`}
      {...props}
    >
      {children}
    </motion.h1>
  );
};

const TitleSub = ({
  children,
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
      className={`text-4xl font-bold text-center ${props.className}`}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

const TitleUnderlineRow = ({
  color = "primary",
  ...props
}: {
  color?: "primary" | "secondary";
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "10rem", opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`max-w-[70%] border-b-4 ${
        color === "primary" ? "border-primary" : "border-secondary"
      } mt-1 ${props.className}`}
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