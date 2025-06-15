export const FetchMovies = (url, options, setLoading, setMovies) => {
  console.log(url);
  setLoading(true);
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
};

export const defaultUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

export const topRatedUrl =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
