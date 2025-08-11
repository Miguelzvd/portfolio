import Section from "./Section";
import { StackCard } from "./StackCard";

const stacks = [
  {
    src: "/images/stacks/next.png",
    alt: "Next logo",
    description: "Next",
    shadow: "bg-white/90",
  },
  {
    src: "/images/stacks/reactjs.png",
    alt: "React logo",
    description: "React",
    shadow: "bg-cyan-600",
  },
  {
    src: "/images/stacks/tailwind.png",
    alt: "Tailwind logo",
    description: "Tailwind",
    shadow: "bg-cyan-700",
  },
  {
    src: "/images/stacks/chakra.png",
    alt: "Chakra logo",
    description: "Chakra",
    shadow: "bg-teal-600",
  },
  {
    src: "/images/stacks/nodejs.png",
    alt: "Node logo",
    description: "Node",
    shadow: "bg-lime-600",
  },
  {
    src: "/images/stacks/django.png",
    alt: "Django logo",
    description: "Django",
    shadow: "bg-green-800",
  },
  {
    src: "/images/stacks/mysql.png",
    alt: "MySQL logo",
    description: "MySQL",
    shadow: "bg-cyan-700",
  },
  {
    src: "/images/stacks/postgresql.png",
    alt: "Postgresql logo",
    description: "Postgresql",
    shadow: "bg-cyan-700",
  },
];

export const StackCardsSection = () => {
  return (
    <Section.Content className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 xl:gap-x-20 gap-y-8 max-h-fit">
      {stacks.map(({ src, alt, description, shadow }, index) => (
        <StackCard.Root key={index}>
          <StackCard.Image src={src} alt={alt} />
          <StackCard.Description description={description} />
          <StackCard.Shadow classname={shadow} />
        </StackCard.Root>
      ))}
    </Section.Content>
  );
};
