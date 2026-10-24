---
title: Sezar Şifrəsi
type: concept
tags:
  - kriptoqrafiya
  - klassik-sifrler
  - surusdurme-sifresi
  - sezar
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Caesar Cipher
  - Shift Cipher
  - Sürüşdürmə Şifrəsi
---

# Sezar Şifrəsi (Caesar Cipher)

**Sezar şifrəsi** tarixdə məlum olan ən qədim və ən sadə simmetrik əvəzetmə şifrlərindən biridir. E.ə. I əsrdə Roma imperatoru [[Julius Caesar]] tərəfindən hərbi yazışmalar üçün istifadə edilmişdir ($k = 3$).

---

## 📐 Riyazi Modeli

$\mathcal{P} = \mathcal{C} = \mathcal{K} = \mathbb{Z}_{26}$ (ingilis əlifbası üçün).

- **Şifrləmə Funksiyası:**
  $$e_k(x) = (x + k) \bmod 26$$

- **Deşifrləmə Funksiyası:**
  $$d_k(y) = (y - k) \bmod 26$$

burada $x \in \{0, 1, \dots, 25\}$ açıq mətn hərfinin indeksi, $y \in \{0, 1, \dots, 25\}$ şifrəli mətn indeksi, $k \in \{0, 1, \dots, 25\}$ isə gizli açardır.

### Nümunə ($k = 3$):

- Mətn: `HELLO`
  - `H` (7) $\to (7+3)\bmod 26 = 10 \to$ `K`
  - `E` (4) $\to (4+3)\bmod 26 = 7 \to$ `H`
  - `L` (11) $\to (11+3)\bmod 26 = 14 \to$ `O`
  - `L` (11) $\to 14 \to$ `O`
  - `O` (14) $\to (14+3)\bmod 26 = 17 \to$ `R`
- Şifrə: `KHOOR`

---

## 🔓 Kriptoanaliz və Zəifliklər

Sezar şifrəsi müasir standartlara görə tamamilə qeyri-təhlükəsizdir:

1. **Açar Fəzasının Kiçikliyi (Brute-Force Hücumu):**
   - $|\mathcal{K}| = 26$. $k=0$ mətni dəyişməz saxladığından, cəmi **25** mümkün açar qalır.
   - Hücumçu şifrəli mətni 25 fərqli $k$ qiymətinə görə sürüşdürərək mənalı mətni gözlə və ya lüğət axtarışı ilə dərhal tapır.
2. **Statistik Analiz ([[Tezlik Analizi]]):**
   - Şifrəli mətndə ən çox rast gəlinən hərf müəyyən edilir (məsələn, ingilis dilində `E`).
   - Əgər ən çox təkrarlanan hərf `H` olarsa: $k = (H - E) = 7 - 4 = 3$.

---

## 🔗 Əlaqəli Səhifələr

- [[Julius Caesar]]
- [[Modul Arifmetika]]
- [[Affin Şifrəsi]]
- [[Monoalfabetik Əvəzetmə Şifrələri]]
- [[Tezlik Analizi]]
- [[Kriptosistem Beşliyi]]
