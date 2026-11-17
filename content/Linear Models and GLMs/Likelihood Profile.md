---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Profile likelihood"
  - "Profiling"
  - "profile()"
status: seedling
---

# Likelihood Profile

**In one line:** a likelihood profile shows how well each value of one parameter can be supported when all the other parameters are re-optimised to do their best at that value.

> [!info] Before this, it helps to know
> [[Likelihood Function]] (the full surface) · [[Maximum Likelihood Estimation]] (repeated at each step) · [[Numerical Optimization]] (the engine)

## The everyday picture
The silhouette of a mountain range seen from the south. For each east-west position you see the highest point anywhere along the north-south line. The outline is the profile of the range for the east-west coordinate.

## Start from zero
1. **Choose the parameter of interest.**
2. **Fix it at a trial value.**
3. **Maximise the likelihood over all the other parameters.**
4. **Record that maximum.**
5. **Repeat across a grid of trial values.** The recorded maxima trace the profile.
6. **Its peak is the MLE** of the parameter of interest.
7. **Why profile:** it reduces a many-dimensional surface to a curve for one parameter while letting the others adjust, so the curve honestly shows what the data say about that parameter.
8. **Its main use:** confidence intervals that follow the true shape of the likelihood, including asymmetry.

## In R
```r
set.seed(6); x <- runif(40, 0, 10); y <- rpois(40, exp(0.5 + 0.15 * x))
prof <- sapply(seq(0, 0.3, by = 0.01), function(b) logLik(glm(y ~ 1 + offset(b * x), family = poisson)))    # slope fixed at b, intercept re-estimated
b <- seq(0, 0.3, by = 0.01); b[which.max(prof)]; coef(glm(y ~ x, family = poisson))[2]
plot(b, prof, type = "l", xlab = "slope", ylab = "profile log-likelihood")
```

## In the course
[[Hobbs and Hooten 2015 Ch4]]. `confint()` on a glm or lmer model uses profiling.

## Common confusions
- **"A profile is a slice."** A slice fixes the other parameters at set values. A profile re-optimises them at each step.

## Explain it back
- How does a profile differ from a slice through the likelihood surface?

*Pass test:* you can compute a simple profile by refitting over a grid.

## Connections
- **Builds on:** [[Likelihood Function]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Profile Likelihood Confidence Interval]], [[Nuisance Parameter]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

What is a likelihood profile for a parameter?
??
The maximised likelihood at each fixed value of that parameter, with all other parameters re-optimised.
++++
