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
  UPDATE_IS_LOGIN,
  ADD_NEW_JOB,
  SET_ALL_JOBS,
  UPDATE_STATE,
} from "../reducer/reducerTokens";
import { JobItemTypes } from "../@types/components/componentTypes";

export const AppContext = createContext<
  null | (AppContexType & AppContextStateType)
>(null);

const initialState: AppContextStateType = {
  jobs: [],
  selectedPage: "jobs",
  filter: {
    status: { id: "all", text: "all" },
    type: { id: "all", text: "all" },
  },
  addJob: {
    jobTitle: "",
    company: "",
    location: "",
    status: { id: "pending", text: "pending" },
    type: { id: "full_time", text: "full-time" },
  },
  isLogin: true,
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

  const updateIsLogin = (value: boolean) => {
    dispatch({ type: UPDATE_IS_LOGIN, payload: value });
  };

  const addNewJobToState = (data: JobItemTypes) => {
    dispatch({ type: ADD_NEW_JOB, payload: data });
  };

  const setAllJobs = (data: JobItemTypes[]) => {
    dispatch({ type: SET_ALL_JOBS, payload: data });
  };

  const updateState = (data: JobItemTypes) => {
    dispatch({ type: UPDATE_STATE, payload: data });
  };

  const resetFilters = () => {
    const filter = {
      status: { id: "all", text: "all" },
      type: { id: "all", text: "all" },
    };
    updateFilterSet(filter);
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
        resetFilters,
        updateIsLogin,
        addNewJobToState,
        setAllJobs,
        updateState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
