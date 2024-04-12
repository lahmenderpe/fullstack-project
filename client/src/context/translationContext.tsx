import { useState, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
// languages
import en from "../translation/en";
import fi from "../translation/fin";

type TranslationType = {
  [key: string]: string;
};

type TranslationsType = {
  en: TranslationType;
  fi: TranslationType;
};

type TranslationContextType = {
  changeLanguage: (key: string) => void;
  translate: (key: string) => string;
  language: string;
};

const translations: TranslationsType = { en, fi };

export const TranslationContext = createContext<null | TranslationContextType>(
  null
);

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<string>("en");
  const { setItem, getItem } = useLocalStorage("lang");

  const translate = (key: string): string =>
    translations[language as keyof TranslationsType][key as keyof Object];

  const changeLanguage = (key: string) => {
    setItem(key);
    setLanguage(key);
  };

  useEffect(() => {
    const selectedLang = getItem();

    if (selectedLang) {
      setLanguage(selectedLang);
    }
  }, [getItem]);

  return (
    <TranslationContext.Provider
      value={{ translate, changeLanguage, language }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
