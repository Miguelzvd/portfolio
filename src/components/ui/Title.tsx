const TitleRoot = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  isMainTitle?: boolean;
  className?: string;
}) => {
  return (
    <div className={`font-bold ${props.className}`} {...props}>
      {children}
    </div>
  );
};

const TitleContent = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`text-4xl font-bold ${props.className}`} {...props}>
      {children}
    </div>
  );
};

const TitleMain = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-6xl font-bold ${props.className}`} {...props}>
      {children}
    </h1>
  );
};

const TitleSub = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`text-4xl font-bold ${props.className}`} {...props}>
      {children}
    </h2>
  );
};

const TitleUnderlineRow = ({
  color = "primary",
  ...props
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <div
      className={`w-40 border-b-4 border-${color} mt-1 ${props.className}`}
      {...props}
    />
  );
};

const Title = {
  Root: TitleRoot,
  Content: TitleContent,
  UnderlineRow: TitleUnderlineRow,
  Main: TitleMain,
  Sub: TitleSub,
};

export default Title;
