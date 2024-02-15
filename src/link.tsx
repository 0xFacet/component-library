"use client";

import React, { HTMLAttributeAnchorTarget, MouseEventHandler } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "./utils";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  parent?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  target,
  isActive,
  onClick,
  parent,
}) => {
  const pathname = usePathname();
  if (isActive === undefined) {
    isActive = parent ? pathname.startsWith(href) : pathname === href;
  }
  return (
    <Link
      href={href}
      onClick={onClick}
      passHref
      className={cn([
        isActive ? "border-b-2 text-white" : "text-accent",
        "h-16 no-underline flex items-center px-2 text-sm border-primary",
        className,
      ])}
      target={target}
    >
      {children}
    </Link>
  );
};
