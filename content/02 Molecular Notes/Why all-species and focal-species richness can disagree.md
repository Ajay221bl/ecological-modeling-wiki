---
type: molecular
tags:
  - molecular
  - grassland-ecology
  - community-ecology
  - flashcards/eco/why
aliases:
  - "All-species vs focal richness"
  - "Focal richness vs total richness"
status: seedling
---

# Why all-species and focal-species richness can disagree
> [!summary] In plain words
> Counting every species and counting only grassland specialists are two different questions. Edges, where field meets woods, collect birds from both sides, so they score high on all-species richness while holding few grassland specialists. In my data the two rankings nearly flip: Bald Knob has the lowest all-species richness but the highest focal richness, and Camp Robinson the reverse. A rise in total species can be bad news for grassland birds.

## The question
If intact grassland is what declining grassland birds need, why does the site with the highest richness (CR) have the fewest grassland focal species, and what should I model?

## Built from
- [[Species Richness]]: the count of species detected at a point-visit.
- [[Focal Species]]: the six declining grassland birds the original study tracked.
- [[Grassland Specialists vs Generalists]]: why some species need open grass and others thrive anywhere.
- [[Edge Effects]]: why boundaries mix species from two habitats.
- [[Biodiversity]]: richness is only one view of diversity.
- [[Correlation vs Causation]] and [[Confounding]]: why a site-level pattern is not proof of a mechanism.

## The reasoning, step by step
1. **Richness counts names, not which names.** A meadowlark and a crow each add 1.
2. **Most species are not grassland specialists.** Eastern North America's bird list is dominated by forest, shrub and edge species. Only a few dozen are true grassland birds ([[Grassland Bird Decline]]).
3. **Edges add species from both sides.** Stand where a hayfield meets a hedge and woods: you hear woodland birds behind you, shrub birds in the hedge and perhaps a grassland bird in front. Stand in the middle of a big field and you hear mainly the grassland birds.
4. **A tiny example.** Two made-up point-visits:

   | Point | Species detected | All-species | Focal |
   |---|---|---|---|
   | Edge | INBU, NOCA, YBCH, COYE, TUTI, FISP, AMCR | 7 | 0 |
   | Core | DICK, EAME, NOBO, RWBL | 4 | 3 |

   The edge "wins" on richness and loses on grassland birds.
5. **So the two measures can point in opposite directions** along the same habitat gradient. Fragmenting a grassland can raise total richness while removing the specialists.

## So in my project
The raw numbers show exactly this ([[EDA Findings]]; all 416 points, ground-detection filter; the 376 model points give the same order, see [[Preliminary Results]]):

| Site | All-species mean richness | Focal species per point-visit |
|---|---|---|
| BK | 4.73 (lowest) | 0.98 (highest) |
| HO | 5.53 | 0.57 |
| DC | 6.54 | 0.39 |
| HB | 6.62 | 0.30 |
| CR | 7.84 (highest) | 0.28 (lowest) |

- The most frequently detected species (point-visits) are generalists and edge birds: Indigo Bunting 863, Northern Cardinal 685, Red-winged Blackbird 501, American Crow 481, Yellow-breasted Chat 466, Common Yellowthroat 366, Tufted Titmouse 350. Dickcissel, the commonest focal species, comes next with 331.
- All-species richness is higher near edges (Spearman -0.41 with 27x27 [[Spatial Covariance]]: more negative covariance, more species). Focal richness is higher near zero covariance (+0.26 with the 3x3 value).
- CR has the most negative site median covariance (-41.0) and BK the least negative (0.0) ([[Why negative spatial covariance marks a tree-grass boundary]]). CR is also the most wooded property (woodland 40% plus forest 10% within 50 m), which fits an edge effect on all-species richness.
- BK's high focal number does **not** make it an intact grassland core. Its points are open and treeless, but about 42% of the ground near them is soybean or rice ([[Percent Cover]]). Its focal score is driven by [[Dickcissel]] (158 visits) and [[Eastern Meadowlark]] (73 visits), two species that use open grass and farm mosaics. Near-zero covariance at BK means "no tree-grass boundary", not "grassland".

Consequences for my plan:
- The Sep 10 proposal's H1 said less fragmented places have higher richness. For all-species richness the data lean the **other way**. The final proposal (Oct 12) builds this in: its H2 predicts all-species richness higher at tree-grass edges and with more tree cover, but focal richness higher in cores (spatial covariance near zero or slightly positive) and lower with more tree cover ([[Hypotheses]], [[Analysis Plan]]).
- Focal-species richness (0 to 3 of the six focal species per visit) is a **secondary response**, fit with the same candidate models, so both stories get told.
- **The models agree (Oct 13).** After property and weather are accounted for, all-species richness is about 7% higher per SD of more negative spatial covariance (toward edges, 65.61 ha), while focal richness is about 45% lower per SD of tree cover and about 17% higher per SD of covariance (toward cores, 0.81 ha). One part did not match: tree cover had no clear effect on all-species richness. Even the best spatial scale differs between the two responses ([[Preliminary Results]]).
- These are site-level patterns with only five sites, and site is fully tied to year ([[Why site and year cannot be separated]]). Detection differences, roadside share ([[Roadside Surveys]]) and land use all differ too.

## What would go wrong otherwise
- Reporting only all-species richness could make fragmentation look **good** for birds, the opposite of the conservation message about declining grassland species.
- Reading CR's high richness as "best grassland" would misdirect management toward edges. Reading BK's high focal richness as "best grassland" would make the opposite mistake, since much of BK is cropland.
- Treating focal richness as the only response would ignore the real, broader community my data describe. Both are true; they answer different questions.

## Connections
- **Related:** [[Why richness instead of single-species counts]], [[Why grassland birds avoid trees]], [[Why observed richness is not true richness]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]

## Flashcards

Why do edges score high on all-species richness but low on focal richness?::They collect birds from both the grassland and the woods, but few grassland specialists.

Which two sites show the two rankings nearly flipping?
??
Bald Knob has the lowest all-species richness but the highest focal richness; Camp Robinson has the highest all-species richness but among the lowest focal richness.
++++
