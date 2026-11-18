---
type: moc
tags:
  - moc
  - landscape-remote-sensing
aliases:
  - "MOC - Landscape and Remote Sensing"
  - "Landscape and Remote Sensing"
status: seedling
---

# MOC 25 - Landscape and Remote Sensing

> [!tip] New to this?
> Start with [[MOC 19 - Ecology Vocabulary|MOC - Ecology from Zero]] if words like habitat, ecosystem or succession are new.

Birds respond not just to the spot where they stand but to what surrounds it: how much grass, how close the trees are, how big the open patch is. Landscape ecology studies that "surroundings" level. Remote sensing (satellite maps) is how the original study measured it at all 416 points at once. This cluster builds up to [[Spatial Covariance]], the habitat metric in my data release and a predictor in my final models, one step at a time. What each property looks like on the ground is summarised in [[Percent Cover]].

## 1. Thinking at the landscape level
- [[Landscape Ecology]]: why arrangement in space matters, not just amount
- [[Patch, Matrix and Corridor]]: the vocabulary for a map of grassland pieces in a sea of forest and farms
- [[Spatial Scale (Grain and Extent)]]: how big a cell and how big a study area
- [[Ecoregions]]: regions with similar geology, soils, climate and plants
- [[Mississippi Alluvial Valley]] and [[Arkansas River Valley]]: the two ecoregions my sites sit in

## 2. Seeing the land from above
- [[Remote Sensing]]: measuring the ground from satellites
- [[Pixels and Spatial Resolution]]: 30 m squares, and what that can and cannot show
- [[Percent Cover]]: how much of a pixel (or a 50 m circle) is grass, trees or scrub
- [[Plant Functional Groups]]: lumping plants by how they live (grass and forbs vs trees)
- [[Rangeland Analysis Platform]]: the satellite product the cover numbers come from
- [[Flood Masking]]: removing flooded pixels before measuring

## 3. Turning maps into a habitat metric
- [[Moving Window Analysis]]: a sliding square (3x3, 9x9, 27x27 pixels)
- [[Spatial Covariance]]: are grass and trees separated (a boundary), mixed, or is there no tree-grass contrast at all (a core, if the open ground is grass)?
- [[Regime Shifts and Spatial Early Warning Signals]]: the theory behind looking for boundaries

## Related molecular notes
- [[Why negative spatial covariance marks a tree-grass boundary]]
- [[Why the window size is a choice of scale]]
- [[Why grassland birds avoid trees]]

## Field measurements to compare with
[[Field vs Remote Vegetation Measures]] · [[Visual Obstruction (Robel Pole)]] · [[Tree Density and DBH]]

## Key sources
[[Roberts et al. 2025]] (method in the metadata) · [[Berry et al. 2026]] (results) · [[McGill 2013]]

## Related MOCs
[[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]] · [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]] · [[MOC 13 - Autocorrelation|MOC - Autocorrelation and GAMs]] · [[Start Here]]
