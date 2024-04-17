import css from "./MovieDetailsPage.module.css";
import { useEffect, useState, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieById } from "../../api/tmdb-api";
import { FaArrowLeftLong } from "react-icons/fa6";

import Genres from "../../components/genres/Genres";
import Error from "../../components/error/Error";
import Loader from "../../components/loader/Loader";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkRef = location.state ?? "/movies";

  console.log(location);

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        const respData = await fetchMovieById(movieId);
        setMovie(respData);
        setError(false);
      } catch (error) {
        setError(true);
        setMovie({});
      }
    };

    load();
  }, []);

  return (
    <>
      <Link to={backLinkRef} className={css.backLink}>
        <FaArrowLeftLong /> Go back
      </Link>
      <div className={css.detailsPageContainer}>
        {error && <Error />}
        <div className={css.thumb}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt=""
          />
        </div>
        <div>
          <h2 className={css.title}>{movie.original_title}</h2>
          {movie.vote_average !== undefined && (
            <p className={css.text}>
              User score: {movie.vote_average.toFixed(1) * 10}%
            </p>
          )}
          <h3 className={css.title}>Overview</h3>
          <p className={css.text}>{movie.overview}</p>
          <h4 className={css.title}>Genres</h4>
          <ul className={css.genresList}>
            {movie.genres !== undefined && <Genres genres={movie.genres} />}
          </ul>
        </div>
      </div>
      <div className={css.additionalContainer}>
        <p>Additional information</p>
        <ul className={css.movieList}>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
