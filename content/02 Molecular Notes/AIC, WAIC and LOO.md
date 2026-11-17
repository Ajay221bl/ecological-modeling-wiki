---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases:
  - "AIC vs WAIC vs LOO"
  - "Information criteria compared"
status: seedling
---

# AIC, WAIC and LOO

> [!summary] In plain words
> AIC, WAIC and LOO all estimate how well a model will predict new data, but AIC uses a point estimate and a parameter count, WAIC uses the full posterior and a variance-based penalty, and LOO directly approximates leaving each observation out.

## The question
Which predictive criterion fits which kind of model, and do they agree?

## Built from
- [[AIC]]: −2 log L(θ̂) + 2K.
- [[WAIC]]: −2(lppd − p_waic).
- [[Leave-one-out Cross-validation]]: Σ log p(yᵢ | y₋ᵢ).
- [[DIC]]: the older Bayesian option.
- [[Effective Number of Parameters]]: the penalty each uses.
- [[Expected Log Predictive Density]]: the shared target.

## The reasoning, step by step
1. **Shared target:** expected log predictive density for new data.
2. **AIC:** plug in the MLE. Penalty = K. Assumes large n, a regular model and flat priors.
3. **DIC:** plug in the posterior mean. Penalty = pD. Struggles with hierarchical models.
4. **WAIC:** average over the posterior. Penalty = p_waic. Works for hierarchical models.
5. **PSIS-LOO:** approximates actual cross-validation. Comes with Pareto k diagnostics. Generally the most reliable.
6. **For a simple model with weak priors and plenty of data, all agree closely.** In the WAIC example: WAIC and AIC within a fraction of a unit of each other.
7. **They diverge for hierarchical, strongly regularised or small-sample models,** where K stops describing flexibility.

| Criterion | Uses | Penalty | Fits |
|---|---|---|---|
| AIC | MLE | K | lm, glm, (g)lmer fits |
| DIC | Posterior mean | pD | JAGS legacy |
| WAIC | Whole posterior | p_waic | Bayesian models |
| LOO | Whole posterior | p_loo, with diagnostics | Bayesian models (preferred) |

## So in practice
Frequentist fits: AIC or AICc. Bayesian fits: `loo()` and `loo_compare()`, checking Pareto k.

## What would go wrong otherwise
Comparing an AIC from `glmer` with a LOOIC from `brm`. Same scale, different estimators and priors.

## Explain it back
- What target do all three estimate?

*Pass test:* you can choose a criterion for a given fitting method.

## Connections
- **Related:** [[Why AIC rewards fit but punishes complexity]], [[Bayes Factors vs Predictive Criteria]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Bayesian Model Selection]], [[MOC - Model Selection]]

## Flashcards

What quantity do AIC, WAIC and LOO all estimate?
??
Expected out-of-sample log predictive density.
++++

Which Bayesian predictive criterion comes with a built-in diagnostic?
??
PSIS-LOO (Pareto k values).
++++
