---
title: Klassik Kriptoqrafiya Praktik Məsələlər və Həll Metodları
type: synthesis
tags:
  - sintez
  - meseləler
  - hell-metodlari
  - klassik-sifrler
  - praktika
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Practical Cryptography Problem Solving Guide
  - Kriptoqrafiya Məsələlərinin Həlli
---

# Klassik Kriptoqrafiya: Praktik Məsələlər və Addım-Addım Həll Metodları

Bu təlimat mühazirə 1 və 2-nin laboratoriya və məşğələ tapşırıqlarında rast gəlinən əsas riyazi məsələ tiplərini və onların standart həll alqoritmlərini sistemləşdirir.

---

## 📌 Məsələ Tipi 1: Sezar Şifrəsinin Sındırılması və Deşifrləmə

**Məsələ:** Şifrəli mətn: `KHOOR`. Şifrləmə açarı $k = 3$. Açıq mətni bərpa edin.

### Həll Alqoritmi:

Formula: $m_i = (c_i - k) \bmod 26$
1. Hər bir hərfin indeksini tapırıq:
   - `K` = 10, `H` = 7, `O` = 14, `O` = 14, `R` = 17.
2. Açarı çıxırıq:
   - $10 - 3 = 7 \to$ `H`
   - $7 - 3 = 4 \to$ `E`
   - $14 - 3 = 11 \to$ `L`
   - $14 - 3 = 11 \to$ `L`
   - $17 - 3 = 14 \to$ `O`
3. Açıq mətn: `HELLO`.

---

## 📌 Məsələ Tipi 2: Affin Şifrəsində Açarların Bərpası (KPA Hücumu)

**Məsələ:** Hücumçu bilir ki, [[Affin Şifrəsi]] ilə şifrələnmiş mətndə açıq mətndəki `I` (8) hərfi `V` (21) hərfinə, `F` (5) hərfi isə `K` (10) hərfinə çevrilib. Gizli $(a, b)$ açarını və deşifrləmə düsturunu tapın.

### Addım-Addım Həll:

1. **Xətti Tənliklər Sisteminin Qurulması:**
   $$\begin{cases} a \cdot 8 + b \equiv 21 \pmod{26} & (1) \\ a \cdot 5 + b \equiv 10 \pmod{26} & (2) \end{cases}$$
2. **Tərəf-tərəfə Çıxılma:**
   $$(a \cdot 8 + b) - (a \cdot 5 + b) \equiv 21 - 10 \pmod{26}$$
   $$3a \equiv 11 \pmod{26}$$
3. **$a$-nın Tapılması:**
   $3^{-1} \pmod{26}$ elementini tapırıq. $3 \times 9 = 27 \equiv 1 \pmod{26} \implies 3^{-1} = 9$.
   $$a \equiv 11 \times 9 = 99 \equiv 21 \pmod{26}$$
   *Lakin $a = 21$ üçün $\gcd(21, 26) = 1$ olduğu yoxlanılır: $21 = 3 \times 7$, deməli $a=21$ etibarlıdır.*
4. **$b$-nin Tapılması:**
   (2) tənliyinə qoyuruq:
   $$21 \cdot 5 + b \equiv 10 \pmod{26}$$
   $$105 + b \equiv 10 \pmod{26}$$
   $105 \bmod 26 = 1 \implies 1 + b \equiv 10 \implies b = 9$.
5. **Açar Cütü:** $(a, b) = (21, 9)$.
6. **Deşifrləmə Düsturu:**
   $21^{-1} \pmod{26} = 5$ (çünki $21 \times 5 = 105 \equiv 1$).
   $$d_{(21,9)}(y) = 5 \cdot (y - 9) \bmod 26$$

---

## 📌 Məsələ Tipi 3: Genişləndirilmiş Evklid ilə Modul Tərs Hesablanması

**Məsələ:** $a = 11$ ədədinin modul $26$-ya görə tərsini tapın ($11^{-1} \pmod{26}$).

### Həll:

1. **Evklid alqoritmi:**
   - $26 = 2 \times 11 + 4 \implies 4 = 26 - 2 \times 11$
   - $11 = 2 \times 4 + 3 \implies 3 = 11 - 2 \times 4$
   - $4 = 1 \times 3 + 1 \implies 1 = 4 - 1 \times 3$
2. **Geri əvəzetmə:**
   - $1 = 4 - 1 \times (11 - 2 \times 4) = 3 \times 4 - 1 \times 11$
   - $1 = 3 \times (26 - 2 \times 11) - 1 \times 11 = 3 \times 26 - 7 \times 11$
   - $(-7) \times 11 + 3 \times 26 = 1$
3. **Modul çıxarış:**
   - $x \equiv -7 \equiv -7 + 26 \equiv 19 \pmod{26}$.
   - Nəticə: $11^{-1} \equiv 19 \pmod{26}$.

---

## 🔗 Əlaqəli Səhifələr

- [[Modul Arifmetika]]
- [[Genişləndirilmiş Evklid Alqoritmi]]
- [[Sezar Şifrəsi]]
- [[Affin Şifrəsi]]
- [[Tezlik Analizi]]
- [[Təhdid Modelləri]]
