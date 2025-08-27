import { Link } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";
import { IconType } from "react-icons";

interface ProjectCardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ProjectCardRoot = ({
  children,
  className,
  ...props
}: ProjectCardRootProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-4 h-fit w-70 bg-dark-gray p-4 rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface ProjectCardHeaderSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ProjectCardHeaderSection = ({
  children,
  className,
  ...props
}: ProjectCardHeaderSectionProps) => {
  return (
    <div className={twMerge("flex flex-col gap-1", className)} {...props}>
      {children}
    </div>
  );
};

interface ProjectCardMiniStackCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ProjectCardMiniStackCard = ({
  children,
  className,
  ...props
}: ProjectCardMiniStackCardProps) => {
  return (
    <div
      className={twMerge(
        "w-8 h-8 bg-white rounded-md p-[0.4rem] flex flex-col items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface ProjectCardMainSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ProjectCardMainSection = ({
  children,
  className,
  ...props
}: ProjectCardMainSectionProps) => {
  return (
    <div
      className={twMerge("flex flex-col h-full gap-1 flex-wrap", className)}
      {...props}
    >
      {children}
    </div>
  );
};

interface ProjectCardMainContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ProjectCardMainContent = ({
  children,
  className,
  ...props
}: ProjectCardMainContentProps) => {
  return (
    <div
      className={twMerge(
        "w-full h-full bg-white/20 rounded-md overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface ProjectCardStackIconProps {
  icon: IconType;
  alt: string;
  color?: string;
  className?: string;
}

const ProjectCardStackIcon = ({
  icon: Icon,
  alt,
  color,
  className,
}: ProjectCardStackIconProps) => {
  return (
    <ProjectCardMiniStackCard className={className}>
      <Icon
        className={twMerge("w-6 h-6", color)}
        aria-label={alt}
      />
    </ProjectCardMiniStackCard>
  );
};

interface ProjectCardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ProjectCardContent = ({
  children,
  className,
  ...props
}: ProjectCardContentProps) => {
  return (
    <div
      className={twMerge("flex flex-row gap-1 flex-wrap", className)}
      {...props}
    >
      {children}
    </div>
  );
};

interface ProjectCardTitleProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
  className?: string;
}

const ProjectCardTitle = ({
  text,
  className,
  ...props
}: ProjectCardTitleProps) => {
  return (
    <span className={twMerge("bold", className)} {...props}>
      {text}
    </span>
  );
};

interface ProjectCardLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  text: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const ProjectCardLink = ({
  href,
  text,
  className,
  ...rest
}: ProjectCardLinkProps) => {
  return (
    <a
      href={href}
      className={twMerge(
        "border border-gray-300 rounded-sm w-fit flex flex-row justify-start items-center py-0 pl-1 pr-2",
        className
      )}
      {...rest}
    >
      <Link height={"1rem"} />
      <span className="text-sm">{text}</span>
    </a>
  );
};

interface ProjectCardButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  className?: string;
  about?: string;
}

const ProjectCardButton = ({
  text,
  onClick,
  className,
  about,
  ...props
}: ProjectCardButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "border cursor-pointer border-gray-300 rounded-sm py-0 px-2 justify-start w-fit",
        className
      )}
      about={about}
      {...props}
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
  StackIcon: ProjectCardStackIcon,
  Link: ProjectCardLink,
  Button: ProjectCardButton,
};
