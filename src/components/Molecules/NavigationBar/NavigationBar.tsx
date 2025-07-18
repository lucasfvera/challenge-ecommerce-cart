import { LogoTypography } from "@/components/Atoms/Typography/LogoTypography";
import Image from "next/image";
import Link from "next/link";

const NAVBAR_HEIGHT = 64;

export const NavigationBar = () => {
  return (
    <nav
      className={`flex bg-[#EEEEEE] h-[${NAVBAR_HEIGHT}px] justify-between px-6 py-5 md:px-12 xl:px-24 2xl:px-32`}
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
