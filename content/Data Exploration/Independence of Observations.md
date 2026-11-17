---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Independence"
  - "Independence assumption"
  - "Non-independence"
status: seedling
---

# Independence of Observations

**In one line:** observations are independent when knowing the value of one tells you nothing extra about another beyond what the model already says.

> [!info] Before this, it helps to know
> [[Observation]] (the units) · [[Sample Size]] (what dependence quietly shrinks) · [[Residual]] (where dependence shows up)

## The everyday picture
Asking 100 people their opinion. If they are 100 strangers, you have 100 opinions. If they are 10 families of 10 who all talk at dinner, you have something closer to 10. Counting them as 100 makes you far more certain than you should be.

## A tiny example
Ten nest boxes at each of 6 sites, 60 nests. Nests at a site share weather, food and predators. Site-level conditions push all ten up or down together, so the 60 clutch sizes hold less than 60 nests' worth of information about a site-level treatment.

## Start from zero
1. **Standard models multiply the probabilities of the observations together.** That step is only valid if they are independent.
2. **Dependence comes from shared causes the model lacks:** same site, same animal, nearby in space, adjacent in time, related species.
3. **Dependent data hold less information than their count suggests.**
4. **The model doesn't know that.** It uses n as given, so *standard errors come out too small and p-values too small*.
5. **Why it is the most serious assumption:** the other violations distort a little. This one can turn noise into "significant" effects.
6. **Think about it from the design:** how were the data collected? What is the true unit of replication?
7. **Check residuals** against group, time order and location.
8. **Fix by modeling the dependence:** random effects for groups, correlation structures for time and space.

## See it
![[Independence and grouping.png|700]]
*What to look at:* the same 60 points. Ignoring the site colours suggests a tight trend. Seeing them shows six clumps.

## In R
```r
set.seed(7)
pvals <- replicate(500, {
  site <- rep(1:6, each = 10); trt <- rep(c(0, 1), each = 30)          # treatment applied to whole sites
  y <- rnorm(6, 0, 1)[site] + rnorm(60, 0, 1)                           # NO true treatment effect
  summary(lm(y ~ trt))$coefficients[2, 4] })
mean(pvals < 0.05)        # far above the 5% it should be
```
Around 45% of null datasets give p < 0.05. Ignoring grouping manufactures findings.

## In the course
Protocol step 8 ([[Zuur et al. 2010]]). The reason for Units 9 to 13: autocorrelation and mixed models.

## Common confusions
- **"Independence means the predictors are unrelated."** That is collinearity. Independence concerns the observations' errors.
- **"Random sampling guarantees it."** Random sampling of sites doesn't make repeated visits to one site independent.

## Explain it back
- Why does non-independence make p-values too small?
- Name four sources of dependence in ecological data.

*Pass test:* you can spot the true unit of replication in a study description.

## Connections
- **Builds on:** [[Observation]], [[Sample Size]]
- **Leads to:** [[Pseudoreplication]], [[Autocorrelation]], [[Mixed Effects Model|Mixed Model]], [[Effective Sample Size]]
- **Part of:** [[MOC - Data Exploration]], molecular note [[Why non-independence inflates false positives|Why non-independence is the most dangerous violation]]

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
