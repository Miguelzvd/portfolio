import Image from "next/image";
import { ArrowDown, Languages } from "lucide-react";
import HighlightedText from "@/components/ui/HighlightedText";
import Link from "next/link";
import { IsCodingStatus } from "@/components/ui/IsCodingStatus";
import Title from "@/components/ui/Title";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center justify-items-center min-h-screen p-8 pb-12 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-row w-full justify-end items-center gap-10">
        <ol className="flex flex-row gap-6 font-bold">
          <li>
            <Link href="journey">Journey</Link>
          </li>
          <li>
            <Link href="stack">Stack</Link>
          </li>
          <li>
            <Link href="projects">Projects</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ol>

        <button
          aria-label="Change language"
          className="flex flex-row gap-2 items-center bg-blue-500/20 rounded-md p-2 cursor-pointer hover:bg-blue-500/30 transition-all duration-300"
        >
          <Languages aria-hidden="true" />
          <span className="text-sm">EN</span>
        </button>
      </header>
      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full md:px-60 ">
        <section
          className="flex flex-col xl:flex-row gap-20 items-center justify-between w-full lg:h-[80vh]"
          about="about-me"
        >
          <div className="flex-2 flex flex-col gap-2">
            <Title.Root isMainTitle>
              <Title.Content>
                <span className="text-lg font-normal">Hello, I&apos;m</span>{" "}
                <br />
                <Title.Main>Miguel Azevedo 👋</Title.Main>
              </Title.Content>
              <Title.UnderlineRow color="primary" />
            </Title.Root>

            <p className="text-lg">
              I&apos;m a <HighlightedText>developer</HighlightedText> passionate
              about creating meaningful digital experiences. I currently lead{" "}
              <HighlightedText>front-end projects</HighlightedText> focused on{" "}
              <HighlightedText>usability</HighlightedText> and{" "}
              <HighlightedText>accessibility</HighlightedText> for{" "}
              <HighlightedText>public service platforms</HighlightedText>. My
              work aims to{" "}
              <HighlightedText>simplify complex processes</HighlightedText> and
              improve <HighlightedText>access</HighlightedText> through{" "}
              <HighlightedText>intuitive interfaces</HighlightedText>. I value{" "}
              <HighlightedText>clean design</HighlightedText>,{" "}
              <HighlightedText>real-world impact</HighlightedText>, and{" "}
              <HighlightedText>purposeful technology</HighlightedText>.
            </p>

            <a
              href="/files/Edilson_Miguel_De_Azevedo_Filho_EN.pdf"
              download="Edilson_Miguel_De_Azevedo_Filho_EN.pdf"
              className="bg-white text-black font-semibold px-4 py-2 rounded-md w-fit flex flex-row gap-2 items-center cursor-pointer hover:bg-white/80 transition-all duration-300"
            >
              <span>Download CV</span>
              <ArrowDown aria-hidden="true" />
            </a>
          </div>

          <div className="flex-2 w-[20rem] max-w-[32rem]">
            <div className="flex h-90 overflow-hidden items-center justify-center  rounded-br-[8rem] rounded-tl-[8rem] rounded-tr-[4rem] rounded-bl-[4rem] border-2 border-primary">
              <Image
                className="w-full h-[42rem] object-contain mask-x-from-60% mask-x-to-90%"
                src="/images/profile.jpg"
                alt="My profile picture"
                quality={100}
                width={400}
                height={400}
                priority
              />
            </div>
            <IsCodingStatus />
          </div>
        </section>

        <section
          className="flex flex-col gap-20 items-center justify-between w-full lg:h-[80vh]"
          about="my-journey"
        >
          <Title.Root>
            <Title.Content>
              <Title.Sub>My journey so far...</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="secondary" />
          </Title.Root>

          <div className="relative flex flex-col items-center">
            <div className="w-1 h-[30rem] bg-gradient-to-b from-primary via-primary to-transparent" />

            <div className="absolute top-16 -left-[0.4rem] -mt-2">
              <div className="flex flex-row items-center justify-between gap-2 w-[25rem]">
                <div className="w-4 h-4 rounded-full bg-secondary/90" />

                <div className="flex-1 w-full h-[0.2rem] bg-white relative" />

                <span className="text-sm absolute bottom-4 left-20">2018</span>

                <span className="text-sm w-[14rem] text-center">
                  Android App Development for Health and Pregnant Women
                </span>
              </div>
            </div>

            <div className="absolute top-32 w-4 h-4 bg-secondary/90 rounded-full -mt-2" />
            <div className="absolute top-48 w-4 h-4 bg-secondary/90 rounded-full -mt-2" />
            <div className="absolute top-64 w-4 h-4 bg-secondary/90 rounded-full -mt-2" />
            <div className="absolute top-80 w-4 h-4 bg-secondary/90 rounded-full -mt-2" />
            <div className="absolute top-96 w-4 h-4 bg-secondary/90 rounded-full -mt-2" />
            <div className="absolute top-192 w-4 h-4 bg-secondary/90 rounded-full -mt-2" />
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
