---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Sample variance"
  - "sigma squared"
  - "var()"
status: seedling
---

# Variance

**In one line:** variance measures how spread out values are: it's the average of the squared distances of the values from their mean.

> [!info] Before this, it helps to know
> [[Mean]] (variance measures distance from it) · [[Summation Notation]] (the Σ in the formula)

## The everyday picture
Two bus routes both arrive "on average at 9:00". Route A is always within a minute of 9:00. Route B turns up at 8:40 one day and 9:25 the next. Same average, very different experience waiting at the stop. The average alone hides the thing you care about: **how much it varies**.

Variance is a number for that wobble. It asks: on average, how far is each arrival from the usual time? Route A gets a small number, route B a big one.

*Where the picture stops working:* you'd naturally measure "how far" in minutes. Variance measures it in *squared* minutes, for a good reason explained below. Its square root, the [[Standard Deviation]], brings you back to minutes.

## Words you'll need
- **Spread (variability):** how much values differ from each other.
- **Deviation:** one value minus the mean; how far, and which side, it sits from the mean.
- **Squared deviation:** the deviation multiplied by itself, which is always zero or positive.
- **Variance (s² for a sample, σ² for a population):** the average squared deviation.
- **n − 1:** the sample size minus one, used when averaging squared deviations from a sample.
- **Standard deviation:** the square root of the variance ([[Standard Deviation]]).

## A tiny example
Five visits recorded 2, 3, 3, 5 and 7 bird species. The mean is 4.

| x | deviation x − 4 | squared (x − 4)² |
|---|---|---|
| 2 | −2 | 4 |
| 3 | −1 | 1 |
| 3 | −1 | 1 |
| 5 | +1 | 1 |
| 7 | +3 | 9 |
| | sum = **0** | sum = **16** |

- Plain deviations add to 0. Useless as a measure of spread.
- Squared deviations add to 16.
- Divide by n − 1 = 4: s² = 16 / 4 = **4** species².
- Square root: s = √4 = **2** species. A typical visit is about 2 species from the mean.

Compare a site that recorded 4, 4, 4, 4, 4. Every deviation is 0, so the variance is **0**: no spread at all.

## Start from zero
1. **Same mean, different behaviour.** Site A always records 4 species; site B records 0, 1, 4, 7 and 8. Both average 4, but B is far more variable.
2. **To measure spread, look at how far each value is from the mean.** These distances are the *deviations*.
3. **You can't just average the deviations.** *Why:* they always add to zero, because the mean is the balance point ([[Mean]]). The minuses cancel the pluses.
4. **So square each deviation first.** *Why squaring:* squares are never negative, so nothing cancels. Squaring also makes big misses count much more than small ones (a miss of 3 counts 9, a miss of 1 counts 1), which matches how surprising they are. And squares have very convenient maths, which is why least squares and the normal distribution are built on them.
5. **Then average the squares.** For a *sample*, divide by n − 1 instead of n: $s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1}$. Read it: "add up each value's squared distance from x-bar, then divide by n minus one". *Why n − 1:* the deviations are measured from x̄, which was calculated from these same data, so it sits closer to them than the true mean μ does. That makes the squared deviations a little too small. Dividing by a slightly smaller number, n − 1, corrects for it.
6. **The units are squared.** If the data are in grams, the variance is in grams². That's awkward to read, so we usually report its square root, the [[Standard Deviation]].
7. **Variance is everywhere in modeling.** The residual variance σ² in a linear model, overdispersion when the variance of counts is bigger than their mean ([[Overdispersion]]), and the variance of a random effect in a mixed model ([[Variance Components]]).

## See it
![[Deviations and variance.png|700]]
*What to look at:* each orange line is a deviation. Square them, add them up and divide by n − 1 to get the variance.

## Why it is this way
A mean without a spread is half a description: it can't tell the reliable bus from the unreliable one. Why squares instead of plain distances (ignoring the sign)? Both stop the cancelling, but squares have a property plain distances don't: the mean is exactly the value that makes the sum of squared deviations smallest. That ties variance to the mean, and to least squares ([[Least Squares]]). It's also why variances of independent things simply add, which is how every standard error in the course is built.

## In R
```r
x <- c(2, 3, 3, 5, 7)
var(x)                                  # 4 (R divides by n - 1)
sum((x - mean(x))^2) / (length(x) - 1)  # same by hand
sum(x - mean(x))                        # 0: why we can't skip the squaring
sd(x)                                   # 2 = sqrt(var(x))
```

## In the course
Hobbs and Hooten call the variance a distribution's second central moment, and they use the mean and variance together to pick parameters for distributions ([[Moments]], [[Moment Matching]]; [[Hobbs and Hooten 2015 Ch3]], §3.4.4).

## Common confusions
- **Variance vs standard deviation.** They carry the same information, but SD is in the data's units, so it's the one you report.
- **n vs n − 1.** A population variance uses n. A variance estimated from a sample uses n − 1. R's `var()` always uses n − 1.
- **"A variance of 4 means values are 4 away from the mean."** That's in squared units. The typical distance is √4 = 2.

## Explain it back
- Use two bus routes to explain why we need a measure of spread.
- Why can't you just average the deviations?
- Why divide by n − 1 instead of n for a sample?
- Work out the variance of 1, 2, 3 by hand. (Answer: 1.)

*Pass test:* you can say in plain words why each step of the formula (subtract, square, add, divide by n − 1) is there.

## Connections
- **Builds on:** [[Mean]], [[Summation Notation]]
- **Leads to:** [[Standard Deviation]], [[Standard Error]], [[Least Squares]], [[Overdispersion]], [[Variance Components]]
- **Part of:** [[MOC - Basics from Zero]]
- **Go deeper:** [[Moments]]

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
