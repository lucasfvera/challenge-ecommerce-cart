import Image from "next/image";
import Link from "next/link";

const FOOTER_HEIGHT = 172;

export const Footer = () => {
  return (
    <footer
      className={`flex items-center justify-center bg-[#404040] px-6 py-16 md:px-32 h-[${FOOTER_HEIGHT}px]`}
    >
      <Link href={"/"}>
        <Image
          alt="Apply digital footer logo"
          src={"/logo_apply_digital.svg"}
          width={170}
          height={44}
        />
      </Link>
    </footer>
  );
};
