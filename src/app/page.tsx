import Image from "next/image";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import HighlightedText from "@/components/ui/HighlightedText";
import { IsCodingStatus } from "@/components/ui/IsCodingStatus";
import Title from "@/components/ui/Title";
import Section from "@/components/ui/Section";
import { StackCardsGrid } from "@/components/ui/StackCardsGrid";
import { Header } from "@/components/ui/Header";
import { MyJourney } from "@/components/ui/MyJouney";
import { ProjectCardsGrid } from "@/components/ui/ProjectCardsGrid";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen p-8 pb-12 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full px-6 md:px-20 lg:px-40 xl:px-60">
        <Section.Root className="xl:flex-row flex-wrap" about="about-me">
          <Section.Content className="flex-2 flex flex-col gap-2 lg:min-w-[32rem]">
            <Title.Root>
              <Title.Content>
                <span className="text-lg font-normal">Hello, I&apos;m</span>
                <br />
                <Title.Main>
                  Miguel <span className="whitespace-nowrap">Azevedo👋</span>
                </Title.Main>
              </Title.Content>
              <Title.UnderlineRow color="primary" />
            </Title.Root>

            <p className="text-lg">
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

          <Section.Content className="flex-2 w-[20rem] max-w-[32rem] lg:min-w-[32rem]">
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

        <Section.Root about="my-journey">
          <Title.Root>
            <Title.Content>
              <Title.Sub>My journey so far...</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="secondary" />
          </Title.Root>
          <Section.Content>
            <MyJourney />
          </Section.Content>
        </Section.Root>

        <Section.Root about="my-stack">
          <Title.Root>
            <Title.Content>
              <Title.Sub>My stack</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="primary" />
          </Title.Root>
          <StackCardsGrid />
        </Section.Root>

        <Section.Root about="my-projects">
          <Title.Root>
            <Title.Content>
              <Title.Sub>My projects</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="secondary" />
          </Title.Root>
          <ProjectCardsGrid />
        </Section.Root>

        <Section.Root about="my-projects" className="gap-8">
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
            <button className="relative rounded-sm text-white py-[0.6rem] px-[0.1rem] bg-gradient-to-r from-primary to-secondary cursor-pointer">
              <span className="h-full w-full bg-dark rounded-sm py-[0.5rem] px-[1rem] text-2xl">
                Contact me
              </span>
            </button>

            <div className="flex flex-row justify-between">
              <a
                className="w-12 h-12 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center cursor-pointer"
                href=""
              >
                <Github color="black" />
              </a>

              <a
                className="w-12 h-12 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center cursor-pointer"
                href=""
              >
                <FaDiscord color="black" size={30} />
              </a>

              <a
                className="w-12 h-12 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center cursor-pointer"
                href=""
              >
                <Linkedin color="black" />
              </a>
            </div>
          </Section.Content>
        </Section.Root>
      </main>

      {/* FOOTER */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <nav className="flex gap-6">
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/file.svg" alt="" width={16} height={16} />{" "}
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://vercel.com/templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt=""
              width={16}
              height={16}
            />{" "}
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="" width={16} height={16} />{" "}
            Go to nextjs.org →
          </a>
        </nav>
      </footer>
    </div>
  );
}
