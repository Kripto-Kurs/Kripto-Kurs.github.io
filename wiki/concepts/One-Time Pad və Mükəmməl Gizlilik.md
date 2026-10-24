---
title: One-Time Pad və Mükəmməl Gizlilik
type: concept
tags:
  - kriptoqrafiya
  - mükəmməl-gizlilik
  - otp
  - vernam
  - shannon
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - One-Time Pad
  - OTP
  - Vernam Şifrəsi
  - Perfect Secrecy
  - Mütləq Təhlükəsizlik
---

# One-Time Pad (OTP) və Mükəmməl Gizlilik (Perfect Secrecy)

**One-Time Pad (OTP)** (və ya *Vernam şifrəsi*) — riyazi olaraq sındırılması qeyri-mümkün olan yeganə simmetrik şifrələmə sistemidir. 1917-ci ildə Gilbert Vernam tərəfindən ixtira edilmiş, 1949-cu ildə isə [[Claude Shannon]] tərəfindən onun **mütləq təhlükəsizliyi (perfect secrecy)** riyazi şəkildə isbat edilmişdir.

---

## 📐 Riyazi Modeli

Mətn $m$ və açar $k$ eyni uzunluqlu bit ardıcıllıqlarıdır ($m, k \in \{0, 1\}^n$):

- **Şifrləmə:**
  $$c = m \oplus k$$
  (burada $\oplus$ bit səviyyəsində XOR / $\bmod 2$ toplama əməliyyatıdır)

- **Deşifrləmə:**
  $$m = c \oplus k$$

---

## 🛡️ Şennonun Mükəmməl Gizlilik Teoremi

[[Claude Shannon|Klod Şennon]] informasiya nəzəriyyəsi çərçivəsində təyin etmişdir ki, bir kriptosistemin mükəmməl gizli olması üçün:

$$P(M = m \mid C = c) = P(M = m)$$

Yəni, şifrəli mətni ($c$) müşahidə etmək hücumçuya ilkin açıq mətn ($m$) haqqında **heç bir əlavə informasiya vermir**.

### ⚠️ Mükəmməl Gizlilik üçün 3 Qızıl Şərt:

1. **Açar tam təsadüfi (truly random) olmalıdır:** Kvant və ya fiziki təsadüfi mənbələrdən törədilməlidir.
2. **Açarın uzunluğu ən azı mətnin uzunluğuna bərabər olmalıdır:** $|k| \ge |m|$.
3. **Açar yalnız və yalnız bir dəfə istifadə edilməlidir ("One-Time"):** Əgər eyni açar iki fərqli mətn üçün istifadə edilsə ($c_1 = m_1 \oplus k, c_2 = m_2 \oplus k$), hücumçu $c_1 \oplus c_2 = m_1 \oplus m_2$ əldə edərək açarı aradan çıxara və tezlik analizi ilə hər iki mətni aça bilər (Two-Time Pad zəifliyi).

---

## ⚖️ Niyə Bütün İnternet OTP İlə Şifrələnmir? (Praktik Məhdudiyyətlər)

1. **Açar Paylanması:** 10 GB həcmində video göndərmək üçün əvvəlcədən qarşı tərəfə təhlükəsiz yolla 10 GB tam təsadüfi açar çatdırılmalıdır. Əgər təhlükəsiz kanal varsa, videonun özünü də elə həmin kanalla göndərmək olardı.
2. **Tamlıq Zəifliyi:** OTP konfidensiallıq versə də, [[Kriptoqrafik Təhlükəsizlik Xidmətləri|Tamlıq]] təmin etmir; şifrəli mətnin $i$-ci bitini dəyişdirdikdə açıq mətnin də $i$-ci biti birbaşa dəyişir (Malleability).

---

## 🔗 Əlaqəli Səhifələr

- [[Claude Shannon]]
- [[Kerckhoffs Prinsipi]]
- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- [[Simmetrik və Asimmetrik Kriptoqrafiya]]
- [[Kriptoqrafiyada Riyazi İnversiya və Açar Məkanının Təhlili]]
