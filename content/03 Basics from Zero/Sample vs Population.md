---
type: atomic
tags:
  - basics-from-zero
  - inference
  - flashcards
aliases:
  - "sample"
  - "samples"
  - "statistical population"
status: seedling
---

# Sample vs Population

**In one line:** the population is everything you want to know about; the sample is the part you actually measured; statistics is about using the sample to make careful guesses about the population.

> [!info] Before this, it helps to know
> [[Average (Mean)]] (we compare a sample mean to an unknown true mean) · [[Spread and Variability]] (spread decides how good the guess is)

## Start from zero
You want to know how salty a pot of soup is. You do not drink the whole pot. You stir it and taste one spoonful.

- The **pot** is the **population**: everything you care about.
- The **spoonful** is the **sample**: the part you actually measured.

If the soup is well stirred, the spoon tells you about the pot. If the salt is all sitting at the bottom and you sip from the top, your sample misleads you.

In ecology the "pot" is usually not a list of real things you could ever finish counting. It is more like "all the visits that could have been made at these properties in this season, under these conditions". You only made some of them.

## Why it exists
We almost never measure everything. There are too many mornings, too many points, too many birds.

So every number we calculate from data (a mean, a difference between sites) is a **sample statistic**: a guess at a true, unknown population value called a **parameter**. (See [[Parameter vs Estimate]].)

Two things can go wrong with the guess:
1. **Bad luck (sampling error).** Even a fair spoonful is a little off. A different set of visits would give a slightly different mean. Bigger samples reduce this. The [[Standard Error]] measures it.
2. **Bias.** The spoon only reached the top. If samples are not representative (only surveyed calm mornings, only points near roads), more data will not fix it.

## A tiny example
Suppose a point's true long-run mean is 6 species per visit. Three surveyors each make 3 visits:

| Surveyor | Visits | Sample mean |
|---|---|---|
| 1 | 5, 7, 6 | 6.0 |
| 2 | 4, 5, 6 | 5.0 |
| 3 | 8, 6, 7 | 7.0 |

Same population, three different answers. None is "wrong"; they differ by chance. With 30 visits each, their means would be much closer together. That shrinking is why sample size matters.

## In my project
- My sample: 1,250 point-visits at 416 points on five properties, surveyed in 2022 or 2023. The models use the 1,130 visits at 376 points that have complete habitat data ([[Complete-Case Analysis]]).
- The population I want to speak about: richness per visit at these properties during the breeding season survey window. BK's mean of 4.73 species per visit is an *estimate* of BK's true mean.
- Honest limits on the population: each site was surveyed in only one year (BK, DC, HO in 2022; CR, HB in 2023). So the sample cannot speak for "BK in any year" or separate site from year. See [[Why site and year cannot be separated]].
- My sample also only contains birds that were *detected*. The population of birds actually present is larger. See [[Why observed richness is not true richness]].

## Common confusions
- **"Population" here is not a biological population** of one species. It is the statistical pot: all possible observations you want to generalize to.
- **Bigger is not always better.** More biased data stays biased.
- **Sample means vary.** That is not a sign of a mistake; it is exactly what [[Confidence Interval|confidence intervals]] are built to describe.

## Connections
- **Builds on:** [[Average (Mean)]], [[Spread and Variability]]
- **Leads to:** [[Parameter vs Estimate]], [[Standard Error]], [[Confidence Interval]], [[Sampling Unit]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Hurlbert 1984]] (what happens when the "sample" is smaller than it looks)

> [!question]- Check yourself
> My data say mean richness at CR was 7.58. Is 7.58 a parameter or a statistic?
> ?
> A statistic (an estimate). It comes from the visits we happened to make. The true long-run CR mean is the parameter; it is unknown, and 7.58 is our best guess at it.
