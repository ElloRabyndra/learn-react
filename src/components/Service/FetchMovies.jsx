export const FetchMovies = async (url, options, setLoading, setMovies) => {
  console.log(url);
  setLoading(true);

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.results || []);
  } catch (error) {
    console.error("Error fetching movies:", error);
  } finally {
    setLoading(false);
  }
};

export const defaultUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

export const topRatedUrl =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
