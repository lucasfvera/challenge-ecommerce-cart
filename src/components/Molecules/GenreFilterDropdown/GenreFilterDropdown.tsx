"use client";

import { availableFilters } from "@/utils/endpoint";
import { useBuildUrlSearchParam } from "@/utils/useBuildUrlSearchParam";
import { useRouter, useSearchParams } from "next/navigation";

export const GenreFilterDropdown = () => {
  const { urlBuilder } = useBuildUrlSearchParam();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const selectedGenre = searchParams.get("genre");

  return (
    <div className="flex gap-2 justify-end w-full">
      <p className="text-xs font-bold">Genre</p>
      <div className="w-px h-[22px] border-r-2 border-[#3B3B3B]" />
      <select
        onChange={(e) => {
          const value = e.target.value;
          const newUrl = urlBuilder({
            key: "genre",
            value: value,
          });
          replace(newUrl);
        }}
        className="text-xs"
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
