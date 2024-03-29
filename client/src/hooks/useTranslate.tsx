import { useContext } from "react";
import { TranslationContext } from "../context/translationContext";

const useTranslate = () => {
  const context = useContext(TranslationContext);

  if (!context) throw new Error("No translation context");
  return context;
};

export default useTranslate;
