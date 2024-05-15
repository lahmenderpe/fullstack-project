import React from "react";
import { JobItemTypes } from "../../@types/components/componentTypes";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import "./JobItem.style.scss";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { deleteJob } from "../../services/backend/backend";
import useAppContext from "../../hooks/useAppContext";
import useAuth from "../../hooks/useAuth";
import Badge from "../badge/Badge";
import useTranslate from "../../hooks/useTranslate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobItem: React.FC<JobItemTypes> = ({
  id,
  jobTitle,
  companyName,
  location,
  jobType,
  jobStatus,
}) => {
  const { translate } = useTranslate();
  const { user } = useAuth();
  const { setAllJobs, jobs } = useAppContext();
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    try {
      console.log(user);
      if (user) {
        await deleteJob(id, user.token);
        const tempJobs = [...jobs].filter((item) => item.id !== id);
        setAllJobs(tempJobs);
        toast.success(translate("notification_job_deleted"));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id: string) => {
    const url = `/edit-job/${id}`;
    navigate(url);
  };

  return (
    <section className="job-item">
      <header>
        <Avatar name={companyName} />
        <div>
          <h2 className="job-title">{jobTitle}</h2>
          <div className="company"> {companyName}</div>
        </div>
      </header>
      <div className="seperator"></div>
      <main>
        <div>
          <div className="location">
            <FaLocationArrow size={18} />
            {location}
          </div>
          <div className="type">
            <MdOutlineWork size={18} />
            {translate(jobType!.translationKey)}
          </div>
        </div>
        <div>
          <Badge type={jobStatus.translationKey}>
            {translate(jobStatus.translationKey)}
          </Badge>
        </div>
      </main>
      <footer>
        <Button primary small editBtn action={() => handleEdit(id.toString())}>
          {translate("edit_button")}
        </Button>
        <Button
          primary
          small
          deleteBtn
          action={() => handleDelete(id.toString())}
        >
          {translate("delete_button")}
        </Button>
      </footer>
    </section>
  );
};

export default JobItem;
