// import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "../../pages/home-page/HomePage";
import MoviesPage from "../../pages/movies-page/MoviesPage";
import MovieDetailsPage from "../../pages/movie-details-page/MovieDetailsPage";

import Header from "../header/Header";
import MovieCast from "../movie-cast/MovieCast";
import MovieReviews from "../movie-reviews/MovieReviews";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
