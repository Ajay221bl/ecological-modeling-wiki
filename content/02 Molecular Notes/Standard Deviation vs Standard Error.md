---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "SD vs SE"
  - "Spread of data vs precision of an estimate"
status: seedling
---

# Standard Deviation vs Standard Error

> [!summary] In plain words
> the standard deviation describes how spread out individual observations are, while the standard error describes how much an estimate such as the mean would vary from sample to sample; SE of the mean = SD / √n, so it shrinks with more data while the SD does not.

## The question
Should I report the SD or the SE?

## Built from
- [[Standard Deviation]] and [[Standard Error]].
- [[Sampling Distribution]].
- [[Sample Size]].

## The reasoning, step by step
1. **SD answers:** how different are individual birds?
2. **SE answers:** how sure am I about the average?
3. **SE = SD / √n** for a mean; four times the data halves the SE.
4. **SD does not shrink with n;** it estimates a property of the population.
5. **Confidence intervals use SE** (mean ± about 2 SE); describing variation uses SD.
Thirty birds with mean mass 30 g, SD 4 g: SE = 4 / √30 = 0.73 g. Most birds are 22 to 38 g; the mean is probably 28.5 to 31.5 g.

## So in practice
Use SD to describe data, SE or CIs to describe estimates, and always say which one an error bar shows.

## In R
```r
set.seed(3); x <- rnorm(30, 30, 4)
round(c(SD = sd(x), SE = sd(x) / sqrt(length(x))), 2)
```

## What would go wrong otherwise
Showing SE bars to make data look less variable than they are.

## Explain it back
- Which one shrinks as you collect more data?

*Pass test:* you can choose and label the right one.

## Connections
- **Related:** [[Why the variance divides by n minus 1]], [[Prediction vs Confidence Interval]], [[Bias and Precision]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Basics from Zero]], [[MOC - Likelihood and Estimation]]

## Flashcards

SD vs SE?
??
SD: spread of observations. SE: spread of an estimate across samples; SE = SD/√n for a mean.
++++

Which shrinks with sample size?
??
The SE.
++++
