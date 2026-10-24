---
title: "Summary - Mühazirə 1: Kriptoqrafiyaya Giriş"
type: summary
tags:
  - kriptoqrafiya
  - tehlukesizlik
  - muhazire
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
aliases:
  - Mühazirə 1 Xülasəsi
  - Kriptoqrafiyaya Giriş Xülasəsi
---

# Mühazirə 1: Kriptoqrafiyaya Giriş — Mənbə Xülasəsi

Bu sənəd [[raw/Mühazirə_1.html]] mühazirə qeydlərinin əsas anlayışlarını, təhlükəsizlik prinsiplərini və tətbiq sahələrini ümumiləşdirir.

---

## 📌 Əsas Mövzular və Bölmələr

### 1. Kriptologiyanın Quruluşu

- **Kriptologiya** = **Kriptoqrafiya** (qıfıl düzəltmək) + **Kriptoanaliz** (qıfılı açmaq).
- Təriflər:
  - *Kriptoqrafiya*: Məlumatın məxfiliyini, bütövlüyünü, autentikliyini və inkarolunmazlığını təmin edən riyazi üsullar və protokollar toplusu.
  - *Kriptoanaliz*: Məxfi açarı bilmədən şifrələnmiş sistemləri analiz edib zəiflikləri aşkar etmək.

### 2. Gündəlik Tətbiqlər

Kriptoqrafiya müasir rəqəmsal infrastrukturların təməlidir:
- **E-poçt təhlükəsizliyi**: [[PGP və S-MIME]] vasitəsilə şifrələmə və rəqəmsal imzalar.
- **Uçdan-uca şifrələmə (E2EE)**: [[Signal Protocol]], WhatsApp və Telegram Secret Chats vasitəsilə serverlərin belə məlumatı oxuya bilməməsi.
- **Bank kartları və ödənişlər**: [[EMV Standartı]] ilə hər əməliyyat üçün dinamik kriptoqramlar və çip-daxili PIN təsdiqi.
- **Veb təhlükəsizliyi**: HTTPS / TLS protokolları ilə müştəri-server kanalının şifrələnməsi.
- **Kriptovalyutalar**: [[Bitcoin]] və rəqəmsal imzalar, heş zəncirləri və Proof of Work konsensusa əsaslanan sistemlər.
- **Simsiz şəbəkələr**: WPA2 və WPA3 protokolları ilə radio-kanalın qorunması.

### 3. Dörd Əsas Təhlükəsizlik Xidməti (CIAAN)

Bax: [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
1. **Konfidensiallıq (Confidentiality)**: İcazəsiz şəxslərin məlumatı oxumasının qarşısını alır (şifrləmə ilə).
2. **Tamlıq (Integrity)**: Məlumatın icazəsiz dəyişdirilməsinin qarşısını alır və ya aşkar edir (Heş funksiyaları, MAC).
3. **Autentikasiya (Authentication)**: Tərəfin və ya mesajın mənbəyinin iddia olunan şəxs olduğunu təsdiqləyir (MAC, Rəqəmsal İmza).
4. **İnkar edilməzlik (Non-repudiation)**: Göndərənin mesajı sonradan inkar etməsinin qarşısını alır (Yalnız asimmetrik rəqəmsal imzalarla mümkündür).

### 4. Kerckhoffs Prinsipi və Şennon Maksimi

Bax: [[Kerckhoffs Prinsipi]]
- **Qayda**: Kriptoqrafik sistemin təhlükəsizliyi alqoritmin gizliliyinə deyil, yalnız və yalnız **açarın gizli saxlanmasına** əsaslanmalıdır.
- "Security through obscurity" (gizlilik yolu ilə təhlükəsizlik) etibarsızdır.
- Şennon maksimi: *"Düşmən sistemi bilir!"*

### 5. Simmetrik vs Asimmetrik Kriptoqrafiya

Bax: [[Simmetrik və Asimmetrik Kriptoqrafiya]]
- **Simmetrik**: Tək gizli açar ($n$ istifadəçi üçün $n(n-1)/2$ sayda açar lazımdır). Sürətlidir, lakin açar mübadiləsi çətindir.
- **Asimmetrik**: İctimai və gizli açar cütü ($n$ istifadəçi üçün $2n$ sayda açar kifayətdir). Açar mübadiləsi və rəqəmsal imza üçün idealdır, lakin hesablama baxımından daha yavaşdır.

### 6. Təhdid Modelləri

Bax: [[Təhdid Modelləri]]
- Hücumçu imkanlarına görə 4 səviyyə:
  1. *Ciphertext-Only Attack (COA)* — Yalnız şifrəli mətn əsasında.
  2. *Known-Plaintext Attack (KPA)* — Açıq mətn - şifrəli mətn cütləri məlum olduqda.
  3. *Chosen-Plaintext Attack (CPA)* — Hücumçunun seçdiyi açıq mətnlərin şifrəsini ala bildiyi hal.
  4. *Chosen-Ciphertext Attack (CCA)* — Hücumçunun seçdiyi şifrəli mətnlərin deşifrəsini ala bildiyi hal.

---

## 🔗 Əlaqəli Wiki Səhifələri

- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- [[Kerckhoffs Prinsipi]]
- [[Simmetrik və Asimmetrik Kriptoqrafiya]]
- [[Təhdid Modelləri]]
- [[Auguste Kerckhoffs]]
- [[Claude Shannon]]
- [[PGP və S-MIME]]
- [[Signal Protocol]]
- [[EMV Standartı]]
