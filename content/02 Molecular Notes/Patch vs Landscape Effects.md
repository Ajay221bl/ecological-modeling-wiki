---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases:
  - "Local vs landscape effects"
  - "Patch versus landscape"
  - "Patch or landscape"
  - "Local vs landscape covariates"
status: seedling
---

# Patch vs Landscape Effects

> [!summary] In plain words
> to ask whether a species responds more to the patch it lives in or to the landscape around it, build competing models with only patch variables, only landscape variables at their best scale, and both, and compare them.

## The question
How do I test whether a species responds to its own patch or to the landscape around it?

## Built from
- [[Habitat Patch]]: patch-level ("local") variables such as area and perimeter.
- [[Landscape Metrics]] and [[Spatial Scale]]: variables measured in a buffer around the patch.
- [[Scale of Effect]]: choosing the buffer radius before the main comparison.
- [[Collinearity]]: why some variables cannot sit in the same model.
- [[Candidate Model Set]], [[Model Ranking Tables]], [[Akaike Weight|Akaike Weights]]: turning hypotheses into models and comparing them.

## The reasoning, step by step
1. **Write the two ideas as hypotheses.** Patch hypothesis: occurrence depends on what is inside the patch, such as its area (more territories) and perimeter (more edge). Landscape hypothesis: occurrence depends on the surroundings, such as how much woodland there is nearby and how fragmented it is, because birds move between patches.
2. **Check correlations first.** Patch area and landscape woodland area are often correlated, because big patches make the landscape around them woodier. In the Mt Lofty data PA and TLA2K correlate at 0.50, and LSI at 2, 5 and 10 km correlate at 0.66 to 0.83. Pairs above about 0.6 to 0.7 should not share a model ([[Variance Inflation Factor]], [[Pairplot]]).
3. **Pick each landscape variable's scale.** Fit the variable alone at each radius and keep the best one ([[Scale of Effect]]).
4. **Build the set.** A null model; a patch-only model; one or two landscape-only models at the chosen scale; a patch + landscape model; perhaps a model with rainfall as a climate baseline. Each one is a sentence you could defend before seeing the results ([[Why build the candidate model set before seeing the data]]).
5. **Compare.** Rank them with AIC, or LOO or WAIC for Bayesian fits, and look at weights. If patch-only models hold most of the weight, local habitat explains occurrence; if landscape models do, the surroundings matter; if the combined model wins clearly, both do.
6. **Check the effect sizes.** A winning model whose slopes have intervals overlapping zero is a weak win. Report the direction and size of each effect with its interval, not just the ranking ([[Statistical vs Biological Significance]]).

**A worked example in numbers.** Suppose the weights come out null 0.01, patch 0.12, landscape 0.55, patch + landscape 0.32. Landscape models together hold 0.55 + 0.32 = 0.87 of the weight and patch models 0.12 + 0.32 = 0.44 (the combined model counts for both). The evidence ratio of landscape-only over patch-only is 0.55 / 0.12 = 4.6: the landscape explanation is about 4.6 times better supported.

## So in practice
Decide the scales and the candidate set before looking at which variables "work", keep correlated variables apart, and read the weights by hypothesis (summing models that share an idea) as well as by model.

## In R
```r
set.seed(6); n <- 68
PA <- rlnorm(n, 3, 0.8); TLA <- 0.5 * scale(log(PA))[, 1] + rnorm(n)          # landscape woodland, correlated with patch area
y <- rbinom(n, 1, plogis(-0.2 + 1.2 * TLA))                                    # truth: landscape matters (models with TLA share the weight)
d <- data.frame(y, PA_s = scale(log(PA))[, 1], TLA_s = scale(TLA)[, 1])
ms <- list(null = glm(y ~ 1, binomial, d), patch = glm(y ~ PA_s, binomial, d),
           landscape = glm(y ~ TLA_s, binomial, d), both = glm(y ~ PA_s + TLA_s, binomial, d))
aic <- sapply(ms, AIC); dl <- aic - min(aic); w <- exp(-dl / 2) / sum(exp(-dl / 2))
round(rbind(AIC = aic, delta = dl, weight = w), 2); round(cor(d$PA_s, d$TLA_s), 2)
```

## What would go wrong otherwise
Putting PA, TLA2K, TLA5K and TLA10K in one big model: the correlated terms split the signal, their standard errors balloon, and you can conclude that nothing matters when everything does.

## Explain it back
- Why must the scale be chosen before the patch vs landscape comparison?
- How would you read a result where patch + landscape holds 90% of the weight?

*Pass test:* you can design a candidate set that pits patch against landscape explanations and read the model weights as evidence for each.

## Connections
- **Related:** [[Scale of Effect]], [[Habitat Patch]], [[Homework 3 - Woodland Birds and Landscape Scale]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection]], [[MOC 22 - Homework|MOC - Homework]]

## Flashcards

Why check correlations before building patch vs landscape models?
??
Patch and landscape variables are often correlated, and correlated variables in one model split the signal and inflate standard errors.
++++

How do you weigh evidence for the landscape idea across several models?
??
Sum the weights of every model containing landscape variables.
++++
