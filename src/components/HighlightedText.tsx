interface HighlightedTextProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

const HighlightedText = ({
  children,
  variant = "primary",
  className = "",
}: HighlightedTextProps) => {
  const baseClasses = "font-semibold rounded";

  const variantClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-yellow",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default HighlightedText;
