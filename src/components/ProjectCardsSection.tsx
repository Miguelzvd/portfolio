"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./ui/Section";
import { getProjects } from "@/constants/projects";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { StackBadge } from "./ui/StackBadge";

export const ProjectCardsSection = () => {
  const t = useTranslations("Projects");
  const projects = getProjects(t);

  const gradients = [
    "from-blue-500/20 via-purple-500/10 to-transparent",
    "from-purple-500/20 via-pink-500/10 to-transparent",
    "from-green-500/20 via-cyan-500/10 to-transparent",
    "from-orange-500/20 via-red-500/10 to-transparent",
  ];

  return (
    <Section.Content className="space-y-16">
      {projects.map((project, projectIndex) => {
        const gradient = gradients[projectIndex % gradients.length];
        const isEven = projectIndex % 2 === 0;

        return (
          <motion.div
            key={project.id || project.title || projectIndex}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="group"
          >
            <div className={`flex flex-col lg:flex-row gap-8 items-start `}>
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative aspect-video p-6">
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        unoptimized
                      />
                      {/* Inner shadow overlay */}
                      <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl" />
                </div>
              </motion.div>

              {/* Content Section - Right on Desktop */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mb-6"
                >
                  <p className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Stack Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mb-8"
                >
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    {t("stack")}
                  </h4>
                  <motion.div
                    className="flex flex-wrap gap-3"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.7,
                        },
                      },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {project.stacks.map((stack, stackIndex) => (
                      <StackBadge key={stack.name || stackIndex} item={stack} />
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 hover:bg-gray-700/50 text-white font-medium transition-all duration-300 group/btn"
                  >
                    <span>{t("viewProject")}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </Section.Content>
  );
};
