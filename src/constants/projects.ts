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
  src: string;
  alt: string;
  name: string;
}

export const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: "jovem-potiguar",
    title: "Jovem Potiguar",
    image: "/images/projects/jovem_potiguar.png",
    stacks: [
      {
        src: "/images/stacks/reactjs.png",
        alt: "ReactJS",
        name: "ReactJS",
      },
      {
        src: "/images/stacks/chakra.png",
        alt: "Chakra UI",
        name: "Chakra UI",
      },
      {
        src: "/images/stacks/django.png",
        alt: "Django",
        name: "Django",
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
        src: "/images/stacks/reactjs.png",
        alt: "ReactJS",
        name: "ReactJS",
      },
      {
        src: "/images/stacks/tailwind.png",
        alt: "Tailwind CSS",
        name: "Tailwind CSS",
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
        src: "/images/stacks/reactjs.png",
        alt: "ReactJS",
        name: "ReactJS",
      },
      {
        src: "/images/stacks/chakra.png",
        alt: "Chakra UI",
        name: "Chakra UI",
      },
      {
        src: "/images/stacks/django.png",
        alt: "Django",
        name: "Django",
      },
    ],
    link: "https://jovempotiguar.sine.rn.gov.br/",
    description: "Jovem Potiguar is an initiative of the Ministry of Labor and Employment, the Government of the State of Rio Grande do Norte and the Federal Institute of Education, Science and Technology of Rio Grande do Norte to offer initial and continuing education courses for young people between 16 and 35 years old, focusing on citizenship development and the promotion of creative life projects.",
  },
  {
    id: "cine-vault",
    title: "cine-vault",
    image: "/images/projects/cine_vault.png",
    stacks: [
      {
        src: "/images/stacks/reactjs.png",
        alt: "ReactJS",
        name: "ReactJS",
      },
      {
        src: "/images/stacks/tailwind.png",
        alt: "Tailwind CSS",
        name: "Tailwind CSS",
      },
    ],
    link: "https://cine-vault-prod.vercel.app/",
    description: "cine-vault is a web application designed for movie and series enthusiasts, providing an easy and organized way to save, track, and manage your favorite content. If you're someone who always forgets to watch a movie or series, or you want to track which episodes you've watched.",
  },
];
