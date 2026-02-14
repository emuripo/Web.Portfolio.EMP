"use client";

import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { en } from "../content/en";
import { es } from "../content/es";
import type { Language, Translation } from "../content/types";
import { Button } from "./ui/Button";

interface LanguageContextValue {
  language: Language;
  translation: Translation;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (language: Language) => void;
}

type Action = { type: "set"; language: Language };

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const LOCAL_STORAGE_KEY = "emp-language";

function reducer(_: Omit<LanguageContextValue, "setLanguage">, action: Action) {
  const dictionary = action.language === "en" ? en : es;
  return { language: action.language, translation: dictionary };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    language: en.meta.language,
    translation: en,
  });

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY) as Language | null;
    if (stored && (stored === "en" || stored === "es")) {
      dispatch({ type: "set", language: stored });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, state.language);
    document.documentElement.lang = state.translation.meta.locale.split("-")[0];
  }, [state.language, state.translation.meta.locale]);

  const value: LanguageContextValue = {
    language: state.language as Language,
    translation: state.translation,
    setLanguage: (language: Language) => dispatch({ type: "set", language }),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return ctx;
}

export function LanguageToggle() {
  const { language, translation, setLanguage } = useTranslation();
  const next = language === "en" ? "es" : "en";

  return (
    <Button
      variant="ghost"
      onClick={() => setLanguage(next)}
      aria-label={translation.labels.languageToggle}
    >
      {translation.labels.languageToggle}
    </Button>
  );
}
