import { FC } from "react";
import "./allJobsPage.style.scss";
import { Pagination, JobItem, PageTitle, FilterForm } from "../../components";
import { JobItemTypes } from "../../@types/components/componentTypes";

const jobsArray: JobItemTypes[] = [
  {
    id: "1",
    jobTitle: "Software Engineer",
    companyName: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    jobType: "Full-time",
    createdAt: new Date("2024-04-01"),
    isUpdated: false,
    updatedAt: null,
    user: "630c3311fedb46123a907c99",
    jobStatus: "interview",
  },
  {
    id: "2",
    jobTitle: "Project Manager",
    companyName: "Creative Solutions Ltd.",
    location: "New York, NY",
    jobType: "Contract",
    createdAt: new Date("2024-03-28"),
    isUpdated: true,
    updatedAt: new Date("2024-04-15"),
    user: "630c3311fedb46123a907c99",
    jobStatus: "job offer",
  },
  {
    id: "3",
    jobTitle: "Data Analyst",
    companyName: "Data Experts LLC",
    location: "Chicago, IL",
    jobType: "Part-time",
    createdAt: new Date("2024-01-20"),
    isUpdated: true,
    updatedAt: new Date("2024-02-20"),
    user: "630c3311fedb46123a907c99",
    jobStatus: "pending",
  },
  {
    id: "4",
    jobTitle: "Graphic Designer",
    companyName: "Design Studio",
    location: "Los Angeles, CA",
    jobType: "Full-time",
    createdAt: new Date("2024-03-05"),
    isUpdated: false,
    updatedAt: null,
    user: "630c3311fedb46123a907c99",
    jobStatus: "declined",
  },
  {
    id: "5",
    jobTitle: "Systems Administrator",
    companyName: "IT Solutions Corp.",
    location: "Austin, TX",
    jobType: "Full-time",
    createdAt: new Date("2024-02-15"),
    isUpdated: true,
    updatedAt: new Date("2024-04-10"),
    user: "630c3311fedb46123a907c99",
    jobStatus: "interview",
  },
  {
    id: "6",
    jobTitle: "Marketing Coordinator",
    companyName: "Global Marketing Inc.",
    location: "Miami, FL",
    jobType: "Part-time",
    createdAt: new Date("2024-01-10"),
    isUpdated: false,
    updatedAt: null,
    user: "630c3311fedb46123a907c99",
    jobStatus: "job offer",
  },
  {
    id: "7",
    jobTitle: "Sales Executive",
    companyName: "Sales Power",
    location: "Seattle, WA",
    jobType: "Contract",
    createdAt: new Date("2024-03-22"),
    isUpdated: true,
    updatedAt: new Date("2024-04-12"),
    user: "630c3311fedb46123a907c99",
    jobStatus: "pending",
  },
  {
    id: "8",
    jobTitle: "Customer Service Representative",
    companyName: "Support Hub",
    location: "Denver, CO",
    jobType: "Full-time",
    createdAt: new Date("2024-02-28"),
    isUpdated: false,
    updatedAt: null,
    user: "630c3311fedb46123a907c99",
    jobStatus: "declined",
  },
  {
    id: "9",
    jobTitle: "Human Resources Manager",
    companyName: "People First",
    location: "Boston, MA",
    jobType: "Full-time",
    createdAt: new Date("2024-03-10"),
    isUpdated: true,
    updatedAt: new Date("2024-04-05"),
    user: "630c3311fedb46123a907c99",
    jobStatus: "interview",
  },
  {
    id: "10",
    jobTitle: "Quality Assurance Engineer",
    companyName: "Quality Tech",
    location: "San Diego, CA",
    jobType: "Part-time",
    createdAt: new Date("2024-01-05"),
    isUpdated: true,
    updatedAt: new Date("2024-01-25"),
    user: "630c3311fedb46123a907c99",
    jobStatus: "job offer",
  },
];

const AllJobsPage: FC = () => {
  return (
    <section className="all-jobs-page">
      <PageTitle>All Jobs</PageTitle>
      <FilterForm />
      <h4 style={{ marginBottom: 20 }}>{jobsArray.length} item found</h4>
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
