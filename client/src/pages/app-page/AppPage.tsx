import { FC } from "react";
import { SideBar } from "../../components";
import { Outlet } from "react-router-dom";
import "./app-page.style.scss";

const AppPage: FC = () => {
  return (
    <section className="app-page">
      <div>
        <SideBar />
      </div>
      <Outlet />
    </section>
  );
};

export default AppPage;
