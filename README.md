# NTNU Trans Hub

Information hub for NTNU transfer / change-of-major students.

## Overview

師大轉學生聯會（NTNU Transfer Student Association）資訊整合網站。免會費學生社團，整理轉學生／轉系生最常需要的學分抵免、選課時程、跨校區交通、在地生活資源與常見問題。

## Problem / Motivation

轉學生／轉系生在入學初期最常見的困難是「資訊分散」：學分抵免規則、選課時程、跨校區交通、在地生活資源分別散落在不同單位與公告，沒有一個整理過的入口。這個網站把轉聯會日常整理的資訊集中成一個可搜尋、可維護的網站。

## Key Features

- 學分抵免、選課時程、跨校區交通、在地生活資源、常見問題整理
- 內容集中管理於單一資料檔，標示「待確認」的內容代表查無官方公開依據，避免憑空填入未經查證的規定
- 純靜態網站，push 到 `main` 即自動部署

## My Role

負責整個網站的規劃、開發與內容整理，同時擔任師大轉學生聯會會長，網站內容依據會內實際整理的資訊建立。

## 技術棧

React + Vite + Tailwind CSS，純靜態網站，部署於 GitHub Pages。

## 開發

```bash
npm install
npm run dev       # 本地開發伺服器
npm run build     # 產出 dist/ 靜態檔案
npm run preview   # 預覽 build 結果
```

## 部署

`main` 分支 push 後，`.github/workflows/deploy.yml` 會自動 build 並部署到 GitHub Pages。
首次啟用請至 repo → Settings → Pages → Build and deployment → Source 選擇 **GitHub Actions**。

## 內容維護

所有文案集中在 [`src/data/content.js`](src/data/content.js)。標示「待確認」的內容代表目前查無官方公開依據，請直接更新該檔案，勿在頁面上憑空填入未經查證的規定。
