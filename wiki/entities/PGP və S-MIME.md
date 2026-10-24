---
title: PGP və S-MIME
type: entity
tags:
  - protokol
  - e-poct
  - tehlukesizlik
  - asimmetrik
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
aliases:
  - PGP
  - Pretty Good Privacy
  - S/MIME
  - OpenPGP
---

# PGP və S-MIME (E-poçt Təhlükəsizliyi)

**PGP (Pretty Good Privacy)** və **S/MIME (Secure/Multipurpose Internet Mail Extensions)** — elektron poçt yazışmalarında konfidensiallıq, tamlıq, autentikasiya və inkar edilməzlik təmin etmək üçün istifadə olunan iki əsas standartdır.

---

## 🔑 Əsas Mexanizmlər

Hər iki protokol **hibrid kriptosistem** prinsipləri ilə işləyir:

1. **Şifrləmə:** Məktub təsadüfi yaradılmış simmetrik açarla (məs. AES) şifrələnir. Həmin simmetrik açar isə qəbul edənin asimmetrik açıq açarı ilə (RSA / ECC) şifrələnərək məktuba əlavə edilir.
2. **Rəqəmsal İmza:** Göndərən məktubun heşini hesablayır və öz gizli açarı ilə imzalayır. Qəbul edən göndərənin açıq açarını istifadə edərək məktubun bütövlüyünü və kimdən gəldiyini yoxlayır.

---

## ⚖️ PGP və S-MIME Fərqləri

- **PGP:** *"Web of Trust"* (Etibar Şəbəkəsi) modelinə əsaslanır; istifadəçilər bir-birinin açarlarını birbaşa təsdiqləyirlər. Mərkəzləşdirilmiş sertifikat mərkəzi (CA) tələb olunmur.
- **S/MIME:** Mərkəzləşdirilmiş İctimai Açar İnfrastrukturuna (PKI - Public Key Infrastructure) və X.509 rəqəmsal sertifikatlarına əsaslanır; korporativ mühitlərdə geniş istifadə olunur.

---

## 🔗 Əlaqəli Səhifələr

- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- [[Simmetrik və Asimmetrik Kriptoqrafiya]]
- [[Signal Protocol]]
