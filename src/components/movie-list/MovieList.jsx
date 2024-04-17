import css from "./MovieList.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  if (query !== null) {
    const backUrl = searchParams.get("query").split(" ").join("+");
    location.search = `?query=${backUrl}`;
    location.state = location.pathname;
  } else {
    location.state = location.pathname;
  }

  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
