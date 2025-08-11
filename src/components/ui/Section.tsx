import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const SectionRoot = ({ children, className, ...rest }: SectionProps) => {
  return (
    <section
      {...rest}
      className={twMerge(
        "flex flex-col gap-16 items-center justify-center w-full min-h-[90vh] h-fit",
        className
      )}
    >
      {children}
    </section>
  );
};

const SectionContent = ({ children, className, ...rest }: SectionProps) => {
  return (
    <div className={twMerge("flex-2 flex flex-col gap-2", className)} {...rest}>
      {children}
    </div>
  );
};

const Section = {
  Root: SectionRoot,
  Content: SectionContent,
};

export default Section;
