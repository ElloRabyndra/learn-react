import { defaultUrl, topRatedUrl } from "./FetchMovies";

export default function MoviesNav({ category, onChangeCategory }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Movies</h1>
      <div className="flex gap-4 mt-2 text-lg font-semibold">
        <button
          className={`cursor-pointer ${
            category === "default"
              ? "text-primary after:content-[''] after:block after:w-full  after:h-[2px] after:bg-primary"
              : ""
          }`}
          onClick={() => onChangeCategory("default", defaultUrl)}
        >
          Default
        </button>
        <button
          className={`cursor-pointer ${
            category === "top_rated"
              ? "text-primary after:content-[''] after:block after:w-full  after:h-[2px] after:bg-primary"
              : ""
          }`}
          onClick={() => onChangeCategory("top_rated", topRatedUrl)}
        >
          Top Rated
        </button>
      </div>
    </div>
  );
}
