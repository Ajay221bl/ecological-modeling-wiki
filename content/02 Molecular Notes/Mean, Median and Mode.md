---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Measures of centre"
  - "Mean vs median"
  - "Central tendency"
status: seedling
---

# Mean, Median and Mode

> [!summary] In plain words
> the mean is the balance point of the data, the median the middle value, and the mode the most common value; they agree for symmetric single-peaked data, and in right-skewed ecological data the mean is pulled above the median toward the long tail.

## The question
Which average should I report?

## Built from
- [[Mean]], [[Median]], [[Mode]].
- [[Quantile]] and [[Outlier]].
- [[Expected Value]].

## The reasoning, step by step
1. **Mean:** Σx / n; uses every value, so one huge value moves it.
2. **Median:** middle value; ignores how far the extremes are.
3. **Mode:** peak of the distribution; useful for categories and for posterior summaries (the MAP estimate).
4. **Right skew** (counts, biomass, home ranges): mode < median < mean.
5. **Models usually target the mean** (expected value), even when you report the median descriptively.
6. **Back-transforming a mean of logs** gives the geometric mean, closer to the median than the arithmetic mean ([[Jensen's Inequality]]).
Home ranges (ha): 2, 3, 3, 4, 5, 40. Mean 9.5, median 3.5, mode 3. One animal makes the mean three times the median.

## So in practice
For skewed data, show the distribution and report the median with the quartiles; for modelling, decide whether you want the mean (expected value) or a typical value.

## In R
```r
x <- c(2, 3, 3, 4, 5, 40)
c(mean = mean(x), median = median(x), mode = as.numeric(names(which.max(table(x)))))
```

## What would go wrong otherwise
Reporting only the mean for strongly skewed data and calling it "typical".

## Explain it back
- In right-skewed data, which is largest?

*Pass test:* you can predict the order of the three from a histogram.

## Connections
- **Related:** [[Transform the data or change the model]], [[Equal-tailed vs Highest Density Interval]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

Order of mean, median, mode in right-skewed data?
??
Mode < median < mean.
++++

Which centre is robust to outliers?
??
The median.
++++
