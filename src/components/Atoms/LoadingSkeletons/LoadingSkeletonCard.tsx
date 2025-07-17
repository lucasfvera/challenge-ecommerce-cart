export const LoadingSkeletonCard = () => {
  return (
    <div
      className="flex w-full flex-col gap-5 rounded-2xl border-[0.5px] border-[#8F8F8F] p-6"
      data-testid="loading-skeleton-card"
    >
      {/* Image skeleton */}
      <div className="relative min-h-[240px] overflow-hidden rounded-t-2xl">
        <div className="h-full w-full animate-pulse rounded-t-2xl bg-gray-300"></div>
      </div>

      {/* Content skeleton */}
      <div className="flex flex-col gap-3">
        {/* Genre skeleton */}
        <div className="h-4 w-20 animate-pulse rounded bg-gray-300"></div>

        {/* Title and price skeleton */}
        <div className="flex w-full justify-between">
          <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
          <div className="h-4 w-12 animate-pulse rounded bg-gray-300"></div>
        </div>
      </div>

      {/* Button skeleton */}
      <div className="h-12 animate-pulse rounded-lg bg-gray-300"></div>
    </div>
  );
};
