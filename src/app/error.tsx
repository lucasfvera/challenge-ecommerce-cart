"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/Organisms/ErrorState/ErrorState";

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
    <ErrorState
      /* TODO: Implement a handler for logging a report to our systems */
      onRetry={() => console.log("Retry")}
      message="Something went wrong!"
      description="An unexpected error occurred. Please tell us what happened"
      ctaLabel="Fill error log"
    />
  );
}
