---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Zero inflation means a dataset has more zeros than the chosen count distribution can produce."
aliases:
  - "Zero-inflated data"
  - "Excess zeros"
  - "Zero trouble"
status: seedling
---

# Zero Inflation

Survey people at a lake about fish caught. Some fished all day and caught nothing, but many were only picnicking. The picnickers' zeros come from a different process, and they swell the zero pile beyond what fishing luck alone explains. **Zero inflation** means a dataset has more zeros than the chosen count distribution can produce ([[Count Data]]). Every count distribution predicts some zeros: for a [[Poisson Distribution]], P(0) = e^(−mean), so a Poisson with mean 3 gives zero only about 5% of the time (e⁻³ = 0.050). If 40% of your counts are zero and the rest average about 3, a plain Poisson cannot be right.

Many zeros on their own are not inflation. A species with a mean count of 0.2 gives 82% zeros under a plain Poisson (e^−0.2 = 0.82), so the test is always observed zeros against the zeros the fitted model expects, given its covariates. In the code below, 40% of sites are unsuitable and always give zero while the rest are Poisson with mean 3; observed zeros are 43%, against about 18% expected by a Poisson with the same overall mean. Ecologists distinguish two kinds of zero. *Structural* or false zeros come from places where the species could never be, or was present but missed. *Sampling* or true zeros come from suitable places where none happened to be present this time ([[Detection Probability]]).

Ignoring excess zeros biases the estimated mean and understates the variance. Check [[Overdispersion]] first, because a [[Negative Binomial Distribution]] often absorbs the extra zeros without any special zero component, and zero-inflated models are not automatically needed for ecological counts. If the zeros remain, a [[Zero-inflated Model]] or a [[Hurdle Model]] adds a second process for them; the example's zero-inflated fit recovers both the count mean of 3 and the 40% share of extra zeros. This is step 4 of the protocol ([[Zuur et al. 2010]], [[Zuur et al. 2009 Ch11]]).

![[Zero inflation.png|700]]
*What to look at:* the bar at zero towers over what the Poisson with the same mean predicts.

```r
set.seed(4)
n <- 500; present <- rbinom(n, 1, 0.6); y <- present * rpois(n, 3)   # 40% structural zeros
c(observed = mean(y == 0), poisson_expects = dpois(0, mean(y)))
m <- glm(y ~ 1, family = poisson)
sum(dpois(0, fitted(m)))                # zeros the fitted Poisson expects, versus sum(y == 0)
sum(y == 0)
library(pscl); z <- zeroinfl(y ~ 1 | 1, dist = "poisson")
c(count_mean = exp(coef(z)[1]), p_extra_zero = plogis(coef(z)[2]))   # recovers 3 and 0.4
```

## Connections
- **Builds on:** [[Count Data]], [[Poisson Distribution]]
- **Leads to:** [[Zero-inflated Model]], [[Hurdle Model]], [[Overdispersion]], [[Negative Binomial Distribution]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is zero inflation?
??
More zeros in the data than the assumed count distribution predicts.
![[Zero inflation.png]]
++++

How many zeros does a Poisson with mean λ expect?
??
A proportion e^(−λ).
++++

What should you check before reaching for a zero-inflated model?
??
Whether a negative binomial (overdispersion) already accounts for the zeros.
++++
