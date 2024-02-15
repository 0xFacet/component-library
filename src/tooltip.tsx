import React from "react";
import * as TooltipUi from "./ui/tooltip";

export interface TooltipProps {
  children: React.ReactNode;
  label: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, label }) => (
  <TooltipUi.TooltipProvider>
    <TooltipUi.Tooltip>
      <TooltipUi.TooltipTrigger>{children}</TooltipUi.TooltipTrigger>
      <TooltipUi.TooltipContent className="bg-white text-black p-2 mt-2 rounded-md shadow-lg dark:bg-gray-800 dark:text-white max-w-sm">
        {label}
      </TooltipUi.TooltipContent>
    </TooltipUi.Tooltip>
  </TooltipUi.TooltipProvider>
);
