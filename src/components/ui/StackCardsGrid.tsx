import { stacks } from "@/constants/stack";
import Section from "./Section";
import { StackCard } from "./StackCard";

export const StackCardsGrid = () => {
  return (
    <Section.Content className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 xl:gap-x-20 gap-y-8 md:gap-y-30 lg:gap-y-46 max-h-fit">
      {stacks.map(({ src, alt, description, shadow }, index) => (
        <StackCard.Root key={index}>
          <StackCard.Image src={src} alt={alt} unoptimized />
          <StackCard.Description description={description} />
          <StackCard.Shadow classname={shadow} />
        </StackCard.Root>
      ))}
    </Section.Content>
  );
};
