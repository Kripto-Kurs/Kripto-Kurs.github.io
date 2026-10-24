---
title: Poliəlifbalı Əvəzetmə Şifrələri
type: concept
tags:
  - kriptoqrafiya
  - klassik-sifrler
  - polielifba
  - vigenere
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Polyalphabetic Ciphers
  - Vigenère Şifrəsi
  - Poliəlifbalı Şifrələmə
---

# Poliəlifbalı Əvəzetmə Şifrələri (Polyalphabetic Ciphers)

**Poliəlifbalı əvəzetmə şifrələri** — açıq mətnin hərflərini mətn boyu birdən çox əvəzetmə əlifbası (və ya fərqli sürüşdürmə açarları) ilə şifrələyən klassik kriptosistemlər sinfidir.

Bu yanaşma [[Al-Kindi]] tərəfindən irəli sürülmüş [[Tezlik Analizi|Tezlik Analizinin]] birbaşa təsirini zərərsizləşdirmək məqsədilə yaradılmışdır.

---

## 🆚 Monoalfabetik vs Poliəlifbalı Müqayisəsi

| Xüsusiyyət | [[Monoalfabetik Əvəzetmə Şifrələri]] | Poliəlifbalı Əvəzetmə Şifrələri |
| :--- | :--- | :--- |
| **Əvəzetmə Qaydası** | Sabit bir $\pi$ permutasiyası | Mövqedən asılı dəyişən açar sözü / əlifbalar |
| **Eyni hərfin şifrələnməsi** | Həmişə eyni şifrə hərfinə çevrilir (məs. hər bir `E` $\to$ `Q`) | Fərqli mövqelərdə fərqli hərflərə çevrilir |
| **Hərf tezlikləri** | Orijinal dilin profilini eynilə saxlayır | Tezlik qrafiki düzlənir və hamarlanır |
| **Klassik Nümunə** | [[Sezar Şifrəsi]], [[Affin Şifrəsi]] | Vigenère şifrəsi, Enigma maşını |

---

## 🛡️ Vigenère Şifrəsinin İş Prinsipi

Açar söz $K = (k_0, k_1, \dots, k_{d-1})$ periodik olaraq açıq mətnin altına yazılır:

$$c_i = (m_i + k_{i \bmod d}) \bmod 26$$
$$m_i = (c_i - k_{i \bmod d}) \bmod 26$$

### Nümunə:

- Açıq Mətn: `ATTACKATDAWN`
- Açar Söz: `LEMONLEMONLE`
- Hər bir mövqedə fərqli [[Sezar Şifrəsi]] sürüşdürməsi tətbiq olunur. Nəticədə birinci `A` hərfi `L`-ə, ikinci `A` hərfi isə `E`-yə çevrilir.

---

## 🔓 Kriptoanaliz (Kasiski Testi və Fridman İndeksi)

Poliəlifbalı şifrlər uzun müddət sındırılmaz hesab edilsə də (*le chiffre indéchiffrable*), 19-cu əsrdə Fridrix Kasiski tərəfindən aşkar edilmişdir ki:
1. Şifrəli mətndə təkrarlanan 3-4 hərfli bloklar arasındakı məsafələrin ƏBOB-u tapılaraq açar sözünün uzunluğu ($d$) müəyyən edilir.
2. Açar uzunluğu $d$ bilindikdən sonra mətn $d$ sayda müstəqil sütuna bölünür və hər bir sütun təkbaşına adi [[Tezlik Analizi]] ilə bir [[Sezar Şifrəsi]] kimi asanlıqla həll edilir.

---

## 🔗 Əlaqəli Səhifələr

- [[Tezlik Analizi]]
- [[Monoalfabetik Əvəzetmə Şifrələri]]
- [[Sezar Şifrəsi]]
- [[Claude Shannon]]
- [[Klassik Şifrələrin Təhlükəsizlik Zəiflikləri və Müasir Kriptoqrafiyaya Keçid]]
