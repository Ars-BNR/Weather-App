import { useContext } from "react";
import { Context } from "../../../../main";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

// eslint-disable-next-line react-refresh/only-export-components
const Header = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const Auth = localStorage.getItem("isAuth");
  const handleLogout = async () => {
    try {
      await store.logout(navigate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.Header}>
          <Link to="/main" className={classes.Header__title}>
            Главная
          </Link>
          <Link to="/weather" className={classes.Header__title}>
            Погода
          </Link>
          <Link to="/profile" className={classes.Header__title}>
            Профиль
          </Link>
          {Auth && (
            <Link
              onClick={handleLogout}
              to=""
              className={classes.Header__title}
            >
              Выйти
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Header);
