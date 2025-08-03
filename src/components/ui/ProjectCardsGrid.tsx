import Image from "next/image";
import { ProjectCard } from "./ProjectCard";
import Section from "./Section";

const projects = [
  {
    title: "Jovem Potiguar",
    image: "/images/projects/jovem_potiguar.png",
    stacks: [
      { src: "/images/stacks/next.png", alt: "Next.js", invert: true },
      { src: "/images/stacks/chakra.png", alt: "Chakra UI" },
      { src: "/images/stacks/reactjs.png", alt: "ReactJS" },
      { src: "/images/stacks/django.png", alt: "Django" },
    ],
    link: "https://jovempotiguar.sine.rn.gov.br/",
  },
];

export const ProjectCardsGrid = () => {
  return (
    <Section.Content className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {projects.map((p, i) => (
        <ProjectCard.Root key={i}>
          <ProjectCard.HeaderSection>
            <ProjectCard.Title text="Stack" />
            <ProjectCard.Content>
              {p.stacks.map((s, j) => (
                <ProjectCard.StackImage key={j} {...s} />
              ))}
            </ProjectCard.Content>
          </ProjectCard.HeaderSection>

          <ProjectCard.MainSection>
            <ProjectCard.Title text="Project" />
            <ProjectCard.MainContent>
              <Image
                className="cover h-full w-full"
                src={p.image}
                alt={p.title}
                width={100}
                height={100}
              />
            </ProjectCard.MainContent>
          </ProjectCard.MainSection>

          <ProjectCard.Content>
            <ProjectCard.Link href={p.link} text="Link" />
            <ProjectCard.Button text="+ More about the project" />
          </ProjectCard.Content>
        </ProjectCard.Root>
      ))}
    </Section.Content>
  );
};
