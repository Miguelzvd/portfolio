import { Link } from "lucide-react";
import Image from "next/image";

const ProjectCardRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 h-fit w-70 bg-dark-gray p-4 rounded-md">
      {children}
    </div>
  );
};

const ProjectCardHeaderSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

const ProjectCardMiniStackCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-8 h-8 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

const ProjectCardMainSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex flex-col h-full gap-0">{children}</div>;
};

const ProjectCardMainContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full bg-white/20 rounded-md overflow-hidden">
      {children}
    </div>
  );
};

const ProjectCardStackImage = ({
  src,
  alt,
  invert,
}: {
  src: string;
  alt: string;
  invert?: boolean;
}) => {
  return (
    <ProjectCardMiniStackCard>
      <Image
        className={`object-contain ${invert ? "invert" : ""}`}
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
    </ProjectCardMiniStackCard>
  );
};

const ProjectCardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-row gap-1 flex-wrap">{children}</div>;
};

const ProjectCardTitle = ({ text }: { text: string }) => {
  return <span className="bold">{text}</span>;
};

const ProjectCardLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <a
      href={href}
      className="border border-gray-300 rounded-sm w-fit flex flex-row justify-start items-center py-0 pl-1 pr-2"
    >
      <Link height={"1rem"} />
      <span className="text-sm">{text}</span>
    </a>
  );
};

const ProjectCardButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="border cursor-pointer border-gray-300 rounded-sm py-0 px-2 justify-start w-fit"
    >
      <span className="text-sm">{text}</span>
    </button>
  );
};

export const ProjectCard = {
  Root: ProjectCardRoot,
  Title: ProjectCardTitle,
  HeaderSection: ProjectCardHeaderSection,
  MiniStackCard: ProjectCardMiniStackCard,
  MainSection: ProjectCardMainSection,
  MainContent: ProjectCardMainContent,
  Content: ProjectCardContent,
  StackImage: ProjectCardStackImage,
  Link: ProjectCardLink,
  Button: ProjectCardButton,
};
