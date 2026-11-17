---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Poisson GLM"
  - "Log-linear model for counts"
  - "Count regression"
status: seedling
---

# Poisson Regression

**In one line:** Poisson regression models a count response as Poisson-distributed with a mean that depends on predictors through a log link.

> [!info] Before this, it helps to know
> [[Poisson Distribution]] (the random part) · [[Log Link]] (the link) · [[Generalized Linear Model]] (the framework) · [[Count Data]] (the response)

## The everyday picture
Predicting the number of customers per hour. The expected number changes with weather and day of week, each by a percentage. The actual number in any hour scatters around the expectation, more widely when the expectation is high.

## A tiny example
log(μ) = 2.3 − 0.02 × tree.
- 0% cover: 10.0 birds expected. 30%: 5.5. 60%: 3.0.
- Each 1% of cover multiplies the expected count by 0.98.

## Start from zero
1. **yᵢ ~ Poisson(μᵢ).**
2. **log(μᵢ) = β₀ + β₁xᵢ.**
3. **Fit:** `glm(y ~ x, family = poisson)`.
4. **exp(β₀):** expected count at x = 0.
5. **exp(β₁):** rate ratio per unit x.
6. **Built-in assumption: variance = mean.** Check it.
7. **Dispersion check:** sum of squared Pearson residuals ÷ residual df. Near 1 is fine. Well above 1 is overdispersion.
8. **If overdispersed:** standard errors are too small. Move to negative binomial or quasi-Poisson, or find the missing structure (covariates, grouping, zero inflation).
9. **Unequal effort?** Add an offset.
10. **Why not log-transform and use `lm`:** zeros can't be logged, small counts aren't normal, and the variance isn't constant.

## See it
![[Poisson regression fit.png|700]]
*What to look at:* the curve of expected counts, with scatter that widens where the mean is higher.

## In R
```r
set.seed(15); d <- data.frame(tree = runif(150, 0, 60)); d$birds <- rpois(150, exp(2.3 - 0.02 * d$tree))
m <- glm(birds ~ tree, family = poisson, data = d); round(summary(m)$coefficients, 4)
exp(coef(m))
sum(resid(m, type = "pearson")^2) / df.residual(m)                 # dispersion statistic: near 1
round(predict(m, data.frame(tree = c(0, 30, 60)), type = "response"), 1)
```

## In the course
GLM lab on counts ([[Course Website]]). [[Zuur et al. 2009 Ch9]], [[Harrison et al. 2018]].

## Common confusions
- **"Poisson regression is right for all counts."** Only if variance tracks the mean. Most field counts are overdispersed.
- **"Significant results from a Poisson GLM can be trusted as is."** Not before the dispersion check.

## Explain it back
- What must you check after fitting, and how?

*Pass test:* you can fit, interpret and check a Poisson regression.

## Connections
- **Builds on:** [[Poisson Distribution]], [[Log Link]], [[Generalized Linear Model]]
- **Leads to:** [[Overdispersion]], [[Offset]], [[Negative Binomial GLM]], [[Rate Ratio]], [[Quasi-Poisson]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Poisson vs Negative Binomial]]

## Flashcards

What are the distribution and link in Poisson regression?
??
Poisson distribution with a log link.
![[Poisson regression fit.png]]
++++

What assumption of Poisson regression must be checked?
??
That the variance equals the mean (no overdispersion).
++++

How is the dispersion statistic computed?
??
Sum of squared Pearson residuals divided by residual degrees of freedom.
++++
