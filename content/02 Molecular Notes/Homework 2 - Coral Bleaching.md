---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "Homework 2"
  - "HW2"
  - "Coral bleaching homework"
  - "Your first models homework"
  - "bleach.csv"
status: seedling
---

# Homework 2 - Coral Bleaching

> [!summary] In plain words
> Homework 2 fits a linear model of log bleaching and a logistic regression of mass bleaching years against sea temperature anomaly, checks each with the right diagnostics, works both backward to the temperature for 50% bleaching, and plots predictions whose bands stay inside the possible range.

## The question
How do I approach Homework 2, and where are the traps?

## Built from
- [[Coral Bleaching]], [[Temperature Anomaly]]: the data.
- [[Linear Regression]] and [[Logistic Regression]]: the two models.
- [[plot() Diagnostics for lm]], [[Which residuals to use for a GLM]]: Q2.
- [[Back-transformation]], [[Log Transformation]]: Q4.
- [[Inverse Prediction]], [[Prediction Interval]]: Q5 and Q6.
- [[Predictions on Link vs Response Scale]], [[Marginal Effects Plot]]: Q6 and Q7.

## See it
![[Inverse prediction on a logistic curve.png|700]]
*What to look at:* the logistic model of MASS crosses a 50% chance at SST = 0.30, and its band shows how little 4 mass bleaching years pin that down.

## The reasoning, step by step
1. **Look at the data.** 18 years; SST anomaly from −0.51 to 0.71 °C; MASS is 1 in only 4 of them. Four events is very little information for a logistic regression, so expect wide intervals.
2. **Q1a, the linear model.** `lm(LOGBLEACH ~ SST)`. LOGBLEACH is already log10, so the slope means "each 1 °C of anomaly multiplies the percentage of cells bleached by 10^slope".
3. **Q1b, the GLM.** MASS is 0 or 1, so the family is binomial (Bernoulli) with the logit link: `glm(MASS ~ SST, family = binomial)` ([[Why GLMs need a link function]]).
4. **Q2, diagnostics.** For lm: residuals vs fitted, a QQ plot, scale-location and leverage ([[plot() Diagnostics for lm]]). For the logistic model, ordinary residual plots of 0/1 data show two meaningless stripes; use `mgcv::qq.gam(m, rep = 100)` or randomized quantile residuals, which should fall on the line if the model is right ([[Randomized Quantile Residuals]]).
5. **Q3, summarise each model separately.** The lm slope is a change in log10 percentage; the glm slope is a change in log odds of a mass event. Say each in words and state what the diagnostics showed.
6. **Q4, back-transform.** The original percentage is 10^LOGBLEACH. Its histogram is right-skewed while LOGBLEACH is roughly symmetric; ask whether a multiplicative process (bleaching spreading in proportion to how much there already is) makes the log sensible, and note that a percentage is also bounded at 100 ([[Back-transformation]]).
7. **Q5, inverse prediction from the lm.** 50% bleached is log10(50) = 1.70 on the model's scale. Solving 1.70 = a + b × SST gives SST ≈ 0.76, beyond the largest anomaly in the data (0.71), so the answer is an extrapolation and its prediction interval should be read with that caution ([[Inverse Prediction]], [[Extrapolation]]).
8. **Q6, inverse prediction from the glm.** p = 0.5 where the log odds is 0, at SST = −a/b ≈ 0.30. For the interval, predict on the link scale with `se.fit = TRUE`, build ±1.96 SE there, convert with `plogis()`, and find where the band crosses 0.5.
9. **Q7, the figure.** Use the same link-scale recipe across a grid of SST, so the band bends and never drops below 0 or above 1 ([[Marginal Effects Plot]]).

**A worked example in numbers.** lm: LOGBLEACH = 0.697 + 1.318 × SST, so one degree warmer multiplies bleached cells by 10^1.318 ≈ 21. glm: logit(p) = −2.57 + 8.61 × SST (SE 4.39, p = 0.050), so the odds of a mass event multiply by e^(8.61 × 0.1) ≈ 2.4 for each 0.1 °C. Crossing points: 50% of cells at SST ≈ (1.699 − 0.697) / 1.318 = 0.76; a 50% chance of a mass event at 2.57 / 8.61 = 0.30. The lm's 95% prediction band crosses 50% between SST ≈ 0.45 and 1.15. The glm's band is open-ended: its upper edge reaches 0.5 at SST ≈ 0.07, but its lower edge never reaches 0.5 even at 1.2 °C, because 4 mass events carry little information. "At least 0.07, upper limit unknown" is the honest answer.

## So in practice
Keep the two models' scales straight in every sentence: the lm talks about log10 percentage of cells bleached, the glm about the probability that a year is a mass bleaching year.

## In R
```r
bleach <- read.csv("https://raw.githubusercontent.com/LivingLandscapes/Course_EcologicalModeling/master/data/bleach.csv")
m_lm <- lm(LOGBLEACH ~ SST, bleach); m_glm <- glm(MASS ~ SST, family = binomial, bleach)
round(rbind(lm = coef(m_lm), glm = coef(m_glm)), 3)
grid <- data.frame(SST = seq(-0.6, 1.2, by = 0.001))
pl <- predict(m_lm, grid, interval = "prediction")
x50 <- function(v) grid$SST[which.min(abs(v - log10(50)))]
round(c(fit = x50(pl[, "fit"]), from = x50(pl[, "upr"]), to = x50(pl[, "lwr"]), max_SST_in_data = max(bleach$SST)), 2)
pg <- predict(m_glm, grid, type = "link", se.fit = TRUE)
lo <- plogis(pg$fit - 1.96 * pg$se.fit); hi <- plogis(pg$fit + 1.96 * pg$se.fit)
round(c(SST_p50 = -coef(m_glm)[[1]] / coef(m_glm)[[2]], from = min(grid$SST[hi >= 0.5]), to = min(grid$SST[lo >= 0.5])), 2)
```

## What would go wrong otherwise
Building the glm confidence band on the probability scale as fit ± 1.96 × SE, which gives negative probabilities at cool temperatures, the exact error the homework warns about.

## Explain it back
- Why is the lm's answer to Q5 an extrapolation?
- Why do you predict on the link scale and then use plogis()?

*Pass test:* you can fit, check and interpret both models and produce both inverse predictions with honest intervals.

## Connections
- **Related:** [[Linear Model vs GLM]], [[How to interpret a logistic regression coefficient]], [[Homework 3 - Woodland Birds and Landscape Scale]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], [[MOC 22 - Homework|MOC - Homework]]

## Flashcards

Which family and link fit the MASS response?
??
Binomial (Bernoulli) with the logit link.
![[Inverse prediction on a logistic curve.png]]
++++

Where does the logistic model give a 50% chance of mass bleaching?
??
At SST = −intercept / slope ≈ 0.30 °C anomaly.
++++

Why is the lm's 50% answer (SST ≈ 0.76) shaky?
??
It lies beyond the warmest year in the data (0.71), so it is an extrapolation.
++++

How do you check a logistic regression's fit when residual plots show stripes?
??
Use qq.gam() from mgcv or randomized quantile residuals.
++++
