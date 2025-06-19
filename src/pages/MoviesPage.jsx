import { useState, useEffect, useContext } from "react";
import ToggleButton from "../components/theme/ToggleButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { ThemeContext } from "../context/ThemeContext";
import { FetchMovies, defaultUrl } from "../components/Service/FetchMovies";
import MoviesNav from "../components/Service/MoviesNav";
import MoviesSearch from "../components/Service/MoviesSearch";
import MoviesList from "../components/Service/MoviesList";

export default function MoviesPage() {
  const { theme } = useContext(ThemeContext);
  const [url, setUrl] = useState(defaultUrl);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("default"); // 'default' | 'top_rated'
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (newCategory, newUrl) => {
    setSearchQuery("");
    setCategory(newCategory);
    setUrl(newUrl);
  };

  const handleSearchChange = (query) => {
    if (searchQuery.trim()) {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&include_adult=false&language=en-US&page=1`;
      setCategory("default");
      setUrl(searchUrl);
    }
  };

  useEffect(() => {
    FetchMovies(url, setLoading, setMovies);
  }, [url]);

  return (
    <section className={`${theme} flex min-h-screen p-8 font-[Poppins]`}>
      <Button className="absolute top-5 left-6">
        <Link className="flex items-center gap-2 md:text-xl" to="/">
          <i className="bx bx-arrow-back"></i> Back
        </Link>
      </Button>
      <ToggleButton />
      <div className="w-full px-2 mt-12 space-y-4">
        {/* Movies Navigation */}
        <MoviesNav
          category={category}
          onChangeCategory={handleCategoryChange}
        />

        {/* Searchbar Movies */}
        <MoviesSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearchChange={handleSearchChange}
        />

        {/* Movies List */}
        <MoviesList movies={movies} loading={loading} />
      </div>
    </section>
  );
}
