---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The standard deviation (SD) is the square root of the variance: roughly, the typical distance of a value from the mean, in the data's own units."
aliases:
  - "SD"
  - "sd()"
status: seedling
---

# Standard Deviation

Ask a friend how long their commute takes: "About 30 minutes, give or take 5." That "give or take 5" is a **standard deviation** (SD) in everyday clothes. It is the typical distance of a value from the [[Mean]], in the data's own units. Formally it is the square root of the [[Variance]], written s for a sample and σ ("sigma") for a whole population. "Give or take" can sound like a hard limit, but it is not: some days the commute will take 40 minutes. The SD is the typical distance, not the furthest.

Why the square root? The variance measures spread by averaging squared deviations, which stops plus and minus deviations cancelling, but it leaves the answer in squared units that nobody can picture. Five visits recorded 2, 3, 3, 5 and 7 bird species, with mean 4 and variance 4 "species squared". The square root brings it back: SD = √4 = 2 species, so a typical visit is about 2 species away from 4, and most visits (four of the five) fall between 2 and 6. For bell-shaped data there is a useful rule of thumb: about 68% of values lie within 1 SD of the mean and about 95% within 2 SD, because every [[Normal Distribution]] has the same proportions once distances are measured in SDs. Bird masses with mean 20 g and SD 5 g mean that about two thirds of birds weigh 15 to 25 g and about 95% weigh 10 to 30 g. The rule only holds for roughly bell-shaped data, and for skewed data such as counts or biomass it can be badly off.

People need a spread they can picture next to the mean, in the same units, and the SD is exactly that. It is also the second number that defines a normal model: y ~ Normal(μ, σ) needs only a centre μ and a typical wobble σ. In a fitted model, σ is the SD of the scatter of data points around the fitted line, the [[Residual]]s, and R reports its estimate as the "residual standard error" (`sigma(fit)`). Hobbs and Hooten stress that σ stands for everything the deterministic part of the model leaves out ([[Hobbs and Hooten 2015 Ch3]]). The most important confusion to avoid is SD versus [[Standard Error]]: the SD describes how spread out the data are, while the SE describes how uncertain an estimate is. Collecting more data does not shrink the SD (birds do not become less variable), but it does shrink the SE.

![[Standard deviation bands.png|700]]
*What to look at:* the darker band (±1 SD, from 15 to 25 g) holds about two thirds of the birds, and the wider band (±2 SD) holds about 95%.

```r
x <- c(2, 3, 3, 5, 7)
sd(x)                 # 2
sqrt(var(x))          # 2: the same thing
fit <- lm(dist ~ speed, data = cars)
sigma(fit)            # 15.38: the residual SD, typical scatter of stopping distance around the line
```

## Connections
- **Builds on:** [[Variance]]
- **Leads to:** [[Standard Error]], [[Normal Distribution]], [[Residual]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
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
