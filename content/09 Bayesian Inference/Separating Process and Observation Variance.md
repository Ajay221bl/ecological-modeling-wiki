---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Separating process and observation variance means estimating how much of the scatter in data reflects real variation in nature and how much reflects imperfect measurement."
aliases:
  - "Process vs observation variance"
  - "Partitioning variance into process and observation"
  - "Process and observation uncertainty"
status: seedling
---

# Separating Process and Observation Variance

Listening to a choir through a crackling radio, some of the wavering is the singers and some is the radio; to tell them apart you need to know something about the radio, or to listen through two radios at once. **Separating process and observation variance** means estimating how much of the scatter in data reflects real variation in nature ([[Process Variation]]) and how much imperfect measurement ([[Observation Error]]). Total scatter is the sum of the two, and with one measurement per unit only the sum is identified ([[Identifiability]]).

What allows a split is repeated measurements of the same unit at the same time, whose differences reflect only observation error; calibration data on the instrument; a known observation process such as binomial detection; or a strong prior on one of them. In a [[Hierarchical Model]] the two variances sit in different layers, the [[Process Model]] and the [[Data Model]] ([[Variance Components|Variance Component]]). In the code below 200 units with process sd 4 are each measured twice with observation sd 3. The total sd is 4.9; the difference between the two measurements estimates an observation sd of 2.8, and what remains gives a process sd of 3.9.

It matters because forecasts depend on process variance only. Lumping observation error in makes nature look more erratic than it is, and treating everything as observation error makes it look too predictable ([[Hobbs and Hooten 2015 Ch6]]). A big sample does not separate them; more units don't help, but replication within units does.

```r
set.seed(12); true <- rnorm(200, 50, 4)                                  # process sd 4
y1 <- true + rnorm(200, 0, 3); y2 <- true + rnorm(200, 0, 3)             # two measurements of each unit, observation sd 3
c(total_sd = sd(y1), obs_sd = sd(y1 - y2) / sqrt(2), process_sd = sqrt(var((y1 + y2) / 2) - var(y1 - y2) / 4))
```

## Connections
- **Builds on:** [[Process Variation]], [[Observation Error]], [[Hierarchical Model]]
- **Leads to:** [[Identifiability]], [[Data Model]], [[Process Model]], [[Variance Components|Variance Component]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What data allow process and observation variance to be separated?
??
Replicate observations of the same true state, calibration information, or a known observation process.
++++
