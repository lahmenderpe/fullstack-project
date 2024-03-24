import { useContext } from "react";
import { AppContext } from "../context/appContext";

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error("No context value");

  return context;
};

export default useAppContext;
