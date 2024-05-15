import { FC, useEffect } from "react";
import "./allJobsPage.style.scss";
import useTranslate from "../../hooks/useTranslate";
import { GrPowerReset } from "react-icons/gr";
import useAppContext from "../../hooks/useAppContext";
import useAuth from "../../hooks/useAuth";
import { getAllJobs } from "../../services/backend/backend";
import { JobItem, PageTitle, JobForm, Button } from "../../components";
import { JobItemTypes } from "../../@types/components/componentTypes";
import { FilterType } from "../../@types/context/AppContextTypes";
import { setPageTitle } from "../../utils/utils";

const AllJobsPage: FC = () => {
  const { translate, language } = useTranslate();
  const {
    jobs,
    filter,
    setInitialFilters,
    updateFilterSet,
    resetFilters,
    setAllJobs,
  } = useAppContext();
  const { user } = useAuth();

  const itemsToShow = filterJobs(jobs, filter);

  function filterJobs(jobs: JobItemTypes[], filterSet: FilterType) {
    return jobs.filter((job) => {
      const statusFilter =
        filterSet.status.id === "all" ||
        job.jobStatus.translationKey === filterSet.status.id;
      const typeFilter =
        filterSet.type.id === "all" ||
        job.jobType?.translationKey === filterSet.type.id;
      return statusFilter && typeFilter;
    });
  }

  const handleClearFilter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => {
    if (e) {
      e.preventDefault();
      resetFilters();
    }
  };

  const handleFilterChange = (state: any) => {
    updateFilterSet(state);
  };

  const renderActionButton = () => {
    return (
      <Button action={handleClearFilter} deleteBtn small>
        <div className="reset-wrapper">
          <GrPowerReset />
          {translate("clear_filters_button")}
        </div>
      </Button>
    );
  };

  useEffect(() => {
    const fetchJobs = async () => {
      if (user) {
        try {
          const { id, token } = user;
          const result = await getAllJobs(id, token);
          if (!!result.data.length) {
            setAllJobs(result.data);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    const filterState = {
      status: { id: filter.status.id, text: translate(filter.status.id) },
      type: { id: filter.type.id, text: translate(filter.type.id) },
    };
    setInitialFilters(filterState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    setPageTitle(translate("page_title_all_jobs"));
  });

  return (
    <section className="all-jobs-page">
      <PageTitle>{translate("all_jobs_page_title")}</PageTitle>
      <JobForm
        state={filter}
        formTitle={translate("form_title_filter")}
        actionButtons={renderActionButton}
        onChange={handleFilterChange}
      />
      <h4 style={{ marginBottom: 20 }}>
        {itemsToShow.length} {translate("items_found")}
      </h4>
      <div className="jobs-wrapper">
        {!!itemsToShow.length ? (
          itemsToShow.map((job) => {
            const {
              id,
              jobTitle,
              companyName,
              location,
              jobType,
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
                user={user}
                jobStatus={jobStatus}
              />
            );
          })
        ) : (
          <div className="no-jobs-text">No jobs to show</div>
        )}
      </div>
      {/* <Pagination /> */}
    </section>
  );
};

export default AllJobsPage;
