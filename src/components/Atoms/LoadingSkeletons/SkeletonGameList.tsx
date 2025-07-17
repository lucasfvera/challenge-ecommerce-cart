import { LoadingSkeletonCard } from "@/components/Atoms/LoadingSkeletons/LoadingSkeletonCard";

export const SkeletonGameList = () => (
  <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(300px,380px))] place-items-stretch justify-center gap-12 py-12">
    <LoadingSkeletonCard />
    <LoadingSkeletonCard />
    <LoadingSkeletonCard />
  </div>
);
