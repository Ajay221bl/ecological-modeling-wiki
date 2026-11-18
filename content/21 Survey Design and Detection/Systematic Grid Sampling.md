---
type: atomic
tags:
  - survey-design
  - study-design
  - flashcards
aliases:
  - "grid sampling"
  - "systematic sampling"
  - "survey grid"
  - "grid points"
status: seedling
---

# Systematic Grid Sampling
**In one line:** Placing survey points on an evenly spaced grid laid over the whole area, with the grid's starting corner chosen at random, so no person decides which spots get surveyed.

> [!info] Before this, it helps to know
> [[Sample vs Population]] (a few points stand in for the whole site) · [[Point Count Survey]] (what happens at each point)

## Start from zero
Imagine you must count birds on a big farm, but you only have time for 30 stops. Where do you stand?

The tempting answer is "where the birds are", or "near the gate", or "along the nice mowed path". Each of those choices quietly tilts the result. Birders love standing where birds are easy to find. The farm as a whole is not like that.

A grid removes the choice. Draw a sheet of graph paper over the map, with lines every 400 m. Every place where two lines cross becomes a survey point. To stop even the grid from being "chosen", drop the first corner at a random spot. After that, everything else follows from the spacing.

"Systematic" means "by a fixed rule". The randomness lives in one place only: where the grid starts.

## Why it exists
It solves three problems at once.

1. **Hidden bias.** People pick spots that feel good. A grid makes every part of the site equally likely to get a point, so the [[Sample vs Population|sample]] represents the site.
2. **Even coverage.** Pure random points can bunch up by chance and leave big gaps. A grid spreads points evenly, so wet corners, tree lines and open middles all get visited in proportion to their area.
3. **Double counting.** If two points sit 50 m apart, the same singing Dickcissel lands on both lists. Spacing points far apart keeps each point's birds mostly its own. This helps the [[Independence Assumption]], although it never fully guarantees it ([[Spatial Autocorrelation]]).

## A tiny example
A square site 1,200 m on each side, with points every 400 m:

| Step | What happens |
|---|---|
| 1 | Pick a random start, say 130 m east and 270 m north of the corner |
| 2 | Add points every 400 m east and north from there |
| 3 | That gives 3 columns x 3 rows = 9 points |
| 4 | One point lands in a flooded slough, so it is dropped |
| 5 | 8 points are surveyed |

Step 4 is the catch. Dropping points is honest, but it means the wettest places are never sampled. The grid now represents "the reachable part of the site", not the whole site.

## In my project
The data release describes exactly this design ([[Roberts et al. 2025]]):
- At each site, points were laid out on a grid **400 m apart**, with the grid anchored at a **random location**.
- Grid points that could not be reached because of **flooding** were removed.
- Each site also had **roadside points** around its edge, also 400 m apart ([[Roadside Surveys]]).
- Each point was sampled 3 times ([[Repeat-Visit Design]]).

My bird file has **416 points** (the metadata says 424). Of these, 238 are roadside points and 178 are grid points inside the sites. Camp Robinson (CR) is the only site with no roadside points at all.

Why 400 m? The focal-species analysis used birds within 100 m ([[Distance Bands]]). Two 100 m circles around points 400 m apart are 200 m apart at their nearest edges, so they never overlap. Loud birds heard out to 400 m can still be counted at two neighbouring points, which is one more reason the far band is used cautiously.

The removed flooded points connect to a bigger theme: these sites sit in river lowlands that flood into early summer ([[Mississippi Alluvial Valley]], [[Flood Masking]]).

## Common confusions
- **"Systematic means not random."** The random start makes it a random sample of possible grids; only the spacing is fixed.
- **"A grid makes points independent."** It reduces overlap, but nearby points still share weather, habitat and observers ([[Spatial Autocorrelation]]).
- **"Grid points and roadside points are the same kind of sample."** No: roadside points sit on a different rule (along roads), so they may see different birds.
- **"Dropping unreachable points is harmless."** It can bias results if the dropped places differ, here the wettest ground.

## Connections
- **Builds on:** [[Sample vs Population]], [[Point Count Survey]], [[Sampling Unit]]
- **Leads to:** [[Roadside Surveys]], [[Spatial Autocorrelation]], [[Repeat-Visit Design]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Roberts et al. 2025]] (the data release metadata), [[Hurlbert 1984]] (why the layout of samples matters)

> [!question]- Check yourself
> Why anchor the grid at a random spot instead of at the site's gate?
> ?
> If a person picks the anchor, every point inherits that choice (for example, all points near access roads). A random anchor means no one decides where points fall, so the grid is a fair sample of the site.
