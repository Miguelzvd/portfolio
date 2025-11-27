import { backStack, frontStack, toolsStack } from "@/constants/stack";
import Section from "./Section";
import { StackBadge } from "./StackBadge";

export const StackCardsSection = () => {
  return (
    <Section.Content className="max-h-fit flex flex-col gap-y-10 w-full items-center">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl text-center">Front - end:</h3>

        <div className="flex flex-row gap-x-4 flex-wrap">
          {frontStack.map((item, index) => (
            <StackBadge key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl text-center">Back - end:</h3>

        <div className="flex flex-row gap-x-4 flex-wrap ">
          {backStack.map((item, index) => (
            <StackBadge key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl text-center">Tools:</h3>

        <div className="flex flex-row gap-x-4 flex-wrap">
          {toolsStack.map((item, index) => (
            <StackBadge key={index} item={item} />
          ))}
        </div>
      </div>
    </Section.Content>
  );
};
