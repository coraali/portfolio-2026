import { useTranslation } from "react-i18next";

export default function LangToggle() {
  const { i18n } = useTranslation();
  const isZh = i18n.language.startsWith("zh");

  return (
    <button
      type="button"
      className="theme-toggle" // 直接沿用你現成的圓鈕樣式
      onClick={() => i18n.changeLanguage(isZh ? "en" : "zh")}
      aria-label={isZh ? "Switch to English" : "切換為中文"}
    >
      {isZh ? "EN" : "中"}
    </button>
  );
}
