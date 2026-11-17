---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Nested model"
  - "Nesting of models"
  - "Reduced and full model"
status: seedling
---

# Nested Models

**In one line:** two models are nested when the simpler one can be obtained from the more complex one by fixing some of its parameters, usually at zero.

> [!info] Before this, it helps to know
> [[Regression Coefficient]] (what gets fixed) · [[Model]] (the things compared)

## The everyday picture
A stripped-down car and the same car with extras. Remove the sunroof and the radio from the full model and you have the basic one. A motorbike, by contrast, isn't a stripped-down car.

## A tiny example
- y ~ tree is nested in y ~ tree + elevation (set the elevation coefficient to 0).
- A Poisson is nested in a negative binomial (let k go to infinity).
- y ~ tree and y ~ elevation are not nested. Neither contains the other.

## Start from zero
1. **Write both models.**
2. **Ask: can I get the small one by constraining the big one?**
3. **If yes, they are nested.** Small = "reduced" or "null". Big = "full".
4. **The full model always fits at least as well.** The question is whether the improvement is more than chance.
5. **Why the distinction matters:** F-tests and likelihood ratio tests are valid only for nested pairs.
6. **Non-nested models** are compared with information criteria (AIC) or cross-validation.
7. **Both must be fitted to exactly the same data.** Missing values in an extra predictor can silently drop rows and break this.

## In R
```r
set.seed(7); d <- data.frame(tree = runif(60, 0, 60), elev = rnorm(60, 900, 50)); d$y <- rpois(60, exp(2.3 - 0.02 * d$tree))
m_small <- glm(y ~ tree, poisson, d); m_big <- glm(y ~ tree + elev, poisson, d); m_other <- glm(y ~ elev, poisson, d)
c(logLik(m_small), logLik(m_big))              # the bigger nested model is never lower
anova(m_small, m_big, test = "Chisq")$`Pr(>Chi)`[2]
AIC(m_small, m_other)                          # non-nested pair: compare by AIC
```

## In the course
[[Johnson and Omland 2004]], [[Anderson and Burnham 2002]], [[Zuur et al. 2009 Ch5]].

## Common confusions
- **"Nested models" means nested data.** Different idea. Nested data are observations grouped in units. Nested models are one model inside another.

## Explain it back
- Are y ~ a + b and y ~ a + c nested?

*Pass test:* you can decide whether two models are nested.

## Connections
- **Builds on:** [[Regression Coefficient]], [[Model]]
- **Leads to:** [[Likelihood Ratio Test]], [[F-test]], [[AIC]], [[Candidate Model Set]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

When are two models nested?
??
When the simpler model is a special case of the more complex one, obtained by fixing some parameters (usually to zero).
++++

Which comparison tools require nested models?
??
F-tests and likelihood ratio tests.
++++
