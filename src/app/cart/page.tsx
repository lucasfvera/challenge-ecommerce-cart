import { PageContent } from "@/app/cart/PageContent";
import Image from "next/image";
import Link from "next/link";

export default async function CartPage() {
  return (
    <div className="w-full pb-12">
      <div className="py-6">
        <Link href={"/"} className="flex w-fit gap-2 items-center">
          <Image alt="" src={"/arrow-left-icon.svg"} width={24} height={24} />
          <p className="text-ag">{"Back to Catalog"}</p>
        </Link>
      </div>
      {/* Since we fetch the games with the IDs that are stored in the local
      storage, we need to do it in a client component.
      TODO: We could pass it through query params and fetch those in the server,
      we would need to properly sanitize the params if so
      */}
      <PageContent />
    </div>
  );
}
