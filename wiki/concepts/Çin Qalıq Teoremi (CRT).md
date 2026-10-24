---
title: Çin Qalıq Teoremi (CRT)
type: concept
tags:
  - riyaziyyat
  - ededler-nezeriyyesi
  - crt
  - rsa
  - modul-arifmetika
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_18.html]]"
aliases:
  - Chinese Remainder Theorem
  - CRT
  - Çin Qalıq Teoremi
---

# Çin Qalıq Teoremi (Chinese Remainder Theorem - CRT)

**Çin Qalıq Teoremi (CRT)** — qədim Çin riyaziyyatçısı Sun Tzunun eramızın III əsrində irəli sürdüyü və cüt-cüt qarşılıqlı sadə modullara görə konqruensiyalar sisteminin yeganə həllinin tapılmasını təmin edən fundamental teoremdir.

---

## 📐 Teoremin İfadəsi

Əgər $m_1, m_2, \dots, m_k$ cüt-cüt qarşılıqlı sadə tam ədədlərdirsə ($\gcd(m_i, m_j) = 1, \forall i \ne j$), onda aşağıdakı tənliklər sisteminin:

$$\begin{cases}
x \equiv a_1 \pmod{m_1} \\
x \equiv a_2 \pmod{m_2} \\
\vdots \\
x \equiv a_k \pmod{m_k}
\end{cases}$$

$M = m_1 \cdot m_2 \cdots m_k$ moduluna görə **yeganə $x \in \{0, 1, \dots, M-1\}$ həlli mövcuddur**.

### Konstruktiv Həll Düsturu:

$$x = \sum_{i=1}^k a_i \cdot M_i \cdot M_i^{-1} \bmod M$$
burada $M_i = \frac{M}{m_i}$ və $M_i^{-1} \equiv (M_i)^{-1} \pmod{m_i}$.

---

## ⚡ Kriptoqrafiyada Rolu (RSA-CRT Sürətləndirməsi)

[[RSA Kriptosistemi|RSA deşifrləməsində]] $m = c^d \bmod n$ əməliyyatı $n = pq$ üçün çox ağırdır ($O(\log^3 n)$).
CRT tətbiq edildikdə:
1. $m_p = c^{d \bmod (p-1)} \bmod p$
2. $m_q = c^{d \bmod (q-1)} \bmod q$
3. $m$ CRT ilə bərpa olunur.

Bu üsul RSA deşifrləməsini və imza atılmasını **təxminən 4 dəfə sürətləndirir**!

---

## 🔗 Əlaqəli Səhifələr

- [[RSA Kriptosistemi]]
- [[Modul Arifmetika]]
- [[Evler Teoremi və Fermat-ın Kiçik Teoremi]]
- [[Genişləndirilmiş Evklid Alqoritmi]]
