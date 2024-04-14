import { FC } from "react";
import "./allJobsPage.style.scss";
import { Pagination } from "../../components";

const AllJobsPage: FC = () => {
  return (
    <section className="all-jobs-page content-page">
      <div>Some content</div>
      <Pagination />
    </section>
  );
};

export default AllJobsPage;
