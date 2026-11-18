---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Observations are independent when knowing the value of one tells you nothing extra about another beyond what the model already says."
aliases:
  - "Independence"
  - "Independence assumption"
  - "Non-independence"
  - "independent observations"
status: seedling
---

# Independence of Observations

Ask 100 people their opinion. If they are 100 strangers, you have 100 opinions; if they are 10 families of 10 who all talk at dinner, you have something closer to 10, and counting them as 100 makes you far more certain than you should be. Observations are **independent** when knowing the value of one tells you nothing extra about another beyond what the model already says ([[Observation]]). Standard models multiply the probabilities of the observations together, and that step is only valid if they are independent. Dependence comes from shared causes the model lacks: the same site, the same animal, nearness in space or time, related species. Ten nest boxes at each of six sites share each site's weather, food and predators, so their 60 clutch sizes hold far less than 60 nests' worth of information about a treatment applied to whole sites.

Dependent data hold less information than their count suggests, but the model does not know that. It uses n as given, so standard errors and p-values come out too small ([[Sample Size]], [[Effective Sample Size]]). The simulation below makes this concrete. A treatment is applied to whole sites, sites differ at random, and there is no true treatment effect, yet a model that ignores sites calls the effect significant in about 46% of datasets, instead of the 5% it should. Ignoring grouping manufactures findings, which is why this is the most serious of the assumptions: other violations distort a little, this one can turn noise into "significant" effects ([[Why non-independence inflates false positives|Why non-independence is the most dangerous violation]], [[Pseudoreplication]]).

Think about independence from the design: how were the data collected, and what is the true [[Sampling Unit|unit of replication]]? Then check residuals ([[Residual]]) against group, time order and location; the figure shows 60 points that look like a tight trend until their six site colours reveal six clumps. Fix it by modeling the dependence, with [[Random Effect|random effects]] for groups ([[Mixed Effects Model|Mixed Model]]) and [[Correlation Structure|correlation structures]] for time and space ([[Autocorrelation]]), which is the subject of Units 9 to 13 of the course. Two confusions: independence is about the observations' errors, not about [[Predictor Variable|predictors]] being unrelated (that is [[Collinearity|collinearity]]); and [[Random Sampling|random sampling]] of sites does not make [[Repeat-Visit Design|repeated visits]] to one site independent. This is step 8 of the protocol ([[Zuur et al. 2010]]).

![[Independence and grouping.png|700]]
*What to look at:* the same 60 points. Ignoring the site colours suggests a tight trend. Seeing them shows six clumps.

```r
set.seed(7)
pvals <- replicate(500, {
  site <- rep(1:6, each = 10); trt <- rep(c(0, 1), each = 30)          # treatment applied to whole sites
  y <- rnorm(6, 0, 1)[site] + rnorm(60, 0, 1)                           # NO true treatment effect
  summary(lm(y ~ trt))$coefficients[2, 4] })
mean(pvals < 0.05)        # far above the 5% it should be
```
Around 45% of null datasets give p < 0.05. Ignoring grouping manufactures findings.

## Connections
- **Builds on:** [[Observation]], [[Sample Size]], [[Sampling Unit]], [[Predictor Variable]], [[Collinearity]], [[Random Sampling]]
- **Leads to:** [[Pseudoreplication]], [[Autocorrelation]], [[Mixed Effects Model|Mixed Model]], [[Effective Sample Size]], [[Random Effect]], [[Correlation Structure]], [[Repeat-Visit Design]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[Why non-independence inflates false positives|Why non-independence is the most dangerous violation]]

## Flashcards

What does independence of observations mean?
??
After accounting for the model, one observation's value carries no information about another's.
![[Independence and grouping.png]]
++++

What is the consequence of ignoring non-independence?
??
Standard errors and p-values are too small, so false positives rise.
++++

What are common sources of dependence in ecological data?
??
Repeated measures on a unit, grouping in sites, closeness in space, closeness in time, shared ancestry.
++++
