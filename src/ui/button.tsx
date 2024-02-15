"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../utils";

export type OmitUndefined<T> = T extends undefined ? never : T;
export type VariantProps<Component extends (...args: any) => any> = Omit<
  OmitUndefined<Parameters<Component>[0]>,
  "class" | "className"
>;

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm hover:border-primary hover:text-primary",
        secondary: "bg-line text-white shadow-sm hover:bg-line/20",
        ghost: "border-none hover:bg-white/10 hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      onClick,
      children,
      isLoading: isLoadingProp,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
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
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "relative")}
        ref={ref}
        onClick={handleClick}
        disabled={disabled || isLoading}
        {...props}
      >
        <span style={{ opacity: isLoading ? 0 : 1 }}>{children}</span>
        {loadingIndicator}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
