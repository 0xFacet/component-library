"use client";

import * as React from "react";
import * as ButtonUi from "./ui/button";
import { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonUi.buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      onClick,
      children,
      isLoading: isLoadingProp,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isLoadingInternal, setLoading] = React.useState(false);
    const isLoading =
      isLoadingProp !== undefined ? isLoadingProp : isLoadingInternal;

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        try {
          setLoading(true);
          await onClick(event);
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }
    };

    const loadingIndicator = (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg
          className={`animate-spin h-4 w-4 ${
            variant === "default" || !variant ? "text-black" : "text-white"
          } ${isLoading ? "opacity-100" : "opacity-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );

    return (
      <ButtonUi.Button
        ref={ref}
        onClick={handleClick}
        disabled={disabled || isLoading}
        variant={variant}
        {...props}
      >
        <span style={{ opacity: isLoading ? 0 : 1 }}>{children}</span>
        {loadingIndicator}
      </ButtonUi.Button>
    );
  }
);
Button.displayName = "Button";
