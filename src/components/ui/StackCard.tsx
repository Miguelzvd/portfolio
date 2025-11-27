import { IconType } from "react-icons";

const StackCardRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-row justify-start items-center gap-2 bg-dark-gray rounded-md p-2 pr-1 relative ${className}`}
    >
      {children}
    </div>
  );
};

const StackCardDescription = ({
  description,
  className,
}: {
  description: string;
  className?: string;
}) => {
  return (
    <span className={`text-md font-bold ${className}`}>{description}</span>
  );
};

const StackCardIcon = ({
  icon: Icon,
  alt,
  className,
}: {
  icon: IconType;
  alt: string;
  className?: string;
}) => {
  return (
    <Icon
      className={`w-6 h-6 md:w-6 md:h-6 xl:w-6 xl:h-6 ${className}`}
      aria-label={alt}
    />
  );
};
const StackCardShadow = ({ classname }: { classname: string }) => {
  return (
    <div
      className={`h-full w-full absolute top-[0.1rem] left-[0.1rem] rounded-md z-[-1] ${classname}`}
    />
  );
};

export const StackCard = {
  Root: StackCardRoot,
  Description: StackCardDescription,
  Icon: StackCardIcon,
  Shadow: StackCardShadow,
};
