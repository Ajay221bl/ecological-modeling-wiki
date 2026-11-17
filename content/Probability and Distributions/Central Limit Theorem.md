---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "CLT"
status: seedling
---

# Central Limit Theorem

**In one line:** the central limit theorem says that the average (or sum) of many independent random quantities has a distribution close to normal, whatever distribution the individual quantities have.

> [!info] Before this, it helps to know
> [[Mean]] (what becomes normal) · [[Normal Distribution]] (the limit) · [[Standard Error]] (its width)

## The everyday picture
A board of pegs with balls dropped from the top (a Galton board). Each peg knocks a ball left or right at random. Any single bounce is a coin flip. But the pile at the bottom, the sum of many bounces, forms a bell shape every time.

## Start from zero
1. **Take a sample of n independent values from any distribution** with a finite variance.
2. **Compute its mean.**
3. **Imagine repeating that many times.**
4. **The means form a distribution that is approximately Normal(μ, σ²/n).**
5. **The approximation improves as n grows.** Skewed originals need larger n.
6. **Why the bell shape appears:** there are many ways for highs and lows to cancel into a middling average, and few ways for all values to be extreme in the same direction.
7. **Why it matters, 1:** it justifies normal-based confidence intervals and tests for means and regression coefficients even when the data aren't normal.
8. **Why it matters, 2:** it explains why the normal distribution is so common in nature. A trait that is the sum of many small independent influences will be roughly normal.

## See it
![[Central limit theorem.png|700]]
*What to look at:* the raw data are strongly skewed, yet the means of samples of 30 are nearly a bell.

## In R
```r
set.seed(15)
means <- replicate(10000, mean(rexp(30, rate = 1)))    # exponential data: very skewed, mean 1, SD 1
c(mean(means), sd(means), 1 / sqrt(30))                # SD of the means matches sigma / sqrt(n) = 0.183
hist(means, breaks = 50)                               # bell shaped
mean(abs(means - 1) < 1.96 / sqrt(30))                 # about 95% within 1.96 SE
```

## In the course
Invoked in [[Zuur et al. 2009 Ch2]] and [[Hobbs and Hooten 2015 Ch3]] to explain the normal's central role.

## Common confusions
- **"With n above 30 the data become normal."** The data keep their shape. The distribution of the sample mean becomes normal.
- **"It rescues any analysis."** It concerns means of independent values. It does not fix dependence or bias.

## Explain it back
- What becomes normal according to the theorem?

*Pass test:* you can simulate the theorem and state what it does and doesn't say.

## Connections
- **Builds on:** [[Mean]], [[Normal Distribution]]
- **Leads to:** [[Sampling Distribution]], [[Standard Error]], [[Confidence Interval]], [[Law of Large Numbers]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What does the central limit theorem state?
??
The mean of many independent observations is approximately normally distributed, regardless of the observations' own distribution.
![[Central limit theorem.png]]
++++

What are the mean and variance of that approximate normal?
??
Mean μ and variance σ²/n.
++++

What common misreading of the CLT should be avoided?
??
That large samples make the data themselves normal.
++++
