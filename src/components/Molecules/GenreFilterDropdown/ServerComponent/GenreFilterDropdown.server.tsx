import { Button } from "@/components/Atoms/Button/Button";
import { Select } from "@/components/Molecules/GenreFilterDropdown/ServerComponent/Select";
import { redirect } from "next/navigation";

export const GenreFilterDropdownServer = ({
  selectedGenre = "all",
}: {
  selectedGenre?: string;
}) => {
  const searchAction = async (formData: FormData) => {
    "use server";
    const genre = formData.get("genre-filter") as string | null;
    if (!genre) return;
    redirect(`/?genre=${genre}`);
  };

  return (
    <div className="flex w-full justify-end gap-6">
      <p className="text-xs font-bold">Genre</p>
      <div className="h-[22px] w-px border-r-2 border-neutral-dark" />
      <form action={searchAction}>
        <Select selectedGenre={selectedGenre} />
      </form>
    </div>
  );
};
