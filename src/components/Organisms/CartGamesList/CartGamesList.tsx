"use client";

import { SkeletonCartList } from "@/components/Atoms/LoadingSkeletons/SkeletonCartList";
import { CartGameItem } from "@/components/Molecules/CartGameItem/CartGameItem";
import { Game } from "@/utils/endpoint";

export const CartGamesList = ({ games }: { games: Game[] | null }) => {
  if (!games) return <SkeletonCartList />;
  if (games.length === 0) return <div>Cart empty</div>;

  return (
    <div className="flex flex-col">
      {games.map((game) => (
        <>
          <CartGameItem key={game.id} game={game} />
          <div className="border-b-[0.5px] border-[#8f8f8f] last:hidden"></div>
        </>
      ))}
    </div>
  );
};
