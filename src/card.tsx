import React from "react";

import { cn } from "./lib/utils";

export interface CardProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  childrenClassName?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  childrenClassName,
}) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <div
      className={cn(
        "w-full h-fit border border-line rounded-xl divide-y divide-line overflow-x-hidden",
        className
      )}
    >
      {childrenArray.filter(Boolean).map((child, i) => (
        <div key={i} className="flex flex-1 overflow-x-auto">
          <div className="flex flex-1 flex-row w-full">
            <div
              className={cn(
                "flex flex-col flex-1 divide-y divide-line",
                childrenClassName
              )}
            >
              {child}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
