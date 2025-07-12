import Image from "next/image";
import Link from "next/link";

const FOOTER_HEIGHT = 172;

export const Footer = () => {
  return (
    <div
      className={`bg-[#404040] flex items-center justify-center py-16 md:px-32 px-6 h-[${FOOTER_HEIGHT}px]`}
    >
      <Link href={"/"}>
        <Image
          alt="Apply digital footer logo"
          src={"/logo_apply_digital.svg"}
          width={170}
          height={44}
        />
      </Link>
    </div>
  );
};
