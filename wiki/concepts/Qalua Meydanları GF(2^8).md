---
title: Qalua Meydanları GF(2^8)
type: concept
tags:
  - riyaziyyat
  - cebr
  - galois-field
  - aes
  - sonlu-meydan
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Kripto_kurs_Əlavə_B_Qrup_Meydan_vəsair.html]]"
  - "[[raw/Mühazirə_10.html]]"
aliases:
  - Galois Field GF(2^8)
  - Sonlu Meydanlar
  - Qalua Sahəsi
---

# Qalua Meydanları $GF(2^8)$ (Finite Fields)

**Qalua Meydanı ($GF(p^n)$)** — sonlu sayda elementdən ibarət olan və toplama, çıxma, vurma və sıfırdan fərqli bölmə əməliyyatlarının qapalı şəkildə təyin olunduğu cəbri strukturdur.

Kriptoqrafiyada (xüsusən [[AES Alqoritmi (Rijndael)|AES]] və GCM-də) kompüterin 1 baytına uyğun gələn **$GF(2^8)$ (256 elementli sahə)** əsas rol oynayır.

---

## 📐 Çoxhədli Təsviri və Əməliyyatlar

Hər bir bayt $b_7 b_6 \dots b_0$ 7-ci dərəcəli çoxhədli kimi təsvir olunur:
$$b(x) = b_7 x^7 + b_6 x^6 + \dots + b_1 x + b_0 \in \mathbb{Z}_2[x]$$

- **Toplama və Çıxma:** Bit səviyyəsində XOR ($\oplus$) əməliyyatıdır (əldə daşınmır).
- **Vurma:** Adi çoxhədli vurulması aparılır və nəticə AES-in **İndirgənməyən (İrreducible) Çoxhədlisinə** bölünərək qalıq tapılır:
  $$m(x) = x^8 + x^4 + x^3 + x + 1 \quad (\text{Onaltılıq: } \text{0x11B})$$
- **Multiplikativ İnversiya ($a^{-1}$):** $a \cdot a^{-1} \equiv 1 \pmod{m(x)}$. Bu inversiya AES `SubBytes` S-Box-unun qeyri-xəttilik mənbəyidir.

---

## 🔗 Əlaqəli Səhifələr

- [[AES Alqoritmi (Rijndael)]]
- [[Blok Şifrə Rejimləri (ECB, CBC, CTR, GCM)]]
- [[Modul Arifmetika]]
