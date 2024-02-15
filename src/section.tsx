import React from "react";

import { cn } from "./utils";

export interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col w-full items-center", className)}>
      {children}
    </div>
  );
};

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full max-w-7xl p-4 sm:p-8 overflow-x-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
