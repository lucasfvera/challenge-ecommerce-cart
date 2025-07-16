import { CartGamesList } from "@/components/Organisms/CartGamesList/CartGamesList";
import Image from "next/image";
import Link from "next/link";

export default async function CartPage() {
  return (
    <div className="w-full pb-12">
      <div className="py-6">
        <Link href={"/"} className="flex w-fit gap-2">
          <Image alt="" src={"/arrow-left-icon.svg"} width={24} height={24} />
          {"Back to Catalog"}
        </Link>
      </div>
      <div className="py-12">
        <p className="text-2xl">Your Cart</p>
        <p className="text-xl">3 items</p>
      </div>
      <div className="flex">
        <CartGamesList />
        {/* <OrderSummaryTable /> */}
      </div>
    </div>
  );
}
