---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The standard error (SE) is the standard deviation of an *estimate*: how much your answer would wobble if you repeated the whole study with fresh samples."
aliases:
  - "SE"
  - "Std. Error"
  - "Standard error of the mean"
status: seedling
---

# Standard Error

Ask one random person their height and you might hear anything from 150 to 195 cm. Ask ten people and average their answers, and the average lands close to the true average height. Ask a different ten and you get a slightly different average, but not much different, because the tall and short people in each group partly cancel out. The [[Standard Deviation]] describes how much people differ; the **standard error** (SE) describes how much averages of ten people differ from one group of ten to the next. More generally, the SE is the standard deviation of an *estimate*: how much your answer would wobble if you repeated the whole study with fresh samples ([[Parameter vs Estimate]]). The spread of answers you would get over many repeats is called the *[[Sampling Distribution|sampling distribution]]*, and the SE is its standard deviation, a measure of the estimate's *precision* ([[Bias and Precision]]).

For a mean the formula is simple: SE = σ / √n, estimated by s / √n. Bird masses have an SD of 12 g. With 9 birds the SE of the mean is 12 / √9 = 4 g; with 36 birds, 12 / 6 = 2 g; with 144 birds, 1 g. The birds did not get less variable (the SD is still 12 g); you just pinned down their average better. Why the [[Square Root|square root]]? The variance of an average of n independent values is σ² / n, n times smaller than for one value, and taking the square root gives σ / √n. The consequence is diminishing returns: to halve the SE you need 4 times the data, and to cut it to a tenth, 100 times. In real life you only get one sample, and the SE tells you how much your one estimate would wobble without your having to repeat the study. A simulation confirms it: 5,000 repeated samples of 9 birds give means with an SD of about 4.

That formula assumes *independent* observations, each bringing brand-new information. If values are related, such as [[Repeat-Visit Design|repeated visits]] to one site or neighbouring sites, they bring less, and the true SE is larger than the formula says, which makes results look more certain than they are ([[Independence of Observations]], [[Why non-independence inflates false positives]]); [[Mixed Effects Model|mixed models]] exist largely to get the SE right for [[Hierarchical Data|grouped data]] ([[Why use a random effect instead of a fixed effect]]). Every [[Regression Coefficient|coefficient]] in a model summary has an SE in the "Std. Error" column, and it is the ruler you hold against an estimate: a slope of 0.3 with SE 0.05 is clearly positive, while 0.3 with SE 0.4 might well be zero. The SE feeds into each [[Confidence Interval]] and [[P-value]], and Powell and Gale equate a precise estimate with a small standard error ([[Powell and Gale 2015 Ch2]]). Bayesian models report the posterior SD instead ([[Posterior Distribution|Posterior]]). Three cautions: report the SD to describe the data and the SE to describe an estimate's precision, not whichever is smaller; the SE does not measure the spread of the data; and a small SE does not mean no bias, since a biased method can land all its guesses close together in the wrong place.

![[SD vs SE with sample size.png|700]]
*What to look at:* more data doesn't make birds less variable (the SD stays flat), but it does pin down the average (the SE falls).

```r
x <- c(18, 22, 25, 19, 21, 30, 17, 24, 20)
sd(x) / sqrt(length(x))          # SE of the mean by hand

# Check it by "repeating the study" 5000 times on simulated birds
set.seed(1)
many_means <- replicate(5000, mean(rnorm(9, mean = 20, sd = 12)))
sd(many_means)                   # about 4 = 12 / sqrt(9)

fit <- lm(dist ~ speed, data = cars)
summary(fit)$coefficients        # the "Std. Error" column: SE of each estimate
```

## Connections
- **Builds on:** [[Standard Deviation]], [[Parameter vs Estimate]], [[Square Root]]
- **Leads to:** [[Confidence Interval]], [[P-value]], [[Bias and Precision]], [[Pseudoreplication]], [[Sampling Distribution]], [[Repeat-Visit Design]], [[Mixed Effects Model]], [[Hierarchical Data]], [[Regression Coefficient]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]]

## Flashcards

What does the standard error measure?
??
How much an estimate would vary from sample to sample: the SD of its sampling distribution, a measure of precision.
![[SD vs SE with sample size.png]]
++++

If you collect 4 times as much data, what happens to the SD and to the SE?
??
The SD stays about the same; the SE halves (it scales with 1/√n).
![[SD vs SE with sample size.png]]
++++

Why do correlated observations make the usual SE too small?
??
σ/√n assumes each observation adds independent information; correlated observations add less, so the true uncertainty is larger.
++++
