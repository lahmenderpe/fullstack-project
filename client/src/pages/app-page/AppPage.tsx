import { FC } from "react";
import { SideBar, AppContent } from "../../components";
import "./app-page.style.scss";

const AppPage: FC = () => {
  return (
    <section className="app-page">
      <SideBar />
      <AppContent />
    </section>
  );
};

export default AppPage;
