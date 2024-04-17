import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import HomePage from "../../pages/home-page/HomePage";
import MoviesPage from "../../pages/movies-page/MoviesPage";
import NotFoundPage from "../../pages/not-found-page/NotFoundPage";
import MovieDetailsPage from "../../pages/movie-details-page/MovieDetailsPage";

import Header from "../header/Header";
import Loader from "../loader/Loader";

const MovieCast = lazy(() => import("../movie-cast/MovieCast"));
const MovieReviews = lazy(() => import("../movie-reviews/MovieReviews"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
