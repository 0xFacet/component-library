import React from "react";

import { cn } from "./lib/utils";

export interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};
