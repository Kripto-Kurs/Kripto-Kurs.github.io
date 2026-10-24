---
title: Evler Teoremi və Fermat-ın Kiçik Teoremi
type: concept
tags:
  - riyaziyyat
  - ededler-nezeriyyesi
  - euler
  - fermat
  - rsa
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_17.html]]"
  - "[[raw/Mühazirə_18.html]]"
aliases:
  - Euler's Totient Theorem
  - Fermat's Little Theorem
  - FLT
  - Evler Funksiyası
---

# Evler Teoremi və Fermat-ın Kiçik Teoremi

Bu iki teorem ədədlər nəzəriyyəsinin və asimmetrik kriptoqrafiyanın (xüsusilə [[RSA Kriptosistemi|RSA]] və [[Diffie-Hellman Açar Mübadiləsi|Diffie-Hellman]]) riyazi bünövrəsini təşkil edir.

---

## 1. Fermat-ın Kiçik Teoremi (Fermat's Little Theorem - FLT)

1640-cı ildə Pyer de Ferma tərəfindən irəli sürülmüşdür:

> Əgər $p$ sadə ədəddirsə və $a$ ədədi $p$-yə bölünmürsə ($p \nmid a$), onda:
> $$a^{p-1} \equiv 1 \pmod p$$

Ekvivalent olaraq hər bir tam $a$ üçün:
$$a^p \equiv a \pmod p$$

---

## 2. Evler Totient Funksiyası ($\phi(n)$)

Leonhard Euler tərəfindən ümumiləşdirilmiş $\phi(n)$ funksiyası $1$-dən $n$-ə qədər olan və $n$ ilə qarşılıqlı sadə ($\gcd(k, n) = 1$) olan ədədlərin sayını göstərir:

- Əgər $p$ sadədirsə: $\phi(p) = p - 1$
- Əgər $n = p \cdot q$ ($p, q$ müxtəlif sadə ədədlər):
  $$\phi(n) = (p - 1)(q - 1)$$

---

## 3. Evler Teoremi (Euler's Totient Theorem)

> İxtiyari $n > 1$ tam ədədi və $\gcd(a, n) = 1$ şərtini ödəyən hər bir $a$ üçün:
> $$a^{\phi(n)} \equiv 1 \pmod n$$

### 🔑 RSA-da Tətbiqi:

Əgər $e \cdot d \equiv 1 \pmod{\phi(n)}$ olarsa, yəni $e \cdot d = k \phi(n) + 1$:
$$m^{ed} = m^{k\phi(n) + 1} = (m^{\phi(n)})^k \cdot m \equiv (1)^k \cdot m \equiv m \pmod n$$
Bu isə RSA şifrləmə və deşifrləməsinin riyazi düzgünlüyünü tam isbat edir!

---

## 🔗 Əlaqəli Səhifələr

- [[RSA Kriptosistemi]]
- [[Modul Arifmetika]]
- [[Çin Qalıq Teoremi (CRT)]]
- [[Genişləndirilmiş Evklid Alqoritmi]]
