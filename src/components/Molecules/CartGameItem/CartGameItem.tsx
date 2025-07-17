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
    <div className="p-5 w-full relative lg:max-w-[678px] md:justify-center lg:justify-between h-full min-h-[196px] flex gap-6 flex-col md:flex-row">
      <div className="relative min-w-[259px] md:min-w-[256px] h-[136px] md:h-auto mr-9 md:mr-0">
        {isNew && (
          <p className="absolute top-3 left-3 rounded px-3 py-2 bg-white z-10 text-tag-desktop">
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

      <div className="flex flex-1 flex-col gap-5 justify-between">
        <div className="flex flex-col gap-3 text-[#3B3B3B]">
          <p className="text-ag font-bold text-[#737373]">{genre}</p>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-inherit">{name}</p>
            <p className="text-ag text-inherit">{description}</p>
          </div>
        </div>
        <p className="text-xs font-bold text-inherit self-end">$ {price}</p>
      </div>

      <button
        onClick={() => removeGameFromCart(game.id)}
        aria-label="remove item from cart"
        className="self-start absolute right-0 md:relative"
      >
        <Image alt="" src={"/cross-icon.svg"} width={24} height={24} />
      </button>
    </div>
  );
};
