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
      <div className="py-8 md:py-12">
        <p className="text-xl md:text-2xl font-bold mb-3">Your Cart</p>
        <p className="text-xs md:text-xl">{games?.length} items</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-14">
        <CartGamesList games={games} />
        <OrderSummaryTable games={games} />
      </div>
    </>
  );
};
