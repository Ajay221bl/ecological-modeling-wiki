---
type: atomic
tags:
  - ecology-basics
  - flashcards
aliases:
  - "species"
  - "scientific name"
  - "scientific names"
  - "Latin name"
  - "binomial name"
status: seedling
---

# Species and Scientific Names
**In one line:** A species is a kind of organism whose members can breed with each other, and its scientific name is a two-part label (genus plus species) that means the same thing to everyone, everywhere.

> [!info] Before this, it helps to know
> [[Ecology]] (why we sort living things at all) · [[Levels of Ecological Organization]] (species sit just above the individual)

## Start from zero
Say "robin" in London and you mean a small orange-breasted bird. Say it in Arkansas and you mean a much bigger thrush. Same word, two different birds. Common names change between countries, languages and even regions.

Scientists fix this with **scientific names**. Every species gets two words, written in italics:
- The first word is the **genus** (plural *genera*): a group of close relatives. It starts with a capital letter.
- The second is the **species epithet**: the name of this particular kind within the genus. It is lowercase.

So the Eastern Meadowlark is *Sturnella magna*. The pair is unique; no other animal has it. This two-name system goes back to Carl Linnaeus in the 1700s.

What is a **species**? The everyday working definition: a group whose members can mate and produce fertile young with each other but not (usually) with other groups. Roughly true for birds; the full story has messy edge cases (hybrids, plants, bacteria), but it works well for my six focal birds.

## Why it exists
1. **No confusion.** A paper written in Spanish or Chinese still says *Lanius ludovicianus*, so everyone knows it means the Loggerhead Shrike.
2. **The name shows family ties.** Names sit inside a ladder of bigger groups: kingdom, phylum, class, order, family, genus, species. Two birds in the same genus are close cousins, which often means they live and feed in similar ways.
3. **Counting needs clear categories.** [[Species Richness]] is "how many different species". You can only count that if everyone agrees where one species ends and another begins.

## A tiny example
My six focal species, with the groups the USGS metadata lists for them ([[Roberts et al. 2025]]):

| Common name | Code | Scientific name | Family |
|---|---|---|---|
| Northern Bobwhite | NOBO | *Colinus virginianus* | Odontophoridae (New World quails) |
| Dickcissel | DICK | *Spiza americana* | Cardinalidae (cardinals and grosbeaks) |
| Eastern Meadowlark | EAME | *Sturnella magna* | Icteridae (blackbirds and orioles) |
| Scissor-tailed Flycatcher | STFL | *Tyrannus forficatus* | Tyrannidae (tyrant flycatchers) |
| Eastern Kingbird | EAKI | *Tyrannus tyrannus* | Tyrannidae (tyrant flycatchers) |
| Loggerhead Shrike | LOSH | *Lanius ludovicianus* | Laniidae (shrikes) |

Notice two things:
- **Same genus:** the Scissor-tailed Flycatcher and Eastern Kingbird are both *Tyrannus*. They are close relatives that both sit on perches and dart out to catch flying insects.
- **Surprising relatives:** the Eastern Meadowlark is not a lark at all. It is in the blackbird family. Common names can mislead; scientific names do not.

## In my project
- My data record birds by **four-letter codes** (DICK, NOBO and so on), a birders' shorthand built from the common name ([[Four-Letter Species Codes]]). The data have 89 species in total.
- Because richness counts distinct codes, a typo or stray space would create a fake extra "species". That is why codes are trimmed with [[str_trim()]] before counting.
- [[Berry et al. 2026]] picked six species, not because they are related (they come from five families), but because they share a way of life: all depend on grassland ([[Focal Species]], [[Ecological Niche]]).

## Common confusions
- **"Species = breed."** Dog breeds are all one species (*Canis familiaris*). Breeds and subspecies are smaller groupings inside a species.
- **"Same genus = same species."** No. *Tyrannus forficatus* and *Tyrannus tyrannus* are separate species that do not normally interbreed.
- **Writing it wrong.** Genus capitalised, epithet lowercase, both italic: *Spiza americana*, not *Spiza Americana*.
- **"Similar looking means related."** Meadowlarks and true larks look alike but are not close relatives.

## Connections
- **Builds on:** [[Ecology]], [[Levels of Ecological Organization]]
- **Leads to:** [[Population]], [[Four-Letter Species Codes]], [[Species Richness]], [[Focal Species]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology from Zero]]
- **Go deeper:** [[Roberts et al. 2025]] (the metadata lists the full classification for each focal species)

> [!question]- Check yourself
> The Scissor-tailed Flycatcher is *Tyrannus forficatus* and the Eastern Kingbird is *Tyrannus tyrannus*. What does the shared first word tell you?
> ?
> They are in the same genus, so they are close relatives. That usually means similar body plans and habits; here, both are perch-and-sally insect catchers in the tyrant flycatcher family.
