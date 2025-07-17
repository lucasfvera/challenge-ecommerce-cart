export const SkeletonOrderSummaryTable = () => {
  return (
    <div
      className="flex flex-col gap-8 w-full max-w-[500px]"
      data-testid="skeleton-order-summary-table"
    >
      <div className="flex flex-col p-8 rounded-lg border-[#8f8f8f] border-[0.5px] gap-8 w-full">
        <div>
          <div className="h-7 w-40 bg-gray-300 animate-pulse rounded mb-2" />
          <div className="h-6 w-24 bg-gray-300 animate-pulse rounded" />
        </div>
        <div className="flex flex-col py-5 gap-6">
          <div className="flex flex-col gap-3">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <div className="h-6 w-32 bg-gray-300 animate-pulse rounded max-w-[60%]" />
                <div className="h-6 w-12 bg-gray-300 animate-pulse rounded" />
              </div>
            ))}
          </div>
          <div className="border-b border-b-neutral-border" />
          <div className="flex justify-between">
            <div className="h-4 w-20 bg-gray-300 animate-pulse rounded" />
            <div className="h-4 w-12 bg-gray-300 animate-pulse rounded" />
          </div>
        </div>
      </div>
      <div className="h-12 bg-gray-300 animate-pulse rounded-lg w-full" />
    </div>
  );
};
