"use client";

import { SkeletonCart } from "@/components/Atoms/LoadingSkeletons/SkeletonCart";
import { SkeletonCartList } from "@/components/Atoms/LoadingSkeletons/SkeletonCartList";
import { CartGameItem } from "@/components/Molecules/CartGameItem/CartGameItem";
import { useCartStorage } from "@/hooks/useCartStorage";
import { fetchGamesByIdAction } from "@/services/fetchGamesAction";
import { Game } from "@/utils/endpoint";
import { Suspense, use, useEffect, useState, useTransition } from "react";

export const CartGamesList = () => {
  const { storageCartGamesIds } = useCartStorage();
  const [isPending, startTransition] = useTransition();
  const [games, setGames] = useState<Game[] | null>(null);

  useEffect(() => {
    startTransition(async () => {
      const gamesData = await fetchGamesByIdAction(storageCartGamesIds);
      if (!gamesData) return;
      startTransition(() => {
        setGames(gamesData.games);
      });
    });
  }, [storageCartGamesIds]);

  //   const games = use(fetchGamesByIdAction(storageCartGamesIds));

  if (!games) return <SkeletonCartList />;
  if (games.length === 0) return <div>Cart empty</div>;

  return (
    <div className="flex flex-col">
      {games.map((game) => (
        <>
          <CartGameItem key={game.id} game={game} />
          <div className="border-b-[0.5px] border-[#8f8f8f] last:hidden"></div>
        </>
      ))}
    </div>
  );
};
