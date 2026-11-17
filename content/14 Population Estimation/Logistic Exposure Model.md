---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Logistic exposure"
  - "Shaffer logistic exposure"
  - "logexp link"
  - "Nest survival with covariates"
status: seedling
---

# Logistic Exposure Model

**In one line:** the logistic exposure model is a GLM for daily survival that uses a modified logit link raised to the length of each check interval, so nest or animal covariates can explain survival across intervals of different lengths.

> [!info] Before this, it helps to know
> [[Mayfield Nest Survival]] · [[Logistic Regression]] · [[Link Function]]

## Start from zero
1. **Introduced by Shaffer (2004).**
2. **Each record is one check interval:** survived (1) or failed (0), with its length t in days.
3. **Model:** P(survive interval) = DSR^t, with logit(DSR) = β₀ + β₁x.
4. **Covariates** can be nest-level (vegetation) or interval-level (date, nest age, weather).
5. **Constant-DSR version reproduces Mayfield's idea;** covariates relax its constant-survival assumption.
6. **Program MARK's nest survival model** fits the same kind of model.

## In R
```r
logexp <- function(expos) structure(list(linkfun = function(mu) qlogis(mu^(1 / expos)), linkinv = function(eta) plogis(eta)^expos,
  mu.eta = function(eta) expos * plogis(eta)^(expos - 1) * dlogis(eta), valideta = function(eta) TRUE, name = "logexp"), class = "link-glm")
set.seed(8); n <- 400; cover <- runif(n); t_int <- sample(2:5, n, TRUE); surv <- rbinom(n, 1, plogis(2.5 + 1.5 * cover)^t_int)
round(coef(glm(surv ~ cover, family = binomial(link = logexp(t_int)))), 2)   # truth 2.5, 1.5
```

## In the course
Extends [[Powell and Gale 2015]] Ch9 (not named in the course sources).

## Common confusions
- **"Use ordinary logistic regression on nest success."** That ignores unequal exposure and early failures.

## Explain it back
- What exponent is applied to daily survival in each record?

*Pass test:* you can fit a logistic exposure model with covariates.

## Connections
- **Builds on:** [[Mayfield Nest Survival]], [[Logistic Regression]], [[Link Function]]
- **Leads to:** [[Exposure Days]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

In the logistic exposure model, what is P(surviving an interval of t days)?
??
DSR^t, with logit(DSR) a linear predictor.
++++
