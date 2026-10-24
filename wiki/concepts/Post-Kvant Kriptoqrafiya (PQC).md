---
title: Post-Kvant Kriptoqrafiya (PQC)
type: concept
tags:
  - kriptoqrafiya
  - pqc
  - kvant
  - shor
  - kyber
  - dilithium
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_28.html]]"
  - "[[raw/Mühazirə_29.html]]"
aliases:
  - Post-Quantum Cryptography
  - PQC
  - Kvant Sonrası Kriptoqrafiya
---

# Post-Kvant Kriptoqrafiya (Post-Quantum Cryptography - PQC)

**Post-Kvant Kriptoqrafiya (PQC)** — gələcəkdə genişmiqyaslı kvant kompüterlərinin (Cryptanalytically Relevant Quantum Computer - CRQC) yaradılması zamanı mövcud asimmetrik sistemlərin çökməsinin qarşısını almaq üçün hazırlanmış və **həm klassik, həm də kvant kompüterləri üçün sındırılması qeyri-mümkün olan** yeni nəsil kriptoqrafik alqoritmlərdir.

---

## ⚡ Kvant Kompüterlərinin Təhdidi

```mermaid
graph TD
    QC["Kvant Kompüterləri Təhdidi"]
    Shor["1. Şor Alqoritmi (Shor's Algorithm - 1994)<br>DLP və Faktorizasiyanı Polinomial Zamanda O(log³ N) Həll Edir"]
    Grover["2. Qrover Alqoritmi (Grover's Algorithm - 1996)<br>Axtarışı Kvadratik Sürətləndirir: O(N) → O(√N)"]

    QC --> Shor
    QC --> Grover
    Shor --> Dead["❌ TAM ÇÖKƏN SİSTEMLƏR:<br>RSA, Diffie-Hellman, ECDSA, ECC, Ed25519"]
    Grover --> Safe["✅ HƏLL EDİLƏ BİLƏN:<br>AES-256 (128-bit qalır), SHA-384/512"]
```

---

## 🏛️ NIST PQC Standartları (2024–2025)

NIST-in çoxillik qlobal seçimindən sonra aşağıdakı standartlar rəsmiləşdirilmişdir:

1. **Açar İdarəetməsi və KEM (Key Encapsulation):**
   - **ML-KEM (CRYSTALS-Kyber):** [[Qəfəs Əsaslı Kriptoqrafiya (Lattice-based & Kyber)|Qəfəs əsaslı (Module-LWE)]] üsul. Əsas standartdır.
2. **Rəqəmsal İmzalar:**
   - **ML-DSA (CRYSTALS-Dilithium):** Qəfəs əsaslı ümumi məqsədli imza.
   - **FN-DSA (Falcon):** Kiçik imza ölçülü qəfəs imzası.
   - **SLH-DSA (SPHINCS+):** Dövlətsiz heş əsaslı etibarlı ehtiyat imza.

---

## 🔗 Əlaqəli Səhifələr

- [[Qəfəs Əsaslı Kriptoqrafiya (Lattice-based & Kyber)]]
- [[RSA Kriptosistemi]]
- [[Elliptik Əyrilər Kriptoqrafiyası (ECC)]]
- [[Peter Shor]]
- [[Hesablama Mürəkkəbliyi (P vs NP vs BQP)]]
