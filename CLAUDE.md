# plurality-llm-wiki-de

## Thema
**Deutschsprachige Pluralitäts-Diskussion** — Begriffssystem. Quellen umfassen die deutsche Ausgabe des Plurality-Buchs (Radicalxchange 2026), deutschsprachigen politischen und akademischen Diskurs, sowie die deutsch-taiwanische Dialogtradition.

Teil des mehrsprachigen [plurality-llm-wiki](https://github.com/nishio/plurality-llm-wiki) Wiki-Walds. Dieses Wiki ist **autonom** — seine Seiten müssen keine Übersetzungen des en-Wikis ([plurality-llm-wiki-en](https://github.com/nishio/plurality-llm-wiki-en)), ja-Wikis ([plurality-llm-wiki-ja](https://github.com/nishio/plurality-llm-wiki-ja)) oder zh-tw-Wikis ([plurality-llm-wiki-zh-tw](https://github.com/nishio/plurality-llm-wiki-zh-tw)) sein und müssen auch nicht direkte Korrespondenzen haben.

> Jede Sprache artikuliert den Begriffsraum auf andere Weise. Die Differenzen selbst sind Gegenstand der Beobachtung und Analyse des Wiki-Walds — Differenz erzeugt Wert.

Besonderheit der deutschsprachigen Pluralitäts-Diskussion: Sie steht historisch an der Schnittstelle zwischen amerikanisch-pragmatischer Demokratietheorie (Dewey, der hier viel rezipiert wurde) und kontinentaler kritischer Theorie (Habermas, Arendt, Frankfurter Schule). Die deutsche Buchausgabe (2026) aktiviert über Übersetzungsentscheidungen wie "Meinungsbildung" und "Gewerkschaften" gezielt diese Traditionen.

## Verzeichnisstruktur

```
plurality-llm-wiki-de/
├── CLAUDE.md                          # diese Datei
├── raw/                               # Rohquellen (gitignored)
├── wiki/
│   ├── index.md                       # Mensch-Navigation (curated)
│   ├── index.txt                      # KI-Volltextkatalog (auto-generiert)
│   ├── log.md                         # Mensch-Log letzte 7 Tage (full detail)
│   ├── log.txt                        # KI-Volltext-Verlauf (auto-generiert)
│   ├── concepts/                      # Konzeptseiten
│   ├── entities/                      # Personen, Werkzeuge, Projekte
│   ├── sources/                       # Quellen-Zusammenfassungen
│   └── analyses/                      # Analysen aus Beobachtungen
├── scripts/
│   ├── lint_wiki.py                   # Wiki-Gesundheitsprüfung
│   ├── build_index_txt.py             # index.txt aus Frontmatter regenerieren
│   └── refresh_logs.py                # log.txt + log.md (7 Tage) synchronisieren
```

## Sprachübergreifende Korrespondenzen

Sprachübergreifende Konzept-Korrespondenzen werden im Parent über [correspondences.yaml](https://github.com/nishio/plurality-llm-wiki/blob/main/correspondences.yaml) verwaltet. Wie Wikipedia-Sprachverknüpfungen — eine Zeile behauptet nur "selbes/verwandtes Thema", nicht inhaltliche Äquivalenz.

Nach Hinzufügen einer neuen Konzeptseite:
- Erweitere `correspondences.yaml` um die de-Spalte, verknüpfe sie mit en / ja / zh-tw (jede Seite darf `null` sein = keine Entsprechung)
- Oder dokumentiere explizit "keine Entsprechung" (en: ~ / ja: ~) — dies ist keine Nachlässigkeit, sondern eine beobachtete Tatsache.

## Seitenregeln

### Gemeinsame Regeln
- YAML-Frontmatter am Seitenanfang: `type`, `summary`, `sources`
- Quellen mit `[[Quellenseite]]` zitieren (deutscher Stil: "laut/aus [[Quellenseite]]" oder "([[Quellenseite]])")
- Widersprüche oder ungelöste Punkte unter `## Open Questions`
- Aktualisierungen nicht überschreiben — unter `## Updates` ergänzen
- Wikilinks im `[[Seitenname]]`-Format (Wikipedia-Doppelklammer)

### Frontmatter-Beispiel
```yaml
---
type: concept
summary: Eine-Zeilen-Beschreibung des Begriffs
sources:
  - quellenseitenname.md
---
```

## Operation

### Index-Pflege (KI/Mensch-Trennung, kouchou-Pattern)

- **`wiki/index.md`** — Mensch-kuratiertes Navigationsverzeichnis. Manuell pflegen.
- **`wiki/index.txt`** — KI-Volltextkatalog. **Nicht manuell editieren.** Nach Hinzufügen/Umbenennen/Löschen einer Seite oder Änderung der Frontmatter-summary regenerieren:
  ```sh
  python3 scripts/build_index_txt.py
  ```

### Log-Pflege (KI/Mensch-Trennung, kouchou-Pattern)

- **`wiki/log.md`** — Mensch-Log letzte 7 Tage, full detail, newest first. Manuell am Anfang einen `## [YYYY-MM-DD HH:MM] <type> | <title>`-Block hinzufügen.
- **`wiki/log.txt`** — KI-Volltext-Verlauf, kompakt. **Nicht manuell editieren.** Nach Eintragung in log.md regenerieren:
  ```sh
  python3 scripts/refresh_logs.py
  ```

### Ingest (raw → wiki)
1. Datei in `raw/` lesen
2. Mit bestehenden Wiki-Seiten abgleichen
3. Aktualisieren oder neu anlegen (Frontmatter erforderlich)
4. Nach Änderung des Seitenbestands `python3 scripts/build_index_txt.py` ausführen
5. log.md am Anfang `## [YYYY-MM-DD HH:MM] ingest | <description>` hinzufügen
6. `python3 scripts/refresh_logs.py` ausführen
7. Falls neuer Begriff potenziell zu en / ja / zh-tw korrespondiert, parent `correspondences.yaml` aktualisieren

### Query
1. `wiki/` durchsuchen, antworten
2. Nützliche Antworten als `analyses/` filing-back
3. Im Log als `filing-back` eintragen, `refresh_logs.py` ausführen

### Lint
1. Mechanisch: `python3 scripts/lint_wiki.py`
2. Semantisch: Widersprüche, stale claims, fehlende Konzeptseiten, Vorschläge für neue Fragen
3. Lint-Log nur bei Detektion eintragen (No-Detect-Lint wird durch `refresh_logs.py` automatisch verworfen)

## Operative Leitlinien

- Quellen sind "Referenz", nicht unkritische Übernahme
- Keine forcierte Übersetzungs-Konsistenz mit en / ja / zh-tw — Differenz ist das Thema des Wiki-Walds
- Das Schema (diese Datei) entwickelt sich ebenfalls durch Experimentieren weiter

## Übersetzungs-Sensibilität für deutsche Pluralitäts-Diskussion

Besondere Aufmerksamkeit gilt — gemäß der Beobachtung im Initial-Ingest 2026-05-28:

1. **Lehnwort-Pfad vs. semantische Übersetzung**: "Pluralität" folgt dem Latinisierungs-Pfad (lat. *pluralitas*) wie das Japanische ("プルラリティ"). Im Gegensatz dazu wählt zh-tw mit "多元" einen rein semantischen Pfad.

2. **Politisierende Übersetzungen**: Wo das Englische technisch-neutrale Worte nutzt (Coalition, Augmented), eindeutscht die Buchausgabe oft auf politisch-konnotierte Begriffe (Gewerkschaft, Meinungsbildung) — was die Habermas/Arendt/Gewerkschaftstraditionen aktiviert.

3. **Englisches Lehnwort-Reservoir**: Manche Begriffe bleiben englisch (Liquid Democracy, Quadratic Funding, Foundation Models, Polis, Community Notes) — meist Eigennamen oder Konzepte ohne deutsche Diskurstradition.

4. **Gender-Doppelpunkt**: Konsequent in der gesamten Buchausgabe verwendet ("Bürger:innen", "Autor:in"). Dies dürfte für neue Konzeptseiten ebenfalls die Empfehlung sein.
