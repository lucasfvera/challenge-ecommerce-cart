import { Button } from "@/components/Atoms/Button/Button";
import Image from "next/image";

interface ErrorStateProps {
  onRetry?: () => void;
  message?: string;
  description?: string;
  ctaLabel?: string;
}

export const ErrorState = ({
  onRetry,
  message = "Something went wrong!",
  description = "We couldn't load the data. Please try again.",
  ctaLabel = "Try again",
}: ErrorStateProps) => (
  <div className="flex w-full flex-col items-center justify-center gap-6 py-16">
    <Image
      src="/cross-icon.svg"
      alt="Error icon"
      width={64}
      height={64}
      className="mb-2 text-neutral-border"
    />
    <p className="text-lg font-bold text-neutral-dark">{message}</p>
    <p className="text-neutral-medium">{description}</p>
    {onRetry && <Button onClick={onRetry}>{ctaLabel}</Button>}
  </div>
);
