---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Random effects are crossed when levels of two groupings combine freely, such as every site measured in every year, so each observation belongs to one site and one year independently."
aliases:
  - "Crossed random effect"
  - "Cross-classified random effects"
  - "(1 | site) + (1 | year)"
status: seedling
---

# Crossed Random Effects

Random effects are **crossed** when levels of two groupings combine freely, such as every site measured in every year, so each observation belongs to one site and one year independently ([[Grouping Factor]]). Site 1 is measured in 2019, 2020 and 2021, and so is site 2, so year isn't inside site. In lme4 this is `(1 | site) + (1 | year)`, and each grouping explains its own share of the variance, site to site and year to year. Partially crossed designs, where not every combination is observed, are handled the same way.

In the code below ten sites measured over six years give estimated SDs of 1.5 for sites, 1.3 for years and 0.56 for the residual (true 1.5, 0.8 and 0.5). lme4 handles crossed effects easily, while nlme's `lme()` does not. [[Christensen et al. 2020]] used random intercepts for state and for year, which are crossed.

The alternative structure is [[Nested Random Effects]] ([[Harrison et al. 2018]]). Don't use `site/year` for repeated years: that nests year within site and gives a separate year effect for every site.

```r
set.seed(2); d <- expand.grid(site = factor(1:10), year = factor(2015:2020)); d$y <- 5 + rnorm(10, 0, 1.5)[d$site] + rnorm(6, 0, 0.8)[d$year] + rnorm(60, 0, 0.5)
m <- lme4::lmer(y ~ 1 + (1 | site) + (1 | year), data = d); as.data.frame(lme4::VarCorr(m))[, c("grp", "sdcor")]
```

## Connections
- **Builds on:** [[Grouping Factor]]
- **Leads to:** [[Nested Random Effects]], [[lme4 Random-effect Syntax]], [[nlme lme()]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Nested vs Crossed Random Effects]]

## Flashcards

When are random effects crossed?
??
When levels of two groupings combine freely, such as every site sampled in every year.
++++

How are crossed site and year random intercepts written in lme4?
??
(1 | site) + (1 | year).
++++
