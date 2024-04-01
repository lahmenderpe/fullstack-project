import { useReducer, createContext } from "react";
import {
  AppContexType,
  AppContextStateType,
} from "../@types/context/AppContextTypes";
import reducer from "../reducer/appReducer";
import { SET_SELECTED_PAGE } from "../reducer/reducerTokens";

export const AppContext = createContext<null | AppContexType>(null);

const initialState: AppContextStateType = {
  jobs: [],
  selectedPage: "jobs",
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSelectedPage = (value: string) => {
    dispatch({ type: SET_SELECTED_PAGE, payload: value });
  };

  return (
    <AppContext.Provider value={{ ...state, setSelectedPage }}>
      {children}
    </AppContext.Provider>
  );
};
