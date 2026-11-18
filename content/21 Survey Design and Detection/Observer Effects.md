---
type: atomic
tags:
  - survey-design
  - detection
  - flashcards
aliases:
  - "observer effect"
  - "observer bias"
  - "Obs"
status: seedling
---

# Observer Effects
**In one line:** Different people record different things at the same kind of survey, because their hearing, experience and attention differ.

> [!info] Before this, it helps to know
> [[Detection Probability]] (observers change it) · [[Correlation vs Causation]] (why a tangled observer can fake a site effect)

## Start from zero
You stand in a field for a few minutes and write down what you see and hear. Your friend, an expert birder with sharp ears, stands beside you. She writes 9 species; you write 6. Same field, same minutes, same birds.

The person is part of the measuring tool, like a scale that reads a bit heavy or light. That difference is an **observer effect**.

## Why it exists
If observers are spread evenly across the places you compare, their differences mostly add random noise. Annoying, but fair.

If they are **not** spread evenly, observer differences can pose as real ecological differences. Say the expert surveyed only Site A and the beginner only Site B. Site A will look richer even if it is not. This tangle is [[Confounding]]: two possible causes move together, so the data cannot say which one did it (see [[Correlation vs Causation]]).

The readings show the issue across fields. Zuur et al. list observer and measurement errors as a valid reason to drop extreme values, and suggest plotting data by subgroup such as observer to look for differences ([[Zuur et al. 2010]], pp. 5-6). Lawton et al. simplified locust density records to outbreak/non-outbreak partly because observers categorized and identified differently ([[Lawton et al. 2022]], p. 4). Batpurev et al. modelled 92 people's judgments with a random effect for each person, because individuals differ consistently ([[Batpurev et al. 2021]], p. 8).

## A tiny example
Two sites with truly identical birds; the expert finds on average 2 more species.

| Site | Observer | Average species recorded |
|---|---|---|
| A | Expert | 8 |
| B | Beginner | 6 |

Gap: 2 species, all from the observer. If both observers had each done half the visits at both sites, the gap would mostly vanish and you could even estimate the observer difference.

## In my project
The `Obs` column has **11 raw codes but 10 real ones**: "EAL" (680 rows) and "EAL " with a trailing space (479 rows) are the same person. The wrangling script now runs `str_trim()` on `Obs` as well as on species codes, so they merge into one (fixed Oct 13; [[str_trim()]]). Some codes are teams ("KAS, CPR", "LLB, ARB", "LLB, KAS, ARB, CPR", "KAS, LLB, ARB, CPR") or a combined code ("LBB/EAL").

Observers are **not** spread evenly across properties:
- LLB surveyed at all five properties.
- KAS and ARB appear only at BK, DC and HO (2022).
- EAL appears only at CR and HB (2023); CPR alone and "LBB/EAL" only at CR.

So observer is partly tangled with Site and year, adding to [[Why site and year cannot be separated]]. On the other hand, 167 of 416 points had more than one observer code across their visits, so observer and point are partly crossed ([[Nested vs Crossed Random Effects]]).

Options: add `(1|Obs)` as a second [[Random Effect]] (but with only about 10 levels, several of them small team codes, its variance may be poorly estimated; see [[Singular Fits and Convergence Warnings]]), or describe it as a limitation. The Project Report (Oct 13) took the second option: the models have no observer term, and the Limitations paragraph says a property effect may partly reflect year, season or observer differences. So the property rate ratios in [[Preliminary Results]] (for example CR about 1.40 times BK's all-species richness) cannot be read as pure habitat or management differences. Observer effects as the main research question was considered and rejected as a weak scientific story ([[Alternatives Considered]]).

## Common confusions
- **"Observer differences are just noise."** Only when observers are balanced across groups; otherwise they bias the comparison.
- **"A team code is a new person."** It is a mix of people; treat team codes with care.
- **"EAL and 'EAL ' are two observers."** Same person, stray space.

## Connections
- **Builds on:** [[Point Count Survey]], [[Detection Probability]], [[Grouping Variable]]
- **Leads to:** [[Detection Covariates]], [[Confounding]], [[Random Effect]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Zuur et al. 2010]], [[Lawton et al. 2022]], [[Batpurev et al. 2021]]

> [!question]- Check yourself
> Why is the uneven spread of observers across properties a bigger problem than observer noise in general?
> ?
> Random observer noise just adds spread. But when certain observers surveyed only certain properties (KAS only at 2022 sites, EAL only at 2023 sites), any observer difference shifts those properties' counts and gets mixed up with the Site effect I want to estimate.
