import Image from "next/image";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import HighlightedText from "@/components/ui/HighlightedText";
import { IsCodingStatus } from "@/components/ui/IsCodingStatus";
import Title from "@/components/ui/Title";
import Section from "@/components/ui/Section";
import { Header } from "@/components/ui/Header";
import { MyJourneySection } from "@/components/ui/MyJourneySection";
import { ProjectCardsGrid } from "@/components/ui/ProjectCardsGrid";
import { FaDiscord } from "react-icons/fa";
import { StackCardsGrid } from "@/components/ui/StackCardsGrid";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { Footer } from "@/components/ui/Footer";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations("Home");
  const tJourney = await getTranslations("Journey");
  const tStack = await getTranslations("Stack");
  const tProjects = await getTranslations("Projects");
  const tContact = await getTranslations("Contact");

  // Determina o arquivo do CV baseado no idioma
  const cvFile = locale === 'pt' ? 'Miguel_Azevedo_CV_PT.pdf' : 'Miguel_Azevedo_CV_EN.pdf';
  const cvDownloadName = locale === 'pt' 
    ? 'Edilson_Miguel_De_Azevedo_Filho_PT.pdf' 
    : 'Edilson_Miguel_De_Azevedo_Filho_EN.pdf';

  return (
    <div className="flex flex-col justify-between items-center min-h-screen p-8 pb-12 gap-16 font-[family-name:var(--font-geist-sans)] md:px-20 lg:px-40 xl:px-60 relative">
      <BackToTopButton />

      <Header />

      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full">
        <Section.Root
          className="xl:flex-row flex-wrap min-h-[80vh]"
          about="about-me"
          id="about-me"
        >
          <Section.Content className="flex-2 flex flex-col gap-2 w-full lg:min-w-[32rem]">
            <Title.Root>
              <Title.Content>
                <span className="text-lg font-normal">{t("greeting")}</span>
                <br />
                <Title.Main className="text-5xl md:text-6xl font-bold">
                  Miguel <span className="whitespace-nowrap">Azevedo👋</span>
                </Title.Main>
              </Title.Content>
              <Title.UnderlineRow color="primary" />
            </Title.Root>

            <p className="text-lg w-full">
              {t("subtitle")} <HighlightedText>{t("title")}</HighlightedText>{" "}
              {t("passionateAbout")}{" "}
              <HighlightedText>{t("frontendProjects")}</HighlightedText>{" "}
              {t("focusedOn")}
              <HighlightedText> {t("usability")}</HighlightedText> {t("and")}{" "}
              <HighlightedText> {t("accessibility")}</HighlightedText>{" "}
              {t("for")} <HighlightedText>{t("publicService")}</HighlightedText>
              . {t("workAims")} {t("to")}{" "}
              <HighlightedText>{t("simplifyProcesses")}</HighlightedText>{" "}
              {t("and")} {t("improveAccess")}{" "}
              <HighlightedText>{t("access")}</HighlightedText> {t("through")}{" "}
              <HighlightedText>{t("intuitiveInterfaces")}</HighlightedText>.{" "}
              {t("iValue")}{" "}
              <HighlightedText>{t("cleanDesign")}</HighlightedText>,{" "}
              <HighlightedText>{t("realWorldImpact")}</HighlightedText>,{" "}
              {t("and")}{" "}
              <HighlightedText>{t("purposefulTechnology")}</HighlightedText>.
            </p>

            <a
              href={`/files/${cvFile}`}
              download={cvDownloadName}
              aria-label="Download CV"
              className="bg-white text-black font-semibold px-4 py-2 rounded-md w-fit flex gap-2 items-center cursor-pointer hover:bg-white/80 transition-all duration-300"
            >
              <span>{t("downloadCV")}</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </Section.Content>

          <Section.Content className="flex-2 w-full max-w-[32rem] lg:min-w-[32rem]">
            <div className="flex h-90 overflow-hidden items-center justify-center rounded-br-[8rem] rounded-tl-[8rem] rounded-tr-[4rem] rounded-bl-[4rem] border-2 border-primary">
              <Image
                className="w-full h-[42rem] object-contain mask-x-from-60% mask-x-to-90%"
                src="/images/profile.jpg"
                alt="Profile picture of Miguel Azevedo"
                quality={100}
                width={400}
                height={400}
                priority
              />
            </div>
            <IsCodingStatus />
          </Section.Content>
        </Section.Root>

        <Section.Root about="my-journey" id="my-journey">
          <Title.Root>
            <Title.Content>
              <Title.Sub>{tJourney("title")}</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="secondary" />
          </Title.Root>
          <MyJourneySection />
        </Section.Root>

        <Section.Root about="my-stack" id="my-stack" className="min-h-[100vh]">
          <Title.Root>
            <Title.Content>
              <Title.Sub>{tStack("title")}</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="primary" />
          </Title.Root>
          <StackCardsGrid />
        </Section.Root>

        <Section.Root about="my-projects" id="my-projects">
          <Title.Root>
            <Title.Content>
              <Title.Sub>{tProjects("title")}</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="secondary" />
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
              <Title.Sub>{tContact("title")}</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="primary" />
            <span className="font-normal">{tContact("subtitle")}</span>
          </Title.Root>

          <Section.Content className="gap-4">
            <button className="relative rounded-sm text-white py-[0.6rem] px-[0.1rem] cursor-pointer gradient-rotate">
              <span className="h-full w-full bg-dark rounded-sm py-2 px-4 text-2xl">
                Contact me
              </span>
            </button>

            <div className="flex flex-row justify-between">
              <a
                className="w-12 h-12 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center cursor-pointer"
                href="https://github.com/Miguelzvd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github color="black" />
              </a>

              <a
                className="w-12 h-12 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center cursor-pointer"
                href="#"
                rel="noopener noreferrer"
                aria-label="Discord Profile"
              >
                <FaDiscord color="black" size={30} />
              </a>

              <a
                className="w-12 h-12 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center cursor-pointer"
                href="https://www.linkedin.com/in/miguel-azevedo-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin Profile"
              >
                <Linkedin color="black" />
              </a>
            </div>
          </Section.Content>
        </Section.Root>
      </main>

      <Footer />
    </div>
  );
}
