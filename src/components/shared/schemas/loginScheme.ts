import * as yup from "yup";

export const validateScheme = yup.object().shape({
  password: yup.string().required("Пароль обязателен для заполнения"),
  login: yup.string().required("Логин обязателен для заполнения"),
});
