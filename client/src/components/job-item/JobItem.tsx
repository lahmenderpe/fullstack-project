import React from "react";
import { JobItemTypes } from "../../@types/components/componentTypes";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import "./JobItem.style.scss";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import Badge from "../badge/Badge";

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
  return (
    <section className="job-item">
      <header>
        <Avatar name={companyName} />
        <div>
          <h2>{jobTitle}</h2>
          <div> {companyName}</div>
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
            {jobType}
          </div>
        </div>
        <div>
          <div className="created">
            <FaCalendarAlt size={18} />
            Created at {createdAt ? createdAt.toLocaleDateString() : "N/A"}
          </div>
          <Badge type={jobStatus}>{jobStatus}</Badge>
        </div>
      </main>
      <footer>
        <Button primary small editBtn action={() => {}}>
          Edit
        </Button>
        <Button primary small deleteBtn action={() => {}}>
          Delete
        </Button>
      </footer>
    </section>
  );
};

export default JobItem;
