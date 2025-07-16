import React from "react";

export const SkeletonCart = () => (
  <div className="p-5 w-full max-w-[678px] justify-between h-[196px] flex gap-6">
    {/* Image skeleton */}
    <div className="relative min-w-[259px] md:min-w-[256px] h-[160px]">
      <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl" />
    </div>

    {/* Content skeleton */}
    <div className="flex flex-1 flex-col gap-5 justify-between">
      <div className="flex flex-col gap-3">
        <div className="h-4 w-20 bg-gray-300 animate-pulse rounded" />
        <div className="flex flex-col gap-2">
          <div className="h-4 w-32 bg-gray-300 animate-pulse rounded" />
          <div className="h-3 w-40 bg-gray-300 animate-pulse rounded" />
        </div>
      </div>
      <div className="h-4 w-12 bg-gray-300 animate-pulse rounded self-end" />
    </div>

    {/* Remove button skeleton */}
    <div className="self-start">
      <div className="h-6 w-6 bg-gray-300 animate-pulse rounded-full" />
    </div>
  </div>
);
