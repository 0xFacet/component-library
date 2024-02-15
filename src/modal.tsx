import React from "react";

import { Button } from "./ui/button";
import {
  DialogHeader,
  DialogDescription,
  DialogContent,
  Dialog,
} from "./ui/dialog";
import { cn } from "./utils";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: React.ReactNode;
  children: React.ReactNode;
  confirmText?: string;
  onConfirm?: () => void;
  onCancel: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onOpenChange,
  title,
  children,
  confirmText,
  onConfirm,
  onCancel,
  loading,
  disabled,
  className,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "p-4 w-11/12 max-w-xl mx-auto bg-white dark:bg-black rounded-lg shadow-lg",
          className
        )}
        style={{
          background:
            "radial-gradient(100% 100% at 100% 100%, #1a1d0e 0%, #000 100%)",
        }}
      >
        <DialogHeader className="text-xl font-semibold">{title}</DialogHeader>
        <DialogDescription className="text-zinc-500 dark:text-zinc-400 overflow-auto">
          {children}
        </DialogDescription>
        <div className="flex justify-end mt-4 gap-2">
          <Button onClick={onCancel} variant="ghost">
            Close
          </Button>
          {!!onConfirm && (
            <Button
              variant="default"
              onClick={onConfirm}
              isLoading={loading}
              disabled={disabled}
            >
              {confirmText ?? "Confirm"}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
