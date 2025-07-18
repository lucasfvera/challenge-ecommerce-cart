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
    <html>
      <body>
        <ErrorState
          message="The page you are trying to reach is not available."
          description="We are experiencing some difficulties. Please try again later."
        />
      </body>
    </html>
  );
}
