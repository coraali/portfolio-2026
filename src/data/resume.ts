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
    "後轉職前端工程師，主力以 Vue 生態系開發，專注於產品前後台系統開發、功能實作、頁面還原與體驗優化。",
    "擅長獨立解決問題、快速學習新工具，同時擁有跨部門溝通、產品設計思維與危機處理能力。",
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
      items: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "RWD 響應式設計",
        "jQuery",
      ],
    },
    {
      category: "工具與工程",
      note: "版本控制、測試與協作",
      items: [
        "Vite",
        "Git / GitHub / GitLab",
        "Jest",
        "RESTful API",
        "WebSocket",
        "GitHub Copilot、Claude Code",
      ],
    },
    {
      category: "設計工具",
      items: ["Photoshop", "Illustrator", "Word / PowerPoint / Excel"],
    },
  ],
  experiences: [
    {
      company: "圍棋人科技股份有限公司",
      role: "Frontend Developer",
      period: "2025/08 – 現在",
      current: true,
      summary:
        "回任前端開發團隊，負責產品前後台的前端開發與維護，以 Vue 為主要框架，專注於功能實作、頁面還原與體驗優化。",
      highlights: [
        "使用 Vue 2 / Vue 3（含 Nuxt.js SSR）開發與維護前端功能。",
        "負責響應式網頁（RWD）開發，處理跨裝置、跨瀏覽器相容性問題。",
        "串接 API，完成即時資料與互動功能。",
        "穩定交付多項前端功能迭代，配合PM、設計師與後端完成需求落地。",
        "使用 Git / GitHub 進行版本控制與多人協作（PR、branch workflow）。",
        "採用 AI 工具（Copilot、Claude Code）輔助尋找範例、生成程式碼片段與建議重構，提高除錯與測試撰寫效率。",
      ],
      tags: ["Vue", "Nuxt", "Pinia", "Vuex", "Jira", "JavaScript", "GitHub"],
    },
    {
      company: "澳洲打工度假",
      role: "背包客",
      period: "2023/08 – 2025/08",
      summary:
        "把握最後機會前往澳洲，在不同環境中工作與生活兩年，培養獨立適應力、跨文化溝通與抗壓能力。",
      highlights: ["語言學校", "各種工廠廠包裝", "雪山度假村餐廳前台"],
      tags: ["海外經歷", "英文環境", "抗壓"],
    },
    {
      company: "圍棋人科技股份有限公司",
      role: "Frontend Developer",
      period: "2020/11 – 2023/07",
      summary:
        "首次任職期間（共 2 年 9 個月），奠定 Vue 開發基礎，獨立完成功能開發與問題排查。",
      highlights: [
        "基本前端技術，包含但不限於：Javascript,CSS/CSS3,HTML。",
        "使用 Vue 2 開發與維護前端功能。",
        "部門採用 Scrum 開發模式 ( jira )",
        "使用 Git / GitHub 進行版本控制與多人協作（PR、branch workflow）。",
        "使用 MJML 來解決 Email 切版與 CSS 支援度的問題",
        "全新專案撰寫單元測試 ( jest )。",
        "金流串接 ( paynow、微信 )",
        "使用 ECharts 將資訊圖表化",
        "套件應用 wgo, lodash, bootstrap, element UI, moment.js, dayjs ...",
        "技術研究、分享 ( vite、tauri )",
        "穩定交付多項前端功能迭代，配合 PM、設計師與後端完成需求落地。",
        "擅長在既有流程下獨立解決問題、快速學習新工具。",
      ],
      tags: ["Vue", "Nuxt", "Vuex", "Jira", "JavaScript", "GitHub", "Jest"],
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
        "於廣告後期製作公司（主要為遊戲項目）擔任創意企劃、執行製片，公司自由度高，培養獨立思考與臨場反應。",
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
        "於自由行部門擔任線控的職務，負責成本控管、資源蒐集、商品設計、銷售、廣告行銷、市場動態、教育訓練、客訴處理等與產品銷售相關之內容",
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
        "於英雄聯盟遊戲營運部校園推廣組擔任行銷企劃的職務，負責校園電競賽事規劃、推廣，業餘活動規劃與異業合作，公告及宣傳文案撰寫，開發尋找客戶（學生）並維持良好關係",
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
        "使用 React + Vite + TypeScript 開發，含深淺色切換、i18n 語系切換、RWD，並透過 GitHub Actions 自動跑測試、Vercel 自動部署。",
      tags: ["React", "Vite", "TypeScript", "i18n", "CI/CD"],
      featured: true,
      repo: "https://github.com/coraali/portfolio-2026",
    },
    {
      title: "黑嘉嘉圍棋教室",
      description:
        "圍棋線上教學跨平台 App 前端開發，使用 Vue 2 + Vuex + Capacitor 以單一程式碼庫交付 Web / iOS / Android 三端；參與多項功能模組（課程、AI 對弈、即時對戰、天梯排位、個人選單、模擬檢定、師生管理等）的開發與維護，並以 Socket.io 實作即時互動、vue-i18n 支援多國國語系。",
      tags: [
        "Vue 2",
        "Vuex",
        "Vue Router",
        "WebSocket",
        "vue-i18n",
        "SCSS / Bootstrap-Vue",
        "Jest",
        "Serverless API 串接",
      ],
      website: "https://app.heijiajia.com.tw/",
    },
    {
      title: "後台系統",
      description:
        "以 Vue 3 + Element Plus 開發後台，參與帳號管理、視覺化銷售頁編輯器、電商商品與數據報表等多項業務模組的開發與維護；採用 auto-import 自動引入、AWS S3 上傳、callLambda Serverless API 等架構規範，維持大型專案的一致性與可維護性",
      tags: [
        "Vue 3",
        "Composition API",
        "Pinia",
        "Element Plus",
        "Vite",
        "i18n",
        "WebSocket",
        "RESTful API",
        "AWS S3",
      ],
    },
    {
      title: "黑嘉嘉圍棋官方網站",
      description:
        "公司對外官網由兩個前端專案組成，透過 Nginx 反向代理整合於同一網域：行銷／課程介紹站採 Nuxt 2 SSR 以利 SEO 與行銷追蹤；其他頁面採 Vue 2 SPA，提供會員、金流等功能。負責從需求拆解、UI 切版、API 串接的前端開發與維護，包含多語系、RWD、SEO meta 與行銷追蹤埋點（GA4 / GTM / Facebook Pixel）。",
      tags: [
        "Nuxt 2 (SSR)",
        "Vue 2",
        "Vuex",
        "Vue Router",
        "vue-i18n / @nuxtjs/i18n",
        "Bootstrap Vue",
        "SCSS",
        "Swiper",
        "GA4 / GTM / Facebook Pixel",
        "SEO / OG meta",
        "Nginx",
        "RWD",
      ],
      website: "https://www.heijiajia.com.tw/",
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
    "I studied Information Technology & Management, with several years of hands-on experience in event planning and project management.",
    "Later I moved into frontend engineering. I work mainly with Vue, building both the user-facing and admin sides of products — turning designs into working pages and improving the user experience.",
    "I'm good at solving problems on my own and picking up new tools quickly, and I bring cross-team communication, a product-design mindset, and a calm way of handling unexpected issues.",
    "I enjoy coming up with ideas and trying new things, and I want to keep improving my skills while staying curious and eager to learn.",
  ],
  skillGroups: [
    {
      category: "Frontend Frameworks",
      note: "Primary development stack",
      items: ["Vue 2", "Vue 3", "Nuxt.js (SSR)", "Pinia", "Composition API"],
    },
    {
      category: "Languages & Fundamentals",
      items: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "RWD (Responsive)",
        "jQuery",
      ],
    },
    {
      category: "Tools & Engineering",
      note: "Version control, testing & collaboration",
      items: [
        "Vite",
        "Git / GitHub / GitLab",
        "Jest",
        "RESTful API",
        "WebSocket",
        "GitHub Copilot, Claude Code",
      ],
    },
    {
      category: "Design Tools",
      items: ["Photoshop", "Illustrator", "Word / PowerPoint / Excel"],
    },
  ],
  experiences: [
    {
      company: "Goer",
      role: "Frontend Developer",
      period: "2025/08 – Present",
      current: true,
      summary:
        "Rejoined the frontend team to build and maintain both customer-facing and admin products with Vue, focusing on feature delivery, building pages that match the designs, and cross-device experience.",
      highlights: [
        "Built and maintained frontend features with Vue 2 / Vue 3 (incl. Nuxt.js SSR).",
        "Owned responsive (RWD) development, handling cross-device and cross-browser compatibility issues.",
        "Integrated APIs to deliver real-time data and interactive features.",
        "Consistently shipped frontend feature iterations, working with PMs, designers and the backend team to get requirements shipped.",
        "Used Git / GitHub for version control and team collaboration (PRs, branch workflow).",
        "Adopted AI tools (Copilot, Claude Code) to find examples, generate snippets and suggest refactors, improving debugging and test-writing efficiency.",
      ],
      tags: ["Vue", "Nuxt", "Pinia", "Vuex", "Jira", "JavaScript", "GitHub"],
    },
    {
      company: "Working Holiday in Australia",
      role: "Backpacker",
      period: "2023/08 – 2025/08",
      summary:
        "Took my last chance to head to Australia, living and working across different environments for two years — building adaptability, cross-cultural communication and resilience.",
      highlights: [
        "Language school",
        "Packing at various factories",
        "Ski-resort restaurant front of house",
      ],
      tags: ["Overseas experience", "English environment", "Resilience"],
    },
    {
      company: "Goer",
      role: "Frontend Developer",
      period: "2020/11 – 2023/07",
      summary:
        "My first time at the company (2 yrs 9 mos) — built my Vue foundation and delivered features and fixes independently.",
      highlights: [
        "Solid frontend fundamentals: JavaScript, HTML, CSS / CSS3.",
        "Built and maintained frontend features with Vue 2.",
        "Worked in a Scrum team (Jira).",
        "Used Git / GitHub for version control and team collaboration (PRs, branch workflow).",
        "Used MJML to handle HTML-email layout and CSS-compatibility issues.",
        "Wrote unit tests (Jest) for new projects.",
        "Payment integration (PayNow, WeChat Pay).",
        "Turned data into charts with ECharts.",
        "Worked with libraries such as wgo, lodash, Bootstrap, Element UI, moment.js and dayjs.",
        "Researched and shared new tech internally (Vite, Tauri).",
        "Consistently shipped frontend feature iterations, working with PMs, designers and the backend team to get requirements shipped.",
        "Skilled at solving problems independently within existing processes and learning new tools fast.",
      ],
      tags: ["Vue", "Nuxt", "Vuex", "Jira", "JavaScript", "GitHub", "Jest"],
    },
    {
      company: "NaturalTEL",
      role: "Frontend Engineer",
      period: "2020/03 – 2020/11",
      summary:
        "Worked on a Java-based project where the frontend and backend weren't separated; mainly handled HTML/CSS markup.",
      highlights: ["Built pages from design mockups (HTML/CSS)."],
      tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      company: "ICimage",
      role: "Creative Planner",
      period: "2018/08 – 2019/08",
      summary:
        "Creative planner and line producer at a post-production studio (mainly gaming projects); a high-autonomy environment that sharpened independent thinking and quick response.",
      highlights: [
        "Pitched live-action / animation scripts and wrote copy.",
        "Took part in actual shoots and production work.",
        "Learned crew coordination, shoot planning and interpersonal skills.",
      ],
      tags: ["Planning", "Scriptwriting", "Production"],
    },
    {
      company: "Best Tour",
      role: "Deputy Product Supervisor",
      period: "2017/06 – 2018/08",
      summary:
        "Route planner in the FIT (free independent travel) division, responsible for cost control, sourcing, product design, sales, advertising and marketing, market analysis, staff training and customer-complaint handling — the full scope of product sales.",
      highlights: [
        "Owned route product design, packaging, listing, sales and maintenance, with cost calculation and margin control.",
        "Sourced and maintained relationships with airlines, hotels and suppliers.",
        "Drove sales through B2B / B2C newsletters, printed flyers and the official site, adjusting strategy to market trends.",
      ],
      tags: ["Product design", "Cost control", "Marketing"],
    },
    {
      company: "Garena Taiwan",
      role: "Marketing Specialist",
      period: "2015/07 – 2017/03",
      summary:
        "Marketing specialist on the League of Legends campus-outreach team (game operations), responsible for collegiate esports event planning and promotion, amateur-event planning and cross-brand partnerships, writing announcements and promotional copy, and building lasting relationships with student communities.",
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
        "Built with React + Vite + TypeScript, featuring light/dark themes, i18n language switching and RWD — with automated tests via GitHub Actions and auto-deploy on Vercel.",
      tags: ["React", "Vite", "TypeScript", "i18n", "CI/CD"],
      featured: true,
      repo: "https://github.com/coraali/portfolio-2026",
    },
    {
      title: "HJJ GO",
      description:
        "Frontend development for a cross-platform online Go-learning app, using Vue 2 + Vuex + Capacitor to ship Web / iOS / Android from a single codebase. Built and maintained many feature modules (courses, AI matches, real-time matches, ladder ranking, personal menu, mock certification, teacher–student management, and more), with real-time interaction via Socket.io and multi-language support via vue-i18n.",
      tags: [
        "Vue 2",
        "Vuex",
        "Vue Router",
        "WebSocket",
        "vue-i18n",
        "SCSS / Bootstrap-Vue",
        "Jest",
        "Serverless API integration",
      ],
      website: "https://app.heijiajia.com.tw/",
    },
    {
      title: "HJJ GO(Admin System)",
      description:
        "Built an admin platform with Vue 3 + Element Plus, contributing to modules such as account management, a visual sales-page editor, e-commerce products and data reports. Followed architecture conventions like auto-import, AWS S3 uploads and callLambda serverless APIs to keep a large project consistent and maintainable.",
      tags: [
        "Vue 3",
        "Composition API",
        "Pinia",
        "Element Plus",
        "Vite",
        "i18n",
        "WebSocket",
        "RESTful API",
        "AWS S3",
      ],
    },
    {
      title: "HJJ GO Official Website",
      description:
        "The company's public site is made up of two frontend projects integrated under one domain via an Nginx reverse proxy: the marketing / course-intro site uses Nuxt 2 SSR for SEO and marketing tracking, while other pages use a Vue 2 SPA for members, payments and more. I handled frontend development and maintenance — from breaking down requirements and building the UI to API integration — including i18n, RWD, SEO meta and marketing tracking (GA4 / GTM / Facebook Pixel).",
      tags: [
        "Nuxt 2 (SSR)",
        "Vue 2",
        "Vuex",
        "Vue Router",
        "vue-i18n / @nuxtjs/i18n",
        "Bootstrap Vue",
        "SCSS",
        "Swiper",
        "GA4 / GTM / Facebook Pixel",
        "SEO / OG meta",
        "Nginx",
        "RWD",
      ],
      website: "https://www.heijiajia.com.tw/",
    },
  ],
};

/** 兩種語言的履歷內容，由 useResume() 依目前語言選用 */
export const resumeContent = { zh, en };
