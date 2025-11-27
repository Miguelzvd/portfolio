import { stacks } from "@/constants/stack";
import Section from "./Section";
import { StackCard } from "./StackCard";

export const StackCardsGrid = () => {
  return (
    <Section.Content className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8 max-h-fit">
      {stacks.map(({ icon, alt, description, shadow, color }, index) => (
        <StackCard.Root key={index}>
          <StackCard.Icon icon={icon} alt={alt} className={color} />
          <StackCard.Description description={description} />
          <StackCard.Shadow classname={shadow} />
        </StackCard.Root>
      ))}
    </Section.Content>
  );
};
