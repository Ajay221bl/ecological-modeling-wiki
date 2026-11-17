---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "SD"
  - "sd()"
status: seedling
---

# Standard Deviation

**In one line:** the standard deviation (SD) is the square root of the variance: roughly, the typical distance of a value from the mean, in the data's own units.

> [!info] Before this, it helps to know
> [[Variance]] (SD is its square root) · [[Mean]]

## The everyday picture
Ask a friend how long their commute takes. "About 30 minutes, give or take 5." That "give or take 5" is a standard deviation in everyday clothes. It tells you the usual size of the wobble around the average, in the same units (minutes) as the average itself.

*Where the picture stops working:* "give or take" sounds like a hard limit. It isn't. Some days will be 40 minutes. The SD is the *typical* distance, not the furthest.

## Words you'll need
- **Standard deviation (s for a sample, σ "sigma" for a population):** the square root of the variance.
- **Variance:** the average squared distance from the mean, in squared units ([[Variance]]).
- **Normal distribution:** the symmetric bell-shaped curve ([[Normal Distribution]]).
- **Residual:** how far an observed value is from the model's prediction ([[Residual]]).
- **Residual standard error:** R's name for the estimated SD of the residuals, σ̂.

## A tiny example
Five visits recorded 2, 3, 3, 5 and 7 species. The mean is 4 and the variance is 4 species² ([[Variance]]).
- SD = √4 = **2 species**.
- So a typical visit is about 2 species away from 4: most visits fall between 2 and 6. Four of the five do (2, 3, 3, 5); the 7 is a bit further out.

Bird masses with mean 20 g and SD 5 g: "20 g, give or take 5". About two thirds of birds weigh between 15 and 25 g, and about 95% between 10 and 30 g, if the masses are bell-shaped.

## Start from zero
1. **Variance measures spread, but in squared units** (grams², species²) ([[Variance]]). *Why that's awkward:* nobody can picture "4 species squared".
2. **Take the square root to get back to the original units:** $s = \sqrt{s^2}$. *Why it works:* the squaring was only there to stop plus and minus deviations cancelling. Once the averaging is done, the square root undoes the change of units.
3. **Now it reads naturally:** "body mass averages 20 g, give or take about 5 g".
4. **For bell-shaped data there's a rule of thumb:** about 68% of values fall within 1 SD of the mean and about 95% within 2 SD. *Why:* that's a fixed property of the shape of the [[Normal Distribution]]; every bell curve has the same proportions once measured in SDs.
5. **In a model, σ is the SD of the scatter around the line.** A linear model's "residual standard error" is its estimate of σ: the typical distance of a data point from the fitted mean ([[Residual]]).

## See it
![[Standard deviation bands.png|700]]
*What to look at:* the darker band (±1 SD, from 15 to 25 g) holds about two thirds of the birds, and the wider band (±2 SD) holds about 95%.

## Why it is this way
People need a spread they can picture next to the mean, in the same units. The SD is exactly that. It's also the second number that defines a normal model: y ~ Normal(μ, σ) needs a centre (μ) and a typical wobble (σ), and nothing else. Every normal model in the course is just "this mean, give or take this SD".

## In R
```r
x <- c(2, 3, 3, 5, 7)
sd(x)                 # 2
sqrt(var(x))          # 2: the same thing
fit <- lm(dist ~ speed, data = cars)
sigma(fit)            # 15.38: the residual SD, typical scatter of stopping distance around the line
```

## In the course
Hobbs and Hooten write normal models as y ~ normal(μ, σ²) and stress that σ represents everything the deterministic model leaves out ([[Hobbs and Hooten 2015 Ch3]]).

## Common confusions
- **SD vs SE.** SD describes the spread of the *data*. The [[Standard Error]] describes how uncertain an *estimate* is. Collecting more data won't shrink the SD (birds don't get less variable), but it does shrink the SE.
- **The 68/95 rule for skewed data.** It only holds for roughly bell-shaped data. For counts and biomass it can be badly off.
- **"SD is the biggest distance."** It's the typical distance. Values beyond 2 SD happen about 1 time in 20 in bell-shaped data.

## Explain it back
- Explain the SD using "30 minutes, give or take 5".
- Why do we take the square root of the variance?
- If mass is 20 g with SD 5 g and bell-shaped, roughly what share of birds weigh 10 to 30 g?

*Pass test:* you can read "mean 20, SD 5" aloud as a sentence about real birds.

## Connections
- **Builds on:** [[Variance]]
- **Leads to:** [[Standard Error]], [[Normal Distribution]], [[Residual]]
- **Part of:** [[MOC - Basics from Zero]]
- **Go deeper:** [[Standardizing|Standardizing Predictors]] (dividing by the SD to put predictors on one scale)

## Flashcards

What is the standard deviation, and why use it instead of the variance?
??
The square root of the variance; it is in the data's original units, so it reads as the typical distance from the mean ("give or take").
![[Standard deviation bands.png]]
++++

For bell-shaped data, what fraction lies within 1 and within 2 SDs of the mean?
??
About 68% within 1 SD and about 95% within 2 SD.
![[Standard deviation bands.png]]
++++
