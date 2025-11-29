"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import HighlightedText from "@/components/HighlightedText";
import { IsCodingStatus } from "@/components/IsCodingStatus";
import { MyJourneySection } from "@/components/MyJourneySection";
import { ProjectCardsGrid } from "@/components/ProjectCardsGrid";
import { FaDiscord } from "react-icons/fa";
import { StackCardsGroup } from "@/components/StackCardsGroup";
import { ContactForm } from "@/components/ContactForm";
import Section from "@/components/Section";
import Title from "@/components/Title";

interface MainSectionProps {
  cvFile: string;
  cvDownloadName: string;
  translations: {
    greeting: string;
    title: string;
    subtitle: string;
    passionateAbout: string;
    frontendProjects: string;
    focusedOn: string;
    usability: string;
    and: string;
    accessibility: string;
    for: string;
    publicService: string;
    workAims: string;
    to: string;
    simplifyProcesses: string;
    improveAccess: string;
    access: string;
    through: string;
    intuitiveInterfaces: string;
    iValue: string;
    cleanDesign: string;
    realWorldImpact: string;
    purposefulTechnology: string;
    downloadCV: string;
  };
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

export function MainSection({
  cvFile,
  cvDownloadName,
  translations: t,
  stackTranslations: tStack,
  journeyTranslations: tJourney,
  projectsTranslations: tProjects,
  contactTranslations: tContact,
}: MainSectionProps) {
  return (
    <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full">
      <Section.Root
        className="xl:flex-row flex-wrap min-h-[80vh]"
        about="about-me"
        id="about-me"
      >
        <Section.Content className="flex-2 flex flex-col gap-2 w-full lg:min-w-[32rem] text-lg animate-fade-in ">
          <Title.Root className="relative">
            <Title.Content>
              <span className="text-lg font-normal">{t.greeting}</span>
              <br />
              <Title.Main className="text-5xl md:text-6xl font-bold">
                Miguel <span className="whitespace-nowrap">Azevedo👋</span>
              </Title.Main>
            </Title.Content>
            <Title.UnderlineRow color="primary" />
          </Title.Root>

          <p>
            {t.subtitle} <HighlightedText>{t.title}</HighlightedText>{" "}
            {t.passionateAbout}{" "}
            <HighlightedText>{t.frontendProjects}</HighlightedText>{" "}
            {t.focusedOn}
            <HighlightedText> {t.usability}</HighlightedText> {t.and}{" "}
            <HighlightedText> {t.accessibility}</HighlightedText> {t.for}{" "}
            <HighlightedText>{t.publicService}</HighlightedText>. {t.workAims}{" "}
            {t.to} <HighlightedText>{t.simplifyProcesses}</HighlightedText>{" "}
            {t.and} {t.improveAccess}{" "}
            <HighlightedText>{t.access}</HighlightedText> {t.through}{" "}
            <HighlightedText>{t.intuitiveInterfaces}</HighlightedText>.{" "}
            {t.iValue} <HighlightedText>{t.cleanDesign}</HighlightedText>,{" "}
            <HighlightedText>{t.realWorldImpact}</HighlightedText>, {t.and}{" "}
            <HighlightedText>{t.purposefulTechnology}</HighlightedText>.
          </p>

          <a
            href={`/files/${cvFile}`}
            download={cvDownloadName}
            aria-label="Download CV"
            className="bg-white text-black font-semibold px-4 py-2 rounded-md w-fit flex gap-2 items-center cursor-pointer hover:bg-white/80 hover:scale-105 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <span>{t.downloadCV}</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </Section.Content>

        <Section.Content className="flex-2 w-full max-w-[32rem] lg:min-w-[32rem]">
          <div
            className="flex h-90 overflow-hidden items-center justify-center rounded-br-[8rem] rounded-tl-[8rem] rounded-tr-[4rem] rounded-bl-[4rem] border-2 border-primary animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              className="w-full h-[42rem] object-contain mask-x-from-60% mask-x-to-90%"
              src="/images/profile.jpg"
              alt="Profile picture of Miguel Azevedo"
              width={400}
              height={400}
              priority
            />
          </div>
          <IsCodingStatus />
        </Section.Content>
      </Section.Root>

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
        <ProjectCardsGrid />
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
    </main>
  );
}
