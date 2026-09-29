import {
  SiDocker,
  SiDrizzle,
  SiFastify,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Project {
  id: string;
  title: string;
  image: string;
  stacks: Stack[];
  link: string;
  description: string;
  featured?: boolean;
}

export interface Stack {
  icon: IconType;
  alt: string;
  name: string;
  description: string;
  color: string;
  shadow: string;
}

const tailwindStack: Stack = {
  icon: SiTailwindcss,
  alt: "Tailwind CSS",
  name: "Tailwind CSS",
  description: "Tailwind CSS",
  color: "text-[#2298BD]",
  shadow: "bg-cyan-700",
};

export const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: "organizaai",
    title: "Organizaai",
    image: "/images/projects/organizaai-dashboard.png",
    stacks: [
      {
        icon: SiNextdotjs,
        alt: "Next.js",
        name: "Next.js",
        description: "Next.js",
        color: "text-white",
        shadow: "bg-neutral-700",
      },
      {
        icon: SiFastify,
        alt: "Fastify",
        name: "Fastify",
        description: "Fastify",
        color: "text-white",
        shadow: "bg-neutral-700",
      },
      tailwindStack,
      {
        icon: SiSupabase,
        alt: "Supabase",
        name: "Supabase",
        description: "Supabase",
        color: "text-[#3ECF8E]",
        shadow: "bg-green-600",
      },
      {
        icon: SiPostgresql,
        alt: "PostgreSQL",
        name: "PostgreSQL",
        description: "PostgreSQL",
        color: "text-[#2298BD]",
        shadow: "bg-cyan-700",
      },
      {
        icon: SiDrizzle,
        alt: "Drizzle ORM",
        name: "Drizzle ORM",
        description: "Drizzle ORM",
        color: "text-[#C5B358]",
        shadow: "bg-amber-600",
      },
      {
        icon: SiRedis,
        alt: "Redis",
        name: "Redis",
        description: "Redis",
        color: "text-[#DC382D]",
        shadow: "bg-red-700",
      },
      {
        icon: SiDocker,
        alt: "Docker",
        name: "Docker",
        description: "Docker",
        color: "text-[#2496ED]",
        shadow: "bg-[#2496ED]",
      },
    ],
    link: "https://www.organizaai.app/",
    description: t("organizaaiDescription"),
  },
  {
    id: "cine-vault",
    title: "cine-vault",
    image: "/images/projects/cine_vault.png",
    stacks: [
      {
        icon: SiReact,
        alt: "ReactJS",
        name: "ReactJS",
        description: "ReactJS",
        color: "text-[#61DAFB]",
        shadow: "bg-cyan-600",
      },
      tailwindStack,
    ],
    link: "https://cine-vault-prod.vercel.app/",
    description: t("cineVaultDescription"),
  },
];
