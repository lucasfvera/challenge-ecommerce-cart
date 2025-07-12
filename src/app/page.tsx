export default async function Home() {
  return (
    <div className="w-full">
      <p className="text-2xl">Top Sellers</p>
      <div className="flex gap-2 justify-end w-full">
        <p className="text-xs font-bold">Genre</p>
        <div className="w-px h-[22px] border-r-2 border-[#3B3B3B]" />
        <p className="text-xs ">All</p>
      </div>
    </div>
  );
}
