"use client";

import { GamesResponse } from "@/app/api/games/route";
import { Button } from "@/components/Atoms/Button/Button";
import { GameCard } from "@/components/Molecules/GameCard/GameCard";
import { fetchGamesAction } from "@/services/fetchGamesAction";
import { Game } from "@/utils/endpoint";
import { useState, useTransition } from "react";

interface GameCardListProps {
  gamesData: GamesResponse;
}

export const GameCardList = ({ gamesData }: GameCardListProps) => {
  const [games, setGames] = useState<Game[]>(gamesData.games);
  const [localGamesData, setLocalGamesData] = useState<GamesResponse | null>(
    gamesData
  );
  const [isPending, startTransition] = useTransition();
  const isFinalPage =
    localGamesData?.currentPage === localGamesData?.totalPages;

  const loadPageHandler = () => {
    startTransition(async () => {
      const res = await fetchGamesAction(
        localGamesData?.currentPage ? localGamesData.currentPage + 1 : 1
      );
      setLocalGamesData(res);
      setGames((prev) => [...prev, ...res.games]);
    });
  };

  return (
    <div className="py-12 grid grid-cols-[repeat(auto-fit,_minmax(300px,380px))] justify-center place-items-stretch gap-12 w-full">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      {!isFinalPage && (
        <Button
          customClasses={"col-span-full"}
          onClick={loadPageHandler}
          disabled={isPending}
        >
          {isPending ? "Loading" : "SEE MORE"}
        </Button>
      )}
    </div>
  );
};
