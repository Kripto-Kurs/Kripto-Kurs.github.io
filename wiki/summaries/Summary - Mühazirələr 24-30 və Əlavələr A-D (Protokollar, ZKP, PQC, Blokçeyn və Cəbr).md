---
title: "Summary - Mühazirələr 24-30 və Əlavələr A-D: Protokollar, ZKP, PQC, Blokçeyn və Cəbr"
type: summary
tags:
  - kriptoqrafiya
  - tls
  - zkp
  - pqc
  - blokceyn
  - fhe
  - elaveler
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_24.html]]"
  - "[[raw/Mühazirə_25.html]]"
  - "[[raw/Mühazirə_26.html]]"
  - "[[raw/Mühazirə_27.html]]"
  - "[[raw/Mühazirə_28.html]]"
  - "[[raw/Mühazirə_29.html]]"
  - "[[raw/Mühazirə_30.html]]"
  - "[[raw/Kripto_kurs_Əlavə_A_Tarixi.html]]"
  - "[[raw/Kripto_kurs_Əlavə_B_Qrup_Meydan_vəsair.html]]"
  - "[[raw/Kripto_Kurs_Əlavə_C_Mürəkkəblik.html]]"
  - "[[raw/Kripto_kurs_Əlavə_D_faktorizasiya.html]]"
aliases:
  - Mühazirə 24-30 Xülasəsi
  - Blok 4 və 5 Xülasəsi
---

# Mühazirə 24–30 və Əlavələr A–D: Şəbəkə Protokolları, ZKP, Post-Kvant, Blokçeyn və Cəbri Təməllər

Bu sənəd 4-cü və 5-ci Blokların (PKI, TLS 1.3, Sıfır Biliyi Sübutları, Yan Kanal Hücumları, Post-Kvant Kriptoqrafiya, Müasir Tətbiqlər və Riyazi Traktatlar) master xülasəsidir.

---

## 📌 Əsas Mövzular və Bölmələr

### 1. Açar İdarəetməsi, PKI və TLS 1.3 (Mühazirə 24 & 25)

- **PKI və X.509:** Sertifikat Mərkəzləri (CA), Zəncirvari Etibar (Chain of Trust), CRL və OCSP Stapling mexanizmləri.
- **TLS 1.3 İnqilabı:** 
  - Əvvəlki köhnəlmiş və təhlükəli primitivləri (RSA açar mübadiləsi, RC4, CBC-MAC, SHA-1) tamamilə ləğv etdi.
  - Yalnız **Forward Secrecy** verən (ECDHE / DHE) açar mübadiləsini və **AEAD** (AES-GCM, ChaCha20-Poly1305) şifrələməsini məcburi etdi.
  - Əlaqə qurulmasını 2-RTT-dən **1-RTT** (və 0-RTT Resumption) səviyyəsinə endirərək sürətləndirdi.

### 2. Sıfır Biliyi Sübutları (ZKP) (Mühazirə 26)

- **Qızıl 3 Xassə:**
  1. *Tamlıq (Completeness):* İddia doğrudursa, dürüst sübutçu yoxlayıcını inandırır.
  2. *Dürüstlük (Soundness):* İddia yalandırsa, heç bir yalançı sübutçu yoxlayıcını aldada bilməz.
  3. *Sıfır Biliyi (Zero-Knowledge):* Yoxlayıcı iddianın doğruluğundan başqa heç bir məlumat (sirri) öyrənmir.
- **zk-SNARKs & zk-STARKs:** Məxfi blokçeyn tranzaksiyaları (Zcash), Layer-2 Rollup miqyaslanması və kimlik doğrulaması.

### 3. Yan Kanal Hücumları (Side-Channel Attacks) (Mühazirə 27)

- Riyazi alqoritmin deyil, onun **fiziki icrasının** (zaman fərqləri, enerji sərfiyyatı DPA, elektromaqnit şüalanma, kəş gecikmələri) analiz edilməsi.
- **Müdafiə:** Sabit zamanlı proqramlaşdırma (Constant-time execution), maskalama (masking) və süni səs-küy əlavəsi.

### 4. Post-Kvant Kriptoqrafiya (PQC) (Mühazirə 28 & 29)

- **Kvant Təhdidi:**
  - *Şor Alqoritmi (Shor's Algorithm):* RSA ($n=pq$) və ECC ($kP=Q$) sistemlərini polinomial zamanda ($O((\log N)^3)$) tamamilə sındırır!
  - *Qrover Alqoritmi (Grover's Algorithm):* Simmetrik açar və heş axtarışını kvadratik sürətləndirir ($2^{128} \to 2^{64}$). Həll: AES-256 və SHA-384/512-yə keçid.
- **NIST PQC Standartları:**
  - **Qəfəs Əsaslı (Lattice / LWE):** ML-KEM (Kyber) açar mübadiləsi, ML-DSA (Dilithium) və Falcon rəqəmsal imzaları.
  - **Heş Əsaslı:** SLH-DSA (SPHINCS+) və XMSS dövlətli/dövlətsiz imzalar.

### 5. Müasir Tətbiqlər (Mühazirə 30)

- **Mərkəzsiz Blokçeyn:** Konsensus, Merkle zəncirləri, Smart Müqavilələr.
- **Təhlükəsiz Çoxtərəfli Hesablama (MPC):** Şamir Gizli Paylaşımı (Secret Sharing) və Garbled Circuits ilə tərəflər öz məlumatlarını bir-birinə açmadan ortaq hesablama aparır.
- **Tam Homomorfik Şifrələmə (FHE - Gentry 2009):** Şifrələnmiş məlumat üzərində deşifrləmə etmədən ixtiyari riyazi hesablamalar aparmaq imkanı.

### 6. Dörd Fundamental Əlavə (Əlavələr A–D)

- **Əlavə A:** Qədim Misir və Skitaladan Enigma və müasir kibermüharibələrə qədər 4000 illik xronologiya.
- **Əlavə B:** Qruplar, Halqalar, Sahələr və AES-də istifadə olunan Qalua Meydanları $GF(2^8)$ / $GF(p^m)$ cəbri.
- **Əlavə C:** Mürəkkəblik nəzəriyyəsi (Turing maşınları, P, NP, NP-tam, BQP kvant sinfi).
- **Əlavə D:** Ümumi Ədəd Meydanı Ələyi (GNFS), Pollard's $\rho$ və Baby-step Giant-step DLP alqoritmləri.

---

## 🔗 Əlaqəli Səhifələr

- [[İctimai Açar İnfrastrukturu (PKI və X.509)]]
- [[TLS 1.3 Protokolu]]
- [[Sıfır Biliyi Sübutları (ZKP və zk-SNARKs)]]
- [[Yan Kanal Hücumları (Side-Channel Attacks)]]
- [[Post-Kvant Kriptoqrafiya (PQC)]]
- [[Qəfəs Əsaslı Kriptoqrafiya (Lattice-based & Kyber)]]
- [[Tam Homomorfik Şifrələmə (FHE)]]
- [[Təhlükəsiz Çoxtərəfli Hesablama (MPC)]]
- [[Qalua Meydanları GF(2^8)]]
- [[Hesablama Mürəkkəbliyi (P vs NP vs BQP)]]
