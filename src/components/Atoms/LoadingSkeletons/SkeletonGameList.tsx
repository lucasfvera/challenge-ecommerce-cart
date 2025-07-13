import { LoadingSkeletonCard } from "@/components/Atoms/LoadingSkeletons/LoadingSkeletonCard";

export const SkeletonGameList = () => (
  <div className="py-12 grid grid-cols-[repeat(auto-fit,_minmax(300px,380px))] justify-center place-items-stretch gap-12 w-full">
    <LoadingSkeletonCard />
    <LoadingSkeletonCard />
    <LoadingSkeletonCard />
  </div>
);
