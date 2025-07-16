import { GenreFilterDropdown } from "@/components/Molecules/GenreFilterDropdown/GenreFilterDropdown";
import { GameCardList } from "@/components/Organisms/GameCardList/GameCardList";
import { fetchGamesAction } from "@/services/fetchGamesAction";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const genre = params["genre"] as string | undefined;
  // We need to keep the genre all param to trigger the dynamic behavior
  // but the api doesn't recognizes it, so we pass an empty string
  const gamesData = fetchGamesAction(1, genre !== "all" ? genre : "");

  return (
    <div className="relative w-full pb-12">
      <div className="relative py-12">
        <p className="text-2xl font-bold mb-9 md:mb-12">Top Sellers</p>
        <GenreFilterDropdown />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full border-b border-b-[#EFEDF3]"
          id="divider"
        />
      </div>
      <GameCardList key={genre} gamesData={gamesData} />
    </div>
  );
}
