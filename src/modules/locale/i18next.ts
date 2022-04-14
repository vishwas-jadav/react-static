import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import englishTranslations from './translations/en.json';

i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: englishTranslations,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(() => {
    // very unlikely scenario
  });

export default i18n;
