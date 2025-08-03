import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const SectionRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={twMerge(
        "flex flex-col gap-20 items-center justify-center w-full lg:min-h-[80vh] h-fit",
        className
      )}
    >
      {children}
    </section>
  );
};

const SectionContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex-2 flex flex-col gap-2 ${className}`}>{children}</div>
  );
};

const Section = {
  Root: SectionRoot,
  Content: SectionContent,
};

export default Section;
