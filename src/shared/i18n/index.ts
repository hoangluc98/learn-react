// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translation files
import translationEN from './en.json';
import translationTH from './th.json';

//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN
  },
  th: {
    translation: translationTH
  }
};

//i18N Initialization
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || process.env.REACT_APP_DEFAULT_LANGUAGE, //default language: Thailand
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
