---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Average"
  - "Sample mean"
  - "x-bar"
status: seedling
---

# Mean

**In one line:** the mean is the "fair share" value: add all the values up and share the total out equally, one share per value.

> [!info] Before this, it helps to know
> [[Summation Notation]] (the Σ in the formula) · [[Parameter vs Estimate]] (the sample mean estimates the population mean)

## The everyday picture
Five friends go fishing. They catch 2, 3, 3, 5 and 7 fish. Back at the car they pool all the fish into one bucket and share them out equally. The bucket holds 20 fish, and 20 shared five ways is **4 each**. That fair share is the mean.

There's a second picture that turns out to be more useful. Put the five catches as weights on a see-saw at positions 2, 3, 3, 5 and 7. The see-saw balances at exactly one point: 4. The mean is the **balance point** of the data.

*Where the picture stops working:* sometimes the "fair share" is a value nobody actually had. A mean of 2.4 eggs per nest is fine, even though no nest has 2.4 eggs.

## Words you'll need
- **Mean (average):** the total divided by how many values there are.
- **x̄ ("x-bar"):** the usual symbol for the mean of a sample.
- **μ ("mew"):** the Greek letter for the true mean of a whole population.
- **n:** how many values there are.
- **Deviation:** how far one value sits from the mean (value minus mean).
- **Median:** the middle value once the data are sorted.
- **Expected value, E(y):** the mean you'd expect in the long run; in a model, the mean predicted for given conditions.
- **Outlier:** a value far from the rest.

## A tiny example
Catches: 2, 3, 3, 5, 7.
- Add them: 2 + 3 + 3 + 5 + 7 = **20**.
- Count them: **5**.
- Share out: 20 / 5 = **4**.

Now check the balance. Each value's distance from 4:
(2 − 4) + (3 − 4) + (3 − 4) + (5 − 4) + (7 − 4) = −2 − 1 − 1 + 1 + 3 = **0**.
The distances below cancel the distances above exactly. That's what "balance point" means.

Now a sixth friend arrives with 40 fish. Total 60, shared six ways: **10 each**. One big catch dragged the fair share from 4 to 10, even though five of the six friends caught 7 or fewer.

## Start from zero
1. **You want one number that says "typical".** The fishing example: 2, 3, 3, 5, 7.
2. **Pool and share.** Total 20, five people, 4 each.
3. **Write the recipe so it works for any data.** Add every value (Σ means "add them all up") and divide by how many there are: $\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$. Read aloud: "x-bar equals one over n times the sum of all the x's". This is exactly what you did by hand.
4. **The mean is the balance point.** The deviations always add to zero, for any data. *Why:* adding all the deviations is the same as adding all the values (20) and taking away n copies of the mean (5 × 4 = 20), and those are equal by definition. *Why it matters:* this is why the [[Variance]] has to *square* the deviations, or they'd always cancel to nothing.
5. **The sample mean x̄ is a guess at the population mean μ.** Your five friends are a sample of all anglers at that lake ([[Parameter vs Estimate]]).
6. **In a model the mean is usually "the mean for these conditions".** A regression predicts the mean of y *for a given x*, written μᵢ or E(y | x), read "the expected value of y given x". *Why:* the predictable part of every model is a statement about the mean, and the rest is scatter around it ([[Deterministic and Stochastic Components]]).

## See it
![[Mean as balance point.png|700]]
*What to look at:* if the number line were a see-saw, it would balance at 4.

## Why it is this way
Why share out equally, rather than, say, pick the middle value? Because the mean is the single number that keeps the **total** right: 5 friends × 4 fish = 20 fish, the real catch. That makes it the natural number for anything that adds up: total biomass, total births, total cost. It is also the number that makes the squared distances to the data as small as possible, which is why least squares and nearly every model in this course are built around means ([[Least Squares]]).

The price is sensitivity. Because every value counts in the total, one extreme value (the 40-fish friend) can drag the mean a long way. That is why [[Outlier|outliers]] are checked first in [[Data Exploration Protocol|data exploration]], and why the median is reported for very skewed data.

## In R
```r
x <- c(2, 3, 3, 5, 7)
mean(x)                  # 4
sum(x) / length(x)       # same thing by hand
sum(x - mean(x))         # 0: the deviations balance
mean(c(x, 40))           # 10: one outlier pulls it hard
median(c(x, 40))         # 4: the middle value barely moves
mean(c(x, NA))           # NA: one missing value spoils it
mean(c(x, NA), na.rm = TRUE)   # 4: tell R to drop missing values
```

## In the course
Powell and Gale use the formula for a sample mean as their example of a simple statistical model ([[Powell and Gale 2015 Ch1]], p. 6). Hobbs and Hooten call the mean of a distribution its first moment ([[Moments of a Distribution|Moments]]).

## Common confusions
- **Mean vs median.** The median is the middle value once sorted. With skewed data like biomass or counts the two differ, and the mean gets pulled toward the long tail.
- **"The model predicts each observation."** It predicts the *mean* at each x. Individual observations scatter around it.
- **x̄ vs μ.** x̄ is calculated from your sample and you know it exactly. μ is the population's true mean and you never see it directly.

## Explain it back
- Explain the mean as a fair share of fish, then as a see-saw's balance point.
- Why do the deviations from the mean always add to zero?
- Why did one 40-fish catch move the mean from 4 to 10 but leave the median at 4?

*Pass test:* you can work out a mean by hand and say why the variance has to square the deviations.

## Connections
- **Builds on:** [[Summation Notation]], [[Parameter vs Estimate]]
- **Leads to:** [[Variance]], [[Moments of a Distribution|Moments]], [[Linear Regression]], [[Deterministic and Stochastic Components]]
- **Part of:** [[MOC - Basics from Zero]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch3]] (§3.4.3, moments)

## Flashcards

Why do deviations from the mean always add to zero?
??
The mean is the balance point: distances below it exactly cancel distances above it.
![[Mean as balance point.png]]
++++

In a regression, what does the deterministic part predict?
??
The mean (expected value) of y for a given x, not each individual observation.
++++

Why is the mean so sensitive to outliers?
??
Every value goes into the total that gets shared out, so one extreme value drags the fair share toward it.
++++
