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
import { StackCardsSection } from "@/components/ui/StackCardsSection";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

export default function Home() {
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
                <span className="text-lg font-normal">Hello, I&apos;m</span>
                <br />
                <Title.Main className="text-5xl md:text-6xl font-bold">
                  Miguel <span className="whitespace-nowrap">Azevedo👋</span>
                </Title.Main>
              </Title.Content>
              <Title.UnderlineRow color="primary" />
            </Title.Root>

            <p className="text-lg w-full">
              I&apos;m a <HighlightedText>developer</HighlightedText> passionate
              about creating meaningful digital experiences. I currently lead{" "}
              <HighlightedText>front-end projects</HighlightedText> focused on
              <HighlightedText> usability</HighlightedText> and{" "}
              <HighlightedText> accessibility</HighlightedText> for
              <HighlightedText> public service platforms</HighlightedText>. My
              work aims to
              <HighlightedText> simplify complex processes</HighlightedText> and
              improve
              <HighlightedText> access</HighlightedText> through{" "}
              <HighlightedText> intuitive interfaces</HighlightedText>. I value{" "}
              <HighlightedText> clean design</HighlightedText>,{" "}
              <HighlightedText> real-world impact</HighlightedText>, and
              <HighlightedText> purposeful technology</HighlightedText>.
            </p>

            <a
              href="/files/Edilson_Miguel_De_Azevedo_Filho_EN.pdf"
              download="Edilson_Miguel_De_Azevedo_Filho_EN.pdf"
              aria-label="Download CV"
              className="bg-white text-black font-semibold px-4 py-2 rounded-md w-fit flex gap-2 items-center cursor-pointer hover:bg-white/80 transition-all duration-300"
            >
              <span>Download CV</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </Section.Content>

          <Section.Content className="flex-2 w-[20rem] max-w-[32rem] lg:min-w-[32rem] justify-center items-center">
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
              <Title.Sub>My journey so far...</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="secondary" />
          </Title.Root>
          <MyJourneySection />
        </Section.Root>

        <Section.Root about="my-stack" id="my-stack" className="min-h-[100vh]">
          <Title.Root>
            <Title.Content>
              <Title.Sub>My stack</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="primary" />
          </Title.Root>
          <StackCardsSection />
        </Section.Root>

        <Section.Root about="my-projects" id="my-projects">
          <Title.Root>
            <Title.Content>
              <Title.Sub>My projects</Title.Sub>
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
              <Title.Sub>Lets work together!</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="primary" />
            <span className="font-normal">
              Send me a message and let’s create something.
            </span>
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

      {/* FOOTER */}
      <footer className="row-start-3 flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap items-center justify-center sm:justify-around w-full text-center sm:text-left">
        <div className="flex flex-col">
          <span className="text-sm sm:text-base">Designed & Developed by:</span>
          <span className="font-semibold">Miguel Azevedo</span>
        </div>
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-lg justify-center">
          <a
            className="hover:underline text-primary"
            href="mailto:your-email@example.com"
          >
            Email
          </a>
          <a
            className="hover:underline text-secondary"
            href="https://www.linkedin.com/in/miguel-azevedo-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="hover:underline text-primary"
            href="https://github.com/Miguelzvd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="hover:underline text-secondary"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </nav>
      </footer>
    </div>
  );
}
