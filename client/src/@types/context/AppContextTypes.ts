export type AppContexType = {
  jobs: JobType[];
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

export type AppContextStateType = { jobs: JobType[]; selectedPage: string };

export type JobType = {
  id: string;
  title: string;
  company: string;
  type: string;
  status: "applied" | "interview" | "rejected";
  appliedAt: Date;
};
