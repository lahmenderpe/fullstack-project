import React from "react";
import { AppContextStateType } from "../@types/context/AppContextTypes";
import reducer from "../reducer/appReducer";

export const AppContext = React.createContext<null | AppContextStateType>(null);

const initialState: AppContextStateType = {
  jobs: [],
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
