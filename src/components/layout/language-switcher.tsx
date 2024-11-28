"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/useTranslation";

export function LanguageSwitcher() {
  const { locale, changeLanguage, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  const toggleLanguage = () => {
    changeLanguage(locale === "en" ? "ar" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="font-medium"
    >
      {locale === "en" ? "ع" : "EN"}
    </Button>
  );
}
