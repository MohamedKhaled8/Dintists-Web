import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { L, Lang } from "./site";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; tr: (v: L) => string };
const I18n = createContext<Ctx>({ lang: "ar", setLang: () => {}, tr: (v) => v.ar });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ar") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };
  return <I18n.Provider value={{ lang, setLang, tr: (v) => v[lang] }}>{children}</I18n.Provider>;
}

export const useI18n = () => useContext(I18n);
