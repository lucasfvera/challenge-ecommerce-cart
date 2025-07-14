"use client";

import { GamesResponse } from "@/app/api/games/route";
import { Button } from "@/components/Atoms/Button/Button";
import { SkeletonGameList } from "@/components/Atoms/LoadingSkeletons/SkeletonGameList";
import { GameCard } from "@/components/Molecules/GameCard/GameCard";
import { fetchGamesAction } from "@/services/fetchGamesAction";
import { Game } from "@/utils/endpoint";
import { useLocalStorage } from "usehooks-ts";
import { useSearchParams } from "next/navigation";
import { use, useState, useTransition, Suspense } from "react";

interface GameCardListContentProps {
  gamesData: Promise<GamesResponse | undefined>;
}

const GameCardListContent = ({ gamesData }: GameCardListContentProps) => {
  const data = use(gamesData);

  const [storageCartGamesIds, setStorageCartGamesId] = useLocalStorage<
    string[]
  >("cart-games", [], { initializeWithValue: false });
  const addGameToCart = (id: string) => {
    setStorageCartGamesId((prev) => [...prev, id]);
  };
  const removeGameFromCart = (id: string) => {
    const newCart = storageCartGamesIds.filter((gameId) => gameId !== id);
    setStorageCartGamesId(newCart);
  };
  const isGameInCart = (id: string) => storageCartGamesIds.includes(id);

  const searchParams = useSearchParams();
  const [games, setGames] = useState<Game[]>(data?.games || []);
  const [localGamesData, setLocalGamesData] = useState<GamesResponse | null>(
    null
  );
  const [isPending, startTransition] = useTransition();
  const isFinalPage = localGamesData?.currentPage === data?.totalPages;

  const handleLoadMore = () => {
    startTransition(async () => {
      let nextPageNumber;
      if (!localGamesData) {
        if (data) nextPageNumber = data.currentPage + 1;
      } else {
        nextPageNumber = localGamesData?.currentPage + 1;
      }

      // This is to keep the genre when fetching new pages but for this use case
      // we don't actually have multiple pages for the genres
      const currentGenre = searchParams.get("genre") || "";
      const res = await fetchGamesAction(nextPageNumber, currentGenre);
      startTransition(() => {
        if (res) {
          setLocalGamesData(res);
          setGames((prev) => [...prev, ...res.games]);
        }
      });
    });
  };

  return (
    <div className="py-12 grid grid-cols-[repeat(auto-fit,_minmax(300px,380px))] justify-center place-items-stretch gap-12 w-full">
      {games.map((game) => (
        <GameCard
          ctaAction={() => {
            isGameInCart(game.id)
              ? removeGameFromCart(game.id)
              : addGameToCart(game.id);
          }}
          isGameInCart={isGameInCart(game.id)}
          key={game.id}
          game={game}
        />
      ))}
      {!isFinalPage && (
        <Button
          customClasses={"col-span-full"}
          onClick={handleLoadMore}
          disabled={isPending}
        >
          {isPending ? "Loading" : "SEE MORE"}
        </Button>
      )}
    </div>
  );
};

export const GameCardList = ({ gamesData }: GameCardListContentProps) => {
  return (
    <Suspense fallback={<SkeletonGameList />}>
      <GameCardListContent gamesData={gamesData} />
    </Suspense>
  );
};
