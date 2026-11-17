---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Zero-inflated data"
  - "Excess zeros"
  - "Zero trouble"
status: seedling
---

# Zero Inflation

**In one line:** zero inflation means a dataset has more zeros than the chosen count distribution can produce.

> [!info] Before this, it helps to know
> [[Count Data]] (where it arises) · [[Poisson Distribution]] (which sets the expected number of zeros)

## The everyday picture
Counting fish caught per angler at a lake. Some anglers fished all day and caught nothing. But many of the people you surveyed weren't fishing at all, only picnicking. Their zeros come from a different process, and they swell the zero pile beyond what fishing luck alone explains.

## A tiny example
A Poisson with mean 3 gives zero about 5% of the time (e⁻³ = 0.0498). If 40% of your counts are zero and the mean of the rest is around 3, the plain Poisson can't be right.

## Start from zero
1. **Every count distribution predicts some zeros.** Poisson: P(0) = e^(−mean).
2. **Compare observed with expected zeros** under your fitted model.
3. **Many zeros alone isn't inflation.** A species with mean count 0.2 gives 82% zeros under a plain Poisson.
4. **Two kinds of zero.** *Structural (false) zeros:* the species could never be there, or was there and missed. *Sampling (true) zeros:* suitable habitat, none present this time.
5. **Why it matters:** ignoring excess zeros biases the estimated mean and understates the variance.
6. **Check overdispersion first.** A negative binomial often absorbs the extra zeros without a special zero part.
7. **If not, use a zero-inflated or hurdle model,** which adds a second process for the zeros.

## See it
![[Zero inflation.png|700]]
*What to look at:* the bar at zero towers over what the Poisson with the same mean predicts.

## In R
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

## In the course
Protocol step 4 ([[Zuur et al. 2010]]). Zero-inflated models: [[Zuur et al. 2009 Ch11]].

## Common confusions
- **"Lots of zeros means zero inflation."** Only if there are more than the distribution predicts given the covariates.
- **"Zero-inflated models are always needed for ecological counts."** Often a negative binomial is enough.

## Explain it back
- How do you judge whether zeros are in excess?
- What are the two sources of zeros?

*Pass test:* you can compute expected zeros and compare them with observed.

## Connections
- **Builds on:** [[Count Data]], [[Poisson Distribution]]
- **Leads to:** [[Zero-inflated Model]], [[Hurdle Model]], [[Overdispersion]], [[Negative Binomial Distribution]]
- **Part of:** [[MOC - Data Exploration]]

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
