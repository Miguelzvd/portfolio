"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import Section from "./Section";

const projects = [
  {
    title: "Jovem Potiguar",
    image: "/images/projects/jovem_potiguar.png",
    stacks: [
      { src: "/images/stacks/reactjs.png", alt: "ReactJS" },
      { src: "/images/stacks/chakra.png", alt: "Chakra UI" },
      { src: "/images/stacks/django.png", alt: "Django" },
    ],
    link: "https://jovempotiguar.sine.rn.gov.br/",
    description:
      "Project developed for Jovem Potiguar, a non-governmental organization that promotes gender equality and equal opportunities for children and adolescents. The project consists of a website that allows children and adolescents to be registered, evaluated, and referred to the organization. The website also allows the organization to register, evaluate, and be referred to children and adolescents. The project was developed using the following technologies: Next.js, Chakra UI, ReactJS, Django.",
  },
];

export const ProjectCardsGrid = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleToggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <Section.Content className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {projects.map((p, i) => {
        const isExpanded = expandedProject === i;

        return (
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
              <ProjectCard.Button
                text={
                  isExpanded
                    ? "- Less about the project"
                    : "+ More about the project"
                }
                onClick={() => handleToggleExpand(i)}
              />
            </ProjectCard.Content>

            <div
              className={`overflow-hidden transition-all ease-in-out duration-700 ${
                isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ProjectCard.Content
                className={`border border-white/20 rounded-md px-2 py-2 mt-2 transform transition-all duration-200 ease-in-out`}
              >
                <ProjectCard.Title text="Description" className="mb-2" />
                <span
                  className={`text-sm text-gray-300 leading-relaxed block transition-all duration-200 delay-150 ${
                    isExpanded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                  }`}
                >
                  {p.description}
                </span>
              </ProjectCard.Content>
            </div>
          </ProjectCard.Root>
        );
      })}
    </Section.Content>
  );
};
