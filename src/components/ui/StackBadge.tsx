"use client";

import { Badge } from "./badge";
import { StackItem } from "@/constants/stack";
import { motion } from "framer-motion";

interface StackBadgeProps {
  item: StackItem;
}

export const variantStyle = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export const StackBadge = ({ item }: StackBadgeProps) => {
  const { icon: Icon, description, color } = item;
  const IconComponent = Icon;

  return (
    <motion.div
      variants={variantStyle}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge
        variant="outline"
        className="flex items-center bg-card-foreground/2 backdrop-blur-sm justify-start gap-2 px-3 rounded-md py-2 text-sm font-medium cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all"
      >
        <IconComponent className={`${color} min-w-4 min-h-4`} />
        <span>{description}</span>
      </Badge>
    </motion.div>
  );
};
