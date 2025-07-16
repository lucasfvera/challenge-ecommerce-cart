"use client";

import { Game } from "@/utils/endpoint";
import Image from "next/image";

interface GameCardProps {
  game: Game;
}

export const CartGameItem = ({ game }: GameCardProps) => {
  const { genre, price, name, image } = game;

  return (
    <div className="p-5 w-full max-w-[678px] justify-between h-full min-h-[196px] flex gap-6">
      <div className="relative min-w-[259px] md:min-w-[256px] h-auto">
        <Image
          alt=""
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
            {/* <p className="text-ag text-inherit">Description if necessary</p> */}
          </div>
        </div>
        <p className="text-xs font-bold text-inherit self-end">$ {price}</p>
      </div>

      <button aria-label="remove item from cart" className="self-start">
        <Image alt="" src={"/cross-icon.svg"} width={24} height={24} />
      </button>
    </div>
  );
};
