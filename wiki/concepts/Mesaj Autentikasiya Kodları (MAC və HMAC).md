---
title: Mesaj Autentikasiya Kodları (MAC və HMAC)
type: concept
tags:
  - kriptoqrafiya
  - autentikasiya
  - tamliq
  - mac
  - hmac
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_15.html]]"
aliases:
  - Message Authentication Codes
  - MAC
  - HMAC
---

# Mesaj Autentikasiya Kodları (MAC və HMAC)

**Mesaj Autentikasiya Kodu (MAC)** — gizli simmetrik açardan ($K$) və ixtiyari uzunluqlu mesajdan ($M$) istifadə edərək sabit uzunluqlu teq ($T = \text{MAC}(K, M)$) generasiya edən simmetrik autentikasiya və tamlıq mexanizmidir.

---

## 🎯 Təmin Etdiyi Təhlükəsizlik Xidmətləri

Bax: [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- **Tamlıq (Integrity):** Mesajda hər hansı dəyişiklik edildikdə teq uyğun gəlmir.
- **Mənbə Autentikasiyası:** Gizli açarı yalnız qanuni tərəflər bildiyi üçün başqa heç kəs doğru teq yarada bilməz.

---

## ⚙️ HMAC (Hash-based MAC - RFC 2104)

Sadə $H(K \mathbin{\Vert} M)$ konstruksiyası Merkle-Damgård heşlərində uzunluq genişləndirmə hücumuna məruz qalır. Bunun qarşısını almaq üçün **HMAC** ikiqat heşləmə və daxili/xarici dolğu (padding) tətbiq edir:

$$\text{HMAC}(K, M) = H\Big((K' \oplus \text{opad}) \mathbin{\Vert} H\big((K' \oplus \text{ipad}) \mathbin{\Vert} M\big)\Big)$$

- $\text{ipad} = \text{0x36}$ (Inner Pad: 64 bayt təkrarlanır)
- $\text{opad} = \text{0x5C}$ (Outer Pad: 64 bayt təkrarlanır)
- $K'$ açarın blok ölçüsünə qədər uyğunlaşdırılmış formasıdır.

---

## 🔗 Əlaqəli Səhifələr

- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- [[Kriptoqrafik Heş Funksiyaları]]
- [[Poly1305 və AEAD]]
- [[Blok Şifrə Rejimləri (ECB, CBC, CTR, GCM)]]
