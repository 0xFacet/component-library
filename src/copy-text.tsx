"use client";

import React from "react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoCheckmarkCircleOutline, IoCopyOutline } from "react-icons/io5";

export interface CopyTextProps {
  text: string;
  title?: string;
}

export const CopyText: React.FC<CopyTextProps> = ({ text, title }) => {
  const [addressCopied, setAddressCopied] = useState(false);
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        setAddressCopied(true);
        setTimeout(() => {
          setAddressCopied(false);
        }, 1500);
      }}
    >
      <div className="flex items-center gap-2 cursor-pointer text-secondary hover:text-primary">
        {addressCopied ? <IoCheckmarkCircleOutline /> : <IoCopyOutline />}
        <div>{title ?? text}</div>
      </div>
    </CopyToClipboard>
  );
};
