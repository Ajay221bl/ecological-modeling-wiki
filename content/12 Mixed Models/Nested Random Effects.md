---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Random effects are nested when each level of a lower grouping belongs to exactly one level of a higher grouping, such as plots within sites or chicks within nests."
aliases:
  - "Nested random effect"
  - "(1 | site/plot)"
  - "Hierarchical random effects"
  - "Nested grouping"
status: seedling
---

# Nested Random Effects

[[Random Effect|Random effects]] are **nested** when each level of a lower grouping belongs to exactly one level of a higher grouping, such as plots within sites or chicks within nests ([[Grouping Variable|Grouping Factor]], [[Hierarchical Data]]). Plot 1 at site A and plot 1 at site B are different plots. In lme4, `(1 | site/plot)` expands to `(1 | site) + (1 | site:plot)`; if plot labels are already unique across sites, `(1 | site) + (1 | plot)` gives the same model.

The danger is non-unique labels with `(1 | plot)` alone, which wrongly pools all "plot 1"s across sites. Each level gets its own variance component ([[Variance Components]]). In the code below six sites with four plots each give estimated SDs of 1.6 for sites, 1.1 for plots within sites and 0.86 for the residual (true 2, 1 and 1).

Draw the design to see whether factors are nested or crossed, as Harrison et al. and Schielzeth and Nakagawa (2013) advise; the alternative is [[Crossed Random Effects]] ([[Harrison et al. 2018]], [[Zuur et al. 2009 Ch5]], [[Course Website]]). Nested and crossed are not about the biology; they are about how labels map onto each other in the data.

```r
set.seed(1); d <- expand.grid(site = factor(1:6), plot = factor(1:4), rep = 1:3); s <- rnorm(6, 0, 2); p <- rnorm(24, 0, 1); d$y <- 10 + s[d$site] + p[as.integer(d$site) + 6 * (as.integer(d$plot) - 1)] + rnorm(72)
m <- lme4::lmer(y ~ 1 + (1 | site/plot), data = d); as.data.frame(lme4::VarCorr(m))[, c("grp", "sdcor")]
```

## Connections
- **Builds on:** [[Grouping Variable|Grouping Factor]], [[Hierarchical Data]], [[Random Effect]]
- **Leads to:** [[Crossed Random Effects]], [[lme4 Random-effect Syntax]], [[Nested Experimental Design]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Nested vs Crossed Random Effects]]

## Flashcards

What does (1 | site/plot) mean in lme4?
??
Random intercepts for site and for plot within site: (1 | site) + (1 | site:plot).
++++

When are random effects nested?
??
When each level of the lower factor occurs in only one level of the higher factor.
++++
