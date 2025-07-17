export const SkeletonCart = () => (
  <div
    className="flex h-[196px] w-full max-w-[678px] justify-between gap-6 p-5"
    data-testid="skeleton-cart"
  >
    {/* Image skeleton */}
    <div className="relative h-[160px] min-w-[259px] md:min-w-[256px]">
      <div className="h-full w-full animate-pulse rounded-xl bg-gray-300" />
    </div>

    {/* Content skeleton */}
    <div className="flex flex-1 flex-col justify-between gap-5">
      <div className="flex flex-col gap-3">
        <div className="h-4 w-20 animate-pulse rounded bg-gray-300" />
        <div className="flex flex-col gap-2">
          <div className="h-4 w-32 animate-pulse rounded bg-gray-300" />
          <div className="h-3 w-40 animate-pulse rounded bg-gray-300" />
        </div>
      </div>
      <div className="h-4 w-12 animate-pulse self-end rounded bg-gray-300" />
    </div>

    {/* Remove button skeleton */}
    <div className="self-start">
      <div className="h-6 w-6 animate-pulse rounded-full bg-gray-300" />
    </div>
  </div>
);
