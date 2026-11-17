---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "select = TRUE"
  - "Double penalty"
  - "Shrinkage smooths"
  - "bs = \"ts\""
  - "bs = \"cs\""
status: seedling
---

# Double Penalty Selection

**In one line:** double penalty selection adds a second penalty to each smooth's otherwise unpenalised part, so that whole terms can be shrunk to zero and effectively dropped during fitting.

> [!info] Before this, it helps to know
> [[Wiggliness Penalty]] · [[Regularization]]

## Start from zero
1. **The usual penalty leaves the null space (a straight line) free.** A smooth can't vanish completely.
2. **`gam(..., select = TRUE)`** penalises the null space too: terms can be removed by the fit itself.
3. **Shrinkage bases `"ts"` and `"cs"`** do something similar term by term.
4. **A term with edf near 0** has been effectively removed.
5. **A form of automatic model selection;** still interpret with care.

## In R
```r
library(mgcv); set.seed(24); d <- data.frame(x1 = runif(200), x2 = runif(200)); d$y <- sin(2 * pi * d$x1) + rnorm(200, 0, 0.3)       # x2 is pure noise
round(summary(gam(y ~ s(x1) + s(x2), data = d, method = "REML", select = TRUE))$edf, 3)
```

## In the course
Not in the in-scope labs. Included because it is mgcv's built-in term selection.

## Common confusions
- **"An edf of 1 means removed."** With select = TRUE, edf near 0 means removed; edf 1 is linear.

## Explain it back
- What does select = TRUE penalise?

*Pass test:* you can use double penalty selection.

## Connections
- **Builds on:** [[Wiggliness Penalty]], [[Regularization]]
- **Leads to:** [[Model Selection]], [[Effective Degrees of Freedom]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What does select = TRUE do in mgcv?
??
Adds a penalty on each smooth's null space so whole terms can shrink to zero.
++++
