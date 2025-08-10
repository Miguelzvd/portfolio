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
    link: "https://jovem-potiguar.vercel.app/",
    description:
      "Jovem Potiguar is a platform that helps people to find jobs in the Potiguar region. It was created with React and Next.js.",
  },
];
