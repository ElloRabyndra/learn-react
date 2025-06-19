import { Input } from "@/components/ui/input";

export default function MoviesSearch({
  searchQuery,
  setSearchQuery,
  onSearchChange,
}) {
  function handleSearchSubmit(e) {
    e.preventDefault();
    onSearchChange(searchQuery);
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <Input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </form>
    </div>
  );
}
