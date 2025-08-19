import type { FC } from "react";
import Header from "../components/shared/ui/Header/HeaderPage";
import cl from "./Layout.module.css";
import { Outlet } from "react-router-dom";
const Layout: FC = () => {
  return (
    <div className={cl.wrapper}>
      <Header />
      <div className={cl.main}>
        <div className={cl.main__container}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
