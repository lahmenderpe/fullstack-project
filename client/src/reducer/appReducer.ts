import { AppContextStateType } from "../@types/context/AppContextTypes";
import { ReducerType } from "../@types/commonTypes";
import {
  SET_INITIAL_FILTER_STATE,
  SET_SELECTED_PAGE,
  UPDATE_FILTER_SET,
  SET_INITIAL_ADD_JOB,
  UPDATE_ADD_JOB,
  UPDATE_IS_LOGIN,
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

  return state;
};

export default reducer;
