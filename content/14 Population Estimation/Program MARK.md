---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "MARK"
  - "RMark"
  - "Program MARK (software)"
  - "Mark software"
status: seedling
---

# Program MARK

**In one line:** Program MARK is free software that fits a very wide range of mark-recapture, survival, occupancy and abundance models by maximum likelihood, with built-in AIC model selection.

> [!info] Before this, it helps to know
> [[Maximum Likelihood Estimation]] · [[AIC]] · [[Capture History]]

## Start from zero
1. **Written by Gary White;** the "gentle introduction" book by Cooch and White is its manual.
2. **Input:** capture histories with counts and optional group and individual covariates.
3. **Models:** closed captures, CJS, known fate, recoveries, multi-state, robust design, occupancy, nest survival and more.
4. **Specifies models** with a [[Parameter Index Matrix]] and a [[Design Matrix in Program MARK]].
5. **Reports AICc tables, model averaging and c-hat adjustment.**
6. **RMark** drives MARK from R with formulas such as `list(Phi = list(formula = ~ time), p = list(formula = ~ 1))`.

## In R
```r
# norun (RMark and Program MARK are not installed here)
library(RMark); data(dipper)
m <- mark(dipper, model = "CJS", model.parameters = list(Phi = list(formula = ~ sex), p = list(formula = ~ time)))
```

## In the course
[[Powell and Gale 2015]] throughout (Ch2, Ch4, Ch8 to Ch15). [[Johnson and Omland 2004]].

## Common confusions
- **"MARK is only for mark-recapture."** It also fits occupancy, nest survival and known-fate models.

## Explain it back
- What two matrices define a MARK model?

*Pass test:* you can say what MARK does and how models are specified.

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
