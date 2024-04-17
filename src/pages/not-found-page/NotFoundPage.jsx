import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <p className={css.notFound}>Page not found</p>
      <Link to="/" className={css.link}>
        Home page
      </Link>
    </>
  );
};

export default NotFoundPage;
