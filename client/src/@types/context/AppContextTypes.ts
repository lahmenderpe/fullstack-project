import { DropdownItem, JobItemTypes } from "../components/componentTypes";

export type AppContexType = {
  jobs: JobTypeItem[];
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  updateFilterSet: (value: FilterType) => void;
  setInitialFilters: (filter: any) => void;
  setInitialAddJob: (filter: any) => void;
  updateAddJob: (filter: any) => void;
  updateIsLogin: (filter: any) => void;
  resetFilters: () => void;
  addNewJobToState: (data: any) => void;
  setAllJobs: (data: any) => void;
  updateState: (data: JobItemTypes) => void;
};

export type FilterType = {
  status: DropdownItem;
  type: DropdownItem;
};

export interface AddJobType {
  jobTitle: string;
  company: string;
  location: string;
  status: DropdownItem;
  type: DropdownItem;
}

export type AppContextStateType = {
  jobs: JobTypeItem[];
  selectedPage: string;
  filter: FilterType;
  addJob: AddJobType;
  isLogin: boolean;
};

export type JobType = {
  id: string;
  title: string;
  company: string;
  type: string;
  status: "applied" | "interview" | "rejected";
  appliedAt: Date;
};

export type JobTypeItem = {
  id: string;
  companyName: string;
  jobTitle: string;
  jobStatus: { translationKey: string; name: string };
  jobType: { translationKey: string; name: string };
  location: string;
  user: string;
};
