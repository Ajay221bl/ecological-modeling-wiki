---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Log link function"
  - "Logarithmic link"
  - "Log-linear model"
status: seedling
---

# Log Link

**In one line:** the log link models the logarithm of the mean as a linear function of predictors, which keeps the mean positive and makes effects multiplicative.

> [!info] Before this, it helps to know
> [[Natural Logarithm]] (the function) · [[Link Function]] (its role) · [[Multiplicative Effects]] (the interpretation)

## The everyday picture
A dimmer with a "percent" dial. Each click of the dial changes the brightness by the same percentage, never by a fixed amount, and no number of clicks down takes it below zero.

## A tiny example
log(μ) = 2.3 − 0.02 × tree.
- exp(−0.02) = 0.98: each extra 1% of tree cover multiplies the expected count by 0.98, a 2% drop.
- 10% more cover: 0.98¹⁰ = 0.82, an 18% drop.

## Start from zero
1. **log(μ) = η, so μ = exp(η).**
2. **exp() of anything is positive.** The mean can't go below zero.
3. **Adding on the log scale is multiplying on the count scale:** exp(β₀ + β₁x) = exp(β₀) × exp(β₁)^x.
4. **exp(β₀):** the expected count when predictors are zero.
5. **exp(β₁):** the factor by which the mean is multiplied per unit of x. Called a rate ratio.
6. **Default for Poisson and negative binomial.** Usual choice for gamma.
7. **It implies an exponential curve** on the response scale.
8. **Why it suits counts biologically:** births, deaths and movement act per individual, so effects on abundance are naturally proportional.

## In R
```r
exp(-0.02); exp(-0.02)^10; exp(-0.02 * 10)
set.seed(6); tree <- runif(200, 0, 60); y <- rpois(200, exp(2.3 - 0.02 * tree)); m <- glm(y ~ tree, family = poisson)
exp(cbind(estimate = coef(m), confint.default(m)))        # multipliers with intervals
```

## In the course
[[Zuur et al. 2009 Ch9]], [[Hobbs and Hooten 2015 Ch3]].

## Common confusions
- **"Log link fails with zero counts."** The link is applied to the mean, which is positive. Zeros in the data are fine.
- **"A coefficient of −0.02 means 0.02 fewer birds."** It means 2% fewer.

## Explain it back
- Interpret a log-link coefficient of 0.4.

*Pass test:* you can convert log-link coefficients to multipliers.

## Connections
- **Builds on:** [[Natural Logarithm]], [[Link Function]]
- **Leads to:** [[Poisson Regression]], [[Rate Ratio]], [[Offset]], [[Multiplicative Effects]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What does the log link model?
??
log(μ) as a linear function of the predictors, so μ = exp(η).
++++

How is a log-link coefficient β interpreted?
??
Each unit increase in x multiplies the expected response by exp(β).
++++
