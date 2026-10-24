---
title: Rəqəmsal İmzalar və ECDSA
type: concept
tags:
  - kriptoqrafiya
  - asimmetrik
  - reqemsal-imza
  - ecdsa
  - autentikasiya
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
aliases:
  - Digital Signatures
  - ECDSA
  - Rəqəmsal İmza
  - Elliptic Curve Digital Signature Algorithm
---

# Rəqəmsal İmzalar və ECDSA (Digital Signatures & ECDSA)

**Rəqəmsal imza** — rəqəmsal sənədlərin və ya tranzaksiyaların həqiqiliyini, mənbəyini və bütövlüyünü təsdiq edən riyazi sxemdir. O, adi əl yazısı imzasının rəqəmsal analoqudur, lakin ondan fərqli olaraq sənədin hər bir biti ilə sıx riyazi əlaqədədir və saxtalaşdırıla bilməz.

---

## 🛡️ Təmin Etdiyi 3 Əsas Xidmət

Bax: [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
1. **Autentikasiya (Mənbə Təsdiqi):** İmza yalnız göndərənin gizli açarı ilə yaradıla bilər.
2. **Tamlıq (Integrity):** Əgər sənəddə 1 bit belə dəyişərsə, imza doğrulaması uğursuz olur.
3. **İnkar Edilməzlik (Non-repudiation):** Göndərən sənədi imzalamadığını iddia edə bilməz.

---

## ⚙️ İmzalanma və Doğrulama Arxitekturası

```mermaid
sequenceDiagram
    autonumber
    actor Alice as Alis (Göndərən)
    actor Bob as Bob (Qəbul Edən)
    Note over Alice: 1. Mesajın heşini hesablayır: h = H(M)<br>2. Gizli açarla imzalayır: σ = Sign_sk(h)
    Alice->>Bob: Mesaj (M) və İmza (σ)
    Note over Bob: 1. Mesajın heşini hesablayır: h' = H(M)<br>2. Alisin Açıq Açarı (pk) ilə yoxlayır:<br>Verify_pk(h', σ) == Doğru?
```

---

## ⚡ ECDSA (Elliptic Curve Digital Signature Algorithm)

ECDSA elliptik əyrilər qrupu ($\mathbb{F}_p$ üzərində $y^2 = x^3 + ax + b$) üzərində diskret loqarifm probleminə əsaslanan rəqəmsal imza alqoritmidir.

- **Üstünlüyü:** RSA ilə müqayisədə eyni təhlükəsizlik səviyyəsini (128-bit) RSA 3072-bitlik açarlarla təmin etdiyi halda, ECDSA cəmi **256-bitlik** açarla təmin edir.
- **Tətbiq:** [[Bitcoin]] və Ethereum şəbəkələrində tranzaksiyaların imzalanması üçün **secp256k1** Koblitz əyrisindən istifadə olunur.

---

## 🔗 Əlaqəli Səhifələr

- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- [[Simmetrik və Asimmetrik Kriptoqrafiya]]
- [[Kriptoqrafik Heş Funksiyaları]]
- [[Bitcoin]]
- [[PGP və S-MIME]]
