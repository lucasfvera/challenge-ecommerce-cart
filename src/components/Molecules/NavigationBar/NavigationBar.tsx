import { LogoTypography } from "@/components/Atoms/Typography/LogoTypograhpy";
import Image from "next/image";
import Link from "next/link";

const NAVBAR_HEIGHT = 64;

export const NavigationBar = () => {
  return (
    <nav
      className={`bg-[#EEEEEE] flex h-[${NAVBAR_HEIGHT}px] py-5 px-6 md:px-12 xl:px-24 2xl:px-32 justify-between`}
    >
      <Link href={"/"}>
        <LogoTypography>GamerShop</LogoTypography>
      </Link>
      <Link href={"/cart"}>
        <Image alt="Cart icon" src={"/cart-icon.svg"} width={24} height={24} />
      </Link>
    </nav>
  );
};
