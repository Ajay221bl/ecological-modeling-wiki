---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Proportion data"
  - "Grouped binomial"
  - "cbind(successes, failures)"
  - "Aggregated binomial"
status: seedling
---

# Binomial GLM for Proportions

**In one line:** a binomial GLM for proportions models data recorded as a number of successes out of a known number of trials per row.

> [!info] Before this, it helps to know
> [[Binomial Distribution]] (the random part) · [[Logistic Regression]] (the one-trial case) · [[Proportion]] (what is modeled)

## The everyday picture
Report cards showing "17 out of 20" instead of a bare 85%. The denominator matters: 17 of 20 is firmer evidence than 3 of 4, although both are roughly the same percentage.

## Start from zero
1. **Each row has y successes out of n trials.** Nests fledged out of nests found. Seeds germinated out of seeds sown.
2. **Model: yᵢ ~ Binomial(nᵢ, pᵢ), logit(pᵢ) = ηᵢ.**
3. **R syntax 1:** `glm(cbind(successes, failures) ~ x, family = binomial)`. Note: failures, not totals.
4. **R syntax 2:** `glm(prop ~ x, weights = n, family = binomial)`.
5. **Why not model the proportion with `lm`:** rows with different n have different precision, the variance depends on p, and predictions can leave 0 to 1.
6. **Overdispersion is possible here,** unlike with single 0/1 outcomes. Trials within a row may share a fate (chicks in one nest). Check residual deviance against residual df.
7. **If overdispersed:** quasibinomial, beta-binomial, or an observation-level random effect.
8. **Not for continuous proportions** such as percent cover with no count behind them. Those need a beta model.

## In R
```r
set.seed(12); d <- data.frame(dose = rep(1:6, each = 5), n = 20); d$dead <- rbinom(30, d$n, plogis(-3 + 0.9 * d$dose))
m1 <- glm(cbind(dead, n - dead) ~ dose, family = binomial, data = d)
m2 <- glm(I(dead / n) ~ dose, weights = n, family = binomial, data = d)
rbind(coef(m1), coef(m2)); deviance(m1) / df.residual(m1)            # same model both ways. Ratio near 1: no overdispersion
```

## In the course
[[Zuur et al. 2009 Ch10]], [[Harrison et al. 2018]] on overdispersed proportions.

## Common confusions
- **"cbind(successes, total)."** The second column is failures.
- **"Percent cover is binomial."** Not unless it is a count out of a known number of points.

## Explain it back
- Why do the trial numbers matter?

*Pass test:* you can fit a model to successes-out-of-n data in both syntaxes.

## Connections
- **Builds on:** [[Binomial Distribution]], [[Logistic Regression]]
- **Leads to:** [[Overdispersion]], [[Beta-binomial Distribution]], [[Beta Regression]], [[Observation-level Random Effect]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

How do you specify successes out of trials in glm()?
??
cbind(successes, failures) ~ predictors, with family = binomial.
++++

Can a binomial GLM for grouped data be overdispersed?
??
Yes, unlike a Bernoulli model for single 0/1 outcomes.
++++
