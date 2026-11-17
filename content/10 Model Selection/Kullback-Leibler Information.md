---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Kullback-Leibler divergence"
  - "KL divergence"
  - "K-L information"
  - "Kullback-Leibler distance"
  - "Relative entropy"
status: seedling
---

# Kullback-Leibler Information

**In one line:** Kullback-Leibler information measures how much information is lost when one probability distribution (a model) is used to approximate another (the truth).

> [!info] Before this, it helps to know
> [[Probability Distribution]] (what is compared) · [[Logarithm]] (in the formula) · [[Expected Value]] (it is an average)

## The everyday picture
A weather forecaster's average surprise. If the forecast distribution matches the real climate, outcomes are rarely surprising. The more the forecast differs, the more surprise per day on average, and KL counts the extra surprise.

## A tiny example
Truth: a coin lands heads 50% of the time. Model A says 60%, model B says 90%.
- KL(truth, A) = 0.5 log(0.5/0.6) + 0.5 log(0.5/0.4) = 0.020.
- KL(truth, B) = 0.5 log(0.5/0.9) + 0.5 log(0.5/0.1) = 0.511.
B loses 25 times more information.

## Start from zero
1. **KL(f, g) = Σ f(x) log[f(x)/g(x)]** (an integral for continuous x), with f the truth and g the model.
2. **It is zero only if g equals f.** Otherwise positive.
3. **It isn't symmetric:** KL(f, g) ≠ KL(g, f). So it isn't a true distance.
4. **Split it:** Σ f log f − Σ f log g. The first term depends only on the truth and is the same for every model.
5. **So comparing models only needs the second term:** the expected log-likelihood of the model under the truth.
6. **The data provide an estimate of that,** biased upward because the model was fitted to the same data. The bias is about K, the number of parameters.
7. **Correcting for that bias and multiplying by −2 gives AIC.**

## In R
```r
kl <- function(f, g) sum(f * log(f / g)); f <- c(0.5, 0.5)
c(A = kl(f, c(0.6, 0.4)), B = kl(f, c(0.9, 0.1)), reversed_B = kl(c(0.9, 0.1), f))
```

## In the course
[[Anderson and Burnham 2002]] introduce AIC through it.

## Common confusions
- **"KL is a distance like any other."** It is asymmetric and violates the triangle inequality.

## Explain it back
- Why does the truth-only term drop out when comparing models?

*Pass test:* you can compute KL for two discrete distributions.

## Connections
- **Builds on:** [[Probability Distribution]], [[Logarithm]], [[Expected Value]]
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
