// 整個網站用到的資料型別都集中在這裡。
// 內容（resume.ts）與畫面（components）分離，之後只要改資料就好。

/** 不隨語言改變的個人識別資料 */
export interface Profile {
  name: string;
  nameEn: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github?: string;
  resumePdf?: string;
}

export interface SkillGroup {
  category: string;
  /** 這組技能想傳達的一句話 */
  note?: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  /** 用來排序 / 標示「現職」 */
  current?: boolean;
  summary?: string;
  highlights: string[];
  /** 這份工作用到的關鍵字標籤 */
  tags?: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** 線上連結（demo / 作品），沒有就不顯示按鈕 */
  link?: string;
  /** 原始碼連結 */
  repo?: string;
  /** 網站連結 */
  website?: string;
  /** 標示這是「本網站」這類特別的卡片 */
  featured?: boolean;
}

/** 會隨語言切換的履歷內容（中英各一份，型別相同） */
export interface ResumeContent {
  tagline: string;
  about: string[];
  skillGroups: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
}
