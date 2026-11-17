---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Assignment"
  - "R Objects and Vectors"
  - "Assignment arrow"
status: seedling
---

# Objects and Assignment

**In one line:** an object is a named container holding something in R's memory, and assignment (`<-`) is how you put something into it.

> [!info] Before this, it helps to know
> [[Console]] (where commands run) · [[Variable]] (a quantity with a name)

## The everyday picture
Labelled jars in a pantry. `flour <- 500` puts 500 in a jar and sticks the label "flour" on it. Later you ask for "flour" and get 500. Assign to the same label again and the old contents are thrown out without warning.

## Start from zero
1. **`name <- value` stores the value under the name.** Read `<-` as "gets".
2. **Typing the name retrieves it.**
3. **Nothing prints when you assign.** *Why:* R assumes you're storing for later. Type the name to see it.
4. **Objects aren't linked.** If `b <- a * 2` and you later change `a`, `b` stays as it was.
5. **Names are case-sensitive and can't start with a number.** `Mass` and `mass` are different objects.
6. **Everything is an object.** Numbers, datasets, fitted models, even functions.

## In R
```r
mass <- 21.5          # store
mass                  # retrieve: 21.5
double_mass <- mass * 2
mass <- 30            # overwrite
double_mass           # still 43: not recalculated
ls()                  # list the objects you have made
```
`double_mass` kept its old value because objects are snapshots, not live formulas.

## Common confusions
- **"= and <- differ a lot."** For assignment both work. Convention is `<-`, keeping `=` for arguments inside functions.
- **"R updates dependent objects like a spreadsheet."** It doesn't. Rerun the lines that depend on what you changed.

## Explain it back
- What happens to `b` when you change `a` after `b <- a + 1`?
- Why does `mass <- 30` print nothing?

*Pass test:* you can create, inspect and overwrite an object and predict what dependent objects hold.

## Connections
- **Builds on:** [[Console]]
- **Leads to:** [[Vectors in R]], [[Data Frame]], [[Writing Your Own Function]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does x <- 5 do?
??
It stores the value 5 in an object named x.
++++

If b <- a * 2 and then a changes, what happens to b?
??
Nothing. b keeps its old value until you rerun that line.
++++
