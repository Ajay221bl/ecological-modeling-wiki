---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Statistical power is the probability that a study will detect an effect of a given size when that effect really exists."
aliases:
  - "Power analysis"
  - "1 − β"
status: seedling
---

# Statistical Power

A weak microscope lens cannot show small things, however real they are. **Statistical power** says whether your study's lens is strong enough for the size of thing you are looking for: it is the probability that a study will detect an effect of a given size when that effect really exists, 1 − P([[Type II Error]]). Power rises with a larger true [[Effect Size]], a larger [[Sample Size]], less noise and a larger α. The convention is to aim for 0.8, and it is used before a study to choose a sample size ([[Study Design]]).

`power.t.test()` says 64 per group are needed to detect a difference of 1 unit when the SD is 2. Simulation is the general method: simulate data with the effect you care about, analyse, repeat, and count how often you detect it ([[Simulating Data]]). The code below does this for a slope of 0.4, showing power climbing as n goes from 15 to 120.

Low power is doubly bad. You usually miss the effect, and when you do "find" it, the estimate is exaggerated, because only lucky overestimates cross the significance line. The last lines of the code show that among significant results at n = 15, the estimated slope averages well above the true 0.4. Do not compute "observed power" after the fact, which is just the p-value restated, and a non-significant result from a low-powered study shows nothing ([[Johnson and Omland 2004]], [[Significance Level]]).

```r
power.t.test(delta = 1, sd = 2, power = 0.8)$n               # 64 per group to detect a 1-unit difference with SD 2
set.seed(9); pow <- function(n) mean(replicate(2000, { x <- rnorm(n); y <- 0.4 * x + rnorm(n); summary(lm(y ~ x))$coefficients[2, 4] < 0.05 }))
sapply(c(15, 30, 60, 120), pow)
est <- replicate(5000, { x <- rnorm(15); y <- 0.4 * x + rnorm(15); s <- summary(lm(y ~ x))$coefficients[2, c(1, 4)]; if (s[2] < 0.05) s[1] else NA })
mean(est, na.rm = TRUE)                                      # significant estimates average well above the true 0.4
```

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
