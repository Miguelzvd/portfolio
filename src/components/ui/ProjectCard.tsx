import { Link } from "lucide-react";

const ProjectCardRoot = (children: React.ReactNode) => {
  return (
    <div className="flex flex-col gap-4 h-80 w-70 bg-dark-gray p-4 rounded-md">
      {children}
    </div>
  );
};

const ProjectCardHeaderSection = (children: React.ReactNode) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

const ProjectCardMiniStackCard = (children: React.ReactNode) => {
  return <div className="w-8 h-8 bg-white rounded-md p-1">{children}</div>;
};

const ProjectCardMainSection = (children: React.ReactNode) => {
  return <div className="flex flex-col h-full gap-0">{children}</div>;
};

const ProjectCardMainContent = (children: React.ReactNode) => {
  return (
    <div className="w-full h-full bg-white/20 rounded-md overflow-hidden">
      {children}
    </div>
  );
};

const ProjectCardFooterSection = (children: React.ReactNode) => {
  return <div className="flex flex-row gap-1 flex-wrap">{children}</div>;
};

const ProjectCardTitle = (text: string) => {
  return <span className="bold">{text}</span>;
};

const ProjectCardLink = () => {
  return (
    <a
      href=""
      className="border border-gray-300 rounded-sm w-fit flex flex-row justify-start items-center py-0 pl-1 pr-2"
    >
      <Link height={"1rem"} />
      <span className="text-sm">Link</span>
    </a>
  );
};

const ProjectCardButton = () => {
  return (
    <button className="border cursor-pointer border-gray-300 rounded-sm py-0 px-2 justify-start w-fit">
      <span className="text-sm">+ More about the project</span>
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
  FooterSection: ProjectCardFooterSection,
  Link: ProjectCardLink,
  Button: ProjectCardButton,
};
