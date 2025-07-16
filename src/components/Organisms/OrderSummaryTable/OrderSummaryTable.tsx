"use client";

import { Button } from "@/components/Atoms/Button/Button";
import { Game } from "@/utils/endpoint";

export const OrderSummaryTable = ({ games }: { games: Game[] | null }) => {
  if (!games) return <div>Loading...</div>;

  const numberOfItems = games.length;
  const totalOrderPrice = games.reduce((acc, game) => (acc += game.price), 0);

  //TODO Add empty state to the cart
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col p-8 rounded-lg border-[#8f8f8f] border-[0.5px] gap-8 w-full">
        <div>
          <p className="text-xl font-bold">Order Summary</p>
          <p className="text-lg">
            {numberOfItems} item{numberOfItems > 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex flex-col py-5 gap-6">
          <div className="flex flex-col gap-3">
            {games.map((game) => (
              <div key={game.id} className="flex justify-between">
                <p className="text-lg truncate max-w-[60%]">{game.name}</p>
                <p className="text-lg">$ {game.price}</p>
              </div>
            ))}
          </div>
          <div className="border-b border-b-[#8f8f8f]"></div>
          <div className="flex justify-between">
            <p className="text-xs font-bold">Order Total</p>
            <p className="text-xs font-bold">$ {totalOrderPrice}</p>
          </div>
        </div>
      </div>
      <Button width="full" variant="primary">
        Checkout
      </Button>
    </div>
  );
};
