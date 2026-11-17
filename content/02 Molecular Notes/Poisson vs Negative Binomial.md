---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases: []
status: seedling
---

# Poisson vs Negative Binomial

> [!summary] In plain words
> both model counts with a log link and give the same kind of coefficients, but the Poisson forces the variance to equal the mean while the negative binomial adds a parameter that lets the variance be larger.

## The question
When is a Poisson model enough for counts, and when do I need a negative binomial?

## Built from
- [[Poisson Distribution]] and [[Poisson Regression]].
- [[Negative Binomial Distribution]] and [[Negative Binomial GLM]].
- [[Mean-Variance Relationship]]: where they differ.
- [[Overdispersion]]: the deciding symptom.

## See it
![[Overdispersion.png|700]]
*What to look at:* identical mean curves. Only the width of the scatter differs.

## The reasoning, step by step
1. **Same:** support (0, 1, 2, ...), log link, rate-ratio interpretation, offsets.
2. **Poisson variance = μ.** One parameter does both jobs.
3. **Negative binomial variance = μ + μ²/k.** The extra k frees the variance.
4. **Poisson arises** from independent events at a constant rate.
5. **Negative binomial arises** when that rate itself varies among units (a gamma mixture of Poissons): clumping, unmeasured heterogeneity.
6. **As k grows, the negative binomial becomes the Poisson.** So the Poisson is nested in it.
7. **Decide** with the dispersion statistic, simulated residuals, or AIC between the two fits.

| | Poisson | Negative binomial |
|---|---|---|
| Parameters | μ | μ and k |
| Variance | μ | μ + μ²/k |
| Typical data | Rare independent events | Clumped field counts |
| R | `glm(family = poisson)` | `MASS::glm.nb`, `glmmTMB(family = nbinom2)` |

**A worked example in numbers.** mean 10. Poisson variance 10 (sd 3.2). Negative binomial with k = 2: variance 10 + 100/2 = 60 (sd 7.7).

## So in practice
Fit the Poisson first and check dispersion. In field ecology, expect to move to the negative binomial more often than not.

## What would go wrong otherwise
Poisson on clumped data: overconfident inference. Negative binomial on truly Poisson data: little harm, k is estimated as very large (sometimes with a convergence warning).

## Explain it back
- State both variance formulas.

*Pass test:* you can choose between them from a dispersion check.

## Connections
- **Related:** [[What to do about overdispersion]], [[Binomial vs Poisson]], [[Zero-inflated vs Hurdle Model]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Generalized Linear Models]], [[MOC - Probability and Distributions]]

## Flashcards

How do Poisson and negative binomial models differ?
??
Poisson fixes variance = mean. Negative binomial has variance = μ + μ²/k, allowing overdispersion.
![[Overdispersion.png]]
++++

What happens to the negative binomial as k becomes very large?
??
It converges to the Poisson.
++++
