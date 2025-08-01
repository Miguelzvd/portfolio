import Image from "next/image";
import { ArrowDown } from "lucide-react";
import HighlightedText from "@/components/ui/HighlightedText";
import { IsCodingStatus } from "@/components/ui/IsCodingStatus";
import Title from "@/components/ui/Title";
import Section from "@/components/ui/Section";
import Timeline from "@/components/ui/Timeline";
import { timelineEvents } from "@/constants/timeline";
import { StackCardsGrid } from "@/components/ui/StackCardsGrid";
import { Header } from "@/components/ui/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center justify-items-center min-h-screen p-8 pb-12 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start w-full px-10 md:px-20 lg:px-42 xl:px-60">
        <Section.Root className="xl:flex-row flex-wrap" about="about-me">
          <Section.Content className="flex-2 flex flex-col gap-2 lg:min-w-[32rem]">
            <Title.Root>
              <Title.Content className="">
                <span className="text-lg font-normal">Hello, I&apos;m</span>{" "}
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
          </Section.Content>

          <Section.Content className="flex-2 w-[20rem] max-w-[32rem] lg:min-w-[32rem]">
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
          </Section.Content>
        </Section.Root>

        <Section.Root about="my-journey">
          <Title.Root>
            <Title.Content>
              <Title.Sub>My journey so far...</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="secondary" />
          </Title.Root>

          <Timeline.Root>
            <Timeline.Line />

            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const topSpacing = 2 + index * 4;

              return (
                <Timeline.Event
                  key={index}
                  position={isLeft ? "left" : "right"}
                  top={`${topSpacing}`}
                >
                  <Timeline.EventContent>
                    {isLeft ? (
                      <>
                        <Timeline.EventDot />
                        <Timeline.EventLine>
                          <Timeline.EventYear className="absolute bottom-2">
                            {event.year}

                            {event.event_status && (
                              <>
                                <br />
                                <span className="text-sm text-gray-500">
                                  {event.event_status}
                                </span>
                              </>
                            )}
                          </Timeline.EventYear>
                        </Timeline.EventLine>

                        <Timeline.EventDescription className="text-left">
                          {event.description}
                        </Timeline.EventDescription>
                      </>
                    ) : (
                      <>
                        <Timeline.EventDescription className="text-right">
                          {event.description}
                        </Timeline.EventDescription>
                        <Timeline.EventLine>
                          <Timeline.EventYear className="absolute bottom-2 ">
                            {event.year}

                            {event.event_status && (
                              <>
                                <br />
                                <span className="text-sm text-gray-500">
                                  {event.event_status}
                                </span>
                              </>
                            )}
                          </Timeline.EventYear>
                        </Timeline.EventLine>
                        <Timeline.EventDot />
                      </>
                    )}
                  </Timeline.EventContent>
                </Timeline.Event>
              );
            })}
          </Timeline.Root>
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

        <Section.Root about="My projects">
          <Title.Root>
            <Title.Content>
              <Title.Sub>My projects</Title.Sub>
            </Title.Content>
            <Title.UnderlineRow color="secondary" />
          </Title.Root>

          <Section.Content>
            <div className="h-40 w-40 bg-dark-gray"></div>
          </Section.Content>
        </Section.Root>
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
