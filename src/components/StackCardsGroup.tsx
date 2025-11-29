"use client";

import { backStack, frontStack, toolsStack } from "@/constants/stack";
import Section from "./ui/Section";
import { StackBadge } from "./ui/StackBadge";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const StackCardsGroup = () => {
  return (
    <Section.Content className="max-h-fit flex flex-col gap-y-10 w-full items-center">
      <div className="flex flex-col gap-y-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl text-center font-semibold"
        >
          Front - end
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-row gap-4 flex-wrap justify-center"
        >
          {frontStack.map((stackItem, index) => (
            <motion.div key={index}>
              <StackBadge item={stackItem} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col gap-y-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl text-center font-semibold"
        >
          Back - end
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-row gap-4 flex-wrap items-center justify-center"
        >
          {backStack.map((stackItem, index) => (
            <motion.div key={index}>
              <StackBadge item={stackItem} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col gap-y-4">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl text-center font-semibold"
        >
          Tools
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-row gap-4 flex-wrap justify-center"
        >
          {toolsStack.map((stackItem, index) => (
            <motion.div key={index}>
              <StackBadge item={stackItem} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section.Content>
  );
};
