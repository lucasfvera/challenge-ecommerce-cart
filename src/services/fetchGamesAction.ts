"use server";

import { GamesResponse } from "@/app/api/games/route";

export const fetchGamesAction = async (page = 1, genre = "") => {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}games?page=${page}&genre=${genre}`
    );
    const data: GamesResponse = await response.json();
    return data;
  } catch (e) {
    console.error("Something failed while fetching the games", e);
  }
};

export const fetchGamesByIdAction = async (ids = [] as string[]) => {
  if (ids.length === 0) return { games: [] };
  const paramsIds = ids.join(",");

  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}games?ids=${paramsIds}`
    );
    const data: Pick<GamesResponse, "games"> = await response.json();
    return data;
  } catch (e) {
    console.error("Something failed while fetching the games", e);
  }
};
