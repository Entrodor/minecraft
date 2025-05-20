ServerEvents.recipes(event =>{

    event.remove({id: "waystones:warp_stone"})
    event.remove({id: "waystones:warp_dust"})
    
    event.shaped("waystones:warp_stone", ['ABA', 'BCB', 'ABA'], {
        A: "ars_nouveau:source_gem_block",
        B: "silentgear:tyrian_steel_ingot",
        C: "mekanism:teleportation_core"
    })
    event.shapeless("4x waystones:warp_dust", ["mekanism:teleportation_core", "minecraft:amethyst_shard"])
}
)