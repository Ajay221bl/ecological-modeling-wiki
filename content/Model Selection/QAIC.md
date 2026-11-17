---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "QAICc"
  - "Quasi-AIC"
  - "Quasi-likelihood AIC"
status: seedling
---

# QAIC

**In one line:** QAIC adapts AIC to overdispersed count or binomial data by dividing the log-likelihood by an estimated overdispersion factor ĉ and counting ĉ as an extra parameter.

> [!info] Before this, it helps to know
> [[AIC]] (what it modifies) · [[Overdispersion]] (why it is needed) · [[Quasi-Poisson]] (the related fix)

## The everyday picture
Re-scoring a noisy contest. If every judge's score wobbles four times more than it should, differences between contestants are less convincing than they look. QAIC shrinks the differences in fit by the wobble factor.

## Start from zero
1. **Overdispersion inflates differences in log-likelihood** between models, so plain AIC favours over-complex models.
2. **Estimate ĉ** from the most complex (global) model: Pearson χ² / residual df.
3. **QAIC = −2 log L / ĉ + 2K,** with K including one for ĉ.
4. **QAICc adds the small-sample term.**
5. **Use the same ĉ for every model** in the set.
6. **If ĉ ≈ 1,** QAIC ≈ AIC. Burnham and Anderson suggest ĉ above about 4 signals structural problems that need a better model, not just a correction.
7. **Common in capture-recapture and occupancy work** (program MARK reports it). An alternative is a negative binomial model compared by ordinary AIC.

## In R
```r
set.seed(6); x1 <- runif(100); x2 <- runif(100); y <- rnbinom(100, mu = exp(1 + x1), size = 1.5)
glob <- glm(y ~ x1 + x2, family = poisson); chat <- sum(resid(glob, "pearson")^2) / df.residual(glob); chat
qaic <- function(m) -2 * as.numeric(logLik(m)) / chat + 2 * (attr(logLik(m), "df") + 1)
m1 <- glm(y ~ x1, family = poisson)
round(rbind(AIC = c(x1 = AIC(m1), global = AIC(glob)), QAIC = c(qaic(m1), qaic(glob))), 1)      # differences shrink by the factor c-hat
```

## In the course
[[Anderson and Burnham 2002]] discuss overdispersion and QAIC.

## Common confusions
- **"Compute ĉ separately for each model."** Use one ĉ, from the global model.

## Explain it back
- Why does overdispersion bias plain AIC toward complex models?

*Pass test:* you can compute QAIC from a Poisson fit.

## Connections
- **Builds on:** [[AIC]], [[Overdispersion]]
- **Leads to:** [[Quasi-Poisson]], [[Global Model]], [[AICc]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What is QAIC?
??
AIC for overdispersed data: −2 log L / ĉ + 2K, with ĉ estimated from the global model and counted as a parameter.
++++
