---
type: source
summary: Quellen, deren Abruf versucht oder geplant wurde, aber durch sandboxed Tools nicht zugänglich war. Manueller Eintrag in raw/ erwünscht.
raw_sources:
  - (placeholder)
---

# Wishlist (Abruf-Hilfe erwünscht)

Diese Seite verzeichnet Quellen, deren automatischer Abruf nicht möglich war oder die noch nicht versucht wurden. Manueller Download in `raw/` (gitignored) ermöglicht den späteren Ingest.

## Native deutsche Digital-Demokratie-Diskurs (Priorität)

Hintergrund: Parent wiki analysis [[plurality-llm-wiki/wiki/analyses/nattoku-translation-vs-native]] zeigt, dass **Übersetzungspfad-Vergleich** (1 Quelle → N Sprachen) und **Native-Diskurs-Sammlung** (jede Sprache mit eigenem Vokabular) verschiedene Carving-Differenzen sichtbar machen. Das Plurality-Buch ist EN-Original; das DE Wiki braucht **native deutsche Texte über Digitale Demokratie**, um Carving-Differenzen zwischen Übersetzung und Native-Vokabular beobachtbar zu machen.

Konkret: Das Wort **"nachvollziehbar"** ist die nächste deutsche Annäherung an japanisches 「納得」, aber wir wissen nicht, wie häufig es in nativen deutschen Digital-Demokratie-Texten vorkommt. Diese Quellen würden das beobachtbar machen.

### Habermas / Öffentlichkeit-Tradition (akademische Literatur)
- Habermas, *Strukturwandel der Öffentlichkeit* (1962) und Sekundärliteratur
- Habermas, *Faktizität und Geltung* (1992) — Diskursethik / kommunikative Vernunft
- Aktuelle Habermas-Schule zu digitaler Öffentlichkeit (z. B. *Ein neuer Strukturwandel der Öffentlichkeit*, Habermas 2022)
- **Erwartung**: "Nachvollziehbarkeit" und "Verständigung" als Kernbegriffe; relevanter Vergleichsraum für [[habermas-blocks-pluralization]]

### Decidim Deutschland / Bürgerbeteiligung-Plattformen
- decidim.org (deutschsprachige Sektion)
- Aktuelle Decidim-Implementierungen in deutschen Städten (z. B. Stuttgart, Freiburg, Berlin)
- politik-digital.de — civic-tech Berichte aus deutscher Perspektive
- **Erwartung**: Praxis-Vokabular für Bürgerbeteiligung, Konsensbildung; ergänzt das eher abstrakte Buch-Vokabular

### Bundestag / Bundesregierung KI-Strategie und Digitalpolitik-Papiere
- *KI-Strategie der Bundesregierung* (2018, Fortschreibung 2020)
- *Datenstrategie* (2021)
- Enquete-Kommission "Künstliche Intelligenz" — Bundestag Abschlussbericht 2020
- **Erwartung**: offizielles Staats-Vokabular für KI-Demokratie-Schnittstelle; Vergleich zu Tang-Weyl-Tradition

### bpb.de (Bundeszentrale für politische Bildung)
- bpb.de Dossiers zu "Digitale Demokratie", "KI und Gesellschaft", "Plurale Öffentlichkeit"
- **Erwartung**: pädagogisch aufbereitetes Standardvokabular der deutschen Demokratie-Wissenschaft

### Civic-Tech-Community-Diskussion
- code-for.de und Code-for-Germany-Communities
- okfn.de (Open Knowledge Foundation Deutschland) Publikationen
- Prototype Fund — geförderte Projekte und ihre Selbstbeschreibung
- **Erwartung**: Praxis-Community-Vokabular vs. akademisches Vokabular

### Wissenschaftliche Zeitschriften
- *Internationale Politik und Gesellschaft* (Friedrich-Ebert-Stiftung)
- *Aus Politik und Zeitgeschichte* (bpb)
- *Leviathan* — Zeitschrift für Sozialwissenschaft
- **Erwartung**: akademisches Standardvokabular für politische Begriffsbildung

## Plurality-Buch-Begleitmaterial auf Deutsch

- *Plurality* deutsche Übersetzer-Vorworte (10 deutsche Stimmen sind im Buch bereits ingestiert, aber ihre eigenen Schriften nicht)
- RadicalxChange Foundation Deutschland (sofern existent)
- Plurality Berlin / Plurality Wien (Veranstaltungen)

## Format für jeden Eintrag (wenn ingestiert)

```markdown
## <Quelle-Name>

### <URL>
- **Expected content**: ...
- **Attempted**: ... 
- **Result**: ...
- **Help action**: manueller Download
```

## Hinweis zum Ingest

Wenn manuell heruntergeladen, in `raw/<descriptive-name>.md` ablegen. `raw/` ist gitignored. Folgende Ingest-Schritte: lesen → wiki/sources/<source-page>.md erstellen, ggf. concept/entity pages aktualisieren oder neu erstellen, alle in deutscher Sprache.

## Aktuelle Beobachtung (parent-wiki [[plurality-llm-wiki/wiki/analyses/nattoku-translation-vs-native]] daraus)

| Kindwiki | Übersetzungs-Quelle | Native-Diskurs-Quelle |
|---|---|---|
| ja | Plurality-Buch JA | ✓ plurality-japanese Scrapbox (1421p) + team-mirai-Manifest + a.txt |
| en | Plurality-Buch (Original) | △ civic.ai / Vitalik / Upstream PRs (teilweise nativ) |
| zh-tw | Plurality-Buch ZH-TW | △ g0v / PDIS / civic.ai-Mandarin (teilweise nativ) |
| **de** | **Plurality-Buch DE** | **✗ noch nicht vorhanden — diese Wishlist** |

Die obige Tabelle zeigt: ja hat die reichste Native-Diskurs-Sammlung; de ist am schwächsten. Diese Wishlist ist das Werkzeug, um diese Lücke schließen zu lassen.
