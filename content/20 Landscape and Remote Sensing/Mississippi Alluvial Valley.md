---
type: atomic
tags: [landscape-remote-sensing, flashcards]
aliases: ["MAV", "Arkansas Delta", "Mississippi Alluvial Plain", "Lower Mississippi Alluvial Valley"]
status: seedling
---

# Mississippi Alluvial Valley
**In one line:** The wide, flat floodplain of the lower Mississippi River, built from river mud over thousands of years, which "contains wetlands and swamps and spans the entire eastern border of Arkansas".

> [!info] Before this, it helps to know
> [[Ecoregions]] (what an ecoregion is) · [[Disturbance]] (floods are a natural disturbance here)

## Start from zero
Pour muddy water across a tray and let it dry. The mud settles into a flat, smooth layer. Now do that every spring for thousands of years with the Mississippi River. That is how this land was made. **Alluvial** means "laid down by flowing water".

The result, often called "the Delta" in Arkansas, is some of the flattest land in North America. Rivers wander across it, leaving oxbow lakes (old river bends cut off from the channel) and swamps. Soils are deep, often heavy clay that holds water.

## Why it matters ecologically
**What it used to be.** Before large-scale farming, most of the valley was **bottomland hardwood forest**: oaks, sweetgum, hickories and bald cypress, adapted to being flooded for weeks each spring. Floods were the main [[Disturbance]], resetting patches, depositing new soil and creating wetlands.

**What it is now.** Most of that forest was cleared for agriculture, especially soybeans, rice and cotton, and levees and drainage now hold back much of the flooding. The forest that remains is often in refuges and along rivers ([[Land-Use Change and Agriculture]]).

**Grasslands here are unusual.** This is a forest region. Native prairies did exist, most famously the Grand Prairie on higher, older terraces between the White and Arkansas Rivers, but most were ploughed for rice. So grassland in the Delta today is mostly small, restored or managed patches in a matrix of crops and forest ([[Patch, Matrix and Corridor]]).

**Water and waterfowl.** The valley is a famous wintering area for ducks and geese; many refuges and farms flood fields to feed them, and spring floods can linger into early summer.

## A tiny example
Why does flatness make flooding last? Picture two fields, each receiving 10 cm of rain:
- A hillside field with a 5% slope drops 5 m over 100 m. The water runs off within hours.
- A Delta field might drop only a few centimetres over 100 m, and its clay soil soaks up water slowly. Water can sit for days or weeks.

Same rain, very different outcome, and a real problem for the satellite measures in this project.

## In my project
The five sites lie "across the Mississippi Alluvial Valley and the Arkansas River Valley" ([[Roberts et al. 2025]]). The metadata does not say which site is in which, so treat any site-by-site link to this ecoregion as provisional (see the box below). Two features of the data clearly reflect a flood-prone landscape:
- **Flooded grid points.** The survey grid was laid out 400 m apart, and points that could not be reached because of flooding were removed ([[Systematic Grid Sampling]]).
- **The flood mask.** Because sites "were often partially flooded into early summer", flooded pixels were masked out using Dynamic World, leaving spatial covariance NA at 39 points ([[Flood Masking]]).

BK fits the picture of open Delta farm-and-refuge land, whichever ecoregion it is finally placed in. About 42% of the ground near its points is soybean or rice ([[Percent Cover]]). It has the highest mean number of focal species per point-visit (0.99 on the 376 model points), a site median 3x3 spatial covariance of 0.0, 158 of the 331 [[Dickcissel]] point-visits and 73 of the 90 [[Eastern Meadowlark]] point-visits. Yet it has the *lowest* all-species richness (4.73), because forest and edge birds are scarce ([[Why all-species and focal-species richness can disagree]]). Its near-zero covariance means open and treeless, much of it cropland, not intact grassland core. In the Oct 13 top model it is the reference property: the others have 1.08 to 1.40 times its all-species richness but only 0.43 to 0.76 times its focal richness, even after habitat ([[Preliminary Results]]).

> [!warning] Verify
> - Which site sits in which ecoregion is not stated in the metadata; see [[Ecoregions]]. Per-site management is listed in [[Study Sites]].
> - The EPA's official Level III name is, from memory, "Mississippi Alluvial Plain". The share of original bottomland forest cleared (often quoted as roughly three quarters or more) and the Grand Prairie details come from general knowledge, not the project sources.

## Common confusions
- **"Delta" means the river mouth in Louisiana.** In Arkansas and Mississippi, "the Delta" is the local name for this whole alluvial plain.
- **"Floodplain grassland is like Great Plains prairie."** Climate, soils, flooding and surrounding forest all differ.
- **"Flooding is just a nuisance."** It is the natural process that built and shaped the region; here it also complicates the data.

## Connections
- **Builds on:** [[Ecoregions]], [[Disturbance]], [[Ecosystem]]
- **Leads to:** [[Flood Masking]], [[Study Sites]], [[Arkansas River Valley]]
- **Part of:** [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
- **Go deeper:** [[Roberts et al. 2025]] (study area description)

> [!question]- Check yourself
> Name two ways the Mississippi Alluvial Valley's landscape left marks in the project's data.
> ?
> Flooded grid points that could not be reached were removed from the survey, and a flood mask set spatial covariance to NA at 39 points where pixels were usually water or flooded vegetation in June.
