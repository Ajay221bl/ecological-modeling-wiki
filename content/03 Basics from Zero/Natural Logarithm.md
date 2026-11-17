---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The natural logarithm, written ln or `log()` in R, is the logarithm with base e ≈ 2.718. It is the log that statistics uses by default."
aliases:
  - "ln"
  - "Natural log"
  - "log()"
  - "e"
status: seedling
---

# Natural Logarithm

A bank pays interest. Pay 100% once a year and 1 pound becomes 2. Pay 50% twice a year and it becomes 1.5 × 1.5 = 2.25. Pay a tiny share every second, compounding all the time, and 1 pound grows to about 2.718 in a year. That limit of smooth, continuous growth is the number **e** ≈ 2.718, and the **natural logarithm**, written ln (or `log()` in R), is the [[Logarithm]] with base e. It answers "how many steps of smooth growth by e get me here?", so ln(e) = 1 and ln(1) = 0 (no growth). Its reverse is exp(), which raises e to a power ([[Exponential Function]]), so ln undoes exp and exp undoes ln ([[Exponent]]).

A few values build intuition. ln(10) ≈ 2.30 and ln(100) ≈ 4.61, so making something ten times bigger adds about 2.30 on the natural log scale. The most useful property is for small changes: ln(1.05) ≈ 0.049, so a change of 0.05 on the natural log scale is roughly a 5% change. This works because, for small x, ln(1 + x) is very close to x. Differences on the ln scale are therefore close to proportional changes, which is exactly how ecologists think about growth and decline. Any base would give a valid log, but statistics settled on e because the maths of continuous growth, calculus and likelihood is simplest in base e, so software uses it by default.

This is why model outputs "on the log scale" become readable once you know that `log()` in R means ln (use `log10()` for base 10: ln(100) = 4.61 while log₁₀(100) = 2). In a Poisson GLM with a log link, a slope of 0.2 means the mean count is multiplied by exp(0.2) ≈ 1.22 for each unit of the predictor, a 22% increase ([[Poisson Regression]], [[Link Function]]); and a slope of 0.05 means roughly a 5% increase. Every count and survival model in the course uses natural logs, from Powell and Gale's log-likelihoods ([[Powell and Gale 2015 Ch3]]) onward. Do not confuse the number e with the "e" in R output such as 3e-05, which is scientific notation meaning 3 × 10⁻⁵ ([[Scientific Notation in R Output]]).

![[Logarithms and exponents.png|700]]
*What to look at:* the log curve passes through (1, 0): a value of 1 always has a log of 0.

```r
exp(1)          # 2.718282: the number e
log(exp(1))     # 1
log(10)         # 2.302585
log(1.05)       # 0.0488: about a 5% change
log10(10)       # 1: base 10 is a different log
```

## Connections
- **Builds on:** [[Logarithm]], [[Exponent]]
- **Leads to:** [[Exponential Function]], [[Link Function]], [[Poisson Regression]], [[Likelihood]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Logarithms and Exponents]]
- **Go deeper:** [[Lognormal Distribution]]

## Flashcards

What does log() compute in R?
??
The natural log, base e ≈ 2.718 (ln). Use log10() for base 10.
![[Logarithms and exponents.png]]
++++

Why does statistics use base e?
??
The maths of continuous growth, calculus and likelihood is simplest in base e, so it became the default.
++++
