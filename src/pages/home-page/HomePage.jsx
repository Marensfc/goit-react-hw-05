import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/tmdb-api";

import Error from "../../components/error/Error";
import MovieList from "../../components/movie-list/MovieList";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const respData = await fetchTrendingMovies();
        setTrendingMovies(respData.results);
        setError(false);
      } catch (error) {
        setError(true);
        setTrendingMovies([]);
      }
    };

    load();
  }, []);

  return (
    <main className={css.homeContainer}>
      <h1>Trending today</h1>

      {error && <Error />}
      <MovieList movies={trendingMovies} />
    </main>
  );
};

export default HomePage;
