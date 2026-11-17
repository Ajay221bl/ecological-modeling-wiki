---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Misreading p-values"
  - "p-value misconceptions"
  - "What p < 0.05 means"
status: seedling
---

# What a p-value does and does not tell you

> [!summary] In plain words
> a p-value is the probability of getting a test statistic at least as extreme as the one observed if the null hypothesis and all model assumptions were true; it is not the probability the null is true, not the size of the effect, and not the chance a result will replicate.

## The question
My p-value is 0.03. What does that actually mean?

## Built from
- [[P-value]] and [[Null Hypothesis]].
- [[Statistical Significance]] and [[Significance Level]].
- [[Criticisms of p-values]].
- [[Effect Size]] and [[Confidence Interval]].

## The reasoning, step by step
1. **Assume the null is true,** for example slope = 0.
2. **Imagine repeating the study many times;** the test statistic would vary.
3. **The p-value is the share of those imaginary results at least as extreme as yours.**
4. **Small p:** your data would be surprising under the null. That is all.
5. **It does not give P(null | data);** that needs a prior (Bayes).
6. **It mixes effect size and sample size:** a trivial effect with huge n gets a tiny p.
7. **The American Statistical Association's 2016 statement** makes these same points; Anderson and Burnham (2002) argue for model selection and effect sizes instead of significance tests in observational ecology.

| p = 0.03 does mean | p = 0.03 does not mean |
|---|---|
| Data this extreme happen 3 percent of the time under H₀ | 3 percent chance H₀ is true |
| Evidence against H₀, given the assumptions | 97 percent chance the effect is real |
| | The effect is large or important |
| | A repeat study will also give p < 0.05 |
With 100,000 points and a true slope of 0.01, the estimated slope is 0.007 with p = 0.03, yet R² = 0.00005: "significant" but explaining almost nothing.

## So in practice
Report the estimate and its confidence interval first; mention the p-value as one piece of evidence.

## In R
```r
set.seed(1); x <- rnorm(1e5); y <- 0.01 * x + rnorm(1e5)
s <- summary(lm(y ~ x))$coef[2, ]; round(c(slope = s[[1]], p = s[[4]], R2 = summary(lm(y ~ x))$r.squared), 5)
```

## What would go wrong otherwise
"p = 0.06, so there is no effect." It means the data are not surprising enough under H₀ at the 0.05 cut-off; the effect may still be real.

## Explain it back
- What is a p-value conditional on?

*Pass test:* you can say three things a p-value is not.

## Connections
- **Related:** [[Statistical vs Biological Significance]], [[Type I and Type II Errors]], [[Null Hypothesis Testing vs Model Selection]], [[Frequentist vs Bayesian Inference]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

Define a p-value.
??
The probability of a test statistic at least as extreme as observed, assuming the null hypothesis and model are true.
++++

Is a p-value the probability that the null is true?
??
No.
++++
