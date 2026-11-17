---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Offset term"
  - "offset(log(effort))"
  - "Exposure"
  - "Modeling rates"
status: seedling
---

# Offset

**In one line:** an offset is a term added to the linear predictor with its coefficient fixed at 1, used to account for unequal sampling effort so that the model describes a rate per unit of effort.

> [!info] Before this, it helps to know
> [[Log Link]] (where it works) · [[Sampling Effort]] (what it adjusts for) · [[Poisson Regression]] (the usual model)

## The everyday picture
Comparing bakeries by loaves sold. One was open for 2 hours and one for 10. Raw totals are unfair. Loaves per hour is the fair comparison, and the offset builds "per hour" into the model.

## A tiny example
Site A: 12 birds in 10 minutes. Site B: 12 birds in 30 minutes. Same count, but A's rate is three times B's. With `offset(log(minutes))` the model compares 1.2 per minute with 0.4 per minute.

## Start from zero
1. **Want:** the rate, count per unit effort. μ/E.
2. **Model the log rate:** log(μ/E) = β₀ + β₁x.
3. **Rearrange:** log(μ) = log(E) + β₀ + β₁x.
4. **log(E) is a predictor with coefficient exactly 1.** That is the offset.
5. **R:** `glm(count ~ x + offset(log(effort)), family = poisson)`.
6. **Coefficients now describe the rate,** per unit of whatever E measures.
7. **Why not divide the count by effort and model the ratio:** the ratio is no longer a count, and you lose the information that 2 birds in 1 minute is weaker evidence than 200 in 100.
8. **Why not add log(E) as an ordinary predictor:** that estimates its coefficient. Sometimes reasonable, when counts don't scale proportionally with effort, but it is a different model.
9. **Effort can be** time, area, trap-nights, transect length, number of observers.

## In R
```r
set.seed(16); d <- data.frame(mins = sample(c(5, 10, 30), 200, TRUE), tree = runif(200, 0, 60))
d$birds <- rpois(200, d$mins * exp(-0.5 - 0.02 * d$tree))               # true rate per minute depends on tree cover
round(coef(glm(birds ~ tree, family = poisson, d)), 3)                  # ignoring effort: intercept meaningless
round(coef(glm(birds ~ tree + offset(log(mins)), family = poisson, d)), 3)      # recovers -0.5 and -0.02
```

## In the course
[[Zuur et al. 2009 Ch9]]. Used in the count labs when survey durations differ ([[Course Website]]).

## Common confusions
- **"offset(effort)."** With a log link the offset must be on the log scale: offset(log(effort)).
- **"An offset is a covariate."** It has no estimated coefficient.

## Explain it back
- Derive why log(effort) enters with coefficient 1.

*Pass test:* you can add an offset and interpret coefficients as effects on a rate.

## Connections
- **Builds on:** [[Log Link]], [[Sampling Effort]]
- **Leads to:** [[Poisson Regression]], [[Negative Binomial GLM]], [[Linear Predictor]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

What is an offset in a count GLM?
??
A term, usually log(effort), added to the linear predictor with coefficient fixed at 1 so the model describes a rate.
++++

Why use an offset rather than dividing counts by effort?
??
It keeps the response a count with the right distribution and weights observations by their effort.
++++
