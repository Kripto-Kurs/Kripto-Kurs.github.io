---
title: Poly1305 və AEAD
type: concept
tags:
  - kriptoqrafiya
  - aead
  - poly1305
  - chacha20-poly1305
  - mac
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_15.html]]"
aliases:
  - Poly1305
  - ChaCha20-Poly1305
  - AEAD
---

# Poly1305 və AEAD (Authenticated Encryption with Associated Data)

**Poly1305** — 2005-ci ildə [[Daniel J. Bernstein (djb)]] tərəfindən yaradılmış, $2^{130}-5$ sadə modulu üzərində universal polinomial heşləmə ilə işləyən yüksək sürətli bir-dəfəlik autentikator alqoritmidir.

---

## 📐 Riyazi Hesablama Sxemi

Mətn 16-baytlıq $m_1, m_2, \dots, m_q$ bloklarına bölünür və $r$ açarı üzərində çoxhədli kimi qiymətləndirilir:

$$T = \Big(\sum_{i=1}^q m_i \cdot r^{q-i+1} \bmod (2^{130}-5)\Big) + s \bmod 2^{128}$$

burada $(r, s)$ 32-baytlıq gizli açardır ($s$ bir-dəfəlik maskadır).

---

## ⚡ ChaCha20-Poly1305 AEAD Konstruksiyası (RFC 8439)

1. **Şifrləmə:** Məlumat [[Trivium və ChaCha20|ChaCha20]] ilə axın şəklində şifrələnir.
2. **Autentikasiya:** Şifrəli mətn və əlaqəli açıq başlıqlar (Associated Data - məs. IP başlıqları) Poly1305 ilə imzalanır və 16-baytlıq təhlükəsizlik teqi ($Tag$) əldə edilir.
3. **Standartlar:** TLS 1.3, WireGuard VPN, [[Signal Protocol|Signal]] və Android mobil təhlükəsizliyində əsas AEAD alqoritmidir.

---

## 🔗 Əlaqəli Səhifələr

- [[Trivium və ChaCha20]]
- [[Blok Şifrə Rejimləri (ECB, CBC, CTR, GCM)]]
- [[Mesaj Autentikasiya Kodları (MAC və HMAC)]]
- [[Daniel J. Bernstein (djb)]]
- [[TLS 1.3 Protokolu]]
