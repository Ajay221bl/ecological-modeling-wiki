---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "Transformation vs GLM"
  - "Log-transform or GLM"
  - "Should I transform my response"
status: seedling
---

# Transform the data or change the model

> [!summary] In plain words
> transforming the response (log, square root) can fix skew and unequal variance but changes what the model estimates and struggles with zeros, while changing the model (a GLM with a suitable family and link) keeps the data on their own scale; for counts and proportions, changing the model is usually the better choice.

## The question
Should I log-transform my response or use a GLM?

## Built from
- [[Transformation]], [[Log Transformation]], [[Square-root Transformation]].
- [[Generalized Linear Model]] and [[Link Function]].
- [[Back-transformation]] and [[Jensen's Inequality]].

## The reasoning, step by step
1. **A transformation changes the data;** a link function changes how the mean is modelled.
2. **log(y) needs y > 0;** log(y + 1) works but the constant is arbitrary and results depend on it.
3. **Back-transforming the mean of log(y) gives the geometric mean,** not the arithmetic mean (Jensen's inequality).
4. **A GLM with a log link models log(E[y])** directly, so predictions back-transform to means, and zeros are fine.
5. **Transformations still make sense** for continuous positive data with multiplicative errors (allometry, log-log models) and for predictors.
6. **O'Hara and Kotze (2010)** showed log-transformed count models perform worse than negative binomial GLMs; Warton and Hui (2011) made the same case for arcsine-transformed proportions versus logistic models.

| | Transform y | Change the model |
|---|---|---|
| Zeros | Problem for log | Fine |
| Prediction scale | Transformed, biased when back-transformed | Original |
| Variance | Roughly stabilised | Modelled by the family |
| Good for | Positive continuous, multiplicative data | Counts, binary, proportions |
Simulated Poisson counts with true log-scale slope 1.5 (16 zeros in 200): the Poisson GLM recovers 1.52, while `lm(log(y + 1) ~ x)` gives 1.37, a slope on a different and arbitrary scale.

## So in practice
For counts and 0/1 data, use a GLM; for continuous positive data where effects are multiplicative, a log transform or a gamma or lognormal model are all reasonable.

## In R
```r
set.seed(5); x <- runif(200); y <- rpois(200, exp(0.5 + 1.5 * x))
c(zeros = sum(y == 0))
round(rbind(log1p_lm = coef(lm(log(y + 1) ~ x)), poisson_glm = coef(glm(y ~ x, family = poisson)), truth = c(0.5, 1.5)), 2)
```

## What would go wrong otherwise
Using log(y + 1) on counts with many zeros and reading the slope as a rate ratio.

## Explain it back
- Why does back-transforming a mean of logs underestimate the mean?

*Pass test:* you can argue for a GLM over a transformation for count data.

## Connections
- **Related:** [[Which assumption violation leads to which model]], [[Linear Model vs GLM]], [[Linear, Semi-log and Log-log Models]], [[Predictions on Link vs Response Scale]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Linear Models and GLMs]], [[MOC - Generalized Linear Models]], [[MOC - Data Exploration]]

## Flashcards

Main difference between a log transform and a log link?
??
A transform models E[log y]; a log link models log E[y], so it handles zeros and back-transforms to means.
++++

What does exp(mean of log y) estimate?
??
The geometric mean, not the arithmetic mean.
++++
