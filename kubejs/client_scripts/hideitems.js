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

})