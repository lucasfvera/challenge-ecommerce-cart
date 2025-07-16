import { CartGamesList } from "@/components/Organisms/CartGamesList/CartGamesList";
import Link from "next/link";

export default async function CartPage() {
  return (
    <div className="w-full pb-12">
      <Link href={"/"}>{"<- Back to Catalog"}</Link>
      <p className="text-2xl">Your Cart</p>
      <p className="text-xl">3 items</p>
      <div className="flex">
        <CartGamesList />
        {/* <OrderSummaryTable /> */}
      </div>
    </div>
  );
}
