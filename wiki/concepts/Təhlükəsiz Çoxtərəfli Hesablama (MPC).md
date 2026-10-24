---
title: Təhlükəsiz Çoxtərəfli Hesablama (MPC)
type: concept
tags:
  - kriptoqrafiya
  - mpc
  - gizli-paylasma
  - mexfilik
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_30.html]]"
aliases:
  - Multi-Party Computation
  - MPC
  - Secure MPC
  - Şamir Gizli Paylaşımı
---

# Təhlükəsiz Çoxtərəfli Hesablama (Secure Multi-Party Computation - MPC)

**Təhlükəsiz Çoxtərəfli Hesablama (MPC)** — $n$ sayda qarşılıqlı etibarsız tərəfin öz fərdi gizli girişlərini ($x_1, x_2, \dots, x_n$) heç kəsə açmadan birlikdə ümumi $y = f(x_1, x_2, \dots, x_n)$ funksiyasının nəticəsini hesablamasına imkan verən kriptoqrafik protokollar ailəsidir.

İlk dəfə Endryu Yao tərəfindən 1982-ci ildə *"Milyonçular Problemi"* (iki milyonçu öz sərvətinin məbləğini bildirmədən kimin daha varlı olduğunu necə müəyyən edə bilər?) ilə irəli sürülmüşdür.

---

## 🔑 Əsas Primitivlər

1. **Şamir Gizli Paylaşımı (Shamir's Secret Sharing - $(t, n)$ Threshold Scheme):**
   - $S$ sirri $n$ nəfər arasında elə paylanır ki, ixtiyari $t$ nəfər birləşdikdə Laqranj İnterpolyasiyası ilə sirri bərpa edir, $t-1$ nəfər isə sirr haqqında $0$ bit informasiya əldə edir.
2. **Yao-nun Garbled Circuits (Qarışıq Sxemlər):** Məntiqi qapıların şifrələnməsi vasitəsilə 2 tərəfli MPC.
3. **Kriptovalyuta Tətbiqi (MPC Wallets):** Tək bir gizli açar əvəzinə, açar paylara bölünərək fərqli serverlərdə saxlanılır və tək nöqtəli sıradan çıxma (Single Point of Failure) riski aradan qaldırılır.

---

## 🔗 Əlaqəli Səhifələr

- [[Tam Homomorfik Şifrələmə (FHE)]]
- [[Sıfır Biliyi Sübutları (ZKP və zk-SNARKs)]]
- [[Bitcoin]]
