---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Bayesian GAM"
  - "brms smooths"
  - "s() in brms"
  - "jagam()"
status: seedling
---

# Bayesian GAMs

**In one line:** Bayesian GAMs treat the penalised parts of smooths as random effects with priors, so the posterior gives full uncertainty for every curve and derived quantity.

> [!info] Before this, it helps to know
> [[Generalized Additive Model]] · [[Bayesian GLMM]] · [[REML for Smoothness Selection]] (the same mixed-model view)

## Start from zero
1. **brms accepts mgcv smooth syntax:** `brm(y ~ s(x) + (1 | site), ...)`.
2. **Behind the scenes** each smooth is split into an unpenalised fixed part and a penalised random part whose SD (`sds_sx_1`) has a prior.
3. **`jagam()`** in mgcv writes JAGS code for a GAM.
4. **Advantages:** uncertainty in smoothing parameters is included; posterior draws of curves make derivatives and differences easy.
5. **Costs:** slower; divergent transitions are common with wiggly smooths; raise adapt_delta.

## In R
```r
# norun (brms fit, shown for syntax)
fit <- brm(count ~ s(tree_cover) + (1 | site), family = poisson(), data = quail, control = list(adapt_delta = 0.95), chains = 4, cores = 4)
conditional_effects(fit, "tree_cover"); summary(fit)$splines
```

## In the course
Not covered in the in-scope labs. Connects the GAM unit with Bayesian mixed models.

## Common confusions
- **"A Bayesian GAM needs a prior on λ directly."** It needs a prior on the SD of the penalised part.

## Explain it back
- What does sds_sx_1 represent in brms output?

*Pass test:* you can write a smooth in brms.

## Connections
- **Builds on:** [[Generalized Additive Model]], [[Bayesian GLMM]], [[REML for Smoothness Selection]]
- **Leads to:** [[brm()]], [[adapt_delta and Sampler Settings]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

How does brms represent a smooth term?
??
As an unpenalised fixed part plus a penalised random part whose standard deviation gets a prior.
++++
