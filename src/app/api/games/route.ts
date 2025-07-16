import { allGames, availableFilters, delay, Game } from "@/utils/endpoint";

const ITEMS_PER_PAGE = 12;

export type GamesResponse = {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);

  // If 'ids' param is present, filter by IDs and return only those games
  const idsParam = searchParams.get("ids");
  if (idsParam) {
    const ids = idsParam.split(",").map((id) => id.trim());
    const games = allGames.filter((game) => ids.includes(game.id));
    return Response.json({ games });
  }

  const genre = searchParams.get("genre");
  let page = parseInt(searchParams.get("page") ?? "1");
  let games = allGames;
  if (genre) {
    games = games.filter(
      (game) => game.genre.toLowerCase() === genre.toLowerCase()
    );
  }
  if (page < 1 || isNaN(page)) page = 1;
  // Mock a delay to simulate a real API
  await delay(2000);
  const fromIndex = (page - 1) * ITEMS_PER_PAGE;
  const toIndex = page * ITEMS_PER_PAGE;
  games = games.slice(fromIndex, toIndex);
  const totalPages = Math.ceil(allGames.length / ITEMS_PER_PAGE);
  const currentPage = page;
  const response: GamesResponse = {
    games,
    availableFilters,
    totalPages,
    currentPage,
  };
  return Response.json(response);
}
