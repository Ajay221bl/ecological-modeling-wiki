---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Gelfand-Ghosh criterion"
  - "D criterion"
  - "Posterior predictive loss criterion"
  - "G + P"
status: seedling
---

# Posterior Predictive Loss

**In one line:** posterior predictive loss scores a Bayesian model by how close its replicated data come to the observed data (G) plus how variable those replicates are (P), with smaller totals better.

> [!info] Before this, it helps to know
> [[Posterior Predictive Distribution]] (where replicates come from) · [[Bias-Variance Trade-off]] (the two terms)

## Start from zero
1. **For each observation simulate replicates y_rep from the posterior predictive.**
2. **G = Σ (yᵢ − mean of y_rep,i)²:** goodness of fit.
3. **P = Σ var(y_rep,i):** predictive spread, which acts as a penalty.
4. **D = G + P.** Smaller is better.
5. **Overfitted models** have small G but large P. Underfitted models have large G.
6. **From Gelfand and Ghosh (1998).** Discussed in Hobbs and Hooten among Bayesian criteria. Less used today than LOO.

## In R
```r
set.seed(9); y <- rpois(50, 4); lam <- rgamma(3000, sum(y) + 0.01, 50.01)
yrep <- sapply(lam, function(l) rpois(50, l)); G <- sum((y - rowMeans(yrep))^2); P <- sum(apply(yrep, 1, var)); c(G = G, P = P, D = G + P)
```

## In the course
[[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"P measures posterior uncertainty in parameters."** It measures predictive spread, which includes sampling variation.

## Explain it back
- What do G and P each measure?

*Pass test:* you can compute D from replicates.

## Connections
- **Builds on:** [[Posterior Predictive Distribution]], [[Bias-Variance Trade-off]]
- **Leads to:** [[WAIC]], [[Mean Square Prediction Error]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What are the two terms of posterior predictive loss?
??
G, the squared distance between data and replicate means, and P, the variance of the replicates.
++++
