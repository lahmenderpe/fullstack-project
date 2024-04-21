import { DropdownItem } from "../components/componentTypes";

export type AppContexType = {
  jobs: JobType[];
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  updateFilterSet: (value: FilterType) => void;
  setInitialFilters: (filter: any) => void;
};

export type FilterType = {
  search: string;
  status: DropdownItem;
  type: DropdownItem;
  sort: DropdownItem;
};

export type AppContextStateType = {
  jobs: JobType[];
  selectedPage: string;
  filter: FilterType;
};

export type JobType = {
  id: string;
  title: string;
  company: string;
  type: string;
  status: "applied" | "interview" | "rejected";
  appliedAt: Date;
};
