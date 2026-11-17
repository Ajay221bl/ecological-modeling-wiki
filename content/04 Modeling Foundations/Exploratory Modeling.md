---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Exploratory modeling searches data for patterns in order to come up with hypotheses. Its results are ideas to test later, not findings."
aliases:
  - "Exploration"
  - "Exploration (goal)"
  - "Hypothesis generation"
status: seedling
---

# Exploratory Modeling

Wandering a new city without a plan, you notice the old market district seems to have the best food. It is a real, useful idea, but not a tested fact: you ate there once, on a good day, and to *know* you would need a fair comparison later. **Exploratory modeling** is that kind of wandering through data: searching widely for patterns, with correlation screens, many models and plots, in order to come up with hypotheses. Its results are leads, not findings. Tredennick and colleagues name exploration as the first of three goals of modeling, beside inference and prediction, and warn that its main pitfall is presenting chance patterns as discoveries ([[Tredennick et al. 2021]]).

The arithmetic of chance shows why. A test at the usual *significance level* of 5% calls a pure-noise variable "significant" 5% of the time; that is a *false positive*. Screen 100 weather variables that are pure noise against a growth rate and, on average, 5 will look significant. Report them as discoveries and essentially all 5 are false; report them as "hypotheses worth testing" and you have done nothing wrong. Searching many variables and reporting the hits as findings has a name, [[Data Dredging]], and many small chances of a false positive add up to near-certainty that some will appear.

So exploration is not bad science; it is essential, because data are a rich source of new ideas. The rule is about labelling. The same data cannot both suggest an idea and confirm it, because whatever chance quirk produced the pattern is still in those data. An exploratory pattern becomes a finding only after it is tested on new data with a hypothesis stated in advance, which is [[Inferential Modeling]]. A low p-value from a screen is a lead, not evidence ([[Hypothesis]], [[Statistical Model]]).

![[Exploration inference prediction.png|700]]
*What to look at:* exploration feeds hypotheses into inference; crossing that line needs new data.

```r
set.seed(8)
y <- rnorm(50)                              # a response with no real predictors
X <- matrix(rnorm(50 * 100), 50, 100)       # 100 noise predictors
p <- apply(X, 2, function(x) cor.test(x, y)$p.value)
sum(p < 0.05)                               # a handful of "significant" noise predictors
```

## Connections
- **Builds on:** [[Hypothesis]], [[Statistical Model]]
- **Leads to:** [[Inferential Modeling]], [[Data Dredging]], [[Predictive Modeling]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Exploration, Inference and Prediction]]
- **Go deeper:** [[Tredennick et al. 2021]]

## Flashcards

What is the goal of exploratory modeling?
??
To find patterns and generate hypotheses, not to confirm them.
![[Exploration inference prediction.png]]
++++

Why are exploratory results only hypotheses?
??
A wide search always catches some chance patterns, and the same data can't both suggest and confirm an idea.
++++
