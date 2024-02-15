import React, { useRef, useEffect } from "react";

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
