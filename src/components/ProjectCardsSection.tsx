"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ui/ProjectCard";
import Section from "./ui/Section";
import { getProjects } from "@/constants/projects";
import { useTranslations } from "next-intl";

export const ProjectCardsSection = () => {
  const t = useTranslations("Projects");
  const projects = getProjects(t);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleToggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <Section.Content className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {projects.map((project, projectIndex) => {
        const isExpanded = expandedProject === projectIndex;

        return (
          <motion.div
            key={project.id || project.title || projectIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: projectIndex * 0.2,
              ease: "easeOut",
            }}
          >
            <ProjectCard.Root className="md:hover:scale-110 transition-all duration-400 ease-in-out">
              <ProjectCard.HeaderSection>
                <ProjectCard.Title text={t("stack")} />
                <ProjectCard.Content>
                  {project.stacks.map((stack, stackIndex) => (
                    <ProjectCard.StackIcon
                      key={stack.name || stackIndex}
                      icon={stack.icon}
                      alt={stack.alt}
                      color={stack.color}
                    />
                  ))}
                </ProjectCard.Content>
              </ProjectCard.HeaderSection>

              <ProjectCard.MainSection>
                <ProjectCard.Title text={project.title} />

                <ProjectCard.MainContent className="relative w-full aspect-video">
                  <Image
                    className="object-cover rounded-md"
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={75}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                    unoptimized
                    onError={(e) => {
                      console.error("Image failed to load:", project.image);
                      e.currentTarget.src = "/images/placeholder.png";
                    }}
                  />
                </ProjectCard.MainContent>
              </ProjectCard.MainSection>

              <ProjectCard.Content>
                <ProjectCard.Link
                  href={project.link}
                  text={t("link")}
                  target="_blank"
                />

                <ProjectCard.Button
                  text={
                    isExpanded ? t("hideAboutProject") : t("showAboutProject")
                  }
                  onClick={() => handleToggleExpand(projectIndex)}
                  aria-expanded={isExpanded}
                />
              </ProjectCard.Content>

              <div
                className={`grid overflow-hidden transition-all ease-in-out duration-700 ${
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <ProjectCard.Content className="border border-white/20 rounded-md px-2 py-2 transform transition-all duration-200 ease-in-out">
                    <ProjectCard.Title
                      text={t("description")}
                      className="mb-2"
                    />
                    <span
                      className={`text-sm text-gray-300 leading-relaxed whitespace-normal break-words block`}
                    >
                      {project.description}
                    </span>
                  </ProjectCard.Content>
                </div>
              </div>
            </ProjectCard.Root>
          </motion.div>
        );
      })}
    </Section.Content>
  );
};
