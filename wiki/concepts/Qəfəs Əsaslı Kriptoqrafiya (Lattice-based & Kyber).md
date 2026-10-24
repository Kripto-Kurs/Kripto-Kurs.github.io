---
title: Qəfəs Əsaslı Kriptoqrafiya (Lattice-based & Kyber)
type: concept
tags:
  - kriptoqrafiya
  - pqc
  - qefes
  - lwe
  - kyber
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_29.html]]"
aliases:
  - Lattice-Based Cryptography
  - Qəfəs Kriptoqrafiyası
  - LWE
  - ML-KEM
  - Kyber
---

# Qəfəs Əsaslı Kriptoqrafiya (Lattice-Based Cryptography & Kyber)

**Qəfəs əsaslı kriptoqrafiya (Lattice-based Cryptography)** — çoxölçülü fəzada qəfəs nöqtələrinin həndəsi çətinlik məsələlərinə (SVP, CVP, LWE) əsaslanan və [[Post-Kvant Kriptoqrafiya (PQC)|Post-Kvant Kriptoqrafiyanın]] ən perspektivli və sürətli qoludur.

---

## 📐 Qəfəs Tərifi və Əsas Çətin Məsələlər

$\mathbb{R}^n$ fəzasında xətti asılı olmayan $b_1, \dots, b_n$ vektorlarının tam xətti kombinasiyalar çoxluğuna **qəfəs ($\mathcal{L}$)** deyilir:

$$\mathcal{L} = \Big\{ \sum_{i=1}^n x_i b_i \;\Big|\; x_i \in \mathbb{Z} \Big\}$$

- **SVP (Shortest Vector Problem):** Qəfəsdə sıfırdan fərqli ən qısa vektoru tapmaq ($n > 500$ ölçüdə NP-çətindir).
- **CVP (Closest Vector Problem):** Verilmiş hədəf nöqtəyə ən yaxın qəfəs vektorunu tapmaq.
- **LWE (Learning With Errors):** Xətti tənliklər sisteminə kiçik təsadüfi səs-küy ($e$) əlavə edildikdə:
  $$\mathbf{A} \cdot \mathbf{s} + \mathbf{e} \approx \mathbf{b} \pmod q$$
  $\mathbf{A}$ və $\mathbf{b}$ veriləndə gizli $\mathbf{s}$ vektorunu tapmaq hesablama baxımından qeyri-mümkündür.

---

## 💎 CRYSTALS-Kyber (ML-KEM Standartı)

- **Modul-LWE (Module-LWE):** Sadə LWE-dən fərqli olaraq çoxhədli halqaları ($R_q = \mathbb{Z}_q[X]/(X^{256}+1)$) üzərində işləyir. Bu, açarların ölçüsünü meqabaytlardan bir neçə **kilobayta** endirir və NTT (Number Theoretic Transform) ilə $O(n \log n)$ sürətində hesablanır.
- **Tətbiq:** Google Chrome, Cloudflare və TLS 1.3 protokollarında post-kvant açar mübadiləsi üçün hibrid rejimdə (X25519 + Kyber768) artıq aktivdir.

---

## 🔗 Əlaqəli Səhifələr

- [[Post-Kvant Kriptoqrafiya (PQC)]]
- [[TLS 1.3 Protokolu]]
- [[Hesablama Mürəkkəbliyi (P vs NP vs BQP)]]
- [[Tam Homomorfik Şifrələmə (FHE)]]
