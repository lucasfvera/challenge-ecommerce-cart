"use client";

import { Button } from "@/components/Atoms/Button/Button";
import { Game } from "@/utils/endpoint";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface GameCardProps {
  game: Game;
  ctaAction?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  isGameInCart: boolean;
}

export const GameCard = ({ game, ctaAction, isGameInCart }: GameCardProps) => {
  const { genre, price, name, isNew, image } = game;

  return (
    <div className="p-6 rounded-2xl border-[0.5px] border-neutral-border w-full flex flex-col gap-5">
      <div className="relative min-h-[240px] rounded-t-2xl overflow-hidden">
        {isNew && (
          <p className="absolute top-3 left-3 rounded px-3 py-2 bg-white z-10 text-tag-desktop">
            New
          </p>
        )}
        <Image
          alt="Game photo"
          src={image}
          fill
          sizes="(width > 640px) 332px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-ag font-bold text-neutral-medium">{genre}</p>
        <div className="flex w-full justify-between text-neutral-dark">
          <p className="text-lg font-bold text-inherit truncate max-w-[70%]">
            {name}
          </p>
          <p className="text-xs font-bold text-inherit">$ {price}</p>
        </div>
      </div>
      <Button
        onClick={ctaAction}
        variant={isGameInCart ? "secondaryDestroy" : "secondary"}
        width="full"
      >
        {isGameInCart ? "REMOVE" : "ADD TO CART"}
      </Button>
    </div>
  );
};
