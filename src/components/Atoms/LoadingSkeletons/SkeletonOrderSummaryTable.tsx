export const SkeletonOrderSummaryTable = () => {
  return (
    <div
      className="flex w-full max-w-[500px] flex-col gap-8"
      data-testid="skeleton-order-summary-table"
    >
      <div className="flex w-full flex-col gap-8 rounded-lg border-[0.5px] border-[#8f8f8f] p-8">
        <div>
          <div className="mb-2 h-7 w-40 animate-pulse rounded bg-gray-300" />
          <div className="h-6 w-24 animate-pulse rounded bg-gray-300" />
        </div>
        <div className="flex flex-col gap-6 py-5">
          <div className="flex flex-col gap-3">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <div className="h-6 w-32 max-w-[60%] animate-pulse rounded bg-gray-300" />
                <div className="h-6 w-12 animate-pulse rounded bg-gray-300" />
              </div>
            ))}
          </div>
          <div className="border-b border-b-neutral-border" />
          <div className="flex justify-between">
            <div className="h-4 w-20 animate-pulse rounded bg-gray-300" />
            <div className="h-4 w-12 animate-pulse rounded bg-gray-300" />
          </div>
        </div>
      </div>
      <div className="h-12 w-full animate-pulse rounded-lg bg-gray-300" />
    </div>
  );
};
