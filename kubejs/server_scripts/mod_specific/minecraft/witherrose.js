ServerEvents.recipes(event => {
    event.shaped('minecraft:wither_rose', ['ABA', 'BCB', 'ABA'], {
        A: 'mysticalagriculture:wither_skeleton_essence',
        B: 'minecraft:rose_bush',
        C: 'mysticalagriculture:nether_star_essence'
    })
})