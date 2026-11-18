---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A parameter is identifiable when the data can tell different values of it apart, and non-identifiable when different combinations of parameters fit the data equally well."
aliases:
  - "Identifiable"
  - "Non-identifiability"
  - "Unidentifiable parameters"
  - "Identifiable parameters"
  - "Weak identifiability"
status: seedling
---

# Identifiability

"Two numbers multiply to 12. What are they?" 3 and 4, 2 and 6, 1 and 12: no amount of staring at the 12 will tell you. A parameter is **identifiable** when the data can tell different values of it apart, and non-identifiable when different combinations of parameters fit the data equally well ([[Parameter]], [[Likelihood Function]]). With one count per site, y ~ Binomial(N, p), a count of 20 could be N = 40 with p = 0.5 or N = 100 with p = 0.2; only the product N × p is identified, and [[Repeat-Visit Design|repeat visits]] break the tie ([[Detection Probability]]).

An identifiable parameter has a likelihood with a single clear peak; a non-identifiable one has a ridge or [[Asymptote|plateau]]. Causes include parameters that enter only as a product or sum, more parameters than the design can separate, no variation in a [[Predictor Variable|predictor]] ([[Collinearity]] is a mild form), and process and [[Observation Error|observation variance]] with no replication ([[Separating Process and Observation Variance]]). In the code below, pairs from N = 40 with p = 0.5 to N = 200 with p = 0.1 give a count of 20 probabilities between 0.13 and 0.09, and even with five counts the profile [[Log-likelihood|log-likelihood]] over N changes by less than a third of a unit. Symptoms in [[Maximum Likelihood Estimation|maximum likelihood]] are failure to converge, huge standard errors and estimates on a boundary; in Bayes the posterior looks like the prior, chains mix poorly and parameters are strongly correlated in the posterior.

Remedies are better design such as replication and repeat visits, [[Informative Prior|informative priors]] from other studies, a simpler model or reparameterising. Check by [[Simulating Data]] from known values and seeing whether the model recovers them, and use a [[Prior Sensitivity Analysis]] to see how much the prior is doing ([[Hobbs and Hooten 2015 Ch6]]). More iterations will not fix it: non-identifiability is a property of model plus data, and computing longer adds no information.

```r
N <- seq(40, 200, 20); p <- 20 / N; round(dbinom(20, N, p), 3)            # very different (N, p) pairs give the data similar probability
set.seed(11); y <- rbinom(5, 60, 0.3); ll <- sapply(N, function(n) max(sapply(seq(.01, .99, .01), function(pp) sum(dbinom(y, n, pp, log = TRUE)))))
round(ll - max(ll), 2)                                                    # even with 5 counts the profile over N is nearly flat
```

## Connections
- **Builds on:** [[Likelihood Function]], [[Collinearity]], [[Asymptote]], [[Predictor Variable]], [[Observation Error]], [[Log-likelihood]], [[Maximum Likelihood Estimation]], [[Informative Prior]]
- **Leads to:** [[Detection Probability]], [[Prior Sensitivity Analysis]], [[Simulating Data]], [[Separating Process and Observation Variance]], [[Repeat-Visit Design]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What does it mean for a parameter to be non-identifiable?
??
Different values (or combinations) fit the data equally well, so the data cannot determine it.
++++

What is a Bayesian symptom of non-identifiability?
??
The posterior for that parameter closely resembles its prior, often with poor mixing.
++++
