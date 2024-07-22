import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ENLogin from "./en/login/login.en.json";
import ESLogin from "./es/login/login.es.json";
import ESRegister from "./es/register/register.es.json";
import ENRegister from "./en/register/register.en.json";
import ENCommon from "./en/common.en.json";
import ESCommon from "./es/common.es.json";

const resources = {
  en: {
    register: ENRegister,
    login: ENLogin,
    common: ENCommon,
  },
  es: {
    register: ESRegister,
    login: ESLogin,
    common: ESCommon,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;