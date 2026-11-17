---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Lme4 writes each random effect as a term in parentheses, with what varies on the left of the bar and the grouping factor on the right."
aliases:
  - "lme4 formula syntax"
  - "Random-effects formula"
  - "Bar notation"
  - "(1 | g)"
status: seedling
---

# lme4 Random-effect Syntax

lme4 writes each random effect as a term in parentheses, with what varies on the left of the bar and the [[Grouping Factor]] on the right ([[Model Formula Syntax|Formula Syntax in R]]). `(1 | g)` is a [[Random Intercept]] by g; `(x | g)`, the same as `(1 + x | g)`, is a correlated random intercept and [[Random Slope]] for x; `(x || g)` drops the correlation; and `(0 + x | g)` is a random slope with no random intercept. For two groupings, `(1 | g1/g2)` nests g2 in g1 and expands to `(1 | g1) + (1 | g1:g2)`, while `(1 | g1) + (1 | g2)` is crossed ([[Nested Random Effects]], [[Crossed Random Effects]]).

| Formula | Meaning |
|---|---|
| `(1 \| g)` | Random intercept |
| `(x \| g)` | Correlated intercept and slope |
| `(x \|\| g)` | Uncorrelated intercept and slope |
| `(0 + x \| g)` | Slope only |
| `(1 \| a/b)` | b nested in a |
| `(1 \| a) + (1 \| b)` | Crossed a and b |

Fixed effects go outside the parentheses, as in `y ~ x + (x | g)`, and a random slope almost always needs the matching fixed slope. The code below counts the variance-covariance parameters each form adds for `sleepstudy`: 1 for `(1 | Subject)`, 3 for `(Days | Subject)` (two SDs and a correlation), 2 for `(Days || Subject)` and 1 for `(0 + Days | Subject)`.

The lme4 vignette has a table of these forms, used in the linear mixed models lab ([[Course Website]], [[lmer() and glmer()]]). `(x | g)` without x as a fixed effect is not fine: it forces the average slope to zero.

```r
library(lme4); f <- c("(1 | Subject)", "(Days | Subject)", "(Days || Subject)", "(0 + Days | Subject)")
sapply(f, function(r) length(getME(lmer(as.formula(paste("Reaction ~ Days +", r)), sleepstudy), "theta")))     # number of variance-covariance parameters
```

## Connections
- **Builds on:** [[Random Intercept]], [[Random Slope]], [[Model Formula Syntax|Formula Syntax in R]]
- **Leads to:** [[Nested Random Effects]], [[Crossed Random Effects]], [[lmer() and glmer()]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does (0 + x | g) specify?
??
A random slope for x by g with no random intercept.
++++

How many variance-covariance parameters does (x | g) estimate?
??
Three: intercept SD, slope SD and their correlation.
++++
