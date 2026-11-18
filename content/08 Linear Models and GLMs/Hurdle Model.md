---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A hurdle model splits count data into two separate questions: whether the count is zero or not, and how large it is given that it is above zero."
aliases:
  - "Two-part model"
  - "Zero-altered model"
  - "ZAP"
  - "ZANB"
  - "Truncated count model"
status: seedling
---

# Hurdle Model

On a running track, the first question is whether a runner cleared the hurdle; only for those who did do we ask how far they then ran. Everyone who did not clear it scores zero, and nobody who cleared it does. A **hurdle model** splits [[Count Data|count data]] into the same two questions. Part 1 asks whether y > 0, with a binary model using a [[Logit Link|logit link]] ([[Logistic Regression]]). Part 2 asks, given y > 0, how many, with a zero-truncated Poisson or negative binomial ([[Truncated Distribution]]). All zeros come from part 1, so there is only one kind of zero. The two parts are fitted separately and can have different [[Predictor Variable|predictors]]. Ecologically, part 1 is presence or use and part 2 is abundance where present.

In the code below, presence rises with x, and where present the counts come from a Poisson with mean 3 with the zeros removed. `pscl::hurdle()` recovers a count part of log(3) = 1.1 and a zero part in which P(y > 0) rises with x. In glmmTMB the same model is `ziformula = ~ z` with `family = truncated_poisson`. Zuur calls these zero-altered models, ZAP and ZANB ([[Zuur et al. 2009 Ch11]]).

It differs from a [[Zero-inflated Model]] in the source of zeros: a zero-inflated model has two, structural zeros and zeros from the count process, while a hurdle has one. Hurdles can also handle too few zeros. So hurdle and zero-inflated are not two names for one model; they differ in whether the count process can produce zeros ([[Zero Inflation]]).

```r
library(pscl); set.seed(23); n <- 600; x <- runif(n); present <- rbinom(n, 1, plogis(-1 + 2 * x))
pos <- rpois(n * 3, 3); pos <- pos[pos > 0][1:n]; y <- present * pos            # zero-truncated counts where present
m <- hurdle(y ~ 1 | x, dist = "poisson"); round(coef(m), 2)                      # count part: log(3) = 1.1. Zero part: P(y > 0) rises with x
```

## Connections
- **Builds on:** [[Logistic Regression]], [[Truncated Distribution]], [[Count Data]], [[Logit Link]], [[Predictor Variable]]
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
