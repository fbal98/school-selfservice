"use client";

import { useState, useEffect } from "react";
import { translations } from "./translations";

type TranslationKey = keyof typeof translations.en;

// Default to English for SSR
const DEFAULT_LOCALE = "en";

export function useTranslation() {
  const [locale, setLocale] = useState<"en" | "ar">(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get initial locale from localStorage or browser preference
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale === "ar" || savedLocale === "en") {
      setLocale(savedLocale);
    } else {
      const browserLang = navigator.language.split("-")[0];
      setLocale(browserLang === "ar" ? "ar" : "en");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Only update localStorage after initial mount
      localStorage.setItem("locale", locale);
      // Force re-render of all components using the hook
      window.dispatchEvent(new Event("languageChange"));
    }
  }, [locale, mounted]);

  // Listen for language changes from other components
  useEffect(() => {
    const handleLanguageChange = () => {
      const newLocale = localStorage.getItem("locale") as "en" | "ar";
      if (newLocale && newLocale !== locale) {
        setLocale(newLocale);
      }
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, [locale]);

  const t = (key: TranslationKey): string => {
    try {
      const translation = translations[locale][key];
      if (!translation) {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
      return translation;
    } catch (error) {
      console.warn(`Error getting translation for key: ${key}`, error);
      return key;
    }
  };

  const changeLanguage = (newLocale: "en" | "ar") => {
    setLocale(newLocale);
  };

  const dir = locale === "ar" ? "rtl" : "ltr";

  return {
    t,
    locale,
    changeLanguage,
    dir,
    isLoaded: mounted,
  };
}
