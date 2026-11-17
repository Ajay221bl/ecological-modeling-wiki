---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Two-part model"
  - "Zero-altered model"
  - "ZAP"
  - "ZANB"
  - "Truncated count model"
status: seedling
---

# Hurdle Model

**In one line:** a hurdle model splits count data into two separate questions: whether the count is zero or not, and how large it is given that it is above zero.

> [!info] Before this, it helps to know
> [[Logistic Regression]] (part one) · [[Truncated Distribution]] (part two) · [[Zero Inflation]] (the reason)

## The everyday picture
A hurdle on a track. First question: did the runner clear it? Only for those who cleared it do we ask the second question: how far did they then run? Everyone who didn't clear it scores zero, and nobody who cleared it does.

## Start from zero
1. **Part 1:** is y > 0? A binary model (Bernoulli, logit link).
2. **Part 2:** given y > 0, how many? A zero-truncated Poisson or negative binomial.
3. **All zeros come from part 1.** There is only one kind of zero.
4. **The two parts are fitted separately** and can have different predictors.
5. **Ecological reading:** part 1 is presence or use. Part 2 is abundance where present.
6. **Difference from zero-inflated:** a zero-inflated model has two sources of zeros. A hurdle has one. Hurdles can also handle too few zeros.
7. **Fit:** `pscl::hurdle(y ~ x | z)` or `glmmTMB(..., ziformula = ~ z, family = truncated_poisson)`.

## In R
```r
library(pscl); set.seed(23); n <- 600; x <- runif(n); present <- rbinom(n, 1, plogis(-1 + 2 * x))
pos <- rpois(n * 3, 3); pos <- pos[pos > 0][1:n]; y <- present * pos            # zero-truncated counts where present
m <- hurdle(y ~ 1 | x, dist = "poisson"); round(coef(m), 2)                      # count part: log(3) = 1.1. Zero part: P(y > 0) rises with x
```

## In the course
[[Zuur et al. 2009 Ch11]] (as zero-altered models, ZAP and ZANB).

## Common confusions
- **"Hurdle and zero-inflated are two names for one model."** They differ in whether the count process can produce zeros.

## Explain it back
- Where do zeros come from in a hurdle model?

*Pass test:* you can describe both parts and contrast with zero inflation.

## Connections
- **Builds on:** [[Logistic Regression]], [[Truncated Distribution]]
- **Leads to:** [[Zero-inflated Model]], [[Zero Inflation]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Zero-inflated vs Hurdle Model]]

## Flashcards

What are the two parts of a hurdle model?
??
A binary model for zero versus non-zero, and a zero-truncated count model for the positive values.
++++

How does a hurdle model differ from a zero-inflated model?
??
In a hurdle model all zeros come from the binary part. In a zero-inflated model zeros come from both parts.
++++
