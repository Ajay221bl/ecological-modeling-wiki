---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Incidence rate ratio"
  - "IRR"
  - "exp(β) in a count model"
  - "Multiplicative change in the mean"
status: seedling
---

# Rate Ratio

**In one line:** a rate ratio is the factor by which the expected count is multiplied for a one-unit increase in a predictor, obtained by exponentiating a log-link coefficient.

> [!info] Before this, it helps to know
> [[Log Link]] (where it comes from) · [[Multiplicative Effects]] (what it is) · [[Odds Ratio]] (its counterpart for logistic models)

## The everyday picture
An exchange rate between "plots one unit apart". A rate ratio of 0.8 says: whatever the count is here, expect 80% of that one unit further along.

## Start from zero
1. **RR = exp(β).**
2. **RR = 1:** no change. **Above 1:** increase. **Below 1:** decrease.
3. **Percent change = (RR − 1) × 100.** RR 1.25 is +25%. RR 0.8 is −20%.
4. **For k units: RR^k.**
5. **For a factor level:** the ratio of that level's mean to the reference level's mean.
6. **Interval: exponentiate the ends** of the coefficient's interval.
7. **Unlike odds ratios, rate ratios are easy to grasp:** they act directly on the mean.

## In R
```r
b <- 0.223; ci <- c(0.05, 0.40); exp(b); exp(ci); (exp(b) - 1) * 100
set.seed(7); g <- gl(2, 50, labels = c("control", "burned")); y <- rpois(100, c(4, 6)[g]); m <- glm(y ~ g, family = poisson)
exp(coef(m)[2]); mean(y[g == "burned"]) / mean(y[g == "control"])       # the rate ratio is the ratio of group means
```

## Common confusions
- **"A rate ratio of 2 means 2 more."** It means twice as many.

## Explain it back
- Convert a coefficient of −0.36 to a percentage change.

*Pass test:* you can report a count-model effect as a rate ratio with interval.

## Connections
- **Builds on:** [[Log Link]], [[Multiplicative Effects]]
- **Leads to:** [[Poisson Regression]], [[Odds Ratio]], [[Interpreting Regression Coefficients]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is a rate ratio?
??
exp(β) from a log-link model: the multiplicative change in the expected count per unit of the predictor.
++++

A rate ratio of 0.7 means what?
??
The expected count falls by 30% per unit increase in the predictor.
++++
