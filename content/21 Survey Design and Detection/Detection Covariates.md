---
type: atomic
tags:
  - survey-design
  - detection
  - predictors
  - flashcards
aliases:
  - "detection covariate"
  - "detectability covariates"
  - "nuisance covariates"
status: seedling
---

# Detection Covariates
**In one line:** Notes about the survey conditions (wind, cloud, observer, time) that we put in the model because they change how easy birds are to notice, not how many birds live there.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (a covariate is just a recorded variable) · [[Detection Probability]] (what these covariates are meant to adjust for)

## Start from zero
You stand in a field for a few minutes and write down what you see and hear. Today the wind is roaring. You can barely hear songs. You record 4 species. Yesterday, at a similar point, it was calm and you recorded 7.

Did the birds change, or did your hearing? Probably your hearing. So you also write down the conditions: wind strength, cloud or rain, who was surveying, what time it was.

A **covariate** is a recorded variable that helps explain the thing you are studying (another name is [[Predictor Variable]]). A **detection covariate** is one we think changes the **chance of noticing birds**, not the birds themselves.

## Why it exists
Ecologists sort predictors into two kinds:
- **State (habitat) covariates** are thought to change the true number of birds or species (for example shrub cover).
- **Detection covariates** are thought to change only how many get noticed (wind drowning out song, rain keeping birds quiet).

Including detection covariates removes predictable "noise" caused by conditions, so the comparison you care about is fairer. Without them, if one property happened to be surveyed on windier days, its lower counts would be blamed on the property. They also soak up variation, which can make the estimates you care about more precise.

An honest caveat. In an [[Occupancy Model]], detection covariates sit on a separate "detection" level, cleanly apart from presence. In an ordinary GLM or GLMM there is only **one** level. There, a "detection" covariate simply adjusts the expected count; the model cannot tell whether wind lowered detection or lowered the birds present. Calling it a detection covariate is an interpretation we bring from biology.

## A tiny example
Average species per visit by wind level (made-up numbers):

| Wind | Visits | Average species |
|---|---|---|
| 0 (calm) | 10 | 7 |
| 2 (breezy) | 10 | 5 |

Suppose Site A got mostly calm mornings and Site B mostly breezy ones. Without Wind in the model, B looks 2 species poorer. With Wind in the model, that 2-species gap is credited to the wind, and the site comparison is made "as if" the weather had been the same.

## In my project
`Wind` (0 = calm, higher = windier) and `Sky` (0 = clear, higher = more cloud or precipitation) stay the same within a visit, so the wrangling script takes the first value per visit (GrasslandBirdRichness_Wrangling.R):

```r
condSum <-
  rawDat %>%
  group_by(PtNum, Date, Survey) %>%
  summarize(Wind = first(Wind),
            Sky = first(Sky),
            .groups = "drop")
```

In words: "group the rows by visit, and for each visit keep the first Wind and Sky value" ([[group_by and summarize]]).

Per visit, Wind is 0 at 871 visits, 1 at 278, 2 at 93 and 3 at only 8. Sky is 0 at 794, 1 at 369, 2 at 67, 3 at 6, 4 at 13 and 5 at just 1. Wind varies within every site and both years, so it is not confounded with Site ([[EDA Findings]]). The script treats both as numbers; whether to use categories instead ([[Factors]]), pooling rare levels, is an open question ([[Open Questions]]). Reasoning: [[Why include wind and sky]].

Other detection-type variables in the file that are **not** in the model: `Obs` ([[Observer Effects]]), `StartTime` (5:20 to 10:50) and `Date`. Date is tricky: it is almost entirely tied to year and property (CR was surveyed May 16-22, 2023; HB June 1-9, 2023; the 2022 sites June 6 to July 12), so it cannot be added without [[Confounding]] with Site.

## Common confusions
- **"A negative Wind effect proves wind lowers detection."** In a one-level model it only shows fewer species were recorded in wind. Detection vs presence is our interpretation.
- **"Covariates with few levels are fine as numbers."** Treating Sky 0-5 as a number assumes equal steps between levels; that is a choice to check.
- **"Add every condition."** Only if it varies independently of what you compare; Date here is tangled with Site.

## Connections
- **Builds on:** [[Predictor Variable]], [[Detection Probability]], [[Imperfect Detection]]
- **Leads to:** [[Why include wind and sky]], [[Observer Effects]], [[Occupancy Model]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]

> [!question]- Check yourself
> In my Poisson GLMM, a negative Wind coefficient appears. Can I say "wind lowers detection"?
> ?
> Not from this model alone. It shows fewer species were recorded in windier conditions. Saying that is due to detection rather than fewer birds present is a biological interpretation; only a model with a separate detection level (like occupancy) can estimate it as detection.
