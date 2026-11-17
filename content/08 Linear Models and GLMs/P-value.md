---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A p-value is the probability, calculated assuming the null hypothesis is true, of getting a test statistic at least as extreme as the one actually observed."
aliases:
  - "p-value"
  - "p value"
  - "Probability value"
  - "Pr(>|t|)"
status: seedling
---

# P-value

You suspect a coin is rigged and get 9 heads in 10 flips. You ask: "if this coin were fair, how often would I see something this lopsided or worse?" The answer, about 2% of the time, is the **p-value**: the probability, calculated assuming the [[Null Hypothesis]] is true, of getting a [[Test Statistic]] at least as extreme as the one actually observed. Assume H₀, find the distribution of the test statistic under it, mark where your observed value falls, and take the area in the tail or tails beyond it ([[Cumulative Distribution Function]]). The figure shades those tails.

For the coin, P(9 or 10 heads) = 0.0107, and counting the equally extreme results in the other direction, 0 or 1 heads, gives a two-sided p of 0.0215; the code below matches `binom.test()`. A small p means data like yours would be rare if H₀ were true, which is evidence against H₀. A large p means data like yours are unremarkable under H₀: no evidence against it, which is not evidence for it. The last lines of the code show that when H₀ is true, p-values are spread evenly between 0 and 1, so 5% fall below 0.05 by chance.

A p-value mixes effect size, noise and sample size, so a trivial effect in a huge sample gives a tiny p ([[Effect Size]]). And it assumes the whole model is right: violated independence can produce small p-values from nothing. What it is not: the probability that H₀ is true; the probability the result is "due to chance"; a measure of importance. p = 0.03 is P(data this extreme | H₀), not P(H₀ | data), and p = 0.6 means inconclusive, not "no effect" ([[Statistical Significance]], [[Significance Level]]). Anderson and Burnham list its misuses, and it violates the [[Likelihood Principle]] because it depends on data that were not observed ([[Anderson and Burnham 2002]], [[Zuur et al. 2009 Appendix A]], [[Harrison et al. 2018]]). An interval usually says more ([[Confidence Interval]]).

![[P-value tail area.png|700]]
*What to look at:* the shaded tails beyond the observed statistic. Their total area is the p-value.

```r
sum(dbinom(9:10, 10, 0.5)); binom.test(9, 10)$p.value
tval <- 2.3; 2 * pt(-abs(tval), df = 20)                    # p for t = 2.3 on 20 df
set.seed(4); p <- replicate(5000, t.test(rnorm(20))$p.value); mean(p < 0.05); hist(p)     # when H0 is true, p-values are uniform: 5% fall below 0.05
```

## Connections
- **Builds on:** [[Null Hypothesis]], [[Test Statistic]]
- **Leads to:** [[Statistical Significance]], [[Significance Level]], [[Effect Size]], [[Confidence Interval]], [[Likelihood Principle]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[What a p-value does and does not tell you]]

## Flashcards

Define a p-value.
??
The probability, assuming the null hypothesis is true, of a test statistic at least as extreme as the one observed.
![[P-value tail area.png]]
++++

Is the p-value the probability that the null hypothesis is true?
??
No.
++++

What three things jointly determine a p-value?
??
Effect size, variability and sample size.
++++
