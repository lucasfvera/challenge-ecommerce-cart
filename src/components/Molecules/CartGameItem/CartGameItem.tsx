"use client";

import { useCartStorage } from "@/hooks/useCartStorage";
import { Game } from "@/utils/endpoint";
import Image from "next/image";

interface GameCardProps {
  game: Game;
}

export const CartGameItem = ({ game }: GameCardProps) => {
  const { removeGameFromCart } = useCartStorage();
  const { genre, price, name, image, description, isNew } = game;

  return (
    <div className="relative flex h-full min-h-[196px] w-full flex-col gap-6 p-5 md:flex-row md:justify-center lg:max-w-[678px] lg:justify-between">
      <div className="relative mr-9 h-[136px] min-w-[259px] md:mr-0 md:h-auto md:min-w-[256px]">
        {isNew && (
          <p className="absolute left-3 top-3 z-10 rounded bg-white px-3 py-2 text-tag-desktop">
            New
          </p>
        )}
        <Image
          alt="Game photo"
          src={image}
          fill
          sizes="(width > 640px) 256px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5">
        <div className="flex flex-col gap-3 text-neutral-dark">
          <p className="text-ag font-bold text-neutral-medium">{genre}</p>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-inherit">{name}</p>
            <p className="text-ag text-inherit">{description}</p>
          </div>
        </div>
        <p className="self-end text-xs font-bold text-inherit">$ {price}</p>
      </div>

      <button
        onClick={() => removeGameFromCart(game.id)}
        aria-label="remove item from cart"
        className="absolute right-0 self-start md:relative"
      >
        <Image alt="" src={"/cross-icon.svg"} width={24} height={24} />
      </button>
    </div>
  );
};
