import { FC } from "react";
import "./allJobsPage.style.scss";
import { Pagination, JobItem, PageTitle, FilterForm } from "../../components";
import { JobItemTypes } from "../../@types/components/componentTypes";
import useTranslate from "../../hooks/useTranslate";

const jobsArray: JobItemTypes[] = [
  {
    id: "1",
    jobTitle: "Software Engineer",
    companyName: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    jobType: {
      text: "Full-time",
      translationKey: "full_time",
    },
    createdAt: new Date("2024-04-01"),
    isUpdated: false,
    updatedAt: null,
    user: "630c3311fedb46123a907c99",
    jobStatus: {
      text: "interview",
      translationKey: "interview",
    },
  },
  {
    id: "2",
    jobTitle: "Project Manager",
    companyName: "Creative Solutions Ltd.",
    location: "New York, NY",
    jobType: {
      text: "Part-time",
      translationKey: "part_time",
    },
    createdAt: new Date("2024-03-28"),
    isUpdated: true,
    updatedAt: new Date("2024-04-15"),
    user: "630c3311fedb46123a907c99",
    jobStatus: {
      text: "Job Offer",
      translationKey: "job_offer",
    },
  },
  {
    id: "3",
    jobTitle: "Data Analyst",
    companyName: "Data Experts LLC",
    location: "Chicago, IL",
    jobType: {
      text: "Part-time",
      translationKey: "part_time",
    },
    createdAt: new Date("2024-01-20"),
    isUpdated: true,
    updatedAt: new Date("2024-02-20"),
    user: "630c3311fedb46123a907c99",
    jobStatus: {
      text: "pending",
      translationKey: "pending",
    },
  },
  {
    id: "4",
    jobTitle: "Graphic Designer",
    companyName: "Design Studio",
    location: "Los Angeles, CA",
    jobType: {
      text: "Full-time",
      translationKey: "full_time",
    },
    createdAt: new Date("2024-03-05"),
    isUpdated: false,
    updatedAt: null,
    user: "630c3311fedb46123a907c99",
    jobStatus: {
      text: "declined",
      translationKey: "declined",
    },
  },
  {
    id: "5",
    jobTitle: "Systems Administrator",
    companyName: "IT Solutions Corp.",
    location: "Austin, TX",
    jobType: {
      text: "Full-time",
      translationKey: "full_time",
    },
    createdAt: new Date("2024-02-15"),
    isUpdated: true,
    updatedAt: new Date("2024-04-10"),
    user: "630c3311fedb46123a907c99",
    jobStatus: {
      text: "interview",
      translationKey: "interview",
    },
  },
];

const AllJobsPage: FC = () => {
  const { translate } = useTranslate();
  return (
    <section className="all-jobs-page">
      <PageTitle>{translate("all_jobs_page_title")}</PageTitle>
      <FilterForm />
      <h4 style={{ marginBottom: 20 }}>
        {jobsArray.length} {translate("items_found")}
      </h4>
      <div className="jobs-wrapper">
        {jobsArray.map((job) => {
          const {
            id,
            jobTitle,
            companyName,
            location,
            jobType,
            createdAt,
            isUpdated,
            updatedAt,
            user,
            jobStatus,
          } = job;

          return (
            <JobItem
              key={id}
              id={id}
              jobTitle={jobTitle}
              companyName={companyName}
              location={location}
              jobType={jobType}
              createdAt={createdAt}
              isUpdated={isUpdated}
              updatedAt={updatedAt}
              user={user}
              jobStatus={jobStatus}
            />
          );
        })}
      </div>
      <Pagination />
    </section>
  );
};

export default AllJobsPage;
