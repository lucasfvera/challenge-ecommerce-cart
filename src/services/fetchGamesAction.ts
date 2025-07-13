"use server";

import { GamesResponse } from "@/app/api/games/route";

export const fetchGamesAction = async (page = 1, genre = "") => {
  const response = await fetch(
    `http://localhost:3000/api/games?page=${page}&genre=${genre}`
  );
  const data: GamesResponse = await response.json();
  return data;
};
