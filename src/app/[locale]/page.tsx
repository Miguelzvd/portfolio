import { Header } from "@/components/Header";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Footer } from "@/components/Footer";
import { getTranslations } from "next-intl/server";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedSections } from "@/components/AnimatedSections";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
  const tJourney = await getTranslations("Journey");
  const tStack = await getTranslations("Stack");
  const tProjects = await getTranslations("Projects");
  const tContact = await getTranslations("Contact");

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
        <HeroSection />

        <AnimatedSections
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
