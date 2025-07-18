import { SkeletonGameList } from "@/components/Atoms/LoadingSkeletons/SkeletonGameList";
import { GenreFilterDropdown } from "@/components/Molecules/GenreFilterDropdown/GenreFilterDropdown";
import { ErrorState } from "@/components/Organisms/ErrorState/ErrorState";
import { GameCardList } from "@/components/Organisms/GameCardList/GameCardList";
import { fetchGamesAction } from "@/services/gamesApi";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const genre = searchParams["genre"] as string | undefined;
  // We need to keep the genre all param to trigger the dynamic behavior
  // but the api doesn't recognizes it, so we pass an empty string
  const gamesData = fetchGamesAction(1, genre !== "all" ? genre : "");

  return (
    <div className="relative w-full pb-12">
      <div className="relative py-12">
        <p className="mb-9 text-2xl font-bold md:mb-12">Top Sellers</p>
        <GenreFilterDropdown />
        <div
          className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 border-b border-b-neutral-extra-light"
          id="divider"
        />
      </div>
      <ErrorBoundary
        key={genre}
        fallback={
          <ErrorState
            message="There was an error while fetching the data"
            description="We can't get the game list right now. Try again later!"
          />
        }
      >
        <Suspense fallback={<SkeletonGameList />}>
          <GameCardList gamesData={gamesData} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
