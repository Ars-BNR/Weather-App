import axios from "axios";

export const API_URL = `https://api.openweathermap.org/data/3.0/onecall?lat=`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);

    return Promise.reject(error);
  }
);

export default $api;
