import { AppContextStateType } from "../@types/context/AppContextTypes";
import { ReducerType } from "../@types/commonTypes";
import {
  SET_INITIAL_FILTER_STATE,
  SET_SELECTED_PAGE,
  UPDATE_FILTER_SET,
  SET_INITIAL_ADD_JOB,
  UPDATE_ADD_JOB,
  UPDATE_IS_LOGIN,
  SET_ALL_JOBS,
  UPDATE_STATE,
  RESET_ADD_JOB,
} from "./reducerTokens";

const reducer = (state: AppContextStateType, action: ReducerType) => {
  if (action.type === SET_SELECTED_PAGE) {
    const newState = { ...state, selectedPage: action.payload };
    return newState;
  }

  if (action.type === SET_INITIAL_FILTER_STATE) {
    const newState = { ...state, filter: action.payload };
    return newState;
  }

  if (action.type === UPDATE_FILTER_SET) {
    const newState = { ...state, filter: action.payload };
    return newState;
  }

  if (action.type === SET_INITIAL_ADD_JOB) {
    const newState = { ...state, addJob: action.payload };
    return newState;
  }

  if (action.type === UPDATE_ADD_JOB) {
    const newState = { ...state, addJob: action.payload };
    return newState;
  }

  if (action.type === UPDATE_IS_LOGIN) {
    const newState = { ...state, isLogin: action.payload };
    return newState;
  }

  if (action.type === SET_ALL_JOBS) {
    const newState = { ...state, jobs: action.payload };
    return newState;
  }

  if (action.type === UPDATE_STATE) {
    const tempJobs = [...state.jobs];
    const index = tempJobs.findIndex((item) => item.id === action.payload.id);
    const newJobs = tempJobs.splice(index, 1, action.payload);
    return { ...state, jobs: newJobs };
  }

  if (action.type === RESET_ADD_JOB) {
    const newState = { ...state, addJob: action.payload };
    return newState;
  }

  return state;
};

export default reducer;
