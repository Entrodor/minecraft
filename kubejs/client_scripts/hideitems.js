RecipeViewerEvents.removeEntries('item', event => {

// Hide Huge Curvy Pipes, cos they're unused by us.
    event.remove("curvy_pipes:huge_fluid_pipe")
    event.remove("curvy_pipes:huge_energy_pipe")
    event.remove("curvy_pipes:huge_item_pipe")
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
// Remove unused Mystical Seeds and Essence    
    const seeds = [
        "rubber", "saltpeter", "apatite", "graphite", "grains_of_infinity", "mystical_flower", "marble", "basalt", "menril", "blizz", "blitz", "basalz", "amethyst_bronze", "slimesteel", "pig_iron",
        "copper_alloy", "redstone_alloy", "conductive_alloy", "manasteel", "steeleaf", "ironwood", "aquamarine", "quartz_enriched_iron", "signalum", "lumium", "flux_infused_ingot", "cobalt", "rose_gold",
        "soularium", "dark_steel", "pulsating_alloy", "energetic_alloy", "elementium", "knightmetal", "fiery_ingot", "starmetal", "compressed_iron", "enderium", "flux_infused_gem", "manyullyn", "queens_slime",
        "hepatizon", "vibrant_alloy", "end_steel", "terrasteel", "rock_crystal", "draconium", "yellorium", "cyanite", "gaia_spirit", "awakened_draconium", "neutronium"
    ]
    seeds.forEach(seed => {
        event.remove(`mysticalagriculture:${seed}_seeds`)
        event.remove(`mysticalagriculture:${seed}_essence`)
    })
})