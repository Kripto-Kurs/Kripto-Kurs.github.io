---
title: "Summary - Mühazirələr 7-15: Simmetrik Şifrlər, AES, Blok Rejimləri və Heş Funksiyaları"
type: summary
tags:
  - kriptoqrafiya
  - simmetrik
  - aes
  - des
  - chacha20
  - hesh
  - sha-3
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Muhazirə_7.html]]"
  - "[[raw/Mühazirə_8.html]]"
  - "[[raw/Mühazirə_9.html]]"
  - "[[raw/Mühazirə_10.html]]"
  - "[[raw/Mühazirə_11.html]]"
  - "[[raw/Mühazirə_12.html]]"
  - "[[raw/Mühazirə_13.html]]"
  - "[[raw/Mühazirə_14.html]]"
  - "[[raw/Mühazirə_15.html]]"
aliases:
  - Mühazirə 7-15 Xülasəsi
  - Blok 2 Xülasəsi
---

# Mühazirə 7–15: Müasir Simmetrik Kriptoqrafiya, AES, Heş Funksiyaları və AEAD

Bu sənəd 2-ci Blokun (Simmetrik blok/axın şifrləri, Diferensial/Xətti kriptoanaliz, SHA-2/SHA-3 və AEAD) master xülasəsidir.

---

## 📌 Əsas Mövzular və Bölmələr

### 1. Müasir Axın Şifrələri (Mühazirə 7)

- **eSTREAM Layihəsi:** Hardware üçün [[Trivium və ChaCha20|Trivium]] (288-bit daxili vəziyyət, 80-bit açar), Software üçün ChaCha20 / Salsa20.
- **ChaCha20 Arxitekturası:** Daniel J. Bernstein tərəfindən yaradılıb. 512-bit (16 $\times$ 32-bit söz) vəziyyət matrisi üzərində ARX (Add-Rotate-Xor) əməliyyatları ilə işləyir. Zamanlama hücumlarına (timing attacks) qarşı təbii immunitetə malikdir.

### 2. Feystel Şəbəkələri və DES (Mühazirə 8)

- **Feystel Strukturu:** Mətni iki yerə ($L_{i-1}, R_{i-1}$) bölür:
  $$L_i = R_{i-1}, \quad R_i = L_{i-1} \oplus F(R_{i-1}, K_i)$$
  Üstünlüyü: $F$ funksiyasının tərsi olmasa belə eyni strukturla deşifrləmə mümkündür.
- **DES (Data Encryption Standard):** 64-bit blok, 56-bit effektiv açar, 16 raund. 56-bitlik açar fəzası kiçik olduğuna görə brute-force ilə sındırılıb (Triple-DES müvəqqəti əvəzləyici oldu).

### 3. Diferensial və Xətti Kriptoanaliz (Mühazirə 9)

- **Diferensial Kriptoanaliz (Eli Biham & Adi Shamir):** Giriş fərqlərinin ($\Delta P$) çıxış fərqlərinə ($\Delta C$) çevrilmə ehtimalını (DDT - Difference Distribution Table) izləyir.
- **Xətti Kriptoanaliz (Mitsuru Matsui):** Qeyri-xətti S-box-ların xətti aproksimasiyalarını (LAT - Linear Approximation Table) qurur.

### 4. AES Alqoritmi (Rijndael) (Mühazirə 10)

- **Dizayn:** Joan Daemen və Vincent Rijmen tərəfindən yaradılmış SPN (Substitution-Permutation Network) arxitekturası.
- **Parametrlər:** 128-bit blok; 128/192/256-bit açarlar (müvafiq olaraq 10/12/14 raund).
- **Raund Çevrilmələri:**
  1. `SubBytes` (Qeyri-xətti S-Box: $GF(2^8)$ üzərində multiplikativ inversiya + affin çevrilmə)
  2. `ShiftRows` (Sətirlərin dövri sürüşdürülməsi)
  3. `MixColumns` ($GF(2^8)$ üzərində matris vurulması - diffuziya)
  4. `AddRoundKey` (Raund açarı ilə XOR)

### 5. Blok Şifrə Rejimləri və AEAD (Mühazirə 11 & 12.1)

- **ECB (Electronic Codebook):** Deterministikdir, eyni bloklar eyni şifrəyə çevrilir (Məşhur "Linux Tux pinqvin şəkli" naxış sızıntısı nümunəsi). **Təhlükəlidir!**
  ![[aes_penguin.png]]
- **CBC (Cipher Block Chaining):** Hər blok əvvəlki şifrəli blokla XOR edilir ($C_i = E_K(P_i \oplus C_{i-1})$). IV təsadüfi olmalıdır.
- **CTR (Counter Mode):** Blok şifrəsini axın şifrəsinə çevirir ($C_i = P_i \oplus E_K(\text{Nonce} \mathbin{\Vert} i)$). Paralelləşdirilə bilir.
- **GCM (Galois/Counter Mode):** CTR şifrləməsini $GF(2^{128})$ üzərində GHASH autentikasiyası ilə birləşdirən AEAD standartıdır.

### 6. Heş Funksiyaları, SHA-3 və Keccak (Mühazirə 12, 13, 14)

- **Merkle-Damgård Konstruksiyası:** MD5, SHA-1, SHA-2 ailəsi. Giriş blok-blok sıxılma funksiyasından keçirilir. Uzunluq genişləndirmə (Length Extension Attack) zəifliyinə malikdir.
- **Süngər Konstruksiyası (Sponge - SHA-3 / Keccak):** 
  - *Absorbing (Udma) fazası:* Məlumat blokları vəziyyət matrisinin $r$ (rate) bitinə XOR edilir və $f$ permutasiyasından keçirilir.
  - *Squeezing (Sıxma) fazası:* Çıxış heş bitləri generasiya olunur. $c$ (capacity) təhlükəsizlik parametrini təyin edir.

### 7. MAC, HMAC və Poly1305 (Mühazirə 15)

- **HMAC:** $\text{HMAC}(K, M) = H((K \oplus \text{opad}) \mathbin{\Vert} H((K \oplus \text{ipad}) \mathbin{\Vert} M))$. Heş funksiyasını uzunluq genişləndirmə hücumlarından qoruyur.
- **Poly1305:** $2^{130}-5$ sadə modulu üzərində polinomial universal heşləmə ilə işləyən ultra-sürətli MAC alqoritmidir (ChaCha20-Poly1305 AEAD).

---

## 🔗 Əlaqəli Səhifələr

- [[AES Alqoritmi (Rijndael)]]
- [[Feystel Şəbəkələri və DES]]
- [[Trivium və ChaCha20]]
- [[Blok Şifrə Rejimləri (ECB, CBC, CTR, GCM)]]
- [[Süngər Konstruksiyası və Keccak (SHA-3)]]
- [[Mesaj Autentikasiya Kodları (MAC və HMAC)]]
- [[Poly1305 və AEAD]]
