---
type: atomic
tags:
  - statistical-foundations
  - modeling
  - r
  - flashcards
aliases:
  - "reference level"
  - "categorical predictor"
  - "dummy coding"
  - "treatment contrasts"
  - "baseline level"
status: seedling
---

# Categorical Predictor and Reference Level

**In one line:** a categorical predictor is a predictor made of named groups (like site BK, CR, DC); the model picks one group as the baseline, the reference level, and reports every other group as a difference from it.

> [!info] Before this, it helps to know
> [[Predictor Variable]] (what a predictor is) · [[Factors]] (how R stores named groups) · [[Average (Mean)]]

## Start from zero
Wind is a number: you can multiply it by a slope. But "site CR" is a name. You cannot multiply a name by anything.

So how does a model use names? With a simple trick: **switches**. For each site except one, make a column that is 1 ("yes, this row is that site") or 0 ("no"):

| Row's site | isCR | isDC | isHB | isHO |
|---|---|---|---|---|
| BK | 0 | 0 | 0 | 0 |
| CR | 1 | 0 | 0 | 0 |
| DC | 0 | 1 | 0 | 0 |
| HB | 0 | 0 | 1 | 0 |
| HO | 0 | 0 | 0 | 1 |

BK has no switch. When all switches are off, you are at BK. BK is the **reference level** (the baseline). This trick is called **dummy coding** or treatment contrasts.

## Why it exists
**Why leave one group out?** Because the model also has an intercept (a starting value). If BK had its own switch too, then "intercept" and "the five switches" would be two ways of saying the same thing, since every row has exactly one switch on. The model could not tell how much to give each, like being asked to split 10 into "a + b" with no other rule. Dropping one switch removes the ambiguity.

So:
- the **intercept** = the expected value for the reference group (BK);
- each **other coefficient** = "this group minus the reference group".

**How R picks the reference:** by default the first level, and levels are sorted alphabetically unless you set them yourself. Changing the reference does not change the model's fit, predictions or AIC; it only changes which comparisons the coefficient table shows. Guthery and Bingham's general advice applies: make sure the intercept means something sensible, because an intercept outside the realistic range of the data is easy to misread ([[Guthery and Bingham 2007]], p. 685; see also [[Hobbs and Hooten 2015 Ch1]], p. 12, on choosing a scale that makes the intercept interpretable).

## A tiny example
Ignore logs for a moment and use raw averages from my data: BK 4.73, CR 7.58.

| Coefficient | Meaning | Value |
|---|---|---|
| Intercept | average at BK | 4.73 |
| CR | CR minus BK | 7.58 - 4.73 = 2.85 |

To get CR's prediction: switch CR on, so 4.73 + 2.85 = 7.58. To get BK's: all switches off, so just 4.73. (My real model does this on the log scale, so the CR coefficient becomes log(7.58) - log(4.73), about 0.47; see [[Logarithms and Exponents]].)

## In my project
The wrangling script makes Site a factor, at the end of the same `mutate()` that standardizes the habitat columns:

```r
         Site = factor(Site),
         Survey = factor(Survey))
```

Alphabetical order gives levels **BK, CR, DC, HB, HO**, so **BK is the reference**. Consequences:
- The intercept is the log expected richness at **BK**, for a typical point (random intercept 0), with Wind = 0, Sky = 0 and every habitat predictor at its average (standardized value 0; see [[Standardizing Predictors]]).
- The four Site coefficients (`SiteCR`, `SiteDC`, `SiteHB`, `SiteHO`) are each "log richness at that property minus log richness at BK".
- BK has the lowest raw mean richness (4.73), so for all species every property comes out above BK. In the top model (M3, which also has habitat) CR's rate ratio is 1.40 (95% CI 1.27 to 1.54): about 40% more species than BK. That is smaller than the raw ratio 7.58 / 4.73 = 1.60, because habitat now explains part of the gap.
- For focal species BK is the *highest* property, so all four property rate ratios are below 1 (0.43 to 0.76). Same reference, opposite story. All numbers: [[Preliminary Results]].
- The rate-ratio dot plot's dashed line at 1 means "same as BK".
- Comparisons not involving BK (for example CR vs HB) are not in the table; get them by releveling, `datClean$Site <- relevel(datClean$Site, ref = "HB")`, or with post hoc contrasts.

BK was chosen by the alphabet, not by biology. That is fine, but the Report says so. Wind and Sky, by contrast, are *not* factors in the script (see [[Predictor Variable]]).

## Common confusions
- **"BK is missing from the output."** It is not missing; it is the intercept.
- **"SiteCR is CR's richness."** It is CR's *difference* from BK (on the log scale).
- **"Changing the reference changes the result."** It only changes the labels on the comparisons. The fitted model is identical.

## Connections
- **Builds on:** [[Predictor Variable]], [[Factors]], [[Linear Predictor]]
- **Leads to:** [[Interpreting Poisson Coefficients]], [[Fixed Effect]], [[Interaction Term]], [[Why Site is fixed not random]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Statistical Foundations]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Guthery and Bingham 2007]] (making the intercept meaningful), [[Hobbs and Hooten 2015 Ch1]]

> [!question]- Check yourself
> Why is BK the reference level in my model, and what does the `SiteCR` coefficient mean?
> ?
> R sorts factor levels alphabetically and uses the first (BK) as the reference. `SiteCR` is the difference in log expected richness between CR and BK, holding Wind, Sky and the point effect constant; exp(SiteCR) is how many times higher CR's expected richness is.
