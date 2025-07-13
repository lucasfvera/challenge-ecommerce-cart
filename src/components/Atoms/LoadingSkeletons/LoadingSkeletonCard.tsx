export const LoadingSkeletonCard = () => {
  return (
    <div className="p-6 rounded-2xl border-[0.5px] border-[#8F8F8F] w-full flex flex-col gap-5">
      {/* Image skeleton */}
      <div className="relative min-h-[240px] rounded-t-2xl overflow-hidden">
        <div className="w-full h-full bg-gray-300 animate-pulse rounded-t-2xl"></div>
      </div>

      {/* Content skeleton */}
      <div className="flex flex-col gap-3">
        {/* Genre skeleton */}
        <div className="h-4 bg-gray-300 animate-pulse rounded w-20"></div>

        {/* Title and price skeleton */}
        <div className="flex w-full justify-between">
          <div className="h-6 bg-gray-300 animate-pulse rounded w-32"></div>
          <div className="h-4 bg-gray-300 animate-pulse rounded w-12"></div>
        </div>
      </div>

      {/* Button skeleton */}
      <div className="h-12 bg-gray-300 animate-pulse rounded-lg"></div>
    </div>
  );
};
