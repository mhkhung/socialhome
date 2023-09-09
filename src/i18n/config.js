import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import 'moment/min/locales';


const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  detection: DETECTION_OPTIONS,
  fallbackLng: 'zh-HK',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    'zh-HK': {
      translations: require('./locales/zh-HK/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false
  },
});

i18n.languages = ['en', 'zh-HK'];

export default i18n;
