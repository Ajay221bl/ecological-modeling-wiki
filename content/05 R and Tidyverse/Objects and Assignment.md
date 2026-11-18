---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "An object is a named container holding something in R's memory, and assignment (`<-`) is how you put something into it."
aliases:
  - "Assignment"
  - "R Objects and Vectors"
  - "Assignment arrow"
  - "R Objects and Assignment"
  - "object"
  - "objects"
  - "<-"
status: seedling
---

# Objects and Assignment

Picture labelled jars in a pantry. `flour <- 500` puts 500 into a jar and sticks the label "flour" on it; later you ask for "flour" and get 500 back. An **object** is a named container holding something in R's memory, and **assignment**, the arrow `<-`, read as "gets", is how you put something into it. Everything in R is an object: a single number, a whole dataset, a fitted model, even a function. Typing an object's name retrieves its contents, and the environment pane in RStudio lists every object you have made (`ls()` does the same in code).

Three behaviours surprise beginners, and the code below shows all three. First, assignment prints nothing, because R assumes you are storing for later; type the name to see the value. Second, assigning to an existing name throws the old contents away without warning, so `mass <- 30` simply replaces 21.5. Third, objects are snapshots, not live formulas: `double_mass <- mass * 2` stored 43, and changing `mass` afterwards leaves `double_mass` at 43. R is not a spreadsheet, and dependent objects only update when you rerun the lines that create them.

Names are case-sensitive (`Mass` and `mass` are different objects) and cannot start with a number. You may see `=` used for assignment too; it works, but the convention is `<-` for storing objects and `=` for naming arguments inside function calls ([[Functions in R|Function Arguments]]). Objects are what every later step works on: [[Vectors in R]], a [[Data Frame]], or a function you write yourself ([[Writing Your Own Function]]).

```r
mass <- 21.5          # store
mass                  # retrieve: 21.5
double_mass <- mass * 2
mass <- 30            # overwrite
double_mass           # still 43: not recalculated
ls()                  # list the objects you have made
```
`double_mass` kept its old value because objects are snapshots, not live formulas.

## Connections
- **Builds on:** [[Console]]
- **Leads to:** [[Vectors in R]], [[Data Frame]], [[Writing Your Own Function]]
- **See also:** [[Variable]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does x <- 5 do?
??
It stores the value 5 in an object named x.
++++

If b <- a * 2 and then a changes, what happens to b?
??
Nothing. b keeps its old value until you rerun that line.
++++
