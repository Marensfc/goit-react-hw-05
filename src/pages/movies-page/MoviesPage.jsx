import css from "./MoviesPage.module.css";
import { fetchMoviesByQuery } from "../../api/tmdb-api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Error from "../../components/error/Error";
import MovieList from "../../components/movie-list/MovieList";
import Loader from "../../components/loader/Loader";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleSumbit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const value = form.elements.search.value.trim().toLowerCase();

    if (value === "") {
      alert("Please enter text in the text field");
      return;
    }

    setSearchParams({ query: value });

    form.reset();
  };

  useEffect(() => {
    if (!query) return;

    const load = async () => {
      setLoader(true);
      try {
        setMovies([]);
        const respData = await fetchMoviesByQuery(query);
        setMovies(respData.results);

        checkIsTheResultEmpty(respData.results);
        setError(false);
      } catch (error) {
        setMovies([]);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    load();
  }, [query]);

  const checkIsTheResultEmpty = result => {
    if (result.length === 0) {
      alert("Sorry, there are no results for your query");
    }
  };

  return (
    <>
      <form onSubmit={handleSumbit} className={css.form}>
        <input type="text" name="search" placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
      {error && <Error />}
      {loader && <Loader />}
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
