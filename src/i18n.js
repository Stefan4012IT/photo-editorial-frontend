import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detektuje jezik iz browsera
  .use(initReactI18next) // Integriše i18n sa React-om
  .init({
    resources: {
      en: {
        translation: require('./locales/en/translation.json'),
      },
      sr: {
        translation: require('./locales/sr/translation.json'),
      },
      ru: {
        translation: require('./locales/ru/translation.json'),
      }
    },
    fallbackLng: 'en', // Jezik koji se koristi ako detekcija ne uspe
    interpolation: {
      escapeValue: false, // React već štiti od XSS
    },
  });

export default i18n;
