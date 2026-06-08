# 從零開始部署這個網站（新手完整教學）

這份文件假設你**完全沒部署過**，會一步步帶你把網站放到網路上，並設定好「每次更新都自動上線」。全程免費。

讀完你會擁有三樣東西：

1. 一個公開的 GitHub repo（程式碼放這裡，也是面試官會看的地方）
2. 一個真正的網址（例如 `cora-li.vercel.app`）
3. 一條自動化流程：**你改完 → push → 自動測試 → 自動上線**

---

## 先搞懂幾個名詞

在動手前，花兩分鐘建立直覺，後面會順很多。

- **Git**：裝在你電腦上的「版本控制工具」。它幫你記錄每一次的修改，可以隨時回到舊版本。
- **GitHub**：放 Git 專案的雲端網站。你把本機的程式碼「推（push）」上去，別人（和面試官）就能看到。
- **CI（持續整合）**：每次你 push，伺服器自動幫你跑檢查（lint、測試、build）。有錯會馬上告訴你，避免把壞掉的程式碼上線。這份專案用 **GitHub Actions** 做。
- **CD（持續部署）**：檢查通過後，自動把網站更新到線上。這份專案交給 **Vercel** 做。
- **CI/CD pipeline**：上面兩件事串起來的整條自動化流程。`.github/workflows/ci.yml` 就是你的 pipeline，面試時可以直接打開講。

一句話總結整個流程：

> 你在電腦改 code → `git push` → GitHub Actions 自動測試 → Vercel 自動部署 → 網址上的網站就更新了。

---

## 步驟 0：安裝工具（只需做一次）

1. **安裝 Node.js**：到 <https://nodejs.org/> 下載 LTS 版本，一路下一步安裝。
   裝好後打開終端機（Mac 用「終端機」，Windows 用「PowerShell」），輸入確認：
   ```bash
   node -v   # 看到版本號（例如 v20.x.x）就成功
   ```
2. **安裝 Git**：到 <https://git-scm.com/downloads> 下載安裝。確認：
   ```bash
   git -v
   ```
3. **註冊 GitHub 帳號**：<https://github.com/>（建議用你的求職 email）。

---

## 步驟 1：在本機跑起來，確認沒問題

打開終端機，切換到這個專案資料夾（把路徑換成你實際的位置）：

```bash
cd 你的專案資料夾路徑
npm install     # 安裝套件，第一次會花一點時間
npm run dev     # 啟動開發伺服器
```

瀏覽器打開 `http://localhost:5173`，應該就能看到你的網站。
看完按終端機的 `Ctrl + C` 結束。

> 想改內容？打開 `src/data/resume.ts` 改文字，存檔後畫面會即時更新。

---

## 步驟 2：把專案變成 Git repo 並推到 GitHub

### 2-1 在 GitHub 建立一個空的 repo

1. 登入 GitHub，右上角 **＋ → New repository**。
2. Repository name 填例如 `portfolio` 或 `cora-li`。
3. 設為 **Public**（公開，面試官才看得到）。
4. **不要**勾選 Add README / .gitignore（專案裡已經有了）。
5. 按 **Create repository**。

建立後 GitHub 會給你一段指令，先別急，照下面做。

### 2-2 在本機初始化並推上去

回到終端機，確認你在專案資料夾內，依序輸入：

```bash
git init                       # 把資料夾變成 git repo
git add .                      # 把所有檔案加入追蹤
git commit -m "初始化作品集網站"   # 建立第一個版本（commit）
git branch -M main             # 主分支命名為 main
git remote add origin https://github.com/你的帳號/你的repo名.git
git push -u origin main        # 推到 GitHub
```

> 第一次 push 會要你登入 GitHub。若跳出帳密驗證失敗，最簡單的方式是安裝 **GitHub Desktop**（<https://desktop.github.com/>）用它登入並 push，圖形介面對新手更友善。

重新整理 GitHub 上的 repo 頁面，應該能看到所有檔案了。

### 2-3 確認 CI 有跑起來

點開 repo 上方的 **Actions** 分頁，你會看到一個正在跑（或已完成）的 **CI** 流程。
這就是 `.github/workflows/ci.yml` 在自動幫你 lint + test + build。
全部通過會顯示綠色 ✓——這代表你的程式碼是健康的。

---

## 步驟 3：用 Vercel 部署上線

1. 到 <https://vercel.com/>，點 **Sign Up**，選 **Continue with GitHub**（用 GitHub 帳號登入最方便）。
2. 登入後點 **Add New… → Project**。
3. 找到你剛剛的 repo，按 **Import**。
4. Vercel 會自動偵測到這是 Vite 專案，設定不用改，直接按 **Deploy**。
5. 等大約一分鐘，看到 🎉 畫面，就部署成功了！

Vercel 會給你一個網址，像 `https://你的repo名.vercel.app`。打開就是你的線上履歷。
把這個網址放到你的 LinkedIn、履歷 PDF、求職信裡。

---

## 步驟 4：體驗自動部署（重點！）

現在魔法來了。試著改一行字：

1. 打開 `src/data/resume.ts`，改一下 `tagline`。
2. 在終端機輸入：
   ```bash
   git add .
   git commit -m "更新自我介紹"
   git push
   ```
3. 什麼都不用做。GitHub Actions 自動跑測試 → Vercel 自動重新部署。
   一兩分鐘後重新整理你的網址，改動就上線了。

**這就是 CI/CD。** 以後你只要 `git push`，網站就會自動更新。

> **Pull Request 預覽**：之後若你開新分支改東西、發 PR，Vercel 還會自動生成一個「預覽網址」讓你先看效果，確認沒問題再合併到 main。這也是業界常見做法，面試很加分。

---

## 進階：把網站連結填回專案

部署成功後，建議回頭補這兩個地方，網站會更完整：

1. 打開 `src/data/resume.ts`，把 `profile.github` 填成你的 repo 網址，`projects` 裡「本作品集網站」的 `repo` 也填上。
2. 存檔 → `git add . && git commit -m "補上連結" && git push`，自動上線。

---

## 常見問題

**Q：Actions 出現紅色 ✗？**
點進去看是哪一步失敗。通常是 lint 或 test 沒過。先在本機跑 `npm run lint` 和 `npm test` 找出問題、修好再 push。這正是 CI 的價值——在上線前先擋下錯誤。

**Q：可以用自己的網域嗎？**
可以。在 Vercel 專案的 **Settings → Domains** 加入你買的網域，照指示設定 DNS 即可。

**Q：免費方案夠用嗎？**
個人作品集綽綽有餘。GitHub 公開 repo、GitHub Actions、Vercel Hobby 方案都免費。

---

有任何一步卡住，把錯誤訊息貼給我，我幫你看。
