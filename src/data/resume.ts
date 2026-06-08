import type { Profile, SkillGroup, Experience, Project } from '../types'

// ─────────────────────────────────────────────────────────────
// 個人資料 — 改這裡就會更新整個網站
// ─────────────────────────────────────────────────────────────
export const profile: Profile = {
  name: '李珮瑜',
  nameEn: 'Cora Li',
  title: 'Frontend Developer',
  tagline: '企劃轉前端，專注把需求穩穩落地成好用的介面。',
  about: [
    '資訊科技與管理學系畢業，畢業後從事企劃與行銷相關工作，於 2020 年 11 月轉職為前端工程師。',
    '主力以 Vue 生態系開發，擅長功能實作、頁面還原與跨裝置體驗優化，習慣以 unit test 與 PR review 維持程式碼品質。',
    '喜歡發想、挑戰不同事物，學習力快速、反應能力好，期許自己在這條路上持續精進、提升技術能力。',
  ],
  location: 'Taiwan',
  email: 'cora@goer.live',
  linkedin: 'https://www.linkedin.com/in/cora-li-53420a244/',
  // TODO：建好 GitHub repo 後，把網址填到這裡，網站右上角就會出現 GitHub 連結
  github: '',
  // TODO：若想提供 PDF 履歷下載，把檔案放到 public/ 後填入路徑，例如 '/cora-li-resume.pdf'
  resumePdf: '',
}

// ─────────────────────────────────────────────────────────────
// 技能 — 依類別分組
// ─────────────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    category: '前端框架',
    note: '主要開發框架',
    items: ['Vue 2', 'Vue 3', 'Nuxt.js (SSR)', 'Pinia', 'Composition API'],
  },
  {
    category: '語言與基礎',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'RWD 響應式設計', 'jQuery'],
  },
  {
    category: '工具與工程',
    note: '版本控制、測試與協作',
    items: ['Vite', 'Git / GitHub', 'Jest', 'RESTful API', 'WebSocket', 'AI 編程工具 (Codex)'],
  },
  {
    category: '設計工具',
    items: ['Photoshop', 'Illustrator', 'Word / PowerPoint / Excel'],
  },
  {
    category: '正在學習',
    note: '這個作品集網站就是用 React 打造的',
    items: ['React', 'CI/CD (GitHub Actions)'],
  },
]

// ─────────────────────────────────────────────────────────────
// 工作經驗 — 由新到舊
// ─────────────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    company: '圍棋人科技股份有限公司',
    role: 'Frontend Developer',
    period: '2025/08 – 現在',
    current: true,
    summary:
      '回任前端開發團隊，負責產品前後台的前端開發與維護，以 Vue 為主要框架，專注功能實作、頁面還原與跨裝置體驗優化。',
    highlights: [
      '使用 Vue 2 / Vue 3（含 Nuxt.js SSR）開發與維護前端功能，參與 Vue 2 向 Vue 3 的專案適配與測試。',
      '負責響應式網頁（RWD）開發，處理跨裝置、跨瀏覽器相容性問題。',
      '串接 RESTful API 與 WebSocket，完成即時資料與互動功能。',
      '撰寫單元測試（Jest）並修復前端 bug，以 unit test + CI / PR review 流程維持程式碼品質。',
      '導入 AI 編程工具（Codex）協助搜尋範例、產出程式片段與重構建議，提升除錯與撰寫測試效率。',
    ],
    tags: ['Vue 3', 'Nuxt', 'Pinia', 'Jest', 'RWD', 'WebSocket'],
  },
  {
    company: '澳洲打工度假',
    role: '背包客',
    period: '2023/08 – 2025/08',
    summary:
      '兩年海外經歷，在不同環境中工作與生活，培養獨立適應力、跨文化溝通與抗壓能力。',
    highlights: ['牛肉廠包裝', '雪山度假村餐廳前台', '培根場包裝'],
    tags: ['海外經歷', '英文環境', '抗壓'],
  },
  {
    company: '圍棋人科技股份有限公司',
    role: 'Frontend Developer',
    period: '2020/11 – 2023/07',
    summary:
      '首次任職期間（共 2 年 9 個月），奠定 Vue 開發基礎，以個人 contributor 為主，獨立完成功能開發與問題排查。',
    highlights: [
      '參與金流串接（PayNow、WeChat Pay）與第三方登入（Google、Apple）功能實作。',
      '使用 Git / GitHub 進行版本控制與多人協作（PR、branch workflow）。',
      '穩定交付多項前端功能迭代，配合 designer 與後端完成需求落地。',
      '擅長在既有流程下獨立解決問題、快速學習新工具。',
    ],
    tags: ['Vue 2', '金流串接', 'OAuth', 'Git'],
  },
  {
    company: '自然互動科技有限公司',
    role: '前端工程師',
    period: '2020/03 – 2020/11',
    summary:
      '開發以 Java 為主、前後端尚未分離的專案，主要負責切版工作。',
    highlights: ['負責頁面切版與還原設計稿。'],
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
  {
    company: '奇亨創意影像有限公司',
    role: '創意企劃',
    period: '2018/08 – 2019/08',
    summary:
      '於廣告後期製作公司（主要為遊戲類別）擔任創意企劃，公司自由度高，培養獨立思考與臨場反應。',
    highlights: [
      '實拍／動畫腳本提案、文案發想。',
      '參與實際拍攝與製片工作。',
      '學習人員統籌、拍攝規劃與待人處事。',
    ],
    tags: ['企劃', '腳本', '製片'],
  },
  {
    company: '喜鴻旅行社',
    role: '線控副主任',
    period: '2017/06 – 2018/08',
    summary:
      '於自由行部門擔任線控，負責成本控管、資源蒐集、商品設計、銷售與行銷等產品全流程。',
    highlights: [
      '負責線路產品設計、包裝、上架、銷售與維護，並進行成本計算與利潤控管。',
      '蒐集並維護航空公司、飯店、供應商等資源關係。',
      '透過 B2B / B2C 電子報、DM、官網等管道曝光銷售，並依市場動態擬定對應策略。',
    ],
    tags: ['產品設計', '成本控管', '行銷'],
  },
  {
    company: '台灣競舞娛樂有限公司 (Garena)',
    role: '行銷企劃專員',
    period: '2015/07 – 2017/03',
    summary:
      '於《英雄聯盟》校園推廣組擔任行銷企劃，負責校園電競賽事規劃、推廣與異業合作。',
    highlights: [
      '撰寫線上活動網頁企劃，與設計、技術部門合作協助網頁上線與維護。',
      '參與官方年度賽事「校際盃」的賽事規劃、宣傳影片腳本與線上／線下執行。',
      '推動異業合作（RedBull、Twitch）與多場實體電競活動規劃執行。',
    ],
    tags: ['行銷企劃', '活動執行', '電競'],
  },
]

// ─────────────────────────────────────────────────────────────
// 代表性專案
// 說明：以下卡片整理自實際工作內容，公司專案多為私有，
// 面試時可口頭／螢幕分享。請依需要替換成可公開的 demo 與 repo 連結。
// ─────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: '本作品集網站',
    description:
      '你正在看的這個網站。使用 React + Vite + TypeScript 從零打造，含深淺色切換、scroll-reveal 進場動畫與完整 RWD，並透過 GitHub Actions 自動跑測試、Vercel 自動部署。',
    tags: ['React', 'Vite', 'TypeScript', 'CI/CD'],
    featured: true,
    // TODO：填入此 repo 的 GitHub 網址
    repo: '',
  },
  {
    title: 'Vue 2 → Vue 3 專案遷移',
    description:
      '參與既有產品由 Vue 2 升級至 Vue 3 的適配與測試，處理 Composition API 改寫、相依套件相容性與回歸測試，確保功能在升級後維持穩定。',
    tags: ['Vue 2', 'Vue 3', 'Migration', 'Jest'],
  },
  {
    title: '金流與第三方登入串接',
    description:
      '實作 PayNow、WeChat Pay 金流流程，以及 Google、Apple 第三方登入（OAuth），串接後端 API 並處理各種付款與登入的邊界狀況。',
    tags: ['PayNow', 'WeChat Pay', 'OAuth', 'RESTful API'],
  },
  {
    title: '即時互動功能',
    description:
      '以 WebSocket 完成即時資料更新與互動功能，並針對跨裝置、跨瀏覽器做相容性處理與體驗優化。',
    tags: ['WebSocket', 'RWD', 'Vue'],
  },
]
