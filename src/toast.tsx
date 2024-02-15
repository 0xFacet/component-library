"use client";

import React, { useEffect, useRef } from "react";
import { BiXCircle, BiCheckCircle } from "react-icons/bi";

export interface PlaceholderToastProps {
  id: number;
  height: number;
  index: number;
  onDistanceChange: (id: number, distance: number) => void;
}

export const PlaceholderToast: React.FC<PlaceholderToastProps> = ({
  id,
  height,
  index,
  onDistanceChange,
}) => {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current) {
      onDistanceChange(id, toastRef.current.offsetTop);
    }
  }, [id, index, onDistanceChange]);

  return <div ref={toastRef} style={{ height: `${height}px` }} />;
};

export interface ToastContainerProps {
  children: React.ReactNode;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ children }) => {
  return (
    <div className="fixed z-[2000] flex flex-col gap-4 bottom-0 right-0 m-6 max-w-sm">
      {children}
    </div>
  );
};

export type ToastProps = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
  distance: number;
  onHeightChange: (id: number, height: number) => void;
};

export const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type,
  distance,
  onHeightChange,
}) => {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current) {
      onHeightChange(id, toastRef.current.offsetHeight);
    }
  }, [id, onHeightChange]);

  return (
    <div
      className="absolute overflow-hidden right-0 transition-all duration-500 ease-in-out"
      style={{ bottom: distance, maxWidth: "calc(100vw - 50px)" }}
    >
      {type === "success" ? (
        <div
          ref={toastRef}
          aria-live="assertive"
          className="flex gap-2 items-center bg-green-500 text-white text-sm font-bold px-4 py-3 rounded shadow-lg"
          role="alert"
        >
          <BiCheckCircle className="text-lg" />
          <span className="whitespace-nowrap truncate">{message}</span>
        </div>
      ) : type === "error" ? (
        <div
          ref={toastRef}
          aria-live="assertive"
          className="flex gap-2 items-center bg-red-500 text-white text-sm font-bold px-4 py-3 rounded shadow-lg mt-4"
          role="alert"
        >
          <BiXCircle className="text-lg" />
          <span className="whitespace-nowrap truncate">{message}</span>
        </div>
      ) : (
        <div
          ref={toastRef}
          aria-live="assertive"
          className="flex gap-2 items-center bg-gray-800 text-white text-sm font-bold px-4 py-3 rounded shadow-lg mt-4"
          role="alert"
        >
          <span className="whitespace-nowrap truncate">{message}</span>
        </div>
      )}
    </div>
  );
};
