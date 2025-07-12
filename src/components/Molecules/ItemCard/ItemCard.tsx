import { Button } from "@/components/Atoms/Button/Button";
import Image from "next/image";

interface ItemCardProps {}

export const ItemCard = ({}: ItemCardProps) => {
  return (
    <div className="p-6 rounded-2xl border-[0.5px] border-[#8F8F8F] max-w-[380px] flex flex-col gap-5">
      <div className="relative min-h-[240px] rounded-t-2xl overflow-hidden">
        <p className="absolute top-3 left-3 rounded px-3 py-2 bg-white z-10 text-tag-desktop">
          New
        </p>
        <Image
          alt=""
          src={"/game-images/hollowknight.jpeg"}
          fill
          sizes="(width > 640px) 332px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-ag font-bold text-[#737373]">GENRE</p>
        <div className="flex w-full justify-between text-[#3B3B3B]">
          <p className="text-lg font-bold text-inherit">Product name</p>
          <p className="text-xs font-bold text-inherit">$ 119</p>
        </div>
      </div>
      <Button variant="secondary">ADD TO CART</Button>
    </div>
  );
};
