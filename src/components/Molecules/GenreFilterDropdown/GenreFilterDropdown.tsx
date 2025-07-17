"use client";

import { availableFilters } from "@/utils/endpoint";
import { useBuildUrlSearchParam } from "@/hooks/useBuildUrlSearchParam";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export const GenreFilterDropdown = () => {
  const { urlBuilder } = useBuildUrlSearchParam();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const selectedGenre = searchParams.get("genre");

  const optionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const newUrl = urlBuilder({
      key: "genre",
      value: value,
    });
    replace(newUrl);
  };

  return (
    <div className="flex gap-6 justify-end w-full">
      <p className="text-xs font-bold">Genre</p>
      <div className="w-px h-[22px] border-r-2 border-neutral-dark" />
      <select
        onChange={optionHandler}
        className="text-xs flex-1 xs:flex-none xs:self-start"
        defaultValue={selectedGenre ? selectedGenre : "all"}
      >
        <option value="all">All</option>
        {availableFilters.map((filter, i) => (
          <option key={i} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};
