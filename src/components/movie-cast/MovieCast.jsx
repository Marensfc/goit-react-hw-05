import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../api/tmdb-api";
import { useParams } from "react-router-dom";

import Error from "../error/Error";
import Loader from "../loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoader(true);
        const respData = await fetchMovieCast(movieId);
        setCast(respData.cast);
        setError(false);
      } catch (error) {
        setError(true);
        setCast([]);
      } finally {
        setLoader(false);
      }
    };

    load();
  }, [movieId]);

  return (
    <>
      {error && <Error />}
      {loader && <Loader />}
      <ul className={css.list}>
        {cast.map(actor => (
          <li key={actor.id} className={css.liItem}>
            <div className={css.thumb}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
              />
            </div>
            <div>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
