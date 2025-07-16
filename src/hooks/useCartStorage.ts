"use client";

import { useLocalStorage } from "usehooks-ts";

export const useCartStorage = () => {
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

  return {
    addGameToCart,
    removeGameFromCart,
    isGameInCart,
    storageCartGamesIds,
  };
};
