---
title: Hesablama Mürəkkəbliyi (P vs NP vs BQP)
type: concept
tags:
  - riyaziyyat
  - murekkeblik
  - p-vs-np
  - bqp
  - kvant
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Kripto_Kurs_Əlavə_C_Mürəkkəblik.html]]"
aliases:
  - Computational Complexity Theory
  - P vs NP
  - BQP
  - Hesablama Mürəkkəbliyi
---

# Hesablama Mürəkkəbliyi (P vs NP vs BQP)

Kriptoqrafiyanın bütün müasir asimmetrik və simmetrik təhlükəsizlik isbatları **Hesablama Mürəkkəbliyi Nəzəriyyəsinə (Complexity Theory)** və çətinlik siniflərinə əsaslanır.

---

## 🏛️ Əsas Mürəkkəblik Sinifləri

```mermaid
graph TD
    P["P (Deterministic Polynomial Time)<br>Klassik Kompüterdə Sürətlə Həll Olunanlar (AES şifrləməsi)"]
    BQP["BQP (Bounded-Error Quantum Polynomial Time)<br>Kvant Kompüterlərinin Sürətlə Həll Etdikləri (Faktorizasiya, DLP)"]
    NP["NP (Nondeterministic Polynomial Time)<br>Həlli Asanlıqla Yoxlanıla Bilənlər"]
    NPC["NP-Tam (NP-Complete) / NP-Çətin<br>Ən Çətin Məsələlər (SVP, 3-SAT)"]

    P --> BQP
    P --> NP
    BQP --> NP
    NP --> NPC
```

- **P:** Deterministik Tyurinq maşınında $O(n^k)$ polinomial zamanda həll edilən məsələlər (məs. şifrələmə, modulyar vurma, cütlük yoxlanışı).
- **NP:** Həll verildikdə onun doğruluğu polinomial zamanda yoxlanıla bilən məsələlər (məs. Faktorizasiya, Qəfəs məsələləri).
- **BQP:** Kvant kompüterlərinin polinomial zamanda həll edə bildiyi məsələlər. **Şor alqoritmi sübut etdi ki, Faktorizasiya və DLP məsələləri BQP sinfinə daxildir!**
- **NP-Tam / NP-Çətin:** Kvant kompüterlərinin belə sürətlə həll edə bilmədiyi güman edilən həndəsi qəfəs (SVP) və kod əsaslı məsələlər ([[Post-Kvant Kriptoqrafiya (PQC)|PQC-nin]] əsası).

---

## 🔗 Əlaqəli Səhifələr

- [[Post-Kvant Kriptoqrafiya (PQC)]]
- [[Qəfəs Əsaslı Kriptoqrafiya (Lattice-based & Kyber)]]
- [[Peter Shor]]
- [[RSA Kriptosistemi]]
