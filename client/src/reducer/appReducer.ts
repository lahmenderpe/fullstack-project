import { AppContextStateType } from "../@types/context/AppContextTypes";
import { ReducerType } from "../@types/commonTypes";
import { SET_INITIAL_FILTER_STATE, SET_SELECTED_PAGE } from "./reducerTokens";

const reducer = (state: AppContextStateType, action: ReducerType) => {
  if (action.type === SET_SELECTED_PAGE) {
    const newState = { ...state, selectedPage: action.payload };
    return newState;
  }

  if (action.type === SET_INITIAL_FILTER_STATE) {
    const newState = { ...state, filter: action.payload };
    return newState;
  }

  return state;
};

export default reducer;
