import { GamesResponse } from "@/app/api/games/route";
import { GameCardList } from "@/components/Organisms/GameCardList/GameCardList";

export default async function Home() {
  const gamesResponse = await fetch("http://localhost:3000/api/games");
  const gamesData: GamesResponse = await gamesResponse.json();

  return (
    <div className="w-full pb-12">
      <div className="relative py-12">
        <p className="text-2xl">Top Sellers</p>
        <div className="flex gap-2 justify-end w-full">
          <p className="text-xs font-bold">Genre</p>
          <div className="w-px h-[22px] border-r-2 border-[#3B3B3B]" />
          <p className="text-xs ">All</p>
        </div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen border-b border-b-[#EFEDF3]"
          id="divider"
        ></div>
      </div>
      <GameCardList games={gamesData.games} />
    </div>
  );
}
