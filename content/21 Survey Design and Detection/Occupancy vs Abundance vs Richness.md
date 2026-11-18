---
type: atomic
tags:
  - survey-design
  - community-ecology
  - flashcards
aliases:
  - "state variables"
  - "occupancy abundance richness"
status: seedling
---

# Occupancy vs Abundance vs Richness
**In one line:** Three different questions you can ask of the same bird list: is a species here (occupancy), how many of it are here (abundance), and how many kinds are here (richness).

> [!info] Before this, it helps to know
> [[Point Count Survey]] (where the list comes from) · [[Variable and Observation]] (each question makes a different variable)

## Start from zero
You stand in a field for a few minutes and write down what you see and hear: 3 Dickcissels, 1 bobwhite, 2 meadowlarks. From that one sheet you can ask three different things:
- **Is a Dickcissel here?** Yes. That is **occupancy** (a yes/no per species).
- **How many Dickcissels?** 3. That is **abundance** (a count of individuals of one species).
- **How many kinds of bird?** 3 species. That is **richness**.

Ecologists call each of these a "state variable": a number describing the true state of nature at that spot.

## Why it exists
Each summary answers a different question and needs a different model.

| State variable | Question | Data per visit | Typical model |
|---|---|---|---|
| **Occupancy** | Is species X here? | 1/0 per species | [[Occupancy Model]] |
| **Abundance** | How many of X? | count of individuals | Poisson or [[Negative Binomial Distribution]] GLM(M) |
| **Richness** | How many species? | number of species | Poisson GLM(M) on [[Species Richness]] |

All three are hit by [[Imperfect Detection]], in different ways. A missed individual lowers abundance. A species missed entirely lowers both occupancy and richness. Choosing the state variable is a scientific choice made **before** choosing a model; Hobbs and Hooten stress that a clear question guides which variables and parameters a model needs ([[Hobbs and Hooten 2015 Ch1]], p. 11).

Mixing them up causes trouble: for example, reading a richness difference as news about one focal species, or analysing very clumpy single-species counts with a model suited to richness.

## A tiny example
Two visits:

| Visit | Birds recorded | DICK occupancy | DICK abundance | Richness |
|---|---|---|---|---|
| 1 | 3 DICK, 1 NOBO, 2 EAME | 1 | 3 | 3 |
| 2 | 1 NOBO, 4 RWBL | 0 | 0 | 2 |

The same sheets give three different numbers. Notice richness ignores the "4" in RWBL: one species is one species.

## In my project
- **Richness (current):** number of unique species per point-visit after trimming codes and keeping only ground detections. On the 376 model points, the average per site is BK 4.73, HO 5.56, DC 6.54, HB 6.64, CR 7.58, with variance/mean ratios of 0.56 to 0.93 (the spread is about the size of the average or a bit less), so a [[Poisson Distribution]] is a reasonable start ([[Preliminary Results]]). Reasons: [[Why richness instead of single-species counts]].
- **Abundance (considered):** the [[Distance Bands]] hold individual counts. A backup idea was Wind effects on [[Dickcissel]] counts, but those counts are strongly overdispersed (variance/mean about 12) and it is a survey-methods question, not a habitat one ([[Alternatives Considered]]).
- **Occupancy (Final Draft option, after the Nov 3-5 lecture):** detection histories for focal species such as Dickcissel or [[Northern Bobwhite]]; Berry et al. modelled community occupancy for six declining species ([[Berry et al. 2026]]).

Each step toward realism (richness to occupancy) needs more modelling of detection.

## Common confusions
- **"Richness is total birds."** No: it counts kinds, not individuals.
- **"Occupancy is a count."** It is yes/no; averaged over many points it becomes a proportion.
- **"One model fits all three."** Each has its own natural model.

## Connections
- **Builds on:** [[Species Richness]], [[Count Data]], [[Detection Probability]]
- **Leads to:** [[Occupancy Model]], [[Why richness instead of single-species counts]], [[Why observed richness is not true richness]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch1]], [[Berry et al. 2026]]

> [!question]- Check yourself
> From one point-visit's rows, how would you compute (a) richness and (b) Dickcissel abundance?
> ?
> (a) Count the distinct (trimmed) species codes with a ground detection. (b) Add Dist_50 + Dist_100 + Dist_400 for the DICK row (0 if there is no DICK row).
