import { FC } from "react";
import { SideBar, AppContent } from "../../components";
import AllJobsPage from "../all-jobs-page/AllJobsPage";
import { Outlet } from "react-router-dom";
import "./app-page.style.scss";

const AppPage: FC = () => {
  return (
    <section className="app-page">
      <SideBar />
      <Outlet />
    </section>
  );
};

export default AppPage;
