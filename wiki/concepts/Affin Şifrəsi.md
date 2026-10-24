---
title: Affin Şifrəsi
type: concept
tags:
  - kriptoqrafiya
  - klassik-sifrler
  - affin-sifresi
  - modul-arifmetika
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Affine Cipher
  - Xətti Şifrə
---

# Affin Şifrəsi (Affine Cipher)

**Affin şifrəsi** monoalfabetik əvəzetmə şifrələrinin xüsusi bir növüdür. O, [[Sezar Şifrəsi|Sezar şifrəsini]] vurma və toplama əməliyyatlarını xətti funksiyada birləşdirərək ümumiləşdirir.

---

## 📐 Riyazi Təsviri

- **Açıq və Şifrəli Mətn Fəzası:** $\mathcal{P} = \mathcal{C} = \mathbb{Z}_{26}$
- **Açar:** $k = (a, b)$ cütü, burada:
  - $a \in \mathbb{Z}_{26}^*$ (yəni $\gcd(a, 26) = 1$)
  - $b \in \mathbb{Z}_{26}$

### Şifrləmə Funksiyası:

$$e_{(a,b)}(x) = (a \cdot x + b) \bmod 26$$

### Deşifrləmə Funksiyası:

Deşifrləmə üçün tənliyi $x$-ə görə həll edirik:
$$y \equiv a \cdot x + b \pmod{26}$$
$$y - b \equiv a \cdot x \pmod{26}$$
Hər iki tərəfi $a$-nın modul tərs elementinə ($a^{-1}$) vururuq:
$$d_{(a,b)}(y) = a^{-1} \cdot (y - b) \bmod 26$$

---

## ⚠️ $a$ Parametrinə Qoyulan Şərt

Əgər $\gcd(a, 26) \ne 1$ olarsa (məsələn, $a = 2, 4, 13$), şifrləmə funksiyası inyektiv olmur — iki fərqli açıq hərf eyni şifrəli hərfə çevrilir və birmənalı deşifrləmə qeyri-mümkün olur.

Buna görə $a$ yalnız aşağıdakı 12 qiymətdən birini ala bilər:
$$a \in \{1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25\}$$

---

## 🔢 Açar Fəzasının Ölçüsü

- $a$ parametri üçün 12 mümkün qiymət
- $b$ parametri üçün 26 mümkün qiymət

$$|\mathcal{K}| = \phi(26) \times 26 = 12 \times 26 = 312$$

*(Qeyd: $a=1$ olduqda Affin şifrəsi birbaşa Sezar şifrəsinə çevrilir).*

---

## 🔓 Kriptoanaliz

Affin şifrəsi çox zəifdir və iki fərqli yolla asanlıqla sındırılır:

### 1. Tam Axtarış (Brute-Force Attack)

Cəmi 312 açar kombinasiyası mövcud olduğundan kompüter saniyənin mində birində bütün açarları yoxlayır.

### 2. Məlum Açıq Mətn Hücumu (Known-Plaintext Attack - KPA)

Cəmi **2 hərf cütü** məlum olduqda ($x_1 \to y_1$ və $x_2 \to y_2$), iki dəyişənli xətti tənliklər sistemi qurulur:
$$\begin{cases} a \cdot x_1 + b \equiv y_1 \pmod{26} \\ a \cdot x_2 + b \equiv y_2 \pmod{26} \end{cases}$$
Tərəf-tərəfə çıxaraq:
$$a(x_1 - x_2) \equiv (y_1 - y_2) \pmod{26}$$
$$a = (y_1 - y_2) \cdot (x_1 - x_2)^{-1} \bmod 26$$
Sonra $b = (y_1 - a \cdot x_1) \bmod 26$ tapılır və bütün şifrə açılır.

---

## 🔗 Əlaqəli Səhifələr

- [[Modul Arifmetika]]
- [[Sezar Şifrəsi]]
- [[Monoalfabetik Əvəzetmə Şifrələri]]
- [[Tezlik Analizi]]
- [[Təhdid Modelləri]]
