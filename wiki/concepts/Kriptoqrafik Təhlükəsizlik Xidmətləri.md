---
title: Kriptoqrafik Təhlükəsizlik Xidmətləri
type: concept
tags:
  - tehlukesizlik
  - ciaan
  - konfidensialliq
  - tamliq
  - autentikasiya
  - inkarolunmazliq
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Security Services
  - CIAAN
  - Dörd Təhlükəsizlik Xidməti
---

# Kriptoqrafik Təhlükəsizlik Xidmətləri (CIAAN)

İnformasiya təhlükəsizliyi və kriptoqrafiyanın dörd əsas təməl xidməti vardır (Əlçatanlıq / Availability ilə birlikdə CIAAN modeli):

---

## 1. Konfidensiallıq (Confidentiality)

- **Məqsəd:** Məlumatın yalnız səlahiyyətli tərəflər tərəfindən oxunmasını təmin etmək, icazəsiz dinləmənin (eavesdropping) qarşısını almaq.
- **Əsas Mexanizmlər:** 
  - Simmetrik şifrələmə (AES, ChaCha20)
  - Asimmetrik şifrələmə (RSA, ECIES)
- **Nümunə:** [[Signal Protocol]] və HTTPS/TLS ilə ötürülən məlumatların şifrələnməsi.

## 2. Tamlıq (Integrity)

- **Məqsəd:** Məlumatın ötürülmə və ya saxlanma zamanı icazəsiz şəkildə dəyişdirilmədiyini, silinmədiyini və ya əlavələr edilmədiyini təmin etmək.
- **Əsas Mexanizmlər:**
  - Kriptoqrafik heş funksiyaları (SHA-256, SHA-3, BLAKE3)
  - Mesaj Autentikasiya Kodları (HMAC, CMAC)
  - Rəqəmsal imzalar
- **Kritik Qeyd:** [[Klassik Şifrələr və Modul Arifmetika|Klassik şifrlər]] (məs. [[Sezar Şifrəsi]], [[Affin Şifrəsi]]) tamlıq təmin etmir; şifrəli mətn asanlıqla manipulyasiya edilə bilər.

## 3. Autentikasiya (Authentication)

- **Məqsəd:** Mesajın həqiqətən iddia olunan göndərəndən gəldiyini və ya tərəfin şəxsiyyətini təsdiq etmək.
  - *Mənbə autentikasiyası (Data origin authentication)*
  - *Varlıq autentikasiyası (Entity authentication)*
- **Əsas Mexanizmlər:**
  - HMAC (simmetrik paylaşılan açarla)
  - Rəqəmsal imzalar (asimmetrik açar cütü ilə)
- **Fərq:** Təkbaşına heş funksiyası autentikasiya vermir, çünki heşi hər kəs hesablaya bilər. Gizli açarlı mexanizm tələb olunur.

## 4. İnkar Edilməzlik (Non-repudiation)

- **Məqsəd:** Göndərənin sonradan mesajı göndərdiyini və ya əməliyyatı icra etdiyini hüquqi və texniki cəhətdən inkar edə bilməməsini təmin etmək.
- **Əsas Mexanizmlər:**
  - Yalnız **asimmetrik rəqəmsal imzalar** (məs. ECDSA, Ed25519, RSA-PSS).
- **Fərq:** Simmetrik kriptoqrafiya inkar edilməzlik verə bilməz, çünki simmetrik açar həm göndərəndə, həm də alanda mövcuddur; alan tərəf də saxta mesaj yarada bilərdi.

---

## 📊 Təhlükəsizlik Xidmətlərinin Müqayisə Cədvəli

| Xidmət | Əsas Məqsəd | Simmetrik Texnika | Asimmetrik Texnika | Klassik Şifrlərdə Vəziyyət |
| :--- | :--- | :--- | :--- | :--- |
| **Konfidensiallıq** | Gizlilik | AES, ChaCha20 | RSA, ElGamal | ✅ Mövcuddur (lakin zəifdir) |
| **Tamlıq** | Dəyişdirilməzlik | HMAC, Poly1305 | Rəqəmsal İmza | ❌ Yoxdur |
| **Autentikasiya** | Mənbə təsdiqi | HMAC | Rəqəmsal İmza | ❌ Yoxdur |
| **İnkar Edilməzlik** | İnkardan müdafiə | ❌ Mümkün deyil | ECDSA, Ed25519 | ❌ Yoxdur |

---

## 🔗 Əlaqəli Səhifələr

- [[Simmetrik və Asimmetrik Kriptoqrafiya]]
- [[Kerckhoffs Prinsipi]]
- [[Təhdid Modelləri]]
- [[Summary - Mühazirə 1 (Kriptoqrafiyaya Giriş)]]
