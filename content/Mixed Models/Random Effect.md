---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Random effects"
  - "Group-level effect"
  - "Random factor"
  - "Varying effect"
status: seedling
---

# Random Effect

**In one line:** a random effect treats the differences among groups (sites, individuals, years) as draws from a common distribution, estimating that distribution's spread instead of each group's value separately.

> [!info] Before this, it helps to know
> [[Normal Distribution]] (the usual distribution of group effects) · [[Variance]] (what is estimated) · [[Grouping Factor]]

## The everyday picture
Instead of memorising the height of every student in a school, you learn the average and the spread. Any student is "the average plus a draw from that spread", and a new student can be guessed before you meet them.

## Start from zero
1. **Each group j gets a deviation bⱼ ~ Normal(0, σ²_b).**
2. **The model estimates σ_b** (one parameter) rather than J separate group means.
3. **Group deviations are then predicted** (conditional modes) and shrunk toward zero.
4. **Use when:** groups are a sample from a larger population, you want to generalise beyond them, there are enough groups (often at least five; see How Many Levels), or you need to account for non-independence.
5. **Random intercepts** let group baselines differ. **Random slopes** let a predictor's effect differ by group.
6. **Variance of a random effect can't be negative.** When it is estimated as zero the fit is singular.
7. **`ranef(m)`** extracts the predicted group deviations. `VarCorr(m)` the variances.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); round(head(ranef(m)$Subject, 4), 1); round(attr(VarCorr(m)$Subject, "stddev"), 1)
```

## In the course
[[Harrison et al. 2018]] (definitions, five-level guidance). Linear mixed models lab ([[Course Website]]). [[Zuur et al. 2009 Ch5]].

## Common confusions
- **"Random effects are for variables you don't care about."** Their variance can be the main result (repeatability, heritability).
- **"A factor with few levels must be fixed."** Oberpriller et al. (2022) suggest starting with a random effect and switching only if the fit is singular.

## Explain it back
- What single parameter does a random intercept add?

*Pass test:* you can decide whether a grouping variable should be random.

## Connections
- **Builds on:** [[Normal Distribution]], [[Variance]], [[Grouping Factor]]
- **Leads to:** [[Random Intercept]], [[Random Slope]], [[Conditional Modes]], [[Variance Components]], [[How Many Levels for a Random Effect]]
- **Part of:** [[MOC - Mixed Models]], molecular note [[Fixed vs Random Effects]], [[Why use a random effect instead of a fixed effect]]

## Flashcards

What does a random effect estimate instead of each group's value?
??
The variance (spread) of the distribution the group effects are drawn from.
++++

What does ranef() return for an lmer model?
??
The predicted group-level deviations (conditional modes).
++++
