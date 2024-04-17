import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../api/tmdb-api";

import Error from "../error/Error";
import Loader from "../loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [emptyReviews, setEmptyReviews] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        setLoader(true);
        const respData = await fetchMovieReviews(movieId);
        setReviews(respData.results);
        console.log(respData);

        checkIsTheReviewsEmpty(respData.results);
        setError(false);
      } catch (error) {
        setError(true);
        setReviews([]);
      } finally {
        setLoader(false);
      }
    };

    load();
  }, []);

  const checkIsTheReviewsEmpty = results => {
    if (results.length === 0) {
      setEmptyReviews(true);
    } else {
      setEmptyReviews(false);
    }
  };

  return (
    <>
      {error && <Error />}
      {loader && <Loader />}
      {emptyReviews && <p>We don`t have any reviews for this movie</p>}
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li key={review.id} className={css.reviewItem}>
            <p className={css.reviewAuthor}>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieReviews;
