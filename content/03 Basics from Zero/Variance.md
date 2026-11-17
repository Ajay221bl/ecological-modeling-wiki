---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Variance measures how spread out values are: it's the average of the squared distances of the values from their mean."
aliases:
  - "Sample variance"
  - "sigma squared"
  - "var()"
status: seedling
---

# Variance

Two bus routes both arrive "on average at 9:00". Route A is always within a minute of 9:00; route B turns up at 8:40 one day and 9:25 the next. Same average, very different experience at the stop, because the average hides how much the arrivals vary. **Variance** is a number for that wobble, or *spread*: roughly, the average squared distance of the values from their [[Mean]]. It is written s² for a sample and σ² ("sigma squared") for a whole population. Route A gets a small variance, route B a big one.

Here is the recipe, with the reason for each step. Five visits recorded 2, 3, 3, 5 and 7 bird species, with mean 4. First find each value's *deviation*, how far it sits from the mean: −2, −1, −1, +1 and +3. You cannot simply average these, because they always add to zero; the mean is the balance point, so the minuses cancel the pluses. So square each deviation first: 4, 1, 1, 1 and 9. Squares are never negative, so nothing cancels, and squaring makes big misses count much more than small ones (a miss of 3 counts 9, a miss of 1 counts 1), which matches how surprising they are. The squares add to 16 ([[Summation Notation]]). Finally divide, but for a sample divide by n − 1 = 4, not by n = 5: s² = 16 / 4 = 4. The reason for n − 1 is that the deviations were measured from x̄, which was calculated from these same data and therefore sits closer to them than the true mean μ does, so the squared deviations run a little too small; dividing by a slightly smaller number corrects for it. R's `var()` always does this. A site that recorded 4, 4, 4, 4, 4 would have a variance of 0: no spread at all.

The units come out squared: 4 "species squared", which nobody can picture, so the variance is usually reported through its square root, the [[Standard Deviation]], here 2 species. A variance of 4 does not mean values are 4 away from the mean; the typical distance is √4 = 2. Why squares rather than plain distances with the sign dropped? Both stop the cancelling, but squares have two special properties: the mean is exactly the value that makes the sum of squared deviations smallest, which ties variance to the mean and to [[Least Squares]]; and the variances of independent things simply add, which is how every [[Standard Error]] in the course is built. Variance turns up everywhere in modeling: the residual variance σ² of a linear model, [[Overdispersion]] when the variance of counts is bigger than their mean, and the variance of a random effect in a mixed model ([[Variance Components]]). Hobbs and Hooten call it a distribution's second central moment and use mean and variance together to pick parameters for distributions ([[Moments of a Distribution|Moments]], [[Moment Matching]], [[Hobbs and Hooten 2015 Ch3]]).

![[Deviations and variance.png|700]]
*What to look at:* each orange line is a deviation. Square them, add them up and divide by n − 1 to get the variance.

```r
x <- c(2, 3, 3, 5, 7)
var(x)                                  # 4 (R divides by n - 1)
sum((x - mean(x))^2) / (length(x) - 1)  # same by hand
sum(x - mean(x))                        # 0: why we can't skip the squaring
sd(x)                                   # 2 = sqrt(var(x))
```

## Connections
- **Builds on:** [[Mean]], [[Summation Notation]]
- **Leads to:** [[Standard Deviation]], [[Standard Error]], [[Least Squares]], [[Overdispersion]], [[Variance Components]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Moments of a Distribution|Moments]]

## Flashcards

Why does variance square the deviations instead of averaging them directly?
??
Raw deviations always sum to zero (the mean is the balance point); squaring makes them all positive and weights large deviations more.
![[Deviations and variance.png]]
++++

Why divide by n − 1 for a sample variance?
??
Deviations are measured from x̄, which was fitted to the same data and sits closer to them than μ does, so dividing by n would underestimate the true variance.
++++
