import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const SectionRoot = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      {...rest}
      className={twMerge(
        "flex flex-col gap-20 items-center justify-center w-full min-h-[90vh] h-fit",
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
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex-2 flex flex-col gap-2 ${className}`} {...rest}>
      {children}
    </div>
  );
};

const Section = {
  Root: SectionRoot,
  Content: SectionContent,
};

export default Section;
