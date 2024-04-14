import { useState, useEffect, FC } from "react";
import { JobType } from "../../@types/context/AppContextTypes";

const Pagination: FC = () => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const limit = 10; // Number of items per page

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await fetch(
          `/api/v1/jobs?page=${page}&limit=${limit}&userId=${1}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJobs(data.jobs);
        setTotalPages(data.totalPages);
      } catch (error: any) {
        setError("Failed to fetch jobs: " + error.message);
        setJobs([]);
        setTotalPages(0);
      }
      setIsLoading(false);
    };

    fetchJobs();
  }, [page]);

  return (
    <div className="jobs-pagination">
      <h1>Job Listings</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {isLoading ? (
        <p>Loading...</p>
      ) : jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              {job.title} - {job.company}
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs found.</p>
      )}
      <div>
        <button
          disabled={page === 1 || isLoading}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            disabled={isLoading}
            style={{ fontWeight: page === p ? "bold" : "normal" }}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}
        <button
          disabled={page === totalPages || isLoading}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
