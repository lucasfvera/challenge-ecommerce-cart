"use client";

import { useEffect } from "react";
import { Button } from "@/components/Atoms/Button/Button";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex w-full flex-col items-center justify-center gap-6 py-16">
          <Image
            src="/cross-icon.svg"
            alt="Error icon"
            width={64}
            height={64}
            className="mb-2 text-neutral-border"
          />
          <p className="text-lg font-bold text-neutral-dark">
            Something went wrong!
          </p>
          <p className="text-neutral-medium">
            An unexpected error occurred. Please try again.
          </p>
          {/* TODO: Implement a handler for retrying in case of an error */}
          <Button onClick={() => console.log("Retry")}>Try again</Button>
        </div>
      </body>
    </html>
  );
}
