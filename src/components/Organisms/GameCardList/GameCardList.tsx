import { GameCard } from "@/components/Molecules/GameCard/GameCard";
import { Game } from "@/utils/endpoint";

interface GameCardListProps {
  games: Game[];
}

export const GameCardList = ({ games }: GameCardListProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,380px))] justify-center place-items-stretch gap-12 w-full">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};
