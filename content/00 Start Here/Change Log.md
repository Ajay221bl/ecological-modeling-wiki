---
type: home
tags:
  - start-here
  - change-log
aliases:
  - "Changelog"
  - "Version History"
status: growing
---

# Change Log

Every round of changes and checks on this wiki, newest first. Each round ("pass") gets one entry: what changed, which checks ran, and what they found.

**The checks run on every pass** (by `build.py`, kept outside the vault):
- **Links:** every wiki link points to a real note or figure. Links to planned notes that aren't written yet are counted separately and must reach zero by the final pass.
- **Cards:** every atomic and molecular note has a Flashcards section with a deck tag, every `??` card is closed with `++++`, and no card markers appear outside Flashcards.
- **Style:** no em dashes, and every atomic or molecular note links to at least three others.
- **Structure:** the MOCs, [[Index]] and [[Learning Path]] are regenerated from the plan, so every note sits in a map.

---

## v0.5 (2026-11-16): one concept per note, strictly
**Asked for:** "one concept per note is a strict thing. Keep the comparisons as molecular notes."

**Changed**
- New rule in the style guide (kept outside the vault): an atomic note holds exactly one concept. If its title needs "and", "vs" or a comma, it is two notes. Comparisons become molecular notes that name both sides and link the atomics. [[How This Wiki Works]] says so too.
- 13 two-or-three-concept notes split into 39 new single-concept atomic notes, each written in the full Feynman layout with its own analogy, worked numbers, R code and cards:
  - Basics from Zero (19): [[Variable]], [[Observation]], [[Population]], [[Sample]], [[Parameter]], [[Estimate]], [[Estimator]], [[Continuous Data]], [[Discrete Data]], [[Categorical Variable]], [[Binary Variable]], [[Exponent]], [[Logarithm]], [[Natural Logarithm]], [[Exponential Function]], [[Factorial]], [[Binomial Coefficient]], [[Product Notation]] (taken out of [[Summation Notation]]) and [[Covariance]] (the step [[Correlation]] was hiding).
  - Modeling Foundations (20): [[Theoretical Model]], [[Empirical Model]], [[Exploratory Modeling]], [[Inferential Modeling]], [[Predictive Modeling]], [[Induction]], [[Deduction]], [[Biological Population]], [[Statistical Population]], [[Deterministic Component]], [[Stochastic Component]], [[Process Variation]], [[Observation Error]], [[Sampling Variation]], [[Bias]], [[Precision]], [[Accuracy]], [[Overfitting]], [[Underfitting]] and [[Bias-Variance Trade-off]] (the last three taken out of [[Parsimony]], which keeps only the principle).
- The 13 old notes kept their titles, so every existing link still works, but are now comparison molecular notes in 02 Molecular Notes: [[Variable and Observation]], [[Population and Sample]], [[Parameter vs Estimate]], [[Continuous vs Discrete Data]], [[Logarithms and Exponents]], [[Factorials and Binomial Coefficient]], [[Theoretical vs Empirical Modeling]], [[Exploration, Inference and Prediction]], [[Induction vs Deduction]], [[Biological vs Statistical Population]], [[Bias and Precision]], [[Deterministic and Stochastic Components]] and [[Process vs Observation Error]]. Each puts its atomics side by side with one shared analogy and one worked example, and is listed in [[MOC - Why We Do It This Way]].
- [[MOC - Basics from Zero]], [[MOC - Modeling Foundations]], [[Index]] and [[Learning Path]] regenerated with the new atomics in reading order. Aliases that pointed two names at one note were removed, so no alias is shared by two notes.
- The term inventory (kept outside the vault) now marks 7 more terms as written, including Estimator, Covariance, Product Notation, Overfitting, Underfitting and the bias-variance trade-off.

**Checks**
- R: all 61 R code blocks run without errors (R 4.3). New numbers checked in R, for example the estimator simulation (alive/n averages 0.798, alive/(n+1) 0.726), new-data error by curve degree (1.17 for a line rising to 6.23 for degree 10), MSE of 0.016 vs 0.011 in [[Accuracy]], and the 27% to 55% interval in [[Induction]].
- Cards: 168, all closed, deck tags on every note, none outside Flashcards sections. Em dashes: 0.
- Links: no links outside the plan (two to unplanned notes, Response Variable and Explanatory Variable, were replaced with plain definitions). Links to notes not yet written: 426, up from 343 because the new notes link more of the planned notes.

**Not yet done:** the vault on the Mac still holds the v0.2 copy. Nothing from v0.3 to v0.5 has been copied there.

**Totals:** 105 notes (61 atomic, 15 molecular, 6 source), 168 cards, 19 figures.

## v0.4 (2026-11-16): every existing note rewritten Feynman-style
**Asked for:** explain every concept the way Richard Feynman teaches, for a reader who knows nothing about ecological modeling, statistics or advanced maths. Rewrite the 35 existing atomic notes and update the molecular notes to match.

**Changed**
- New teaching rules in the style guide (kept outside the vault): everyday picture first, plain words with every term defined, real numbers before formulas, always the why, named confusions, and an explain-it-back test. Split any idea that can't be explained simply.
- New atomic note layout: *The everyday picture* and *Words you'll need* added; *A tiny example* now comes before *Start from zero* so the formula reads as a summary of something already worked by hand; *Why it exists* became *Why it is this way*; *Explain it back* added before Connections. [[How This Wiki Works]] describes the new layout.
- All 15 notes in Basics from Zero and all 20 in Modeling Foundations rewritten in that layout. Each gained an analogy (a fishing trip for [[Mean]], bus routes for [[Variance]], a soup pot for [[Population and Sample]], darts for [[Bias and Precision]], two exam students for [[Parsimony]], and so on), a glossary, a worked example and an explain-it-back test. Frontmatter, figures, R code, citations and wikilinks were kept; several R blocks gained a line or two that shows the idea directly (for example, simulating 5000 repeat studies in [[Standard Error]]).
- Both molecular notes, [[Why model at all]] and [[Why every statistical model has a deterministic and a stochastic part]], gained an everyday picture, a worked example in numbers and an explain-it-back test.
- 6 new flashcards (one per note where the analogy carried a new "why").

**Checks**
- R: all 35 R code blocks run without errors (R 4.3 in the container). Every new numeric claim was checked in R, including the Parsimony figures (R² 0.57 vs 0.98, new-data error 1.17 vs 6.23, AICc 48.6 vs 171.1) and the confidence interval of 27% to 55% in [[Induction vs Deduction]].
- Cards: 103, all closed, deck tags on every note, none outside Flashcards sections. Em dashes: 0.
- Links: no links outside the plan. Links to notes not yet written: 343 (up from 311, because the new glossaries link terms such as [[Probability Distribution]] and [[Collinearity]] to their planned notes).

**Not yet done:** the vault on the Mac still holds the v0.2 copy. Nothing from v0.3 or v0.4 has been copied there.

**Totals:** 66 notes (35 atomic, 2 molecular, 6 source), 103 cards, 19 figures.

## v0.3 (2026-11-16): course website added as a source
**Asked for:** use the course website (https://livinglandscapes.github.io/Course_EcologicalModeling/) as an extra raw source.

**Changed**
- New source note [[Course Website]]: how the site is organised, the lab-by-lab ideas each unit will use, the in-scope datasets, and three readings the site lists that aren't in my folder (Vehtari et al. 2017, Guélat and Kéry 2018, Oberpriller et al. 2022).
- The plan (topic map, kept outside the vault) gained a "Website additions" block for Units 1 to 13 and a lab, script and dataset index. About 50 new atomic notes are planned from the labs, such as complete vs no vs partial pooling, complete separation, truncated distributions, spline correlograms, ACF plots, elpd and `loo_compare()`, `bootMer()`, R Markdown, Git and the `librarian` package rule. Two new molecular notes are planned too.
- [[MOC - Course Readings]], [[Index]] and [[Learning Path]] regenerated so the new source is listed. No existing atomic or molecular note was edited.

**Checks**
- Links: no links outside the plan. Links to notes not yet written: 311.
- Cards: 97 in atomic and molecular notes, plus 3 in the new source note. Em dashes: 0.

**Totals:** 66 notes (35 atomic, 2 molecular, 6 source).

## v0.2 (2026-10-22): first batch, Basics from Zero and Modeling Foundations
**Asked for:** the first unit of notes, to review before the rest are written.

**Changed**
- 15 atomic notes in Basics from Zero, from [[Variable and Observation]] to [[Correlation]], including [[Factorials and Binomial Coefficient]] (added to the plan because Powell and Gale build their estimators on it).
- 20 atomic notes in Modeling Foundations for the Aug 18 session, from [[Model]] to [[Process vs Observation Error]]. Four were added to the plan while reading: [[Real World and Model World]], [[Modeling Process]], [[Sampling Unit]] and [[Bias and Precision]].
- 2 molecular notes: [[Why model at all]] and [[Why every statistical model has a deterministic and a stochastic part]].
- 5 source notes: [[Powell and Gale 2015 Ch1]], [[Powell and Gale 2015 Ch2]], [[Tredennick et al. 2021]] (from the web, flagged), [[Hobbs and Hooten 2015 Ch1]] and [[Hobbs and Hooten 2015 Ch2]].
- 19 figures (all simulated or redrawn from the readings) and 16 Mermaid flowcharts.
- MOCs, [[Index]] and [[Learning Path]] regenerated.

**Checks**
- R: all 35 R code blocks run without errors in R 4.3. One claim was wrong: in [[Parsimony]], plain AIC actually *prefers* the overfitted polynomial with only 15 points. The example now shows this and uses AICc and new-data error, which both pick the simple model.
- Cards: 97, all closed, deck tags on every note, none outside Flashcards sections. Em dashes: 0.
- Links: 270 links point to notes planned for later units. Links to anything outside the plan: 0.

**Totals:** 65 notes (35 atomic, 2 molecular, 5 source), 97 cards, 19 figures.

## v0.1 (2026-10-22): skeleton
**Asked for:** a first-principles wiki of the Ecological Modeling syllabus through Thu Oct 22 (Mixed models lab: Bayesian), in the format of my AGST vault, kept separate from the older notes in EcoModeling-Vault.

**Changed**
- New folder `Ecological Modeling Wiki/` inside EcoModeling-Vault. The 268 older notes are untouched.
- Templates copied from the AGST vault. Atomic notes gain an *In R* section, and *In class* becomes *In the course*.
- Home notes: [[Start Here]], [[How This Wiki Works]], [[Open Questions]], this log, and generated [[Index]] and [[Learning Path]].
- Thirteen MOCs generated from the plan, listing about 190 planned atomic notes, 17 molecular notes and 25 source notes.
- Course notes: [[Course Overview]], [[Course Schedule]], [[Homework]] and [[Final Project]], all from the syllabus PDF.
