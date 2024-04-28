import { useReducer, createContext } from "react";
import {
  AppContexType,
  AppContextStateType,
  FilterType,
  AddJobType,
} from "../@types/context/AppContextTypes";
import reducer from "../reducer/appReducer";
import {
  SET_SELECTED_PAGE,
  UPDATE_FILTER_SET,
  SET_INITIAL_FILTER_STATE,
  SET_INITIAL_ADD_JOB,
  UPDATE_ADD_JOB,
} from "../reducer/reducerTokens";

export const AppContext = createContext<
  null | (AppContexType & AppContextStateType)
>(null);

const initialState: AppContextStateType = {
  jobs: [],
  selectedPage: "jobs",
  filter: {
    search: "",
    status: { id: "all", text: "all" },
    type: { id: "all", text: "all" },
    sort: { id: "latest", text: "latest" },
  },
  addJob: {
    jobTitle: "",
    company: "",
    location: "",
    status: { id: "all", text: "all" },
    type: { id: "all", text: "all" },
  },
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSelectedPage = (value: string) => {
    dispatch({ type: SET_SELECTED_PAGE, payload: value });
  };

  const updateFilterSet = (value: FilterType) => {
    dispatch({ type: UPDATE_FILTER_SET, payload: value });
  };

  const setInitialFilters = (filter: FilterType) => {
    dispatch({ type: SET_INITIAL_FILTER_STATE, payload: filter });
  };

  const setInitialAddJob = (value: AddJobType) => {
    dispatch({ type: SET_INITIAL_ADD_JOB, payload: value });
  };

  const updateAddJob = (value: AddJobType) => {
    dispatch({ type: UPDATE_ADD_JOB, payload: value });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setSelectedPage,
        updateFilterSet,
        setInitialFilters,
        setInitialAddJob,
        updateAddJob,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
