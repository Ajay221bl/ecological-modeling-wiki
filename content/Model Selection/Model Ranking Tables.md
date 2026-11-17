---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "AIC table"
  - "aictab()"
  - "model.sel()"
  - "Model selection table"
  - "Ranking table"
status: seedling
---

# Model Ranking Tables

**In one line:** a model ranking table lists the candidate models from best to worst with their K, log-likelihood, AIC (or AICc), ΔAIC, weight and cumulative weight.

> [!info] Before this, it helps to know
> [[AIC]], [[Delta AIC]] and [[Akaike Weight]] (its columns) · [[Candidate Model Set]] (its rows)

## Start from zero
1. **Rows: models. Columns:** model name, K, log L, AICc, Δ, w, cumulative w.
2. **Sorted by AICc.**
3. **The standard way to report information-theoretic results.**
4. **In R:** `AICcmodavg::aictab()` or `MuMIn::model.sel()`. Easy to build by hand with base R.
5. **Read it for:** the top model, how many are close, whether close models differ only by an uninformative parameter, and the log-likelihoods (do extra parameters actually improve fit?).
6. **Report K and log L,** not just Δ. They let the reader spot pretending variables.

## In R
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

## In the course
Model selection lab ([[Course Website]]).

## Common confusions
- **"Only the top row matters."** The pattern across the table carries the evidence.

## Explain it back
- What two columns help detect pretending variables?

*Pass test:* you can build and read a ranking table.

## Connections
- **Builds on:** [[AIC]], [[Delta AIC]], [[Akaike Weight]]
- **Leads to:** [[Cumulative Weight]], [[Uninformative Parameters]], [[modavg()]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What columns does a standard AIC ranking table contain?
??
Model, K, log-likelihood, AICc, ΔAICc, Akaike weight and cumulative weight.
++++
