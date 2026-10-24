---
title: Simmetrik və Asimmetrik Kriptoqrafiya
type: concept
tags:
  - kriptoqrafiya
  - simmetrik
  - asimmetrik
  - acar-idarəsi
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
aliases:
  - Symmetric vs Asymmetric Cryptography
  - Açıq Açarlı Kriptoqrafiya
---

# Simmetrik və Asimmetrik Kriptoqrafiya

Müasir kriptoqrafiya iki əsas paradiqmaya bölünür: **Simmetrik (Gizli Açarlı)** və **Asimmetrik (Açıq Açarlı)** kriptoqrafiya.

---

## 1. Simmetrik Kriptoqrafiya (Symmetric Cryptography)

Eyni gizli açar həm şifrləmə ($E_k$), həm də deşifrləmə ($D_k$) üçün istifadə olunur:
$$c = E_k(m), \quad m = D_k(c)$$

### Xüsusiyyətləri:

- **Yüksək Sürət:** Hardware və CPU səviyyəsində çox sürətlə işləyir (gigabaytlarla verilənləri saniyələr içində şifrələyir).
- **Açar Paylanması Problemi (Key Distribution Problem):** Tərəflər əvvəlcədən təhlükəsiz kanalla gizli açarı bir-birinə ötürməlidirlər.
- **Açar Sayı Mürəkkəbliyi:** $n$ nəfərlik bir şəbəkədə hər iki tərəf arasında xüsusi əlaqə üçün cəmi:
  $$\frac{n(n-1)}{2} = O(n^2)$$
  sayda açar cütü tələb olunur (məsələn, 1000 istifadəçi üçün 499,500 açar).
- **Əsas Nümunələr:** AES, DES/3DES, ChaCha20, [[Sezar Şifrəsi]], [[Affin Şifrəsi]].

---

## 2. Asimmetrik Kriptoqrafiya (Asymmetric / Public-Key Cryptography)

Hər istifadəçinin iki riyazi əlaqəli açarı var:
- **Açıq Açar (Public Key - $pk$):** Hamıya elan olunur, şifrələmə və ya imzanın yoxlanılması üçün istifadə edilir.
- **Gizli Açar (Private Key - $sk$):** Yalnız sahibində qalır, deşifrləmə və ya imza atılması üçün istifadə edilir.

$$c = E_{pk}(m), \quad m = D_{sk}(c)$$
$$\sigma = \text{Sign}_{sk}(m), \quad \text{Verify}_{pk}(m, \sigma) \in \{\text{Doğru}, \text{Yalan}\}$$

### Xüsusiyyətləri:

- **Açar Sayı Mürəkkəbliyi:** $n$ nəfər üçün cəmi **$2n$** açar kifayətdir (hər kəsə 1 açıq, 1 gizli).
- **İnkar Edilməzlik:** Yalnız gizli açarın sahibi imza ata bildiyi üçün əməliyyat inkar edilə bilməz.
- **Hesablama Yavaşlığı:** Böyük ədədlər və elliptik əyrilər üzərində riyazi əməliyyatlar tələb etdiyi üçün simmetrik sistemlərdən 100-1000 dəfə yavaşdır.
- **Əsas Nümunələr:** RSA, ECC (Elliptic Curve Cryptography), ECDSA, Ed25519, Diffie-Hellman.

---

## ⚖️ Müqayisə Cədvəli

| Parametr | Simmetrik Kriptoqrafiya | Asimmetrik Kriptoqrafiya |
| :--- | :--- | :--- |
| **Açar sayı** | 1 (Hər iki tərəf eyni açarı bölüşür) | 2 (Açıq açar + Gizli açar) |
| **Açar mübadiləsi** | Əvvəlcədən təhlükəsiz kanal tələb edir | Açıq kanal üzərindən mümkündür |
| **Şəbəkədə açar sayı ($n$ nəfər)** | $\frac{n(n-1)}{2}$ | $2n$ |
| **Hesablama sürəti** | Çox yüksək | Nisbətən yavaş |
| **İnkar edilməzlik** | Yoxdur | Var (Rəqəmsal İmza ilə) |
| **Tipik istifadə** | Böyük həcmli faylların/trafikin şifrələnməsi | Açar mübadiləsi, Rəqəmsal imza, Autentikasiya |

---

## 🚀 Hibrid Kriptosistemlər (Hybrid Cryptosystems)

Real dünyada (məsələn, HTTPS/TLS və [[PGP və S-MIME]]) hər iki yanaşma birləşdirilir:
1. Asimmetrik kriptoqrafiya (Diffie-Hellman / RSA) ilə təsadüfi bir **simmetrik seans açarı** təhlükəsiz şəkildə ötürülür.
2. Əsas böyük məlumat axını sürətli simmetrik alqoritmlə (AES-GCM / ChaCha20-Poly1305) şifrələnir.

---

## 🔗 Əlaqəli Səhifələr

- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- [[Kerckhoffs Prinsipi]]
- [[PGP və S-MIME]]
- [[Signal Protocol]]
