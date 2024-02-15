"use client";

import React from "react";
import Blockies from "react-blockies";

export interface BlockieAvatarProps {
  address: string;
  profileImage?: string | null;
  size: number;
}

export const BlockieAvatar: React.FC<BlockieAvatarProps> = ({
  address,
  profileImage,
  size,
}) =>
  profileImage ? (
    <img
      className="rounded-full"
      src={profileImage}
      width={size}
      height={size}
      alt={`${address} avatar`}
      style={{
        imageRendering: "pixelated",
        objectFit: "cover",
      }}
    />
  ) : (
    <Blockies
      className="rounded-full"
      seed={address?.toLowerCase() as string}
      scale={size / 8}
    />
  );
