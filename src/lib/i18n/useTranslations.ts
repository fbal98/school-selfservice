import { translations } from "./translations";

// Type to get all possible translation keys
type TranslationKey = keyof typeof translations.en;

// Type for language codes
type LanguageCode = keyof typeof translations;

// Create a function to get the current language
const getCurrentLanguage = (): LanguageCode => {
  // Always default to Arabic
  return "ar";
};

export const useTranslations = () => {
  const currentLanguage = getCurrentLanguage();

  const t = (key: TranslationKey): string => {
    // Try Arabic first, then English as fallback
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  return t;
};
