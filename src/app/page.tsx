import Image from "next/image";
import { ArrowDown, Languages } from "lucide-react";
import HighlightedText from "@/components/ui/HighlightedText";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center justify-items-center min-h-screen p-8 pb-12 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-row w-full justify-end items-center gap-10">
        <ol className="flex flex-row gap-6 font-bold">
          <li>
            <a href="journey">Journey</a>
          </li>
          <li>
            <a href="stack">Stack</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ol>

        <button className="flex flex-row gap-2 items-center bg-blue-500/20 rounded-md p-2 cursor-pointer hover:bg-blue-500/30 transition-all duration-300">
          <Languages />
          <span className="text-sm">EN</span>
        </button>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full md:px-60">
        <section className="flex flex-row gap-20 items-center justify-between w-full">
          <div className="flex-2 flex flex-col gap-2">
            <h1 className="text-6xl font-bold">
              <span className="text-lg font-normal ">Hello, I&apos;m</span>{" "}
              <br />
              <span className="text-white italic">Miguel Azevedo </span>👋
              <hr className="w-40 border-b-4 border-primary mt-1" />
            </h1>

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

            <button className="bg-white text-black font-semibold px-4 py-2 rounded-md w-fit flex flex-row gap-2 items-center cursor-pointer hover:bg-white/80 transition-all duration-300">
              <span>Download CV</span>
              <ArrowDown />
            </button>
          </div>

          <div className="flex-2">
            <Image
              className="h-90 w-full rounded-br-[8rem] rounded-tl-[8rem] rounded-tr-[4rem] rounded-bl-[4rem]  border-2 border-red-500"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <div className="flex flex-row gap-2 items-center justify-center mt-1 text-sm">
              <span>Coding right now</span>
              <div className="gap-2 w-fit rounded-full bg-emerald-200/10 p-[0.25rem] flex flex-row items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
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
