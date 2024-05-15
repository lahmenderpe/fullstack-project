import { FC, useEffect, useState } from "react";
import { PageTitle, JobForm } from "../../components";
import { useNavigate } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";
import useAppContext from "../../hooks/useAppContext";
import useAuth from "../../hooks/useAuth";
import { addNewJob } from "../../services/backend/backend";
import { AddJobType } from "../../@types/context/AppContextTypes";
import { Button } from "../../components";
import { toast } from "react-toastify";
import "./addNewJob.style.scss";

const AddNewJobPage: FC = () => {
  const {
    addJob,
    setInitialAddJob,
    updateAddJob,
    addNewJobToState,
    setSelectedPage,
  } = useAppContext();
  const { translate, language } = useTranslate();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleOnChange = (value: AddJobType) => {
    updateAddJob(value);
  };

  const handleAction = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => {
    e?.preventDefault();
    if (user) {
      setLoading(true);
      try {
        const payload = {
          jobTitle: addJob.jobTitle,
          companyName: addJob.company,
          user: user.id,
          jobStatus: {
            translationKey: addJob.status.id,
            name: addJob.status.text,
          },
          jobType: { translationKey: addJob.type.id, name: addJob.type.text },
          location: addJob.location,
        };
        const result = await addNewJob(payload, user.token);
        addNewJobToState(result.data);
        navigate("/");
        setSelectedPage("jobs");
        updateAddJob({
          jobTitle: "",
          company: "",
          location: "",
          status: { id: "pending", text: "pending" },
          type: { id: "full_time", text: "full-time" },
        });
        toast.success(translate("notification_job_added"));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const isFormValid = () => {
    return addJob.jobTitle && addJob.company && addJob.location;
  };

  const renderActionButtons = () => {
    return (
      <Button
        action={(e) => handleAction(e)}
        small
        editBtn
        disabled={!isFormValid() || loading}
        loading={loading}
      >
        {translate("save_job_button")}
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
