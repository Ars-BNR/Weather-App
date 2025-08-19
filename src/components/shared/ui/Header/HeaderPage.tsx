import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.voltechHeader}>
          <Link to="/" className={classes.voltechHeader__title}>
            Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
