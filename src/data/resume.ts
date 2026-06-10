import type { Profile, ResumeContent } from "../types";

// ─────────────────────────────────────────────────────────────
// 個人識別資料（不隨語言改變）— 改這裡更新姓名、聯絡方式
// ─────────────────────────────────────────────────────────────
export const profile: Profile = {
  name: "李珮瑜",
  nameEn: "Cora",
  title: "Frontend Developer",
  location: "Taiwan",
  email: "love820522@gmail.com",
  linkedin: "https://www.linkedin.com/in/cora-li-53420a244/",
  github: "https://github.com/coraali",
  // TODO：若想提供 PDF 履歷下載，把檔案放到 public/ 後填入路徑，例如 '/cora-li-resume.pdf'
  resumePdf: "",
};

// ─────────────────────────────────────────────────────────────
// 履歷內容（中文版）
// ─────────────────────────────────────────────────────────────
const zh: ResumeContent = {
  tagline: "今天你也Coding了嗎？",
  about: [
    "資訊科技與管理學系畢業，多年活動企劃與專案管理實務經驗。",
    "後轉職前端工程師，主力以 Vue 生態系開發，專注於前後台系統開發、擅長功能實作、頁面還原與跨裝置體驗優化。",
    "擅長獨立解決問題、快速掌握新工具，同時擁有跨部門溝通、產品設計思維與危機處理能力。",
    "喜歡發想、挑戰不同事物，期許自己持續精進技術，同時保持好奇心與學習熱忱。",
  ],
  skillGroups: [
    {
      category: "前端框架",
      note: "主要開發框架",
      items: ["Vue 2", "Vue 3", "Nuxt.js (SSR)", "Pinia", "Composition API"],
    },
    {
      category: "語言與基礎",
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "RWD 響應式設計", "jQuery"],
    },
    {
      category: "工具與工程",
      note: "版本控制、測試與協作",
      items: ["Vite", "Git / GitHub", "Jest", "RESTful API", "WebSocket", "AI 編程工具 (Codex)"],
    },
    {
      category: "設計工具",
      items: ["Photoshop", "Illustrator", "Word / PowerPoint / Excel"],
    },
    {
      category: "正在學習",
      note: "這個作品集網站就是用 React 打造的",
      items: ["React", "CI/CD (GitHub Actions)"],
    },
  ],
  experiences: [
    {
      company: "圍棋人科技股份有限公司",
      role: "Frontend Developer",
      period: "2025/08 – 現在",
      current: true,
      summary:
        "回任前端開發團隊，負責產品前後台的前端開發與維護，以 Vue 為主要框架，專注功能實作、頁面還原與跨裝置體驗優化。",
      highlights: [
        "使用 Vue 2 / Vue 3（含 Nuxt.js SSR）開發與維護前端功能，參與 Vue 2 向 Vue 3 的專案適配與測試。",
        "負責響應式網頁（RWD）開發，處理跨裝置、跨瀏覽器相容性問題。",
        "串接 RESTful API 與 WebSocket，完成即時資料與互動功能。",
        "撰寫單元測試（Jest）並修復前端 bug，以 unit test + CI / PR review 流程維持程式碼品質。",
        "導入 AI 編程工具（Codex）協助搜尋範例、產出程式片段與重構建議，提升除錯與撰寫測試效率。",
      ],
      tags: ["Vue 3", "Nuxt", "Pinia", "Jest", "RWD", "WebSocket"],
    },
    {
      company: "澳洲打工度假",
      role: "背包客",
      period: "2023/08 – 2025/08",
      summary:
        "兩年海外經歷，在不同環境中工作與生活，培養獨立適應力、跨文化溝通與抗壓能力。",
      highlights: ["牛肉廠包裝", "雪山度假村餐廳前台", "培根場包裝"],
      tags: ["海外經歷", "英文環境", "抗壓"],
    },
    {
      company: "圍棋人科技股份有限公司",
      role: "Frontend Developer",
      period: "2020/11 – 2023/07",
      summary:
        "首次任職期間（共 2 年 9 個月），奠定 Vue 開發基礎，以個人 contributor 為主，獨立完成功能開發與問題排查。",
      highlights: [
        "參與金流串接（PayNow、WeChat Pay）與第三方登入（Google、Apple）功能實作。",
        "使用 Git / GitHub 進行版本控制與多人協作（PR、branch workflow）。",
        "穩定交付多項前端功能迭代，配合 designer 與後端完成需求落地。",
        "擅長在既有流程下獨立解決問題、快速學習新工具。",
      ],
      tags: ["Vue 2", "金流串接", "OAuth", "Git"],
    },
    {
      company: "自然互動科技有限公司",
      role: "前端工程師",
      period: "2020/03 – 2020/11",
      summary: "開發以 Java 為主、前後端尚未分離的專案，主要負責切版工作。",
      highlights: ["負責頁面切版與還原設計稿。"],
      tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      company: "奇亨創意影像有限公司",
      role: "創意企劃",
      period: "2018/08 – 2019/08",
      summary:
        "於廣告後期製作公司（主要為遊戲類別）擔任創意企劃，公司自由度高，培養獨立思考與臨場反應。",
      highlights: [
        "實拍／動畫腳本提案、文案發想。",
        "參與實際拍攝與製片工作。",
        "學習人員統籌、拍攝規劃與待人處事。",
      ],
      tags: ["企劃", "腳本", "製片"],
    },
    {
      company: "喜鴻旅行社",
      role: "線控副主任",
      period: "2017/06 – 2018/08",
      summary:
        "於自由行部門擔任線控，負責成本控管、資源蒐集、商品設計、銷售與行銷等產品全流程。",
      highlights: [
        "負責線路產品設計、包裝、上架、銷售與維護，並進行成本計算與利潤控管。",
        "蒐集並維護航空公司、飯店、供應商等資源關係。",
        "透過 B2B / B2C 電子報、DM、官網等管道曝光銷售，並依市場動態擬定對應策略。",
      ],
      tags: ["產品設計", "成本控管", "行銷"],
    },
    {
      company: "台灣競舞娛樂有限公司 (Garena)",
      role: "行銷企劃專員",
      period: "2015/07 – 2017/03",
      summary:
        "於《英雄聯盟》校園推廣組擔任行銷企劃，負責校園電競賽事規劃、推廣與異業合作。",
      highlights: [
        "撰寫線上活動網頁企劃，與設計、技術部門合作協助網頁上線與維護。",
        "參與官方年度賽事「校際盃」的賽事規劃、宣傳影片腳本與線上／線下執行。",
        "推動異業合作（RedBull、Twitch）與多場實體電競活動規劃執行。",
      ],
      tags: ["行銷企劃", "活動執行", "電競"],
    },
  ],
  projects: [
    {
      title: "本作品集網站",
      description:
        "你正在看的這個網站。使用 React + Vite + TypeScript 從零打造，含深淺色切換、i18n 中英雙語、scroll-reveal 進場動畫與完整 RWD，並透過 GitHub Actions 自動跑測試、Vercel 自動部署。",
      tags: ["React", "Vite", "TypeScript", "i18n", "CI/CD"],
      featured: true,
      // TODO：填入此 repo 的 GitHub 網址
      repo: "",
    },
    {
      title: "Vue 2 → Vue 3 專案遷移",
      description:
        "參與既有產品由 Vue 2 升級至 Vue 3 的適配與測試，處理 Composition API 改寫、相依套件相容性與回歸測試，確保功能在升級後維持穩定。",
      tags: ["Vue 2", "Vue 3", "Migration", "Jest"],
    },
    {
      title: "金流與第三方登入串接",
      description:
        "實作 PayNow、WeChat Pay 金流流程，以及 Google、Apple 第三方登入（OAuth），串接後端 API 並處理各種付款與登入的邊界狀況。",
      tags: ["PayNow", "WeChat Pay", "OAuth", "RESTful API"],
    },
    {
      title: "即時互動功能",
      description:
        "以 WebSocket 完成即時資料更新與互動功能，並針對跨裝置、跨瀏覽器做相容性處理與體驗優化。",
      tags: ["WebSocket", "RWD", "Vue"],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 履歷內容（英文版）
// 註：公司英文名為合理譯名，請依官方名稱核對後替換。
// ─────────────────────────────────────────────────────────────
const en: ResumeContent = {
  tagline: "Have you coded today?",
  about: [
    "Graduated in Information Technology & Management, with several years of hands-on experience in event planning and project management.",
    "Later transitioned into frontend engineering, working primarily in the Vue ecosystem on both customer-facing and admin systems — focused on feature implementation, pixel-perfect UI and cross-device experience.",
    "Strong at solving problems independently and picking up new tools quickly, paired with cross-functional communication, product-design thinking and a level head under pressure.",
    "I enjoy ideating and taking on new challenges, and I'm committed to keep sharpening my craft while staying curious and eager to learn.",
  ],
  skillGroups: [
    {
      category: "Frontend Frameworks",
      note: "Primary development stack",
      items: ["Vue 2", "Vue 3", "Nuxt.js (SSR)", "Pinia", "Composition API"],
    },
    {
      category: "Languages & Fundamentals",
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "RWD (Responsive)", "jQuery"],
    },
    {
      category: "Tools & Engineering",
      note: "Version control, testing & collaboration",
      items: ["Vite", "Git / GitHub", "Jest", "RESTful API", "WebSocket", "AI coding tools (Codex)"],
    },
    {
      category: "Design Tools",
      items: ["Photoshop", "Illustrator", "Word / PowerPoint / Excel"],
    },
    {
      category: "Currently Learning",
      note: "This very portfolio is built with React",
      items: ["React", "CI/CD (GitHub Actions)"],
    },
  ],
  experiences: [
    {
      company: "Goer Technology",
      role: "Frontend Developer",
      period: "2025/08 – Present",
      current: true,
      summary:
        "Rejoined the frontend team to build and maintain both customer-facing and admin products with Vue, focusing on feature delivery, faithful UI implementation and cross-device experience.",
      highlights: [
        "Built and maintained frontend features with Vue 2 / Vue 3 (incl. Nuxt.js SSR), and took part in adapting and testing the Vue 2 → Vue 3 migration.",
        "Owned responsive (RWD) development, handling cross-device and cross-browser compatibility issues.",
        "Integrated RESTful APIs and WebSocket to deliver real-time data and interactive features.",
        "Wrote unit tests (Jest) and fixed frontend bugs, keeping code quality high through a unit-test + CI / PR-review workflow.",
        "Adopted AI coding tools (Codex) to find examples, generate snippets and suggest refactors, improving debugging and test-writing efficiency.",
      ],
      tags: ["Vue 3", "Nuxt", "Pinia", "Jest", "RWD", "WebSocket"],
    },
    {
      company: "Working Holiday in Australia",
      role: "Working Holidaymaker",
      period: "2023/08 – 2025/08",
      summary:
        "Two years living and working abroad across different environments, building adaptability, cross-cultural communication and resilience.",
      highlights: ["Beef factory packing", "Ski-resort restaurant front desk", "Bacon factory packing"],
      tags: ["Overseas experience", "English environment", "Resilience"],
    },
    {
      company: "Goer Technology",
      role: "Frontend Developer",
      period: "2020/11 – 2023/07",
      summary:
        "First tenure (2 yrs 9 mos) — laid my Vue foundation, working mainly as an individual contributor to deliver features and troubleshoot independently.",
      highlights: [
        "Implemented payment integrations (PayNow, WeChat Pay) and third-party login (Google, Apple).",
        "Used Git / GitHub for version control and team collaboration (PRs, branch workflow).",
        "Consistently shipped frontend feature iterations, working with designers and backend to land requirements.",
        "Skilled at solving problems independently within existing processes and learning new tools fast.",
      ],
      tags: ["Vue 2", "Payments", "OAuth", "Git"],
    },
    {
      company: "Natural Interaction Technology",
      role: "Frontend Engineer",
      period: "2020/03 – 2020/11",
      summary:
        "Worked on a Java-based project without a separated frontend/backend, mainly responsible for markup and styling.",
      highlights: ["Built page markup and reproduced design mockups."],
      tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      company: "Qiheng Creative Image",
      role: "Creative Planner",
      period: "2018/08 – 2019/08",
      summary:
        "Creative planner at a post-production studio (mainly gaming projects); a high-autonomy environment that sharpened independent thinking and quick response.",
      highlights: [
        "Pitched live-action / animation scripts and developed copy.",
        "Took part in actual shoots and production work.",
        "Learned crew coordination, shoot planning and interpersonal skills.",
      ],
      tags: ["Planning", "Scriptwriting", "Production"],
    },
    {
      company: "Hsihong Travel",
      role: "Deputy Product Supervisor",
      period: "2017/06 – 2018/08",
      summary:
        "Product planning for the FIT (free independent travel) division — owning cost control, sourcing, product design, sales and marketing across the full product lifecycle.",
      highlights: [
        "Owned route product design, packaging, listing, sales and maintenance, with cost calculation and margin control.",
        "Sourced and maintained relationships with airlines, hotels and suppliers.",
        "Drove sales through B2B / B2C newsletters, DMs and the official site, adjusting strategy to market dynamics.",
      ],
      tags: ["Product design", "Cost control", "Marketing"],
    },
    {
      company: "Garena Taiwan",
      role: "Marketing Specialist",
      period: "2015/07 – 2017/03",
      summary:
        "Marketing specialist on the League of Legends campus-outreach team, owning collegiate esports event planning, promotion and cross-brand partnerships.",
      highlights: [
        "Wrote online campaign-page plans and worked with design and engineering to launch and maintain pages.",
        "Contributed to the official annual 'Campus Cup' — event planning, promo video scripts and online/offline execution.",
        "Drove cross-brand partnerships (RedBull, Twitch) and planned multiple in-person esports events.",
      ],
      tags: ["Marketing", "Event execution", "Esports"],
    },
  ],
  projects: [
    {
      title: "This Portfolio Website",
      description:
        "The site you're looking at. Built from scratch with React + Vite + TypeScript, featuring light/dark themes, EN/ZH i18n, scroll-reveal animations and full RWD — with automated tests via GitHub Actions and auto-deploy on Vercel.",
      tags: ["React", "Vite", "TypeScript", "i18n", "CI/CD"],
      featured: true,
      repo: "",
    },
    {
      title: "Vue 2 → Vue 3 Migration",
      description:
        "Helped adapt and test an existing product's upgrade from Vue 2 to Vue 3 — rewriting to the Composition API, resolving dependency compatibility and running regression tests to keep features stable post-upgrade.",
      tags: ["Vue 2", "Vue 3", "Migration", "Jest"],
    },
    {
      title: "Payments & Third-party Login",
      description:
        "Implemented PayNow and WeChat Pay flows plus Google / Apple third-party login (OAuth), integrating backend APIs and handling the various edge cases of payment and sign-in.",
      tags: ["PayNow", "WeChat Pay", "OAuth", "RESTful API"],
    },
    {
      title: "Real-time Interactive Features",
      description:
        "Delivered real-time data updates and interactive features over WebSocket, with cross-device / cross-browser compatibility handling and experience tuning.",
      tags: ["WebSocket", "RWD", "Vue"],
    },
  ],
};

/** 兩種語言的履歷內容，由 useResume() 依目前語言選用 */
export const resumeContent = { zh, en };
