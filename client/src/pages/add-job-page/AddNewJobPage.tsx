import { FC } from "react";
import { PageTitle, JobForm } from "../../components";
import useTranslate from "../../hooks/useTranslate";
import "./addNewJob.style.scss";

const AddNewJobPage: FC = () => {
  const { translate } = useTranslate();
  return (
    <section className="add-new-job-page">
      <PageTitle>Add new job</PageTitle>
    </section>
  );
};

export default AddNewJobPage;
