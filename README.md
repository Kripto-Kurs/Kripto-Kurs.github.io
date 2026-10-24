# KRİPTOQRAFİYA KURSU: MASTER Veb Tətbiqi və LLM Wiki Bilik Bazası

Bu repozitoriya universitet və peşəkar səviyyəli **Kriptoqrafiya və Blokçeyn Kursunun (30 Mühazirə + 4 Fundamental Əlavə)** həm interaktiv **SPA Veb Tətbiqini**, həm də **Obsidian + LLM Wiki** şəbəkəli bilik bazasını ehtiva edir.

Materiallar Açıq Təhsil Resursu (OER) kimi tələbələr, tədqiqatçılar, proqramçılar və kibertəhlükəsizlik mütəxəssisləri üçün tam sərbəst şəkildə təqdim olunur.

---

## 🚀 Layihəni Necə Qaldırmaq Olar? (Quraşdırma və İstismar)

Layihəni istənilən əməliyyat sistemində (macOS, Linux, Windows) 4 fərqli və rahat üsulla dərhal işə sala bilərsiniz:

### 📋 İlkin Tələblər (Prerequisites)

- [Git](https://git-scm.com/) (kodları yükləmək üçün)
- Aşağıdakı platformalardan **ən azı biri**:
  - **Docker & Docker Compose** (tövsiyə olunan) — [Docker Desktop Yüklə](https://www.docker.com/products/docker-desktop/)
  - və ya **Python 3** (macOS və Linux-da hazır gəlir)
  - və ya **Node.js** (ixtiyari)

---

### 🐳 Metod 1: Docker və Docker Compose ilə (Ən Rahat və Tövsiyə Olunan)

Layihə daxilindəki hazır `Dockerfile` və `compose.yaml` sayəsində tətbiqi Nginx mühitində tək bir komanda ilə qaldıra bilərsiniz:

```bash
# 1. Repozitoriyanı kompüterinizə klonlayın
git clone https://github.com/SuleimanHajizadeh/Kripto-Kurs.git
cd Kripto-Kurs

# 2. Konteyneri arxa fonda (background) işə salın
docker compose up -d
```

🌐 **Tətbiqi açın:** Brauzerinizdə **[http://localhost:8080](http://localhost:8080)** ünvanına daxil olun.

#### 🛠️ Faydalı Docker Komandaları:

- **Konteynerin vəziyyətini yoxlamaq:**
  ```bash
  docker compose ps
  ```
- **Konteyneri dayandırmaq və bağlamaq:**
  ```bash
  docker compose down
  ```
- **Yenidən qurub işə salmaq (yeniləmələrdən sonra):**
  ```bash
  docker compose up -d --build
  ```
- **Docker Compose olmadan, təmiz Docker CLI ilə işlətmək:**
  ```bash
  docker build -t kripto-kurs .
  docker run -d -p 8080:80 --name kripto-kurs-app kripto-kurs
  # Dayandırmaq üçün: docker stop kripto-kurs-app && docker rm kripto-kurs-app
  ```

---

### 💻 Metod 2: Sadə Lokal Veb Server ilə (Docker-siz)

Əgər kompüterinizdə Docker yoxdursa, heç bir xarici asılılıq quraşdırmadan birbaşa Python və ya Node.js ilə dərhal aça bilərsiniz:

```bash
# 1. Repozitoriyanı klonlayın və veb qovluğuna keçin
git clone https://github.com/SuleimanHajizadeh/Kripto-Kurs.git
cd Kripto-Kurs/Kripto_WebApp-HTML-SPA

# 2. Serveri başladın:
# Python 3 ilə:
python3 -m http.server 8080

# və ya Node.js (npx) ilə:
npx serve -l 8080 .
```

🌐 **Tətbiqi açın:** Brauzerinizdə **[http://localhost:8080](http://localhost:8080)** ünvanına daxil olun.

---

### 🌐 Metod 3: GitHub Pages ilə Avtomatik Canlı Deploy (GitHub Actions)

Layihə `.github/workflows/deploy-pages.yml` daxilində hazırlanmış rəsmi GitHub Actions avtomatlaşdırması ilə GitHub Pages üzərində 1-kliklə canlı yayımlanmaq üçün tam hazırdır:

1. Repozitoriyanızın **Settings** $\to$ **Pages** bölməsinə daxil olun.
2. **Build and deployment** bölməsindəki **Source** menyusundan **"GitHub Actions"** seçin.
3. `master` budağına push etdiyiniz anda tətbiq avtomatik build olunub canlı yayımlanacaq:
   - 🔗 **Canlı Sayt Ünvanı:** `https://SuleimanHajizadeh.github.io/Kripto-Kurs/`

---

### 📂 Metod 4: Birbaşa Brauzerdə Fayl Kimi Açmaq (Oflayn Rejim)

Layihədə bütün 30 mühazirə və 4 elmi əlavə `lectures_bundle.js` daxilində hazır paketləndiyi üçün, heç bir server işlətmədən də istifadə edə bilərsiniz:
1. `Kripto_WebApp-HTML-SPA/` qovluğuna daxil olun.
2. `index.html` faylını iki dəfə klikləyərək istənilən veb brauzerdə (Chrome, Safari, Firefox, Edge) birbaşa açın.

---

## 🏛️ Layihə Arxitekturası və Fayl Strukturu

```text
Kripto-Kurs/
├── .github/workflows/deploy-pages.yml                 # GitHub Pages avtomatik CI/CD deploy iş axını
├── Dockerfile                                         # Nginx Alpine əsaslı istehsal konteyner şablonu
├── compose.yaml                                       # Tək komandalıq Docker Compose orkestrasiyası
├── nginx.conf                                         # Gzip sıxılma, UTF-8 və SPA yönləndirməli Nginx konfiqurasiyası
├── jsconfig.json & .vscode/                           # IDE və redaktor inteqrasiyası
├── .gitignore & .dockerignore                         # Git və Docker istisnaları
├── AGENTS.md                                          # LLM Wiki Konvensiyaları və Agent Protokolları
├── index.md                                           # Master Bilik Kataloqu: Bütün mövzular, anlayışlar və sintezlər
├── log.md                                             # Xronoloji Hadisə Jurnalı: Bütün əməliyyatların daimi qeydiyyatı
├── README.md                                          # Layihənin ümumi master sənədləşməsi (bu fayl)
│
├── Kripto_WebApp-HTML-SPA/                            # İnteraktiv Tədris Veb Tətbiqi (Single Page Application)
│   ├── index.html                                     # Master SPA interfeysi (Kataloq, 34 modul görünüşü, Kalkulyatorlar, Quiz)
│   ├── app.js                                         # Universal Hash Router, Dinamik Məzmun Mühərriki, Citation Handler
│   ├── references_data.js                             # 674 elmi mənbənin strukturlaşdırılmış BibTeX verilənlər bazası
│   ├── lectures_bundle.js                             # 0ms gecikmə ilə anında açılan in-memory sıxılmış mühazirələr paketi
│   ├── style.css                                      # Master Dizayn Sistemi (Akademik işıqlı mövzu, MathJax CSS)
│   ├── aes_penguin.png                                # Blok şifrə rejimlərinin (ECB vs CBC) vizual müqayisə infoqrafiki
│   │
│   ├── [MÖVZU BLOKU 1: KLASSİK KRİPTOQRAFİYA VƏ TƏMƏLLƏR]
│   ├── Mühazirə_1.html / lecture_1.html               # 1. Kriptoqrafiyaya Giriş və Təhlükəsizlik Xidmətləri (CIAAN)
│   ├── Mühazirə_2.html / lecture_2.html               # 2. Klassik Şifrələr (Sezar, Affin, Monoalfabetik, Modul Arifmetika)
│   ├── Mühazirə_3.html / lecture_3.html               # 3. Polialfabetik Şifrələr və Vijener Şifrəsi (Kasiski analizi)
│   ├── Mühazirə_4.html / lecture_4.html               # 4. Ehtimal Nəzəriyyəsi və Kriptoanaliz
│   ├── Mühazirə_5.html / lecture_5.html               # 5. İnformasiya Nəzəriyyəsi və Mütləq Məxfilik (One-Time Pad, Şennon)
│   ├── Mühazirə_6.html / lecture_6.html               # 6. Axın Şifrələri və LFSR (Xətti Əks Əlaqəli Sürüşmə Reqistrləri)
│   │
│   ├── [MÖVZU BLOKU 2: SİMMETRİK ŞİFRLƏR VƏ HEŞ FUNKSİYALARI]
│   ├── Muhazirə_7.html / lecture_7.html               # 7. Müasir Axın Şifrələri (Trivium, ChaCha20, eSTREAM)
│   ├── Mühazirə_8.html / lecture_8.html               # 8. Feystel Şəbəkələri və DES (Data Encryption Standard)
│   ├── Mühazirə_9.html / lecture_9.html               # 9. Diferensial və Xətti Kriptoanaliz (Biham, Shamir, Matsui)
│   ├── Mühazirə_10.html / lecture_10.html             # 10. AES Alqoritmi (Rijndael, SPN, S-Box, SubBytes, MixColumns)
│   ├── Mühazirə_11.html / lecture_11.html             # 11. Blok Şifrə Rejimləri (ECB, CBC, CFB, OFB, CTR, GCM)
│   ├── Mühazirə_12.html / lecture_12.html             # 12. Hash Funksiyaları (Merkle-Damgård, MD5, SHA-1, SHA-2)
│   ├── Mühazirə_13.html / lecture_13.html             # 13. SHA-3 və Süngər (Sponge) Konstruksiyaları
│   ├── Mühazirə_14.html / lecture_14.html             # 14. Keccak Alqoritmi və Daxili Permutasiyalar
│   ├── Mühazirə_15.html / lecture_15.html             # 15. MAC (Message Authentication Code) və Hibrid Şifrləmə
│   │
│   ├── [MÖVZU BLOKU 3: ASİMMETRİK KRİPTOQRAFİYA VƏ ƏDƏDLƏR NƏZƏRİYYƏSİ]
│   ├── Mühazirə_16.html / lecture_16.html             # 16. Asimmetrik Kriptoqrafiya Təməlləri və Açar Paylanması
│   ├── Mühazirə_17.html / lecture_17.html             # 17. Ədədlər Nəzəriyyəsi və Modul Arifmetika (Evklid, Fermat)
│   ├── Mühazirə_18.html / lecture_18.html             # 18. Evler Funksiyası və Çin Qalıq Teoremi (CRT)
│   ├── Mühazirə_19.html / lecture_19.html             # 19. RSA Kriptosistemi (Açar generasiyası, Şifrləmə, OAEP)
│   ├── Mühazirə_20.html / lecture_20.html             # 20. Difi-Hellman (DH) Açar Mübadiləsi və Diskret Loqarifm
│   ├── Mühazirə_21.html / lecture_21.html             # 21. Elliptik Əyrilər Kriptoqrafiyası (ECC və Weierstrass tənlikləri)
│   ├── Mühazirə_22.html / lecture_22.html             # 22. ECDH və ECDSA Protokolları (secp256k1)
│   ├── Mühazirə_23.html / lecture_23.html             # 23. Rəqəmsal İmzalar (ElGamal, Schnorr, EdDSA/Ed25519)
│   │
│   ├── [MÖVZU BLOKU 4: ŞƏBƏKƏ PROTOKOLLARI VƏ QABAQCIL KRİPTOQRAFİYA]
│   ├── Mühazirə_24.html / lecture_24.html             # 24. Açar İdarəetməsi və PKI (X.509 Sertifikatlar, CA, CRL, OCSP)
│   ├── Mühazirə_25.html / lecture_25.html             # 25. Təhlükəsiz Şəbəkə Protokolları (TLS 1.3, IPsec, SSH, HTTPS)
│   ├── Mühazirə_26.html / lecture_26.html             # 26. Sıfır Biliyi Sübutları (ZKP, zk-SNARKs, zk-STARKs)
│   ├── Mühazirə_27.html / lecture_27.html             # 27. Yan Kanal Hücumları (Side-Channel: Zaman, Güc/DPA, Kəş)
│   ├── Mühazirə_28.html / lecture_28.html             # 28. Post-Kvant Kriptoqrafiya (PQC - Şor və Qrover təhdidləri)
│   ├── Mühazirə_29.html / lecture_29.html             # 29. Qəfəs (Lattice), Kod və Heş Əsaslı PQC (Kyber, Dilithium, SPHINCS+)
│   ├── Mühazirə_30.html / lecture_30.html             # 30. Müasir Tətbiqlər (Blokçeyn, MPC, Homomorfik Şifrələmə - FHE)
│   │
│   └── [MÖVZU BLOKU 5: FUNDAMENTAL ƏLAVƏLƏR VƏ TRAKTATLAR]
│       ├── Kripto_kurs_Əlavə_A_Tarixi.html            # Əlavə A: Kriptoqrafiyanın 4000 İllik Böyük Tarixi
│       ├── Kripto_kurs_Əlavə_B_Qrup_Meydan_vəsair.html# Əlavə B: Qrup, Meydan və Cəbr Təməlləri (Galois Fields GF(2^8))
│       ├── Kripto_Kurs_Əlavə_C_Mürəkkəblik.html       # Əlavə C: Hesablama Mürəkkəbliyi Nəzəriyyəsi (P, NP, BQP)
│       └── Kripto_kurs_Əlavə_D_faktorizasiya.html     # Əlavə D: Böyük Ədədlərin Faktorizasiyası və DLP Alqoritmləri
│
├── raw/                                               # Dəyişdirilməz Orijinal Mənbə Sənədləri (LLM yalnız oxuyur)
│   ├── assets/
│   ├── Mühazirə_1.html ... Mühazirə_30.html
│   └── Əlavələr A, B, C, D
│
└── wiki/                                              # LLM Tərəfindən İdarə Edilən Şəbəkəli Bilik Bazası
    ├── concepts/                                      # Fundamental Riyazi Modellər və Prinsiplər (33 Konsept)
    ├── entities/                                      # Alimlər, Protokollar, Standartlar və Sistemlər (10 Şəxsiyyət/Qurum)
    ├── summaries/                                     # Mənbələrin strukturlaşdırılmış xülasələri (5 Master Blok)
    └── syntheses/                                     # Çarpaz Müqayisələr, Bələdçilər və Grand Analizlər
```

---

## 💎 Obsidian və LLM Wiki: İnqilabi Əməkdaşlıq Modeli

### Ənənəvi RAG vs LLM Wiki Fərqi

| Əlamət | Ənənəvi RAG / Çatbot | **LLM Wiki + Obsidian Modeli** |
| :--- | :--- | :--- |
| **Yaddaş** | Yoxdur (hər sessiyada sıfırdan başlayır) | **Daimi və Artan (Compounding Knowledge Base)** |
| **Bilik Əlaqələri** | Axtarış zamanı kəsilmiş fraqmentlər | **Canlı `[[WikiLink]]` qrafiki və çarpaz əlaqələr** |
| **İstifadəçi Təcrübəsi** | Təkrar suallar və unudulan cavablar | **Obsidian-da vizual qrafik, açar xəritəsi və dərin indeks** |
| **Zəhmət Bölgüsü** | İnsan qeydləri özü yazmalıdır | **İnsan istiqaməti verir, LLM bütün sənədləşməni və baxımı edir** |

---

## 📚 Obsidian Mühitində İstifadə Qaydaları

1. **Repozitoriyanı Vault kimi açın:**
   Obsidian-ı açın $\to$ *"Open folder as vault"* $\to$ `Kripto-Kurs` qovluğunu seçin.
2. **Qrafik Görünüşü (Graph View - `Cmd/Ctrl + G`):**
   - Bütün 34 mühazirə və dərslərin necə bir-birinə bağlandığını görün.
   - Əsas mərkəz (Hub) düyünləri: `Kerckhoffs Prinsipi`, `Modul Arifmetika`, `Diffie-Hellman`, `AES`, `Bitcoin`, `Claude Shannon`, `ZKP`, `PQC`.
3. **Canlı Keçidlər və Backlinks:**
   - Hər hansı anlayışın səhifəsini açdıqda (məsələn, [[Affin Şifrəsi]]), onun sağ tərəfindəki *Backlinks* paneli vasitəsilə həmin anlayışın hansı mühazirələrdə və laboratoriya həllərində keçdiyini dərhal izləyin.
4. **LLM ilə İş Axınları (Workflows):**
   - **`ingest` (Mənimsəmə):** Yeni dərs və ya qeydi `raw/` qovluğuna qoyub *"ingest et"* dedikdə bütün bilik bazası həmin məlumatla avtomatik zənginləşir.
   - **`query` (Sorğu və Sintez):** Mürəkkəb müqayisələr və ya nəzəri suallar verdikdə cavab birbaşa `wiki/syntheses/` qovluğuna daimi səhifə kimi yazılır.
   - **`lint` (Sağlamlıq yoxlanışı):** Vaxtaşırı qırıq keçidləri, ziddiyyətləri və boşluqları yoxlayıb kataloqu tam sinxron vəziyyətdə saxlayır.

---

## 📜 Lisenziya və Müəllif Hüquqları

Bu portalda yerləşdirilmiş materiallar **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** lisenziyası altında yayılır. Təhsildə və qeyri-kommersiya məqsədilə istifadəsi sərbəstdir.
