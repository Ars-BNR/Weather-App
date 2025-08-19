import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routesList } from "./routes";
import Main from "./pages/Main/Main";
import Layout from "./pages/Layout";
import Login from "./pages/Login/Login";

function App() {
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

export default App;
