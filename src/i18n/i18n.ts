import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENLogin from "./en/login/login.en.json";
import ESLogin from "./es/login/login.es.json";
import ENCommon from "./en/common.en.json";
import ESCommon from "./es/common.es.json";

const resources = {
  en: {
    login: ENLogin,
    common: ENCommon,
  },
  es: {
    login: ESLogin,
    common: ESCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

export default i18n;
