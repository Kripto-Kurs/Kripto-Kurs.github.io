---
title: "Summary - Mühazirələr 16-23: Asimmetrik Kriptoqrafiya, Ədədlər Nəzəriyyəsi, RSA və Elliptik Əyrilər (ECC)"
type: summary
tags:
  - kriptoqrafiya
  - asimmetrik
  - rsa
  - ecc
  - ecdsa
  - reqemsal-imza
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_16.html]]"
  - "[[raw/Mühazirə_17.html]]"
  - "[[raw/Mühazirə_18.html]]"
  - "[[raw/Mühazirə_19.html]]"
  - "[[raw/Mühazirə_20.html]]"
  - "[[raw/Mühazirə_21.html]]"
  - "[[raw/Mühazirə_22.html]]"
  - "[[raw/Mühazirə_23.html]]"
aliases:
  - Mühazirə 16-23 Xülasəsi
  - Blok 3 Xülasəsi
---

# Mühazirə 16–23: Asimmetrik Kriptoqrafiya, Ədədlər Nəzəriyyəsi, RSA, Diffie-Hellman və Elliptik Əyrilər (ECC)

Bu sənəd 3-cü Blokun (Ədədlər nəzəriyyəsi, RSA, Diffie-Hellman, Elliptik Əyrilər və Rəqəmsal İmza Sxemləri) master xülasəsidir.

---

## 📌 Əsas Mövzular və Bölmələr

### 1. Ədədlər Nəzəriyyəsi və Cəbri Təməllər (Mühazirə 16, 17, 18)

- **Fermat-ın Kiçik Teoremi:** Sadə $p$ üçün $a^{p-1} \equiv 1 \pmod p$ (əgər $p \nmid a$).
- **Evler Funksiyası $\phi(n)$:** $\phi(pq) = (p-1)(q-1)$.
- **Evler Teoremi:** $\gcd(a, n) = 1$ olduqda $a^{\phi(n)} \equiv 1 \pmod n$.
- **Çin Qalıq Teoremi (CRT):** $x \equiv a_i \pmod{m_i}$ sisteminin tək bir $x \pmod M$ həllini tapmağa və RSA deşifrləməsini 4 dəfə sürətləndirməyə imkan verir.

### 2. RSA Kriptosistemi (Mühazirə 19)

- **Müəlliflər:** Ron Rivest, Adi Shamir, Leonard Adleman (1977).
- **Açar Yaradılması:** 
  - $n = p \cdot q$ (burada $p, q$ böyük sadə ədədlərdir).
  - $\phi(n) = (p-1)(q-1)$.
  - $e$ seçilir ($\gcd(e, \phi(n)) = 1$, adətən $e = 65537 = 2^{16}+1$).
  - Gizli açar: $d \equiv e^{-1} \pmod{\phi(n)}$ ([[Genişləndirilmiş Evklid Alqoritmi]] ilə).
- **Şifrləmə və Deşifrləmə:**
  $$c = m^e \bmod n, \quad m = c^d \bmod n$$
- **Təhlükəsizlik:** $n$ ədədinin böyük sadə vuruqlara ayrılmasının (Integer Factorization) çətinliyinə əsaslanır. Praktikada OAEP padding tələb olunur.

### 3. Diffie-Hellman və Diskret Loqarifm (Mühazirə 20)

- **DLP Problemi:** $y = g^x \bmod p$ tənliyindən $x$-in tapılması.
- **Klassik DH:** Alis və Bob açıq kanalla $g^a \bmod p$ və $g^b \bmod p$ mübadiləsi edərək $g^{ab} \bmod p$ ortaq gizli açarını formalaşdırırlar.

### 4. Elliptik Əyrilər Kriptoqrafiyası (ECC) (Mühazirə 21, 22)

- **Weierstrass Tənliyi:** $y^2 \equiv x^3 + ax + b \pmod p$ (şərt: $4a^3 + 27b^2 \not\equiv 0$).
- **Qrup Əməliyyatı (Point Addition & Doubling):** Əyri üzərində iki nöqtənin cəmi "akkord və toxunan" (chord-and-tangent) həndəsi qaydası ilə cəbri olaraq təyin olunur.
- **Skalyar Vurma:** $Q = k \cdot P = P + P + \dots + P$ ($k$ dəfə).
- **ECDLP (Elliptic Curve Discrete Logarithm Problem):** $Q$ və $P$ veriləndə $k$-nı tapmaq klassik DLP-dən qat-qat çətindir (sub-eksponensial indeks hesablama hücumları işləmir).
- **Açar Müqayisəsi:** **256-bit ECC $\approx$ 3072-bit RSA** (eyni 128-bit təhlükəsizlik səviyyəsi).

### 5. Rəqəmsal İmza Sxemləri (Mühazirə 23)

- **ECDSA:** [[Bitcoin]] və Ethereum-da istifadə olunan secp256k1 əyrisi əsaslı imza. Nonce ($k$) təkrar istifadə edildikdə dərhal gizli açar sızır (Sony PS3 zəifliyi).
- **Schnorr və EdDSA (Ed25519):** Xətti birləşmə xüsusiyyəti, deterministik nonce generasiyası və imza aqreqasiyası ilə ECDSA-dan daha təhlükəsiz və sürətlidir.

---

## 🔗 Əlaqəli Səhifələr

- [[RSA Kriptosistemi]]
- [[Diffie-Hellman Açar Mübadiləsi]]
- [[Elliptik Əyrilər Kriptoqrafiyası (ECC)]]
- [[Rəqəmsal İmzalar və ECDSA]]
- [[Çin Qalıq Teoremi (CRT)]]
- [[Evler Teoremi və Fermat-ın Kiçik Teoremi]]
