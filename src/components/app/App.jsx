// import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "../../pages/home-page/HomePage";
import MoviesPage from "../../pages/movies-page/MoviesPage";

import Header from "../header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
