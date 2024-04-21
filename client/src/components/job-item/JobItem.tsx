import React from "react";
import { JobItemTypes } from "../../@types/components/componentTypes";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import "./JobItem.style.scss";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import Badge from "../badge/Badge";
import useTranslate from "../../hooks/useTranslate";

const JobItem: React.FC<JobItemTypes> = ({
  jobTitle,
  companyName,
  location,
  jobType,
  createdAt,
  updatedAt,
  jobStatus,
  user,
}) => {
  const { translate } = useTranslate();

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
          <div className="created">
            <FaCalendarAlt size={18} />
            {translate("applied_at")}{" "}
            {createdAt ? createdAt.toLocaleDateString() : "N/A"}
          </div>
          <Badge type={jobStatus.text}>
            {translate(jobStatus.translationKey)}
          </Badge>
        </div>
      </main>
      <footer>
        <Button primary small editBtn action={() => {}}>
          {translate("edit_button")}
        </Button>
        <Button primary small deleteBtn action={() => {}}>
          {translate("delete_button")}
        </Button>
      </footer>
    </section>
  );
};

export default JobItem;
