---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - bayes
aliases: []
status: seedling
---

# Proper vs Improper Prior

> [!summary] In plain words
> a proper prior integrates to 1 and always yields a valid posterior, whereas an improper prior has infinite area and gives a valid posterior only if the data are informative enough.

## The question
Does it matter whether my prior is a real probability distribution?

## Built from
- [[Proper Prior]]: finite area.
- [[Improper Prior]]: infinite area.
- [[Vague Prior]] and [[Jeffreys Prior]]: where improper priors come from.
- [[Posterior Distribution]]: what must end up proper.

## The reasoning, step by step
1. A prior is supposed to be a probability distribution, so its total area should be 1.
2. "Flat over all real numbers" has infinite area. It is improper.
3. Multiply by a likelihood. If the product has finite area, the posterior is fine.
4. If the likelihood can't pin the parameter down, the product stays infinite. There is no posterior, although software may still print numbers.
5. The classic trap: an improper prior on a group-level variance.
6. Proper priors remove the risk, allow prior predictive simulation and allow Bayes factors.
7. A proper but absurdly wide prior behaves almost as badly in practice. Proper and sensible is the goal.

| | Proper | Improper |
|---|---|---|
| Area | 1 | Infinite |
| Posterior guaranteed valid | Yes | No |
| Can simulate from it | Yes | No |
| Example | Normal(0, 2) | Flat on (−∞, ∞) |

## So in practice
Give every parameter an explicit proper prior. In brms that means setting `class = "b"` yourself, since its default is flat.

## What would go wrong otherwise
An improper posterior produces chains that drift without settling, or worse, chains that look fine and mean nothing.

## Explain it back
- Why can an improper prior still give a usable posterior sometimes?

*Pass test:* you can classify a prior and state the risk.

## Connections
- **Related:** [[How to choose a prior]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Bayesian Inference]]

## Flashcards

Why are proper priors safer than improper ones?
??
They guarantee a proper posterior and allow simulation from the prior.
++++
