# 🌐 Kripto-Kurs: İnteraktiv Veb Tətbiq (GitHub Pages)

[![Live Website](https://img.shields.io/badge/Canlı_Sayt-kripto--kurs.github.io-success?style=for-the-badge&logo=googlechrome&logoColor=white)](https://kripto-kurs.github.io)
[![Organization](https://img.shields.io/badge/GitHub-Kripto--Kurs-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Kripto-Kurs)
[![Source Repo](https://img.shields.io/badge/Mənbə_Reposu-Kripto--Kurs-blue?style=for-the-badge&logo=github)](https://github.com/Kripto-Kurs/Kripto-Kurs)
[![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-blueviolet?style=for-the-badge&logo=pwa&logoColor=white)](https://kripto-kurs.github.io)
[![MathJax](https://img.shields.io/badge/LaTeX-MathJax%203-orange?style=for-the-badge&logo=latex&logoColor=white)](https://kripto-kurs.github.io)
[![License](https://img.shields.io/badge/Lisenziya-CC%20BY--NC%204.0-lightgrey?style=for-the-badge)](https://creativecommons.org/licenses/by-nc/4.0/)

Bu repozitoriya **Kriptoqrafiya və Blokçeyn Kursunun** rəsmi interaktiv **Single Page Application (SPA)** veb tətbiqinin mənbə kodlarını və GitHub Pages üzərindən avtomatik deploy olunan canlı saytı ehtiva edir.

> [!TIP]
> **Canlı Sayt:** [kripto-kurs.github.io](https://kripto-kurs.github.io) — birbaşa brauzerdə açın, heç bir quraşdırma tələb olunmur.

---

## ✨ Əsas Xüsusiyyətlər

| Xüsusiyyət | Təsvir |
| :--- | :--- |
| 📖 **30 Mühazirə + 4 Əlavə** | Tam akademik kriptoqrafiya kursu — klassik şifrlərdən post-kvant kriptoqrafiyaya qədər |
| 🧮 **MathJax v3 Riyazi Render** | LaTeX düsturları brauzerdə səliqəli render olunur (inline və display math) |
| ⚡ **Anında Yüklənmə** | Bütün mühazirələr `lectures_bundle.js` daxilində paketlənib — 0ms gecikmə |
| 📱 **PWA & Offline Rejim** | Service Worker keşlənməsi ilə internet olmadan da tam işləyir |
| 🔍 **Hash Router Naviqasiya** | URL-əsaslı SPA naviqasiyası, dərin keçidlər və tarixçə dəstəyi |
| 📚 **674 Elmi Arayış** | Strukturlaşdırılmış BibTeX verilənlər bazası ilə istinad sistemi |
| 🎨 **Akademik Dizayn** | Responsive CSS3 Grid/Flexbox, işıqlı mövzu, mobil uyğunluq |

---

## 🗂️ Ekosistem Strukturu

Bu veb tətbiq **Kripto-Kurs** təşkilatının iki əsas repozitoriyasından biridir:

| Repozitoriya | Məqsəd |
| :--- | :--- |
| 🌐 **Bu repo** ([Kripto-Kurs.github.io](https://github.com/Kripto-Kurs/Kripto-Kurs.github.io)) | Canlı veb tətbiq — GitHub Pages ilə avtomatik deploy |
| 📚 [Kripto-Kurs](https://github.com/Kripto-Kurs/Kripto-Kurs) | Əsas mənbə kodları, LaTeX/Pandoc materialları, Obsidian bilik bazası |

---

## 🛠️ Texnoloji Yığın

- **Frontend:** Vanilla JavaScript SPA (framework-siz)
- **Riyazi Render:** MathJax v3 (LaTeX və MathML)
- **Dizayn:** Responsive CSS3 Grid/Flexbox, akademik tipografiya
- **PWA:** Service Worker, Web App Manifest, offline keşləmə
- **Hostinq:** GitHub Pages + GitHub Actions CI/CD
- **Yönləndirmə:** `kripto-kurs.vercel.app` → `kripto-kurs.github.io` (307 redirect)

---

## 🚀 Lokal İnkişaf

```bash
# Repozitoriyanı klonlayın
git clone https://github.com/Kripto-Kurs/Kripto-Kurs.github.io.git
cd Kripto-Kurs.github.io

# Python ilə lokal server işə salın
python3 -m http.server 8080

# və ya Node.js ilə
npx serve -l 8080 .
```

🌐 **Açın:** [http://localhost:8080](http://localhost:8080)

---

## 📜 Lisenziya

Materiallar **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** lisenziyası altında yayılır. Təhsildə və qeyri-kommersiya məqsədilə istifadəsi sərbəstdir.
