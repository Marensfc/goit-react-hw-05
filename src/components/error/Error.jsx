import css from "./Error.module.css";

const Error = () => {
  return (
    <p className={css.errorMessage}>
      Whoops, something went wrong, please try again!
    </p>
  );
};

export default Error;
