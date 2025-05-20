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
// Messy code, makes it so only allthemodium tools can break waystones. wont support silent gear tools made with allthemodium resources.
BlockEvents.broken(event => {
    if (event.player.getMainHandItem().id == 'allthemodium:allthemodium_pickaxe' && event.block.hasTag("waystones:waystones")) {return}
    else if (event.player.getMainHandItem().id == 'allthemodium:vibranium_pickaxe' && event.block.hasTag("waystones:waystones")) {return}
    else if (event.player.getMainHandItem().id == 'allthemodium:unobtainium_pickaxe' && event.block.hasTag("waystones:waystones")) {return}
    else if (event.player.getMainHandItem().id == 'allthemodium:alloy_pick' && event.block.hasTag("waystones:waystones")) {return}
    else if (event.player.getMainHandItem().id == 'allthemodium:alloy_paxel' && event.block.hasTag("waystones:waystones")) {return}
    else {event.cancel()}
})
