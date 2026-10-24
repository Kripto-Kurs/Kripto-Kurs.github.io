---
title: Genişləndirilmiş Evklid Alqoritmi
type: concept
tags:
  - riyaziyyat
  - alqoritm
  - modul-arifmetika
  - evklid
  - ters-element
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Extended Euclidean Algorithm
  - EEA
  - Modul Tərs Hesablanması
---

# Genişləndirilmiş Evklid Alqoritmi (Extended Euclidean Algorithm)

**Genişləndirilmiş Evklid Alqoritmi (EEA)** — iki $a$ və $b$ tam ədədinin ən böyük ortaq bölənini $\gcd(a, b) = d$ hesablamaqla yanaşı, **Bezut eyniliyini** (Bézout's identity) ödəyən $x$ və $y$ tam əmsallarını tapan fundamental alqoritmdir:

$$a \cdot x + b \cdot y = \gcd(a, b)$$

---

## 🔑 Modul Multiplikativ Tərsin Tapılmasında Rolu

[[Modul Arifmetika|Modul arifmetikada]] $a \in \mathbb{Z}_m$ ədədinin $m$ moduluna görə multiplikativ tərs elementini ($a^{-1} \pmod m$) tapmaq üçün EEA tətbiq edilir:

Əgər $\gcd(a, m) = 1$ olarsa:
$$a \cdot x + m \cdot y = 1$$

Bu bərabərliyi hər iki tərəfdən modulo $m$ götürsək:
$$a \cdot x + m \cdot y \equiv 1 \pmod m$$
$$a \cdot x + 0 \equiv 1 \pmod m \implies a \cdot x \equiv 1 \pmod m$$

Deməli, tapılan **$x$ əmsalı $a$-nın modul $m$-ə görə tərsidir**: $a^{-1} \equiv x \pmod m$.

---

## 🧮 Addım-Addım Hesablama Nümunəsi

**Məsələ:** [[Affin Şifrəsi|Affin şifrəsində]] $a = 7$ açarının modul $26$-ya görə tərs elementini ($7^{-1} \pmod{26}$) tapın.

### 1. Düz Evklid Bölməsi:

$$26 = 3 \times 7 + 5 \quad \implies 5 = 26 - 3 \times 7$$
$$7 = 1 \times 5 + 2 \quad \implies 2 = 7 - 1 \times 5$$
$$5 = 2 \times 2 + 1 \quad \implies 1 = 5 - 2 \times 2$$
$$2 = 2 \times 1 + 0 \quad (\gcd(7, 26) = 1)$$

### 2. Geri Əvəzetmə (Bézout əmsallarının bərpası):

$$1 = 5 - 2 \times 2$$
$$1 = 5 - 2 \times (7 - 1 \times 5) = 3 \times 5 - 2 \times 7$$
$$1 = 3 \times (26 - 3 \times 7) - 2 \times 7 = 3 \times 26 - 11 \times 7$$

Bərabərlik:
$$(-11) \times 7 + 3 \times 26 = 1$$

Modulo 26 götürdükdə:
$$x \equiv -11 \equiv -11 + 26 \equiv 15 \pmod{26}$$

**Nəticə:** $7^{-1} \equiv 15 \pmod{26}$.
*Yoxlama:* $(7 \times 15) \bmod 26 = 105 \bmod 26 = 1$.

---

## 🔗 Əlaqəli Səhifələr

- [[Modul Arifmetika]]
- [[Affin Şifrəsi]]
- [[Sezar Şifrəsi]]
- [[Kriptosistem Beşliyi]]
