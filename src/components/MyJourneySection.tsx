"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from "framer-motion";
import { useTranslations } from "next-intl";
import { getTimelineEvents, type TimelineEvent } from "@/constants/timeline";
import Timeline, { PRIMARY_GLOW } from "./ui/Timeline";
import Section from "./ui/Section";

const FIRST_DOT_REM = 2;
const DOT_GAP_REM = 7;
const LINE_SPEED_REM_PER_S = 12;

const dotOffsetRem = (index: number) => FIRST_DOT_REM + index * DOT_GAP_REM;

const mobileCardVariants: Variants = {
  hidden: { opacity: 0, x: 16, transition: { duration: 0.2 } },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.1, duration: 0.45, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const JourneyCard = ({
  event,
  currentLabel,
}: {
  event: TimelineEvent;
  currentLabel: string;
}) => (
  <article
    className={`rounded-xl border bg-white/3 p-4 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 ${
      event.isCurrent ? "border-primary/30" : "border-white/10"
    }`}
  >
    <div className="flex items-center gap-2 text-xs font-semibold text-primary">
      <span>{event.year}</span>
      {event.isCurrent && (
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider">
          {currentLabel}
        </span>
      )}
    </div>
    <h3 className="mt-1 text-base font-semibold text-white">{event.title}</h3>
    <p className="text-sm text-gray-400">{event.subtitle}</p>
  </article>
);

const DesktopTimeline = ({
  events,
  currentLabel,
}: {
  events: TimelineEvent[];
  currentLabel: string;
}) => {
  const lineHeightRem = dotOffsetRem(events.length - 1);

  return (
    <Timeline.Root className="pb-12">
      <Timeline.Line
        height={`${lineHeightRem}rem`}
        duration={lineHeightRem / LINE_SPEED_REM_PER_S}
      />

      {events.map((event, index) => {
        const offsetRem = dotOffsetRem(index);

        return (
          <Timeline.Event
            key={event.year}
            side={index % 2 === 0 ? "right" : "left"}
            top={`${offsetRem}rem`}
            revealAt={offsetRem / LINE_SPEED_REM_PER_S}
            isCurrent={event.isCurrent}
          >
            <JourneyCard event={event} currentLabel={currentLabel} />
          </Timeline.Event>
        );
      })}
    </Timeline.Root>
  );
};

// Line tip and dot reveal both track the same viewport "reading line" at 60%
// height, so a dot lights exactly when the line reaches its center.
const MobileTimelineItem = ({
  event,
  isLast,
  currentLabel,
}: {
  event: TimelineEvent;
  isLast: boolean;
  currentLabel: string;
}) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLSpanElement>(null);
  const [isLit, setIsLit] = useState(false);

  const { scrollYProgress: dotProgress } = useScroll({
    target: dotRef,
    offset: ["start 60%", "end 60%"],
  });
  const { scrollYProgress: segmentProgress } = useScroll({
    target: segmentRef,
    offset: ["start 60%", "end 60%"],
  });

  useMotionValueEvent(dotProgress, "change", (progress) =>
    setIsLit(progress >= 0.5)
  );

  return (
    <motion.li
      initial="hidden"
      animate={isLit ? "visible" : "hidden"}
      className="relative"
    >
      {!isLast && (
        <motion.span
          ref={segmentRef}
          className="absolute -left-6.25 -bottom-13 top-7 w-0.5 origin-top rounded-full bg-primary"
          style={{ scaleY: segmentProgress, boxShadow: PRIMARY_GLOW }}
        />
      )}
      <div ref={dotRef} className="absolute -left-8 top-5">
        <Timeline.Dot revealAt={0} isCurrent={event.isCurrent} />
      </div>
      <motion.div variants={mobileCardVariants}>
        <JourneyCard event={event} currentLabel={currentLabel} />
      </motion.div>
    </motion.li>
  );
};

const MobileTimeline = ({
  events,
  currentLabel,
}: {
  events: TimelineEvent[];
  currentLabel: string;
}) => (
  <ol className="space-y-6 pl-8">
    {events.map((event, index) => (
      <MobileTimelineItem
        key={event.year}
        event={event}
        isLast={index === events.length - 1}
        currentLabel={currentLabel}
      />
    ))}
  </ol>
);

export const MyJourneySection = () => {
  const t = useTranslations("Timeline");
  const events = getTimelineEvents(t);
  const currentLabel = t("current");

  return (
    <Section.Content className="w-full items-center">
      <div className="hidden lg:block">
        <DesktopTimeline events={events} currentLabel={currentLabel} />
      </div>
      <div className="w-full max-w-md lg:hidden">
        <MobileTimeline events={events} currentLabel={currentLabel} />
      </div>
    </Section.Content>
  );
};
