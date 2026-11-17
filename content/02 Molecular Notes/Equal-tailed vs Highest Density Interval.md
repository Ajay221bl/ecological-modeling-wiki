---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - bayes
aliases: []
status: seedling
---

# Equal-tailed vs Highest Density Interval

> [!summary] In plain words
> both are 95% credible intervals, but the equal-tailed interval cuts 2.5% from each end while the highest density interval is the narrowest stretch holding 95%, and they differ only when the posterior is skewed.

## The question
Which credible interval should I report?

## Built from
- [[Credible Interval]]: the family.
- [[Equal-tailed Interval]]: quantile-based.
- [[Highest Posterior Density Interval]]: density-based.

## See it
![[Credible intervals.png|700]]
*What to look at:* on the skewed curve the highest density interval hugs the peak and the equal-tailed interval reaches further into the tail.

## The reasoning, step by step
1. Symmetric posterior: the two are identical. Report either.
2. Skewed posterior: the HPDI is shorter and contains the mode. The ETI may exclude the mode.
3. Transformations: the ETI transforms with the parameter. The HPDI must be recomputed and changes.
4. Estimation noise: ETI endpoints are stable. HPDI endpoints need more draws.
5. Convention: most software and papers report the ETI.

| | Equal-tailed | Highest density |
|---|---|---|
| Rule | 2.5% in each tail | Narrowest 95% |
| Always contains the mode | No | Yes |
| Invariant to transformation | Yes | No |
| Default in brms | Yes | No |

**A worked example in numbers.** for an Exponential(1) posterior the ETI is 0.025 to 3.69 and the HPDI is 0 to 3.00.

## So in practice
Default to the ETI. Use the HPDI for strongly skewed or bounded posteriors where leaving out the most probable values would mislead, and say which you used.

## What would go wrong otherwise
Mixing the two in one table, or back-transforming HPDI endpoints.

## Explain it back
- Which interval survives a log transformation unchanged?

*Pass test:* you can choose and justify an interval type.

## Connections
- **Related:** [[Confidence vs Credible Interval]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Bayesian Inference]]

## Flashcards

When do equal-tailed and highest density intervals differ?
??
When the posterior is skewed (or multimodal).
![[Credible intervals.png]]
++++
