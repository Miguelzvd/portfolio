import { Header } from "@/components/Header";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Footer } from "@/components/Footer";
import { getTranslations, getLocale } from "next-intl/server";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { MainSection } from "@/components/MainSection";

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations("Home");
  const tJourney = await getTranslations("Journey");
  const tStack = await getTranslations("Stack");
  const tProjects = await getTranslations("Projects");
  const tContact = await getTranslations("Contact");

  // Determina o arquivo do CV baseado no idioma
  const cvFile =
    locale === "pt" ? "Miguel_Azevedo_CV_PT.pdf" : "Miguel_Azevedo_CV_EN.pdf";
  const cvDownloadName =
    locale === "pt"
      ? "Edilson_Miguel_De_Azevedo_Filho_PT.pdf"
      : "Edilson_Miguel_De_Azevedo_Filho_EN.pdf";

  // Converter traduções em objetos simples
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

      <MainSection
        cvFile={cvFile}
        cvDownloadName={cvDownloadName}
        translations={translations}
        stackTranslations={stackTranslations}
        journeyTranslations={journeyTranslations}
        projectsTranslations={projectsTranslations}
        contactTranslations={contactTranslations}
      />

      <Footer />
    </div>
  );
}
