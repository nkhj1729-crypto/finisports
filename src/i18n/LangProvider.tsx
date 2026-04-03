"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ko } from "./ko";
import { en } from "./en";
import type { Dictionary } from "./types";

type Lang = "ko" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LangContext = createContext<LangContextType>({
  lang: "ko",
  setLang: () => {},
  t: ko,
});

const dicts: Record<Lang, Dictionary> = { ko, en };

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en") setLangState("en");
    setMounted(true);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("lang", l);
  }

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
