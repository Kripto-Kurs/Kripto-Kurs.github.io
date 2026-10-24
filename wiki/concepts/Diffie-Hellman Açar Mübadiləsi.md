---
title: Diffie-Hellman Açar Mübadiləsi
type: concept
tags:
  - kriptoqrafiya
  - asimmetrik
  - acar-mubadilesi
  - diffie-hellman
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
aliases:
  - Diffie-Hellman Key Exchange
  - DH Protokolu
  - Açar Mübadiləsi
---

# Diffie-Hellman Açar Mübadiləsi (Diffie-Hellman Key Exchange)

**Diffie-Hellman (DH) protokolu** — 1976-cı ildə [[Whitfield Diffie və Martin Hellman]] tərəfindən irəli sürülmüş, iki tərəfin (Alis və Bob) açıq və etibarsız rabitə kanalı üzərindən əvvəlcədən heç bir gizli məlumat bölüşmədən **ortaq gizli seans açarı (shared secret)** yaratmasına imkan verən ilk asimmetrik kriptoqrafik protokoldur.

---

## 📐 Riyazi Mexanizm (Diskret Loqarifm Problemi)

1. **Açıq Parametrlər:**
   - Çox böyük sadə ədəd: $p$
   - Modul $p$-nin primitiv kökü (generator): $g$ ($g \in \mathbb{Z}_p^*$)
2. **Açar Yaradılması:**
   - Alis təsadüfi gizli tam ədəd seçir: $a \in \{2, \dots, p-2\}$ və açıq dəyəri hesablayır:
     $$A = g^a \bmod p$$
   - Bob təsadüfi gizli tam ədəd seçir: $b \in \{2, \dots, p-2\}$ və açıq dəyəri hesablayır:
     $$B = g^b \bmod p$$
3. **Açıq Mübadilə:**
   - Alis $A$-nı Boba, Bob isə $B$-ni Alisə açıq kanalla göndərir.
4. **Ortaq Gizli Açarın Hesablanması:**
   - Alis hesablayır: $K = B^a \bmod p = (g^b)^a \bmod p = g^{ab} \bmod p$
   - Bob hesablayır: $K = A^b \bmod p = (g^a)^b \bmod p = g^{ab} \bmod p$

Nəticədə hər iki tərəf eyni $K = g^{ab} \bmod p$ gizli açarını əldə edir!

---

## 🔒 Təhlükəsizlik Əsası

- **Diskret Loqarifm Problemi (DLP):** Şəbəkəni dinləyən hücumçu (Eva) açıq $p, g, A, B$ qiymətlərini bilsə də, $A = g^a \bmod p$ tənliyindən $a$-nı hesablamaq eksponensial dərəcədə çətindir.
- **Elliptik Əyri Versiyası (ECDH):** Müasir HTTPS/TLS və [[Signal Protocol|Signal]] protokollarında daha kiçik açar ölçüsü və yüksək sürət üçün Elliptik Əyri Diffie-Hellman (ECDH) tətbiq olunur.

---

## 🔗 Əlaqəli Səhifələr

- [[Whitfield Diffie və Martin Hellman]]
- [[Simmetrik və Asimmetrik Kriptoqrafiya]]
- [[Modul Arifmetika]]
- [[Signal Protocol]]
- [[PGP və S-MIME]]
