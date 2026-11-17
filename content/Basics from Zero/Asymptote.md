---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Plateau"
  - "Saturation level"
status: seedling
---

# Asymptote

**In one line:** an asymptote is a level that a curve gets closer and closer to as x keeps growing (or shrinking), without ever settling exactly on it.

> [!info] Before this, it helps to know
> [[Nonlinear Function]] (curves) · [[Functions in Maths]] (input to output rules)

## The everyday picture
Filling a sponge. The first splash of water soaks in fast. Each later splash soaks in less. The sponge's full weight is a ceiling it approaches but can't pass. That ceiling is the asymptote.

*Where the picture stops working:* a sponge does become completely full. A mathematical asymptote is only ever approached.

## Words you'll need
- **Limit:** the value a function approaches as x grows.
- **Saturate:** to stop responding because something else has become limiting.
- **Half-saturation constant:** the x at which the curve reaches half its asymptote.

## A tiny example
Feeding rate = 10x / (5 + x) prey per hour, where x is prey density.
- x = 5: 50 / 10 = **5** (half of 10).
- x = 20: 200 / 25 = **8**.
- x = 95: 950 / 100 = **9.5**.
- x = 995: 9.95. Always creeping toward **10**, never there.

## Start from zero
1. **Some things can't grow forever.** A predator can only handle so many prey per hour.
2. **So the response flattens.** Each extra unit of x adds less than the one before.
3. **The level it flattens toward is the asymptote.** Here 10.
4. **A second number says how fast it gets there.** *Why:* two predators with the same maximum can differ in how quickly they reach it. Here 5 is the density giving half the maximum.
5. **Probabilities have two asymptotes.** A logistic curve flattens at 0 and at 1 ([[Logistic Function]]).

## See it
![[Asymptote.png|700]]
*What to look at:* the curve nears the dashed line but the gap never closes.

## Why it is this way
Limits are everywhere in biology: stomach capacity, carrying capacity, 100% occupancy. A straight line ignores them and predicts nonsense at high x. Functions with asymptotes have parameters that mean something biological, such as "maximum rate", which is why Hobbs and Hooten favour them over polynomials.

## In R
```r
x <- c(5, 20, 95, 995)
10 * x / (5 + x)          # 5.00 8.00 9.50 9.95
curve(10 * x / (5 + x), 0, 100, ylim = c(0, 11)); abline(h = 10, lty = 2)
# fitting one to data
set.seed(1); xx <- runif(40, 0, 60); yy <- 10 * xx / (5 + xx) + rnorm(40, 0, 0.5)
coef(nls(yy ~ a * xx / (b + xx), start = list(a = 8, b = 3)))   # near 10 and 5
```
`nls()` fits nonlinear functions by least squares and needs starting guesses.

## In the course
Asymptotic functions are one of Hobbs and Hooten's four families ([[Hobbs and Hooten 2015 Ch2]]). [[Carrying Capacity]] is the asymptote of logistic population growth.

## Common confusions
- **"The curve reaches the asymptote."** It only approaches it. Data near the ceiling are needed to estimate it well.
- **"A curve can never cross its asymptote."** It can, for example a damped oscillation that overshoots and settles. The saturating curves used in ecology approach from one side, which is the case this note shows.
- **"Any flattening curve has the same formula."** Michaelis-Menten, monomolecular and Gompertz curves all flatten but approach the limit differently.

## Explain it back
- In y = ax/(b + x), what do a and b mean?
- Why is a straight line a bad model for a saturating process?

*Pass test:* you can read the asymptote and half-saturation point off a formula or graph.

## Connections
- **Builds on:** [[Nonlinear Function]]
- **Leads to:** [[Michaelis-Menten Function]], [[Logistic Function]], [[Carrying Capacity]]
- **Part of:** [[MOC - Basics from Zero]]

## Flashcards

What is an asymptote?
??
A level a curve approaches ever more closely as x grows, without settling exactly on it.
![[Asymptote.png]]
++++

In y = ax / (b + x), which parameter is the asymptote?
??
a. The parameter b is the x that gives half of a.
++++

Why do ecological responses often have asymptotes?
??
Something else becomes limiting, such as handling time, space or a probability's ceiling of 1.
++++
