---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Underdispersed"
status: seedling
---

# Underdispersion

**In one line:** underdispersion means the data vary less than the model's distribution predicts, as when counts have a variance smaller than their mean under a Poisson model.

> [!info] Before this, it helps to know
> [[Overdispersion]] (the opposite and commoner problem) · [[Mean-Variance Relationship]] (the rule that is broken)

## The everyday picture
Buses arriving on a strict timetable. If arrivals were random, the number per hour would vary a lot. A timetable makes counts far more regular than chance.

## Start from zero
1. **Dispersion statistic well below 1.**
2. **Consequence:** standard errors are too large. The model is too cautious.
3. **Real causes:** regulated processes. Clutch sizes cluster tightly around a typical number. Territorial animals space themselves evenly.
4. **Artificial causes:** an overfitted model with too many parameters, or a model that already includes the structure twice.
5. **Remedies:** quasi-Poisson (dispersion below 1 is allowed), Conway-Maxwell-Poisson or generalised Poisson (`glmmTMB` families `compois`, `genpois`).
6. **Less dangerous than overdispersion,** since it errs toward caution, but it still signals the wrong distribution.

## In R
```r
set.seed(19); clutch <- rbinom(300, 6, 0.75) + 0                     # clutch sizes: mean 4.5, tightly bounded
c(mean = mean(clutch), var = var(clutch))
m <- glm(clutch ~ 1, family = poisson); sum(resid(m, "pearson")^2) / df.residual(m)       # about 0.25
```

## In the course
[[Zuur et al. 2009 Ch9]], [[Harrison et al. 2018]].

## Common confusions
- **"Dispersion below 1 is good news."** It still means the variance model is wrong.

## Explain it back
- Give an ecological example of underdispersed counts.

*Pass test:* you can recognise underdispersion and name a remedy.

## Connections
- **Builds on:** [[Overdispersion]]
- **Leads to:** [[Quasi-Poisson]], [[Dispersion Parameter]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

What is underdispersion?
??
Less variability than the model's distribution predicts (variance below the mean for Poisson counts).
++++
