import css from "./Genres.module.css";

const Genres = ({ genres }) => {
  return (
    <>
      {genres.map(genre => (
        <li key={genre.id}>
          <p>{genre.name}</p>
        </li>
      ))}
    </>
  );
};

export default Genres;
