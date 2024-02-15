"use client";

import React, { useState, useEffect, useRef } from "react";

import { Button } from "./button";
import { cn } from "./lib/utils";

export interface SegmentedControlProps {
  options: string[];
  onChange: (value: string) => void;
  value: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  onChange,
  value,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderStyle, setSliderStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (containerRef.current) {
      const buttons = containerRef.current.querySelectorAll("button");
      const activeButton = Array.from(buttons).find(
        (button) => button.textContent === value
      );

      if (activeButton) {
        const { offsetWidth, offsetLeft } = activeButton;
        setSliderStyle({
          width: `${offsetWidth}px`,
          transform: `translateX(${offsetLeft - 4}px)`,
          transition: "transform 300ms ease-in-out",
        });
      }
    }
  }, [value, options.length]);

  return (
    <div
      className="w-full flex border-line border rounded-lg gap-1 p-1 relative"
      ref={containerRef}
    >
      <div
        className="absolute bg-primary rounded-md transition-transform duration-300 ease-in-out"
        style={{
          height: "calc(100% - 0.5rem)",
          ...sliderStyle,
        }}
      />
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={() => onChange(option)}
          className={cn(
            "flex-1 py-2 px-4 text-md font-bold transition-colors duration-300 relative z-10",
            option === value
              ? "text-primary-foreground hover:text-primary-foreground hover:bg-primary/0"
              : "text-white"
          )}
          variant="ghost"
          size="lg"
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
