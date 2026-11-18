---
type: atomic
tags:
  - basics-from-zero
  - descriptive-statistics
  - flashcards
aliases:
  - "mean"
  - "average"
  - "averages"
  - "arithmetic mean"
status: seedling
---

# Average (Mean)

**In one line:** the mean is the total divided by how many values you have: one number that describes the "typical" or "middle" value.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (we average one variable across many observations)

## Start from zero
Point BK1001 was visited three times. The surveyor detected 5, 7 and 6 species.

How many species "does BK1001 have per visit"? There is no single answer, because it changes each time. But you can summarize the three numbers with one:

> mean = (5 + 7 + 6) / 3 = 18 / 3 = **6**

That is the **mean** (also called the average). Add everything up, divide by how many there are.

A useful picture: put the values on a ruler as equal weights. The mean is the point where the ruler balances.

## Why it exists
Single observations bounce around. One visit might be windy, one might hit a quiet morning. If you compared single visits, you would mostly be comparing luck.

Averaging many visits cancels much of that luck: the high days and low days partly balance out. That is why we compare sites by their mean richness, not by one visit each.

The mean is also what most models predict. A [[Statistical Model]] usually says "the *expected* (mean) richness under these conditions is X", and treats the visit-to-visit bouncing as noise around that mean. (See [[Deterministic and Stochastic Components]].)

## A tiny example
| | Visit values | Sum | n | Mean |
|---|---|---|---|---|
| BK1001 | 5, 7, 6 | 18 | 3 | 6 |
| Imaginary point | 1, 6, 11 | 18 | 3 | 6 |

Same mean, very different points: the second is much more erratic. A mean alone hides that, which is why we also measure [[Spread and Variability]].

One more example: values 2, 3, 4, 3, 13. Mean = 25 / 5 = 5. But four of the five values are 4 or less. One big value dragged the mean up. The **median** (the middle value when sorted: 2, 3, **3**, 4, 13) is 3, and is less affected by extremes.

## In my project
Mean richness per point-visit by site, on the 1,130 visits the models use (ajay's RStudio run, Oct 13; see [[Preliminary Results]]):

| Site | BK | CR | DC | HB | HO |
|---|---|---|---|---|---|
| Mean richness | 4.73 | 7.58 | 6.54 | 6.64 | 5.56 |

So a typical CR visit found almost 3 more species than a typical BK visit. (The Oct 12 EDA gave 4.53 for BK and 7.84 for CR, computed on all 416 points with the old Sep 10 fly-over filter; superseded.) The analysis script computes these with (run in RStudio; R is not installed in Claude's environment):

```r
datClean %>%
  group_by(Site) %>%
  summarize(Mean = mean(Richness),
            Variance = var(Richness),
            Ratio = Variance / Mean,
            FocalMean = mean(FocalRichness),
            n = n())
```

The `Ratio` line compares the spread to the mean. For a [[Poisson Distribution]] those two should be about equal, and here the ratio is 0.56 to 0.93 across sites: close to or a bit below 1, so Poisson is reasonable. See [[Mean-Variance Relationship]].

## Common confusions
- **A mean of 4.73 species is fine** even though you can never see half a species. It describes the long-run typical value, not a possible single visit.
- **Sample mean vs true mean.** 4.73 is the mean of the visits we happened to make. The "true" long-run mean at BK is unknown; 4.73 is our best guess. See [[Sample vs Population]] and [[Parameter vs Estimate]].
- **Mean vs median.** They match for symmetric data and differ when a few extreme values pull one way.
- **Expected value** is the mean of a [[Random Variable]]: the average you would get over endless repeats. In the Poisson model it is called lambda.

## Connections
- **Builds on:** [[Variable and Observation]]
- **Leads to:** [[Spread and Variability]], [[Sample vs Population]], [[Statistical Model]], [[Poisson Distribution]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[EDA Findings]] (all the site summaries)

> [!question]- Check yourself
> A point had visits with 4, 4 and 10 species. What is the mean, and why might it be misleading?
> ?
> (4 + 4 + 10) / 3 = 6. It is misleading because no visit was near 6: two were 4 and one was much higher. Always look at the spread (and the raw values) alongside the mean.
