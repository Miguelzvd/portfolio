import { HTMLAttributes } from "react";

const TimelineRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {children}
    </div>
  );
};

const TimelineLine = ({
  className,
}: {
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`w-1 h-[30rem] bg-gradient-to-b from-primary via-primary to-transparent ${className}`}
    />
  );
};

const TimelineEvent = ({
  children,
  className,
  position = "left",
  top,
}: {
  children: React.ReactNode;
  className?: string;
  position?: "left" | "right";
  top: string;
} & HTMLAttributes<HTMLDivElement>) => {
  const isLeft = position === "left";

  return (
    <div
      className={`absolute ${top} ${
        isLeft ? "-left-[0.4rem]" : "-right-[0.4rem]"
      } -mt-2 ${className}`}
    >
      {children}
    </div>
  );
};

const TimelineEventContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`flex flex-row items-center justify-between gap-2 w-[25rem] ${className}`}
    >
      {children}
    </div>
  );
};

const TimelineEventYear = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={`text-sm text-center w-full ${className}`}>
      {children}
    </span>
  );
};

const TimelineEventDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={`text-sm w-[14rem] text-center ${className}`}>
      {children}
    </span>
  );
};

const TimelineEventContext = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>) => {
  return <span className={`text-sm ${className}`}>{children}</span>;
};

const TimelineEventDot = ({
  className,
}: {
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`w-4 h-4 rounded-full bg-secondary/90 ${className}`} />
  );
};

const TimelineEventLine = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`flex-1 w-full h-[0.2rem] bg-white relative ${className} relative`}
    >
      {children}
    </div>
  );
};

const Timeline = {
  Root: TimelineRoot,
  Line: TimelineLine,
  Event: TimelineEvent,
  EventContent: TimelineEventContent,
  EventYear: TimelineEventYear,
  EventDescription: TimelineEventDescription,
  EventContext: TimelineEventContext,
  EventDot: TimelineEventDot,
  EventLine: TimelineEventLine,
};

export default Timeline;
