---
type: molecular
tags:
  - survey-design
  - community-ecology
  - flashcards/eco/why
description: "Three different questions you can ask of the same bird list: is a species here (occupancy), how many of it are here (abundance), and how many kinds are here (richness), each with its own model."
aliases:
  - "Occupancy vs Abundance vs Richness"
  - "state variables"
  - "occupancy abundance richness"
status: seedling
---

# Occupancy vs Abundance vs Richness

> [!summary] In plain words
> One field sheet can answer three questions: is a Dickcissel here (occupancy, yes or no), how many Dickcissels (abundance, a count of individuals) and how many kinds of bird (richness, a count of species). Each is a different "state variable", needs its own model and is hit by missed detections in its own way. The project models richness, considered abundance and keeps occupancy for the Final Draft.

## The question
Why does it matter which of the three a study models, and why did the project choose richness?

## Built from
- [[Occupancy]]: whether a species is present at a site
- [[Abundance]]: how many individuals of one species are present
- [[Species Richness]]: how many species are present
- [[Imperfect Detection]]: why each observed value can fall short of the truth
- [[Point Count Survey]]: where the bird list comes from

## See it
| Visit | Birds recorded | DICK occupancy | DICK abundance | Richness |
|---|---|---|---|---|
| 1 | 3 DICK, 1 NOBO, 2 EAME | 1 | 3 | 3 |
| 2 | 1 NOBO, 4 RWBL | 0 | 0 | 2 |

*What to look at:* the same sheets give three different numbers, and richness ignores the "4" in RWBL, because one species is one species.

## The reasoning, step by step
1. **Each is a different state variable,** a number describing the true state of nature at a spot. *Why it matters:* each answers a different question.
2. **So each needs a different model.** Occupancy uses an [[Occupancy Model]] on 1/0 detections; abundance uses a Poisson or [[Negative Binomial Distribution]] GLM(M) on counts of individuals; richness uses a Poisson GLM(M) on the number of species.
3. **Missed detections hit them differently.** A missed individual lowers abundance; a species missed entirely lowers both occupancy and richness.
4. **So the state variable is chosen before the model.** Hobbs and Hooten stress that a clear question guides which variables and parameters a model needs ([[Hobbs and Hooten 2015 Ch1]], p. 11).

## So in practice
Richness is the current response: unique species per point-visit after trimming codes and keeping ground detections. On the 376 model points the site averages are BK 4.73, HO 5.56, DC 6.54, HB 6.64 and CR 7.58, with variance/mean ratios of 0.56 to 0.93, so a [[Poisson Distribution]] is a reasonable start ([[Preliminary Results]], [[Why richness instead of single-species counts]]). Abundance was considered: the [[Distance Bands]] hold individual counts, and a backup idea was Wind effects on [[Dickcissel]] counts, but those are strongly overdispersed (variance/mean about 12) and it is a survey-methods question, not a habitat one ([[Alternatives Considered]]). Occupancy is a Final Draft option after the Nov 3-5 lecture, using detection histories for focal species such as Dickcissel or [[Northern Bobwhite]]; [[Berry et al. 2026]] modelled community occupancy for six declining species. Each step toward realism needs more modelling of detection.

## What would go wrong otherwise
- You would read richness as total birds, when it counts kinds, not individuals.
- You would treat occupancy as a count, when it is yes/no (a proportion only when averaged over many points).
- You would fit one model to all three, or read a richness difference as news about one focal species.

## Connections
- **Related:** [[Occupancy]], [[Abundance]], [[Species Richness]], [[Occupancy Model]], [[Count Data]], [[Detection Probability]], [[Why observed richness is not true richness]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch1]], [[Berry et al. 2026]]

## Flashcards

From one point-visit's rows, how would you compute (a) richness and (b) Dickcissel abundance?
??
(a) Count the distinct (trimmed) species codes with a ground detection. (b) Add Dist_50 + Dist_100 + Dist_400 for the DICK row (0 if there is no DICK row).
++++

Why did the project not model Dickcissel abundance?::Its counts are strongly overdispersed (variance/mean about 12), and the Wind question it would answer is about survey methods, not habitat.
