import ToggleButton from "../components/theme/ToggleButton";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router";

const TestFetch = () => {
  const {theme} = useContext(ThemeContext);
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular"); // 'popular' | 'top_rated'
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmE0YmFjMTk0MmIxYmYyNDM0MTYyM2I2MjJmYWYyOCIsIm5iZiI6MTc0OTk2NTM2OC45Njg5OTk5LCJzdWIiOiI2ODRlNWEzODVjYjI3ZmI4MjIzNDQ3ZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FAcU0RrbctMzBWZs-E00NEAT8sEPjxCkN9ZBvHcgHoM",
    },
  };

  const fetchMovies = (category) => {
    setLoading(true);
    const url =
      category === "popular"
        ? "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
        : "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(`Response for ${category}:`, data);
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const searchMovies = (query) => {
    if (!query.trim()) return;
    setLoading(true);
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1`;

    fetch(searchUrl, options)
      .then((res) => res.json())
      .then((data) => {
        console.log("Search result:", data);
        setMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!searchQuery) {
      fetchMovies(category);
    }
  }, [category]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchMovies(searchQuery);
    }
  };

  return (
    <div className={`${theme} p-4`}>
      <ToggleButton />
      <h1 className="mb-4 text-2xl font-bold">Movie Explorer</h1>

      {/* Buttons */}
      <div className="mb-4 space-x-2">
        <button className="px-4 py-2 text-black bg-red-400 rounded"><Link to="/">Back</Link></button>
        <button
          className={`px-4 py-2 rounded ${
            category === "popular"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => {
            setSearchQuery("");
            setCategory("popular");
          }}
        >
          Popular
        </button>
        <button
          className={`px-4 py-2 rounded ${
            category === "top_rated"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => {
            setSearchQuery("");
            setCategory("top_rated");
          }}
        >
          Top Rated
        </button>
      </div>

      {/* Search bar */}
      <form onSubmit={handleSearchSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </form>

      {/* Movie list */}
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <ul className="space-y-4">
          {movies.map((movie) => (
            <li key={movie.id} className="p-4 border rounded shadow">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p><strong>Overview:</strong> {movie.overview}</p>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="mt-2 rounded"
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default TestFetch;
