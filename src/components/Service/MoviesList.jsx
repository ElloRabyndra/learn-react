import MovieCard from "./MovieCard";
import Loading from "./Loading";

export default function MoviesList({ movies, loading }) {
  return (
    <div className="mt-5">
      {/* Movie list */}
      {loading ? (
      <Loading/>
      ) : movies.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-8">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} /> 
            </li>
          ))}
        </ul>
      ) : (
        <p className="pl-2">No movies found.</p>
      )}
    </div>
  );
}
