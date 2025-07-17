import { Button } from "@/components/Atoms/Button/Button";
import Link from "next/link";

export const EmptyCartState = () => (
  <div className="flex w-full flex-col items-center justify-center gap-6 py-16">
    <svg
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="mb-2 text-neutral-border"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-1.3L21 13M7 13V6h13"
      />
    </svg>
    <p className="text-lg font-bold text-neutral-dark">Your cart is empty</p>
    <p className="text-neutral-medium">
      Looks like you haven’t added any games yet.
    </p>
    <Link href="/">
      <Button>Back to Catalog</Button>
    </Link>
  </div>
);
