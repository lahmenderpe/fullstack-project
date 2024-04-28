import { FC, useEffect } from "react";
import { PageTitle, JobForm } from "../../components";
import useTranslate from "../../hooks/useTranslate";
import useAppContext from "../../hooks/useAppContext";
import { AddJobType } from "../../@types/context/AppContextTypes";
import { Button } from "../../components";
import "./addNewJob.style.scss";

const AddNewJobPage: FC = () => {
  const { addJob, setInitialAddJob, updateAddJob } = useAppContext();
  const { translate, language } = useTranslate();

  const handleOnChange = (value: AddJobType) => {
    updateAddJob(value);
  };

  const handleAction = () => {};

  const renderActionButtons = () => {
    return (
      <Button action={handleAction} small primary>
        Add Job
      </Button>
    );
  };

  useEffect(() => {
    const newAddJob = {
      jobTitle: addJob.jobTitle,
      location: addJob.location,
      company: addJob.company,
      status: { id: addJob.status.id, text: translate(addJob.status.id) },
      type: { id: addJob.type.id, text: translate(addJob.type.id) },
    };
    setInitialAddJob(newAddJob);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <section className="add-new-job-page">
      <PageTitle>{translate("add_new_job_page_title")}</PageTitle>
      <JobForm
        state={addJob}
        formTitle={translate("form_title_add")}
        onChange={handleOnChange}
        actionButtons={renderActionButtons}
        jobTitle
        company
        location
      />
    </section>
  );
};

export default AddNewJobPage;
