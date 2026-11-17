---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "SE"
  - "Std. Error"
  - "Standard error of the mean"
status: seedling
---

# Standard Error

**In one line:** the standard error (SE) is the standard deviation of an *estimate*: how much your answer would wobble if you repeated the whole study with fresh samples.

> [!info] Before this, it helps to know
> [[Standard Deviation]] (spread of individual values) · [[Parameter vs Estimate]] (estimates vary from sample to sample)

## The everyday picture
Ask one random person how tall they are and you might get anything from 150 to 195 cm. Now ask ten random people and average their answers. That average will land somewhere close to the true average height, almost always within a few centimetres. Ask a different ten, average again, and you'll get a slightly different number, but not *much* different.

The SD describes how much **people** differ. The SE describes how much **averages of ten people** differ from one group of ten to the next. Averages wobble much less than individuals, because the tall and short people in each group partly cancel out.

*Where the picture stops working:* in real life you only ever get one group of ten. The SE tells you how much your one average *would* wobble, without your having to repeat the study.

## Words you'll need
- **Estimate:** a number calculated from a sample as a guess at a parameter ([[Parameter vs Estimate]]).
- **Sampling distribution:** the spread of estimates you'd get if you repeated the study many times.
- **Standard error (SE):** the standard deviation of that sampling distribution; how precise the estimate is.
- **Precision:** how close repeated estimates are to each other ([[Bias and Precision]]).
- **Independent observations:** each one brings new information, unaffected by the others ([[Independence of Observations]]).
- **√n:** the square root of the sample size.

## A tiny example
Bird masses have SD s = 12 g.
- Sample 9 birds: SE of the mean = 12 / √9 = 12 / 3 = **4 g**.
- Sample 36 birds: SE = 12 / √36 = 12 / 6 = **2 g**.
- Sample 144 birds: SE = 12 / 12 = **1 g**.

Four times as many birds halves the SE. The birds didn't get less variable (the SD is still 12 g); you just pinned down their *average* better.

## Start from zero
1. **Take a sample and compute its mean.** Take another sample and the mean comes out a little different ([[Parameter vs Estimate]]).
2. **Imagine doing this thousands of times.** The means would form their own spread: the *sampling distribution*.
3. **The SD of that spread is the standard error.** It measures the precision of the estimate, not the spread of the data.
4. **Averages vary less than individual values.** *Why:* in an average, high and low values partly cancel. Mathematically, the variance of a mean of n independent values is σ²/n: n times less than for one value.
5. **Take the square root:** $SE = \sigma/\sqrt{n}$, estimated as $s/\sqrt{n}$. Read it: "the SD divided by the square root of n". *Consequence:* the square root means returns shrink. To halve the SE you need 4 times the data; to cut it to a tenth, 100 times.
6. **That formula needs independent observations.** *Why:* the σ²/n result assumes every value brings brand-new information. If values are related (repeated visits to one site, neighbouring sites), they bring less, and the real SE is *larger* than the formula says ([[Independence of Observations]], [[Why non-independence inflates false positives]]).
7. **Every coefficient in a model output has an SE.** It's the "Std. Error" column in `summary()`, and it feeds into [[Confidence Interval|confidence intervals]] and [[P-value|p-values]].

## See it
![[SD vs SE with sample size.png|700]]
*What to look at:* more data doesn't make birds less variable (the SD stays flat), but it does pin down the average (the SE falls).

## Why it is this way
An estimate on its own can't be judged. A slope of 0.3 with SE 0.05 is clearly positive: the wobble is small compared with the distance from zero. A slope of 0.3 with SE 0.4 might well be zero. The SE is the ruler you hold up against an estimate to ask "is this bigger than the noise?". Powell and Gale equate a precise estimate with "a small standard error, or a narrow 95% confidence interval" ([[Powell and Gale 2015 Ch2]], p. 16).

## In R
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

## In the course
The SE is the frequentist measure of uncertainty, and Bayesian models report the posterior SD instead ([[Posterior Distribution|Posterior]]). Mixed models exist largely to get the SE right when observations are grouped ([[Why use a random effect instead of a fixed effect]]).

## Common confusions
- **"Report the SE because it's smaller."** Report what answers your question: SD to describe the data, SE (or a CI) to describe how precise an estimate is.
- **"SE measures the data's spread."** It measures the estimate's precision.
- **"A small SE means no bias."** A biased method can be very precise: every guess lands close together, all in the wrong place ([[Bias and Precision]]).

## Explain it back
- Explain the difference between SD and SE using people's heights.
- Why do averages wobble less than individual values?
- How much more data do you need to halve the SE, and why?
- Why does the usual SE formula go wrong when observations aren't independent?

*Pass test:* you can say, for any "Std. Error" in R output, what would have to be repeated for that wobble to show up.

## Connections
- **Builds on:** [[Standard Deviation]], [[Parameter vs Estimate]]
- **Leads to:** [[Confidence Interval]], [[P-value]], [[Bias and Precision]], [[Pseudoreplication]]
- **Part of:** [[MOC - Basics from Zero]]
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
