# Knowledge Base Log

Append-only chronological record of all operations (ingests, queries, synthesis creation, and lint passes).

## [2026-09-27] feat | İstənilən Brauzerdən Yaradılmış Qısayol (Shortcut/WebClip) və İkonlar Üçün Ani Sinxronizasiya və Keş v13

- **İstənilən Brauzer Qısayolundan (Shortcut) Başlanma və Bərpa Mexanizmi (`app.js`):**
  - Tətbiq ana ekrana (Home Screen), masaüstünə və ya panelə istənilən brauzerdən (Safari, Chrome, Samsung Internet, Firefox, Edge, Opera və s.) qısayol kimi əlavə edildikdə:
    - `pageshow` və `focus` hadisələri vasitəsilə tətbiq ikondan hər dəfə açıldıqda və ya arxa fondan (BFCache / multitask) ekrana qayıtdıqda internet bağlantısı varsa, dərhal `registration.update()` çağırılaraq ən son yeniliklər yoxlanılır.
    - Əgər serverdə yeni versiya quraşdırılarsa, `controllerchange` hadisəsi ilə tətbiq istifadəçinin aktiv işinə (məsələn, test həllinə) mane olmadan 1.2 saniyə ərzində avtomatik ən son versiyaya keçid edir (`"⚡ Ən son versiya aktivləşdirildi. Məlumatlar yenilənir..."`).
    - Qısayol rejimində (`isStandalone`) lazımsız quraşdırma düymələri gizlədilir, təmiz və sürətli nativ tətbiq görünüşü təmin edilir.
- **Universal Brauzer İkon və Meta Teqləri (`index.html`):**
  - Apple iOS & iPadOS üçün `apple-touch-icon` (180x180, 192x192, 512x512) teqləri,
  - Windows 10/11 Start menyusu və paneli üçün `msapplication-square150x150logo`, `msapplication-wide310x150logo`, `msapplication-square310x310logo` teqləri,
  - Android və masaüstü brauzerlər üçün standart favicon və manifest maskable loqoları əlavə edildi.
- **Sinxronizasiya və Keş:**
  - Bütün 3 səviyyə (`.`, `Kripto_WebApp-HTML-SPA/`, `raw/`) tam sinxronlaşdırıldı.
  - Service Worker keş versiyası `kripto-kurs-v13`, skript və stillər `?v=20260927_v13` versiyasına yeniləndi.

## [2026-09-27] feat | Bütün Əməliyyat Sistemləri (iOS, Android, Windows, macOS, Linux) Üçün PWA Ağıllı Avtomatik Sinxronizasiya Mühərriki və Keş v12

- **PWA Ağıllı Avtomatik Sinxronizasiya Strategiyası (`sw.js`):**
  - **Network-First (HTML / Naviqasiya):** İnternet bağlantısı olduqda `sw.js` dərhal serverdən ən son `index.html` və resursları çəkir, keşə yazır və ekranda ən son yenilikləri göstərir. İnternet kəsildikdə və ya zəif olduqda 2.5 saniyəlik sürətli timeout ilə dərhal oflayn keşə keçir.
  - **Stale-While-Revalidate (Lokal Aktivlər):** Bütün skript və stillər yerli yaddaşdan ani göstərilməklə yanaşı, arxa fonda serverlə tutuşdurulur və keş daim yenilənir.
  - **Dinamik `SYNC_NOW` Əmri:** Tətbiq onlayn olduqda və ya istifadəçi sinxronizasiya düyməsinə kliklədikdə bütün 37 mühazirə, 2 lüğət, stillər və skriptlər (`cache: "reload"` ilə) arxa planda avtomatik tam yenidən sinxronlaşdırılır.
- **Frontend Real-Vaxt Şəbəkə Reaktivliyi (`app.js`):**
  - Cihaz internetə qoşulduqda (`online` hadisəsi) dərhal arxa planda sinxronizasiya başladılır və istifadəçiyə zərif toast bildirişi verilir.
  - Cihaz internetdən ayrıldıqda (`offline` hadisəsi) oflayn rejim bildirişi və status nişanı göstərilir.
  - Tətbiq arxa fondan ön plana keçdikdə (`visibilitychange`) və hər 15 dəqiqədən bir avtomatik yenilənmə yoxlanılır.
  - Yeni versiya aşkarlandıqda `SKIP_WAITING` ilə gözləmədən dərhal aktivləşdirilir.
- **Navbarda Real-Vaxt Sinxronizasiya Düyməsi & Statusu (`#btn-sync-app`):**
  - Yaşıl bulud nişanı (`Sinxron`), fırlanan mavi nişan (`Yenilənir...`) və sarı oflayn nişanı (`Oflayn`). İstənilən vaxt kliklənərək əllə ani yoxlama aparıla bilir.
- **Universal Əməliyyat Sistemi Uyğunluğu (`manifest.json` & Quraşdırma Modalı):**
  - `manifest.json`-a `display_override: ["window-controls-overlay", "standalone", "minimal-ui", "browser"]` və 4 sürətli qısayol (Lüğət Tam, Yığcam Lüğət, Mühazirələr, Alətlər) əlavə edildi (Android long-press, Windows taskbar sağ klik, macOS Dock menyusu dəstəyi).
  - Quraşdırma modalına Linux (Ubuntu, Debian, Fedora, Arch) üçün addım-addım bələdçi və Ağıllı Avtomatik Sinxronizasiya haqqında məlumat kartı əlavə edildi.
- **Sinxronizasiya və Keş Versiyası:**
  - Bütün dəyişikliklər 3 səviyyə üzrə (`.`, `Kripto_WebApp-HTML-SPA/`, `raw/`) tam sinxronlaşdırıldı.
  - Service Worker keş versiyası `kripto-kurs-v12`-yə, skript və stillər `?v=20260927_v12` versiyasına qaldırıldı.

## [2026-09-27] fix | Bölmə III Kartlarında Görünməyən Mühazirə Qeydlərinin Bərpası və Keş v11

- **Bölmə III Kartlarında Mühazirə Nömrələri və Düymələrin Bərpası:**
  - Ana səhifədəki Bölmə III (Asimmetrik Kriptoqrafiya & Riyaziyyat, Mühazirə 16-23) kartlarında mühazirə nömrələrinin ("Mühazirə 16" - "Mühazirə 23") və fərdi nişanların görünməməsi problemi araşdırıldı.
  - Səbəb: Bootstrap 5-in standart palitrasında `bg-purple-subtle`, `text-purple` və `btn-outline-purple` siniflərinin mövcud olmaması və `.badge` üçün standart ağ mətn rəngi (`#fff`) təyin edildiyindən ağ kart fonunda ağ mətnin oxunmaz (görünməz) qalması idi.
  - Həll:
    - `style.css`-ə `.text-purple`, `.bg-purple`, `.bg-purple-subtle`, `.badge.bg-purple-subtle`, `.btn-outline-purple`, `.btn-purple`, eləcə də `.text-teal`, `.bg-teal-subtle`, `.text-amber` utilit sinifləri əlavə edildi.
    - `index.html`-də Bölmə III-ün bütün 8 kartında (Mühazirə 16–23) mühazirə nişanlarına birbaşa inline stillər (`style="background-color:#ede9fe; color:#6d28d9;"`), nişan ikonlarına (`style="color:#7c3aed;"`) və keçid düymələrinə (`style="border-color:#7c3aed; color:#7c3aed;"`) tətbiq edildi.
- **Sinxronizasiya və Keş Yenilənməsi:**
  - Bütün dəyişikliklər 3 səviyyə üzrə (`.`, `Kripto_WebApp-HTML-SPA/`, `raw/`) tam sinxronlaşdırıldı.
  - Service Worker keş versiyası `kripto-kurs-v11`-ə qaldırıldı.
  - `index.html`-də `style.css?v=20260927_v11` və skript teqləri `?v=20260927_v11` versiyasına yeniləndi.

## [2026-09-26] feat | Ana Səhifədə (#home) Kriptoqrafiya Lüğətlərinin Geniş İnteqrasiyası və Keş v10

- **Ana Səhifə (Hero & Statistik Göstəricilər):**
  - Hero banner başlığına və təsvirinə 870+ terminlik iki lüğətin məlumatı əlavə edildi, Hero düymələrinə birbaşa "Kriptoqrafiya Lüğəti" (`#glossary-full`) əsas keçid düyməsi yerləşdirildi.
  - Statistika panelində təkrarlanan bölmə sayı əvəzinə "870+ Lüğət Termini (2 Versiya)" xüsusi göstəricisi təqdim edildi.
- **Spotlight Qısa Baxış Banneri:**
  - Hero və statistika panelindən dərhal sonra "İngilis–Azərbaycan Kriptoqrafiya Lüğətləri (Tam & Yığcam)" mövzusunda vizual, cəlbedici və sürətli keçidli tanıtım bloku əlavə edildi.
- **Müstəqil Bölmə VI: Kriptoqrafiya Lüğəti & Terminologiya:**
  - Əvvəllər Bölmə V-in daxilinə sıxılmış lüğət kartları müstəqil "Bölmə VI" kimi ayrıldı.
  - Hər iki lüğətin (555 terminlik Tam Ensiklopedik və 315 terminlik Yığcam Əlifba) metodologiyası, təyinatı, axtarış və süzgəc imkanları barədə geniş izahatlar daxil edildi.
- **Lisenziya və Keş:**
  - Footer hissəsində CC BY-NC 4.0 açıq təhsil lisenziyasına 2 Lüğət rəsmi resurs kimi əlavə olundu.
  - Service Worker keş adı `kripto-kurs-v10`, skript teqləri `?v=20260926_v10` versiyasına qaldırıldı.


## [2026-09-26] refactor | Cofactor Terminində #E İşarəsinin Qrup Tərtibi |E| İlə Əvəz Edilməsi və Keş v9

- **Riyazi İfadənin Standartlaşdırılması:**
  - `Kriptoqrafia_lüğəti_tam.tex` və `raw/Kriptoqrafia_lüğəti_tam.tex` sənədlərində **Cofactor** (Kofaktor) terminindəki `\#E` işarəsi qrup nəzəriyyəsində ənənəvi və universal qəbul olunmuş qrup dərəcəsi/tərtibi işarəsi olan `$|E|$` ilə əvəz edildi:
    - Əvvəl: `Elliptik əyrinin ümumi dərəcəsinin (#E) əsas altqrupun dərəcəsinə ($n$) nisbətidir: $h = \#E / n$`
    - Sonra: `Elliptik əyrinin ümumi dərəcəsinin ($|E|$) əsas altqrupun dərəcəsinə ($n$) nisbətidir: $h = |E| / n$`
  - Bu əvəzetmə TeX və MathJax mühitində yarana biləcək hər cür makro parametr token (`#`) ziddiyyətini kökündən aradan qaldırır.
- **HTML və Paket Yenilənməsi:**
  - `glossary_full.html` və `Kriptoqrafia_lüğəti_tam.html` bütün 3 səviyyədə (`.`, `Kripto_WebApp-HTML-SPA/`, `raw/`) təkrar generasiya edildi.
  - `lectures_bundle.js` 37 modul üzrə sıfırdan yenidən yığıldı.
  - Service Worker keş adı `kripto-kurs-v9`, `index.html` skript sorğu parametrləri isə `?v=20260926_v9` versiyasına qaldırıldı.


## [2026-09-26] fix | Cofactor Formulunda MathJax # Xətasının Düzəldilməsi və Keş v8

- **Cofactor Terminində MathJax Xətasının Kök Səbəbi və Düzəlişi:**
  - `Kriptoqrafia_lüğəti_tam.tex` sənədində "Elliptik Əyri Kriptoqrafiyası (ECC)" bölməsində yerləşən **Cofactor** (Kofaktor) terminində $h = \#E / n$ riyazi ifadəsi mövcuddur.
  - İlkin generasiya skripti mətndəki `\#` simvollarını təmizləyərkən riyazi mühit daxilindəki backslash-i də sildiyindən, MathJax riyazi rejimdə tək `#` simvolunu makro parametr tokeni hesab edərək `You can't use 'macro parameter character #' in math mode.` xətası verirdi.
  - `convert_glossaries.py` skripti yeniləndi: riyazi bloklar (`$ ... $`, `\( ... \)`, `\[ ... \]`) qorunaraq riyazi rejimdə `#` simvolunun mütləq `\#` kimi MathJax üçün düzgün saxlanması təmin edildi (`$h = \#E / n$`).
  - `glossary_full.html` və `Kriptoqrafia_lüğəti_tam.html` bütün 3 səviyyədə (`.`, `Kripto_WebApp-HTML-SPA/`, `raw/`) təkrar generasiya edildi.
- **Çoxpilləli Dinamik Müdafiə (`app.js`):**
  - `cleanLatexInHtml()` funksiyasına riyazi mühitdə olan istənilən unescaped `#` simvolunu avtomatik `\#`-ə çevirən təhlükəsiz filter əlavə edildi (`app.js`, `Kripto_WebApp-HTML-SPA/app.js`, `raw/app.js`).
- **Paket və Keş Yenilənməsi:**
  - `lectures_bundle.js` 37 modul üzrə təkrar yığıldı.
  - Service Worker keş versiyası `v8` (`kripto-kurs-v8`), `index.html` skript sorğu teqləri isə `?v=20260926_v8` versiyasına qaldırıldı.


## [2026-09-26] ingest | Kriptoqrafiya Terminləri Lüğətlərinin (Tam və Yığcam) İnteqrasiyası

- **Lüğət Mənbələrinin Emalı və Çevrilməsi:**
  - `Kriptoqrafia_lüğəti_tam.tex` (Tam Versiya) və `Kripto_lüğət_kiçik.tex` (Yığcam Versiya) sənədləri oxunaraq təmiz, semantik və MathJax riyazi formulları ilə zənginləşdirilmiş HTML fayllarına çevrildi:
    - `Kriptoqrafia_lüğəti_tam.html` və `glossary_full.html` (24 istiqamət, 67 bölmə, 555 termin, interaktiv axtarış və bölmələr üzrə sürətli keçid paneli).
    - `Kripto_lüğət_kiçik.html` və `glossary_compact.html` (315 termin, A-Z əlifba sırası və sürətli hərf süzgəcləri).
  - Bütün fayllar həm kök qovluqda, həm `Kripto_WebApp-HTML-SPA/`, həm də `raw/` qovluğunda sinxronlaşdırıldı.
- **Tətbiq Arxitekturası və Naviqasiya İnteqrasiyası:**
  - `app.js`: `LECTURES_MAP` və `LECTURE_SEQUENCE` siyahısına `glossary-compact` və `glossary-full` modulları əlavə edildi; `#glossary`, `#lugat`, `#glossary-full`, `#glossary-compact` marşrutlaşdırması quruldu.
  - `index.html`: Yuxarı naviqasiya menyusuna birbaşa "Lüğət" keçidi, sol yan panelə (sidebar) "Kriptoqrafiya Lüğəti" qrupu və ana səhifə kataloquna 2 ədəd xüsusi kart əlavə edildi.
  - `lectures_bundle.js`: Bütün 37 modul (30 mühazirə + 5 əlavə + 2 lüğət) üzrə təkrar yığıldı (0 ms ani oflayn yüklənmə).
  - `sw.js` və skript versiyaları: Keş `v7` (`kripto-kurs-v7`, `?v=20260926_v7`) versiyasına qaldırıldı.


## [2026-09-25] fix | İstifadəçinin 2 Bəndlik Arxitektura Qərarının Dəqiq və Qəti İcrası

- **Bənd 1 — İstinadlardan Linklərin Tam Silinməsi (0 Link Qaydası):**
  - Mühazirələrdə vaxt keçdikcə yaranan link qırılmalarının (link rot), 404/403 xətalarının və hər 6 aydan bir yüzlərlə linkin yoxlanılması yükünün qarşısını birdəfəlik almaq üçün bütün 30 mühazirənin (`Mühazirə 1` - `Mühazirə 30`) altındakı "İstinadlar" bölməsindən bütün `<a>` keçidləri və düymələr tamamilə silindi.
  - Bütün 178 mühazirə faylında yalnız təmiz akademik biblioqrafiya göstəriciləri (Müəllif, İl, Başlıq, Nəşriyyat / Jurnal) və BibTeX nüsxəsi saxlanıldı.
  - `app.js` daxilində sitat popover pəncərələrindən və dinamik mühazirə biblioqrafiyasından bütün `doiBtn` və `urlBtn` düymələri çıxarıldı.
- **Bənd 2 — Kriptoqrafiya Onlayn (Əlavə E) Bölməsində Qlobal Standartların və Açıq Mənbələrin Mərkəzləşdirilməsi:**
  - Bütün açıq dərsliklər və standartlaşdırma portalları təlimata uyğun olaraq qısa izahları ilə yalnız və yalnız **Əlavə E**-də cəmləşdirildi:
    1. **IETF RFC Editor** (`https://www.rfc-editor.org/`) — Qlobal internet və kriptoqrafik protokolların rəsmi standartlar arxivi.
    2. **NIST Kriptoqrafik Standartlar və Təlimatlar (CSRC)** (`https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines`) — FIPS və SP 800 kriptoqrafiya spesifikasiyaları.
    3. **Çin Kriptoqrafiya Standartları və Tənzimləmə Portalı (NICCS)** (`https://niccs.org.cn/niccs/Notice/pc/content/content_1937429502295019520.html`) — GM/T və GB/T kommersiya kriptoqrafiya qaydaları.
    4. **Böyük Britaniya FCA Kriptoaktivlər Rejimi** (`https://www.fca.org.uk/publications/policy-statements/cryptoasset-regime`) — Kriptoaktivlər və DeFi tənzimləmə siyasəti.
    5. **Claude Shannon (1949)** (`https://pages.cs.wisc.edu/~rist/642-spring-2014/shannon-secrecy.pdf`) — Viskonsin Universiteti PDF nüsxəsi.
    6. **G. H. Hardy & E. M. Wright (2008)** (`https://open.umn.edu/opentextbooks/textbooks/an-introduction-to-the-theory-of-numbers`) — Minnesota Universiteti Açıq Kitabxanası.
- **Paket və Keş Yenilənməsi:**
  - `lectures_bundle.js` 35 modul üzrə sıfırdan yenidən yığıldı.
  - Service Worker və skript teqləri `v6` versiyasına (`kripto-kurs-v6`, `?v=20260925_v6`) yüksəldildi.


## [2026-09-25] fix | Mühazirələrdə Canlı İşlək Keçid Düymələrinin (DOI / URL) Bərpası və Keşin v5-ə Yüksəldilməsi

- **İstinad Kartlarında Canlı Keçidlərin Bərpası:**
  - Əvvəlki addımda yalnız Azərbaycan referanslarının silinməsi əvəzinə səhvən bütün linklərin silinməsi problemi aradan qaldırıldı.
  - Bütün 30 mühazirənin (`Mühazirə 1` - `Mühazirə 30`) həm statik HTML kartlarına, həm `app.js` daxilindəki inline popover pəncərələrinə, həm də dinamik biblioqrafiyaya 100% işlək `DOI` və `Mənbə Linki` düymələri bərpa edildi.
  - Xüsusilə istifadəçinin qeyd etdiyi mənbələrin birbaşa keçidləri təmin edildi:
    - `[13] Lipmaa et al., 2000` (Mühazirə 6): `https://web.cs.ucdavis.edu/~rogaway/papers/ctr.pdf`
    - `[28] Rivest, 1992` (Mühazirə 4 / MD5): `https://dl.acm.org/doi/pdf/10.17487/RFC1321`
    - `[19] Rescorla, 2018` (Mühazirə 6 / TLS 1.3): `https://www.rfc-editor.org/info/rfc8446/`
    - `[10] Fowler, 2022` (Mühazirə 10 / AES-GCM-SIV): `https://eprint.iacr.org/2017/168`
    - `[6] Nir & Langley, 2015` (Mühazirə 15 / ChaCha20): `https://dl.acm.org/doi/book/10.17487/RFC8439`
- **Keş və Paket Sinxronizasiyası:**
  - `lectures_bundle.js` bütün 35 sənəd üzrə yenidən yığıldı.
  - Service Worker və skript teqləri `v5` versiyasına (`kripto-kurs-v5`, `?v=20260925_v5`) yüksəldildi ki, brauzerlər köhnə keşi dərhal yeniləsin.


## [2026-09-25] audit & fix | Bütün Tələblərin 100% Yoxlanışı və Əlavə E Azərbaycan Resurslarının İnteqrasiyası

- **Mühazirələrdə İstinadlar və Azərbaycan Referansları:**
  - Bütün 120 mühazirə faylında (`Mühazirə_*.html`, `lecture_*.html`, `Muhazirə_7.html`) "İstinadlar" bölməsindən bütün xarici linklər və Azərbaycan referansları silinmiş, 0 link / 0 Azərbaycan mühazirə referansı təsdiqlənmişdir.
  - `app.js` daxilində sitat nişanlarına (`[1]`, `[2]`) toxunduqda açılan popover pəncərələrindən və dinamik biblioqrafiya qurucusundan `doiBtn` və `urlBtn` düymələri tamamilə çıxarılmışdır.
- **Əlavə E (Onlayn Resurslar) Bölməsində Azərbaycan və Beynəlxalq Materialların Birləşdirilməsi:**
  - İstifadəçinin "Azərbaycan dilində olan materiallar yalnız onlayn materiallar siyahısına qoyulsun" təlimatına uyğun olaraq, Əlavə E daxilində "Bölmə 2: Azərbaycan Dilində Kriptoqrafiya və İnformasiya Təhlükəsizliyi Resursları" (UNEC, DTX Akademiyası, AKM, XRİTDX/CERT.gov.az, AMEA İTİ, ETX, AKTA) bərpa olunmuş, daxili qırılan biblioqrafiya düymələri yığışdırılmış, yalnız rəsmi işlək portallara birbaşa keçidlər təmin edilmişdir.
  - İstifadəçinin tələb etdiyi bütün 4 beynəlxalq standartlaşdırma portalı (IETF RFC Editor, NIST Cryptographic Standards, Chinese Cryptography Standards NICCS, UK FCA Cryptoasset Regime) və açıq dərsliklər (Claude Shannon 1949, Hardy & Wright UMN) Əlavə E-də yerləşdirilmişdir.
- **Dəqiq Mənbə Keçidləri (`references_data.js` & `references.bib`):**
  - Shannon 1949 (`pages.cs.wisc.edu`), Rivest MD5 (`dl.acm.org/doi/pdf/10.17487/RFC1321`), Lipmaa CTR (`web.cs.ucdavis.edu/~rogaway/papers/ctr.pdf`), TLS 1.3 (`rfc-editor.org/info/rfc8446/`), Fowler AES-GCM-SIV (`eprint.iacr.org/2017/168`), Nir & Langley ChaCha20 (`dl.acm.org/doi/book/10.17487/RFC8439`) və Hardy & Wright (`open.umn.edu`) 100% dəqiqləşdirilmişdir.
- **Paket və Sinxronizasiya:**
  - `lectures_bundle.js` həm kök, həm SPA, həm də raw direktoriyalarında 35 modul üzrə tam yenidən yığılmış və yoxlanılmışdır.


## [2026-09-25] feat | Mühazirə İstinadlarından Qırılan Linklərin Təmizlənməsi və Qlobal Standartların Əlavə E-də Mərkəzləşdirilməsi

- **Mühazirələrin Altındakı İstinadlardan Linklərin Silinməsi:**
  - İstifadəçinin strateji təklifinə əsasən, bütün 30 mühazirənin (`Mühazirə 1` - `Mühazirə 30`) altındakı "İstinadlar" bölməsindən bütün xarici keçid düymələri (DOI və xarici URL-lər) tamamilə silindi.
  - Kartlarda təmiz akademik biblioqrafik məlumatlar (Müəllif, İl, Əsər adı, Nəşriyyat / Jurnal / Təşkilat) saxlanıldı. Bu, mühazirələrdə vaxt keçdikcə yarana biləcək link qırılması (link rot) və 404 xətalarını kökündən aradan qaldırdı.
- **Kriptoqrafiya Onlayn (Əlavə E) Bölməsində Qlobal Standartların və Açıq Kitabların Mərkəzləşdirilməsi:**
  - Bütün açıq dərsliklər və qlobal standart portalları istifadəçinin göstərişi ilə vahid mərkəzə — **Əlavə E**-yə yığıldı:
    1. **IETF RFC Editor** (`https://www.rfc-editor.org/`) — Qlobal internet və kriptoqrafik rabitə standartları.
    2. **NIST Cryptographic Standards and Guidelines** (`https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines`) — FIPS və SP 800 kriptoqrafiya layihələri.
    3. **NICCS Sertifikatlaşdırma və Bildiriş Portalı** (`https://niccs.org.cn/niccs/Notice/pc/content/content_1937429502295019520.html`) — Kommersiya kriptoqrafiyası və qiymətləndirmə qaydaları.
    4. **UK FCA Kriptoaktivlər Rejimi** (`https://www.fca.org.uk/publications/policy-statements/cryptoasset-regime`) — Kriptoaktivlər və DeFi tənzimləmə siyasəti.
    5. **Hardy & Wright (2008)** (`https://open.umn.edu/opentextbooks/textbooks/an-introduction-to-the-theory-of-numbers`) — Minnesota Universiteti Açıq Kitabxanası.
    6. **Claude Shannon (1949)** (`https://pages.cs.wisc.edu/~rist/642-spring-2014/shannon-secrecy.pdf`) — Mütləq məxfilik üzrə təməl elmi əsər.
- **Master Bibliography (`references_data.js` & `references.bib`) Dəqiqləşdirilməsi:**
  - İstifadəçinin bildirdiyi konkret mənbələr (Shannon 1949, Rivest MD5 RFC 1321, Lipmaa CTR ePrint 2000/055, TLS 1.3 RFC 8446, Fowler AES-GCM-SIV ePrint 2017/168, Nir ChaCha20 RFC 8439, Hardy & Wright) dəqiq yoxlanaraq işlək rəsmi keçidlərlə yeniləndi.
- **Sistem Paketi və Keş:**
  - `lectures_bundle.js` bütün sənədlər üzrə yenidən quruldu, Service Worker və script versiyası `v4` səviyyəsinə yüksəldildi.

## [2026-09-23] fix | Mühazirə 4 Cameron & Trivedi Linkinin və Əlavə E Redundant Bölmələrinin Təmizlənməsi

- **Cameron & Trivedi Risqli Linkinin Silinməsi (Mühazirə 4):**
  - Mühazirə 4-də istinad olunan `cameron2013regression` (Cameron & Trivedi, *Regression Analysis of Count Data*) mənbəsinin xarici veb URL sahəsi (`https://cameron.econ.ucdavis.edu/racd2/`) `references_data.js`, `references.bib` və SPA nüsxələrindən silindi (`"url": ""`).
  - Kitabın akademik biblioqrafik göstəriciləri (müəllif, başlıq, il, nəşriyyat, ISBN) tam qorunub saxlanıldı, təhlükəsiz olmayan/sertifikatı köhnəlmiş link generasiyasının qarşısı alındı.
- **Əlavə E (Kriptoqrafiya Onlayn) Səhifəsinin Təmizlənməsi:**
  - Birbaşa oxuma materialı olmayan və yalnız institut ana səhifələrini əks etdirən "Bölmə 2: Azərbaycan Dilində Kriptoqrafiya və İnformasiya Təhlükəsizliyi Resursları" (UNEC, DTX Akademiyası, AKM, CERT.gov.az, AMEA İTİ, ETX, AKTA) `supplement_e.html` və `Kripto_kurs_Əlavə_E_Onlayn_Resurslar.html` sənədlərindən çıxarıldı.
  - Həmin institutlara aid `unec2024kriptoqrafiya`, `dtx2024kriptoqrafiya`, `akm2024kriptoqrafiya`, `aliquliyev2014informasiya`, `imamverdiyev2018kriptoqrafiya`, `xritdx2024standart`, `etx2024kibertəhlükəsizlik` qeydləri `references_data.js` və `references.bib` fayllarından təmizləndi.
  - Kursun mühazirələri artıq bölmələrə bölündüyü üçün Əlavə E-nin sonundakı təkrarlanan "Bölmə 5: Tələbələr üçün Tövsiyə Olunan Tədris Ardıcıllığı" bloku silindi.
  - Qalan bölmələr səliqəli şəkildə nömrələndi:
    - Bölmə 1: Açıq Girişli Beynəlxalq Dərsliklər (8 təməl dərslik)
    - Bölmə 2: İnteraktiv Öyrənmə və Kriptoanaliz Platformaları (Cryptohack, CyberChef, CrypTool Online, Cryptopals)
    - Bölmə 3: Qlobal Standartlar və Elmi Arxivlər (IACR ePrint, NIST CSRC, IETF Datatracker, arXiv cs.CR)
- **Paket və Kataloq Yenilənməsi:**
  - `index.html` və SPA kataloqunda Əlavə E kartının annotasiyası yeniləndi.
  - `lectures_bundle.js` və `Kripto_WebApp-HTML-SPA/lectures_bundle.js` tam yenidən quruldu.

## [2026-09-22] fix | Saytdan Server və Keçidlərin Texniki Statusu ilə Bağlı İfadələrin Silinməsi

- **Texniki Qeydin Çıxarılması:**
  - `supplement_e.html` və `Kripto_kurs_Əlavə_E_Onlayn_Resurslar.html` (kök, SPA və raw) sənədlərindən "Bütün keçidlərin işlək statusu (HTTP 200 OK) yoxlanılmışdır" cümləsi və həmin `note` bloku tamamilə silindi.
  - Sayt üzrə akademik tədris üslubu qorunub saxlanıldı, daxili server/texniki yoxlama qeydləri aradan qaldırıldı.
- **Paketin Yenilənməsi:**
  - `lectures_bundle.js` 35 sənəd üzrə yenidən yığıldı.

## [2026-09-22] fix | Birinci Mühazirədən Azərbaycan Dilində Olan Keçidlərin Silinməsi və Yalnız Onlayn Resurslarda (Əlavə E) Saxlanılması

- **Birinci Mühazirədən (Mühazirə 1) Keçidlər və Mətn Silindi:**
  - `Mühazirə_1.html` və `lecture_1.html` (kök, `Kripto_WebApp-HTML-SPA/` və `raw/`) daxilindən "Azərbaycanda Kriptoqrafiya və İnformasiya Təhlükəsizliyi Təhsili" bloku və UNEC, DTX, AKM keçidləri silindi.
  - Sənədin sonundakı "İstinadlar" bölməsi ilkin akademik sayına qaytarıldı: `İstinadlar (34)`.
  - [35], [36], [37] nömrəli əlavə kartlar silindi.
- **Onlayn Materiallar Siyahısında (Əlavə E) Saxlanıldı:**
  - Azərbaycan dilindəki tədris və elmi materiallar (UNEC, DTX Akademiyası, AKM, CERT.gov.az, AMEA İTİ, Elektron Təhlükəsizlik Xidməti, AKTA) istifadəçinin qeyd etdiyi kimi yalnız onlayn materiallar siyahısında — `supplement_e.html` ("Əlavə E: Kriptoqrafiya Onlayn") səhifəsində saxlanıldı.
- **Paketin Yenilənməsi:**
  - `lectures_bundle.js` bütün nüsxələrdə (kök, `Kripto_WebApp-HTML-SPA/` və `raw/`) təmizlənmiş Mühazirə 1 ilə yenidən quruldu.

## [2026-09-22] feat | UNEC və DTX Kriptoqrafiya Kurslarının Ədəbiyyat Bazasına və Əlavə E-yə İnteqrasiyası

- **UNEC və DTX Kriptoqrafiya Kursları Ədəbiyyat Bazasına (Master Bibliography) Əlavə Edildi:**
  - `references.bib` faylına 3 yeni rəsmi BibTeX qeydi əlavə olundu:
    1. `unec2024kriptoqrafiya` — Azərbaycan Dövlət İqtisad Universitetinin (UNEC) Rəqəmsal İqtisadiyyat Fakültəsində tədris olunan "Kriptoqrafiyanın Əsasları və İnformasiya Təhlükəsizliyi" rəsmi fənn proqramı və sillabusu.
    2. `dtx2024kriptoqrafiya` — Dövlət Təhlükəsizliyi Xidmətinin (DTX) Heydər Əliyev adına Akademiyasının İnformasiya Təhlükəsizliyi Fakültəsində tədris olunan "Tətbiqi Kriptoqrafiya və Xüsusi Rabitə Təhlükəsizliyi" kursu və metodiki vəsaiti.
    3. `akm2024kriptoqrafiya` — Azərbaycan Kibertəhlükəsizlik Mərkəzinin (AKM) İsrailin Technion İnstitutu və DTX tərəfdaşlığı ilə təşkil etdiyi "Müasir Kibermüdafiə və Kriptoqrafiya Təlim Proqramı".
  - `references_data.js` verilənlər bazası (kök, `Kripto_WebApp-HTML-SPA/` və `raw/`) 674-dən 677 mənbəyə yüksəldildi. Hər bir qeyd tam metadata (başlıq, müəllif, təşkilat, il, rəsmi URL, annotasiya, BibTeX) ilə təchiz edildi.
  - Veb tətbiqdə `#view-bib` (Ədəbiyyat və Mənbələr) bölməsində "UNEC" və ya "DTX" axtarışı zamanı interaktiv kartlar və birbaşa keçidlər dərhal əlçatan oldu.

- **Əlavə E (Kriptoqrafiya Onlayn) Səhifəsində Xüsusi Bölmə Kartları Yaradıldı:**
  - `Kripto_kurs_Əlavə_E_Onlayn_Resurslar.html` və `supplement_e.html` sənədlərinin "Bölmə 2: Azərbaycan Dilində Resurslar" hissəsinə UNEC və DTX Akademiyasının kurs proqramları əlavə olundu.
  - Tədris modulları (DES/AES, RSA, ECC, Yan kanal hücumları, Milli rabitə standartları) ətraflı strukturlaşdırıldı.
  - Rəsmi portallara (`https://unec.edu.az/`, `https://avesis.unec.edu.az/`, `https://akademiya.dtx.gov.az/`, `https://dtx.gov.az/az/`, `https://akm.az/`) və ədəbiyyat siyahısındakı birbaşa BibTeX qeydlərinə bağlantılar yerləşdirildi.

- **Mühazirələrdə Akademik İstinadlar və Yenidən Yığılma:**
  - Mühazirə 1-də milli informasiya təhlükəsizliyi və kriptoqrafiya təhsili kontekstində UNEC və DTX kurslarına akademik sitatlar (`data-cites="unec2024kriptoqrafiya dtx2024kriptoqrafiya akm2024kriptoqrafiya"`) əlavə edildi.
  - `add_static_istinadlar.py` skripti ilə Mühazirə 1-in "İstinadlar" bölməsi avtomatik yenilənərək [35], [36], [37] nömrəli rəsmi mənbə kartları ilə zənginləşdirildi.
  - `lectures_bundle.js` və `raw/lectures_bundle.js` 35 sənəd üzrə tam yenidən yığıldı.

- **LLM Wiki və Bilik Bazası:**
  - `wiki/entities/UNEC Kriptoqrafiya Kursu.md`, `wiki/entities/DTX Kriptoqrafiya Kursu.md` və `wiki/entities/Azərbaycan Kibertəhlükəsizlik Mərkəzi.md` sənədləri yaradıldı.
  - `index.md` kataloqu yeniləndi.

---

## [2026-09-12] feat | Mündəricat Bölmələrinin 180° Dönən Oxlarla Qatlanması (Accordion), Mobil/Planşet Uyğunlaşması və Loqolu PWA Tətbiq Qısa Yolu

- **Mündəricat Bölmələrinin Açılıb-Bağlanması və 180° Dönən Ox İşarələri:**
  - Sol menyuda ("Mündəricat") hər 5 bölmə (Bölmə I, Bölmə II, Bölmə III, Bölmə IV, Elmi Əlavələr) üçün interaktiv qatlanma (Bootstrap Collapse / Accordion) bərpa edildi.
  - Hər bölmə başlığının sağında zərif `>` / chevron ox işarəsi (`.toc-toggle-icon`) yerləşdirildi; bölmə bağlandıqda və ya açıldıqda ox 180 dərəcə (`transform: rotate(180deg)`) rəvan şəkildə yerini və istiqamətini dəyişir (`transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)`).
  - Yuxarıdakı `#toc-toggle-all` düyməsi ilə bütün bölmələri eyni anda açıb-bağlamaq və bütün oxların 180° fırlanmasını sinxronlaşdırmaq funksionallığı təmin olundu.
  - Hər hansı mühazirəyə keçid edildikdə (URL, axtarış və ya əvvəlki/növbəti düymələri ilə) həmin mühazirənin aid olduğu ana bölmə avtomatik açılır və oxu düzgün vəziyyətə gətirilir.
  - `style.css`-də qatlanmanı bloklayan köhnə `display: none !important` qaydaları ləğv edildi.
  - Bölmə I, II və III başlıqlarının uzun mətni səbəbilə flex konteynerdən kənara sıxışdırılıb gizlənməsi problemi aradan qaldırıldı: sol menyu eni 290px-dən 325px-ə artırıldı, başlıq span-i üçün `min-width: 0` təyin olundu və ox ikonunun (`.toc-toggle-icon`) heç vaxt gizlənməməsi (`overflow: visible !important`) təmin edildi. Artıq bütün 5 bölmədə oxlar tam və aydın görünür.

- **Bütün Əməliyyat Sistemləri üçün Loqolu Tətbiq Qısa Yolu (PWA):**
  - Müasir W3C Web App Manifest (`manifest.json`) və Service Worker (`sw.js`) yaradıldı (oflayn keşləmə və sürətli tətbiq işəsalma).
  - Standartlara uyğun, xüsusi kriptoqrafik qalxan və qıfıl təsvirli yüksək keyfiyyətli tətbiq loqoları yaradıldı: `icon-512.png`, `icon-192.png`, `icon-maskable-512.png`, `icon-maskable-192.png`, `apple-touch-icon.png` (180x180), `favicon-32x32.png`, `favicon-16x16.png` və `icon.svg`.
  - Həm `index.html` başlığında (`#btn-install-app`), həm də sol mündəricat menyusunun sonunda xüsusi tətbiq quraşdırma düyməsi (`#sidebar-install-btn`) və interaktiv modal (`#installAppModal`) əlavə edildi.
  - iOS (iPhone & iPad Safari), Android (Google Chrome, Samsung Internet, Xiaomi HyperOS), Huawei (HarmonyOS) və Masaüstü (macOS, Windows) üçün addım-addım "Ana ekrana əlavə et" (Add to Home Screen) təlimatları və birbaşa quraşdırma dəstəyi inteqrasiya olundu. Artıq istifadəçilər portalı brauzerdən çıxmadan telefonun ana ekranında xüsusi loqosu olan sərbəst bir mobil tətbiq kimi aça bilərlər.

- **Mobil və Planşet Responsivliyinin Təkmilləşdirilməsi:**
  - Mobil və planşet ölçülərində (ekran eni < 992px) sol mündəricat menyusundan hər hansı mühazirə və ya əlavə seçildikdə menyunun avtomatik qapanması təmin olundu.
  - MathJax tənlikləri və cədvəllərin kiçik ekranlarda səhifəni üfüqi istiqamətdə pozmaması üçün `-webkit-overflow-scrolling: touch` və `overflow-x: auto` qoruyucu qaydaları tətbiq edildi.
  - Bütün dəyişikliklər hər üç qatda (`root`, `Kripto_WebApp-HTML-SPA/` və `raw/`) tam bərabərliklə (parity) həyata keçirildi.

---

## [2026-09-12] feat | Əlavə E (Kriptoqrafiya Onlayn) Yaradılması və Mühazirələrdə 'İstinadlar' Bölməsinin Standartlaşdırılması

- **Əlavə E (Kriptoqrafiya Onlayn) Əlavə Edildi:**
  - Yeni elmi əlavə səhifəsi yaradıldı: `supplement_e.html` və `Kripto_kurs_Əlavə_E_Onlayn_Resurslar.html`.
  - Açıq girişli beynəlxalq dərsliklər (*Handbook of Applied Cryptography*, Boneh & Shoup, *The Joy of Cryptography*, Ross Anderson, Bellare & Rogaway, Paar & Pelzl, Shoup, Narayanan et al.) sistemləşdirildi.
  - Azərbaycan dilində materiallar (XRİTDX / CERT.gov.az normativ sənədləri və məqalələri, AMEA İnformasiya Texnologiyaları İnstitutu – Rasim Əliquliyev, Yadigar İmamverdiyev monoqrafiyaları, Elektron Təhlükəsizlik Xidməti cyber.az, AKTA) daxil edildi.
  - İnteraktiv öyrənmə alətləri (*Cryptohack*, *CyberChef*, *CrypTool Online*, *Cryptopals*) və qlobal standartlar (IACR ePrint, NIST CSRC, IETF Datatracker, arXiv) təqdim olundu.
  - Bütün 21 URL avtomatlaşdırılmış auditlə yoxlanıldı; 100% işlək (HTTP 200/301) statusu təsdiqləndi (0 ədəd 404).
  - Veb tətbiqdə (SPA) sol menyu (Sidebar TOC), əsas səhifə kartı (Home) və kurs kataloqu kartlarına (Catalog) `Əlavə E: Kriptoqrafiya Onlayn` tam inteqrasiya edildi.
  - `lectures_bundle.js` 35 sənəd (30 Mühazirə + 5 Əlavə) üzrə yenidən yığıldı.

- **`references_data.js` Brauzer İxracı Düzəldildi:**
  - `REFERENCES_DATA` dəyişəninin brauzerdə `window.KRIPTO_BIBLIOGRAPHY` və `window.REFERENCES_DATA`-ya mənimsədilməsi təmin edildi. Mühazirələrdə ədəbiyyatların görünməməsi problemi kökündən həll edildi.
  - Bütün mühazirələrdə sitat popoverlərinin və BibTeX kopyalama düymələrinin dinamik fəaliyyəti bərpa olundu.
  - Axtarış indeksləməsində kitabxananın 674 mənbəsinin tam indekslənməsi təmin edildi.

- **Bütün Mühazirələrdə "İstinadlar" Bölməsinin Standartlaşdırılması:**
  - Bütün mühazirələrin sonunda ədəbiyyat bölməsinin başlığı vahid şəkildə **"İstinadlar"** (`id="istinadlar"`) olaraq təyin edildi.
  - Həm statik rejimdə (faylı birbaşa və ya Overleaf mühitində açarkən), həm də veb SPA rejimində hər mühazirənin bütün istinad edilmiş mənbələri (Mühazirə 1 üçün 34 ədəd) işlək DOI və mənbə linkləri ilə istifadəçiyə təqdim edildi.
  - Bütün dəyişikliklər hər üç qata (`root`, `Kripto_WebApp-HTML-SPA/`, `raw/`) tətbiq edildi.

---

## [2026-09-10] fix | Mühazirə 1–10 Daxilindəki Təkrar Mündəricatın (nav#TOC) Ləğvi və Vizual Səliqə

- **Təkrar Daxili Mündəricat Siyahısının Təmizlənməsi:**
  - Mühazirə 1-dən 10-a qədər olan sənədlərin başlığında Pandoc tərəfindən yerləşdirilmiş və veb interfeysdə mətndən əvvəl lazımsız nöqtəli siyahı kimi görünən `<nav id="TOC">` bloku 60 fayldan (kök, `Kripto_WebApp-HTML-SPA/` və `raw/`) tamamilə silindi.
  - Artıq Mühazirə 1–10 da Mühazirə 11 və digər dərslər kimi birbaşa səliqəli başlıq kartı (`titlepage`) və "Giriş" bölməsi ilə açılır.
- **Dinamik Mühafizə Qatı:**
  - `app.js` daxilində `renderDynamicHtml` funksiyasına `nav#TOC` və `nav[role="doc-toc"]` elementlərini avtomatik silən təmizləyici əlavə edildi.
  - `style.css` faylına `#TOC, nav#TOC, nav[role="doc-toc"] { display: none !important; }` qaydası əlavə olundu.
  - `lectures_bundle.js` 34 sənəd üzrə yenidən yığıldı.

---

## [2026-09-10] feature | Dərslərdə İstinad Edilən Mənbələrin 100% İşlək Linklə Təmin Edilməsi

- **100% Link Əhatəliliyi (Coverage) Təmin Edildi:**
  - Kursun 30 mühazirəsi və 4 elmi əlavəsində istinad edilən 284 unikal akademik mənbənin hamısı yoxlanıldı.
  - Linki olmayan 63 ədəd mənbə üçün rəsmi, daimi və etibarlı identifikatorlar (DOI, IETF RFC, NIST CSRC, IACR ePrint, universitet və nəşriyyat portalları) müəyyən edildi və bazaya əlavə olundu.
  - Linklə təmin olunma faizi 77.8%-dən tam **100.0%-ə (284/284)** çatdırıldı.
  - `references_data.js` (root, `Kripto_WebApp-HTML-SPA/`, `raw/`) və `references.bib` faylları sinxronlaşdırıldı.
  - Avtomatlaşdırılmış Python audit skripti ilə bütün 284 mənbənin 100% aktiv linkə malik olduğu təsdiqləndi.

---

## [2026-09-10] refactor | Mühazirə 1-10 Sinxronizasiyası, Kerckhoffs 1883 Çıxarılması, 12.1 və 15-detailed Silinməsi

- **1883 Fransızca Ədəbiyyatın (Kerckhoffs) Çıxarılması:**
  - `kerckhoffs1883cryptographie` (Auguste Kerckhoffs, "La cryptographie militaire", 1883) sitat teqləri, `references.bib` və `references_data.js` (həm SPA, həm kök, həm də `raw/`) bazalarından tamamilə təmizləndi.
  - Kerckhoffs prinsipi Claude Shannon-un 1949-cu il ("Communication Theory of Secrecy Systems") fundamental əsərinə istinadlandırıldı.
- **Tək "İstifadə edilmiş ədəbiyyat" Bölməsinin Təmin Edilməsi:**
  - Mühazirə 1-dəki statik dublikat `<section id="edebiyyat">` bloku ləğv edildi; hər mühazirədə yalnız tək dinamik `#lecture-bibliography-block` qaldı. Heç bir "Klassik Ədəbiyyat" bölməsi saxlanılmadı.
- **12.1 və 15 Detailed Sənədlərinin Tam Silinməsi:**
  - `Mühazirə_12_1.html`, `lecture_12_1.html`, `Mühazirə_15_detailed.html`, `lecture_15_detailed.html` faylları `root`, `raw/` və `Kripto_WebApp-HTML-SPA/` qovluqlarından silindi.
  - `index.html` (Mündəricat menyusu və kataloq kartları), `app.js` (`LECTURE_METADATA`, `LECTURE_ORDER`), `README.md`, `index.md` və Wiki sənədlərindən bütün keçidlər təmizləndi. Kurs dəqiq 30 nömrələnmiş mühazirə və 4 elmi əlavəyə gətirildi.
- **Shannon Ədəbiyyatının Tam Qorunması:**
  - `shannon1948mathematical` və `shannon1949communication` elmi əsərləri və onlara olan onlarla sitat nöqtəsi 100% qorunub saxlanıldı.
- **Mühazirə 1–10 Yenilənməsi və Çoxsəviyyəli Sinxronizasiya:**
  - İstifadəçi tərəfindən yenilənmiş 1–10 mühazirə sənədləri mətni, təkmilləşdirilmiş çalışmaları və ətraflı cavabları ilə birgə kök `lecture_1..10.html`, `Kripto_WebApp-HTML-SPA/` və `raw/` fayllarına tam köçürüldü.
  - `lectures_bundle.js` 34 sənəd üçün yenidən quruldu və JavaScript sintaksisi tam test edildi.

---

## [2026-08-28] infra | Vercel-dən GitHub Pages (GitHub Actions) Platformasına Keçid

- **GitHub Pages Avtomatlaşdırılması:**
  - Yaradıldı: `.github/workflows/deploy-pages.yml` rəsmi GitHub Actions CI/CD iş axını.
  - `master` budağına hər dəfə push edildikdə `Kripto_WebApp-HTML-SPA` qovluğunu birbaşa GitHub Pages artifact olaraq build və deploy edir.
  - Repozitoriya kök qovluğuna və SPA qovluğuna `.nojekyll` faylları əlavə edildi (Jekyll süzgəcinin aktivləşməməsi üçün).
  - Repozitoriya kök qovluğuna fallback yönləndirmə `index.html` əlavə edildi.
- **Vercel Qalıqlarının Təmizlənməsi:**
  - `vercel.json` faylı silindi.
  - `index.html` və `raw/index.html`-dən Vercel Analytics və Speed Insights skriptləri silindi.
  - `app.js` və `raw/app.js`-dən `window.va` hadisə izləmə kodu silindi.
  - `README.md` sənədləşməsi yeniləndi (GitHub Pages 1-klik deploy təlimatı ilə).

---

## [2026-08-27] feature | Dinamik Citation Engine & Master Elmi Ədəbiyyat Kitabxanası (Variant A)

- **Dinamik Akademik İstinad Mühərriki (Citation Engine):**
  - `references.bib` faylından 674 ədəd tam akademik BibTeX qeydi avtomatik ayrışdırılaraq `references_data.js` lüğətinə çevrildi.
  - Bütün 30 mühazirə və 4 elmi əlavədəki 299 unikal `data-cites` nöqtəsi avtomatik olaraq interaktiv, kliklənən `[Diffie & Hellman, 1976]`, `[Shannon, 1949]` akademik nişanlarına çevrildi.
  - Hover Popover/Tooltip sistemi vasitəsilə oxucu istinadın üzərinə gəldikdə əsərin tam adı, müəllifləri, nəşr ili, jurnalı və rəsmi DOI keçidi açılır.
  - İstinada kliklədikdə mühazirənin sonunda avtomatik formalaşan "İstifadə Edilmiş Ədəbiyyat və Mənbələr" kartına səlis animasiya ilə keçid təmin edildi.
- **Mərkəzi Elmi Ədəbiyyat Kitabxanası Səhifəsi (`#bibliography`):**
  - Üst naviqasiya və yan mündəricat menyusuna "Ədəbiyyat və Mənbələr (670+)" bölməsi əlavə edildi.
  - 674 mənbə içərisində real-vaxt axtarış paneli, kateqoriya filtrləri (Kitablar, Məqalələr, Konfranslar, Standartlar) və çeşidləmə seçimləri quruldu.
  - Hər mənbə kartına tək kliklə BibTeX kodunu kopyalayan düymə və xəbərdarlıq bildirişi (toast) əlavə edildi.

---

## [2026-08-27] style | MathJax Inline Riyazi Şriftlərin (n) Düzləndirilməsi və Tam Ağ (Light) Rejimə Keçid

- **Inline Riyazi Elementlərin (MathJax) Baseline Hizalanması:**
  - CSS-də `mjx-container` və `.math.inline` üzərində olan süni `vertical-align: middle` və `vertical-align: -0.1em` qaydaları silindi.
  - MathJax v3 CHTML mühərrikinin öz daxili font-metrika və baseline tənzimləməsinə tam sərbəstlik verildi.
  - Mətndəki $n$, $m$, $c$, $(pk, sk)$, $\frac{n(n-1)}{2}$ kimi riyazi dəyişənlərin və simvolların cümlə xəttindən aşağı düşməsi problemi tam aradan qaldırıldı.
- **Qaranlıq (Dark) Rejimin Tamamilə Ləğvi və Ağ (Light) Rejimə Keçid:**
  - `style.css`-dən bütün `[data-theme="dark"]` blokları, `.btn-theme-toggle` düymə stilləri və `color-scheme: light dark` silindi, default `color-scheme: light` təyin edildi.
  - `index.html`-dən tema dəyişdirmə düyməsi, `data-theme` atributu və Zero FOUC qaranlıq rejim yoxlama skripti silindi.
  - `app.js`-dən tema dəyişdirmə hadisə dinləyiciləri və `applyTheme` funksiyaları silindi, köhnə keşlənmiş `kripto-theme` açarı təmizləndi.

---

## [2026-08-21] infra | Docker Konteynerləşdirməsi, Vercel Analytics və SPA Optimizasiyaları

- **Docker Konteynerləşdirməsi:**
  - Created `Dockerfile` based on `nginx:alpine` for production-grade static serving.
  - Created `nginx.conf` with UTF-8 charset, gzip compression for math/HTML/JS, security headers, and SPA routing fallback.
  - Created `compose.yaml` for one-command `docker compose up -d` deployment on port 8080.
  - Created `.dockerignore` to keep image minimal and secure.
- **Dinamik Məzmun və Vercel İnteqrasiyası:**
  - Created `lectures_bundle.js` with in-memory 0ms instant preloaded content for all 30 lectures + 4 supplements.
  - Added ASCII file aliases (`lecture_1.html` ... `lecture_30.html`, `supplement_a.html` ... `supplement_d.html`) and resilient multi-candidate fetch fallback.
  - Configured `vercel.json` with clean rewrites and disabled conflicting cleanUrls.
  - Integrated official Vercel Web Analytics (`window.va`) and SPA lecture view event tracking.
- **Riyazi və Vizual Təkmilləşmələr:**
  - Cleaned and normalized display math and inline expressions across all 30 lectures and 4 supplements, eliminating broken paragraphs, stray linebreaks, and hanging punctuation.
  - Integrated `aes_penguin.png` visual mode comparison (ECB vs CBC) into Lecture 11 and `wiki/concepts/Blok Şifrə Rejimləri (ECB, CBC, CTR, GCM).md`.
  - Upgraded bibliography to 30+ verified academic sources with direct Harvard Math PDF for Shannon 1948.

## [2026-08-21] ingest | Tam 30 Mühazirə və 4 Əlavənin Master İnqesti

- Archived all 36 HTML lecture and supplement files from `Kripto_WebApp-HTML-SPA/` into `raw/`.
- Created comprehensive multi-module summaries in `wiki/summaries/`:
  - `Summary - Mühazirələr 3-6 (Klassik Təkmilləşmələr, Ehtimal, Məxfilik və LFSR).md`
  - `Summary - Mühazirələr 7-15 (Simmetrik Şifrlər, AES, Blok Rejimləri və Heş Funksiyaları).md`
  - `Summary - Mühazirələr 16-23 (Asimmetrik Kriptoqrafiya, Ədədlər Nəzəriyyəsi, RSA və Elliptik Əyrilər).md`
  - `Summary - Mühazirələr 24-30 və Əlavələr A-D (Protokollar, ZKP, PQC, Blokçeyn və Cəbr).md`
- Created 15 new core concept pages in `wiki/concepts/`:
  - `AES Alqoritmi (Rijndael).md`
  - `Blok Şifrə Rejimləri (ECB, CBC, CTR, GCM).md`
  - `Trivium və ChaCha20.md`
  - `LFSR və Axın Şifrələri.md`
  - `Feystel Şəbəkələri və DES.md`
  - `Süngər Konstruksiyası və Keccak (SHA-3).md`
  - `Mesaj Autentikasiya Kodları (MAC və HMAC).md`
  - `Poly1305 və AEAD.md`
  - `RSA Kriptosistemi.md`
  - `Elliptik Əyrilər Kriptoqrafiyası (ECC).md`
  - `Çin Qalıq Teoremi (CRT).md`
  - `Evler Teoremi və Fermat-ın Kiçik Teoremi.md`
  - `İctimai Açar İnfrastrukturu (PKI və X.509).md`
  - `TLS 1.3 Protokolu.md`
  - `Sıfır Biliyi Sübutları (ZKP və zk-SNARKs).md`
  - `Yan Kanal Hücumları (Side-Channel Attacks).md`
  - `Post-Kvant Kriptoqrafiya (PQC).md`
  - `Qəfəs Əsaslı Kriptoqrafiya (Lattice-based & Kyber).md`
  - `Tam Homomorfik Şifrələmə (FHE).md`
  - `Təhlükəsiz Çoxtərəfli Hesablama (MPC).md`
  - `Qalua Meydanları GF(2^8).md`
  - `Hesablama Mürəkkəbliyi (P vs NP vs BQP).md`
- Created 6 new entity pages in `wiki/entities/`:
  - `Joan Daemen və Vincent Rijmen.md`
  - `Ron Rivest, Adi Shamir və Leonard Adleman (RSA).md`
  - `Daniel J. Bernstein (djb).md`
  - `Peter Shor.md`
  - `Shafi Goldwasser və Silvio Micali.md`
  - `Neal Koblitz və Victor Miller.md`
- Fully updated and synchronized [index.md](file:///Users/macbookairm2/Documents/GitHub/Kripto-Kurs/index.md) master catalog.

## [2026-08-17] docs | Layihə Sənədləşməsi və Obsidian Bələdçisi

- Created root [[README.md]] covering the full repository architecture, SPA web app, raw source storage, and LLM Wiki guidelines.
- Created synthesis page [[LLM Wiki və Obsidian İstifadə Bələdçisi]] explaining the human-LLM-Obsidian triad, Graph View usage, and workflows.
- Synchronized [[index.md]] catalog.

## [2026-08-17] compound | Asimmetrik İnqilab və Blokçeyn Arxitekturaları

- Created concept pages:
  - [[Diffie-Hellman Açar Mübadiləsi]] (Diskret loqarifm və ortaq gizli açar).
  - [[Rəqəmsal İmzalar və ECDSA]] (İmza arxitekturası, secp256k1 və inkar edilməzlik).
  - [[Merkle Ağacları]] (İkili heş ağacları, $O(\log N)$ yoxlama və SPV müştərilər).
- Created entity pages:
  - [[Whitfield Diffie və Martin Hellman]] (Açıq açarlı kriptoqrafiyanın baniləri).
  - [[Satoshi Nakamoto]] (Bitcoin və mərkəzsiz konsensus ixtiraçısı).
  - [[Adam Back]] (Hashcash və Proof of Work ixtiraçısı).
- Created Grand Synthesis page:
  - [[Kriptoqrafiyanın Təkamülü: Klassik Əvəzetmədən Asimmetrik və Blokçeyn İnframodelinə]] (2500 illik təkamülün 4 dövrü).
- Synchronized [[index.md]] catalog.

## [2026-08-17] compound | OTP, Heş Funksiyaları və Praktik Məsələlər Bələdçisi

- Created concept pages:
  - [[One-Time Pad və Mükəmməl Gizlilik]] (Vernam şifrəsi, Şennon teoremi, 3 qızıl şərt).
  - [[Kriptoqrafik Heş Funksiyaları]] (Pre-image, 2nd pre-image, collision resistance, avalanche effect).
- Created entity page:
  - [[Gilbert Vernam]] (OTP və avtomatik teleks şifrələmə ixtiraçısı).
- Created synthesis page:
  - [[Klassik Kriptoqrafiya Praktik Məsələlər və Həll Metodları]] (Affin KPA açar bərpası, xətti tənliklər sistemi, EEA addım-addım həlləri).
- Synchronized [[index.md]] catalog.

## [2026-08-17] compound | Riyazi İnversiya və Poliəlifbalı Şifrlər

- Created concept pages:
  - [[Genişləndirilmiş Evklid Alqoritmi]] (Bézout əmsalları və $a^{-1}\pmod m$ tapılması).
  - [[Poliəlifbalı Əvəzetmə Şifrələri]] (Vigenère və Kasiski analizi).
- Created entity page:
  - [[Bitcoin]] (secp256k1, SHA-256, PoW konsensusu).
- Created synthesis page:
  - [[Kriptoqrafiyada Riyazi İnversiya və Açar Məkanının Təhlili]].
- Synchronized [[index.md]] catalog.

## [2026-08-17] ingest | Mühazirə 1 & Mühazirə 2 (Kriptoqrafiya Kursu)

- Copied immutable lecture files to `raw/Mühazirə_1.html` and `raw/Mühazirə_2.html`.
- Created source summaries:
  - `wiki/summaries/Summary - Mühazirə 1 (Kriptoqrafiyaya Giriş).md`
  - `wiki/summaries/Summary - Mühazirə 2 (Klassik Şifrələr və Modul Arifmetika).md`
- Created core concept pages in `wiki/concepts/`:
  - `Kriptoqrafik Təhlükəsizlik Xidmətləri.md` (CIAAN)
  - `Kerckhoffs Prinsipi.md`
  - `Simmetrik və Asimmetrik Kriptoqrafiya.md`
  - `Təhdid Modelləri.md`
  - `Kriptosistem Beşliyi.md`
  - `Modul Arifmetika.md`
  - `Sezar Şifrəsi.md`
  - `Affin Şifrəsi.md`
  - `Monoalfabetik Əvəzetmə Şifrələri.md`
  - `Tezlik Analizi.md`
- Created entity pages in `wiki/entities/`:
  - `Al-Kindi.md`
  - `Auguste Kerckhoffs.md`
  - `Claude Shannon.md`
  - `Julius Caesar.md`
  - `Signal Protocol.md`
  - `EMV Standartı.md`
  - `PGP və S-MIME.md`
- Created synthesis page:
  - `wiki/syntheses/Klassik Şifrələrin Təhlükəsizlik Zəiflikləri və Müasir Kriptoqrafiyaya Keçid.md`
- Updated [[index.md]] catalog with 2 summaries, 10 concepts, 7 entities, 1 synthesis, and raw source mappings.

## [2026-08-17] init | Repository Wiki Initialized

- Initialized directory structure (`raw/`, `raw/assets/`, `wiki/concepts/`, `wiki/entities/`, `wiki/summaries/`, `wiki/syntheses/`).
- Created [[AGENTS.md]] with wiki architecture, Obsidian linking rules, frontmatter schema, and ingest/query/lint protocols.
- Created [[index.md]] catalog and initialized [[log.md]].
## [2026-09-22] ingest | Mühazirə 11–30: Yeni 20 mühazirənin vebsayta inteqrasiyası

- Pandoc tərəfindən yaradılmış `<nav id="TOC">` bölməsi bütün 20 fayldan (11–30) silindi
- Hər mühazirəyə standart `<section id="istinadlar">` bölməsi əlavə edildi (dinamik istinad kartları)
- Bütün fayllar 3 tier-ə (root, Kripto_WebApp-HTML-SPA/, raw/) sinxronlaşdırıldı
- ASCII alias fayllar (lecture_11.html ... lecture_30.html) hər 3 tierdə yaradıldı
- lectures_bundle.js bütün 30 mühazirə və 5 əlavə üçün yeniləndi (35 element)
