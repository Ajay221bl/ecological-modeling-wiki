---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Underdispersion means the data vary less than the model's distribution predicts, as when counts have a variance smaller than their mean under a Poisson model."
aliases:
  - "Underdispersed"
status: seedling
---

# Underdispersion

Buses on a strict timetable arrive far more regularly than random arrivals would. **Underdispersion** means the data vary less than the model's distribution predicts, as when counts have a variance smaller than their mean under a Poisson model ([[Mean-Variance Relationship]]). It is the opposite and rarer problem to [[Overdispersion]], showing as a dispersion statistic well below 1 ([[Dispersion Parameter]]). Its consequence is standard errors that are too large: the model is too cautious.

Real causes are regulated processes: clutch sizes cluster tightly around a typical number, and territorial animals space themselves evenly. In the code below, clutch sizes with mean 4.5 that can never exceed 6 have a variance of about 1.1, and a Poisson GLM gives a dispersion of about 0.25. Artificial causes are an overfitted model with too many parameters, or a model that includes the same structure twice.

Remedies are [[Quasi-Poisson]], which allows a dispersion below 1, or the Conway-Maxwell-Poisson and generalised Poisson families, `compois` and `genpois` in glmmTMB ([[Zuur et al. 2009 Ch9]], [[Harrison et al. 2018]]). It is less dangerous than overdispersion because it errs toward caution, but a dispersion below 1 is not good news: it still means the variance model is wrong.

```r
set.seed(19); clutch <- rbinom(300, 6, 0.75) + 0                     # clutch sizes: mean 4.5, tightly bounded
c(mean = mean(clutch), var = var(clutch))
m <- glm(clutch ~ 1, family = poisson); sum(resid(m, "pearson")^2) / df.residual(m)       # about 0.25
```

## Connections
- **Builds on:** [[Overdispersion]]
- **Leads to:** [[Quasi-Poisson]], [[Dispersion Parameter]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is underdispersion?
??
Less variability than the model's distribution predicts (variance below the mean for Poisson counts).
++++
