import { backStack, frontStack, toolsStack } from "@/constants/stack";
import Section from "./Section";
import { Badge } from "./ui/badge";

export const StackCardsSection = () => {
  return (
    <Section.Content className="max-h-fit flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <h3 className="text-3xl">Front - end</h3>

        <div className="flex flex-row gap-x-4">
          {frontStack.map(({ icon: Icon, description, color }, index) => {
            const IconComponent = Icon;
            return (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center justify-start gap-2 px-2 rounded-md py-1 text-sm font-medium transition-all hover:scale-105 cursor-default"
              >
                <IconComponent className={`${color} min-w-4 min-h-4`} />
                <span>{description}</span>
              </Badge>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-y-2 justify-center items-center">
        <h3 className="text-3xl">Back - end</h3>

        <div className="flex flex-row gap-x-4">
          {backStack.map(({ icon: Icon, description, color }, index) => {
            const IconComponent = Icon;
            return (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center justify-start gap-2 px-2 rounded-md py-1 text-sm font-medium transition-all hover:scale-105 cursor-default"
              >
                <IconComponent className={`${color} min-w-4 min-h-4`} />
                <span>{description}</span>
              </Badge>
            );
          })}
        </div>
      </div>
      
      
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <h3 className="text-3xl">Tools</h3>

        <div className="flex flex-row gap-x-4">
          {toolsStack.map(({ icon: Icon, description, color }, index) => {
            const IconComponent = Icon;
            return (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center justify-start gap-2 px-2 rounded-md py-1 text-sm font-medium transition-all hover:scale-105 cursor-default"
              >
                <IconComponent className={`${color} min-w-4 min-h-4`} />
                <span>{description}</span>
              </Badge>
            );
          })}
        </div>
      </div>
    </Section.Content>
  );
};
