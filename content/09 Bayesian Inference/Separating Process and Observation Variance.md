---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Process vs observation variance"
  - "Partitioning variance into process and observation"
  - "Process and observation uncertainty"
status: seedling
---

# Separating Process and Observation Variance

**In one line:** separating process and observation variance means estimating how much of the scatter in data reflects real variation in nature and how much reflects imperfect measurement.

> [!info] Before this, it helps to know
> [[Process Variation]] (real scatter) · [[Observation Error]] (measurement scatter) · [[Hierarchical Model]] (the tool) · [[Identifiability]] (the obstacle)

## The everyday picture
A choir heard through a crackling radio. Some of the wavering you hear is the singers. Some is the radio. To tell them apart you need to know something about the radio, or to listen through two radios at once.

## Start from zero
1. **Total scatter = process variance + observation variance.**
2. **One measurement per unit can't split them.** Only the sum is identified.
3. **What allows a split:** repeated measurements of the same unit at the same time (replicates differ only by observation error). Calibration data on the instrument. A known observation process, such as binomial detection. A strong prior on one of them.
4. **Why split:** forecasts depend on process variance only. Lumping observation error in makes nature look more erratic than it is. Treating everything as observation error makes it look too predictable.
5. **In a hierarchical model** the two variances sit in different layers: process model and data model.

## In R
```r
set.seed(12); true <- rnorm(200, 50, 4)                                  # process sd 4
y1 <- true + rnorm(200, 0, 3); y2 <- true + rnorm(200, 0, 3)             # two measurements of each unit, observation sd 3
c(total_sd = sd(y1), obs_sd = sd(y1 - y2) / sqrt(2), process_sd = sqrt(var((y1 + y2) / 2) - var(y1 - y2) / 4))
```

## In the course
[[Hobbs and Hooten 2015 Ch6]].

## Common confusions
- **"A big sample separates them."** More units don't help. Replication within units does.

## Explain it back
- What kind of data lets you estimate observation variance?

*Pass test:* you can say what design separates the two variances.

## Connections
- **Builds on:** [[Process Variation]], [[Observation Error]], [[Hierarchical Model]]
- **Leads to:** [[Identifiability]], [[Data Model]], [[Process Model]], [[Variance Components|Variance Component]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What data allow process and observation variance to be separated?
??
Replicate observations of the same true state, calibration information, or a known observation process.
++++
