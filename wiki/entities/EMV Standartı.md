---
title: EMV Standartı
type: entity
tags:
  - standart
  - bank
  - kartlar
  - odenis
created: 2026-08-17
updated: 2026-08-17
sources:
  - "[[raw/Mühazirə_1.html]]"
aliases:
  - EMV Standard
  - Çip Kart Standartı
---

# EMV Standartı (Europay, MasterCard, Visa)

**EMV** — kredit və debet kartlarında quraşdırılmış mikroçiplər vasitəsilə təhlükəsiz ödəniş əməliyyatlarını həyata keçirmək üçün qlobal texniki standartdır.

---

## 💳 Kriptoqrafik Mexanizmlər

Köhnə maqnit zolaqlı kartlardan fərqli olaraq (statik məlumat saxladığından asanlıqla klonlaşdırılırdı), EMV çipləri aktiv kriptoqrafik mini-kompüterlərdir:

1. **Dinamik Kriptoqram (Dynamic Application Cryptogram - ARQC/TC):** Hər tranzaksiya üçün kartın daxilindəki simmetrik gizli açar, əməliyyat məbləği, valyuta və təsadüfi sayğac (ATC) əsasında unikal kriptoqrafik imza yaradılır.
2. **Çip-Daxili PIN Doğrulaması:** İstifadəçinin daxil etdiyi PIN terminal tərəfindən açıq şəkildə ötürülmür, birbaşa çip tərəfindən kriptoqrafik yolla yoxlanılır (Offline PIN verification).
3. **Klonlaşdırmadan Müdafiə:** Kartdakı gizli açarı çipin daxilindən kənara çıxarmaq mümkün olmadığı üçün kartın fiziki klonunu yaratmaq qeyri-mümkündür.

---

## 🔗 Əlaqəli Səhifələr

- [[Kriptoqrafik Təhlükəsizlik Xidmətləri]]
- [[Simmetrik və Asimmetrik Kriptoqrafiya]]
