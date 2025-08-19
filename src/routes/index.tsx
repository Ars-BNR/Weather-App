import type { RouteObject } from "react-router-dom";
import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Weather from "../pages/Weather/Weather";
import Profile from "../pages/Profile/Profile";

export const routesList: RouteObject[] = [
  { path: "/", element: <Main /> },
  { path: "/login", element: <Login /> },
  { path: "/weather", element: <Weather /> },
  { path: "/profile", element: <Profile /> },
];
