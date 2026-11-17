---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "p-value"
  - "p value"
  - "Probability value"
  - "Pr(>|t|)"
status: seedling
---

# P-value

**In one line:** a p-value is the probability, calculated assuming the null hypothesis is true, of getting a test statistic at least as extreme as the one actually observed.

> [!info] Before this, it helps to know
> [[Null Hypothesis]] (assumed true) · [[Test Statistic]] (what is measured) · [[Cumulative Distribution Function]] (the tail area)

## The everyday picture
Flipping a coin you suspect is rigged. You get 9 heads in 10. You ask: "if this coin were fair, how often would I see something this lopsided or worse?" About 2% of the time. That 2% is the p-value. It is a measure of how surprised a fair-coin believer should be.

## A tiny example
9 heads in 10 flips, H₀: fair coin.
- P(9 or 10 heads) = 0.0107.
- Two-sided (also 0 or 1 heads): 0.0215.

## Start from zero
1. **Assume H₀.**
2. **Find the distribution of the test statistic under H₀.**
3. **Mark where your observed statistic falls.**
4. **p = the area in the tail(s) beyond it.**
5. **Small p:** data like yours would be rare if H₀ were true. Evidence against H₀.
6. **Large p:** data like yours are unremarkable under H₀. No evidence against it, which is not evidence for it.
7. **It depends on effect size, noise and sample size together.** A trivial effect in a huge sample gives a tiny p.
8. **What it is not:** the probability that H₀ is true. The probability the result is due to chance. A measure of effect size.
9. **It assumes the whole model is right.** Violated independence can produce small p-values from nothing.

## See it
![[P-value tail area.png|700]]
*What to look at:* the shaded tails beyond the observed statistic. Their total area is the p-value.

## In R
```r
sum(dbinom(9:10, 10, 0.5)); binom.test(9, 10)$p.value
tval <- 2.3; 2 * pt(-abs(tval), df = 20)                    # p for t = 2.3 on 20 df
set.seed(4); p <- replicate(5000, t.test(rnorm(20))$p.value); mean(p < 0.05); hist(p)     # when H0 is true, p-values are uniform: 5% fall below 0.05
```

## In the course
[[Anderson and Burnham 2002]] list its misuse. [[Zuur et al. 2009 Appendix A]] and [[Harrison et al. 2018]] discuss it for regression and mixed models.

## Common confusions
- **"p = 0.03 means a 3% chance the null is true."** It is P(data this extreme | H₀), not P(H₀ | data).
- **"p = 0.6 means no effect."** It means inconclusive.
- **"p measures importance."** It doesn't measure size.

## Explain it back
- Complete: "the p-value is the probability of ___, assuming ___."
- Why are p-values uniformly distributed when the null is true?

*Pass test:* you can define a p-value exactly and name three misreadings.

## Connections
- **Builds on:** [[Null Hypothesis]], [[Test Statistic]]
- **Leads to:** [[Statistical Significance]], [[Significance Level]], [[Effect Size]], [[Confidence Interval]], [[Likelihood Principle]]
- **Part of:** [[MOC - Likelihood and Estimation]], molecular note [[What a p-value does and does not tell you]]

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
