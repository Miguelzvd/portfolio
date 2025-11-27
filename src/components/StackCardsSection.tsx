import { backStack, frontStack, toolsStack } from "@/constants/stack";
import Section from "./Section";
import { StackBadge } from "./StackBadge";

export const StackCardsSection = () => {
  return (
    <Section.Content className="max-h-fit flex flex-col gap-y-10 w-full">
      <div className="flex flex-col gap-y-2 w-full">
        <h3 className="text-2xl font-semibold">Front - end</h3>

        <div className="flex flex-row gap-x-4 flex-wrap">
          {frontStack.map((item, index) => (
            <StackBadge key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <h3 className="text-2xl font-semibold">Back - end</h3>

        <div className="flex flex-row gap-x-4 flex-wrap">
          {backStack.map((item, index) => (
            <StackBadge key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-2 w-full">
        <h3 className="text-2xl font-semibold">Tools</h3>

        <div className="flex flex-row gap-x-4 flex-wrap">
          {toolsStack.map((item, index) => (
            <StackBadge key={index} item={item} />
          ))}
        </div>
      </div>
    </Section.Content>
  );
};
