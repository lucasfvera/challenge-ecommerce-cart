import { usePathname, useSearchParams } from "next/navigation";

export function useBuildUrlSearchParam() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const urlBuilder = ({ key, value }: { key: string; value: string }) => {
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const newUrl = `${pathname}?${params.toString()}`;
    return newUrl;
  };

  return { urlBuilder };
}
