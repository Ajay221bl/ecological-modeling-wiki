---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases: []
status: seedling
---

# Random Intercept vs Random Slope

> [!summary] In plain words
> a random intercept lets groups differ in their baseline, while a random slope also lets them differ in how strongly they respond to a predictor.

## The question
Do I need random slopes, or are random intercepts enough?

## Built from
- [[Random Intercept]] and [[Random Slope]].
- [[Correlated Random Intercepts and Slopes]].
- [[Singular Fit]]: the warning sign of too much.

## See it
![[Random intercepts and slopes.png|700]]
*What to look at:* middle panel (intercepts only) versus right panel (intercepts and slopes).

## The reasoning, step by step
1. **Intercepts only:** parallel lines. Assumes the effect of x is identical everywhere.
2. **Intercepts and slopes:** non-parallel lines. Adds an SD for slopes and a correlation.
3. **If slopes really vary and you omit them,** the fixed slope's SE is too small (Schielzeth and Forstmeier 2009, via Harrison et al.).
4. **But random slopes need data:** within-group variation in x, many groups.
5. **Middle ground:** uncorrelated slopes `(x || g)`.
6. **Decide with the design, then the data:** if x varies within groups and the effect could plausibly differ, try the slope; drop it if the fit is singular or AIC prefers the simpler model.

| | Random intercept | Random slope |
|---|---|---|
| lme4 | `(1 \| g)` | `(x \| g)` |
| Lines | Parallel | Non-parallel |
| Extra parameters | 1 | 3 (with intercept and correlation) |
| Data needed | Moderate | Many groups, x varying within groups |
| Risk if wrongly omitted | ,  | Fixed-slope SE too small |

**A worked example in numbers.** in sleepstudy, AIC (ML) fell from 1802 to 1764 when Days slopes were allowed to vary by subject.

## So in practice
Fit the slope if the design supports it; simplify only on evidence (singularity, AIC).

## What would go wrong otherwise
Adding random slopes for every predictor regardless of data, then ignoring the singular-fit message.

## Explain it back
- What happens to a fixed slope's SE if real slope variation is ignored?

*Pass test:* you can choose and defend a random structure.

## Connections
- **Related:** [[Nested vs Crossed Random Effects]], [[Fixed vs Random Effects]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

When does a predictor need a random slope?
??
When it varies within groups and its effect plausibly differs among groups (and the data can support it).
![[Random intercepts and slopes.png]]
++++
