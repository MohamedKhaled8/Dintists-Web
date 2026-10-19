import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { L, Lang } from "./site";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; tr: (v?: L | string | null) => string };

function safeTr(v?: L | string | null, lang: Lang = "ar"): string {
  if (v == null) return "";
  if (typeof v === "string") return v;
  if (typeof v === "object") {
    return v[lang] ?? v.ar ?? v.en ?? "";
  }
  return String(v);
}

const I18n = createContext<Ctx>({ lang: "ar", setLang: () => {}, tr: (v) => safeTr(v, "ar") });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      try {
        const saved = localStorage.getItem("lang");
        if (saved === "en" || saved === "ar") setLangState(saved);
      } catch {}
    }
  }, []);
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      try {
        localStorage.setItem("lang", l);
      } catch {}
    }
  };
  return <I18n.Provider value={{ lang, setLang, tr: (v) => safeTr(v, lang) }}>{children}</I18n.Provider>;
}

export const useI18n = () => useContext(I18n);
