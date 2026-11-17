---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Pearson correlation"
  - "cor()"
  - "Correlation coefficient"
status: seedling
---

# Correlation

**In one line:** the correlation coefficient r, a number from −1 to +1, measures how tightly two variables follow a straight line together, and whether the line goes up or down.

> [!info] Before this, it helps to know
> [[Covariance]] (correlation is covariance rescaled) · [[Standard Deviation]] (the rescaling uses SDs)

## The everyday picture
Ice-cream sales and sunny days. On sunny days, sales are high; on grey days, low. The two **move together**. Now think of umbrella sales and sunny days: when one is high the other is low. They **move in opposite directions**. And shoe size and favourite colour? No pattern at all.

Correlation turns "move together", "move opposite" and "no pattern" into one number: close to +1, close to −1, or close to 0.

*Where the picture stops working:* moving together doesn't mean one *causes* the other. Ice-cream doesn't cause sunshine; both follow the weather. That's [[Correlation vs Causation]].

## Words you'll need
- **Deviation:** a value minus its mean.
- **Covariance:** whether x and y tend to be above their means together; it depends on units ([[Covariance]]).
- **Correlation coefficient (r, or ρ "rho" for the population value):** the covariance divided by both SDs, so it always lies between −1 and +1.
- **Linear relationship:** one that follows a straight line.
- **Collinearity:** when two predictors in a model are strongly correlated with each other ([[Collinearity]]).

## A tiny example
Three sites: rainfall x = 1, 2, 3 and grass y = 2, 4, 7. Means: x̄ = 2, ȳ = 4.33.

| x − 2 | y − 4.33 | product |
|---|---|---|
| −1 | −2.33 | +2.33 |
| 0 | −0.33 | 0 |
| +1 | +2.67 | +2.67 |
| | | sum = **5** |

- Every product is positive or zero: when rain is above average, grass is too. They move together.
- Covariance = 5 / (n − 1) = 5 / 2 = **2.5** (units: rain × grass, hard to read).
- SDs: s_x = 1, s_y = 2.52.
- r = 2.5 / (1 × 2.52) ≈ **0.99**. Almost a perfect rising line.

## Start from zero
1. **Two variables measured on the same observations sometimes move together.** Wetter sites tend to have more grass.
2. **"Together" means both above their means at the same time, or both below.** "Opposite" means one above while the other is below.
3. **Multiply each pair's deviations and average them.** That's the [[Covariance]]: positive when the two move together, negative when they move opposite.
4. **Covariance depends on the units, so divide by both SDs:** $r = \frac{\text{cov}(x, y)}{s_x s_y}$. *Why:* measuring rain in mm instead of cm would make the covariance 10 times bigger without the relationship changing. Dividing by both SDs cancels the units, so r always sits between −1 and +1.
5. **Reading r:** +1 is a perfect rising line, −1 a perfect falling line, and 0 no *straight-line* relationship. Around ±0.3 is weak, around ±0.7 is strong.
6. **r only sees straight lines.** A perfect U-shape can have r = 0. *Why:* on the left half the products are negative, on the right half positive, and they cancel. So always plot the data first ([[Pairplot]]).

## See it
![[Correlation panels.png|700]]
*What to look at:* as r gets further from 0, the cloud squeezes toward a line. The sign only says which way the line tilts.

## Why it is this way
We want one number for "how strongly do these two go together?" that doesn't depend on the units, so we can compare rain-and-grass with temperature-and-mass. Dividing the covariance by both SDs does exactly that. Correlation is the quick screen for relationships, and above all for predictors that are related to *each other*. Strongly correlated predictors carry nearly the same information, so the model can't tell which deserves the credit, and their coefficients become unstable ([[Collinearity]], [[Why collinearity inflates standard errors|Why collinearity makes coefficients unstable]]). Zuur et al. 2010's protocol uses correlations and pairplots to catch this before modeling.

## In R
```r
x <- c(1, 2, 3); y <- c(2, 4, 7)
cov(x, y)                       # 2.5
cor(x, y)                       # 0.993
cor(mtcars[, c("mpg", "wt", "hp")])   # correlation matrix of several variables
cor(1:10, (1:10 - 5.5)^2)       # 0: a perfect U-shape, but no straight-line correlation
```

## In the course
Tredennick et al. 2021 screen 96 weather covariates by their correlation with growth rate (|ρ| > 0.3) as an *exploratory* step, and warn that anything found that way is a hypothesis, not a result ([[Tredennick et al. 2021]]). Diniz-Filho et al. 2003 measure autocorrelation, which is a correlation of a variable with *itself* at nearby places ([[Spatial Autocorrelation]]).

## Common confusions
- **Correlation is not causation.** Rain and grass may both follow elevation ([[Correlation vs Causation]]).
- **r = 0 does not mean "unrelated".** It means "no straight-line relation". A U-shape can be perfectly related with r = 0.
- **r vs R².** r is the correlation between two variables. R² is the proportion of variance a model explains. In a one-predictor regression, R² = r² ([[R-squared]]).
- **"A steep line means a high r."** r is about how *tightly* points hug the line, not how steep it is.

## Explain it back
- Use ice-cream, umbrellas and shoe size to explain r near +1, −1 and 0.
- Why do we multiply the deviations, and why divide by both SDs?
- Why can a U-shaped relationship have r = 0?

*Pass test:* you can look at a scatterplot and guess r roughly, and say when r would be misleading.

## Connections
- **Builds on:** [[Covariance]], [[Standard Deviation]]
- **Leads to:** [[Collinearity]], [[Correlation vs Causation]], [[R-squared]], [[Autocorrelation]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Pairplot]]

## Flashcards

What does the correlation coefficient r measure, and what is its range?
??
How tightly two variables follow a straight line and in which direction; from −1 to +1.
![[Correlation panels.png]]
++++

Why can a strong U-shaped relationship have r ≈ 0?
??
r only measures straight-line association; the rising and falling halves cancel out.
++++

Why does correlation between predictors matter for modeling?
??
Strongly correlated predictors (collinearity) make coefficient estimates unstable with inflated standard errors.
++++
