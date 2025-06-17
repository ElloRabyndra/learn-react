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

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmE0YmFjMTk0MmIxYmYyNDM0MTYyM2I2MjJmYWYyOCIsIm5iZiI6MTc0OTk2NTM2OC45Njg5OTk5LCJzdWIiOiI2ODRlNWEzODVjYjI3ZmI4MjIzNDQ3ZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FAcU0RrbctMzBWZs-E00NEAT8sEPjxCkN9ZBvHcgHoM",
    },
  };

  useEffect(() => {
    FetchMovies(url, options, setLoading, setMovies);
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
          setCategory={setCategory}
          setSearchQuery={setSearchQuery}
          setUrl={setUrl}
        />

        {/* Searchbar Movies */}
        <MoviesSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setCategory={setCategory}
          setUrl={setUrl}
        />

        {/* Movies List */}
        <MoviesList movies={movies} loading={loading} />
      </div>
    </section>
  );
}
