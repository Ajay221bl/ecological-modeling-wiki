---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The logistic exposure model is a GLM for daily survival that uses a modified logit link raised to the length of each check interval, so nest or animal covariates can explain survival across intervals of different lengths."
aliases:
  - "Logistic exposure"
  - "Shaffer logistic exposure"
  - "logexp link"
  - "Nest survival with covariates"
status: seedling
---

# Logistic Exposure Model

The **logistic exposure model** is a GLM for daily survival that uses a modified [[Logit Link|logit link]] raised to the length of each check interval, so nest or animal [[Predictor Variable|covariates]] can explain survival across intervals of different lengths ([[Mayfield Nest Survival]], [[Logistic Regression]], [[Link Function]]). It was introduced by Shaffer (2004). Each record is one check interval, survived (1) or failed (0), with its length t in days, and the model is P(survive interval) = DSR^t with logit(DSR) = β₀ + β₁x.

Covariates can be nest-level, such as vegetation, or interval-level, such as date, nest age or weather. The constant-DSR version reproduces Mayfield's idea, and covariates relax its constant-survival assumption; [[Program MARK]]'s nest survival model fits the same kind of model ([[Exposure Days]]). The code below writes the "logexp" link for `glm()` and fits 400 intervals of 2 to 5 days in which survival rises with cover; the estimates are 2.65 and 1.49, against the truth of 2.5 and 1.5.

It extends [[Powell and Gale 2015]] Ch9 and is not named in the course sources ([[Known-fate Models]]). Don't use ordinary logistic regression on nest success, which ignores unequal [[Offset|exposure]] and early failures.

```r
logexp <- function(expos) structure(list(linkfun = function(mu) qlogis(mu^(1 / expos)), linkinv = function(eta) plogis(eta)^expos,
  mu.eta = function(eta) expos * plogis(eta)^(expos - 1) * dlogis(eta), valideta = function(eta) TRUE, name = "logexp"), class = "link-glm")
set.seed(8); n <- 400; cover <- runif(n); t_int <- sample(2:5, n, TRUE); surv <- rbinom(n, 1, plogis(2.5 + 1.5 * cover)^t_int)
round(coef(glm(surv ~ cover, family = binomial(link = logexp(t_int)))), 2)   # truth 2.5, 1.5
```

## Connections
- **Builds on:** [[Mayfield Nest Survival]], [[Logistic Regression]], [[Link Function]], [[Logit Link]], [[Predictor Variable]], [[Offset]]
- **Leads to:** [[Exposure Days]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

In the logistic exposure model, what is P(surviving an interval of t days)?
??
DSR^t, with logit(DSR) a linear predictor.
++++
