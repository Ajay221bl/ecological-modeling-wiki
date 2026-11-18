---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "QAIC adapts AIC to overdispersed count or binomial data by dividing the log-likelihood by an estimated overdispersion factor ĉ and counting ĉ as an extra parameter."
aliases:
  - "QAICc"
  - "Quasi-AIC"
  - "Quasi-likelihood AIC"
status: seedling
---

# QAIC

If every judge's score wobbles four times more than it should, differences between contestants are less convincing than they look. **QAIC** applies that discount to overdispersed count or binomial data ([[Overdispersion]]). Overdispersion inflates differences in [[Log-likelihood|log-likelihood]] between models, so plain [[AIC]] favours over-complex models. Estimate an overdispersion factor ĉ from the [[Global Model]], as the Pearson χ² divided by the residual df, and compute QAIC = −2 log L / ĉ + 2K, with K including one for ĉ; QAICc adds the small-sample term ([[AICc]]).

Use the same ĉ for every model in the set. In the code below, negative binomial counts fitted as Poisson give ĉ = 4.6. Under AIC the model with x1 alone is 0.9 units ahead of the global model; under QAIC the global model's small gain in fit is divided by 4.6, so the simpler model's lead grows to 1.7.

If ĉ ≈ 1, QAIC ≈ AIC; Burnham and Anderson suggest ĉ above about 4 signals structural problems that need a better model, not just a correction ([[Anderson and Burnham 2002]]). QAIC is common in [[Mark-Recapture|capture-recapture]] and occupancy work, where [[Program MARK|program MARK]] reports it; an alternative is a negative binomial model compared by ordinary AIC, or the [[Quasi-Poisson]] approach. Don't compute ĉ separately for each model: use one ĉ from the global model.

```r
set.seed(6); x1 <- runif(100); x2 <- runif(100); y <- rnbinom(100, mu = exp(1 + x1), size = 1.5)
glob <- glm(y ~ x1 + x2, family = poisson); chat <- sum(resid(glob, "pearson")^2) / df.residual(glob); chat
qaic <- function(m) -2 * as.numeric(logLik(m)) / chat + 2 * (attr(logLik(m), "df") + 1)
m1 <- glm(y ~ x1, family = poisson)
round(rbind(AIC = c(x1 = AIC(m1), global = AIC(glob)), QAIC = c(qaic(m1), qaic(glob))), 1)      # differences shrink by the factor c-hat
```

## Connections
- **Builds on:** [[AIC]], [[Overdispersion]], [[Log-likelihood]]
- **Leads to:** [[Quasi-Poisson]], [[Global Model]], [[AICc]], [[Mark-Recapture]], [[Program MARK]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is QAIC?
??
AIC for overdispersed data: −2 log L / ĉ + 2K, with ĉ estimated from the global model and counted as a parameter.
++++
