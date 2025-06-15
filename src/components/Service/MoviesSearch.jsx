import { Input } from "@/components/ui/input";

export default function MoviesSearch({
  searchQuery,
  setSearchQuery,
  setCategory,
  setUrl
}) {
  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        searchQuery
      )}&include_adult=false&language=en-US&page=1`;
      setCategory("default");
      setUrl(searchUrl);
    }
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
