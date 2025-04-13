RecipeViewerEvents.removeEntries('item', event => {
//Hide Chisels and Bits bits from EMI
    event.remove("chiselsandbits:block_bit")
// Hide Huge Curvy Pipes, cos they're unused by us.
    event.remove("curvy_pipes:huge_fluid_pipe")
    event.remove("curvy_pipes:huge_energy_pipe")
    event.remove("curvy_pipes:huge_item_pipe")
//Angel Ring
    event.remove('modular_angelring:mining_module')
    event.remove('modular_angelring:magnet_module')
})
    
RecipeViewerEvents.removeEntriesCompletely('item', event => {
// Remove unused All The Compressed blocks
    for(let i=1; i < 10; i++){
        event.remove(`allthecompressed:atm_star_block_${i}x`)
        event.remove(`allthecompressed:greg_star_block_${i}x`)
        event.remove(`allthecompressed:ender_pearl_block_${i}x`)
        event.remove(`allthecompressed:nether_star_block_${i}x`)
        event.remove(`allthecompressed:sky_steel_block_${i}x`)
        event.remove(`allthecompressed:sky_bronze_block_${i}x`)
        event.remove(`allthecompressed:sky_osmium_block_${i}x`)
        event.remove(`allthecompressed:copper_alloy_block_${i}x`)
        event.remove(`allthecompressed:energetic_alloy_block_${i}x`)
        event.remove(`allthecompressed:vibrant_alloy_block_${i}x`)
        event.remove(`allthecompressed:redstone_alloy_block_${i}x`)
        event.remove(`allthecompressed:dark_steel_block_${i}x`)
        event.remove(`allthecompressed:soularium_block_${i}x`)
        event.remove(`allthecompressed:end_steel_block_${i}x`)
        event.remove(`allthecompressed:compressed_iron_block_${i}x`)
        event.remove(`allthecompressed:pulsating_alloy_block_${i}x`)
    }   
// Remove unused Mystical Seeds, Essences and Cruxs  
    const seeds = [
        "rubber", "saltpeter", "apatite", "graphite", "grains_of_infinity", "mystical_flower", "marble", "basalt", "menril", "blizz", "blitz", "basalz", "amethyst_bronze", "slimesteel", "pig_iron",
        "copper_alloy", "redstone_alloy", "conductive_alloy", "manasteel", "steeleaf", "ironwood", "aquamarine", "quartz_enriched_iron", "flux_infused_ingot", "cobalt", "rose_gold",
        "soularium", "dark_steel", "pulsating_alloy", "energetic_alloy", "elementium", "knightmetal", "fiery_ingot", "starmetal", "compressed_iron", "flux_infused_gem", "manyullyn", "queens_slime",
        "hepatizon", "vibrant_alloy", "end_steel", "terrasteel", "rock_crystal", "draconium", "yellorium", "cyanite", "gaia_spirit", "awakened_draconium", "neutronium"
    ]
    const cruxs = ["gaia_spirit", "awakened_draconium", "neutronium"]
    const agglo = ["mystical_flower"]
    seeds.forEach(seed => {
        event.remove(`mysticalagriculture:${seed}_seeds`)
        event.remove(`mysticalagriculture:${seed}_essence`)
    })
    cruxs.forEach(crux => {
        event.remove(`mysticalaggraditions:${crux}_crux`)
    })
    agglo.forEach(agglomeratio => {
        event.remove(`mysticalagriculture:${agglomeratio}_agglomeratio`)
    })
// Hide flying potions/charms
    event.remove(Item.of(`minecraft:potion[potion_contents={potion:"apothic_attributes:flying"}]`))
    event.remove(Item.of(`minecraft:lingering_potion[potion_contents={potion:"apothic_attributes:flying"}]`))
    event.remove(Item.of(`minecraft:splash_potion[potion_contents={potion:"apothic_attributes:flying"}]`))
    event.remove(Item.of(`minecraft:tipped_arrow[potion_contents={potion:"apothic_attributes:flying"}]`))
    event.remove(Item.of(`apotheosis:potion_charm[potion_contents={potion:"apothic_attributes:flying"}]`))
    event.remove(Item.of(`immersiveengineering:potion_bucket[potion_contents={potion:"apothic_attributes:flying"}]`))

    event.remove(Item.of(`minecraft:potion[potion_contents={potion:"apothic_attributes:long_flying"}]`))
    event.remove(Item.of(`minecraft:lingering_potion[potion_contents={potion:"apothic_attributes:long_flying"}]`))
    event.remove(Item.of(`minecraft:splash_potion[potion_contents={potion:"apothic_attributes:long_flying"}]`))
    event.remove(Item.of(`minecraft:tipped_arrow[potion_contents={potion:"apothic_attributes:long_flying"}]`))
    event.remove(Item.of(`apotheosis:potion_charm[potion_contents={potion:"apothic_attributes:long_flying"}]`))
    event.remove(Item.of(`immersiveengineering:potion_bucket[potion_contents={potion:"apothic_attributes:long_flying"}]`))
    
    event.remove(Item.of(`minecraft:potion[potion_contents={potion:"apothic_attributes:extra_long_flying"}]`))
    event.remove(Item.of(`minecraft:lingering_potion[potion_contents={potion:"apothic_attributes:extra_long_flying"}]`))
    event.remove(Item.of(`minecraft:splash_potion[potion_contents={potion:"apothic_attributes:extra_long_flying"}]`))
    event.remove(Item.of(`minecraft:tipped_arrow[potion_contents={potion:"apothic_attributes:extra_long_flying"}]`))
    event.remove(Item.of(`apotheosis:potion_charm[potion_contents={potion:"apothic_attributes:extra_long_flying"}]`))
    event.remove(Item.of(`immersiveengineering:potion_bucket[potion_contents={potion:"apothic_attributes:extra_long_flying"}]`))
})