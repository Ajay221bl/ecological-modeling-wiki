---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Power analysis"
  - "1 − β"
status: seedling
---

# Statistical Power

**In one line:** statistical power is the probability that a study will detect an effect of a given size when that effect really exists.

> [!info] Before this, it helps to know
> [[Type II Error]] (power = 1 − β) · [[Effect Size]] (must be specified) · [[Sample Size]] (the usual lever)

## The everyday picture
The magnification of a microscope. A weak lens can't show small things, however real they are. Power says whether your study's lens is strong enough for the size of thing you're looking for.

## Start from zero
1. **Power = 1 − P(Type II error).**
2. **It rises with:** larger true effect, larger sample, less noise, larger α.
3. **Convention:** aim for 0.8.
4. **Use it before the study** to choose a sample size.
5. **Simulation is the general method.** Simulate data with the effect you care about, analyse, repeat, count how often you detect it.
6. **Why low power is doubly bad:** you usually miss the effect, and when you do "find" it, the estimate is exaggerated. Only lucky overestimates cross the significance line.
7. **Don't compute "observed power" after the fact.** It is just the p-value restated.

## In R
```r
power.t.test(delta = 1, sd = 2, power = 0.8)$n               # 64 per group to detect a 1-unit difference with SD 2
set.seed(9); pow <- function(n) mean(replicate(2000, { x <- rnorm(n); y <- 0.4 * x + rnorm(n); summary(lm(y ~ x))$coefficients[2, 4] < 0.05 }))
sapply(c(15, 30, 60, 120), pow)
est <- replicate(5000, { x <- rnorm(15); y <- 0.4 * x + rnorm(15); s <- summary(lm(y ~ x))$coefficients[2, c(1, 4)]; if (s[2] < 0.05) s[1] else NA })
mean(est, na.rm = TRUE)                                      # significant estimates average well above the true 0.4
```

## In the course
[[Johnson and Omland 2004]]. Simulation-based power is a use of the data-simulation skills from the labs.

## Common confusions
- **"A non-significant study with low power shows no effect."** It shows nothing.

## Explain it back
- What four things determine power?

*Pass test:* you can estimate power by simulation.

## Connections
- **Builds on:** [[Type II Error]], [[Effect Size]], [[Sample Size]]
- **Leads to:** [[Simulating Data]], [[Study Design]], [[Significance Level]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is statistical power?
??
The probability of rejecting the null hypothesis when a specified true effect exists.
++++

What increases power?
??
Larger effects, larger samples, lower variability and a higher α.
++++
