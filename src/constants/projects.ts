import {
  SiReact,
  SiChakraui,
  SiDjango,
  SiTailwindcss,
  SiDocker,
  SiVite,
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

export const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: "jovem-potiguar",
    title: "Jovem Potiguar",
    image: "/images/projects/jovem_potiguar.png",
    stacks: [
      {
        icon: SiVite,
        alt: "Vite logo",
        name: "Vite",
        description: "Vite",
        shadow:
          "bg-gradient-to-br from-purple-700 via-purple-500 to-yellow-400 bg-clip-padding",
        color: "text-[#FFC62E]",
      },
      {
        icon: SiReact,
        alt: "ReactJS",
        name: "ReactJS",
        description: "ReactJS",
        color: "text-[#61DAFB]",
        shadow: "bg-cyan-600",
      },
      {
        icon: SiChakraui,
        alt: "Chakra UI",
        name: "Chakra UI",
        description: "Chakra UI",
        color: "text-[#4FD1C7]",
        shadow: "bg-teal-600",
      },
      {
        icon: SiDjango,
        alt: "Django",
        name: "Django",
        description: "Django",
        color: "text-[#008E5D]",
        shadow: "bg-green-800",
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
    link: "https://jovempotiguar.sine.rn.gov.br/",
    description: t("jovemPotiguarDescription"),
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
      {
        icon: SiTailwindcss,
        alt: "Tailwind CSS",
        name: "Tailwind CSS",
        description: "Tailwind CSS",
        color: "text-[#2298BD]",
        shadow: "bg-cyan-700",
      },
    ],
    link: "https://cine-vault-prod.vercel.app/",
    description: t("cineVaultDescription"),
  },
];

export const projects: Project[] = [
  {
    id: "jovem-potiguar",
    title: "Jovem Potiguar",
    image: "/images/projects/jovem_potiguar.png",
    stacks: [
      {
        icon: SiVite,
        alt: "Vite logo",
        name: "Vite",
        description: "Vite",
        shadow:
          "bg-gradient-to-br from-purple-700 via-purple-500 to-yellow-400 bg-clip-padding",
        color: "text-[#FFC62E]",
      },
      {
        icon: SiReact,
        alt: "ReactJS",
        name: "ReactJS",
        description: "ReactJS",
        color: "text-[#61DAFB]",
        shadow: "bg-cyan-600",
      },
      {
        icon: SiChakraui,
        alt: "Chakra UI",
        name: "Chakra UI",
        description: "Chakra UI",
        color: "text-[#4FD1C7]",
        shadow: "bg-teal-600",
      },
      {
        icon: SiDjango,
        alt: "Django",
        name: "Django",
        description: "Django",
        color: "text-[#008E5D]",
        shadow: "bg-green-800",
      },
    ],
    link: "https://jovempotiguar.sine.rn.gov.br/",
    description:
      "Jovem Potiguar is an initiative of the Ministry of Labor and Employment, the Government of the State of Rio Grande do Norte and the Federal Institute of Education, Science and Technology of Rio Grande do Norte to offer initial and continuing education courses for young people between 16 and 35 years old, focusing on citizenship development and the promotion of creative life projects.",
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
      {
        icon: SiTailwindcss,
        alt: "Tailwind CSS",
        name: "Tailwind CSS",
        description: "Tailwind CSS",
        color: "text-[#2298BD]",
        shadow: "bg-cyan-700",
      },
    ],
    link: "https://cine-vault-prod.vercel.app/",
    description:
      "cine-vault is a web application designed for movie and series enthusiasts, providing an easy and organized way to save, track, and manage your favorite content. If you're someone who always forgets to watch a movie or series, or you want to track which episodes you've watched.",
  },
];
