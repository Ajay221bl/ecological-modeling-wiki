---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "lme4 formula syntax"
  - "Random-effects formula"
  - "Bar notation"
  - "(1 | g)"
status: seedling
---

# lme4 Random-effect Syntax

**In one line:** lme4 writes each random effect as a term in parentheses, with what varies on the left of the bar and the grouping factor on the right.

> [!info] Before this, it helps to know
> [[Random Intercept]] · [[Random Slope]] · [[Model Formula Syntax|Formula Syntax in R]]

## Start from zero
1. **`(1 | g)`:** random intercept by g.
2. **`(x | g)` or `(1 + x | g)`:** correlated random intercept and slope for x.
3. **`(0 + x | g)`:** random slope only, no random intercept.
4. **`(x || g)`:** intercept and slope with no correlation (numeric x).
5. **`(1 | g1/g2)`:** g2 nested in g1, same as `(1 | g1) + (1 | g1:g2)`.
6. **`(1 | g1) + (1 | g2)`:** crossed.
7. **Fixed effects go outside the parentheses:** `y ~ x + (x | g)`. A random slope almost always needs the matching fixed slope.
8. **The lme4 vignette has a table** of these forms; the lab uses it.

| Formula | Meaning |
|---|---|
| `(1 \| g)` | Random intercept |
| `(x \| g)` | Correlated intercept and slope |
| `(x \|\| g)` | Uncorrelated intercept and slope |
| `(0 + x \| g)` | Slope only |
| `(1 \| a/b)` | b nested in a |
| `(1 \| a) + (1 \| b)` | Crossed a and b |

## In R
```r
library(lme4); f <- c("(1 | Subject)", "(Days | Subject)", "(Days || Subject)", "(0 + Days | Subject)")
sapply(f, function(r) length(getME(lmer(as.formula(paste("Reaction ~ Days +", r)), sleepstudy), "theta")))     # number of variance-covariance parameters
```

## In the course
lme4 vignette syntax table used in the linear mixed models lab ([[Course Website]]).

## Common confusions
- **"(x | g) without x as a fixed effect is fine."** It forces the average slope to zero.

## Explain it back
- How many random-effect parameters does (x | g) estimate?

*Pass test:* you can write any common random structure.

## Connections
- **Builds on:** [[Random Intercept]], [[Random Slope]], [[Model Formula Syntax|Formula Syntax in R]]
- **Leads to:** [[Nested Random Effects]], [[Crossed Random Effects]], [[lmer() and glmer()]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What does (0 + x | g) specify?
??
A random slope for x by g with no random intercept.
++++

How many variance-covariance parameters does (x | g) estimate?
??
Three: intercept SD, slope SD and their correlation.
++++
