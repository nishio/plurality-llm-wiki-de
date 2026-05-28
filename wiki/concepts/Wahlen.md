---
type: concept
summary: "⿻ Wahlen ist der deutsche Titel des Kapitels 5-6 des Pluralität-Buchs und behandelt die quadratische Stimmabgabe (QV) und Liquid Democracy (LD) als zwei radikale Alternativen zur herkömmlichen Mehrheitswahl. Der deutsche Hauptbegriff für Quadratic Voting ist quadratische Stimmabgabe oder quadratisches Wählen, mit QV als Kurzform."
sources:
  - Pluralität-Buch.md
---

# ⿻ Wahlen

## Position im Buch

Abschnitt 5-6, im Demokratie-Teil. Beginnt — wie typisch für das Buch — mit einer überraschenden Analogie aus dem Computerspiel **Civilization VI** (Erweiterung "Gathering Storm" und der dortige "Weltkongress" mit "diplomatischer Gunst"-Mechanik) als spielerische Illustration der quadratischen Stimmabgabe.

## Diagnose: Probleme der heutigen Wahlen

Die übliche "Pluralitätsregel" (= eine Person eine Stimme, Mehrheit gewinnt) hat drei strukturelle Defekte:

1. **Duverger's Law / "kleineres Übel"**: Wähler:innen werden auf zwei führende Alternativen gezwungen.
2. **Falsche Gleichheit**: Verschiedene Teilnehmer:innen haben verschiedene Intensitäten von Interesse, die durch Eine-Person-eine-Stimme nicht erfasst werden.
3. **Tyrannei der Mehrheit**: Auch im besten Fall gibt das Ergebnis nur die Mehrheitsrichtung wieder, nicht den allgemeinen Willen.

Kenneth Arrow zeigte mit seinem **Unmöglichkeitstheorem**, dass kein System mit so einfachen Eingaben eine "vernünftige" Repräsentation des gemeinsamen Willens erreichen kann.

## Quadratische Stimmabgabe (QV)

> "Die quadratische Stimmabgabe geht auf den Statistiker Lionel Penrose zurück, den Vater des bekannten Astrophysikers Roger Penrose. Penrose erkannte ein grundlegendes Problem: Es erscheint intuitiv richtig, einer Partei mit doppelt so hohem Interesse an einer Entscheidung auch doppelt so viele Stimmen zu geben. Doch dies ist irreführend." ([[Pluralität-Buch]] S. 359)

### Penrose-Regel (degressive Proportionalität)

> "Das Stimmgewicht eines Interessenvertreters sollte mit der Quadratwurzel seines Anteils wachsen, damit er nur verhältnismäßig mehr Einfluss erhält. Dieses Prinzip wird oft als ‚degressive Proportionalität' bezeichnet."

Mathematische Grundlage:
- 10.000 unkorrelierte Stimmen haben nur so viel Gewicht wie 100 korrelierte Stimmen
- Unkorrelierte Signale wachsen proportional zur Quadratwurzel ihrer Anzahl
- Korrelierte Signale wachsen linear

### Zwei Anwendungsformen

1. **Gewichtete Abstimmung zwischen Gruppen** — die "Quadratwurzel-Abstimmungsregel" von Penrose. Sie wird in der Europäischen Union bei Abstimmungen der Mitgliedsstaaten verwendet.

2. **Präferenzstärke bei individuellen Abstimmungen** — die **QV-Regel**: Wer seine Präferenz verdoppeln will, muss nicht doppelt, sondern viermal so viel "bezahlen" — die Kosten steigen quadratisch. Dies wird beispielsweise in der Legislative des Bundesstaates Colorado häufig zur Priorisierung von Ausgaben verwendet.

## Liquid Democracy (LD)

> "Ein weiterer interessanter Ansatz, der in den letzten Jahren an Bedeutung gewonnen hat, ist die ‚Liquid Democracy' (LD). Diese Idee geht auf die bahnbrechenden Arbeiten von Charles Dodgson zurück (alias Lewis Carroll, Autor des Kinderbuchklassikers ‚Alice im Wunderland')." (S. 361)

LD erweitert die Idee der proportionalen Repräsentation, indem sie jeder Wählerin und jedem Wähler erlaubt, seine Stimme(n) an andere zu delegieren, die diese dann weiterdelegieren können.

Praxisbeispiele:
- Unternehmen und DAOs
- Politik in Island
- "Divokratie" — Erweiterung von Ken Suzuki

## Baustellen der ⿻ Wahlverfahren

Das Buch nennt mehrere Erweiterungen, die das QV/LD-Konzept weiterentwickeln:

- **Korrelationsbereinigung und Eigenvoting**: Statistische Identifikation der "echten" unabhängigen Faktoren ("Eigenwerte"), auf die degressive Proportionalität anzuwenden ist.
- **PageRank-ähnliche Verfahren**: Echte Unabhängigkeit von Stimmen anhand sozialer Verbindungen bewerten.
- **Quadratische Finanzierung** = Anwendung des QV-Prinzips auf Crowdfunding (siehe [[Soziale Märkte]]).

## Übersetzungs-Beobachtungen

Die deutsche Ausgabe trifft hier eine ungewöhnliche Mischentscheidung:

| Englisch | Deutsch (de-Ausgabe) | Bemerkung |
|---|---|---|
| Quadratic Voting | **quadratische Stimmabgabe** / **quadratisches Wählen** | übersetzt |
| QV (Abkürzung) | **QV** | unverändert beibehalten |
| Liquid Democracy | **Liquid Democracy / LD** | als Anglizismus beibehalten |
| Penrose's law | **Quadratwurzel-Abstimmungsregel** / **Penrose-Regel** | übersetzt |
| Quadratic Funding | **Quadratic Funding** (anglizistisch) / **plurale Finanzierung** | gemischt |

→ Bemerkenswert: "Quadratic Voting" wird ins Deutsche übersetzt, "Quadratic Funding" jedoch behält die englische Form. Die Korrespondenz `de:quadratische Stimmabgabe` ↔ `zh-tw:平方投票` zeigt: Beide Sprachen wählen den mathematisch-präzisen Pfad ("quadratisch"/"平方"), aber zh-tw eindeutig, während die deutsche Ausgabe schwankt.

## Korrespondenz zu anderen Sprachen

| Sprache | Hauptbegriff für Quadratic Voting |
|---|---|
| en | Quadratic Voting |
| ja | クアドラティック投票 (Katakana-Lehnwort) |
| zh-tw | 平方投票 (Hanzi-Übersetzung) |
| **de** | **quadratische Stimmabgabe** / **quadratisches Wählen** |

→ De geht den mathematisch-präzisen Pfad wie zh-tw (übersetzt das mathematische Konzept), nicht den Lehnwort-Pfad wie ja.

## Updates

### 2026-05-28 (Initial)

Aus [[Pluralität-Buch]] 5-6 (S. 353–366) extrahiert.

## Open Questions

- Bei der ersten Erwähnung in S. 354 wird der Begriff "quadratisches Abstimmungsverfahren" verwendet, ab S. 357 dann "quadratische Stimmabgabe (QV)". Gibt es eine systematische Differenzierung oder ist es Übersetzervariation?
- Wird "Liquid Democracy" auch im deutschsprachigen politischen Diskurs (Piratenpartei!) als Anglizismus geführt? Falls ja, ist die Übernahme der englischen Form pragmatisch begründet.
- Das Civilization-VI-Beispiel (Spielmechanik als QV) ist sehr eindringlich. Existiert ein deutsches Computerspiel/Spiel-Beispiel, das im deutschen Diskurs anstelle dessen genutzt werden könnte?
