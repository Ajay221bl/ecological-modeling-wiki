---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases:
  - "Process Variance vs Sampling Variance"
  - "Process Variance vs Sampling Variance (MARK random effects)"
  - "Variance components of survival"
status: seedling
---

# Process vs Sampling Variance in Survival Estimates

> [!summary] In plain words
> the spread of yearly survival estimates mixes real year-to-year variation in survival (process variance) with estimation error (sampling variance), and only the process part describes the population.

## The question
Why is the variation among my yearly survival estimates bigger than the real variation in survival?

## Built from
- [[Process Variation]] and [[Variance of an Estimate]].
- [[Random Effect]] and [[Variance Components]].
- [[Program MARK]].

## The reasoning, step by step
1. **Observed variance of estimates ≈ process variance + average sampling variance.**
2. **Subtract** the average squared SE to approximate process variance (method-of-moments).
3. **Program MARK's variance components (random effects) tool** does this properly and shrinks yearly estimates toward the mean.
4. **Population models need process variance;** using the raw spread exaggerates extinction risk.
5. **Same idea as partial pooling** in mixed models.

## So in practice
Report process variance (or its SD) when describing environmental variation in survival, and use it in population viability analysis.

## In R
```r
set.seed(1); yrs <- 15; true_S <- rnorm(yrs, 0.6, 0.05); se <- 0.08; est <- true_S + rnorm(yrs, 0, se)
round(c(total_var = var(est), sampling_var = se^2, process_var_hat = var(est) - se^2, process_var_true = 0.05^2), 4)
```

## What would go wrong otherwise
Feeding the raw SD of yearly survival estimates into a population viability analysis.

## Explain it back
- Which variance should go into a population projection?

*Pass test:* you can separate process and sampling variance roughly.

## Connections
- **Related:** [[Partial Pooling]], [[Data Model, Process Model and Parameter Model]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Population Estimation]]

## Flashcards

Observed variance of yearly survival estimates ≈ ?
??
Process variance + sampling variance.
++++
