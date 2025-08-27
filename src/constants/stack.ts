import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiChakraui,
  SiNodedotjs,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface StackItem {
  icon: IconType;
  alt: string;
  description: string;
  shadow: string;
  color: string;
}

export const stacks: StackItem[] = [
  {
    icon: SiNextdotjs,
    alt: "Next logo",
    description: "Next",
    shadow: "bg-white/90",
    color: "text-white",
  },
  {
    icon: SiReact,
    alt: "React logo",
    description: "React",
    shadow: "bg-cyan-600",
    color: "text-[#61DAFB]",
  },
  {
    icon: SiTailwindcss,
    alt: "Tailwind logo",
    description: "Tailwind",
    shadow: "bg-cyan-700",
    color: "text-[#2298BD]",
  },
  {
    icon: SiChakraui,
    alt: "Chakra logo",
    description: "Chakra",
    shadow: "bg-teal-600",
    color: "text-[#4FD1C7]",
  },
  {
    icon: SiNodedotjs,
    alt: "Node logo",
    description: "Node",
    shadow: "bg-lime-600",
    color: "text-[#339933]",
  },
  {
    icon: SiDjango,
    alt: "Django logo",
    description: "Django",
    shadow: "bg-green-800",
    color: "text-[#008E5D]",
  },
  {
    icon: SiMysql,
    alt: "MySQL logo",
    description: "MySQL",
    shadow: "bg-cyan-700",
    color: "text-[#2298BD]",
  },
  {
    icon: SiPostgresql,
    alt: "Postgresql logo",
    description: "Postgresql",
    shadow: "bg-cyan-700",
    color: "text-[#2298BD]",
  },
  {
    icon: SiDocker,
    alt: "Docker logo",
    description: "Docker",
    shadow: "bg-[#2496ED]",
    color: "text-[#2496ED]",
  },
];
