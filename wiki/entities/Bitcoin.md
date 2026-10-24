---
title: Bitcoin
type: entity
tags:
  - kriptovalyuta
  - blokceyn
  - bitcoin
  - konsensus
  - pow
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
aliases:
  - BTC
  - Bitcoin Şəbəkəsi
---

# Bitcoin (BTC)

**Bitcoin** — 2008-ci ildə Satoşi Nakamoto tərəfindən irəli sürülmüş və 2009-cu ildə fəaliyyətə başlamış dünyanın ilk mərkəzsizləşdirilmiş kriptovalyutası və rəqəmsal ödəniş protokoludur.

---

## 🔒 Bitcoin-də Kriptoqrafik Primitivlər

Bitcoin mühazirə 1-də kriptoqrafiyanın müasir tətbiqlərinin zirvəsi kimi təsvir edilmişdir. O, aşağıdakı əsas sütunlar üzərində dayanır:

1. **Rəqəmsal İmzalar (ECDSA / Schnorr - secp256k1):**
   - Hər bir tranzaksiya göndərənin asimmetrik gizli açarı ilə rəqəmsal olaraq imzalanır.
   - Bax: [[Kriptoqrafik Təhlükəsizlik Xidmətləri]], [[Simmetrik və Asimmetrik Kriptoqrafiya]].
2. **Kriptoqrafik Heş Funksiyaları (SHA-256 və RIPEMD-160):**
   - Blokların ardıcıl zəncirlənməsi və məlumatların bütövlüyünün (tamlığının) qorunması.
   - Tranzaksiyaların Merkle Ağacında (Merkle Tree) kompakt təsdiqi.
   - Bitcoin ünvanlarının generasiyası: $\text{RIPEMD160}(\text{SHA256}(pk))$.
3. **Proof of Work (PoW - İşin İsbatı):**
   - Adam Back-in Hashcash konsepsiyasına əsaslanır.
   - Blokun heşinin müəyyən sayda sıfırla başlamasını tələb edən qeyri-simmetrik hesablama tapşırığı:
     $$\text{SHA256}(\text{SHA256}(\text{BlockHeader} \mathbin{\Vert} \text{Nonce})) < \text{Target}$$

---

## 🔗 Əlaqəli Səhifələr

- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- [[Simmetrik və Asimmetrik Kriptoqrafiya]]
- [[Claude Shannon]]
- [[Summary - Mühazirə 1 (Kriptoqrafiyaya Giriş)]]
