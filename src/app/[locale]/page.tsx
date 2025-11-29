import { Header } from "@/components/Header";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Footer } from "@/components/Footer";
import { getTranslations, getLocale } from "next-intl/server";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedSections } from "@/components/AnimatedSections";
import Section from "@/components/Section";
import Title from "@/components/Title";
import HighlightedText from "@/components/HighlightedText";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { IsCodingStatus } from "@/components/IsCodingStatus";

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations("Home");
  const tJourney = await getTranslations("Journey");
  const tStack = await getTranslations("Stack");
  const tProjects = await getTranslations("Projects");
  const tContact = await getTranslations("Contact");

  const cvFile =
    locale === "pt"
      ? "Miguel_Azevedo_CV_Ptranslations.pdf"
      : "Miguel_Azevedo_CV_EN.pdf";
  const cvDownloadName =
    locale === "pt"
      ? "Edilson_Miguel_De_Azevedo_Filho_Ptranslations.pdf"
      : "Edilson_Miguel_De_Azevedo_Filho_EN.pdf";

  const translations = {
    greeting: t("greeting"),
    title: t("title"),
    subtitle: t("subtitle"),
    passionateAbout: t("passionateAbout"),
    frontendProjects: t("frontendProjects"),
    focusedOn: t("focusedOn"),
    usability: t("usability"),
    and: t("and"),
    accessibility: t("accessibility"),
    for: t("for"),
    publicService: t("publicService"),
    workAims: t("workAims"),
    to: t("to"),
    simplifyProcesses: t("simplifyProcesses"),
    improveAccess: t("improveAccess"),
    access: t("access"),
    through: t("through"),
    intuitiveInterfaces: t("intuitiveInterfaces"),
    iValue: t("iValue"),
    cleanDesign: t("cleanDesign"),
    realWorldImpact: t("realWorldImpact"),
    purposefulTechnology: t("purposefulTechnology"),
    downloadCV: t("downloadCV"),
  };

  const stackTranslations = {
    title: tStack("title"),
  };

  const journeyTranslations = {
    title: tJourney("title"),
  };

  const projectsTranslations = {
    title: tProjects("title"),
  };

  const contactTranslations = {
    title: tContact("title"),
    subtitle: tContact("subtitle"),
  };

  return (
    <div className="flex flex-col justify-between items-center min-h-screen p-8 pb-12 gap-16 font-[family-name:var(--font-geist-sans)] md:px-20 lg:px-40 xl:px-60 relative">
      <AnimatedBackground />
      <BackToTopButton />

      <Header />

      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full">
        <Section.Root
          className="xl:flex-row flex-wrap min-h-[80vh]"
          about="about-me"
          id="about-me"
        >
          <Section.Content className="flex-2 flex flex-col gap-2 w-full lg:min-w-[32rem] text-lg animate-fade-in ">
            <Title.Root className="relative">
              <Title.Content>
                <span className="text-lg font-normal">
                  {translations.greeting}
                </span>
                <br />
                <Title.Main className="text-5xl md:text-6xl font-bold">
                  Miguel <span className="whitespace-nowrap">Azevedo👋</span>
                </Title.Main>
              </Title.Content>
              <Title.UnderlineRow color="primary" />
            </Title.Root>

            <p>
              {translations.subtitle}{" "}
              <HighlightedText>{translations.title}</HighlightedText>{" "}
              {translations.passionateAbout}{" "}
              <HighlightedText>{translations.frontendProjects}</HighlightedText>{" "}
              {translations.focusedOn}
              <HighlightedText> {translations.usability}</HighlightedText>{" "}
              {translations.and}{" "}
              <HighlightedText> {translations.accessibility}</HighlightedText>{" "}
              {translations.for}{" "}
              <HighlightedText>{translations.publicService}</HighlightedText>.{" "}
              {translations.workAims} {translations.to}{" "}
              <HighlightedText>
                {translations.simplifyProcesses}
              </HighlightedText>{" "}
              {translations.and} {translations.improveAccess}{" "}
              <HighlightedText>{translations.access}</HighlightedText>{" "}
              {translations.through}{" "}
              <HighlightedText>
                {translations.intuitiveInterfaces}
              </HighlightedText>
              . {translations.iValue}{" "}
              <HighlightedText>{translations.cleanDesign}</HighlightedText>,{" "}
              <HighlightedText>{translations.realWorldImpact}</HighlightedText>,{" "}
              {translations.and}{" "}
              <HighlightedText>
                {translations.purposefulTechnology}
              </HighlightedText>
              .
            </p>

            <a
              href={`/files/${cvFile}`}
              download={cvDownloadName}
              aria-label="Download CV"
              className="bg-white text-black font-semibold px-4 py-2 rounded-md w-fit flex gap-2 items-center cursor-pointer hover:bg-white/80 hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <span>{translations.downloadCV}</span>
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

        <AnimatedSections
          cvFile={cvFile}
          cvDownloadName={cvDownloadName}
          translations={translations}
          stackTranslations={stackTranslations}
          journeyTranslations={journeyTranslations}
          projectsTranslations={projectsTranslations}
          contactTranslations={contactTranslations}
        />
      </main>
      <Footer />
    </div>
  );
}
