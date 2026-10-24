---
title: Sıfır Biliyi Sübutları (ZKP və zk-SNARKs)
type: concept
tags:
  - kriptoqrafiya
  - zkp
  - snarks
  - blokceyn
  - mexfilik
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_26.html]]"
aliases:
  - Zero-Knowledge Proofs
  - ZKP
  - zk-SNARKs
  - zk-STARKs
---

# Sıfır Biliyi Sübutları (Zero-Knowledge Proofs - ZKP)

**Sıfır Biliyi Sübutu (ZKP)** — 1985-ci ildə [[Shafi Goldwasser və Silvio Micali|Şafi Qoldvasser, Silvio Mikali və Çarlz Rakoff]] tərəfindən irəli sürülmüş, Sübutçunun (Prover) Yoxlayıcıya (Verifier) hər hansı bir riyazi iddianın doğruluğunu **həmin sirr haqqında heç bir əlavə məlumat vermədən** sübut etməsinə imkan verən kriptoqrafik protokoldur.

---

## 🛡️ ZKP-nin 3 Qızıl Xassəsi

1. **Tamlıq (Completeness):** Əgər iddia həqiqətən doğrudursa və hər iki tərəf protokola düzgün əməl edirsə, dürüst Yoxlayıcı sübutu həmişə qəbul edir.
2. **Dürüstlük (Soundness):** Əgər iddia yalandırsa, heç bir yalançı Sübutçu (çox kiçik $\epsilon$ ehtimal istisna olmaqla) Yoxlayıcını aldada bilməz.
3. **Sıfır Biliyi (Zero-Knowledge):** Əgər iddia doğrudursa, Yoxlayıcı iddianın doğruluğu faktından başqa heç bir sirri (şifrəni, açarı və ya şəxsi məlumatı) öyrənmir.

---

## ⚡ zk-SNARKs və zk-STARKs

- **zk-SNARK:** *Zero-Knowledge Succinct Non-Interactive Argument of Knowledge*.
  - *Succinct:* Sübutun ölçüsü cəmi bir neçə yüz baytdır və bir neçə millisaniyəyə yoxlanılır.
  - *Non-Interactive:* Sübutçu ilə Yoxlayıcı arasında təkrar sorğu-cavab tələb olunmur (tək mesajla təqdim edilir).
- **Tətbiq Sahələri:**
  - **Məxfi Blokçeyn Tranzaksiyaları:** Zcash və Tornado Cash (göndərən, alan və məbləğ gizli qalır).
  - **Layer-2 Rollups (zk-Rollups):** Ethereum-da minlərlə tranzaksiyanı tək bir ZK sübutu ilə təsdiqləyərək 100x miqyaslanma.
  - **Məxfilik Qorunan Kimlik Doğrulaması:** "Yaşım 18-dən böyükdür" iddiasını doğum tarixini göstərmədən sübut etmək.

---

## 🔗 Əlaqəli Səhifələr

- [[Bitcoin]]
- [[Kriptoqrafik Heş Funksiyaları]]
- [[Elliptik Əyrilər Kriptoqrafiyası (ECC)]]
- [[Post-Kvant Kriptoqrafiya (PQC)]]
- [[Shafi Goldwasser və Silvio Micali]]
