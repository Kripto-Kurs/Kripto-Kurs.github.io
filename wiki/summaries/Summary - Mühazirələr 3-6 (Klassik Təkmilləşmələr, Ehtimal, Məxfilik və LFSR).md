---
title: "Summary - Mühazirələr 3-6: Klassik Təkmilləşmələr, Ehtimal, Məxfilik və LFSR"
type: summary
tags:
  - kriptoqrafiya
  - axin-sifrleri
  - lfsr
  - ehtimal
  - vigenere
created: 2026-08-21
updated: 2026-08-21
sources:
  - "[[raw/Mühazirə_3.html]]"
  - "[[raw/Mühazirə_4.html]]"
  - "[[raw/Mühazirə_5.html]]"
  - "[[raw/Mühazirə_6.html]]"
aliases:
  - Mühazirə 3-6 Xülasəsi
  - Blok 1 Xülasəsi
---

# Mühazirə 3–6: Polialfabetik Şifrlər, Ehtimal Kriptoanalizi, İnformasiya Nəzəriyyəsi və LFSR

Bu sənəd 1-ci Blokun (Mühazirə 3-6) nəzəri və riyazi əsaslarının xülasəsidir.

---

## 📌 Əsas Mövzular və Bölmələr

### 1. Mühazirə 3: Polialfabetik Şifrələr və Vijener

- **Mahiyyət:** [[Poliəlifbalı Əvəzetmə Şifrələri|Vijener şifrəsi]] açıq mətnin hərflərini açar sözün mövqeyinə uyğun olaraq fərqli Sezar sürüşdürmələri ilə şifrələyir.
- **Kriptoanaliz:** 
  - *Kasiski testi:* Təkrarlanan simvol qrupları arasındakı məsafələrin ƏBOB-u ilə açar uzunluğu ($d$) tapılır.
  - *Uyğunluq İndeksi (Index of Coincidence - $I_c$):* Təsadüfi mətndə $I_c \approx 0.038$, ingilis dilində $I_c \approx 0.065$. Bu statistik fərq açar uzunluğunu dəqiq aşkar edir.

### 2. Mühazirə 4: Ehtimal Nəzəriyyəsi və Kriptoanaliz

- **Riyazi Aparat:** Şərti ehtimal, Bayes teoremi və təsadüfi dəyişənlərin paylanması.
- **Doğum Günü Paradoksu (Birthday Paradox):** $N$ mümkün qiymətdən $50\%$ ehtimalla toqquşma əldə etmək üçün cəmi $\approx 1.17 \sqrt{N} = O(\sqrt{N})$ sınaq kifayətdir. Bu prinsip heş funksiyalarının toqquşma hücumlarının təməlidir.

### 3. Mühazirə 5: İnformasiya Nəzəriyyəsi və Mütləq Məxfilik

- **Entropiya ($H(X)$):** Şennon entropiyası informasiyadakı qeyri-müəyyənliyin ölçüsüdür: $H(X) = -\sum P(x) \log_2 P(x)$.
- **Mütləq Məxfilik Teoremi:** $H(M \mid C) = H(M)$. [[One-Time Pad və Mükəmməl Gizlilik|One-Time Pad]] şifrəsində açar mətn uzunluğunda və tam təsadüfi olduqda şifrəli mətn açıq mətn haqqında heç bir informasiya sızdırmır.
- **Spurious Keys və Unicity Distance:** Mətnin uzunluğu $n_0 \approx \frac{H(K)}{D}$ olduqda hücumçu saxta açarları tam təmizləyib yeganə doğru açarı tapa bilir.

### 4. Mühazirə 6: Axın Şifrələri və LFSR

- **Axın Şifrləri (Stream Ciphers):** Bit-bit şifrləmə ($c_i = m_i \oplus k_i$). Açar ardıcıllığı (keystream) deterministik PRNG ilə yaradılır.
- **LFSR (Linear Feedback Shift Register):** Xətti Əks Əlaqəli Sürüşmə Reqistrləri hardware-də son dərəcə sürətlidir.
- **Dövretmə Periodu:** $n$ dərəcəli LFSR üçün maksimum period $2^n - 1$-dir (əgər əlaqə çoxhədlisi primitivdirsə).
- **Zəiflik və Berlekamp-Massey Alqoritmi:** Xəttilik səbəbindən cəmi $2n$ bit məlum olduqda bütün LFSR daxili vəziyyəti bərpa olunur. Buna görə müasir axın şifrlərində qeyri-xətti filtrlər istifadə edilir.

---

## 🔗 Əlaqəli Səhifələr

- [[Poliəlifbalı Əvəzetmə Şifrələri]]
- [[One-Time Pad və Mükəmməl Gizlilik]]
- [[Claude Shannon]]
- [[Tezlik Analizi]]
- [[LFSR və Axın Şifrələri]]
