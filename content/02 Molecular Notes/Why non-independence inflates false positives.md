---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases:
  - "Why non-independence is the most dangerous violation"
  - "Why autocorrelation makes p-values too small"
status: seedling
---

# Why non-independence inflates false positives

> [!summary] In plain words
> correlated observations repeat part of the same information, so a model that counts each as new evidence thinks it knows more than it does, its standard errors shrink, and it finds "significant" effects that aren't there.

## The everyday picture
Ten witnesses who all heard the story from the same neighbour. The judge who treats them as ten independent accounts is far too confident.

## The question
Why is violating independence worse than, say, mild non-normality?

## Built from
- [[Independence of Observations|Independence]]: the assumption.
- [[Standard Error]]: what shrinks wrongly.
- [[Effective Sample Size|Effective Sample Size under Autocorrelation]]: how much information there really is.
- [[Pseudoreplication]]: the design version.
- [[Inflated Type I Error]]: the result.

## The reasoning, step by step
1. **The standard error of a slope or mean scales like σ/√n.**
2. **With positive autocorrelation the real information is n_eff < n.**
3. **The model uses n,** so its SE is too small by about √(n/n_eff).
4. **Test statistics (estimate/SE) become too large,** p-values too small, intervals too narrow.
5. **When both x and y are autocorrelated** (common in space and time), spurious correlations between unrelated variables become frequent.
6. **Other violations are milder.** Non-normality matters little for large n (central limit theorem). Unequal variance distorts SEs but usually less. Non-independence can make false positives several times more common, and adding data doesn't fix it.
7. **Zuur et al. call independence the most important assumption** for this reason.

**A worked example in numbers.** in the simulation on the Inflated Type I Error note, two unrelated AR(1) series (φ = 0.8, n = 50) gave p < 0.05 in 30% of datasets instead of 5%.

## So in practice
Identify the independent unit before analysis. Check residuals for autocorrelation and grouping. Use random effects, correlation structures or aggregation as needed.

## What would go wrong otherwise
Adding more samples from the same sites or years and expecting more power.

## Explain it back
- Why doesn't more data fix non-independence?

*Pass test:* you can explain the inflation chain from correlation to p-values.

## Connections
- **Related:** [[Autocorrelation as Signal or Nuisance]], [[Which assumption violation leads to which model]], [[Why use a random effect instead of a fixed effect]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

Why does positive autocorrelation inflate false positives?
??
Correlated observations carry overlapping information, so standard errors computed as if they were independent are too small.
++++
