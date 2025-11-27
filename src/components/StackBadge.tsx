import { Badge } from "./ui/badge";
import { StackItem } from "@/constants/stack";

interface StackBadgeProps {
  item: StackItem;
}

export const StackBadge = ({ item }: StackBadgeProps) => {
  const { icon: Icon, description, color } = item;
  const IconComponent = Icon;

  return (
    <Badge
      variant="outline"
      className="flex items-center justify-start gap-2 px-2 rounded-md py-1 text-sm font-medium transition-all hover:scale-105 cursor-default"
    >
      <IconComponent className={`${color} min-w-4 min-h-4`} />
      <span>{description}</span>
    </Badge>
  );
};
