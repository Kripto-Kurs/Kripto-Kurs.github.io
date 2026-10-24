---
title: Monoalfabetik Əvəzetmə Şifrələri
type: concept
tags:
  - kriptoqrafiya
  - klassik-sifrler
  - monoalfabetik
  - permutasiya
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Monoalphabetic Substitution Cipher
  - Sadə Əvəzetmə Şifrəsi
---

# Monoalfabetik Əvəzetmə Şifrələri

**Monoalfabetik əvəzetmə şifrəsi** açıq mətnin hər bir hərfinin bütün mətn boyu sabit bir permutasiya qaydası ilə digər bir hərflə əvəz edildiyi kriptosistemlər sinfidir.

---

## 📐 Riyazi Təsviri

Əlifba simvollarının sonlu çoxluğu $\Sigma$ olsun ($|\Sigma| = 26$).
- **Açar:** $\Sigma$ çoxluğu üzərində ixtiyari bijektiv inikas (permutasiya) $\pi: \Sigma \to \Sigma$.
- **Şifrləmə:** $c_i = \pi(m_i)$
- **Deşifrləmə:** $m_i = \pi^{-1}(c_i)$

---

## 🔢 Açar Fəzasının Ölçüsü və Paradoks

Monoalfabetik şifrələrdə 26 hərfin bütün mümkün düzülüşlərinin sayı:

$$|\mathcal{K}| = 26! = 403,291,461,126,605,635,584,000,000 \approx 4.03 \times 10^{26} \approx 2^{88}$$

### 🤯 Kriptoqrafik Paradoks:

- $2^{88}$ kombinasiya insan və hətta superkompüterlər üçün tam axtarış (brute-force) baxımından qeyri-mümkündür.
- **Lakin şifrə tamamilə qeyri-təhlükəsizdir!**
- Səbəb: Hər bir hərf həmişə eyni şifrəli hərflə əvəz olunduğu üçün təbii dilin (məsələn, ingilis və ya azərbaycan dili) statistik hərf və söz strukturu dəyişmədən şifrəli mətndə qalır.
- [[Al-Kindi]] tərəfindən kəşf edilən [[Tezlik Analizi]] metodu ilə qısa müddətdə sındırılır.

---

## 🔗 Əlaqəli Səhifələr

- [[Tezlik Analizi]]
- [[Sezar Şifrəsi]]
- [[Affin Şifrəsi]]
- [[Al-Kindi]]
- [[Kriptosistem Beşliyi]]
- [[Klassik Şifrələrin Təhlükəsizlik Zəiflikləri və Müasir Kriptoqrafiyaya Keçid]]
