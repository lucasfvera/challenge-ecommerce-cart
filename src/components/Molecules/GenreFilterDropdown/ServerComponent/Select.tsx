"use client";

import { availableFilters } from "@/utils/endpoint";

export const Select = ({
  selectedGenre = "all",
}: {
  selectedGenre?: string;
}) => {
  return (
    <select
      onChange={(e) => e.currentTarget.form?.requestSubmit()}
      className="flex-1 text-xs xs:flex-none xs:self-start"
      defaultValue={selectedGenre ? selectedGenre : "all"}
      name="genre-filter"
    >
      <option value="all">All</option>
      {availableFilters.map((filter, i) => (
        <option key={i} value={filter}>
          {filter}
        </option>
      ))}
    </select>
  );
};
