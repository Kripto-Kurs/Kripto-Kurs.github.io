---
title: Tam Homomorfik Şifrələmə (FHE)
type: concept
tags:
  - kriptoqrafiya
  - fhe
  - mexfilik
  - bulud-tehlukesizliyi
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_30.html]]"
aliases:
  - Fully Homomorphic Encryption
  - FHE
  - Homomorfik Şifrələmə
---

# Tam Homomorfik Şifrələmə (Fully Homomorphic Encryption - FHE)

**Tam Homomorfik Şifrələmə (FHE)** — 2009-cu ildə Kreyq Centri (Craig Gentry) tərəfindən həll edilmiş və şifrələnmiş məlumatlar üzərində **onları əvvəlcədən deşifrləmədən və gizli açarı bilmədən** ixtiyari riyazi hesablamalar aparmağa imkan verən inqilabi kriptoqrafiya sahəsidir.

---

## 🎯 Homomorfizm Riyazi Xassəsi

$$\text{Dec}_K(\text{Enc}_K(a) \oplus \text{Enc}_K(b)) = a + b$$
$$\text{Dec}_K(\text{Enc}_K(a) \otimes \text{Enc}_K(b)) = a \times b$$

İstənilən alqoritm Boolean qapılarının (AND, XOR) kombinasiyası kimi ifadə oluna bildiyindən, toplama və vurmanı dəstəkləyən sistem **ixtiyari proqramı şifrəli verilənlər üzərində icra edə bilər**.

---

## ☁️ Tətbiq Sahələri

- **Təhlükəsiz Bulud Hesablamaları:** Müştəri məxfi tibbi və ya maliyyə məlumatlarını şifrələyib buluda göndərir; bulud analitika aparır və nəticəni şifrəli qaytarır. Bulud heç bir açıq məlumat görmür.
- **Məxfi Süni İntellekt (Privacy-Preserving AI):** LLM modellərinin istifadəçinin şəxsi məlumatlarını görmədən şifrəli sorğulara cavab verməsi.

---

## 🔗 Əlaqəli Səhifələr

- [[Qəfəs Əsaslı Kriptoqrafiya (Lattice-based & Kyber)]]
- [[Təhlükəsiz Çoxtərəfli Hesablama (MPC)]]
- [[Post-Kvant Kriptoqrafiya (PQC)]]
