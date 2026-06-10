# 李珮瑜 Cora Li — 前端作品集網站

以 **React + Vite + TypeScript** 打造的個人履歷／作品集網站。極簡專業風格，含深淺色切換、scroll-reveal 進場動畫與完整 RWD，並透過 GitHub Actions 自動測試、Vercel 自動部署。

> 完整的「從零開始部署教學（給新手）」請看 [DEPLOY.md](./DEPLOY.md)。

## 技術重點

- **React 18 + Vite 5 + TypeScript**（strict 模式）
- 內容與畫面分離：所有履歷資料集中在 `src/data/resume.ts`
- 自製 hooks：`useTheme`（深淺色 + 記憶）、`useScrollReveal`（IntersectionObserver）
- 無障礙：語意化標籤、skip link、`prefers-reduced-motion`、鍵盤 focus 樣式
- 測試：Vitest + Testing Library
- CI/CD：GitHub Actions（lint / test / build）+ Vercel 自動部署

## 在本機執行

需先安裝 [Node.js](https://nodejs.org/)（建議 20 以上）。

```bash
npm install      # 安裝套件（第一次才需要）
npm run dev      # 開發模式，瀏覽器開 http://localhost:5173
```

其他指令：

```bash
npm run build    # 打包正式版到 dist/
npm run preview  # 預覽打包後的結果
npm run lint     # 程式碼風格檢查
npm test         # 跑單元測試
```

## 如何修改內容

幾乎所有文字都在 **`src/data/resume.ts`**，分成四區：

| 區塊 | 變數 | 說明 |
| --- | --- | --- |
| 個人資料 | `profile` | 姓名、職稱、自我介紹、Email、LinkedIn、GitHub |
| 技能 | `skillGroups` | 依類別分組的技能標籤 |
| 工作經歷 | `experiences` | 時間軸，由新到舊 |
| 專案 | `projects` | 作品卡片 |

改完存檔，`npm run dev` 會即時更新。

檔案裡標了幾個 `TODO`，建議優先補上：

- `profile.github`：建好 GitHub repo 後填網址，右上角與聯絡區會出現 GitHub 連結
- `profile.resumePdf`：把 PDF 放到 `public/` 後填路徑（例如 `/cora-li-resume.pdf`），聯絡區會出現「下載履歷」
- `projects[].repo` / `link`：填上可公開的原始碼或 demo 連結

## 專案結構

```
src/
├─ data/resume.ts      ← 履歷內容（中英雙語）
├─ i18n/               ← i18next 設定與 locales（介面文字）
├─ types.ts            ← 資料型別定義
├─ hooks/              ← useTheme、useScrollReveal、useResume
├─ components/         ← 各區塊元件
├─ App.tsx             ← 組裝所有區塊
├─ main.tsx            ← 進入點
├─ index.scss          ← 全站樣式（SCSS）＋ CSS 變數（主題切換）
└─ styles/_variables.scss ← SCSS 變數與響應式 mixin
```
