import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import fr from './fr.json';
import pt from './pt.json';

export const SUPPORTED_LANGS = ['en', 'fr', 'pt'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export function isLang(value: string | undefined): value is Lang {
  return !!value && (SUPPORTED_LANGS as readonly string[]).includes(value);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, fr, pt },
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    nonExplicitSupportedLngs: true, // pt-BR, fr-FR, en-GB → pt / fr / en
    ns: ['common', 'home', 'products', 'institutional', 'pages', 'csma'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
      // URL path is the source of truth; localStorage/navigator only seed the
      // initial redirect from "/" to "/{lang}".
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
  });

export default i18n;
