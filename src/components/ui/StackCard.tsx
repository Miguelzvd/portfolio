import { IconType } from 'react-icons';

const StackCardRoot = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 w-30 h-30 md:w-35 md:h-35 xl:w-40 xl:h-40 ${className} bg-dark-gray rounded-md p-4 relative`}
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
      className={`w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 ${className}`}
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
