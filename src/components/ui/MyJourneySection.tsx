import { timelineEvents } from "@/constants/timeline";
import Timeline from "./Timeline";
import Section from "./Section";

export const MyJourneySection = () => {
  return (
    <Section.Content>
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
    </Section.Content>
  );
};
