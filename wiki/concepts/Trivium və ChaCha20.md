---
title: Trivium və ChaCha20
type: concept
tags:
  - kriptoqrafiya
  - axin-sifresi
  - chacha20
  - trivium
  - estream
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Muhazirə_7.html]]"
aliases:
  - Trivium and ChaCha20
  - Modern Stream Ciphers
  - ChaCha20
---

# Trivium və ChaCha20 (Müasir Axın Şifrələri)

Müasir axın şifrələri köhnə və qüsurlu LFSR / RC4 sistemlərini əvəz etmək üçün eSTREAM layihəsi və [[Daniel J. Bernstein (djb)]] tərəfindən yaradılmış yüksək təhlükəsizlikli alqoritmlərdir.

---

## ⚡ 1. ChaCha20 (Software Üçün Standart)

- **Dizayn:** Daniel J. Bernstein (2008).
- **Struktur:** 512-bitlik daxili vəziyyət $4 \times 4$ ölçülü 32-bitlik tam ədədlər matrisi kimi təşkil olunur (4 sabit söz, 8 açar sözü, 1 sayğac sözü, 3 nonce sözü).
- **Əməliyyatlar (ARX):** Yalnız 3 sadə və sürətli CPU əməliyyatı:
  - **A**ddition (Toplama: $a \leftarrow (a + b) \bmod 2^{32}$)
  - **R**otation (Sola dövri sürüşdürmə: $d \leftarrow (d \oplus a) \lll k$)
  - **X**OR ($d \leftarrow d \oplus a$)
- **Üstünlüyü:** Heç bir cədvəl axtarışı (S-Box lookup) istifadə etmədiyi üçün **Zaman Kanalı Hücumlarına (Timing Side-Channel Attacks)** qarşı tamamilə immunitetlidir. [[Poly1305 və AEAD|Poly1305]] ilə birlikdə mobil cihazlarda və TLS 1.3-də geniş istifadə edilir.

---

## 🔌 2. Trivium (Hardware Üçün Ultra-Yüngül Standart)

- **Dizayn:** Christophe De Cannière və Bart Preneel (eSTREAM hardware finalçısı).
- **Quruluş:** 3 ədəd qeyri-xətti birləşdirilmiş sürüşmə reqistrindən (NLFSR) ibarət cəmi **288-bit** daxili vəziyyət:
  - Reqistr A: 93 bit
  - Reqistr B: 84 bit
  - Reqistr C: 111 bit
- **Resurs Tələbatı:** Cəmi ~2600 məntiqi qapı (logic gates). IoT, RFID və sensor cihazları üçün idealdır.

---

## 🔗 Əlaqəli Səhifələr

- [[LFSR və Axın Şifrələri]]
- [[Poly1305 və AEAD]]
- [[Yan Kanal Hücumları (Side-Channel Attacks)]]
- [[Daniel J. Bernstein (djb)]]
- [[TLS 1.3 Protokolu]]
