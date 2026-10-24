---
title: Modul Arifmetika
type: concept
tags:
  - riyaziyyat
  - modul-arifmetika
  - saylar-nezeriyyesi
  - kriptoqrafiya
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Modular Arithmetic
  - Saat Arifmetikası
  - Qalıqlı Bölmə
---

# Modul Arifmetika (Modular Arithmetic)

**Modul arifmetika** (və ya *saat arifmetikası*) sonlu ədədlər çoxluğu üzərində aparılan və müasir/klassik kriptoqrafiyanın riyazi əsasını təşkil edən sistemdir.

---

## 1. Konqruensiya Tərifi

Verilmiş $m \ge 1$ tam ədədi (modul) üçün, əgər $(a - b)$ fərqi $m$-ə tam bölünürsə ($m \mid (a - b)$), $a$ və $b$ ədədləri **$m$ moduluna görə müqayisəli (konqruyent)** adlanır:

$$a \equiv b \pmod{m}$$

Bu o deməkdir ki, $a$ və $b$ ədədlərinin $m$-ə bölünməsindən alınan qalıqlar eynidir:
$$a \bmod m = b \bmod m$$

---

## 2. Modul Toplama və Çıxma

Kriptoqrafiyada əlifba simvolları tam ədədlərə inikası olunur ($\text{A} \mapsto 0, \text{B} \mapsto 1, \dots, \text{Z} \mapsto 25$):

- **Toplama:** $(x + y) \bmod m$
- **Çıxma:** $(x - y) \bmod m = (x - y + k \cdot m) \bmod m$ (mənfi ədədlərdən qaçmaq üçün modul əlavə edilir)

---

## 3. Ən Böyük Ortaq Bölən (ƏBOB) və Qarşılıqlı Sadəlik

İki tam ədəd $a$ və $m$ üçün əgər $\gcd(a, m) = 1$ olarsa, $a$ və $m$ **qarşılıqlı sadə** adlanır.
Əks halda $\gcd(a, m) = d > 1$ olduqda, həmin ədədlərin ortaq vuruğu mövcuddur.

---

## 4. Modul Multiplikativ Tərs Element

Bir $a$ ədədinin $m$ moduluna görə **multiplikativ tərsi** elə bir $a^{-1}$ (və ya $x$) tam ədədidir ki:

$$a \cdot a^{-1} \equiv 1 \pmod{m}$$

### ⚠️ Zəruri və Kafi Teorem

> $a \in \mathbb{Z}_m$ ədədinin $m$ moduluna görə multiplikativ tərs elementinin ($a^{-1}$) mövcud olması üçün **zəruri və kafi şərt** $\gcd(a, m) = 1$ olmasıdır.

### Modul 26 üçün Tərs Elementlər Cədvəli

26 ədədi üçün $26 = 2 \times 13$-dür. Deməli, 2-yə və 13-ə bölünməyən tək ədədlər $\mathbb{Z}_{26}^*$ qrupuna daxildir (cəmi $\phi(26) = 12$ ədəd):

| $a$ | Tərs Element $a^{-1} \pmod{26}$ | Yoxlama: $(a \cdot a^{-1}) \bmod 26$ |
| :---: | :---: | :---: |
| **1** | **1** | $1 \times 1 = 1 \equiv 1$ |
| **3** | **9** | $3 \times 9 = 27 \equiv 1$ |
| **5** | **21** | $5 \times 21 = 105 \equiv 1$ |
| **7** | **15** | $7 \times 15 = 105 \equiv 1$ |
| **9** | **3** | $9 \times 3 = 27 \equiv 1$ |
| **11** | **19** | $11 \times 19 = 209 \equiv 1$ |
| **15** | **7** | $15 \times 7 = 105 \equiv 1$ |
| **17** | **23** | $17 \times 23 = 391 \equiv 1$ |
| **19** | **11** | $19 \times 11 = 209 \equiv 1$ |
| **21** | **5** | $21 \times 5 = 105 \equiv 1$ |
| **23** | **17** | $23 \times 17 = 391 \equiv 1$ |
| **25** | **25** | $25 \times 25 = 625 \equiv 1$ |

*Qeyd:* Cüt ədədlərin ($a = 2, 4, 6, \dots$) və $a = 13$-ün modul 26-da tərsi yoxdur. Məsələn, $2 \cdot x \pmod{26}$ həmişə cütdür və heç vaxt 1 ola bilməz.

---

## 🔗 Əlaqəli Səhifələr

- [[Sezar Şifrəsi]]
- [[Affin Şifrəsi]]
- [[Kriptosistem Beşliyi]]
- [[Summary - Mühazirə 2 (Klassik Şifrələr və Modul Arifmetika)]]
