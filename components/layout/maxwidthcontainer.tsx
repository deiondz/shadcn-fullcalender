import { ReactNode } from "react";
import clsx from "clsx"; // clsx is useful for conditionally merging class names

interface MaxWidthContainerProps {
  children: ReactNode;
  className?: string; // Optional className prop for customization
}

const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
