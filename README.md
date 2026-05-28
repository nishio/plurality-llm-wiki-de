# plurality-llm-wiki-de

Die **deutschsprachige Ausgabe** des mehrsprachigen [plurality-llm-wiki](https://github.com/nishio/plurality-llm-wiki) Wiki-Walds. Begriffssystem der deutschsprachigen "Pluralitäts"-Diskussion — Quellen umfassen die deutsche Ausgabe des Plurality-Buchs (Radicalxchange 2026, ISBN 978-3-00-086092-8), den deutschsprachigen politischen und akademischen Diskurs sowie die deutsch-taiwanische Dialogtradition.

**Öffentliche Website:** https://nishio.github.io/plurality-llm-wiki-de/

## Beziehung zu den Schwester-Wikis

Dieses Wiki ist **autonom**. Seine Seiten müssen keine Übersetzungen des [en-Wikis](https://github.com/nishio/plurality-llm-wiki-en), des [ja-Wikis](https://github.com/nishio/plurality-llm-wiki-ja) oder des [zh-tw-Wikis](https://github.com/nishio/plurality-llm-wiki-zh-tw) sein und müssen auch nicht direkte Korrespondenzen haben. Jede Sprache artikuliert den Begriffsraum auf andere Weise, und die Differenz selbst ist Gegenstand der Beobachtung und Analyse des Parent-Wikis.

Sprachübergreifende Korrespondenzen (und explizite Lücken) werden im Parent über [correspondences.yaml](https://github.com/nishio/plurality-llm-wiki/blob/main/correspondences.yaml) verfolgt. Die Zeilen dort entsprechen Wikipedia-Sprachverknüpfungen — sie behaupten, dass es sich "um dieselbe oder verwandte Thematik handelt", aber nicht, dass die Inhalte äquivalent sind.

Besonderheit der deutschsprachigen Pluralitäts-Diskussion: Sie steht historisch an der Schnittstelle zwischen amerikanisch-pragmatischer Demokratietheorie (Dewey wurde in Deutschland viel rezipiert) und kontinentaler kritischer Theorie (Habermas, Arendt, Frankfurter Schule). Die deutsche Buchausgabe (2026) aktiviert über Übersetzungsentscheidungen wie "Meinungsbildung", "Gewerkschaften" und "Assoziationsfreiheit" gezielt diese Traditionen.

## Repository-Struktur

```
wiki/
├── index.md             Mensch-Navigation (kuratiert)
├── log.md               Mensch-Aktivitätslog letzte 7 Tage
├── concepts/            Konzeptseiten
├── entities/            Personen, Werkzeuge, Projekte
├── sources/             Quellen-Zusammenfassungen
└── analyses/            Analysen aus Beobachtungen
```

`index.txt` / `log.txt` sind KI-spezifische auto-generierte Dateien — nicht manuell editieren.

## Mitwirken

- Operationsdetails, Seitenregeln, Frontmatter-Schema: [CLAUDE.md](CLAUDE.md)
- Nach Hinzufügen/Umbenennen/Löschen einer Seite: `python3 scripts/build_index_txt.py`
- Nach Hinzufügen eines Log-Eintrags: `python3 scripts/refresh_logs.py`
- Mechanische Gesundheitsprüfung: `python3 scripts/lint_wiki.py`

## Operative Leitlinien

- Quellen sind "Referenz", nicht unkritische Übernahme
- Keine forcierte Übersetzungs-Konsistenz mit en / ja / zh-tw — Differenz ist das Thema des Wiki-Walds
- Das Schema (CLAUDE.md) entwickelt sich ebenfalls durch Experimentieren weiter

## Quartz-Build (lokal)

Die Quartz-Build-Toolchain (für GitHub Pages) ist in diesem Repository **nicht vorinstalliert** — sie muss aus einem Schwester-Wiki kopiert werden:

```sh
# einmalig:
cp -r ../plurality-llm-wiki-zh-tw/quartz ./quartz
pnpm install --frozen-lockfile
pnpm build
```

Der GitHub-Pages-Workflow (`.github/workflows/deploy-pages.yml`) erwartet die Quartz-Toolchain als Teil des Repositories.
