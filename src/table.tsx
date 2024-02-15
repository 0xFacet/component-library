"use client";

import React from "react";

import { cn } from "./utils";

export interface TableProps {
  headers?: (string | { content: React.ReactNode; align?: "left" | "right" })[];
  rows: React.ReactNode[][];
  onRowClick?: (index: number) => void;
}

export const Table: React.FC<TableProps> = ({ headers, rows, onRowClick }) => {
  const renderHeaders = () => {
    return !!headers?.length ? (
      <thead>
        <tr>
          {headers.map((header, i) => {
            const isString = typeof header === "string";
            const content = isString ? header : header.content;
            let align = i === 0 ? "left" : "right";
            if (typeof headers[i] !== "string") {
              align = (headers[i] as any).align as "left" | "right";
            }

            return (
              <th
                key={i}
                scope="col"
                className={cn(
                  "py-4 whitespace-nowrap text-white opacity-50 text-sm font-normal",
                  align === "right" ? "text-right" : "text-left",
                  i === 0 ? "pl-0" : "pl-6"
                )}
              >
                {content}
              </th>
            );
          })}
        </tr>
      </thead>
    ) : null;
  };

  return (
    <table className="min-w-full divide-y divide-line">
      {renderHeaders()}
      <tbody className="divide-y divide-line">
        {rows.map((row, ri) => (
          <tr
            key={ri}
            className={cn(
              ri > 0 ? "border-t border-line" : "",
              onRowClick
                ? "cursor-pointer text-secondary hover:text-primary"
                : ""
            )}
            onClick={() => onRowClick && onRowClick(ri)}
          >
            {row.map((col, ci) => {
              let align = ci === 0 ? "left" : "right";
              if (headers && headers[ci] && typeof headers[ci] !== "string") {
                align = (headers[ci] as any).align as "left" | "right";
              }
              return (
                <td
                  key={`${ri}-${ci}`}
                  className={cn(
                    "whitespace-nowrap py-4 max-w-xl truncate",
                    align === "left" ? "text-left" : "text-right",
                    ci === 0 ? "pl-0" : "pl-6"
                  )}
                >
                  {align === "left" ? (
                    col
                  ) : (
                    <div className="flex flex-row justify-end">{col}</div>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
