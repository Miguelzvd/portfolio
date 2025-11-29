"use client";

import { getTimelineEvents } from "@/constants/timeline";
import Timeline from "./Timeline";
import Section from "./Section";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type TimelineEvent =
  | {
      year: string;
      description: string;
      context: string;
      event_status?: undefined;
    }
  | {
      year: string;
      event_status: string;
      description: string;
      context: string;
    };

export const MyJourneySection = () => {
  const isDesktop = useIsDesktop();
  const t = useTranslations("Timeline");
  const timelineEvents = getTimelineEvents(t);

  const LeftContent = ({
    event,
    index,
  }: {
    event: TimelineEvent;
    index: number;
  }) => (
    <>
      <Timeline.EventDot index={index} />
      <Timeline.EventLine index={index}>
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
  );

  const RightContent = ({
    event,
    index,
  }: {
    event: TimelineEvent;
    index: number;
  }) => (
    <>
      <Timeline.EventDescription className="text-right">
        {event.description}
      </Timeline.EventDescription>
      <Timeline.EventLine index={index}>
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
      <Timeline.EventDot index={index} />
    </>
  );

  const DesktopTimeline = () => {
    const totalDuration = 1 + timelineEvents.length * 0.4;

    return (
      <Timeline.Root>
        <Timeline.Line totalDuration={totalDuration} />

        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          const topSpacing = 2 + index * 4;

          return (
            <Timeline.Event
              key={index}
              position={isLeft ? "left" : "right"}
              top={`${topSpacing}`}
              index={index}
            >
              <Timeline.EventContent>
                {isLeft ? (
                  <LeftContent event={event} index={index} />
                ) : (
                  <RightContent event={event} index={index} />
                )}
              </Timeline.EventContent>
            </Timeline.Event>
          );
        })}
      </Timeline.Root>
    );
  };

  const MobileTimeline = () => {
    return (
      <div className="space-y-2">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="flex items-start gap-4"
          >
            {/* Dot and line */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.2,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="w-4 h-4 rounded-full bg-secondary/90 flex-shrink-0 shadow-lg shadow-secondary/50"
              />
              {index < timelineEvents.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "5rem" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut",
                  }}
                  className="w-0.5 bg-primary/50 mt-2"
                />
              )}
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.3,
              }}
              className="flex-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <span className="text-sm font-medium text-primary">
                  {event.year}
                  {event.event_status && (
                    <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {event.event_status}
                    </span>
                  )}
                </span>
              </div>

              <h3 className="text-base font-medium mb-1">
                {event.description}
              </h3>

              {event.context && (
                <p className="text-sm text-gray-600">{event.context}</p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <Section.Content>
      {isDesktop ? <DesktopTimeline /> : <MobileTimeline />}
    </Section.Content>
  );
};
