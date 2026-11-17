---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases:
  - "When to use a random effect"
status: seedling
---

# Why use a random effect instead of a fixed effect

> [!summary] In plain words
> random effects are worth it when groups are a sample from a larger population, when you need honest uncertainty for grouped data, when some groups have little data, or when you want to predict for new groups.

## The everyday picture
Twenty fishing spots. Treat each as unique and you learn twenty separate facts, three of them from a single afternoon. Treat them as samples of "spots in this lake" and you learn about fishing in the lake, with sensible guesses even for the spots you barely tried.

## The question
My data have sites. Why not just add site as a factor?

## Built from
- [[Random Effect]] and [[Fixed Effect]].
- [[Pseudoreplication]]: what grouping causes.
- [[Partial Pooling]]: the gain for small groups.
- [[Variance Components]]: a result in itself.
- [[How Many Levels for a Random Effect]]: the limit.

## The reasoning, step by step
1. **Generalisation:** inference about sites in general, not just these 20.
2. **Honest SEs for site-level predictors:** a site-level variable (soil type) can't be estimated alongside a fixed site factor at all; it is confounded. With a random site effect it can, with the right uncertainty.
3. **Efficiency:** one variance instead of J − 1 coefficients.
4. **Partial pooling:** better estimates for poorly sampled sites.
5. **Variance itself is informative:** how much do sites differ?
6. **Prediction for new sites.**
7. **When fixed is better:** few levels that are the whole population of interest (two sexes), or a singular random fit (Oberpriller et al.).

**A worked example in numbers.** in the nested-design simulation, ignoring the pond grouping gave p = 0.004 for a fertiliser effect that didn't exist; the mixed model with a pond random effect gave p = 0.46.

## So in practice
Draw the design, mark the units that were sampled repeatedly, and make those random intercepts unless there's a reason not to.

## What would go wrong otherwise
Adding a site fixed effect and then trying to test a site-level covariate: the two are perfectly confounded.

## Explain it back
- Why can't a site-level covariate be estimated alongside a fixed site factor?

*Pass test:* you can argue for a random effect in your study.

## Connections
- **Related:** [[Fixed vs Random Effects]], [[Why non-independence inflates false positives]], [[Complete, No and Partial Pooling]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Mixed Models]]

## Flashcards

Why can't a fixed site factor and a site-level covariate both be estimated?
??
The covariate is constant within sites, so it is perfectly confounded with the site factor.
++++

Give three reasons to use a random effect for site.
??
Generalise to other sites; honest SEs and estimable site-level predictors; partial pooling for poorly sampled sites (also: variance estimate, prediction for new sites).
++++
