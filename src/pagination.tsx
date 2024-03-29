"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { Button } from "./button";

export interface PaginationProps {
  count: number;
  perPage?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  count,
  perPage = 20,
}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  const lastPage = Math.ceil(count / perPage);

  let page = Number(searchParams.get("page") || "1");
  if (page < 1) page = 1;
  if (page > lastPage) page = lastPage;

  const hasPrev = perPage * (page - 1) > 0;
  const hasNext = perPage * (page - 1) + perPage < count;

  const handleChangePage = (type: "prev" | "next") => {
    type === "prev"
      ? params.set("page", `${page - 1}`)
      : params.set("page", `${page + 1}`);
    replace(`${pathname}?${params}`);
  };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mt-4">
        <Button
          variant="outline"
          disabled={!hasPrev}
          onClick={() => handleChangePage("prev")}
        >
          Previous
        </Button>
        <div className="text-base">
          Page {page.toLocaleString()} of{" "}
          {Math.ceil(count / perPage).toLocaleString()}
        </div>
        <Button
          variant="outline"
          disabled={!hasNext}
          onClick={() => handleChangePage("next")}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
