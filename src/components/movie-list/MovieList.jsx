import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <a href="#">{movie.original_title}</a>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
