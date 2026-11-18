---
type: atomic
tags:
  - survey-design
  - detection
  - flashcards/eco/survey
description: "Observer effects are differences in what different people record at the same kind of survey, because their hearing, experience and attention differ."
aliases:
  - "observer effect"
  - "observer bias"
  - "Obs"
status: seedling
---

# Observer Effects

You and a friend, an expert birder with sharp ears, stand side by side counting birds for a few minutes. She writes 9 species; you write 6. Same field, same minutes, same birds. The person is part of the measuring tool, like a scale that reads a bit heavy or light, and that difference is an **observer effect**. It works through the [[Detection Probability]], the chance of noticing a bird that is there: a sharper observer has a higher one. In a [[Point Count Survey]] it is one of the biggest sources of difference between counts.

When does it matter? If observers are spread evenly across the places you compare, their differences mostly add random noise: annoying, but fair. If they are not spread evenly, observer differences can pose as real ecological differences. Take two sites with truly identical birds, and suppose the expert finds on average 2 more species than the beginner. If the expert surveyed only Site A (average 8 species) and the beginner only Site B (6), the 2-species gap comes entirely from the observer. If each had done half the visits at both sites, the gap would mostly vanish and you could even estimate the observer difference. The tangled case is [[Confounding]]: two possible causes move together, so the data cannot say which did it ([[Correlation vs Causation]]). The readings show the issue across fields: Zuur et al. list observer and measurement errors as a valid reason to drop extreme values and suggest plotting data by observer to look for differences ([[Zuur et al. 2010]], pp. 5-6); Lawton et al. simplified locust density records to outbreak or non-outbreak partly because observers categorized differently ([[Lawton et al. 2022]], p. 4); and Batpurev et al. modelled 92 people's judgments with a [[Random Effect]] for each person, because individuals differ consistently ([[Batpurev et al. 2021]], p. 8).

Three confusions: observer differences are not just noise unless observers are balanced across groups; a team code is a mix of people, not a new person; and "EAL" and "EAL " are the same observer with a stray space. In the grassland bird data the `Obs` column has 11 raw codes but 10 real ones, because "EAL" (680 rows) and "EAL " (479) merge once the script trims spaces with [[str_trim()]]; some codes are teams ("KAS, CPR", "LLB, KAS, ARB, CPR"). Observers are not spread evenly: LLB surveyed all five properties, but KAS and ARB appear only at the 2022 sites and EAL only at CR and HB in 2023, so observer is partly tangled with site and year ([[Why site and year cannot be separated]]). On the other hand 167 of 416 points had more than one observer code across visits, so observer and point are partly crossed ([[Nested vs Crossed Random Effects]]). One option is `(1|Obs)` as a second random effect for the [[Grouping Variable]] Obs, but with about 10 levels, several of them small team codes, its variance may be poorly estimated ([[Convergence Warnings]]). The Project Report took the other option: no observer term, and a Limitations paragraph saying a property effect may partly reflect year, season or observer, so property [[Interpreting Poisson Coefficients|rate ratios]] such as CR's 1.40 times BK's all-species [[Species Richness|richness]] are not pure habitat differences ([[Preliminary Results]]). Observer is the third kind of [[Detection Covariates|detection covariate]] after weather; observer effects as the main research question was rejected as a weak story ([[Alternatives Considered]]).

## Connections
- **Builds on:** [[Detection Probability]], [[Point Count Survey]], [[Confounding]], [[Correlation vs Causation]], [[Interpreting Poisson Coefficients]], [[Species Richness]]
- **Leads to:** [[Random Effect]], [[str_trim()]], [[Nested vs Crossed Random Effects]], [[Grouping Variable]], [[Convergence Warnings]], [[Detection Covariates]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Why site and year cannot be separated]], [[Preliminary Results]], [[Alternatives Considered]], [[Zuur et al. 2010]], [[Lawton et al. 2022]], [[Batpurev et al. 2021]]

## Flashcards

Why is the uneven spread of observers across properties a bigger problem than observer noise in general?
??
Random observer noise just adds spread. But when certain observers surveyed only certain properties (KAS only at 2022 sites, EAL only at 2023 sites), any observer difference shifts those properties' counts and gets mixed up with the site effect.
++++

When do observer differences only add noise rather than bias?::When observers are spread evenly across the groups being compared.
