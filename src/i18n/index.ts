import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

i18n
  .use(LanguageDetector) // 偵測 / 記住語言
  .use(initReactI18next) // 接上 React
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
    },
    fallbackLng: "zh", // 找不到時用中文
    interpolation: { escapeValue: false }, // React 本身已防 XSS
    detection: {
      order: ["localStorage", "navigator"], // 先看存過的選擇，再看瀏覽器語言
      caches: ["localStorage"],
    },
  });

// 切語言時同步更新 <html lang="...">，對 SEO 和無障礙都重要
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng === "zh" ? "zh-Hant" : "en";
});

export default i18n;
