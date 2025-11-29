import Section from "./Section";
import Title from "./Title";
import HighlightedText from "@/components/HighlightedText";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { IsCodingStatus } from "@/components/IsCodingStatus";
import { getLocale, getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const locale = await getLocale();
  const cvFile =
    locale === "pt"
      ? "Miguel_Azevedo_CV_Ptranslations.pdf"
      : "Miguel_Azevedo_CV_EN.pdf";

  const cvDownloadName =
    locale === "pt"
      ? "Edilson_Miguel_De_Azevedo_Filho_Ptranslations.pdf"
      : "Edilson_Miguel_De_Azevedo_Filho_EN.pdf";

  const t = await getTranslations("Home");

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

  return (
    <Section.Root
      className="xl:flex-row flex-wrap min-h-[80vh]"
      about="about-me"
      id="about-me"
    >
      <Section.Content className="flex-2 flex flex-col gap-2 w-full lg:min-w-[32rem] text-lg animate-fade-in ">
        <Title.Root className="relative">
          <Title.Content>
            <span className="text-lg font-normal">{translations.greeting}</span>
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
          <HighlightedText>{translations.simplifyProcesses}</HighlightedText>{" "}
          {translations.and} {translations.improveAccess}{" "}
          <HighlightedText>{translations.access}</HighlightedText>{" "}
          {translations.through}{" "}
          <HighlightedText>{translations.intuitiveInterfaces}</HighlightedText>.{" "}
          {translations.iValue}{" "}
          <HighlightedText>{translations.cleanDesign}</HighlightedText>,{" "}
          <HighlightedText>{translations.realWorldImpact}</HighlightedText>,{" "}
          {translations.and}{" "}
          <HighlightedText>{translations.purposefulTechnology}</HighlightedText>
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
          className="relative flex h-90 overflow-hidden items-center justify-center rounded-br-[8rem] rounded-tl-[8rem] rounded-tr-[4rem] rounded-bl-[4rem] border-2 border-primary animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Image
            className="w-full h-[42rem] object-contain "
            src="/images/profile.jpg"
            alt="Profile picture of Miguel Azevedo"
            width={400}
            height={400}
            priority
          />

          {/* Sombra esquerda */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/100 via-black/90 to-transparent" />

          {/* Sombra direita */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/80 via-black/60 to-transparent" />
        </div>
        <IsCodingStatus />
      </Section.Content>
    </Section.Root>
  );
}
