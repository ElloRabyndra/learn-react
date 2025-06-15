import { Card } from "@/components/ui/card";
import EmptyCover from "./EmptyCover";

export default function MovieCard({ movie }) {
  return (
    <div className="relative w-60 md:w-52">
      <Card className="justify-start p-0 overflow-hidden">
        <div className="w-full aspect-[2/3]">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="object-cover w-full h-full"
            />
          ) : (
            <EmptyCover />
          )}
        </div>
      </Card>

      {/* Badge Rating */}
      <div className="absolute z-10 px-3 py-1 mt-2 text-sm font-bold text-white -translate-x-1/2 rounded-full shadow-md -top-4 left-1/2 bg-primary">
        {movie.vote_average?.toFixed(1)}
      </div>

      {/* Title */}
      <h2 className="mt-2 text-base font-semibold text-center">{movie.title}</h2>
    </div>
  );
}
