import { DropdownItem } from "../components/componentTypes";

export type AppContexType = {
  jobs: JobType[];
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  updateFilterSet: (value: FilterType) => void;
  setInitialFilters: (filter: any) => void;
  setInitialAddJob: (filter: any) => void;
  updateAddJob: (filter: any) => void;
};

export type FilterType = {
  search: string;
  status: DropdownItem;
  type: DropdownItem;
  sort: DropdownItem;
};

export type AddJobType = {
  jobTitle: string;
  company: string;
  location: string;
  status: DropdownItem;
  type: DropdownItem;
};

export type AppContextStateType = {
  jobs: JobType[];
  selectedPage: string;
  filter: FilterType;
  addJob: AddJobType;
};

export type JobType = {
  id: string;
  title: string;
  company: string;
  type: string;
  status: "applied" | "interview" | "rejected";
  appliedAt: Date;
};
