---
type: atomic
tags:
  - r-reproducibility
  - r-basics
  - flashcards
aliases:
  - "factor"
  - "factor levels"
status: seedling
---

# Factors

**In one line:** a factor is R's way of storing a categorical variable: a column of labels plus a fixed list of the allowed groups (levels), in a set order.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (categorical vs numeric) · [[Data Frames]] (factors are columns of a data frame)

## Start from zero
Some variables are labels, not amounts: Site (BK, CR, DC, HB, HO), survey round, species. You cannot average them. You can only ask "which group?"

In R, a column of labels can be stored as plain text ("character") or as a **factor**. A factor adds two things:
1. A list of the **levels**: the allowed groups, each listed once.
2. An **order** for those levels.

By default, R puts the levels in **alphabetical order**. So `factor(c("CR", "BK", "HO", "BK"))` has levels BK, CR, HO.

## Why it exists
Models need to know when a column is a category. A model treats numbers as amounts: it fits a slope, assuming 2 is "one more" than 1. For labels that would be nonsense. Survey round 3 is not "three times" round 1.

For a categorical predictor, a model instead picks one level as the **reference level** (the baseline) and estimates how much each other level differs from it. With factors, the **first level is the reference**. So the level order directly decides what your coefficients mean. See [[Categorical Predictor and Reference Level]].

Factors also keep groups that are allowed but happen to be empty in a subset, so tables and plots stay consistent.

## A tiny example
```r
s <- factor(c("CR", "BK", "HO", "BK"))
levels(s)        # "BK" "CR" "HO"   (alphabetical; BK first)
table(s)         # BK 2, CR 1, HO 1
```

If the model uses `s`, BK becomes the baseline. The intercept describes BK, and you get one "difference from BK" for CR and one for HO.

To choose a different baseline:

```r
s2 <- relevel(s, ref = "HO")   # HO becomes first, so it becomes the reference
```

## In my project
From the end of `GrasslandBirdRichness_Wrangling.R` (it ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment, so rerun any change there):

```r
datClean <-
  datClean %>%
  mutate(across(c(SpCov3, SpCov9, SpCov27, Tree50, Scrub50),
                ~ as.numeric(scale(.x)),
                .names = "{.col}_z"),
         Site = factor(Site),
         Survey = factor(Survey))
```

- `Site = factor(Site)`: Site starts as text pulled from the point code (`str_extract(PtNum, "^[A-Za-z]+")`, so "BK1001" becomes "BK"). Turning it into a factor sorts the levels alphabetically: **BK, CR, DC, HB, HO**.
- So **BK is the reference level**, not because it is special, but because "B" comes first in the alphabet. In the model output, the Site rows are named SiteCR, SiteDC, SiteHB and SiteHO, and each is a difference from BK on the log scale. The rate-ratio dot plot shows them "relative to BK" for exactly this reason.
- BK happens to have the lowest mean all-species richness (4.73 per visit), so every other site's all-species rate ratio came out above 1 (1.08 to 1.40). For focal species BK is highest, so all four came out below 1 (0.43 to 0.76) ([[Preliminary Results]]). That is a feature of the baseline, not proof that BK is unusual.
- `Survey = factor(Survey)`: survey rounds 1, 2, 3 are labels, so this stops R treating them as amounts. (Survey is not in my models.)
- The `across(...)` part is unrelated to factors: it makes the standardized `_z` habitat columns ([[Standardizing Predictors]]).
- **Wind and Sky stay numeric.** The models fit one slope for each. Whether they should instead be factors is an open question (Sky = 5 has only 4 raw rows, so it would make a very thin group). See [[Open Questions]].

## Common confusions
- **Text vs factor in models.** If you pass plain text, model functions convert it to a factor for you, with the same alphabetical order. Converting explicitly is clearer and lets you check `levels()`.
- **Numbers that look like numbers.** If a factor's labels are "1", "2", "3", `as.numeric()` gives the level positions, not the labels. Convert via `as.character()` first.
- **Changing the reference changes the coefficients, not the fit.** The predictions and AIC stay the same; only what each coefficient is compared against changes.

## Connections
- **Builds on:** [[Variable and Observation]], [[Data Frames]]
- **Leads to:** [[Categorical Predictor and Reference Level]], [[Interpreting Poisson Coefficients]], [[glmer()]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[R Scripts Walkthrough]]

> [!question]- Check yourself
> Why is BK the reference site in my model, and what does the "SiteCR" coefficient mean?
> ?
> `factor(Site)` sorts levels alphabetically, so BK comes first and becomes the reference. SiteCR is how much CR differs from BK on the log scale; exp() of it is how many times more species per visit CR has than BK, after the model's other terms.
