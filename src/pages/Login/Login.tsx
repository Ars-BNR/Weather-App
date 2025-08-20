/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC, type FormEvent, useCallback, useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import TextField from "../../components/shared/ui/TextField/TextField";
import { Context } from "../../main";
import { useValidateTextField } from "../../components/shared/hooks/useValidateTextField";

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    login: "",
    password: "",
  });
  const { store } = useContext(Context);
  const { errors } = useValidateTextField(data);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await store.login(data.login, data.password, navigate);
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );
  return (
    <div className={classes.loginPage}>
      <form onSubmit={handleSubmit} className={classes.loginBlock}>
        <p className={classes.loginBlock__title}>Вход</p>
        <TextField
          type="text"
          name="login"
          value={data.login}
          onChange={handleChange}
          placeholder="Логин"
          error={errors.login}
        />
        <TextField
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Пароль"
          error={errors.password}
        />
        <button type="submit" className={classes.loginBlock__btnBlack}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default observer(LoginPage);
