"use server";

import { GamesResponse } from "@/app/api/games/route";
import { BASE_API_URL } from "@/utils/envVars";

/**
 * Fetches games from the API with optional pagination and genre filtering.
 * @param {number} page - The page number to fetch (default: 1).
 * @param {string} genre - The genre to filter by (default: '').
 * @returns {Promise<GamesResponse | undefined>} The games response data or undefined on error.
 */
export const fetchGamesAction = async (page = 1, genre = "") => {
  try {
    const response = await fetch(
      `${BASE_API_URL}games?page=${page}&genre=${genre}`
    );
    const data: GamesResponse = await response.json();
    return data;
  } catch (e) {
    const errorMsg = "Something failed while fetching the games";
    // We should log this to another service or a error tracking system
    console.error(errorMsg, e);
    throw new Error(errorMsg);
  }
};

/**
 * Fetches games by their IDs from the API.
 * @param {string[]} ids - Array of game IDs to fetch.
 * @returns {Promise<Pick<GamesResponse, "games"> | { games: [] } | undefined>} The games data or empty array/undefined on error.
 */
export const fetchGamesByIdAction = async (ids = [] as string[]) => {
  if (ids.length === 0) return { games: [] };
  const paramsIds = ids.join(",");

  try {
    const response = await fetch(`${BASE_API_URL}games?ids=${paramsIds}`);
    const data: Pick<GamesResponse, "games"> = await response.json();
    return data;
  } catch (e) {
    const errorMsg = "Something failed while fetching the games by id";
    // We should log this to another service or a error tracking system
    console.error(errorMsg, e);
    throw new Error(errorMsg);
  }
};
