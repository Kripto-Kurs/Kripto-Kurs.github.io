---
title: Kriptosistem Beşliyi
type: concept
tags:
  - kriptoqrafiya
  - formal-model
  - kriptosistem
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_2.html]]"
aliases:
  - Cryptosystem 5-tuple
  - Riyazi Kriptosistem Modeli
---

# Kriptosistem Beşliyi

Kriptoqrafiyada kriptosistem riyazi olaraq formal bir **beşlik (5-tuple)** kimi təyin olunur:

$$(\mathcal{P}, \mathcal{C}, \mathcal{K}, \mathcal{E}, \mathcal{D})$$

---

## 📐 Komponentlər

1. **$\mathcal{P}$ (Plaintext Space - Açıq Mətn Fəzası):**
   Mümkün bütün açıq mətnlərin çoxluğu (məsələn, ingilis əlifbası simvolları $\mathbb{Z}_{26}$, baytlar ardıcıllığı $\{0,1\}^*$).
2. **$\mathcal{C}$ (Ciphertext Space - Şifrəli Mətn Fəzası):**
   Mümkün bütün şifrəli mətnlərin çoxluğu.
3. **$\mathcal{K}$ (Key Space - Açar Fəzası):**
   İstifadə edilə biləcək bütün mümkün açarların çoxluğu.
4. **$\mathcal{E} = \{E_k : k \in \mathcal{K}\}$ (Şifrləmə Funksiyaları Çoxluğu):**
   Hər bir $k \in \mathcal{K}$ üçün $E_k: \mathcal{P} \to \mathcal{C}$ inyektiv inikası.
5. **$\mathcal{D} = \{D_k : k \in \mathcal{K}\}$ (Deşifrləmə Funksiyaları Çoxluğu):**
   Hər bir $k \in \mathcal{K}$ üçün $D_k: \mathcal{C} \to \mathcal{P}$ inikası.

---

## ⚖️ Düzgünlük Şərti (Correctness Condition)

Kriptosistemin düzgün işləməsi üçün hər bir mümkün $k \in \mathcal{K}$ açarı və hər bir $m \in \mathcal{P}$ açıq mətni üçün aşağıdakı tələb ödənməlidir:

$$D_k(E_k(m)) = m$$

---

## 🔢 Açar Fəzasının Ölçüsü və Təhlükəsizlik

Açar fəzasının gücü $|\mathcal{K}|$ tam axtarış (exhaustive search / brute-force) hücumlarına qarşı ilkin müdafiə xəttini müəyyən edir:
- [[Sezar Şifrəsi]]: $|\mathcal{K}| = 26$ (trivial sındırılır).
- [[Affin Şifrəsi]]: $|\mathcal{K}| = 12 \times 26 = 312$ (trivial sındırılır).
- [[Monoalfabetik Əvəzetmə Şifrələri]]: $|\mathcal{K}| = 26! \approx 4 \times 10^{26} \approx 2^{88}$ (açar böyükdür, lakin statistik analizlə sındırılır).
- **Müasir AES-128 / AES-256**: $|\mathcal{K}| = 2^{128}$ və ya $2^{256}$ (brute-force qarşısında kvant öncəsi sarsılmazdır).

---

## 🔗 Əlaqəli Səhifələr

- [[Kerckhoffs Prinsipi]]
- [[Modul Arifmetika]]
- [[Sezar Şifrəsi]]
- [[Affin Şifrəsi]]
- [[Monoalfabetik Əvəzetmə Şifrələri]]
