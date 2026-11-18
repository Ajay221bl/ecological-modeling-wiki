---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "A model ranking table lists the candidate models from best to worst with their K, log-likelihood, AIC (or AICc), ΔAIC, weight and cumulative weight."
aliases:
  - "AIC table"
  - "aictab()"
  - "Model selection table"
  - "Ranking table"
status: seedling
---

# Model Ranking Tables

A **model ranking table** lists the candidate models from best to worst, sorted by [[AICc]], with columns for the model name, K, the [[Log-likelihood|log-likelihood]], AIC or AICc, ΔAIC, weight and cumulative weight ([[AIC]], [[Delta AIC]], [[Akaike Weight]], [[Cumulative Weight]]). It is the standard way to report information-theoretic results, built in R with `AICcmodavg::aictab()` or `MuMIn::model.sel()`, or easily by hand.

Read it for the top model, how many are close, and whether close models differ only by an uninformative parameter; the log-likelihoods show whether extra parameters actually improve fit ([[Uninformative Parameters]]). Report K and log L, not just Δ, because they let the reader spot such "pretending variables". The code below builds a table by hand for five bird models: tree plus shrub is top with weight 0.73, and the same model plus a noise variable is second at Δ 2.2 and weight 0.24, though its log-likelihood is only 0.01 higher.

Tables like this are built in the [[Model Selection|model selection]] lab, and the packages also feed [[modavg()]] ([[Course Website]]). Only the top row is not what matters: the pattern across the table carries the evidence.

```r
set.seed(8); d <- data.frame(tree = runif(80, 0, 60), shrub = runif(80, 0, 30), noise = rnorm(80)); d$birds <- rpois(80, exp(2.3 - 0.02 * d$tree + 0.015 * d$shrub))
ms <- list(null = birds ~ 1, tree = birds ~ tree, shrub = birds ~ shrub, both = birds ~ tree + shrub, both_noise = birds ~ tree + shrub + noise)
fits <- lapply(ms, glm, family = poisson, data = d); n <- nrow(d)
tab <- data.frame(K = sapply(fits, function(m) attr(logLik(m), "df")), logL = sapply(fits, function(m) as.numeric(logLik(m))))
tab$AICc <- -2 * tab$logL + 2 * tab$K + 2 * tab$K * (tab$K + 1) / (n - tab$K - 1); tab <- tab[order(tab$AICc), ]
tab$delta <- tab$AICc - min(tab$AICc); tab$w <- exp(-tab$delta / 2) / sum(exp(-tab$delta / 2)); tab$cum_w <- cumsum(tab$w); round(tab, 2)
# The same table from packages (not installed in the wiki's build environment):
# AICcmodavg::aictab(fits, modnames = names(fits))
# MuMIn::model.sel(fits)
```

## Connections
- **Builds on:** [[AIC]], [[Delta AIC]], [[Akaike Weight]], [[AICc]], [[Log-likelihood]], [[Model Selection]]
- **Leads to:** [[Cumulative Weight]], [[Uninformative Parameters]], [[modavg()]]
- **See also:** [[Candidate Model Set]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What columns does a standard AIC ranking table contain?
??
Model, K, log-likelihood, AICc, ΔAICc, Akaike weight and cumulative weight.
++++
