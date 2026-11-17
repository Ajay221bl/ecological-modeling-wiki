---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Wald interval"
  - "Asymptotic confidence interval"
  - "Normal-approximation interval"
status: seedling
---

# Wald Confidence Interval

**In one line:** a Wald confidence interval is the estimate plus and minus about two standard errors, built on the assumption that the estimate's sampling distribution is normal.

> [!info] Before this, it helps to know
> [[Confidence Interval]] (the general idea) · [[Standard Error]] (from the Hessian) · [[Standard Normal Distribution]] (the 1.96)

## The everyday picture
Describing a hill by pretending it is a perfect symmetrical dome. Quick, and fine for most hills. Wrong for a hill with a cliff on one side.

## Start from zero
1. **Interval = estimate ± 1.96 × SE.**
2. **It approximates the log-likelihood by a parabola** at its peak.
3. **Always symmetric** about the estimate.
4. **Fast:** it needs only the fit you already have.
5. **Good when** the sample is large and the parameter isn't near a boundary.
6. **Poor when** the likelihood is lopsided: small samples, probabilities near 0 or 1, variances near zero. It can then include impossible values.
7. **Trick:** compute it on the link scale (log, logit), where the normal approximation is better, then back-transform the endpoints.
8. **`confint.default(model)`** gives Wald intervals for a glm. `confint(model)` gives profile intervals.

## In R
```r
y <- 1; n <- 20; p <- y / n; se <- sqrt(p * (1 - p) / n)
p + c(-1.96, 1.96) * se                                  # Wald on the probability scale: lower limit negative, impossible
m <- glm(cbind(y, n - y) ~ 1, family = binomial)
plogis(confint.default(m))                               # Wald on the logit scale, back-transformed: stays inside 0 to 1
plogis(suppressMessages(confint(m)))                     # profile likelihood interval
```

## In the course
The lmer labs contrast Wald, profile and bootstrap intervals (Oct 15, "The CI wars"; [[Course Website]]).

## Common confusions
- **"All confidence intervals are estimate ± 2 SE."** That is the Wald kind, the crudest.

## Explain it back
- When do Wald intervals fail?

*Pass test:* you can compute a Wald interval and say when not to trust it.

## Connections
- **Builds on:** [[Confidence Interval]], [[Standard Error]]
- **Leads to:** [[Profile Likelihood Confidence Interval]], [[Wald Test]], [[Percentile Bootstrap Interval]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Wald, Profile and Bootstrap Intervals]]

## Flashcards

What is a Wald confidence interval?
??
Estimate ± 1.96 × standard error, assuming a normal sampling distribution.
++++

When is a Wald interval unreliable?
??
With small samples or parameters near a boundary, where the likelihood is asymmetric.
++++
