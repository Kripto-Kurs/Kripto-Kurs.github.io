# Knowledge Base Index

Welcome to the **LLM Wiki**. This catalog is continuously maintained and structured for both human browsing in Obsidian and LLM retrieval.

---

## 🏛️ Syntheses & Theses

*Deep dives, comparative analyses, and synthesized frameworks.*

- [[LLM Wiki və Obsidian İstifadə Bələdçisi]] — LLM Wiki metodologiyası, Obsidian Graph View istifadəsi və gündəlik iş axınları (Ingest, Query, Lint).
- [[Kriptoqrafiyanın Təkamülü: Klassik Əvəzetmədən Asimmetrik və Blokçeyn İnframodelinə]] — 2500 illik kriptoqrafik təkamülün 4 dövrü (Klassik, Şennon, Açıq Açar, Blokçeyn) və arxitektur sintezi.
- [[Klassik Şifrələrin Təhlükəsizlik Zəiflikləri və Müasir Kriptoqrafiyaya Keçid]] — Klassik monoalfabetik şifrlərin 3 əsas zəifliyi, tezlik analizi təsiri və müasir AEAD/blok şifrələrinə keçid tələbləri.
- [[Kriptoqrafiyada Riyazi İnversiya və Açar Məkanının Təhlili]] — Additiv, multiplikativ və kombinator inversiya ierarxiyası, $2^{4.7}$-dən $2^{256}$-ya açar fəzası müqayisəsi və "Açar Ölçüsü $\ne$ Təhlükəsizlik" aksiomu.
- [[Klassik Kriptoqrafiya Praktik Məsələlər və Həll Metodları]] — Sezar, Affin KPA açar bərpası, xətti tənliklər sistemi və EEA ilə modul tərs hesablanması üçün addım-addım məşğələ bələdçisi.

---

## 💡 Concepts & Mechanisms

*Fundamental principles, mathematical models, protocols, and mechanisms.*

### 🛡️ Təhlükəsizlik Xidmətləri və Modelləri

- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]] — Konfidensiallıq, Tamlıq, Autentikasiya və İnkar Edilməzlik (CIAAN) prinsipləri.
- [[Kerckhoffs Prinsipi]] — Açarın gizliliyi aksiomu, "Security through obscurity" tənqidi və Şennon maksimi (*The enemy knows the system*).
- [[Simmetrik və Asimmetrik Kriptoqrafiya]] — Tək açarlı və açıq açarlı sistemlərin riyazi müqayisəsi, $O(n^2)$ vs $2n$ açar idarəsi, hibrid kriptosistemlər.
- [[Təhdid Modelləri]] — Kriptoqrafik personajlar (Alis, Bob, Eva, Mallori) və 4 hücumçu səviyyəsi (COA, KPA, CPA, CCA).
- [[Kriptosistem Beşliyi]] — Riyazi formal $(\mathcal{P}, \mathcal{C}, \mathcal{K}, \mathcal{E}, \mathcal{D})$ modeli və düzgünlük şərti $D_k(E_k(m))=m$.
- [[Hesablama Mürəkkəbliyi (P vs NP vs BQP)]] — Turing maşınları, P vs NP, BQP kvant sinfi və çətinlik reduksiyaları.

### 📐 Riyazi Aparat və Ədədlər Nəzəriyyəsi

- [[Modul Arifmetika]] — Saat arifmetikası, konqruensiya, qalıqlı bölmə, ƏBOB və $\mathbb{Z}_{26}^*$ üçün multiplikativ tərs elementlər.
- [[Genişləndirilmiş Evklid Alqoritmi]] — Bézout əmsalları, $\gcd(a, m) = 1$ olduqda modul multiplikativ tərs elementin ($a^{-1}\pmod m$) addım-addım tapılması.
- [[Evler Teoremi və Fermat-ın Kiçik Teoremi]] — Totient funksiyası $\phi(n)$, $a^{p-1} \equiv 1 \pmod p$ və RSA-nın riyazi isbatı.
- [[Çin Qalıq Teoremi (CRT)]] — Qalıqlar sistemi, Sun Tzu həlli və RSA-CRT ilə 4x deşifrləmə sürətləndirilməsi.
- [[Qalua Meydanları GF(2^8)]] — Sonlu meydanlar, indirgənməyən çoxhədlilər və AES S-Box multiplikativ inversiyası.

### 📜 Klassik və Axın Şifrləri

- [[Sezar Şifrəsi]] — $e_k(x)=(x+k)\bmod 26$ sürüşdürmə şifrəsi, 25 açarlı fəza və brute-force zəifliyi.
- [[Affin Şifrəsi]] — $e_{(a,b)}(x)=(a\cdot x+b)\bmod 26$ xətti şifrəsi, 312 açarlı fəza, $\gcd(a, 26)=1$ məhdudiyyəti və KPA həssaslığı.
- [[Monoalfabetik Əvəzetmə Şifrələri]] — $26! \approx 4.03 \times 10^{26}$ böyük açar fəzası paradoksu və dil strukturu zəifliyi.
- [[Poliəlifbalı Əvəzetmə Şifrələri]] — Vigenère şifrəsi, çoxsaylı əvəzetmə əlifbaları, tezlik qrafikinin hamarlanması və Kasiski testi ilə sındırılması.
- [[Tezlik Analizi]] — Təbii dil hərf, diqram və triqram paylanma statistikası və şifrələrin sındırılma metodikası.
- [[One-Time Pad və Mükəmməl Gizlilik]] — Vernam şifrəsi, Şennonun mükəmməl gizlilik teoremi, 3 qızıl şərt və Two-Time Pad zəifliyi.
- [[LFSR və Axın Şifrələri]] — Xətti əks əlaqəli sürüşmə reqistrləri, primitiv çoxhədlilər və Berlekamp-Massey zəifliyi.
- [[Trivium və ChaCha20]] — eSTREAM hardware və software standartları, ARX arxitekturası və sabit zamanlı icra.

### 🔒 Müasir Blok Şifrləri və Heşlər

- [[Feystel Şəbəkələri və DES]] — 16 raundlu Feystel strukturu, 56-bit açar zəifliyi və Triple-DES.
- [[AES Alqoritmi (Rijndael)]] — SPN arxitekturası, SubBytes, ShiftRows, MixColumns və AddRoundKey.
- [[Blok Şifrə Rejimləri (ECB, CBC, CTR, GCM)]] — ECB təhlükəsi, CBC zəncirləməsi, CTR axın rejimi və GCM AEAD standartı.
- [[Kriptoqrafik Heş Funksiyaları]] — Pre-image resistance, second pre-image resistance, collision resistance, uçqun effekti və Merkle-Damgård.
- [[Süngər Konstruksiyası və Keccak (SHA-3)]] — Absorbing/Squeezing fazaları, capacity baryeri və uzunluq genişləndirmə immuniteti.
- [[Mesaj Autentikasiya Kodları (MAC və HMAC)]] — Simmetrik bütövlük təsdiqi və ipad/opad konstruksiyası.
- [[Poly1305 və AEAD]] — $2^{130}-5$ modulu üzərində universal polinomial autentikasiya və ChaCha20-Poly1305.

### 🔑 Asimmetrik Kriptoqrafiya və Şəbəkə Protokolları

- [[RSA Kriptosistemi]] — $n=pq$ faktorizasiyası, $(e, d)$ açar cütləri və OAEP padding.
- [[Diffie-Hellman Açar Mübadiləsi]] — Açıq kanal üzərindən ortaq gizli açar əldə etməyin riyazi mexanizmi və diskret loqarifm problemi.
- [[Elliptik Əyrilər Kriptoqrafiyası (ECC)]] — Weierstrass forması, nöqtələrin toplanması/ikiqat artırılması və 256-bit ECC $\approx$ 3072-bit RSA müqayisəsi.
- [[Rəqəmsal İmzalar və ECDSA]] — İmzalama/doğrulama arxitekturası, secp256k1 əyrisi, Schnorr və Ed25519.
- [[Merkle Ağacları]] — İkili heş ağacları, Merkle kökü, $O(\log N)$ yoxlama mürəkkəbliyi və SPV yüngül müştərilər.
- [[İctimai Açar İnfrastrukturu (PKI və X.509)]] — Sertifikat mərkəzləri (CA), zəncirvari etibar, CRL və OCSP Stapling.
- [[TLS 1.3 Protokolu]] — 1-RTT Handshake, məcburi Ephemeral Diffie-Hellman (PFS) və AEAD şifrələməsi.

### 🚀 Qabaqcıl Kriptoqrafiya və Gələcək Texnologiyalar

- [[Sıfır Biliyi Sübutları (ZKP və zk-SNARKs)]] — Tamlıq, dürüstlük, sıfır biliyi, zk-Rollups və Zcash.
- [[Yan Kanal Hücumları (Side-Channel Attacks)]] — Zamanlama, DPA güc analizi, kəş sızmaları və constant-time müdafiəsi.
- [[Post-Kvant Kriptoqrafiya (PQC)]] — Şor və Qrover alqoritmləri, RSA/ECC çökməsi və NIST PQC standartları.
- [[Qəfəs Əsaslı Kriptoqrafiya (Lattice-based & Kyber)]] — SVP, LWE məsələləri, ML-KEM (Kyber) və ML-DSA (Dilithium).
- [[Tam Homomorfik Şifrələmə (FHE)]] — Şifrəli məlumat üzərində deşifrləməsiz hesablama və məxfi bulud AI.
- [[Təhlükəsiz Çoxtərəfli Hesablama (MPC)]] — Şamir Gizli Paylaşımı, Yao Garbled Circuits və MPC pulqabıları.

---

## 🏢 Entities & Protocols

*Projects, blockchains, protocols, tokens, organizations, and key figures.*

- [[Al-Kindi]] — Tezlik analizinin və elmi kriptoanalizin banisi (IX əsr Bağdad).
- [[Auguste Kerckhoffs]] — *La Cryptographie Militaire* (1883) müəllifi və müasir kriptoqrafiyanın əsas dizayn qaydalarının banisi.
- [[Claude Shannon]] — İnformasiya nəzəriyyəsinin atası, mükəmməl gizlilik teoremi, konfuziya və diffuziya prinsipləri.
- [[Gilbert Vernam]] — Vernam axın şifrəsinin və One-Time Pad mexanizminin ixtiraçısı (1917).
- [[Joan Daemen və Vincent Rijmen]] — AES (Rijndael) və SHA-3 (Keccak) qlobal standartlarının müəllifləri.
- [[Ron Rivest, Adi Shamir və Leonard Adleman (RSA)]] — RSA kriptosisteminin baniləri və Tyurinq mükafatı laureatları.
- [[Whitfield Diffie və Martin Hellman]] — Açıq açarlı kriptoqrafiyanın və Diffie-Hellman protokolunun baniləri (1976).
- [[Neal Koblitz və Victor Miller]] — Elliptik Əyrilər Kriptoqrafiyasının (ECC) müstəqil ixtiraçıları (1985).
- [[Daniel J. Bernstein (djb)]] — ChaCha20, Poly1305, Curve25519 və Ed25519 standartlarının yaradıcısı.
- [[Shafi Goldwasser və Silvio Micali]] — Sıfır Biliyi Sübutları (ZKP) və semantik təhlükəsizliyin baniləri (Tyurinq mükafatı 2012).
- [[Peter Shor]] — Kvant faktorizasiya alqoritminin (Shor's Algorithm) müəllifi (1994).
- [[Satoshi Nakamoto]] — Bitcoin-in müəllifi və mərkəzsiz konsensus ixtiraçısı (2008).
- [[Adam Back]] — Hashcash və Proof of Work ixtiraçısı, Blockstream CEO-su.
- [[Julius Caesar]] — Roma imperatoru, hərbi Sezar şifrəsinin tarixi istifadəçisi.
- [[Bitcoin]] — Rəqəmsal imzalar (secp256k1), SHA-256 heş zənciri və Proof of Work ilə ilk mərkəzsizləşdirilmiş kriptovalyuta.
- [[Signal Protocol]] — Uçdan-uca şifrələmə (E2EE), Double Ratchet və Forward Secrecy standartı.
- [[EMV Standartı]] — Bank kartı çipləri üçün dinamik tranzaksiya kriptoqramı və təhlükəsiz PIN təsdiqi standartı.
- [[PGP və S-MIME]] — E-poçt şifrələməsi və rəqəmsal imzalar üçün hibrid kriptoqrafik protokollar.
- [[UNEC Kriptoqrafiya Kursu]] — Azərbaycan Dövlət İqtisad Universitetinin "İnformasiya təhlükəsizliyi" ixtisası üzrə rəsmi fənn proqramı və sillabusu.
- [[DTX Kriptoqrafiya Kursu]] — Dövlət Təhlükəsizliyi Xidmətinin Heydər Əliyev adına Akademiyasının tətbiqi kriptoqrafiya və xüsusi rabitə təhlükəsizliyi kursu.
- [[Azərbaycan Kibertəhlükəsizlik Mərkəzi]] — Technion və DTX tərəfdaşlığı ilə təşkil edilən milli kibermüdafiə və kriptoqrafiya təlim proqramı.

---

## 📑 Source Summaries

*Distilled summaries and structured breakdowns of ingested raw sources.*

- [[Summary - Kriptoqrafiya Terminləri Lüğətləri (Tam və Yığcam)]] — Azərbaycan dilində 870-dən çox kriptoqrafik terminin ingiliscə orijinalları, standartlaşdırılmış tərcümələri və 67 tematik bölmə üzrə elmi izahları.
- [[Summary - Mühazirə 1 (Kriptoqrafiyaya Giriş)]] — Kriptoqrafiyanın əhatəsi, gündəlik tətbiqlər, CIAAN xidmətləri, Kerckhoffs prinsipi, simmetrik/asimmetrik fərqlər, təhdid modelləri.
- [[Summary - Mühazirə 2 (Klassik Şifrələr və Modul Arifmetika)]] — Kriptosistem beşliyi, modul arifmetika və tərslər, Sezar şifrəsi, Affin şifrəsi, monoalfabetik əvəzetmələr, tezlik analizi.
- [[Summary - Mühazirələr 3-6 (Klassik Təkmilləşmələr, Ehtimal, Məxfilik və LFSR)]] — Vijener şifrəsi, Kasiski testi, ehtimal kriptoanalizi, Şennon entropiyası, One-Time Pad və LFSR axın şifrləri.
- [[Summary - Mühazirələr 7-15 (Simmetrik Şifrlər, AES, Blok Rejimləri və Heş Funksiyaları)]] — Trivium, ChaCha20, DES, Diferensial/Xətti analiz, AES/Rijndael, GCM rejimi, SHA-2, Keccak/SHA-3 və Poly1305 AEAD.
- [[Summary - Mühazirələr 16-23 (Asimmetrik Kriptoqrafiya, Ədədlər Nəzəriyyəsi, RSA və Elliptik Əyrilər)]] — Fermat/Evler teoremləri, CRT, RSA alqoritmi, Diffie-Hellman, Weierstrass elliptik əyriləri, ECDSA və Ed25519.
- [[Summary - Mühazirələr 24-30 və Əlavələr A-D (Protokollar, ZKP, PQC, Blokçeyn və Cəbr)]] — PKI/X.509, TLS 1.3, Sıfır Biliyi Sübutları (zk-SNARKs), Yan kanal hücumları, Post-Kvant (Kyber/Dilithium), Blokçeyn, FHE, MPC və 4 cəbri/tarixi əlavə.

---

## 📥 Raw Sources

*Inventory of all source lecture, supplement, and glossary files in `raw/`.*

- `raw/Mühazirə_1.html` – `raw/Mühazirə_30.html` (Bütün 30 universitet mühazirəsi)
- `raw/Kripto_kurs_Əlavə_A_Tarixi.html` (Əlavə A: Kriptoqrafiya Tarixi)
- `raw/Kripto_kurs_Əlavə_B_Qrup_Meydan_vəsair.html` (Əlavə B: Cəbr və Qalua Meydanları)
- `raw/Kripto_Kurs_Əlavə_C_Mürəkkəblik.html` (Əlavə C: Hesablama Mürəkkəbliyi)
- `raw/Kripto_kurs_Əlavə_D_faktorizasiya.html` (Əlavə D: Faktorizasiya və DLP Alqoritmləri)
- `raw/Kripto_kurs_Əlavə_E_Onlayn_Resurslar.html` (Əlavə E: Kriptoqrafiya Onlayn / Açıq Resurslar)
- `raw/Kriptoqrafia_lüğəti_tam.tex` / `raw/glossary_full.html` (İngilis–Azərbaycan Kriptoqrafiya Lüğəti — Tam Versiya, 555 termin)
- `raw/Kripto_lüğət_kiçik.tex` / `raw/glossary_compact.html` (Kriptoqrafiya Lüğəti — Yığcam Versiya, 315 termin)
- `Kripto_WebApp-HTML-SPA/` (İnteraktiv Master Web Tətbiqi)
