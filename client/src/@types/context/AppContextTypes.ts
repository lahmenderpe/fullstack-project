export type AppContextStateType = {
  jobs: JobType[];
};

export type JobType = {
  title: string;
  company: string;
  type: string;
  status: "applied" | "interview" | "rejected";
  appliedAt: Date;
};
