"use client";

import { getTimelineEvents } from "@/constants/timeline";
import Timeline from "./Timeline";
import Section from "./Section";
import { useBreakpoints } from "@/hooks/useMediaQuery";
import { useTranslations } from "next-intl";

export const MyJourneySection = () => {
  const { isDesktop } = useBreakpoints();
  const t = useTranslations("Timeline");
  const timelineEvents = getTimelineEvents(t);

  const DesktopTimeline = () => (
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
                  <Timeline.EventDot />
                </>
              )}
            </Timeline.EventContent>
          </Timeline.Event>
        );
      })}
    </Timeline.Root>
  );

  const MobileTimeline = () => (
    <div className="space-y-2">
      {timelineEvents.map((event, index) => (
        <div key={index} className="flex items-start gap-4">
          {/* Dot and line */}
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-secondary/90 flex-shrink-0" />
            {index < timelineEvents.length - 1 && (
              <div className="w-0.5 h-20 bg-primary/50 mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
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

            <h3 className="text-base font-medium mb-1">{event.description}</h3>

            {event.context && (
              <p className="text-sm text-gray-600">{event.context}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Section.Content>
      {isDesktop ? <DesktopTimeline /> : <MobileTimeline />}
    </Section.Content>
  );
};
