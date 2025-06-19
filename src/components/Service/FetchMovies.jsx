export const FetchMovies = async (url, setLoading, setMovies) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmE0YmFjMTk0MmIxYmYyNDM0MTYyM2I2MjJmYWYyOCIsIm5iZiI6MTc0OTk2NTM2OC45Njg5OTk5LCJzdWIiOiI2ODRlNWEzODVjYjI3ZmI4MjIzNDQ3ZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FAcU0RrbctMzBWZs-E00NEAT8sEPjxCkN9ZBvHcgHoM",
    },
  };

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
