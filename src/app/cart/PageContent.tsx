"use client";

import { CartGamesList } from "@/components/Organisms/CartGamesList/CartGamesList";
import { OrderSummaryTable } from "@/components/Organisms/OrderSummaryTable/OrderSummaryTable";
import { useCartStorage } from "@/hooks/useCartStorage";
import { fetchGamesByIdAction } from "@/services/fetchGamesAction";
import { Game } from "@/utils/endpoint";
import { useEffect, useState, useTransition } from "react";

export const PageContent = () => {
  const { storageCartGamesIds } = useCartStorage();
  const [, startTransition] = useTransition();
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

  return (
    <>
      <div className="py-12">
        <p className="text-2xl">Your Cart</p>
        <p className="text-xl">{games?.length} items</p>
      </div>
      <div className="flex justify-between">
        <CartGamesList games={games} />
        <OrderSummaryTable games={games} />
      </div>
    </>
  );
};
