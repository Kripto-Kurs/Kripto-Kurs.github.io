---
title: "Summary - Mühazirə 2: Klassik Şifrələr və Modul Arifmetika"
type: summary
tags:
  - kriptoqrafiya
  - klassik-sifrler
  - modul-arifmetika
  - tezlik-analizi
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Mühazirə 2 Xülasəsi
  - Klassik Şifrələr Xülasəsi
---

# Mühazirə 2: Klassik Şifrələr və Modul Arifmetika — Mənbə Xülasəsi

Bu sənəd [[raw/Mühazirə_2.html]] mühazirə qeydlərinin, klassik əvəzetmə şifrlərinin, modul riyazi aparatın və tezlik analizi metodlarının strukturlaşdırılmış xülasəsidir.

---

## 📌 Əsas Mövzular və Bölmələr

### 1. Kriptosistemin Formal Tərifi

Bax: [[Kriptosistem Beşliyi]]
Kriptosistem beşlik kimi formalaşdırılır:
$$(\mathcal{P}, \mathcal{C}, \mathcal{K}, \mathcal{E}, \mathcal{D})$$
- $\mathcal{P}$: Bütün mümkün açıq mətnlər çoxluğu
- $\mathcal{C}$: Bütün mümkün şifrəli mətnlər çoxluğu
- $\mathcal{K}$: Açar fəzası
- $\mathcal{E}$: Şifrləmə funksiyaları çoxluğu $\{E_k : k \in \mathcal{K}\}$
- $\mathcal{D}$: Deşifrləmə funksiyaları çoxluğu $\{D_k : k \in \mathcal{K}\}$
- Düzgünlük şərti: $\forall k \in \mathcal{K}, \forall m \in \mathcal{P}: D_k(E_k(m)) = m$

### 2. Əvəzetmə və Yerdəyişmə Şifrləri

- **Əvəzetmə (Substitution)**: Simvollar digər simvollarla əvəz olunur (məsələn, Sezar, Affin, monoalfabetik).
- **Yerdəyişmə (Transposition / Permutation)**: Simvollar dəyişmir, yalnız onların mövqeləri permutasiya olunur (məsələn, Skitala).

### 3. Modul Arifmetikanın Əsasları

Bax: [[Modul Arifmetika]]
- Konqruensiya: $a \equiv b \pmod{m} \iff m \mid (a - b)$
- Modul tərs element: $a \cdot a^{-1} \equiv 1 \pmod{m}$. Tərs elementin mövcud olması üçün zəruri və kafi şərt: $\gcd(a, m) = 1$.
- Modul 26-da tərsi olan $a$ əmsalları (cəmi 12 ədəd): $\{1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25\}$.

### 4. Sezar Şifrəsi

Bax: [[Sezar Şifrəsi]]
- Şifrləmə: $e_k(x) = (x + k) \pmod{26}$
- Deşifrləmə: $d_k(y) = (y - k) \pmod{26}$
- Açar fəzası: $|\mathcal{K}| = 26$ (praktik olaraq 25 qeyri-trivial açar).
- Zəiflik: Tam axtarış (brute-force) ilə saniyələr içində sındırılır.

### 5. Affin Şifrəsi

Bax: [[Affin Şifrəsi]]
- Şifrləmə: $e_{a,b}(x) = (a \cdot x + b) \pmod{26}$
- Deşifrləmə: $d_{a,b}(y) = a^{-1} \cdot (y - b) \pmod{26}$
- Açar fəzası: $|\mathcal{K}| = \phi(26) \times 26 = 12 \times 26 = 312$.
- Zəiflik: Açar fəzası çox kiçikdir (312 açar), həm tam axtarışa, həm də 2 hərf cütü bilindikdə xətti tənliklər sistemi ilə KPA hücumuna qarşı həssasdır.

### 6. Ümumi Monoalfabetik Əvəzetmə Şifrələri

Bax: [[Monoalfabetik Əvəzetmə Şifrələri]]
- Açar: Əlifbanın ixtiyari permutasiyası $\pi$.
- Açar fəzası: $|\mathcal{K}| = 26! \approx 4.03 \times 10^{26}$ (təxminən 88-bit təhlükəsizlik).
- Paradoks: Böyük açar fəzasına baxmayaraq, təbii dilin statistik strukturu qorunduğu üçün [[Tezlik Analizi]] ilə asanlıqla sındırılır.

### 7. Tezlik Analizi və Kriptoanaliz

Bax: [[Tezlik Analizi]]
- İlk dəfə 9-cu əsrdə ərəb alimi [[Al-Kindi]] tərəfindən kəşf edilmişdir.
- İngilis dilində ən çox rast gəlinən tək hərflər: **E** (~12.7%), **T** (~9.1%), **A** (~8.2%), **O** (~7.5%), **I** (~7.0%), **N** (~6.7%).
- Ən çox rast gəlinən diqramlar: `TH`, `HE`, `IN`, `ER`, `AN`, `RE`.
- Ən çox rast gəlinən triqramlar: `THE`, `AND`, `THA`, `ENT`, `ION`.

---

## 🔗 Əlaqəli Wiki Səhifələri

- [[Kriptosistem Beşliyi]]
- [[Modul Arifmetika]]
- [[Sezar Şifrəsi]]
- [[Affin Şifrəsi]]
- [[Monoalfabetik Əvəzetmə Şifrələri]]
- [[Tezlik Analizi]]
- [[Al-Kindi]]
- [[Julius Caesar]]
- [[Klassik Şifrələrin Təhlükəsizlik Zəiflikləri və Müasir Kriptoqrafiyaya Keçid]]
