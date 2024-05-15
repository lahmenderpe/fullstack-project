import { FC, useEffect, useState } from "react";
import { PageTitle, JobForm } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import useTranslate from "../../hooks/useTranslate";
import useAppContext from "../../hooks/useAppContext";
import useAuth from "../../hooks/useAuth";
import { updateJob } from "../../services/backend/backend";
import { AddJobType } from "../../@types/context/AppContextTypes";
import { Button } from "../../components";
import { toast } from "react-toastify";
import "./editJob.style.scss";
import * as _ from "lodash";

const EditJobPage: FC = () => {
  const [shouldDisabled, setShouldDisabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [job, setJob] = useState({
    jobTitle: "",
    company: "",
    location: "",
    status: { id: "all", text: "all" },
    type: { id: "all", text: "all" },
  });
  const [clone, setClone] = useState<null | {
    jobTitle: string;
    location: string;
    company: string;
    status: {
      id: string;
      text: string;
    };
    type: {
      id: string;
      text: string;
    };
  }>(null);
  const { updateState, setSelectedPage } = useAppContext();
  const { translate, language } = useTranslate();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { jobs } = useAppContext();
  const { id } = useParams();

  const handleOnChange = (value: AddJobType) => {
    setJob({ ...value });
  };

  const handleAction = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => {
    e?.preventDefault();
    if (user) {
      try {
        setIsSaving(true);
        setShouldDisabled(true);
        const payload = {
          jobTitle: job.jobTitle,
          companyName: job.company,
          user: user.id,
          jobStatus: {
            translationKey: job.status.id,
            name: job.status.text,
          },
          jobType: { translationKey: job.type.id, name: job.type.text },
          location: job.location,
        };
        const result = await updateJob(id!, payload, user.token);
        updateState(result.data);
        navigate("/");
        setSelectedPage("jobs");
        setJob({
          jobTitle: "",
          company: "",
          location: "",
          status: { id: "all", text: "all" },
          type: { id: "all", text: "all" },
        });
        toast.success(translate("notification_job_updated"));
      } catch (error) {
        console.error(error);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  const renderActionButtons = () => {
    return (
      <div className="button-group">
        <Button
          action={(e) => handleAction(e)}
          small
          editBtn
          disabled={shouldDisabled}
          loading={isSaving}
        >
          {translate("save_job_button")}
        </Button>
        <Button action={handleCancel} small deleteBtn>
          {translate("cancel_button")}
        </Button>
      </div>
    );
  };

  useEffect(() => {
    const foundJob = jobs.find((item) => item.id === id);
    if (foundJob) {
      const newAddJob = {
        jobTitle: foundJob.jobTitle,
        location: foundJob.location,
        company: foundJob.companyName,
        status: {
          id: foundJob.jobStatus.translationKey,
          text: translate(foundJob.jobStatus.translationKey),
        },
        type: {
          id: foundJob.jobType.translationKey,
          text: translate(foundJob.jobType.translationKey),
        },
      };
      setJob(newAddJob);
      setClone(newAddJob);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    const isEqual = _.isEqual(clone, job);
    setShouldDisabled(isEqual);
  }, [clone, job]);

  return (
    <section className="edit-job-page">
      <PageTitle>{translate("edit_job_page_title")}</PageTitle>
      <JobForm
        state={job}
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

export default EditJobPage;
