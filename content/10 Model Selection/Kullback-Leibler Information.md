---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Kullback-Leibler information measures how much information is lost when one probability distribution (a model) is used to approximate another (the truth)."
aliases:
  - "Kullback-Leibler divergence"
  - "KL divergence"
  - "K-L information"
  - "Kullback-Leibler distance"
  - "Relative entropy"
status: seedling
---

# Kullback-Leibler Information

A weather forecaster's average surprise is small if the forecast matches the real climate and grows the more the forecast differs. **Kullback-Leibler information** counts that extra surprise: it measures how much information is lost when one [[Probability Distribution]], a model g, is used to approximate another, the truth f. KL(f, g) = Σ [[Functions in Maths|f(x)]] log[f(x)/g(x)], an integral for continuous x ([[Logarithm]], [[Expected Value]]). If a coin truly lands heads 50% of the time and model A says 60%, KL = 0.5 log(0.5/0.6) + 0.5 log(0.5/0.4) = 0.020; model B, saying 90%, gives 0.511, losing 25 times more information.

It is zero only if g equals f and otherwise positive. It isn't symmetric, KL(f, g) ≠ KL(g, f), so it isn't a true distance: in the code below KL from the fair coin to model B is 0.51 but from B to the fair coin 0.37. Splitting it as Σ f log f − Σ f log g, the first term depends only on the truth and is the same for every model, so comparing models needs only the second, the expected [[Log-likelihood|log-likelihood]] of the model under the truth.

The data estimate that term, biased upward because the model was fitted to the same data, by about K, the [[Number of Parameters|number of parameters]]. Correcting for that bias and multiplying by −2 gives [[AIC]], which is how [[Anderson and Burnham 2002]] introduce it ([[Information Theory]], [[Full Reality]]). KL is not a distance like any other: it is asymmetric and violates the triangle inequality.

```r
kl <- function(f, g) sum(f * log(f / g)); f <- c(0.5, 0.5)
c(A = kl(f, c(0.6, 0.4)), B = kl(f, c(0.9, 0.1)), reversed_B = kl(c(0.9, 0.1), f))
```

## Connections
- **Builds on:** [[Probability Distribution]], [[Logarithm]], [[Expected Value]], [[Functions in Maths]], [[Log-likelihood]], [[Number of Parameters]]
- **Leads to:** [[AIC]], [[Information Theory]], [[Full Reality]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What does Kullback-Leibler information measure?
??
The information lost when a model distribution g is used to approximate the true distribution f.
++++

Is Kullback-Leibler divergence symmetric?
??
No. KL(f, g) generally differs from KL(g, f).
++++
