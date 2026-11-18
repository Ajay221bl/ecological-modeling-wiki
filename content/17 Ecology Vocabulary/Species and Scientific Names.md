---
type: atomic
tags:
  - ecology-basics
  - flashcards/eco/ecology
description: "A species is a kind of organism whose members can breed with each other, and its scientific name is a two-part label (genus plus species) that means the same thing to everyone, everywhere."
aliases:
  - "species"
  - "scientific name"
  - "scientific names"
  - "Latin name"
  - "binomial name"
status: seedling
---

# Species and Scientific Names

Say "robin" in London and you mean a small orange-breasted bird; say it in Arkansas and you mean a much bigger thrush. Common names change between countries, languages and even regions. A **species** is a kind of organism whose members can mate and produce fertile young with each other but not, usually, with other groups (roughly true for birds; hybrids, plants and bacteria are messier). Its **scientific name** is a two-word label, written in italics, that means the same thing everywhere: the first word is the *genus* (plural genera), a group of close relatives, capitalised; the second is the *species epithet*, the name of this kind within the genus, lowercase. The [[Eastern Meadowlark]] is *Sturnella magna*, and no other animal has that pair. The system goes back to Carl Linnaeus in the 1700s. Species sit one step above the individual in the [[Levels of Ecological Organization]], and sorting living things into kinds is where [[Ecology]] starts.

| Common name | Code | Scientific name | Family |
|---|---|---|---|
| Northern Bobwhite | NOBO | *Colinus virginianus* | Odontophoridae (New World quails) |
| Dickcissel | DICK | *Spiza americana* | Cardinalidae (cardinals and grosbeaks) |
| Eastern Meadowlark | EAME | *Sturnella magna* | Icteridae (blackbirds and orioles) |
| Scissor-tailed Flycatcher | STFL | *Tyrannus forficatus* | Tyrannidae (tyrant flycatchers) |
| Eastern Kingbird | EAKI | *Tyrannus tyrannus* | Tyrannidae (tyrant flycatchers) |
| Loggerhead Shrike | LOSH | *Lanius ludovicianus* | Laniidae (shrikes) |

*What to look at:* the six [[Focal Species]] of the grassland bird project, with the groups the USGS metadata list ([[Roberts et al. 2025]]). Why bother with Latin? First, no confusion: a paper in Spanish or Chinese still says *[[Loggerhead Shrike|Lanius ludovicianus]]*, so everyone knows it is the Loggerhead Shrike. Second, the name shows family ties, because names sit inside a ladder of bigger groups (kingdom, phylum, class, order, family, genus, species). The [[Scissor-tailed Flycatcher]] and [[Eastern Kingbird]] are both *Tyrannus*, close relatives that both sit on perches and dart out for flying insects, while the Eastern Meadowlark is not a lark at all but in the blackbird family: common names can mislead, scientific names do not. Third, counting needs clear categories: [[Species Richness]], how many different species are present, only works if everyone agrees where one species ends and the next begins.

Four confusions. A species is not a breed: dog breeds are all one species (*Canis familiaris*), and breeds and subspecies are groupings inside a species. Same genus is not same species: *Tyrannus forficatus* and *Tyrannus tyrannus* do not normally interbreed. Write it right: genus capitalised, epithet lowercase, both italic, *[[Dickcissel|Spiza americana]]*, not *Spiza Americana*. And similar looks do not mean relatives, as meadowlarks and true larks show. The project data record birds by [[Four-Letter Species Codes]] (DICK, [[Northern Bobwhite|NOBO]] and so on), a birders' shorthand built from the common name, across 89 species. Because richness counts distinct codes, a typo or stray space would create a fake extra "species", which is why codes are trimmed with [[str_trim()]] (an R function that removes leading and trailing spaces) before counting. [[Berry et al. 2026]] chose its six species not because they are related (they come from five families) but because they share a way of life, all depending on grassland ([[Ecological Niche]]).

## Connections
- **Builds on:** [[Ecology]], [[Levels of Ecological Organization]]
- **Leads to:** [[Focal Species]], [[Species Richness]], [[Four-Letter Species Codes]], [[str_trim()]], [[Ecological Niche]], [[Biological Population|population]], [[Eastern Meadowlark]], [[Loggerhead Shrike]], [[Scissor-tailed Flycatcher]], [[Eastern Kingbird]], [[Dickcissel]], [[Northern Bobwhite]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]
- **Go deeper:** [[Roberts et al. 2025]], [[Berry et al. 2026]]

## Flashcards

The Scissor-tailed Flycatcher is *Tyrannus forficatus* and the Eastern Kingbird is *Tyrannus tyrannus*. What does the shared first word tell you?
??
They are in the same genus, so they are close relatives. That usually means similar body plans and habits; here, both are perch-and-sally insect catchers in the tyrant flycatcher family.
++++

Why does a stray space in a species code matter for species richness?::Richness counts distinct codes, so "DICK " and "DICK" would be counted as two species.
