---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Program MARK is free software that fits a very wide range of mark-recapture, survival, occupancy and abundance models by maximum likelihood, with built-in AIC model selection."
aliases:
  - "MARK"
  - "RMark"
  - "Program MARK (software)"
  - "Mark software"
status: seedling
---

# Program MARK

**Program MARK** is free software that fits a very wide range of mark-recapture, survival, occupancy and abundance models by [[Maximum Likelihood Estimation]], with built-in [[AIC]] model selection. It was written by Gary White, and Cooch and White's "gentle introduction" book is its manual. Its input is [[Capture History|capture histories]] with counts and optional group and individual covariates.

Its models include closed captures, CJS, known fate, recoveries, multi-state, robust design, occupancy, nest survival and more ([[Capture Heterogeneity Models]], [[Cormack-Jolly-Seber Model]], [[Known-fate Models]], [[Dead Recovery Models]], [[Multi-state Models]], [[Robust Design]]). Models are specified with a [[Parameter Index Matrix]] and a [[Design Matrix in Program MARK]], and it reports AICc tables, model averaging and ĉ adjustment ([[Goodness of Fit and c-hat]], [[Model Averaging]]). RMark drives MARK from R with formulas such as `list(Phi = list(formula = ~ time), p = list(formula = ~ 1))`. The code below, not run because RMark and MARK are not installed here, fits a CJS model to the classic dipper data with survival by sex and detection by time.

It is used throughout [[Powell and Gale 2015]] (Ch2, Ch4, Ch8 to Ch15) and its model selection follows [[Johnson and Omland 2004]]. MARK is not only for mark-recapture; it also fits occupancy, nest survival and known-fate models.

```r
# norun (RMark and Program MARK are not installed here)
library(RMark); data(dipper)
m <- mark(dipper, model = "CJS", model.parameters = list(Phi = list(formula = ~ sex), p = list(formula = ~ time)))
```

## Connections
- **Builds on:** [[Maximum Likelihood Estimation]], [[AIC]]
- **Leads to:** [[Parameter Index Matrix]], [[Design Matrix in Program MARK]], [[Goodness of Fit and c-hat]], [[unmarked Package]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is Program MARK?
??
Free software that fits many mark-recapture, survival and occupancy models by maximum likelihood with AIC tables.
++++

What R package drives Program MARK?
??
RMark.
++++
