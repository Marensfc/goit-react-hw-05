import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/tmdb-api";

import Error from "../../components/error/Error";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const respData = await fetchTrendingMovies();
        setTrendingMovies(respData.results);
        setError(false);
        console.log(respData.results);
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
      <ul className={css.movieList}>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <a href="#">{movie.original_title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
