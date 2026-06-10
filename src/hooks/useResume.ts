import { useTranslation } from "react-i18next";
import { resumeContent } from "../data/resume";
import type { ResumeContent } from "../types";

/**
 * 依目前語言回傳對應的履歷內容（中／英）。
 * 元件用法：const { experiences, projects, about } = useResume();
 * 語言一切換，i18n 觸發重繪，這裡就回傳另一份內容。
 */
export function useResume(): ResumeContent {
  const { i18n } = useTranslation();
  return i18n.language.startsWith("en") ? resumeContent.en : resumeContent.zh;
}
