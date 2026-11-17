---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases: []
status: seedling
---

# Linear Model vs GLM

> [!summary] In plain words
> a linear model is the special case of a GLM with a normal distribution and identity link, and a GLM relaxes exactly those two choices so that counts, proportions and skewed positive data can be modeled honestly.

## The question
What stays the same and what changes when you move from `lm()` to `glm()`?

## Built from
- [[Linear Regression]]: normal errors, constant variance, mean = line.
- [[Generalized Linear Model]]: any exponential-family distribution, link(mean) = line.
- [[Mean-Variance Relationship]]: what the distribution choice controls.
- [[Maximum Likelihood Estimation]] and [[Least Squares]]: how each is fitted.

## The reasoning, step by step
1. **Same:** the linear predictor, the formula syntax, factors and interactions, the assumption of independence, the need for validation.
2. **Changed, distribution:** normal becomes Poisson, binomial, gamma or another.
3. **Changed, variance:** constant σ² becomes a function of the mean.
4. **Changed, link:** identity becomes log, logit or another.
5. **Changed, fitting:** least squares becomes maximum likelihood (they coincide for the normal).
6. **Changed, fit measure:** residual sum of squares becomes deviance. F and t tests become chi-square and z tests.
7. **Changed, interpretation:** additive effects in real units become effects on the link scale that must be back-transformed.

| | Linear model | GLM |
|---|---|---|
| Distribution | Normal | Poisson, binomial, gamma, ... |
| Link | Identity | Log, logit, ... |
| Variance | Constant | Depends on the mean |
| Fitting | Least squares | Maximum likelihood |
| Misfit | Residual sum of squares | Deviance |
| Coefficient | Change in mean | Change in link(mean) |

## So in practice
Start from the response. Continuous and roughly symmetric around its mean: linear model. Count, yes/no, proportion or positive and skewed: GLM with the matching family.

## What would go wrong otherwise
Forcing counts or 0/1 data through `lm()` gives impossible predictions, wrong standard errors and effects that depend on an arbitrary transformation.

## Explain it back
- List three things that change and two that don't.

*Pass test:* you can fill in the table from memory.

## Connections
- **Related:** [[Why GLMs need a link function]], [[Which assumption violation leads to which model]], [[Least Squares vs Maximum Likelihood]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How is a linear model a special case of a GLM?
??
It is the GLM with a normal distribution and identity link.
++++

Name three things that change from lm to glm.
??
The response distribution, the link function (and so coefficient interpretation), and the fit measure (deviance instead of RSS).
++++
