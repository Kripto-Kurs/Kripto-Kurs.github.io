---
title: Kerckhoffs Prinsipi
type: concept
tags:
  - kriptoqrafiya
  - dizayn-prinsipi
  - tehlukesizlik
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Kerckhoffs's Principle
  - Şennon Maksimi
  - Shannon's Maxim
---

# Kerckhoffs Prinsipi

**Kerckhoffs Prinsipi** 1883-cü ildə holland əsilli hərbi kriptoqraf [[Auguste Kerckhoffs]] tərəfindən irəli sürülmüş, müasir kriptoqrafik mühəndisliyin ən fundamental aksiomudur.

---

## 📜 Prinsipin Tərifi

> *"Kriptosistemin təhlükəsizliyi sistemin bütün detalları (alqoritm, arxitektura, riyazi struktur) ictimaiyyətə və hücumçuya məlum olduqda belə qorunmalıdır. Sistemdə gizli qalan yeganə element **açar** ($k$) olmalıdır."*

1949-cu ildə informasiya nəzəriyyəsinin banisi [[Claude Shannon]] bu prinsipi məşhur maksimlə yenidən ifadə etmişdir:
> *"The enemy knows the system"* (Düşmən sistemi bilir).

---

## ⚖️ "Security Through Obscurity" Niyə Uğursuzdur?

Alqoritmin və ya proqram təminatının strukturunu gizli saxlamaqla təhlükəsizlik əldə etməyə çalışmağa *"Security Through Obscurity"* (Gizlilik vasitəsilə təhlükəsizlik) deyilir. Bu yanaşmanın əsas çatışmazlıqları:

1. **Tərs Mühəndislik (Reverse Engineering):** Hücumçular icra edilən proqramı və ya çipi analiz edərək alqoritmi gec-tez aşkar edirlər.
2. **İnsayder Sızmaları:** Şirkət əməkdaşları və ya dizaynerlər dəyişdikdə alqoritm sızır. Alqoritm sızarsa, bütün sistemi sıfırdan dəyişmək lazım gəlir.
3. **Audit Edilməməsi:** İctimaiyyətə və mütəxəssislərə açıq olmayan alqoritmlər zəiflikləri aşkarlamaq üçün geniş kriptoanalitik testlərdən keçmir.

---

## 🔑 Açarın Rolu və Dəyişdirilməsi

Kerckhoffs prinsipinə əsaslanan sistemlərdə:
- Alqoritm (məsələn, AES, RSA, SHA-256, [[Sezar Şifrəsi]]) hamıya məlumdur və illərlə standartlaşdırılır.
- Sistem kompromatlaşdıqda (açar sızdıqda), alqoritmi dəyişməyə ehtiyac qalmır — sadəcə **yeni bir açar təyin edilir**.

---

## 🔗 Əlaqəli Səhifələr

- [[Auguste Kerckhoffs]]
- [[Claude Shannon]]
- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- [[Təhdid Modelləri]]
- [[Kriptosistem Beşliyi]]
