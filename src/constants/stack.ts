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
  SiN8N,
  SiMake,
  SiGit,
  SiVercel,
  SiGitlab,
  SiSupabase,
  SiDigitalocean,
  SiDrizzle,
  SiExpress,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface StackItem {
  icon: IconType;
  alt: string;
  description: string;
  shadow: string;
  color: string;
}

export const frontStack: StackItem[] = [
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
];

export const backStack: StackItem[] = [
  {
    icon: SiNodedotjs,
    alt: "Node logo",
    description: "Node",
    shadow: "bg-lime-600",
    color: "text-[#339933]",
  },
  {
    icon: SiDrizzle,
    alt: "Drizzle logo",
    description: "Drizzle",
    shadow: "bg-amber-600",
    color: "text-[#C5B358]",
  },
  {
    icon: SiExpress,
    alt: "Express logo",
    description: "Express",
    shadow: "bg-gray-700",
    color: "text-white",
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

export const toolsStack: StackItem[] = [
  {
    icon: SiN8N,
    alt: "n8n logo",
    description: "n8n",
    shadow: "bg-orange-600",
    color: "text-[#FF6B35]",
  },
  {
    icon: SiMake,
    alt: "Make logo",
    description: "Make",
    shadow: "bg-purple-600",
    color: "text-[#B025D4]",
  },
  {
    icon: SiGit,
    alt: "Git logo",
    description: "Git",
    shadow: "bg-orange-700",
    color: "text-[#F1502F]",
  },
  {
    icon: SiVercel,
    alt: "Vercel logo",
    description: "Vercel",
    shadow: "bg-gray-800",
    color: "text-white",
  },
  {
    icon: SiGitlab,
    alt: "Gitlab logo",
    description: "Gitlab",
    shadow: "bg-orange-600",
    color: "text-[#FC6D26]",
  },
  {
    icon: SiSupabase,
    alt: "Supabase logo",
    description: "Supabase",
    shadow: "bg-green-600",
    color: "text-[#3ECF8E]",
  },
  {
    icon: SiDigitalocean,
    alt: "DigitalOcean logo",
    description: "DigitalOcean",
    shadow: "bg-blue-600",
    color: "text-[#0080FF]",
  },
];
