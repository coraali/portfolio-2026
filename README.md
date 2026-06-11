# 李珮瑜 Cora Li — 前端作品集網站

以 **React + Vite + TypeScript** 打造的個人履歷／作品集網站。
含深淺色與語系切換、進場動畫與完整 RWD，並透過 GitHub Actions 自動測試、Vercel 自動部署。

## 技術重點

- **React 18 + Vite 5 + TypeScript**（strict 模式）
- 內容與畫面分離：所有履歷資料集中在 `src/data/resume.ts`
- 自製 hooks：`useTheme`（深淺色 + 記憶）、`useScrollReveal`（IntersectionObserver）、`useResume` (履歷支援語系切換)
- 無障礙：語意化標籤、skip link、`prefers-reduced-motion`、鍵盤 focus 樣式
- 測試：Vitest + Testing Library
- CI/CD：GitHub Actions（lint / test / build）+ Vercel 自動部署

## 如何修改內容

幾乎所有文字都在 **`src/data/resume.ts`**，分成四區：

| 區塊     | 變數          | 說明                                          |
| -------- | ------------- | --------------------------------------------- |
| 個人資料 | `profile`     | 姓名、職稱、自我介紹、Email、LinkedIn、GitHub |
| 技能     | `skillGroups` | 依類別分組的技能標籤                          |
| 工作經歷 | `experiences` | 時間軸，由新到舊                              |
| 專案     | `projects`    | 作品卡片                                      |

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
