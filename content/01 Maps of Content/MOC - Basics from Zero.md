---
type: moc
tags:
  - moc
  - basics
aliases: []
status: seedling
---

# MOC - Basics from Zero

The maths and vocabulary every other note leans on, explained from nothing. If a symbol in another note looks alien, it is explained here.

## 1. Data words
- [[Variable]]: a variable is one kind of thing you record that can come out differently from case to case, such as species richness, wind speed or habitat type.
- [[Observation]]: an observation is one case on which you recorded your variables, such as one survey point on one visit. In a data table it is one row.
- [[Population]]: in statistics, the population is the whole set of things your question is about: every nest, plot or day you want your conclusion to cover.
- [[Sample]]: a sample is the part of the population you actually measured.
- [[Parameter]]: a parameter is a fixed but unknown number that describes a whole population or process, such as the true survival rate of elk in a park.
- [[Estimate]]: an estimate is a number calculated from your sample as a best guess at a parameter. It wears a hat: θ̂ ("theta-hat") is the estimate of θ.
- [[Estimator]]: an estimator is the recipe (a formula or procedure) that turns data into an estimate, such as "add up the values and divide by how many there are".
- [[Continuous Data]]: continuous data can take any value within a range, with no gaps, such as a bird's mass of 21.38 g.
- [[Discrete Data]]: discrete data come in separate steps with gaps between them, usually whole-number counts like 0, 1, 2 nests.
- [[Categorical Variable]]: a categorical variable records which group something belongs to, using names rather than amounts, such as habitat type or observer. R calls it a **factor**,...
- [[Binary Variable]]: a binary variable has only two possible values, such as alive or dead, present or absent, usually coded 1 and 0.

## 2. Symbols and arithmetic
- [[Greek Letters and Notation]]: statistics uses a small set of symbols as shorthand: Greek letters stand for unknown true values, ordinary letters stand for data you measured, and a little...
- [[Summation Notation]]: Σ (capital sigma) is shorthand for "add up all of these". Its multiplying twin, ∏, has its own note: Product Notation.
- [[Product Notation]]: ∏ (capital pi) is shorthand for "multiply all of these together", just as Σ means "add all of these up".
- [[Exponent]]: an exponent says how many times to multiply a number by itself: 2³ = 2 × 2 × 2 = 8.
- [[Logarithm]]: a logarithm runs an exponent backwards: it answers "how many times did I multiply to get here?" Since 2³ = 8, the log base 2 of 8 is 3.
- [[Natural Logarithm]]: the natural logarithm, written ln or `log()` in R, is the logarithm with base e ≈ 2.718. It is the log that statistics uses by default.
- [[Exponential Function]]: the exponential function, exp(x) = eˣ, raises e ≈ 2.718 to the power x. It undoes the natural log, and its answer is always positive.
- [[Scientific Notation in R Output]]: R writes very big or very small numbers in "e notation", so `3.2e-05` means 3.2 × 10⁻⁵ = 0.000032, and `< 2e-16` means "smaller than R can usefully show".
- [[Functions in Maths]]: a function is a rule that turns each input into exactly one output, written y = f(x) and read "y equals f of x".
- [[Factorial]]: a factorial, written n! and read "n factorial", multiplies a whole number by every whole number below it down to 1: 4! = 4 × 3 × 2 × 1 = 24. It counts the...
- [[Binomial Coefficient]]: the binomial coefficient $\binom{N}{n}$, read "N choose n", counts how many different groups of n you can pick from N things when order doesn't matter.

## 3. Summaries of data
- [[Mean]]: the mean is the "fair share" value: add all the values up and share the total out equally, one share per value.
- [[Variance]]: variance measures how spread out values are: it's the average of the squared distances of the values from their mean.
- [[Standard Deviation]]: the standard deviation (SD) is the square root of the variance: roughly, the typical distance of a value from the mean, in the data's own units.
- [[Standard Error]]: the standard error (SE) is the standard deviation of an *estimate*: how much your answer would wobble if you repeated the whole study with fresh samples.
- [[Covariance]]: covariance measures whether two variables tend to be above their averages at the same time (positive), in opposite directions (negative), or with no pattern...
- [[Correlation]]: the correlation coefficient r, a number from −1 to +1, measures how tightly two variables follow a straight line together, and whether the line goes up or...

## Related molecular notes
- [[Variable and Observation]]: A data table has two directions. Going across, each column is one **variable** (one thing you measured). Going down, each row is one **observation** (one...
- [[Population and Sample]]: The **population** is everything you want to know about; the **sample** is the part you actually measured. Statistics is the craft of saying something...
- [[Parameter vs Estimate]]: A **parameter** is the true, fixed number describing a population, which you almost never see. An **estimate** is your best guess at it from a sample. The...
- [[Continuous vs Discrete Data]]: Data come in kinds. **Continuous** data can take any value in a range (body mass 23.47 g). **Discrete** data come in separate steps, usually counts (3...
- [[Logarithms and Exponents]]: An **exponent** says "multiply this many times"; a **logarithm** asks the reverse question, "how many times was it multiplied?". The **exponential...
- [[Factorials and Binomial Coefficient]]: A **factorial** (n!) counts the ways to put n things in order. The **binomial coefficient** ("N choose n") counts the ways to pick n things from N when...

## Related MOCs
[[MOC - Why We Do It This Way]] · [[MOC - Course Readings]] · [[Start Here]]
