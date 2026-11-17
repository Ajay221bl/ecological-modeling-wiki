---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases:
  - "Autocorrelation friend or foe"
  - "Red herring debate"
  - "Is autocorrelation a red herring"
status: seedling
---

# Autocorrelation as Signal or Nuisance

> [!summary] In plain words
> autocorrelation can be treated as a nuisance that must be corrected so that tests are honest, or as a signal whose scale and shape reveal ecological processes, and good analyses usually do both.

## The everyday picture
Background noise in a recording. A sound engineer wants it gone. A naturalist listening to the same tape notices it is a distant river and learns where the water is.

## The question
Should I see autocorrelation as a problem to remove or as something to study?

## Built from
- [[Autocorrelation]] and [[Residual Autocorrelation]].
- [[Inflated Type I Error]]: why it is a nuisance.
- [[Correlogram]] and [[Variogram]]: how it becomes a signal.
- [[Spatial Scale]]: what it reveals.
- [[Generalized Least Squares]]: the tool for either view.

## The reasoning, step by step
1. **McGill's four attitudes:** ignore it (unimportant), correct for it (foe), study it (friend), or use it as a benchmark model to beat (ignorance measure).
2. **As a foe:** residual autocorrelation shrinks standard errors and inflates false positives. Model it to get honest inference.
3. **As a friend:** the correlogram's range estimates patch size or dispersal scale. Anisotropy hints at dispersal direction. A four-year periodicity points to El Niño.
4. **As a benchmark:** "the value here is like its neighbours" is a strong null model for prediction. A mechanistic model should beat it.
5. **The red herring debate:** Lennon (2000) argued that autocorrelation biases which predictors appear important. Diniz-Filho et al. (2003) replied that differences between OLS and GLS mainly reflect the scale at which predictors act, so analyses that ignore autocorrelation aren't automatically flawed, but autocorrelation should always be checked.
6. **Practical stance:** always check residuals. If autocorrelation remains, model it for inference and report its structure as a result.

## So in practice
Report residual correlograms or variograms, and the fitted range of any correlation structure, alongside the coefficients.

## What would go wrong otherwise
Either ignoring autocorrelation entirely, or "correcting" it mechanically and never asking what process made it.

## Explain it back
- Give one ecological insight a correlogram can provide.

*Pass test:* you can argue both sides and choose a stance for your data.

## Connections
- **Related:** [[Why non-independence inflates false positives]], [[How to detect and handle autocorrelation]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Autocorrelation]]

## Flashcards

What are McGill's four attitudes to autocorrelation?
??
Unimportant, foe (nuisance to correct), friend (signal of process), and ignorance measure (benchmark to beat).
++++

What did Diniz-Filho et al. (2003) conclude about the "red herring" claim?
??
Autocorrelation should be checked, but it doesn't necessarily bias results; OLS-GLS differences reflect the scales at which predictors act.
++++
