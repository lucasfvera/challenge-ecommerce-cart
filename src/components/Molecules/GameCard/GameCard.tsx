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
    <div className="flex w-full flex-col gap-5 rounded-2xl border-[0.5px] border-neutral-border p-6">
      <div className="relative min-h-[240px] overflow-hidden rounded-t-2xl">
        {isNew && (
          <p className="absolute left-3 top-3 z-10 rounded bg-white px-3 py-2 text-tag-desktop">
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
          <p className="max-w-[70%] truncate text-lg font-bold text-inherit">
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
