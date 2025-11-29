"use client";

import { Github, Linkedin } from "lucide-react";
import { MyJourneySection } from "@/components/MyJourneySection";
import { ProjectCardsSection } from "@/components/ProjectCardsSection";
import { FaDiscord } from "react-icons/fa";
import { StackCardsGroup } from "@/components/StackCardsGroup";
import { ContactForm } from "@/components/ContactForm";
import Section from "@/components/Section";
import Title from "@/components/Title";

interface MainSectionProps {
  stackTranslations: {
    title: string;
  };
  journeyTranslations: {
    title: string;
  };
  projectsTranslations: {
    title: string;
  };
  contactTranslations: {
    title: string;
    subtitle: string;
  };
}

export function AnimatedSections({
  stackTranslations: tStack,
  journeyTranslations: tJourney,
  projectsTranslations: tProjects,
  contactTranslations: tContact,
}: MainSectionProps) {
  return (
    <>
      <Section.Root about="my-stack" id="my-stack" className="min-h-[60vh]">
        <Title.Root>
          <Title.Content>
            <Title.Sub>{tStack.title}</Title.Sub>
          </Title.Content>
          <Title.UnderlineRow color="primary" />
        </Title.Root>
        <StackCardsGroup />
      </Section.Root>

      <Section.Root about="my-journey" id="my-journey">
        <Title.Root>
          <Title.Content>
            <Title.Sub>{tJourney.title}</Title.Sub>
          </Title.Content>
          <Title.UnderlineRow color="secondary" />
        </Title.Root>
        <MyJourneySection />
      </Section.Root>

      <Section.Root about="my-projects" id="my-projects">
        <Title.Root>
          <Title.Content>
            <Title.Sub>{tProjects.title}</Title.Sub>
          </Title.Content>
          <Title.UnderlineRow color="primary" />
        </Title.Root>
        <ProjectCardsSection />
      </Section.Root>

      <Section.Root
        className="min-h-[50vh] lg:min-h-[50vh]"
        about="contact"
        id="contact"
      >
        <Title.Root>
          <Title.Content>
            <Title.Sub>{tContact.title}</Title.Sub>
          </Title.Content>
          <Title.UnderlineRow color="secondary" />
          <span className="font-normal text-lg mt-2">{tContact.subtitle}</span>
        </Title.Root>

        <Section.Content className="gap-4">
          <div
            className="flex flex-row justify-center gap-2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              className="w-12 h-12 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
              href="https://github.com/Miguelzvd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github color="black" />
            </a>

            <a
              className="w-12 h-12 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
              href="#"
              rel="noopener noreferrer"
              aria-label="Discord Profile"
            >
              <FaDiscord color="black" size={30} />
            </a>

            <a
              className="w-12 h-12 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
              href="https://www.linkedin.com/in/miguel-azevedo-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin Profile"
            >
              <Linkedin color="black" />
            </a>
          </div>
          <ContactForm />
        </Section.Content>
      </Section.Root>
    </>
  );
}
