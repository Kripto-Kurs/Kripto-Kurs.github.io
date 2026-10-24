---
title: LFSR və Axın Şifrələri
type: concept
tags:
  - kriptoqrafiya
  - axin-sifresi
  - lfsr
  - prng
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_6.html]]"
aliases:
  - Linear Feedback Shift Register
  - LFSR
  - Axın Şifrələri
---

# LFSR və Axın Şifrələri (Linear Feedback Shift Registers)

**Axın şifrəsi (Stream Cipher)** — açıq mətnin hər bir bitini ($m_i$) deterministik psevdo-təsadüfi açar axınının (keystream) bitləri ilə ($k_i$) XOR edərək şifrələyən sistemdir:

$$c_i = m_i \oplus k_i, \quad m_i = c_i \oplus k_i$$

---

## ⚙️ LFSR Struktur və Riyazi Modeli

**LFSR (Linear Feedback Shift Register)** — $n$ ədəd 1-bitlik xanadan ibarət sürüşmə reqistridir. Hər taktda yeni daxil olan bit əvvəlki bitlərin xətti funksiyası (XOR cəmi) kimi hesablanır:

$$s_{t+n} = \sum_{i=1}^n c_i \cdot s_{t+n-i} \pmod 2$$

- **Əlaqə Çoxhədlisi (Feedback Polynomial):**
  $$C(D) = 1 + c_1 D + c_2 D^2 + \dots + c_n D^n$$
- **Maksimal Period Teoremi:** Əgər $C(D)$ çoxhədlisi $GF(2)$ üzərində **primitiv çoxhədlidirsə**, LFSR-in çıxış ardıcıllığı maksimum mümkün **$2^n - 1$** perioda malik olur (m-ardıcıllıq / m-sequence).

---

## ⚠️ Kriptoqrafik Zəiflik və Berlekamp-Massey Alqoritmi

Təkbaşına LFSR kriptoqrafik baxımdan **qeyri-təhlükəsizdir**:
- **Xətti Mürəkkəblik (Linear Complexity):** Berlekamp-Massey alqoritmi göstərir ki, hücumçu çıxış ardıcıllığının cəmi **$2n$ sayda ardıcıl bitini** bildikdə, bütün əlaqə çoxhədlisini və gizli daxili vəziyyəti asanlıqla bərpa edir.
- **Həll:** Müasir axın şifrlərində (məsələn, [[Trivium və ChaCha20|Trivium]] və A5/1) bir neçə LFSR qeyri-xətti məntiqi qapılarla (AND/OR/XOR) birləşdirilir və ya tam qeyri-xətti NLFSR strukturları tətbiq olunur.

---

## 🔗 Əlaqəli Səhifələr

- [[Trivium və ChaCha20]]
- [[One-Time Pad və Mükəmməl Gizlilik]]
- [[Claude Shannon]]
