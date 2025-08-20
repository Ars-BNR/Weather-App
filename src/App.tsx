/* eslint-disable react-refresh/only-export-components */
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { routesList } from "./routes";
import Layout from "./pages/Layout";
import Login from "./pages/Login/Login";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import Loader from "./components/shared/ui/Loader/Loader";

function App() {
  const { store } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      store.checkAuth(navigate);
    }
  }, []);
  if (store.isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          {routesList.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default observer(App);
