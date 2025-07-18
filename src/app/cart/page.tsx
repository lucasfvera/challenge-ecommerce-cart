import { PageContent } from "@/app/cart/PageContent";
import { ErrorState } from "@/components/Organisms/ErrorState/ErrorState";

import Image from "next/image";
import Link from "next/link";
import { ErrorBoundary } from "react-error-boundary";

export default async function CartPage() {
  return (
    <div className="w-full pb-12">
      <div className="py-6">
        <Link href={"/"} className="flex w-fit items-center gap-2">
          <Image alt="" src={"/arrow-left-icon.svg"} width={24} height={24} />
          <p className="text-ag">{"Back to Catalog"}</p>
        </Link>
      </div>
      {/* Since we fetch the games with the IDs that are stored in the local
      storage, we need to do it in a client component.
      TODO: We could pass it through query params and fetch those in the server,
      we would need to properly sanitize the params if so
      */}
      <ErrorBoundary
        fallback={
          <ErrorState
            message="There was an error while fetching the cart"
            description="We can't get the cart items right now. Try again later!"
          />
        }
      >
        <PageContent />
      </ErrorBoundary>
    </div>
  );
}
